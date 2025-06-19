import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../public/suit_favicon.png";
import Link from 'next/link';


interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
        placeholder={"Lótus Alfaiataria"}
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={"white"}
      className="fixed top-0 z-50 border-0"
      placeholder={"Lótus Alfaiataria"}
      onPointerEnterCapture={() => { }}
      onPointerLeaveCapture={() => { }}
    >

      <div className="container mx-auto flex items-center ">
        <div style={
          {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "30px"
          }
        }
        >
          <img src={logo.src} alt="Logo" />
        </div>


        <Link href="/" passHref>
          <Typography
            as="a"
            target="_blank"
            variant="h3"
            color={"black"}
            placeholder={"Lótus Alfaiataria"}
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
            style={{
              color: "black",
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >

            Lotus Alfaiataria
          </Typography>
        </Link>

        <div className="row-auto ml-[450px]">
          <ul
            className={`hidden items-center row-auto gap-6 lg:flex "text-gray-900" `}
          >
            <Typography
              style={{
                display: "inline-block",
                marginLeft: "30px",
                color: "black",
                fontFamily: "Inter",
                fontWeight: "bold",
              }}
              as="a"
              href="/landing"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              variant="h4"
            >
              <NavItem href="/landing">Home</NavItem>
            </Typography>

            <Typography
              style={{
                display: "inline-block",
                marginLeft: "30px",
                color: "black",
                fontFamily: "Inter",
                fontWeight: "bold",
              }}
              as="a"
              href="/dash"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              variant="h4"
            >
              <NavItem href="/landing">Dashboard</NavItem>
            </Typography>

            <Typography
              style={{
                display: "inline-block",
                marginLeft: "30px",
                color: "black",
                fontFamily: "Inter",
                fontWeight: "bold",
              }}
              as="a"
              href="/"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              variant="h4"
            >
              <NavItem href="/">sair</NavItem>
            </Typography>
          </ul>

        </div>



        <IconButton
          variant="text"
          color={"gray"}
          placeholder={"Lótus Alfaiataria"}
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray"
              size="sm"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray"
              size="sm"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </div>
        </div>
      </Collapse>
    </MTNavbar >

  );
}

export default Navbar;
