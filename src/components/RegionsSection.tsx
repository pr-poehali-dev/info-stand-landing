import Icon from '@/components/ui/icon';

const RegionsSection = () => {
  const regions = [
    { name: 'Благовещенск', isMain: true },
    { name: 'Белогорск' },
    { name: 'Тында' },
    { name: 'Свободный' },
    { name: 'Райчихинск' },
    { name: 'Шимановск' },
    { name: 'Завитинск' },
    { name: 'Циолковский' },
    { name: 'Прогресс' },
    { name: 'Поярково' },
    { name: 'Магдагачи' },
    { name: 'Сковородино' },
    { name: 'Екатеринославка' },
    { name: 'Ивановка' },
    { name: 'Новобурейский' },
  ];

  const yakutia = [
    { name: 'Якутск' },
    { name: 'Нерюнгри' },
    { name: 'Мирный' },
    { name: 'Ленск' },
    { name: 'Алдан' },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30" aria-label="География работы">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          География работы
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Производим и доставляем информационные стенды по всей Амурской области и Республике Саха (Якутия)
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" size={28} className="text-primary" />
              <h3 className="font-heading text-2xl font-bold text-secondary">Амурская область</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {regions.map((region) => (
                <div 
                  key={region.name}
                  className={`flex items-center gap-2 ${region.isMain ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                >
                  <Icon name={region.isMain ? 'Factory' : 'MapPin'} size={16} />
                  <span>{region.name}</span>
                </div>
              ))}
            </div>
            {regions.find(r => r.isMain) && (
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="Factory" size={16} className="text-primary" />
                  <span>Производство находится в Благовещенске</span>
                </p>
              </div>
            )}
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" size={28} className="text-primary" />
              <h3 className="font-heading text-2xl font-bold text-secondary">Республика Саха (Якутия)</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {yakutia.map((city) => (
                <div 
                  key={city.name}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Icon name="MapPin" size={16} />
                  <span>{city.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Icon name="Truck" size={16} className="text-primary" />
                <span>Организуем доставку в любой город республики</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-6 text-center">
          <p className="text-lg text-secondary flex items-center justify-center gap-3 flex-wrap">
            <Icon name="Phone" size={24} className="text-primary" />
            <span>
              Уточнить стоимость доставки:{' '}
              <a href="tel:+74162227803" className="text-primary font-semibold hover:underline">
                +7 (4162) 22-78-03
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
