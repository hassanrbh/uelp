import React, {useState, useRef} from 'react'
import client from '../../services/react-query';
import '@splidejs/react-splide/css/skyblue';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Images = () => {
  const images = client.getQueryData(["unit-business"]).profile.images.images
  const ref = useRef()
  
  return (
    <Splide ref={ref} options={{
      rewind: false,
      perPage: 3,
      perMove: 1,
      gap: 0,
      pagination: false,
      breakpoints: {
        623: {
          perPage: 2,
          perMove: 2
        },
        935: {
          perPage: 3,
          perMove: 3
        },
        1247: {
          perPage: 4,
          perMove: 4
        }
      }
    }}>
      {images.map((img,__idx__) => {
      return (
        <SplideSlide key={__idx__} className="slide h-[400px]">
          <img
            src={img}
            alt={`${img}`}
            className="bg-no-repeat bg-center	bg-cover rounded"
          />
        </SplideSlide>
      );
    })}
  </Splide>
  )
}

export default Images