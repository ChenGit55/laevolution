"use client";
import "./camps.css";
import Image from "next/image";

export default function Camps() {
  return (
    <main className="camps-page">
      <h1>Chose your style</h1>

      <h2>Are you ready to take your game to the next level?</h2>
      <section className="camps-section">
        <div className="camps-img-container">
          <Image
            className="beach-img"
            src="/img/photos/beach-ball.webp"
            height={500}
            width={500}
            alt=""
          />
        </div>

        <article className="article-base">
          <p>
            {" "}
            Futebol with Boldness and Joy to allow each player to discover their
            game and have fun with the guidance of certified coaches. Our main
            objective is to work and develop the potential of each child and
            youth for MODERN SOCCER and for life; highlighting discipline,
            respect for all, self-confidence, teamwork, responsibility and
            commitment.
          </p>
          <p>
            {" "}
            LA Evolution Soccer Camps are open to boys and girls, ages 5-15.
          </p>
        </article>
      </section>
    </main>
  );
}
