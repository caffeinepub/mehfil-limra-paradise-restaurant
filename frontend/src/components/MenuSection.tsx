import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils } from 'lucide-react';

interface MenuItem {
  name: string;
  single: string;
  full: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  { name: 'Chicken Biryani', single: '100/-', full: '150/-', category: 'Biryani', popular: true },
  { name: 'Chicken 65 Biryani', single: '--', full: '210/-', category: 'Biryani', popular: true },
  { name: 'Veg Biryani', single: '--', full: '80/-', category: 'Biryani' },
  { name: 'Egg Biryani', single: '--', full: '80/-', category: 'Biryani' },
  { name: 'Chicken Family Pack', single: '--', full: '450/-', category: 'Special Packs', popular: true },
  { name: 'Chicken Jumbo Pack', single: '--', full: '600/-', category: 'Special Packs', popular: true },
  { name: 'Chicken Fried Rice', single: '70/-', full: '110/-', category: 'Rice & Noodles' },
  { name: 'Chicken Noodles', single: '70/-', full: '110/-', category: 'Rice & Noodles' },
  { name: 'Chicken 65', single: '120/-', full: '180/-', category: 'Starters', popular: true },
  { name: 'Mutton Biryani', single: '--', full: '200/-', category: 'Biryani' },
  { name: 'Prawns Biryani', single: '--', full: '220/-', category: 'Biryani' },
  { name: 'Veg Fried Rice', single: '60/-', full: '90/-', category: 'Rice & Noodles' },
  { name: 'Veg Noodles', single: '60/-', full: '90/-', category: 'Rice & Noodles' },
  { name: 'Chicken Kebab', single: '130/-', full: '190/-', category: 'Starters' },
  { name: 'Paneer 65', single: '110/-', full: '160/-', category: 'Starters' },
];

const categories = ['Biryani', 'Special Packs', 'Rice & Noodles', 'Starters'];

export default function MenuSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Utensils className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Menu
            </h2>
            <Utensils className="w-8 h-8 text-primary" />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Authentic flavors crafted with passion. All prices in Indian Rupees.
          </p>
        </div>

        {categories.map((category) => {
          const categoryItems = menuItems.filter((item) => item.category === category);
          
          return (
            <div key={category} className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center md:text-left border-l-4 border-primary pl-4">
                {category}
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categoryItems.map((item) => (
                  <Card
                    key={item.name}
                    className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg md:text-xl flex items-start justify-between gap-2">
                        <span className="group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        {item.popular && (
                          <Badge variant="destructive" className="text-xs shrink-0">
                            Popular
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center gap-4">
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">Single</p>
                          <p className="text-lg font-bold text-foreground">
                            {item.single}
                          </p>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">Full</p>
                          <p className="text-lg font-bold text-primary">
                            {item.full}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-muted/50 border-2 border-primary/30">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-sm md:text-base">
                <strong className="text-foreground">Note:</strong> Menu items and prices are subject to availability. 
                Please call us at <a href="tel:6305855373" className="text-primary font-semibold hover:underline">6305855373</a> for 
                current offerings and to place your order.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
