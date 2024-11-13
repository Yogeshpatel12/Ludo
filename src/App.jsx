import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Classic from "./pages/Classic";
import Timer from "./pages/Timer";
import Quick from "./pages/Quick";
import Solo from "./pages/Solo";
import Faq from "./pages/Faq";
import Legality from "./pages/Legality";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TDSDeductionPolicy from "./pages/TDSDeductionPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";


function App() {


  return (
    <>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/classic" element={<Classic />} />
        <Route exact path="/timer" element={<Timer />} />
        <Route exact path="/quick-move" element={<Quick />} />
        <Route exact path="/solo" element={<Solo />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/legality" element={<Legality />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/refund-policy" element={<RefundPolicy />} />
        <Route exact path="/tds-policy" element={<TDSDeductionPolicy />} />
        <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route exact path="/fairplay" element={<FairPlay />} />
        <Route exact path="/responsible-gaming" element={<ResponsibleGaming />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
