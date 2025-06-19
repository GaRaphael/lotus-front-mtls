// components
import { Navbar, Footer } from "../../components";

// sections
import AllProductWomen from "../../components/modals/feminina/allProductWomen";


export default function Landing() {
  return (
    <>
      <Navbar />
      <div >
        <AllProductWomen />
      </div>
      {/* <Footer /> */}
    </>
  );
}
