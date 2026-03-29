import HeroSection from './components/HeroSection';
import HeaderSection from './components/HeaderSection';
import LocationSection from './components/LocationSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HeaderSection />
      <main>
        <LocationSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
