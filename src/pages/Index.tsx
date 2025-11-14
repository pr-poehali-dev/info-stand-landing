import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="fixed bottom-6 right-6 z-50 group">
        <a 
          href="tel:+74162227803"
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Позвонить"
        >
          <Icon name="Phone" size={28} className="group-hover:animate-pulse" />
        </a>
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-secondary text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
            +7 (4162) 22-78-03
          </div>
        </div>
      </div>
      
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ProductsSection />
      <AdvantagesSection />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
