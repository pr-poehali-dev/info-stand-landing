import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AnalyticsDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
