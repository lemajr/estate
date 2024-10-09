'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { RiWallet3Line } from 'react-icons/ri'

const price = [
  { id: 1, name: 'Price range (any)' },
  { id: 2, name: '100000 - 130000' },
  { id: 3, name: '140000 - 170000' },
  { id: 4, name: '180000 - 210000' },
  { id: 5, name: '220000 - 250000' },
]

export default function PriceRangeDropdown() {
  const [selected, setSelected] = useState(price[1])

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-t-lg bg-transparent border shadow-md py-2 mr-[9rem] pl-3 text-left text-base font-poppins font-medium',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        >
         <div className='inline-flex  gap-4 items-center'>
         <RiWallet3Line
           className="group pointer-events-none  top-2.5 left-2.5 size-5 text-blue-500"
            aria-hidden="true"
          />
          <div>
          {selected.name}
          <p className='text-xs'>Choose price range</p>
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
            'w-[var(--button-width)] rounded-xl border  bg-white p-1 mt-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50'
          )}
        >
          {price.map((price) => (
            <ListboxOption
              key={price.name}
              value={price}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-blue-100"
            >
              <CheckIcon className="invisible size-4 fill-blue-500 group-data-[selected]:visible" />
              <div className="text-sm/6 ">{price.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}