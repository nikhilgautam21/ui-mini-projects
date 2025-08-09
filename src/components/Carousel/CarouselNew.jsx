import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const slides = [
  'https://picsum.photos/id/1015/300/200',
  'https://picsum.photos/id/1016/300/200',
  'https://picsum.photos/id/1018/300/200',
  'https://picsum.photos/id/1020/300/200',
];
function CarouselNew() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const prev = () => setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideEl = slideRef.current;

    const onTransitionEnd = () => {
      if (currentSlide == 3) {
        alert('Third Slide');
      }
    };

    if (slideRef) {
      slideEl.addEventListener('transitionend', onTransitionEnd);
    }

    return () => {
      slideEl.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden h-[200px] w-[300px]">
      <div
        className="flex row transition-transform duration-[1000ms] ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        ref={slideRef}
      >
        {slides.map((item, idx) => (
          <img src={item} key={idx} className="w-full flex-shrink-0 object-cover" />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-[5px]">
        <button onClick={prev} className="bg-white border-0 rounded-full opacity-80 cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="bg-white border-0 rounded-full opacity-80 cursor-pointer">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default CarouselNew;
