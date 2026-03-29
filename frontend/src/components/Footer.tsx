import { Heart, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t-4 border-primary mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-3 text-foreground">Mehfil Limra Paradise</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience authentic flavors and traditional recipes that bring people together.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-foreground">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:6305855373"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>6305855373</span>
              </a>
              <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Attapur X Roads, Hyderabad</span>
              </p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-3 text-foreground">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Open Daily<br />
              11:00 AM - 11:00 PM
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="w-4 h-4 text-primary fill-primary inline" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
