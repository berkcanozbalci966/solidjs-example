import { createSignal } from "solid-js";

export function CarouselItem({ slide, isLast, imageURL }) {
  return (
    <div id={`slide${slide}`} className="carousel-item relative w-full">
      <img src={imageURL} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        {slide != 1 ? (
          <a href={`#slide${slide - 1}`} className="btn btn-circle">
            ❮
          </a>
        ) : (
          <a></a>
        )}
        {!!!isLast && (
          <a href={`#slide${slide + 1}`} className="btn btn-circle">
            ❯
          </a>
        )}
      </div>
    </div>
  );
}

export function Carousel({ images }) {
  const [slide, setSlide] = createSignal(1);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <CarouselItem
          key={image}
          slide={index + 1}
          imageURL={image}
          isLast={images.length - 1 === index}
        />
      ))}
    </div>
  );
}
