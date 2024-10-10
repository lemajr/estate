import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { PiBuildingApartment } from "react-icons/pi";
import Banner from "./Banner";
import React from "react";

const Header = () => {
  const menuItems = [
    {
      id:  1,
      label: "Home",
      href: "/",
    },
    {
      id:  2,
      label: "Profile",
      href: "/profile",
    },
    {
      id:  3,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      id:  4,
      label: "Log In",
      href: "/login",
    }
  ];

  return (
    <>
    <Navbar maxWidth="2xl" disableAnimation isBordered className="container mx-auto">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />

      {/* smaller medium screen */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
        <div className="flex flex-nowrap justify-items-end items-end gap-2">
           <PiBuildingApartment className="size-7 text-gray-950" />
          <p className="font-bold text-inherit uppercase hidden sm:flex">Sam Apartment</p>
        </div>
        </NavbarBrand>
      </NavbarContent>
      </NavbarContent>


      {/* larger medium screen */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <div className="flex flex-nowrap justify-items-end items-end gap-2">
           <PiBuildingApartment className="size-8 text-gray-950" />
          <p className="font-bold text-inherit uppercase">Sam Apartment</p>
        </div>
        </NavbarBrand>
        
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

      <NavbarMenu>
        
      <p className="font-bold text-inherit uppercase text-lg">Sam Apartment</p>

        {menuItems.map((id, index) => (
          <NavbarMenuItem key={`${id}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 1 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {id.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  );
}

export default Header;
