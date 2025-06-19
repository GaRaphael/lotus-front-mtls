// components
import { Navbar, Footer } from "../../components";

// sections
import Hero from "../hero";
import Feature from "../feature";
import Products from "../products";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Products />
      <Footer />
    </>
  );
}
