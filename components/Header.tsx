import { PiBuildingApartment } from "react-icons/pi";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  return (
    <Navbar maxWidth="2xl" className="max-wfull mx-auto" shouldHideOnScroll>
      <NavbarBrand >
        <div className="flex flex-nowrap justify-items-end items-end gap-2">
          <PiBuildingApartment className="size-8 text-gray-950" />
          <p className="font-bold text-inherit uppercase">Sam Apartment</p>
        </div>
      </NavbarBrand>

      <NavbarContent justify="end" >
        <NavbarItem className="hidden lg:flex ">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem  className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        {/* toggle menu */}
       <ToggleMenu />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
