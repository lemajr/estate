'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import images 
import image1 from '@/app/images/image-1.jpg'
import image2 from '@/app/images/image-2.jpg'
import image3 from '@/app/images/image-3.jpg'
import image4 from '@/app/images/image-4.jpg'
import image5 from '@/app/images/image-5.jpg'

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import SkeletonComponent from './skeleton';

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Simulate an image loading process
    const loadImages = async () => {
      // Replace with actual loading logic if needed
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading delay
      setIsLoading(false); 
    };

    loadImages();
  }, []);

  return isLoading ? 
    (
      <SkeletonComponent />
    ) : (
      <>
        <div className="flex-1 w-full rounded-r-2xl lg:w-1/2 lg:h-[34rem] h-56 sm:h-64 md:h-72 pt-8">
          {/* Main Slider */}
          <Swiper
            spaceBetween={10}
            navigation={true}
            loop={true} // Enables looping for the main slider
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full h-[90%] "
          >
            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Image 1'
                src={image1}
                className="w-full rounded-l-full  h-72 lg:h-[34rem] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Image 2'
                src={image2}
                className="w-full h-72 rounded-l-full lg:h-[34rem] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Image 3'
                src={image3}
                className="w-full h-72 rounded-l-full lg:h-[34rem] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Image 4'
                src={image4}
                className="w-full h-72 rounded-l-full lg:h-[34rem] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Image 5'
                src={image5}
                className="w-full h-72 rounded-l-full lg:h-[34rem] object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            loop={true} // Enable looping for thumbnails
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-full ml-48 h-[10%] box-border mt-2  flex justify-end"
          >
            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Thumbnail 1'
                src={image1}
                className={`w-full h-10 rounded-l-full object-cover ${activeIndex === 0 ? 'opacity-100' : 'opacity-40'}`}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Thumbnail 2'
                src={image2}
                className={`w-full h-10 rounded-l-full object-cover ${activeIndex === 1 ? 'opacity-100' : 'opacity-40'}`}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Thumbnail 3'
                src={image3}
                className={`w-full h-10 rounded-l-full object-cover ${activeIndex === 2 ? 'opacity-100' : 'opacity-40'}`}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Thumbnail 4'
                src={image4}
                className={`w-full h-10 rounded-l-full object-cover ${activeIndex === 3 ? 'opacity-100' : 'opacity-40'}`}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                height={400}
                width={400}
                alt='Thumbnail 5'
                src={image5}
                className={`w-full h-10 rounded-l-full object-cover ${activeIndex === 4 ? 'opacity-100' : 'opacity-40'}`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
};

export default Slider;
