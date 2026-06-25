// import { useState } from "react";
// import ProductImage from "../assets/annam_product_img.png";

// function ProductSection() {
//   const [qty, setQty] = useState(1);

//   const base_price = 185;
//   const amount = base_price * qty;

//   return (
//     <section className="product" id="product-order">
//       {/* LEFT — image */}
//       <div className="product_left">
//         <div className="product_img_ctn">
//           <span className="product_badge">Crunchy Homemade Delight</span>
//           <img src={ProductImage} alt="Sangu Biscuit" />
//         </div>
//       </div>

//       {/* RIGHT — details */}
//       <div className="product_right">
//         {/* Stars + reviews */}
//         <div className="product_rating">
//           <div className="product_stars">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <svg
//                 key={star}
//                 className={`product_star ${star <= 2 ? "filled" : ""}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 2l3.09 6.26L22 9.27l-5 4.87
//                      1.18 6.88L12 17.77l-6.18 3.25
//                      1.18-6.88-5-4.87 6.91-1.01L12 2z"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             ))}
//           </div>
//           <span className="product_review_count">(480 Reviews)</span>
//         </div>

//         {/* Title */}
//         <h3 className="product_title">Sangu Biscuit — 200g</h3>

//         {/* Price */}
//         <p className="product_price">₹{amount}.00</p>

//         {/* Description */}
//         <p className="product_desc">
//           Our signature snack. Light, airy, and incredibly crunchy. These
//           traditional spiral-patterned delights are made from slow-roasted rice
//           flour and local spices.
//         </p>

//         {/* Qty + Add to Cart */}
//         <div className="product_actions">
//           <div className="product_qty">
//             <button
//               className="product_qty_btn"
//               onClick={() => {
//                 setQty((q) => Math.max(1, q - 1));
//               }}
//             >
//               −
//             </button>
//             <span className="product_qty_num">{qty}</span>
//             <button
//               className="product_qty_btn"
//               onClick={() => {
//                 setQty((q) => q + 1);
//               }}
//             >
//               +
//             </button>
//           </div>
//           <div className="hero-btns product_btn">
//             <button className="hero-btn-primary">Order Now →</button>
//             <button className="hero-btn-secondary">Add To Cart</button>
//           </div>
//         </div>

//         {/* Info row */}
//         <div className="product_info_row">
//           <div className="product_info_item">
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
//               <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//             <span>Fresh Batch: Today</span>
//           </div>
//           <div className="product_info_item">
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M9 22V12h6v10"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <span>Free Delivery above ₹500</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductSection;

import { useState } from "react";
import ProductImage from "../assets/annam_product_img.png";

function ProductSection() {
  const [qty, setQty] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const base_price = 185;
  const amount = base_price * qty;

  const handleOrderNow = () => {
    setShowAlert(true);
    // Optional: Automatically close the alert after 4 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
    <section className="product" id="product-order">
      {/* --- CUSTOM ANIMATED ALERT --- */}
      <div className={`custom-alert-overlay ${showAlert ? "show" : ""}`}>
        <div className="custom-alert-box">
          <div className="alert-icon-success">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12l6 6L20 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="alert-title">Order Placed!</h4>
          <p className="alert-message">
            Our team will contact you shortly to confirm your order.
          </p>
          <button
            className="alert-close-btn"
            onClick={() => setShowAlert(false)}
          >
            Dismiss
          </button>
        </div>
      </div>

      {/* LEFT — image */}
      <div className="product_left">
        <div className="product_img_ctn">
          <span className="product_badge">Crunchy Homemade Delight</span>
          <img src={ProductImage} alt="Sangu Biscuit" />
        </div>
      </div>

      {/* RIGHT — details */}
      <div className="product_right">
        {/* Stars + reviews */}
        <div className="product_rating">
          <div className="product_stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`product_star ${star <= 5 ? "filled" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87
                     1.18 6.88L12 17.77l-6.18 3.25
                     1.18-6.88-5-4.87 6.91-1.01L12 2z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
          <span className="product_review_count">(480 Reviews)</span>
        </div>

        {/* Title */}
        <h3 className="product_title">Sangu Biscuit — 200g</h3>

        {/* Price */}
        <p className="product_price">₹{amount}.00</p>

        {/* Description */}
        <p className="product_desc">
          Our signature snack. Light, airy, and incredibly crunchy. These
          traditional spiral-patterned delights are made from slow-roasted rice
          flour and local spices.
        </p>

        {/* Qty + Add to Cart */}
        <div className="product_actions">
          <div className="product_qty">
            <button
              className="product_qty_btn"
              onClick={() => {
                setQty((q) => Math.max(1, q - 1));
              }}
            >
              −
            </button>
            <span className="product_qty_num">{qty}</span>
            <button
              className="product_qty_btn"
              onClick={() => {
                setQty((q) => q + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="hero-btns product_btn">
            {/* Added onClick listener here */}
            <button className="hero-btn-primary" onClick={handleOrderNow}>
              Order Now →
            </button>
            <button className="hero-btn-secondary">Add To Cart</button>
          </div>
        </div>

        {/* Info row */}
        <div className="product_info_row">
          <div className="product_info_item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Fresh Batch: Today</span>
          </div>
          <div className="product_info_item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12h6v10"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Free Delivery above ₹500</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
