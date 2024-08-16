'use client'
import { useRef } from 'react';

type FoodCategorySliderProps = {
  categories: string[];
  onCategorySelect: (category: string) => void;
};

export default function FoodCategorySlider({
  categories,
  onCategorySelect,
}: FoodCategorySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 h-full px-2 text-xl bg-white bg-opacity-75"
      >
        &larr;
      </button>
      <div
        ref={sliderRef}
        className="slider-container flex overflow-x-auto py-2"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className="slider-button"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 h-full px-2 text-xl bg-white bg-opacity-75"
      >
        &rarr;
      </button>
    </div>
  );
}
