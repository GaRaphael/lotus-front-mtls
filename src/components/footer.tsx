"use client";
import { Typography, IconButton, Button } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-8" style={{marginTop: "150px"}}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left pt-12">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              Lotus Alfaiataria
            </Typography>
            <Typography color="white" className="mb-12 font-normal"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              Vista bem, sinta-se bem.
            </Typography>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="flex gap-2">
            <IconButton variant="text" color="white"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
