import { useState, useEffect, useRef } from "react";
import Logo from "../assets/annam_logo.png";
// import profileIcon from "../assets/profile_icon.svg";
import CartIcon from "../assets/cart_icon.svg";

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div ref={menuRef}>
        <div className="top_glow_line" />

        <section className="header">
          {/* LEFT */}
          <div className="main-header-left">
            <div className="logo-ctn">
              <img src={Logo} alt="Annam Bites" />
            </div>

            <nav className="nav-wrapper">
              <ul className="nav-list">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#about">
                  <li>Our Story</li>
                </a>
                <a href="#product-order">
                  <li>Snacks</li>
                </a>
                {/* <li>About</li> */}
                <a href="#footer">
                  <li>Contact Us</li>
                </a>
              </ul>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="main-header-right">
            {/* <button className="action-btn icon-only">
              <img src={profileIcon} alt="profile" />
            </button> */}

            <a className="action-btn" href="#product-order">
              <img src={CartIcon} alt="cart" />
              <span>Orders</span>
              {/* <span className="cart-badge">2</span> */}
            </a>

            <button
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </section>

        {/* MOBILE NAV */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={() => setMenuOpen(false)}>Our Story</li>
            <li onClick={() => setMenuOpen(false)}>Snacks</li>
            <li onClick={() => setMenuOpen(false)}>About</li>
            <li onClick={() => setMenuOpen(false)}>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* BACKGROUND OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}

export default MainHeader;
