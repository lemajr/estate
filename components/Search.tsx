import { RiSearch2Line } from 'react-icons/ri'
import CountyDropdown from './CountyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import PropertyDropdown from './PropertyDropdown'
import { Button } from '@nextui-org/react'
 
 const Search = () => {
   return (
     <div className='px-[30px] py-3 my-8 max-w-[1170px] 
     mx-auto flex flex-col lg:flex-row justify-between
      gap-4 lg:gap-x-3 lg:shadow-medium
       bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountyDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <Button className='bg-blue-300 transition w-full lg:max-w-[162px] h-14 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line />
      </Button>
     </div>
   )
 }
 
 export default Search