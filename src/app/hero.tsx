"use client";
import background from "../../public/image/background_landing.jpg";


function Hero() {
  return (
    <div className="relative min-h-screen w-full"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
    </div>  
  );
}

export default Hero;
