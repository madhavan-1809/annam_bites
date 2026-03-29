const reviews = [
  {
    stars: 5,
    text: "The Sangu Biscuits tasted exactly like the ones my grandmother used to make in the village. It actually made me emotional. Thank you for preserving these tastes!",
    name: "Priya Sharma",
    location: "Mumbai",
    initials: "PS",
    color: "#13B3B9",
  },
  {
    stars: 5,
    text: "I'm very health-conscious and usually avoid snacks because of palm oil. Finding Annam was a blessing. Real ingredients, amazing crunch. 10/10 recommended.",
    name: "Anand Iyer",
    location: "Bangalore",
    initials: "AI",
    color: "#C8860A",
  },
  {
    stars: 5,
    text: "My kids are obsessed! It's so much better to give them these than factory-made chips. Fresh, clean, and delicious. We order every month now.",
    name: "Meera Reddy",
    location: "Hyderabad",
    initials: "MR",
    color: "#DD3C57",
  },
];

function ReviewSection() {
  return (
    <section className="reviews">
      {/* Header */}
      <div className="reviews_header">
        <div className="reviews_tag">
          <span className="reviews_tag_dot" />
          <span>Customer Reviews</span>
        </div>
        <h2 className="reviews_title">From Our Kitchen to Yours</h2>
        <p className="reviews_subtitle">
          Join the thousands of families who've made Annam a part of their
          tea-time rituals.
        </p>

        {/* Overall rating row */}
        <div className="reviews_overall">
          <div className="reviews_overall_stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                className="review_star filled"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87
                  1.18 6.88L12 17.77l-6.18 3.25
                  1.18-6.88-5-4.87 6.91-1.01L12 2z"
                />
              </svg>
            ))}
          </div>
          <span className="reviews_overall_score">4.9</span>
          <span className="reviews_overall_count">from 480+ reviews</span>
        </div>
      </div>

      {/* Cards */}
      <div className="reviews_grid">
        {reviews.map((r, i) => (
          <div className="review_card" key={i}>
            {/* Stars */}
            <div className="review_stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className={`review_star ${s <= r.stars ? "filled" : ""}`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87
                    1.18 6.88L12 17.77l-6.18 3.25
                    1.18-6.88-5-4.87 6.91-1.01L12 2z"
                  />
                </svg>
              ))}
            </div>

            {/* Quote mark */}
            <span className="review_quote_mark">"</span>

            {/* Text */}
            <p className="review_text">{r.text}"</p>

            {/* Footer */}
            <div className="review_footer">
              <div className="review_avatar" style={{ background: r.color }}>
                {r.initials}
              </div>
              <div className="review_author">
                <p className="review_name">{r.name}</p>
                <p className="review_location">{r.location}</p>
              </div>
              <div className="review_verified">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0
                    11-18 0 9 9 0 0118 0z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#16a34a"
                  />
                </svg>
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
