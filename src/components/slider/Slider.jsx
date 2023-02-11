import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  return (
    <div className=" p-20">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="https://ae01.alicdn.com/kf/S449f34613f6c419ab1e91f6118bc5a50L.jpg_Q90.jpg_.webp" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://ae01.alicdn.com/kf/Sa94da73554fb40aea6e0f127c15df632R.jpg_Q90.jpg_.webp" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
