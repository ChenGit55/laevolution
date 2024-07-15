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
        <div className="base-card soccer-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/girl-thinking.jpg"}
              className="card-img "
              width={500}
              height={0}
              alt={"soccer"}
            />
          </div>
          <div className="card-description">
            <h5>Soccer</h5>
          </div>
        </div>
        {/* beach soccer card */}
        <div className="base-card beach-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/kids-playing.jpg"}
              className="card-img "
              width={500}
              height={0}
              alt={"beach-soccer"}
            />
          </div>
          <div className="card-description">
            <h5>Beach Soccer</h5>
          </div>
        </div>
        {/* futsal card */}
        <div className="base-card futsal-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/two-boys-playing.jpg"}
              className="card-img "
              width={500}
              height={0}
              alt={"futsal"}
            />
          </div>
          <div className="card-description">
            <h5>Futsal</h5>
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
