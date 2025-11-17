import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-secondary text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-bold mb-6">Контакты</h3>
          
          <div className="space-y-4 text-white/90">
            <div>
              <p className="flex items-center justify-center gap-2 mb-3">
                <Icon name="Phone" size={20} />
                <a href="tel:+74162227803" className="hover:text-primary transition-colors">
                  +7 (4162) 22-78-03
                </a>
              </p>
              
              <p className="text-sm text-white/60 mb-2">Мессенджеры</p>
              <div className="flex items-center justify-center gap-6">
                <a href="https://wa.me/79965269483" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={20} />
                  <span>WhatsApp</span>
                </a>
                <a href="tg://resolve?phone=79965269483" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOL6WIiGv6jxM0arnsDy0CSoHUwd9HyexaP5gg2Rhy8ghzEpxj0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="MessageSquare" size={20} />
                  <span>Max</span>
                </a>
              </div>
              <p className="mt-2 text-white/80">+7 996 526-94-83</p>
            </div>
            
            <p className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={20} />
              <a href="mailto:mnogo.info@mail.ru" className="hover:text-primary transition-colors">
                mnogo.info@mail.ru
              </a>
            </p>
            
            <p className="flex items-center justify-center gap-2 flex-wrap text-center">
              <Icon name="MapPin" size={20} className="shrink-0" />
              <span className="break-words">Амурская область, г. Благовещенск, ул. Забурхановская, 98, оф. 4</span>
            </p>
          </div>
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=127.541000%2C50.280500&z=17&l=map&mode=search&text=%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2.%D1%80%D1%84%20%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA" 
              width="100%" 
              height="400" 
              frameBorder="0"
              title="Карта расположения офиса"
              className="w-full"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-center flex items-center justify-center gap-6 flex-wrap">
            <a 
              href="https://yandex.ru/maps/org/mnogostendov_rf/54146724078/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
            >
              <Icon name="Navigation" size={18} />
              Яндекс.Карты
            </a>
            <a 
              href="https://2gis.ru/blagoveschensk/firm/70000001080445318/tab/info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
            >
              <Icon name="Navigation" size={18} />
              2ГИС
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-white/60 text-center">
          <p className="mb-3">&copy; 2025 многостендов.рф | ООО "Консалт" | ИНН 2801227832 | ОГРН 1172801001174</p>
          <p className="mb-4 text-sm text-white/70 max-w-3xl mx-auto">
            Вся представленная на сайте информация, касающаяся стоимости товаров и услуг, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. Для получения подробной информации о стоимости и условиях, пожалуйста, обращайтесь к менеджерам.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
            <a href="/terms-of-service" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Обработка персональных данных</a>
            <span>•</span>
            <a href="/cookie-policy" className="hover:text-white transition-colors">Политика cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;