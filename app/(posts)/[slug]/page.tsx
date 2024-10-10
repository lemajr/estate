'use client'
import Image from "next/image";
import Post from "@/app/images/image-2.jpg";
import Profile from "@/app/images/profile.jpg";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import Link from "next/link";
import ModalButton from "@/components/ModalButton";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react"
import SkeletonSinglePost from "@/components/SkeletonSinglePost";

const SinglePost = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Simulate an image loading process
    const loadImages = async () => {
      // Replace with actual loading logic if needed
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay
      setIsLoading(false); 
    };

    loadImages();
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 py-14 min-h-[800px] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-3 lg:items-center lg:justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">House</h2>
            <h3 className="text-lg md:text-xl">Changanyikeni Makongo, Kawe</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-xs md:text-sm">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full">House</div>
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full">Tanzania</div>
          </div>
          <div className="text-xl md:text-2xl font-semibold text-blue-500">
            Tsh 14,000,000/=
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[65%] ">
            <div className="mb-8">
              {isLoading ? (
                <SkeletonSinglePost />
              ) : (
              <Image
                src={Post}
                className="w-full lg:h-96 md:lg-96 xl:h-[28rem] h-72 object-cover"
                width={500}
                height={500}
                alt="single post"
              /> 
            )}
            </div>
           <div className="flex gap-x-6 text-blue-500 mb-6">
           <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div>6</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div>2</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl"  />
              <div>2200 sq ft</div>
            </div>
           </div>
           <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quam dolores qui expedita quis voluptatibus minima, aliquid error voluptas facere laudantium alias quo culpa mollitia eos illum modi corrupti. Quia.
            </p>
           </div>
          </div>
          <div className="w-full lg:w-[35%] ">
          <div className=" bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            {/* profile Agent */}
          <div className="flex items-center gap-x-4 mb-8">
            <div className="size-20 p-1 border border-gray-300 rounded-full">
              <Image src={Profile} className="rounded-full " width={500} height={500} alt="profile" />
            </div>
            <div>
              <div className="font-bold text-lg">
                <p>Erick B. Lema</p>
              </div>
          
              <Link href="https://twitter.com/ericktek_" className="text-blue-500 text-sm" >
          @lemajr
        </Link>
            </div>
          </div>
          <div>
            {/* Contact FOrm */}
          <form className="flex flex-col gap-y-4" action="">
            <input placeholder="Name*" className="border border-gray-300 focus:border-blue-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" />
            <input placeholder="Email*" className="border border-gray-300 focus:border-blue-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" />
            <input placeholder="Phone*" className="border border-gray-300 focus:border-blue-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" />
            <textarea placeholder="Message*" defaultValue="Hello, I am interested in [ Modern apartment ]" className="border border-gray-300 focus:border-blue-700 outlinr-none resize-none rounderd w-full p-4 h-36 text-sm text-gray-400"></textarea>
            <div className="flex gap-x-2">
              <Button className="bg-blue-500 h-[50px] hover:bg-blue-800 text-white rounded p-4 text-sm w-full transition">Send message</Button>
              <ModalButton/>
            </div>
          </form>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
