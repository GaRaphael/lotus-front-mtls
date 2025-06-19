import React from 'react';
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import '../../public/css/featureCard.css';

interface FeatureCardProps {
  image: string;
  description: string;
  path: string;
}


const FeatureCard: React.FC<FeatureCardProps> = ({ image, description, path }) => {
  return (
    <Card color="transparent" shadow={false} className="feature-card" onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''>
      <CardBody className="flex flex-col items-center" onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''>
        <div className="relative mb-4 rounded-lg overflow-hidden image-wrapper">
          <img src={image} alt="Feature" className="image" />
          <div className="description">
            <Typography variant="h4" color="white" onPointerEnterCapture={{}} onPointerLeaveCapture={{}} placeholder=''
              onClick={() => window.location = path as any}
              style={{
                cursor: 'pointer',
              }}>
              {description}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;