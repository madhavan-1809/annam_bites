import { useState, useEffect, useRef } from "react";
import Logo from "../assets/annam_logo.png";
import profileIcon from "../assets/profile_icon.svg";
import CartIcon from "../assets/cart_icon.svg";

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
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
    <div ref={menuRef}>
      <section className="header">
        {/* LEFT: Logo + Desktop Nav */}
        <div className="main-header-left">
          <div className="logo-ctn">
            <img src={Logo} alt="Annam Bites" />
          </div>
          <nav className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li>Home</li>
              <li>Our Story</li>
              <li>Snacks</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>

        {/* RIGHT: Profile + Cart + Hamburger */}
        <div className="main-header-right">
          <button className="action-btn icon-only" aria-label="Profile">
            <img src={profileIcon} alt="profile" />
          </button>

          <button className="action-btn" aria-label="Cart">
            <img src={CartIcon} alt="cart" />
            <span>Orders</span>
            <span className="cart-badge">2</span>
          </button>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </section>

      {/* Mobile Dropdown Nav */}
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
  );
}

export default MainHeader;
// export default MainHeader;

// import { useState } from "react";
// import Logo from "../assets/annam_logo.png";
// import profileIcon from "../assets/profile_icon.svg";
// import CartIcon from "../assets/cart_icon.svg";

// function MainHeader() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <section className="header">
//         {/* LEFT: Logo + Desktop Nav */}
//         <div className="main-header-left">
//           <div className="logo-ctn">
//             <img src={Logo} alt="Annam Bites" />
//           </div>
//           <nav className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
//             <ul className="nav-list">
//               <li>Home</li>
//               <li>Our Story</li>
//               <li>Snacks</li>
//               <li>About</li>
//               <li>Contact Us</li>
//             </ul>
//           </nav>
//         </div>

//         {/* RIGHT: Profile + Cart + Hamburger */}
//         <div className="main-header-right">
//           <button className="action-btn icon-only" aria-label="Profile">
//             <img src={profileIcon} alt="profile" />
//           </button>

//           <button className="action-btn" aria-label="Cart">
//             <img src={CartIcon} alt="cart" />
//             <span>Orders</span>
//             <span className="cart-badge">2</span>
//           </button>

//           {/* Hamburger — mobile only */}
//           <button
//             className={`hamburger ${menuOpen ? "active" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>
//       </section>

//       {/* Mobile Dropdown Nav */}
//       <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
//         <ul className="mobile-nav-list">
//           <li onClick={() => setMenuOpen(false)}>Home</li>
//           <li onClick={() => setMenuOpen(false)}>Our Story</li>
//           <li onClick={() => setMenuOpen(false)}>Snacks</li>
//           <li onClick={() => setMenuOpen(false)}>About</li>
//           <li onClick={() => setMenuOpen(false)}>Contact Us</li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default MainHeader;
