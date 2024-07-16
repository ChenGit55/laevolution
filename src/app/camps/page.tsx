"use client";
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
      <article className="article-base">
        <h2>Are you ready to take your game to the next level?</h2>
        <p>
          {" "}
          Futebol with Boldness and Joy to allow each player to discover their
          game and have fun with the guidance of certified coaches. Our main
          objective is to work and develop the potential of each child and youth
          for MODERN SOCCER and for life; highlighting discipline, respect for
          all, self-confidence, teamwork, responsibility and commitment.
        </p>
        <p> LA Evolution Soccer Camps are open to boys and girls, ages 5-15.</p>
      </article>
      <div>
        <EnrollForm />
      </div>
    </main>
  );
}
