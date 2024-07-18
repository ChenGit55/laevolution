import "./plans.css";
import Image from "next/image";
export default function Plans() {
  return (
    <div>
      <h1>Schedule time with us.</h1>
      <div className="plan-cards-container">
        <div className="plan-card">
          {/* <div className="plan-card-img-container">
            <Image
              className="plan-card-img"
              src={"/img/photos/coach.jpg"}
              alt="private trainig"
              width={800}
              height={800}
            />
          </div> */}

          <div className="plan-card-title">
            <h2>Private Training</h2>
          </div>
          <div className="plan-card-price">$ 120.00/h</div>
          <button className="plan-card-button">Schedule</button>
        </div>
      </div>
    </div>
  );
}
