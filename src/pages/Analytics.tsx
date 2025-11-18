import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Analytics = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = sessionStorage.getItem('analytics_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://functions.poehali.dev/92bfd823-458c-4129-b58c-7814fe6e6657', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password })
      });

      const result = await response.json();

      if (response.ok && result.authenticated) {
        sessionStorage.setItem('analytics_auth', 'true');
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setError('Неверный пароль');
      }
    } catch (err) {
      setError('Ошибка подключения');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('analytics_auth');
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-20">
          <section className="py-12 px-4 sm:px-6">
            <div className="container mx-auto max-w-md">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                    <Icon name="Lock" size={24} />
                    Доступ к аналитике
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Введите пароль администратора
                      </label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2 text-sm">
                        <Icon name="AlertCircle" size={18} />
                        <span>{error}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Проверка...' : 'Войти'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="ml-auto flex items-center gap-2"
          >
            <Icon name="LogOut" size={18} />
            Выйти
          </Button>
        </div>
        <AnalyticsDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;