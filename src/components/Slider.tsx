'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function Slider({ categories }: { categories: any[] }) {
  const router = useRouter();
  const handleProductClick = (productId: string) => {
    router.push(`/?categoryId=${productId}`);
    console.log(categories);
  };
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full max-w-sm p-5 "
    >
      <CarouselPrevious />
      <CarouselContent className="p-10">
        {categories &&
          categories.length > 0 &&
          categories.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card onClick={() => handleProductClick(item.$id)}>
                  <CardContent className="flex aspect-square items-center justify-center p-6 cursor-pointer">
                    <span className="text-xl font-semibold">{item.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
