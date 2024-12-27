import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import "./MainCarousel.css";
import image1 from "../../../assets/images/894.png";
import image2 from "../../../assets/images/917.png";
import image3 from "../../../assets/images/918.png";

const movies = [image1, image2, image3];

export const MainCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        console.log(`Selected index is ${selectedIndex}`);
      });
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
       

        {movies.map((movie, index) => {
          return (
            <div className="embla__slide" key={index}>
              <img src={movie} alt="pelicula de ejemplo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
