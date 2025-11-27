import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ProductOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const ProductOrderModal = ({ isOpen, onClose, productName }: ProductOrderModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [consentChecked, setConsentChecked] = useState(false);

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
        body: JSON.stringify({
          ...formData,
          subject: `Запрос цены: ${productName}`
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-secondary">Узнать цену</DialogTitle>
          <DialogDescription>
            {productName}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-secondary">
              Ваше имя
            </label>
            <Input 
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-10"
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
              className="h-10"
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
              className="h-10"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-secondary">
              Комментарий
            </label>
            <Textarea 
              placeholder="Опишите ваши пожелания..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
            />
          </div>
          
          {submitStatus === 'success' && (
            <div className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2 text-sm">
              <Icon name="CheckCircle" size={18} />
              <span>Заявка отправлена! Мы свяжемся с вами в ближайшее время.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2 text-sm">
              <Icon name="AlertCircle" size={18} />
              <span>Ошибка отправки. Попробуйте позже.</span>
            </div>
          )}
          
          <div className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
            <Checkbox 
              id="modal-consent" 
              checked={consentChecked}
              onCheckedChange={(checked) => setConsentChecked(checked === true)}
              className="mt-0.5"
            />
            <label htmlFor="modal-consent" className="text-xs text-muted-foreground leading-snug cursor-pointer">
              Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных.
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-10 bg-primary hover:bg-primary/90 text-white"
            disabled={isSubmitting || !consentChecked}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductOrderModal;