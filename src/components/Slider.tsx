'use client';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

//import { useTranslations } from 'next-intl';

export default function Slider() {
  const categories = [
    'Pizza',
    'Burgers',
    'Sushi',
    'Pasta',
    'Salads',
    'Desserts',
  ];
  /*
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
  ); */

  /*  const categories = [
    t('categories[0]', { default: 'Pizza' }),
    t('categories[1]', { default: 'Burgers' }),
    t('categories[2]', { default: 'Sushi' }),
    t('categories[3]', { default: 'Pasta' }),
    t('categories[4]', { default: 'Salads' }),
    t('categories[5]', { default: 'Desserts' }),
  ]; */
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const visibleCategory = categories.slice(currentIndex, currentIndex + 3);
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < categories.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="p-4 flex justify-between  items-center">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="flex justify-between ">
        {visibleCategory.map((category, index) => {
          return (
            <div key={index} className="flex p-1">
              <div className="p-3 "> {category}</div>
            </div>
          );
        })}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={currentIndex >= categories.length - 3}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
  );
  
}
