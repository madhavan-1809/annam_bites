import AboutImage from "../assets/annam_about_final_img.png";

function OurStorySection() {
  return (
    <section className="section_story" id="about">
      {/* LEFT — image + quote */}
      <div className="section_story_left">
        <div className="section_story_img_ctn">
          <img src={AboutImage} alt="Annam founder cooking" />
          <div className="section_story_quote">
            <span className="section_story_quote_icon">"</span>
            <div>
              <p className="section_story_quote_text">
                Food is the language of love.
              </p>
              <p className="section_story_quote_author">
                — Founder, Annam Bite & Bites
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — content */}
      <div className="section_story_right">
        <div className="section_story_tag">
          <span className="section_story_tag_dot" />
          <span>Our Story</span>
        </div>

        <h3 className="section_story_title">
          The <span style={{ color: "red" }}>Heart</span>{" "}
          <span className="heart_icon">❤️</span>
          <br />
          Behind Annam
        </h3>

        <p className="section_story_subtitle">
          It all started with a simple wooden spoon and a lot of patience.
        </p>

        <div className="section_story_divider" />

        <p className="section_story_body">
          At Annam, we don't just make snacks — we recreate memories. My mother
          always said that the secret ingredient isn't in the spice box. It's in
          the <span className="section_story_highlight">intent</span>.
        </p>

        <p className="section_story_body">
          Every Sangu Biscuit is hand-pressed, every spice is slow-roasted, and
          every batch is tasted by our family before it reaches yours. We use no
          palm oil, no artificial preservatives, and zero shortcuts.
        </p>

        <div className="section_story_blockquote">
          <div className="section_story_blockquote_bar" />
          <p>
            "I want my grandchildren to eat the same pure food my grandmother
            fed me. That's my promise to you."
          </p>
        </div>

        <div className="section_story_badges">
          <div className="section_story_badge">
            <span className="section_story_badge_num">4</span>
            <span className="section_story_badge_label">Generations</span>
          </div>
          <div className="section_story_badge">
            <span className="section_story_badge_num">20+</span>
            <span className="section_story_badge_label">Recipes</span>
          </div>
          <div className="section_story_badge">
            <span className="section_story_badge_num">100%</span>
            <span className="section_story_badge_label">Natural</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
