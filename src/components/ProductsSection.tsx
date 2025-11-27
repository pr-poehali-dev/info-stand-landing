import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProductOrderModal from './ProductOrderModal';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: {
    intro: string;
    tasks: string[];
    types: string[];
    materials: string;
    options: string[];
    forWhom: string[];
    additional?: string;
  };
}

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const products: Product[] = [
    {
      id: 1,
      title: 'Навигационные стенды и таблички',
      description: 'Идеально для офисов и помещений. Легкая установка, современный дизайн.',
      image: 'https://cdn.poehali.dev/files/548262f6-0b94-41d6-85f3-17c332689344.jpg',
      fullDescription: {
        intro: 'Навигация — это про удобство и безопасность. Грамотные указатели сокращают время поиска кабинетов и служб, разгружают стойки информации и создают благоприятные впечатления.',
        tasks: [
          'Люди быстрее ориентируются в зданиях и не заблудятся',
          'Меньше вопросов к персоналу на входе и в приёмных',
          'Соблюдаем требования доступной среды — крупные буквы, яркие цвета, шрифт Брайля'
        ],
        types: [
          'Напольные стойки и таблички на стены, схемы этажей',
          'Таблички на двери кабинетов с номерами и названиями',
          'Тактильные указатели для людей с плохим зрением',
          'Подвесные указатели и пути эвакуации'
        ],
        materials: 'Используем алюминий, пластик, акрил и акп. Печатаем на УФ-принтере, делаем гравировку. Можно быстро менять информацию через специальные карманы.',
        options: [
          'Яркие контрастные цвета и крупные буквы',
          'QR-коды для перехода на электронные карты',
          'Подсветка для тёмных коридоров'
        ],
        forWhom: [
          'ВУЗы: навигация по корпусам, факультетам, лабораториям',
          'Школы и детсады: яркие картинки, безопасные материалы, без острых углов',
          'Госучреждения: всё в едином стиле по вашим требованиям',
          'Компании: навигация с вашим логотипом и фирменными цветами'
        ],
        additional: 'Приезжаем на замеры, делаем 3D-картинку как будет выглядеть. Монтируем быстро, не мешая работе. Даём паспорта на изделия. Информацию легко обновить самим.'
      }
    },
    {
      id: 2,
      title: 'Информационные стенды',
      description: 'Модульные стенды с возможностью размещения документов и объявлений.',
      image: 'https://cdn.poehali.dev/files/8878544e-9097-4d6e-a709-24ae6d159659.jpg',
      fullDescription: {
        intro: 'Классические стенды для любой информации — от расписаний до обязательных документов. Всё аккуратно, защищено и легко обновляется.',
        tasks: [
          'Вся важная информация в одном месте и в порядке',
          'Документы не мнутся, не пачкаются и легко меняются',
          'Стенды красиво смотрятся и поддерживают общий стиль помещения'
        ],
        types: [
          'Стенды с прозрачными карманами для листов А4, А3, А2',
          'Магнитные доски, на которых можно писать маркером',
          'Комбинированные: и карманы, и доски в одном стенде',
          'Закрытые витрины с замком для важных документов'
        ],
        materials: 'Акрил, пластик, композит, алюминиевый профиль. Печатаем названия и шапки, покрываем защитной плёнкой.',
        options: [
          'Можно менять верхнюю часть с логотипом под разные отделы',
          'Делаем в ваших корпоративных цветах',
          'Изготовим любого размера под ваши документы'
        ],
        forWhom: [
          'Школы и детсады: стенды для родителей с меню, расписанием, объявлениями',
          'ВУЗы: расписания занятий, новости кафедр, анонсы мероприятий',
          'Госучреждения: обязательная информация для посетителей',
          'Компании: стенды для сотрудников, инструкции по охране труда'
        ]
      }
    },
    {
      id: 3,
      title: 'Стенды с подсветкой',
      description: 'Современные стенды со встроенной LED-подсветкой для максимальной видимости.',
      image: 'https://cdn.poehali.dev/files/aa4654eb-a164-464c-b6a0-52cd339cf009.jpg',
      fullDescription: {
        intro: 'Подсветка делает витрину заметнее, выделяет главное и привлекает покупателей.',
        tasks: [
          'Товар выглядит выигрышнее — сувениры, книги, форма, значки',
          'Лучше освещение в торговых зонах и буфетах',
          'Запоминается ваш бренд'
        ],
        types: [
          'Островные витрины и настенные полки со светом',
          'Тонкие световые панели и короба',
          'Стенды с полками и креплениями под конкретный товар'
        ],
        materials: 'Акрил, металл, композит, ламинированные панели. Печатаем, гравируем, ставим LED-подсветку на 12/24 В — безопасно и экономично.',
        options: [
          'Свет ровный, без полос и тёмных пятен',
          'Провода спрятаны, легко обслуживать',
          'Можно менять картинки, регулировать яркость'
        ],
        forWhom: [
          'ВУЗы и школы: витрины с сувенирами, книгами, наградами',
          'Магазины и торговые зоны: промо-стойки для новинок',
          'Госучреждения: красивые витрины для выставок'
        ]
      }
    },
    {
      id: 4,
      title: 'Стенды из акрила',
      description: 'Прозрачные конструкции из оргстекла. Стильное решение для современных офисов.',
      image: 'https://cdn.poehali.dev/files/3b4b63aa-8795-43b6-a56d-b8058de2ff34.JPG',
      fullDescription: {
        intro: 'Акрил — это красиво, практично и безопасно. Выглядит как стекло, но не бьётся и весит меньше.',
        tasks: [
          'Премиальный вид при небольшом весе',
          'Легко протирать, не выгорает на солнце',
          'Можно сделать любую форму — от простых табличек до объёмных фигур'
        ],
        types: [
          'Настенные таблички и постеры на держателях',
          'Напольные стойки для буклетов и листовок',
          'Подвесные конструкции на тросах — смотрятся воздушно'
        ],
        materials: 'Режем лазером с полированными краями, гнём, печатаем в цвете, гравируем логотипы.',
        options: [
          'Цветной или тонированный акрил, можно с подсветкой',
          'Быстро снимаются и меняются карманы',
          'Безопасные округлые края'
        ],
        forWhom: [
          'Детсады и школы: безопасные материалы без острых углов',
          'ВУЗы: стильные стойки для презентаций и достижений',
          'Офисы и госучреждения: строгий дизайн, долго служит'
        ]
      }
    },
    {
      id: 5,
      title: 'Фотозоны',
      description: 'Декоративные конструкции для создания уникальных фотозон на мероприятиях.',
      image: 'https://cdn.poehali.dev/files/91e7009b-f9ee-48d3-b453-5065bc578d85.jpg',
      fullDescription: {
        intro: 'Фотозоны — это центр внимания на любом мероприятии. Люди фотографируются, делятся в соцсетях — ваш бренд становится заметнее.',
        tasks: [
          'Яркое оформление с вашим логотипом и названием',
          'Контент для соцсетей и отчётов с мероприятий',
          'Подходит для праздников, выставок, презентаций'
        ],
        types: [
          'Пресс-воллы на каркасах — быстро собираются',
          'Стационарные стены с объёмными буквами и подсветкой',
          'Тематические декорации с реквизитом'
        ],
        materials: 'Ткань с матовой печатью, баннер на прочном каркасе. Собирается и разбирается быстро. Объёмные элементы из акрила и пластика.',
        options: [
          'Уникальный дизайн под ваше мероприятие',
          'Подсветка и фирменный реквизит',
          'Материалы безопасны для помещений'
        ],
        forWhom: [
          'ВУЗы: день открытых дверей, выпускные, конференции',
          'Школы и детсады: праздники, линейки, тематические недели',
          'Компании и госучреждения: награждения, презентации, форумы'
        ]
      }
    },
    {
      id: 6,
      title: 'Панно на подвесной системе',
      description: 'Композиции из фотографий и изображений с гибкой системой крепления.',
      image: 'https://cdn.poehali.dev/files/b35c4586-350b-43b7-bdbc-9d6a86020ab4.jpg',
      fullDescription: {
        intro: 'Подвесные системы — это когда панно висят на тросах с потолка. Стены остаются целыми, а картинки можно менять хоть каждую неделю.',
        tasks: [
          'Меняем выставки без дырок в стенах',
          'Смотрится легко и воздушно благодаря тонким тросам',
          'Подходит для высоких потолков и сложных помещений'
        ],
        types: [
          'Тросовые системы с потолочными рельсами',
          'Клипсы и профили для натяжения ткани',
          'Комбинация с подсветкой и звукопоглощающими панелями'
        ],
        materials: 'Печать на ткани или пластике, композитные панели, акрил. Акустические панели гасят шум в коридорах.',
        options: [
          'Трековая подсветка, быстро переставляем экспозицию',
          'Окрашиваем профили в любой цвет',
          'Панели с шумоподавлением — тише в холлах'
        ],
        forWhom: [
          'ВУЗы: галереи студенческих работ, стенды достижений',
          'Школы и детсады: детские рисунки, творческие выставки',
          'Офисы и госучреждения: карты, инфографика, имиджевые материалы'
        ]
      }
    },
    {
      id: 7,
      title: 'Интерьерные решения',
      description: 'Объемные декоративные элементы для оформления офисных пространств.',
      image: 'https://cdn.poehali.dev/files/99d3a317-9933-423c-9a96-d80668cdbcb9.JPG',
      fullDescription: {
        intro: 'Декоративные элементы создают атмосферу, подчёркивают стиль компании и даже улучшают акустику.',
        tasks: [
          'Зонируем переговорные и зоны отдыха',
          'Добавляем акценты — цитаты, карты, логотипы',
          'Улучшаем звук — меньше эха в коридорах'
        ],
        types: [
          '3D-панели, объёмные карты мира или региона',
          'Панели из стабилизированного мха, текстиль, рейки',
          'Комбинация навигации, декора и экранов в одном'
        ],
        materials: 'МДФ, фанера, акрил, пластик, металл. Фрезеруем, окрашиваем, печатаем, гравируем.',
        options: [
          'Звукопоглощающие вставки, скрытая подсветка',
          'Делаем в ваших брендовых цветах и стиле',
          'Безопасные материалы без острых углов'
        ],
        forWhom: [
          'ВУЗы: оформление факультетов, коворкингов, лабораторий',
          'Школы и детсады: яркие безопасные элементы',
          'Офисы и госучреждения: строгий фирменный стиль'
        ]
      }
    },
    {
      id: 8,
      title: 'Интерьерные вывески',
      description: 'Объемные буквы и логотипы для стильного оформления интерьера.',
      image: 'https://cdn.poehali.dev/files/a9d22313-900b-40ae-b101-aa0b4c9f156f.jpg',
      fullDescription: {
        intro: 'Объёмные вывески внутри здания — это первое, что видят посетители. Укрепляют бренд и запоминаются.',
        tasks: [
          'Видно издалека, читается чётко',
          'Эффектно в холле, на ресепшн, в переговорных',
          'Долго служит, не требует особого ухода'
        ],
        types: [
          'Без подсветки — акрил, пластик, дерево, металл',
          'С подсветкой — светятся буквы или контур вокруг них',
          'Комбинированные — разные материалы в одной вывеске'
        ],
        materials: 'Режем на фрезере и лазере, полируем края. Красим металл, печатаем, заливаем буквы цветом. Подключаем LED-ленты на 12/24 В.',
        options: [
          'Крепим на держателях или прямо к стене, провода прячем',
          'Низковольтное питание, безопасно',
          'Подбираем цвет точно под брендбук',
          'Можно регулировать яркость'
        ],
        forWhom: [
          'ВУЗы, школы: логотипы корпусов и центров',
          'Госучреждения: гербы, эмблемы, названия департаментов',
          'Компании: айдентика в зонах приёма клиентов'
        ]
      }
    }
  ];

  const openDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  const openOrderModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-20 px-6 bg-background" aria-label="Каталог продукции">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Наша продукция
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Широкий выбор решений для любых задач
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300 animate-fade-in flex flex-col cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => openDetails(product)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-2xl font-semibold mb-3 text-secondary">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {product.description}
                </p>
                <Button 
                  className="w-full mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    openOrderModal(product);
                  }}
                >
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-heading text-secondary pr-8">
                  {selectedProduct.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-lg leading-relaxed">
                    {selectedProduct.fullDescription.intro}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-secondary">Что решают:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.fullDescription.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-secondary">Виды:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.fullDescription.types.map((type, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-secondary">Материалы и технологии:</h4>
                  <p className="leading-relaxed">{selectedProduct.fullDescription.materials}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-secondary">Опции:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.fullDescription.options.map((option, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-secondary">Для кого:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.fullDescription.forWhom.map((target, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProduct.fullDescription.additional && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-secondary">Монтаж и обслуживание:</h4>
                    <p className="leading-relaxed">{selectedProduct.fullDescription.additional}</p>
                  </div>
                )}

                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setIsDetailsOpen(false);
                      openOrderModal(selectedProduct);
                    }}
                  >
                    Запросить цену
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <ProductOrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct?.title || ''}
      />
    </section>
  );
};

export default ProductsSection;