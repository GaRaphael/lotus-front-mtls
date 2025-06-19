// components
import { Navbar, Footer } from "../../components";

// sections
import AllProductCategories from "../../components/modals/casual/allProductCasual";


export default function Landing() {
  
  return (
    <>
      <Navbar />
      <div >
        <AllProductCategories />
      </div>
      {/* <Footer /> */}
    </>
  );
}
