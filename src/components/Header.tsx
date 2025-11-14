import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading text-2xl font-bold text-secondary">многостендов.рф</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-secondary hover:text-primary transition-colors">Продукция</a>
            <a href="#advantages" className="text-secondary hover:text-primary transition-colors">Преимущества</a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            <a 
              href="https://wa.me/79965269483" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="MessageCircle" size={18} />
              WhatsApp
            </a>
            <a 
              href="https://max.ru/u/f9LHodD0cOL6WIiGv6jxM0arnsDy0CSoHUwd9HyexaP5gg2Rhy8ghzEpxj0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="MessageSquare" size={18} />
              Max
            </a>
            <Button 
              size="sm"
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать
            </Button>
          </nav>
          <button
            className="md:hidden text-secondary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a 
              href="#products" 
              className="text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Продукция
            </a>
            <a 
              href="#advantages" 
              className="text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#contacts" 
              className="text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <a 
              href="https://wa.me/79965269483" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors py-2 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon name="MessageCircle" size={18} />
              WhatsApp
            </a>
            <a 
              href="https://max.ru/u/f9LHodD0cOL6WIiGv6jxM0arnsDy0CSoHUwd9HyexaP5gg2Rhy8ghzEpxj0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors py-2 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon name="MessageSquare" size={18} />
              Max
            </a>
            <Button 
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Заказать
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
