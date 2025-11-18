import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
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
      description: 'Изготовление от 2 дней без потери качества'
    },
    {
      icon: 'Shield',
      title: 'Гарантия до 3 лет',
      description: 'Уверены в надежности каждого изделия'
    }
  ];

  return (
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
  );
};

export default AdvantagesSection;