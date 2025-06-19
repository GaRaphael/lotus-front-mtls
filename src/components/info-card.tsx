import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false} onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''>
      <CardBody className="grid px-0" onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''>
        <Typography variant="h2" color="blue-gray" className="mb-2" onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''>
          {title}
        </Typography>
        <Typography className=" font-normal" onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;