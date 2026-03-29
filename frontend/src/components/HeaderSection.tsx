import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeaderSection() {
  return (
    <header className="bg-card border-b-4 border-primary shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/generated/mehfil-logo-badge.dim_512x512.png"
              alt="Mehfil Logo"
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Mehfil Limra Paradise Restaurant
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Mehfil Mandi House
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              variant="default"
              size="default"
              className="bg-primary hover:bg-primary/90 font-semibold shadow-md"
            >
              <a href="tel:6305855373" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="default"
              className="border-primary text-primary hover:bg-primary/10 font-semibold"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Opposite+Pillar+No.+103+Attapur+X+Roads+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
