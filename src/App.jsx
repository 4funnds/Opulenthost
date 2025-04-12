import { lazy, Suspense } from 'react';
import { AppProvider } from './contexts/AppContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import SectionSkeleton from '@/components/ui/SectionSkeleton';
import './assets/styles/global.css';

// Safe lazy loader
const safeLazy = (importer) => {
  return lazy(async () => { 
    try {
      return await importer();
    } catch (error) {
      console.error('Lazy loading failed:', error);
      return { default: () => <div>Failed to load component</div> };
    }
  });
};

// Lazy-loaded sections
const Hero = safeLazy(() => import('@/components/sections/Hero'));
const Clients = safeLazy(() => import('@/components/sections/Clients'));
const Services = safeLazy(() => import('@/components/sections/Services'));
const Stats = safeLazy(() => import('@/components/sections/Stats'));
const Work = safeLazy(() => import('@/components/sections/Work'));
const Testimonials = safeLazy(() => import('@/components/sections/Testimonials'));
const Process = safeLazy(() => import('@/components/sections/Process'));
const Pricing = safeLazy(() => import('@/components/sections/Pricing'));
const CTA = safeLazy(() => import('@/components/sections/CTA'));

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="font-sans text-gray-800">
          <Header />

          <main>
            <Suspense fallback={<SectionSkeleton />}>
              <Hero />
              <Clients />
              <Services />
              <Stats />
              <Work />
              <Testimonials />
              <Process />
              <Pricing />
              <CTA />
            </Suspense>
          </main>

          <Footer />
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;