import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const products = [
    {
      id: 1,
      title: 'Настенные стенды',
      description: 'Идеально для офисов и помещений. Легкая установка, современный дизайн.',
      image: 'https://cdn.poehali.dev/projects/c7034d56-1650-47d4-8d52-409af5db3144/files/ceb32560-6c66-4b01-b792-6e262dd39142.jpg'
    },
    {
      id: 2,
      title: 'Уличные конструкции',
      description: 'Прочные и долговечные. Устойчивы к погодным условиям.',
      image: 'https://cdn.poehali.dev/projects/c7034d56-1650-47d4-8d52-409af5db3144/files/893eaf40-7cd2-4730-a014-0ecb391444ac.jpg'
    },
    {
      id: 3,
      title: 'Интерактивные киоски',
      description: 'Современные решения с подсветкой и мультимедиа.',
      image: 'https://cdn.poehali.dev/projects/c7034d56-1650-47d4-8d52-409af5db3144/files/dbbfdc46-13de-4caf-a467-3463c3ce7a61.jpg'
    }
  ];

  const advantages = [
    {
      icon: 'Sparkles',
      title: 'Индивидуальный подход',
      description: 'Создаем стенды точно под ваши требования и бренд'
    },
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Используем только лучшие материалы и технологии'
    },
    {
      icon: 'Clock',
      title: 'Быстрое производство',
      description: 'Изготовление от 3 дней без потери качества'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 3 года',
      description: 'Уверены в надежности каждого изделия'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Информационные стенды
            <span className="block text-primary mt-2">под ваш проект</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto font-light">
            Производим стенды любой сложности с учетом всех ваших требований
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl hover:scale-105 transition-transform"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать стенд
          </Button>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
            Наша продукция
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Широкий выбор решений для любых задач
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-3 text-secondary">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-lg hover:bg-white transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
            Заказать стенд
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение часа
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
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="contacts" className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Контакты</h3>
          <div className="space-y-2 text-white/80">
            <p className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={20} />
              <span>info@stands.ru</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Амурская область, г. Благовещенск, ул. Забурхановская, 98, оф. 4</span>
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
            <p>&copy; 2024 Производство информационных стендов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;