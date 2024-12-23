import useEmblaCarousel from "embla-carousel-react";
import "./MainCarousel.css";
import { useEffect } from "react";
export const MainCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });


  useEffect(() => {
    if(emblaApi){
      emblaApi.on("select", () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        console.log(`Selected index is ${selectedIndex}`);
      });
    }
  }, [emblaApi])
  
  

  return (

    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};
