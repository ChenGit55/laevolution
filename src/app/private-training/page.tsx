"use client";
import Image from "next/image";
import "./private-training.css";

export default function PrivateTraining() {
  return (
    <main className="private-training-page">
      <h1>Private Classes</h1>
      <article className="article-base">
        <p className="header-text">
          Our private classes are for all ages, including adults. Private
          coaching will improve the player’s technical skills and
          decision-making on the field. Our coaches will help boost the player’s
          confidence when they have the ball at their feet, improving
          weaknesses, sharpening strengths, helping them to become complete
          players, motivated throughout the whole process of becoming a soccer
          player.
        </p>
      </article>
      <div className="feature-section">
        <div className="feature-img">
          <Image
            src={"/img/photos/young-goalkepper.webp"}
            height={500}
            width={500}
            alt="private-class"
          />
        </div>
        <div className="feature-text">
          <article>
            <p>
              <b>Why choose us?</b>
            </p>
            <ol>
              <li>
                We have one of the most successful methodologies in Brazil, used
                by major references in international sport.
              </li>
              <li>Focus on technical and tactical development.</li>
              <li>Great post-workout support.</li>
              <li>
                International reference, including partnerships with major clubs
                such as PSG and Flamengo.
              </li>
            </ol>
          </article>
        </div>
      </div>

      <h2>Testimonial</h2>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            {" "}
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="testimony-card">
          <div className="testimony-sub-and-img">
            <div className="testimony-img">
              <Image
                height={300}
                width={300}
                alt="Mother & son"
                src={"/img/photos/mom-son.webp"}
              />
            </div>
            <div>
              <i>- Christina S., mother of a player.</i>{" "}
            </div>
          </div>
          <div className="testimony-text article-base">
            <p className="mb-3 first-letter:text-7xl first-letter:font-bold first-letter:me-3 first-letter:float-start">
              We are extremely pleased with the individual football training
              service for our son. From the beginning, we were impressed by the
              coach's professionalism and dedication to personalizing each
              session according to his specific needs. Our son not only improved
              his technical skills but also gained confidence in his game. The
              welcoming and motivating environment helped her feel free to
              explore and perfect her techniques, while developing an even
              greater love for the sport. We would recommend this service
              without hesitation to other parents who want to see their children
              progress in football. We are happy to have found such a dedicated
              coach who truly cares about each child's individual development.
            </p>
          </div>
        </div>
      </div>
      <p hidden>
        "My experience with the individual football training service for young
        people was incredible from the first moment. The coach was extremely
        dedicated to understanding my needs and weaknesses, adapting each
        session to maximize my technical development. The focused and
        personalized methodology helped me not just improving my ability with
        the ball, but also gaining confidence on the field. Additionally, the
        welcoming and encouraging environment made each workout a positive
        learning experience. I believe that individual training has not only
        improved my game, but also better prepared me for the challenges I face
        as a player. I highly recommend this service to any young player looking
        to take their game to the next level."
      </p>

      <p hidden>
        "We are very pleased with the individual football training service for
        our children. From the beginning, we have been impressed by the personal
        attention and professionalism of the coach. Our children, both our
        daughter and our son, have benefited immensely from the training
        sessions . Both are enjoying the encouraging and positive environment
        created by the coach, which is helping them dedicate themselves even
        more to football. We wholeheartedly recommend this service to parents
        who want to see their children not only improve at sport, but also
        develop valuable life skills.”
      </p>

      {/* <h2>
        Schedule your training today and start reaching your football potential!
        <p>Sessions $ 120.00 per hour.</p>
      </h2>
      <div className="cta-btn-box">
        <button className="cta-btn-s" data-text="Click here to begin!">
          Click here to begin!
        </button>
      </div> */}
    </main>
  );
}
