// import cal_icon from "../assets/call_img.svg";
// import email_icon from "../assets/mail_img.svg";
// import location_icon from "../assets/location_img.svg";
// import facebook from "../assets/fb_img.svg";
// import instagram from "../assets/insta_img.svg";
// import Youtube from "../assets/yt_img.svg";
// import "../styles/social_header_style.css";

// function Header() {
//   return (
//     <section className="social_section">
//       <div className="social_glow_line" />

//       <div className="social_left">
//         <div className="reachus_details_ctn">
//           <span className="icon_wrap">
//             <img src={cal_icon} alt="phone" />
//           </span>
//           <p>+91 9876543210</p>
//         </div>
//         <div className="reachus_details_ctn">
//           <span className="icon_wrap">
//             <img src={email_icon} alt="email" />
//           </span>
//           <p>hello@annambites.com</p>
//         </div>
//         <div className="reachus_details_ctn">
//           <span className="icon_wrap">
//             <img src={location_icon} alt="location" />
//           </span>
//           <p>Chennai, Tamil Nadu</p>
//         </div>
//       </div>

//       <div className="social_right">
//         <span className="follow_label">Follow us</span>
//         <div className="social_icons_group">
//           <a href="#" className="social_icon_btn" aria-label="Facebook">
//             <img src={facebook} alt="facebook" />
//           </a>
//           <a href="#" className="social_icon_btn" aria-label="Instagram">
//             <img src={instagram} alt="instagram" />
//           </a>
//           <a href="#" className="social_icon_btn" aria-label="YouTube">
//             <img src={Youtube} alt="youtube" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Header;
import cal_icon from "../assets/call_img.svg";
import email_icon from "../assets/mail_img.svg";
import location_icon from "../assets/location_img.svg";
import facebook from "../assets/fb_img.svg";
import instagram from "../assets/insta_img.svg";
import Youtube from "../assets/yt_img.svg";
import "../styles/social_header_style.css";

function Header() {
  return (
    <section className="social_section">
      <div className="social_glow_line" />

      <div className="social_left">
        <div className="reachus_details_ctn">
          <span className="icon_wrap">
            <img src={cal_icon} alt="phone" />
          </span>
          <p>+91 9876543210</p>
        </div>

        <div className="reachus_details_ctn reachus-email">
          <span className="icon_wrap">
            <img src={email_icon} alt="email" />
          </span>
          <p>hello@annambites.com</p>
        </div>

        <div className="reachus_details_ctn reachus-location">
          <span className="icon_wrap">
            <img src={location_icon} alt="location" />
          </span>
          <p>Chennai, Tamil Nadu</p>
        </div>
      </div>

      <div className="social_right">
        <span className="follow_label">Follow us</span>
        <div className="social_icons_group">
          <a href="#" className="social_icon_btn" aria-label="Facebook">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" className="social_icon_btn" aria-label="Instagram">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#" className="social_icon_btn" aria-label="YouTube">
            <img src={Youtube} alt="youtube" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
