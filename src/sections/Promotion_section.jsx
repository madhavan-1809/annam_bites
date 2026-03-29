import TeaImage from "../assets/tea_image_promotion.webp";
import SnackImage from "../assets/biscuit_image_promotion.jpeg";

function PromotionSection() {
  return (
    <section className="promotion">
      {/* LEFT */}
      <div className="promotion_left">
        <h3 className="promotion_heading">
          Crunchy outside. <br />
          Nostalgic inside.
        </h3>
        <h2 className="promotion_accent">Perfect with evening tea.</h2>
        <p className="promotion_desc">
          Remember those rainy evenings at Grandma's house? The aroma of brewing
          cardamom tea and the satisfying crunch of freshly fried biscuits?
          We've bottled that magic for you.
        </p>
        <button className="promotion_link">
          Discover the Sangu Story
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* RIGHT */}
      <div className="promotion_right">
        {/* Main tall image — tea */}
        <div className="promotion_img_main">
          <img src={TeaImage} alt="Evening tea" />
        </div>

        {/* Right column — snack + pairing card */}
        <div className="promotion_img_col">
          {/* Top image — snack */}
          <div className="promotion_img_top">
            <img src={SnackImage} alt="Sangu Biscuit" />
          </div>

          {/* Bottom pairing card */}
          <div className="promotion_pairing_card">
            <div className="promotion_pairing_icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8h1a4 4 0 010 8h-1"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#C8860A"
                />
                <path
                  d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#C8860A"
                />
                <path
                  d="M6 1v3M10 1v3M14 1v3"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  stroke="#C8860A"
                />
              </svg>
            </div>
            <p className="promotion_pairing_text">
              Best paired with Masala Chai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionSection;
