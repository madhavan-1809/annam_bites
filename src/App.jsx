import Header from "./sections/Header_section.jsx";
import HeroSection from "./sections/Hero_section.jsx";
import MainHeader from "./sections/Main_header.jsx";
import TrustSection from "./sections/Trust_section.jsx";

// ================
// Styles
// ================
import "./styles/social_header_style.css";
import "./styles/main_page.css";
import OurStorySection from "./sections/Our_story.jsx";
import ProductSection from "./sections/Product_section.jsx";
import PromotionSection from "./sections/Promotion_section.jsx";
import ReviewSection from "./sections/ReviewSection.jsx";
import DeliverySection from "./sections/DeliverySection.jsx";

function App() {
  return (
    <>
      {/* <Header /> */}
      <MainHeader />
      <div className="main-body">
        <HeroSection />
        <OurStorySection />
        <TrustSection />
        <ProductSection />
        <PromotionSection />
        <ReviewSection />
        <DeliverySection />
      </div>
    </>
  );
}

export default App;
