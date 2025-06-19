// components
import { Navbar, Footer } from "../../components";

// sections
import AllProductAccessories from "../../components/modals/acessorios/allProductAccessories";


export default function Landing() {
  return (
    <>
      <Navbar />
      <div >
        <AllProductAccessories />
      </div>
      {/* <Footer /> */}
    </>
  );
}
