import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'Навигационные стенды и таблички',
      description: 'Идеально для офисов и помещений. Легкая установка, современный дизайн.',
      image: 'https://cdn.poehali.dev/files/548262f6-0b94-41d6-85f3-17c332689344.jpg'
    },
    {
      id: 2,
      title: 'Информационные доски',
      description: 'Многосекционные стенды с возможностью размещения документов и объявлений.',
      image: 'https://cdn.poehali.dev/files/8878544e-9097-4d6e-a709-24ae6d159659.jpg'
    },
    {
      id: 3,
      title: 'Стенды с подсветкой',
      description: 'Современные стенды со встроенной LED-подсветкой для максимальной видимости.',
      image: 'https://cdn.poehali.dev/files/aa4654eb-a164-464c-b6a0-52cd339cf009.jpg'
    },
    {
      id: 4,
      title: 'Стенды из акрила',
      description: 'Прозрачные конструкции из оргстекла. Стильное решение для современных офисов.',
      image: 'https://cdn.poehali.dev/files/6eaba7d5-e8fc-4dd1-a82b-9a97b8babd88.jpg'
    },
    {
      id: 5,
      title: 'Фотозоны',
      description: 'Декоративные конструкции для создания уникальных фотозон на мероприятиях.',
      image: 'https://cdn.poehali.dev/files/91e7009b-f9ee-48d3-b453-5065bc578d85.jpg'
    },
    {
      id: 6,
      title: 'Панно на подвесной системе',
      description: 'Композиции из фотографий и изображений с гибкой системой крепления.',
      image: 'https://cdn.poehali.dev/files/b35c4586-350b-43b7-bdbc-9d6a86020ab4.jpg'
    },
    {
      id: 7,
      title: 'Интерьерные решения',
      description: 'Объемные декоративные элементы для оформления офисных пространств.',
      image: 'https://cdn.poehali.dev/files/99d3a317-9933-423c-9a96-d80668cdbcb9.JPG'
    },
    {
      id: 8,
      title: 'Интерьерные вывески',
      description: 'Объемные буквы и логотипы для стильного оформления интерьера.',
      image: 'https://cdn.poehali.dev/files/a9d22313-900b-40ae-b101-aa0b4c9f156f.jpg'
    }
  ];

  return (
    <section id="products" className="py-20 px-6 bg-background">
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
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
