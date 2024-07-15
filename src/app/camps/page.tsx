"use client";
import EnrollForm from "@/components/EnrollForm";
import "./camps.css";
import Image from "next/image";
import Card from "@/components/Card";

export default function Camps() {
  return (
    <main className="camps-page">
      <h1>Chose your style</h1>
      <section className="camps-select-section">
        <form action=".">{/* form here */}</form>
      </section>
      <div className="cards-container">
        {/* soccer card */}
        <div id="soccer-card" className="base-card soccer-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/two-boys-playing.jpg"}
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
        <a id="beach-card" className="base-card beach-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/boy-beach-obstacles.jpg"}
              className="card-img "
              width={500}
              height={0}
              alt={"beach-soccer"}
            />
          </div>
          <div className="card-description">
            <h5>Beach Soccer</h5>
          </div>
        </a>
        {/* futsal card */}
        <a id="futsal-card" className="base-card futsal-card">
          <div className="card-img-container">
            <Image
              src={"/img/photos/futsal-girl.jpg"}
              className="card-img "
              width={500}
              height={0}
              alt={"futsal"}
            />
          </div>
          <div className="card-description">
            <h5>Futsal</h5>
          </div>
        </a>
        {/*  */}
      </div>
      <div>
        <EnrollForm />
      </div>
    </main>
  );
}
