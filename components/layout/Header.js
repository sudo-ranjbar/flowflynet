import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export default function Header() {

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image src="/assets/img/fly-logo.png" className="mr-3" alt="Logo" width={100} height={1}/>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
          <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          خانه
        </NavbarLink>
        <NavbarLink href="/dashboard">پنل کاربری</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}