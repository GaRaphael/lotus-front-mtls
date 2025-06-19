import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card
      shadow={false}
      className="items-center text-center"
      placeholder={"Lótus Alfaiataria"}
      onPointerEnterCapture={() => { }}
      onPointerLeaveCapture={() => { }}>
      <CardBody
        placeholder={"Lótus Alfaiataria"}
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}>
        <Typography variant="h6" color="blue-gray"
          placeholder={"Lótus Alfaiataria"}
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}>
          {client}
        </Typography>
        <Typography variant="small" className="mb-3 font-medium !text-gray-700"
          placeholder={"Lótus Alfaiataria"}
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}>
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
          placeholder={"Lótus Alfaiataria"}
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;