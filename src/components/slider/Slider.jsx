import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  return (
    <div className="w-full">
      <Splide aria-label="My Favorite Images" className="w-full">
        <SplideSlide>
          <img
            className="w-full "
            src="https://img.freepik.com/free-vector/geometric-fashion-collection-twitter-header_23-2149977412.jpg?w=996&t=st=1676379153~exp=1676379753~hmac=b5b0788387d9d7666aa1e6c4c859adfc64c6a07ec998a0858bf0ede04479e40b"
            alt=" "
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="w-full"
            src="https://img.freepik.com/free-vector/geometric-fashion-collection-facebook-cover_23-2149977424.jpg?w=996&t=st=1676379687~exp=1676380287~hmac=06d3435176182897623a8139be31c26d03522652bc88a4fee7a2bed5eadf6502"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img className="w-full" src="" alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
