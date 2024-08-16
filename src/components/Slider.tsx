import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Slider() {
  const categories = [
    'Pizza',
    'Burgers',
    'Sushi',
    'Pasta',
    'Salads',
    'Desserts',
  ];

  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {categories.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-xl font-semibold">{item}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
