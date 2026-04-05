// import { useState, useEffect, useRef } from "react";
// import Product01 from "../assets/product_01.jpeg";
// import Product02 from "../assets/product_02.jpeg";
// import Product03 from "../assets/images03.png";
// import Product04 from "../assets/images04.png";
// import Product05 from "../assets/images05.png";
// import Product06 from "../assets/images06.png";

// const slides = [
//   { img: Product04, label: "Spicy Mixture" },
//   { img: Product03, label: "Spicy Mixture" },
//   { img: Product05, label: "Spicy Mixture" },
//   //   { img: Product01, label: "Homemade Murukku" },
//   { img: Product02, label: "Traditional Sweets" },
//   //   { img: Product06, label: "Spicy Mixture" },
// ];

// function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 3500);
//   };

//   const goTo = (index) => {
//     setCurrent(index);
//     startTimer();
//   };

//   const goPrev = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     startTimer();
//   };

//   const goNext = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//     startTimer();
//   };

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <section className="hero-section">
//       <div className="hero-bg-circle hero-bg-circle--1" />
//       <div className="hero-bg-circle hero-bg-circle--2" />

//       {/* LEFT */}
//       <div className="hero-left">
//         <div className="hero-tag">
//           <span className="hero-tag-dot" />
//           <span>Traditional Homemade Goodness</span>
//         </div>

//         <h1 className="hero-title">
//           From Our Kitchen <br />
//           to Your <span className="hero-accent">Heart ❤️</span>
//         </h1>

//         <p className="hero-desc">
//           A mother's love in every bite. Fresh. Pure. Traditional. No shortcuts
//           — just the warmth of home delivered to your doorstep.
//         </p>

//         <div className="hero-stats">
//           <div className="hero-stat">
//             <span className="hero-stat-num">500+</span>
//             <span className="hero-stat-label">Happy Customers</span>
//           </div>
//           <div className="hero-divider" />
//           <div className="hero-stat">
//             <span className="hero-stat-num">20+</span>
//             <span className="hero-stat-label">Recipes</span>
//           </div>
//           <div className="hero-divider" />
//           <div className="hero-stat">
//             <span className="hero-stat-num">100%</span>
//             <span className="hero-stat-label">Homemade</span>
//           </div>
//         </div>

//         <div className="hero-btns">
//           <button className="hero-btn-primary">Order Now →</button>
//           <button className="hero-btn-secondary">Our Story</button>
//         </div>

//         <div className="hero-trust">
//           <span className="hero-trust-item">
//             <span>✦</span> Free Delivery
//           </span>
//           <span className="hero-trust-item">
//             <span>✦</span> Fresh Daily
//           </span>
//           <span className="hero-trust-item">
//             <span className="star">✦</span> No Preservatives
//           </span>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="hero-right">
//         <div className="hero-slider">
//           {slides.map((slide, i) => (
//             <div
//               key={i}
//               className={`hero-slide ${i === current ? "active" : ""}`}
//             >
//               <img src={slide.img} alt={slide.label} />
//               <div className="hero-slide-overlay" />
//               <span className="hero-slide-label">{slide.label}</span>
//             </div>
//           ))}

//           {slides.length > 1 && (
//             <>
//               <button
//                 className="hero-arrow hero-arrow--prev"
//                 onClick={goPrev}
//                 aria-label="Previous"
//               >
//                 ‹
//               </button>
//               <button
//                 className="hero-arrow hero-arrow--next"
//                 onClick={goNext}
//                 aria-label="Next"
//               >
//                 ›
//               </button>
//             </>
//           )}

//           <div className="hero-counter">
//             {current + 1} / {slides.length}
//           </div>
//         </div>

//         {slides.length > 1 && (
//           <div className="hero-dots">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 className={`hero-dot ${i === current ? "active" : ""}`}
//                 onClick={() => goTo(i)}
//                 aria-label={`Slide ${i + 1}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

// import { useState, useEffect, useRef } from "react";
import Product01 from "../assets/product_01.jpeg";
import Product02 from "../assets/product_02.jpeg";
import Product03 from "../assets/images03.png";
import Product04 from "../assets/images04.png";
import Product05 from "../assets/images05.png";
import Product06 from "../assets/images06.png";

// const slides = [
//   { img: Product04, label: "Spicy Mixture" },
//   { img: Product03, label: "Spicy Mixture" },
//   { img: Product05, label: "Spicy Mixture" },
//   { img: Product01, label: "Homemade Murukku" },
//   { img: Product02, label: "Traditional Sweets" },
//   { img: Product06, label: "Spicy Mixture" },
// ];

function HeroSection() {
  // const [current, setCurrent] = useState(0);
  // const timerRef = useRef(null);

  // const startTimer = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 3500);
  // };

  // const goTo = (index) => {
  //   setCurrent(index);
  //   startTimer();
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => clearInterval(timerRef.current);
  // }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-circle hero-bg-circle--1" />
      <div className="hero-bg-circle hero-bg-circle--2" />

      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          <span>Traditional Homemade Goodness</span>
        </div>

        <h1 className="hero-title">
          From Our Kitchen <br />
          to Your <span className="hero-accent">Heart ❤️</span>
        </h1>

        <p className="hero-desc">
          A mother's love in every bite. Fresh. Pure. Traditional. No shortcuts
          — just the warmth of home delivered to your doorstep.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-label">Happy Customers</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">20+</span>
            <span className="hero-stat-label">Recipes</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">100%</span>
            <span className="hero-stat-label">Homemade</span>
          </div>
        </div>

        <div className="hero-btns">
          <button className="hero-btn-primary">Order Now →</button>
          <button className="hero-btn-secondary">Our Story</button>
        </div>

        <div className="hero-trust">
          <span className="hero-trust-item">
            <span>✦</span> Free Delivery
          </span>
          <span className="hero-trust-item">
            <span>✦</span> Fresh Daily
          </span>
          <span className="hero-trust-item">
            <span>✦</span> No Preservatives
          </span>
        </div>
      </div>

      {/* RIGHT */}
      {/* <div className="hero-right">
        <div className="hero-slider">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`hero-slide ${i === current ? "active" : ""}`}
            >
              <img src={slide.img} alt={slide.label} />
              <div className="hero-slide-overlay" />
              <div className="hero-slide-footer">
                <span className="hero-slide-label">{slide.label}</span>
                <span className="hero-slide-count">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}

          <div className="hero-progress">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-progress-bar ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default HeroSection;
