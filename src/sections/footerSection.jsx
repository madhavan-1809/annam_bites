import instagram from "../assets/insta_img.svg";
import facebook from "../assets/fb_img.svg";

function FooterSection() {
  return (
    <footer className="footer" id="footer">
      <div className="footer_top">
        {/* COL 1 — Brand */}
        <div className="footer_brand">
          <div className="footer_logo">
            <div className="footer_logo_icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                  C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#F5A623"
                />
              </svg>
            </div>
            <span className="footer_logo_text">Annam Bite & Bites</span>
          </div>

          <p className="footer_tagline">
            "A Mother's Kitchen is Where Love Becomes Food ❤️"
          </p>

          <div className="footer_socials">
            <a
              href="https://www.instagram.com/annambites"
              className="footer_social_btn"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.facebook.com/annambites"
              className="footer_social_btn"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="footer_trust">
            <div className="footer_trust_item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0
                  0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02
                  12.02 0 003 9c0 5.591 3.824 10.29 9 11.622
                  5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#13B3B9"
                />
              </svg>
              <span>100% Natural</span>
            </div>
            <div className="footer_trust_item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2
                  2 0 01-2-2z"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#13B3B9"
                />
                <path
                  d="M9 22V12h6v10"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#13B3B9"
                />
              </svg>
              <span>Homemade</span>
            </div>
          </div>
        </div>

        {/* COL 2 — Quick Links */}
        <div className="footer_col">
          <h4 className="footer_col_title">Quick Links</h4>
          <ul className="footer_links">
            <li>
              <a href="#product-order">All Snacks</a>
            </li>
            <li>
              <a href="#about">Our Story</a>
            </li>
            <li>
              <a href="#process">Our Process</a>
            </li>

            <li>
              <a href="#footer">Contact Us</a>
            </li>
            <li>
              <a href="#footer">Shipping Policy</a>
            </li>
          </ul>
        </div>

        {/* COL 3 — Reach Us */}
        <div className="footer_col">
          <h4 className="footer_col_title">Reach Us</h4>
          <ul className="footer_contact">
            <li>
              <span className="footer_contact_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0
                    01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#F5A623"
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeWidth="1.8"
                    stroke="#F5A623"
                  />
                </svg>
              </span>
              <span>
                123 Traditional Way, Chennai,
                <br />
                Tamil Nadu
              </span>
            </li>
            <a href="tel:+919876543210">
              <li>
                <span className="footer_contact_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498
                    4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042
                    0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493
                    1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716
                    21 3 14.284 3 6V5z"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#F5A623"
                    />
                  </svg>
                </span>
                <span>+91 98765 43210</span>
              </li>
            </a>
            <a href="mailto:hello@annambites.com">
              <li>
                <span className="footer_contact_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5
                    19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0
                    00-2 2v10a2 2 0 002 2z"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#F5A623"
                    />
                  </svg>
                </span>
                <span>hello@annambites.com</span>
              </li>
            </a>
          </ul>
        </div>

        {/* COL 4 — Newsletter */}
        <div className="footer_col">
          <h4 className="footer_col_title">Join the Family</h4>
          <p className="footer_newsletter_desc">
            Get updates on fresh batches and new seasonal snacks.
          </p>
          <div className="footer_newsletter">
            <input
              type="email"
              placeholder="Your email"
              className="footer_newsletter_input"
            />
            <button className="footer_newsletter_btn">Join</button>
          </div>

          {/* Opening hours */}
          <div className="footer_hours">
            <div className="footer_hours_dot" />
            <span>Orders packed Mon–Sat, 8AM–6PM</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer_bottom">
        <p className="footer_copy">
          © 2024 Annam Bite & Bites. All rights reserved.
        </p>
        <div className="footer_bottom_links">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms</a>
        </div>
        <p className="footer_made">Handmade with ❤️ in India</p>
      </div>
    </footer>
  );
}

export default FooterSection;
