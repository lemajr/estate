import Image from "next/image"
import House from "@/app/images/image-1.jpg"
import { BiArea, BiBath, BiBed } from "react-icons/bi"
import Link from "next/link"


const Card = () => {
  return (
    <>
   <Link href="/1">
   <div className="bg-white shadow-md p-5 rounded-lg w-full max-w-[360px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <Image src={House} height={500} width={500} className="mb-8" alt="post" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">House</div>
        <div className="bg-blue-400 rounded-full text-white px-3">Tanzania</div>
      </div>
      <div className="text-lg font-semibold max-w-[260px">Changanyikeni Makongo, Kawe</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-ceter text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div> 6 </div>
        </div>
        <div className="flex items-ceter text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div> 2 </div>
        </div>
        <div className="flex items-ceter text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>4200 sq ft</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-blue-500 mb-4">Tsh 15,000,000/=</div>
    </div>
   </Link>
    </>
  )
}

export default Card