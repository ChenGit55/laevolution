import EnrollForm from "@/components/EnrollForm";
import Image from "next/image";

export default function PrivateTraining() {
  return (
    <main className="">
      <h1>Private Classes</h1>
      <div className="top-page-image">
        <Image
          src={"/img/photos/young-goalkepper.jpg"}
          height={500}
          width={500}
          alt="private-class"
        />
      </div>
      <article className="article-base">
        Our private classes are for all ages, including adults. Private coaching
        will improve the player’s technical skills and decision-making on the
        field. Our coaches will help boost the player’s confidence when they
        have the ball at their feet, improving weaknesses, sharpening strengths,
        helping them to become complete players, motivated throughout the whole
        process of becoming a soccer player.
      </article>
      <div>
        <EnrollForm />
      </div>
    </main>
  );
}
