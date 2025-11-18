import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleCalculatorMessage = (event: CustomEvent) => {
      setFormData(prev => ({ ...prev, message: event.detail.message }));
    };

    window.addEventListener('calculatorMessage' as any, handleCalculatorMessage);
    return () => {
      window.removeEventListener('calculatorMessage' as any, handleCalculatorMessage);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://functions.poehali.dev/703cd412-15d0-44b2-b370-dff8f8271320', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Заказать стенд
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Оставьте заявку, и мы свяжемся с вами в течение рабочего дня
        </p>
        
        <Card className="shadow-xl border-none">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">
                  Ваше имя
                </label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">
                  Телефон
                </label>
                <Input 
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary">
                  Описание проекта
                </label>
                <Textarea 
                  placeholder="Расскажите о ваших требованиях к стенду..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} />
                  <span>Заявка успешно отправлена! Мы свяжемся с вами в течение рабочего дня.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4 flex items-center gap-2">
                  <Icon name="AlertCircle" size={20} />
                  <span>Ошибка отправки. Попробуйте позже или свяжитесь по телефону.</span>
                </div>
              )}
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;