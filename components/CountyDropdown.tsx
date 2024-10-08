'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'

const location = [
  { id: 1, name: 'Lacation (any)' },
  { id: 2, name: 'Dar es salaam' },
  { id: 3, name: 'Mwanza' },
  { id: 4, name: 'Dodoma' },
  { id: 5, name: 'Arusha' },
]

export default function CountyDropdown() {
  const [selected, setSelected] = useState(location[1])

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-t-lg bg-transparent border shadow-md py-1.5 pr-[6rem] pl-3 text-left text-base font-poppins font-medium',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        >
         <div className='flex flex-row gap-6 items-center'>
         <IoLocationOutline
           className="group pointer-events-none  top-2.5 left-2.5 size-6 text-blue-500"
            aria-hidden="true"
          />
          <div>
          {selected.name}
          <p className='text-xs'>Select your place</p>
          </div>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-blue-500"
            aria-hidden="true"
          />
      
         </div>
        </ListboxButton> 
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border mt-1 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50'
          )}
        >
          {location.map((location) => (
            <ListboxOption
              key={location.name}
              value={location}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-blue-100"
            >
              <CheckIcon className="invisible size-4 fill-blue-500 group-data-[selected]:visible" />
              <div className="text-sm/6 ">{location.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}