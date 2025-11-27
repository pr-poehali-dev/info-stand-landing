import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HowWeWorkSection = () => {
  const steps = [
    {
      id: 1,
      icon: 'ClipboardList',
      title: 'Бриф и замеры',
      description: 'Учитываем планировку, потоки людей, требования доступной среды и пожарной безопасности.'
    },
    {
      id: 2,
      icon: 'Lightbulb',
      title: 'Дизайн',
      description: 'Дизайн-концепция, визуализация.'
    },
    {
      id: 3,
      icon: 'FileCheck',
      title: 'Согласование',
      description: 'Варианты по бюджету и срокам, образцы материалов и цветов.'
    },
    {
      id: 4,
      icon: 'Cog',
      title: 'Производство',
      description: 'Современное оборудование, контроль качества на каждом этапе.'
    },
    {
      id: 5,
      icon: 'Wrench',
      title: 'Монтаж',
      description: 'По графику, с минимальным вмешательством в работу учреждения.'
    },
    {
      id: 6,
      icon: 'FileText',
      title: 'Документы',
      description: 'Смета, договор, счета, закрывающие документы.'
    },
    {
      id: 7,
      icon: 'Shield',
      title: 'Сервис',
      description: 'Гарантия, постгарантийная поддержка, оперативная замена информации на поверхностях.'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Как мы работаем
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          Работаем с корпоративными и государственными клиентами. От единичных изделий до комплексного оснащения здания.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={step.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-primary">Шаг {step.id}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-secondary text-center">
            Для кого мы работаем
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="GraduationCap" className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">ВУЗы</h4>
                  <p className="text-muted-foreground text-sm">
                    Зонирование кампусов, факультетов, лабораторий. Брендирование учебных корпусов.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon name="School" className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Школы и детские сады</h4>
                  <p className="text-muted-foreground text-sm">
                    Безопасные решения с ясными пиктограммами, скругленными кромками, яркими элементами.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Landmark" className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Госучреждения</h4>
                  <p className="text-muted-foreground text-sm">
                    Единый стиль, соответствие внутренним регламентам, официальная документация.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon name="Building2" className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Коммерческие компании</h4>
                  <p className="text-muted-foreground text-sm">
                    Брендированная навигация, айдентика бренда, клиентские сценарии.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-border">
            <p className="text-lg text-muted-foreground mb-4">
              Готовы подготовить концепцию под ваш объект и бюджет
            </p>
            <a 
              href="#order"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-white font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;