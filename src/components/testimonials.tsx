"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "./testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "Eu tive uma experiência incrível com a plataforma. Ela é fácil de usar e me ajudou a transformar o meu negócio. Recomendo a todos!",
    client: "Jéssica Pinheiro",
    title: "CEO @FISIO LTD.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "A plataforma é incrível! Ela me ajudou a criar um site incrível para o meu negócio. Estou muito satisfeito com o resultado!",
    client: "Daniel Neris",
    title: "DESIGNER @QUEIJO MINAS INC.",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Ulisses Brandão",
    title: "CFO @TIJUCAL CITY CORP",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2"
            placeholder={"Lótus Alfaiataria"}
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}>
            O Que Nossos Clientes Dizem
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
            placeholder={"Lótus Alfaiataria"}
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
          >
            Confira o que alguns de nossos clientes têm a dizer sobre a nossa plataforma e
            como ela tem ajudado a transformar os seus negócios.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
