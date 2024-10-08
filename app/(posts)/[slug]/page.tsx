// // 'use client'
// // import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

// // const DropMenu = () => {
// //   return (
// //    <div className="p-64">
// //      <Dropdown>
// //       <DropdownTrigger>
// //         <Button 
// //           variant="bordered" 
// //         >
// //           Tanzania 
// //           select your country
// //         </Button>
// //       </DropdownTrigger>
// //       <DropdownMenu 
// //         aria-label="Action event example" 
// //         onAction={(key) => alert(key)}
// //       >
// //         <DropdownItem key="new">New file</DropdownItem>
// //         <DropdownItem key="copy">Copy link</DropdownItem>
// //         <DropdownItem key="edit">Edit file</DropdownItem>
// //         <DropdownItem key="delete" className="text-danger" color="danger">
// //           Delete file
// //         </DropdownItem>
// //       </DropdownMenu>
// //     </Dropdown>
// //    </div>
// //   );
// // }

// // export default DropMenu;
// 'use client'

// import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
// import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
// import clsx from 'clsx'
// import { useState } from 'react'
// import { IoLocationOutline } from 'react-icons/io5'

// const location = [
//   { id: 1, name: 'Lacation (any)' },
//   { id: 2, name: 'Dar es salaam' },
//   { id: 3, name: 'Mwanza' },
//   { id: 4, name: 'Dodoma' },
//   { id: 5, name: 'Arusha' },
// ]

// export default function Example() {
//   const [selected, setSelected] = useState(location[1])

//   return (
//     <div className="mx-auto h-screen w-52 pt-20">
//       <Listbox value={selected} onChange={setSelected}>
//         <ListboxButton
//           className={clsx(
//             'relative block w-full rounded-t-lg bg-transparent py-1.5 pr-8 pl-3 text-left text-base font-poppins font-medium text-white',
//             'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
//           )}
//         >
//          <div className='flex flex-row gap-6 items-center'>
//          <IoLocationOutline
//            className="group pointer-events-none  top-2.5 left-2.5 size-6 text-blue-200"
//             aria-hidden="true"
//           />
//           <div>
//           {selected.name}
//           <p className='text-xs'>Select your place</p>
//           </div>
//           <ChevronDownIcon
//             className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white"
//             aria-hidden="true"
//           />
      
//          </div>
//         </ListboxButton> 
//         <ListboxOptions
//           anchor="bottom"
//           transition
//           className={clsx(
//             'w-[var(--button-width)] rounded-b-xl border border-white/5 bg-gray-500 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
//             'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
//           )}
//         >
//           {location.map((location) => (
//             <ListboxOption
//               key={location.name}
//               value={location}
//               className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black"
//             >
//               <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
//               <div className="text-sm/6 text-white">{location.name}</div>
//             </ListboxOption>
//           ))}
//         </ListboxOptions>
//       </Listbox>
//     </div>
//   )
// }







import React from 'react'

const page = () => {
  return (
    <div className='grid'></div>
  )
}

export default page