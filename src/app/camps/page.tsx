import EnrollForm from "@/components/EnrollForm";
import "./camps.css";
import Image from "next/image";

export default function Camps() {
  return (
    <main className="camps-page">
      <h1>Chose your style</h1>
      <section className="camps-select-section">
        <form action=".">{/* form here */}</form>
      </section>
      <div className="cards-container">
        {/* soccer card */}
        <div className="base-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/young-goalkepper.jpg"}
              className="card-img"
              width={900}
              height={900}
              alt={"soccer"}
              objectFit="cover"
            />
          </div>
          <div className="card-content">
            <div className="card-description">
              <h2>Soccer</h2>
            </div>
          </div>
        </div>
        {/* beach soccer card */}
        <div className="base-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/two-boys-playing.jpg"}
              className="card-img"
              width={900}
              height={900}
              alt={"soccer"}
              objectFit="cover"
            />
          </div>
          <div className="card-content">
            <div className="card-description">
              <h2>Beach Soccer</h2>
            </div>
          </div>
        </div>
        {/* futsal card */}
        <div className="base-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/tackle.jpg"}
              className="card-img"
              width={900}
              height={900}
              alt={"soccer"}
              objectFit="cover"
            />
          </div>
          <div className="card-content">
            <div className="card-description">
              <h2>Futsal</h2>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div>
        <EnrollForm />
      </div>
    </main>
  );
}
