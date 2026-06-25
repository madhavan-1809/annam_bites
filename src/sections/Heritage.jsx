import { useEffect, useRef, useState } from "react";
import ProductImage from "../assets/annam_product_img.png";
import AboutImage from "../assets/annam_about_final_img.png";

const bullets = [
  "Four generations of traditional South Indian recipes",
  "Every batch slow-roasted with no shortcuts",
  "Hand-packed with care before it reaches your door",
];

function HeritageSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`heritage ${visible ? "heritage--visible" : ""}`}
      ref={sectionRef}
    >
      {/* LEFT — two portrait cards */}
      <div className="heritage_images">
        <div className="heritage_card heritage_card--back">
          <div className="heritage_card_img">
            <img src={ProductImage} alt="Traditional snacks" />
            <div className="heritage_card_overlay" />
          </div>
          <div className="heritage_card_badge">
            <span className="heritage_card_badge_dot" />
            <span>Est. 1984</span>
          </div>
        </div>

        <div className="heritage_card heritage_card--front">
          <div className="heritage_card_img">
            <img src={AboutImage} alt="Our kitchen" />
            <div className="heritage_card_overlay" />
          </div>
          <div className="heritage_card_badge">
            <span className="heritage_card_badge_dot" />
            <span>4 Generations</span>
          </div>
        </div>

        {/* Floating stat pill */}
        <div className="heritage_float_stat">
          <span className="heritage_float_num">40+</span>
          <span className="heritage_float_label">Years of Craft</span>
        </div>
      </div>

      {/* RIGHT — content */}
      <div className="heritage_content">
        <div className="heritage_tag">
          <span className="heritage_tag_dot" />
          <span>Our Heritage</span>
        </div>

        <h2 className="heritage_title">
          Rooted in Tradition,
          <br />
          <span className="heritage_title_accent">Made with Love</span>
        </h2>

        <div className="heritage_divider" />

        <p className="heritage_body">
          Our story began in a small kitchen in Tamil Nadu, where our
          grandmother ground her own spices every morning before dawn. The smell
          of roasting rice flour and fresh coconut oil was our alarm clock — and
          our greatest inheritance.
        </p>

        <p className="heritage_body">
          Today, we carry those same recipes forward — unchanged, uncompromised.
          Every snack you taste carries four decades of memory and devotion.
        </p>

        <ul className="heritage_bullets">
          {bullets.map((b, i) => (
            <li key={i} className="heritage_bullet">
              <span className="heritage_bullet_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                </svg>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Full Story button — ribbon style */}
        {/* <div className="heritage_btn_wrap">
          <button className="heritage_btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5
                7.5 5S4.168 5.477 3 6.253v13C4.168 18.477
                5.754 18 7.5 18s3.332.477 4.5 1.253m0-13
                C13.168 5.477 14.754 5 16.5 5c1.747 0
                3.332.477 4.5 1.253v13C19.832 18.477
                18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
            </svg>
            Full Story
          </button>
          <div className="heritage_btn_ribbon" />
        </div> */}
      </div>
    </section>
  );
}

export default HeritageSection;
