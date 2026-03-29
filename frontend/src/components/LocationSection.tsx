import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LocationSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Opp. Pillar No. 103, Attapur X Roads, Hyderabad
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Contact</h3>
              <a
                href="tel:6305855373"
                className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
              >
                6305855373
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Hours</h3>
              <p className="text-muted-foreground leading-relaxed">
                Open Daily<br />
                11:00 AM - 11:00 PM
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
