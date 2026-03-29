import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/generated/mehfil-hero-banner.dim_1600x600.png"
          alt="Mehfil Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      <div className="relative h-full container flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6">
          <img
            src="/assets/generated/mehfil-logo-badge.dim_512x512.png"
            alt="Mehfil Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
          Mehfil Limra Paradise
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-2 drop-shadow-md">
          Restaurant
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md font-medium">
          Also known as Mehfil Mandi House
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <a href="tel:6305855373" className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now: 6305855373
          </a>
        </Button>
      </div>
    </section>
  );
}
