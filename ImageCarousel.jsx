import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Image1 from '../assets/SilderImage/Image1.jpeg'
import Image2 from '../assets/SilderImage/Image2.jpeg'
import Image3 from '../assets/SilderImage/Image3.jpeg'
import Image4 from '../assets/SilderImage/Image4.jpeg'
import Image5 from '../assets/SilderImage/Image5.jpeg'
import Image6 from '../assets/SilderImage/Image6.jpeg'
import Image7 from '../assets/SilderImage/Image7.jpeg'
import Image8 from '../assets/SilderImage/Image8.jpeg'
import Image9 from '../assets/SilderImage/Image9.jpeg'
import Image10 from '../assets/SilderImage/Image10.jpeg'
import Image11 from '../assets/SilderImage/Image11.jpeg'
import Image12 from '../assets/SilderImage/Image12.jpeg'
import Image13 from '../assets/SilderImage/Image13.jpeg'

// Add your images here
const items = [
  {
    src: Image1,
    altText: "Slide 1",
    caption: "Welcome to AppleRocket",
  },
  {
    src: Image2,
    altText: "Slide 2",
    caption: "Shop the Latest Products",
  },
  {
    src: Image3,
    altText: "Slide 3",
    caption: "Experience Seamless Shopping",
  },
  {
    src: Image4,
    altText: "Slide 3",
    caption: "Experience Seamless Shopping",
  },
  {
    src: Image5,
    altText: "Slide 3",
    caption: "Experience Seamless Shopping",
  },
  {
    src: Image6,
    altText: "Slide 3",
    caption: "Experience Seamless Shopping",
  },
  {
    src: Image7,
    altText: "Slide 3",
    caption: "Experience Seamless Shopping",
  },
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%", height: "600px", objectFit: "cover" }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
