import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send order form submissions via email
    Args: event with httpMethod, body containing name, email, phone, message
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        name = body_data.get('name', '')
        email = body_data.get('email', '')
        phone = body_data.get('phone', '')
        message = body_data.get('message', '')
        subject = body_data.get('subject', '')
        
        if not all([name, email, phone]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Name, email, and phone are required'}),
                'isBase64Encoded': False
            }
        
        smtp_host = 'smtp.mail.ru'
        smtp_port = 587
        smtp_user = os.environ.get('EMAIL_USER')
        smtp_password = os.environ.get('EMAIL_PASSWORD')
        email_to = smtp_user
        
        if not smtp_user or not smtp_password:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP credentials not configured'}),
                'isBase64Encoded': False
            }
        
        product_name = None
        if subject and 'Запрос цены:' in subject:
            product_name = subject.replace('Запрос цены:', '').strip()
        
        database_url = os.environ.get('DATABASE_URL')
        if database_url and product_name:
            try:
                conn = psycopg2.connect(database_url)
                cur = conn.cursor()
                cur.execute(
                    "INSERT INTO product_requests (product_name, customer_name, customer_email, customer_phone, message) VALUES (%s, %s, %s, %s, %s)",
                    (product_name, name, email, phone, message or '')
                )
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                pass
        
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = email_to
        
        if subject:
            msg['Subject'] = subject
        else:
            msg['Subject'] = f'Новая заявка с сайта многостендов.рф от {name}'
        
        body_text = f"""
Новая заявка с сайта многостендов.рф

Имя: {name}
Email: {email}
Телефон: {phone}

Сообщение:
{message if message else '(нет комментария)'}
"""
        
        msg.attach(MIMEText(body_text, 'plain', 'utf-8'))
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Email sent successfully'}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }