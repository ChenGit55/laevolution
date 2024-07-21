import "./schools.css";
import Image from "next/image";
export default function Schools() {
  return (
    <main className="scholls-page">
      <h1>Bring LA Evolution to your School</h1>
      <section className="scholl-section1">
        <div className="top-page-image school-img-container">
          <Image
            src={"/img/photos/kids-school.jpg"}
            height={500}
            width={900}
            objectFit="cover"
            alt="private-class"
            className="school-img"
          />
        </div>
        <article className="article-base">
          <p>
            LA Evolution soccer and fitness program emphasizes correct soccer
            fundamentals and techniques in fun way. Our goal is to create a
            positive environment, to instill our students with a sense of
            confidence, coordination and a love of the game. Our target is to
            make sure every child feels included in each activity while having
            fun! You will be amazed at how quickly they can improve in a
            positive environment and when the basic skills are taught correctly
            by an experienced coach and former player. To bring LA Soccer
            Evolution to your school please contact us at{" "}
            <b>info@lasevolution.com</b>.
          </p>
        </article>
      </section>
    </main>
  );
}
