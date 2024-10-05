// import { PiBuildingApartment } from "react-icons/pi";


// const Header = () => {
//   return (
//     <header>
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center py-4">
//         <div className="flex justify-items-end items-end gap-2">
//           <PiBuildingApartment className="size-8 text-gray-950" />
//           <h1 className="font-comfortaa text-2xl font-extrabold text-gray-950 leading-none tracking-[-0.09em] hidden lg:flex xl:flex">Sam Apartment</h1>
//         </div>
//             <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Sign In</button>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
