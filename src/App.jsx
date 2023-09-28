import Activites from "./component/Activites";
import Booking from "./component/Booking";
import Contuct from "./component/Contuct";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Topbar from "./component/Topbar";



const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activites/>
      <Booking/>
      <Gallery/>
      <Contuct/>
      <Footer/>
    </>
  );
};

export default App;