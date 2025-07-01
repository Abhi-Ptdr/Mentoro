import Herosection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card"
import { features } from "@/data/features";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>

      <Herosection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerfull Features for Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"> 
            {features.map((feature, index) => {
            return (
              <Card key={index} className="hover:border-primary transition-colors duration-300 bg-background">
                <CardContent className="pt-2 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
          </div>
        </div>
      </section>
    </div>
  );
}
