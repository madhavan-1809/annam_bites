import Product01 from "../assets/product_01.jpeg";
import Product02 from "../assets/product_02.jpeg";
import Product03 from "../assets/images03.png";
import Product04 from "../assets/images04.png";
import Product05 from "../assets/images05.png";
import Product06 from "../assets/images06.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-circle hero-bg-circle--1" />
      <div className="hero-bg-circle hero-bg-circle--2" />

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
          <a href="#product-order">
            <button className="hero-btn-primary">Order Now →</button>
          </a>
          <a href="#about">
            <button className="hero-btn-secondary">Our Story</button>
          </a>
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
      <div className="hero-right"></div>
    </section>
  );
}

export default HeroSection;
