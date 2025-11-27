import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-primary/10 text-white overflow-hidden pt-20" aria-label="Главный экран">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Инфор&shy;мацион&shy;ные стенды
          <span className="block text-primary mt-2">под ваш проект</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto font-light">
          Производство в Благовещенске. Доставка по Амурской области и Якутии
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl hover:scale-105 transition-transform"
          onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;