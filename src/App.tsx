import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ProjectPage from "./pages/Project.page";
import Loader from "./components/shared/loader";
import Header from "./components/shared/header/Header";
import Eduhire from "./pages/case-studies/Eduhire";
import VolvoPartnerConnect from "./pages/case-studies/VolvoPartnerConnect";
import RideCaseStudy from "./pages/case-studies/RideApp";
import LandingPages from "./pages/case-studies/LandingPage";
import MobileApp from "./pages/case-studies/MobileApp";
import FoodDashbaord from "./pages/case-studies/food-safety-dashboard";
// import { MainLayout } from "./layouts";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {/* <Loader /> */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        {/* <Route element={<MainLayout />}/> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/case-study/eduhire" element={<Eduhire />} />
        <Route path="/case-study/rideapp" element={<RideCaseStudy />} />
        <Route path="/case-study/landing-pages" element={<LandingPages />} />
        <Route path="/case-study/mobileapp" element={<MobileApp />} />
        <Route
          path="/case-study/volvo-partner-connect"
          element={<VolvoPartnerConnect />}
        />
        <Route
          path="/case-study/food-safety-dashboard"
          element={<FoodDashbaord />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
