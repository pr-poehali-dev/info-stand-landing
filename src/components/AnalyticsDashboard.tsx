import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ProductStat {
  product_name: string;
  request_count: number;
  last_request: string | null;
}

interface AnalyticsData {
  total_requests: number;
  products: ProductStat[];
}

const AnalyticsDashboard = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://functions.poehali.dev/4c6caf12-4b05-40a7-8fff-e67314dc94b2');
      
      if (!response.ok) {
        throw new Error('Failed to fetch analytics');
      }
      
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError('Ошибка загрузки аналитики');
      console.error('Analytics fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Нет данных';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'short', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (isLoading) {
    return (
      <section className="py-12 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-xl">
            <CardContent className="p-8 text-center">
              <Icon name="Loader2" className="animate-spin mx-auto mb-2" size={32} />
              <p className="text-muted-foreground">Загрузка аналитики...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-xl border-red-200">
            <CardContent className="p-8 text-center">
              <Icon name="AlertCircle" className="text-red-500 mx-auto mb-2" size={32} />
              <p className="text-red-600">{error}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-secondary">
          Аналитика запросов
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg">
          Статистика интереса к различным видам продукции
        </p>

        <div className="grid gap-6 mb-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={24} />
                Общая статистика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary">
                {data?.total_requests || 0}
              </div>
              <p className="text-muted-foreground mt-1">Всего запросов цен</p>
            </CardContent>
          </Card>

          {data && data.products.length > 0 && (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={24} />
                  По видам продукции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.products.map((product, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/50 rounded-lg gap-2"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary">{product.product_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Последний запрос: {formatDate(product.last_request)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={20} className="text-primary" />
                        <span className="text-2xl font-bold text-primary">
                          {product.request_count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {data && data.products.length === 0 && (
            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <Icon name="FileQuestion" className="mx-auto mb-2 text-muted-foreground" size={48} />
                <p className="text-muted-foreground">Пока нет запросов. Данные появятся после первых обращений.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
