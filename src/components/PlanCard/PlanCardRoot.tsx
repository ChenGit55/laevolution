import "./plancard.css";

// card for plans with price
export const PlanCardRoot = ({ title, price, children }: any) => {
  return (
    <div className="plan-card">
      <div className="plan-card-title">{title}</div>
      <div className="plan-card-price">
        <span className="plan-card-dollar-sign">$</span>
        <span className="plan-card-price-digits">{price}</span>
        <span className="price-special-characteres">/h</span>
      </div>
      <ul className="plan-card-list">{children}</ul>
    </div>
  );
};

// line with plan infos
export const PlanCardLineInfo = ({ textInfo }: any) => {
  return <li className="plan-card-list-item">{textInfo}</li>;
};
