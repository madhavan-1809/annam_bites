import trustIcon01 from "../assets/icon_trust_01.svg";
import trustIcon02 from "../assets/icon_trust_02.svg";
import trustIcon03 from "../assets/icon_trust_03.svg";
import trustIcon04 from "../assets/icon_trust_04.svg";

function TrustSection() {
  const trustCardContents = [
    {
      icon: trustIcon01,
      title: "No Palm Oil",
      content:
        "Only pure, high-quality fats that are good for your heart and health.",
    },
    {
      icon: trustIcon02,
      title: "No Preservatives",
      content:
        "Freshly made to order. Our snacks rely on traditional preservation methods.",
    },
    {
      icon: trustIcon03,
      title: "Traditional Recipes",
      content:
        "Authentic tastes passed down through four generations of our family.",
    },
    {
      icon: trustIcon04,
      title: "Mother's Care",
      content:
        "Every piece is hand-selected and packed with personal attention.",
    },
  ];

  return (
    <section className="section_trust">
      <h1>Why Mothers Trust Us</h1>
      <p>Purity isn't a marketing slogan for us; it's our heritage.</p>
      <div className="section_trust_banner">
        {trustCardContents.map((item, index) => (
          <div className="section_trust_card" key={index}>
            <div className="section_trust_icon_ctn">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;
