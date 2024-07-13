import EnrollForm from "@/components/EnrollForm";
import "./schools.css";

export default function Schools() {
  return (
    <section className="school-section">
      <h1>Bring LA Evolution to your School</h1>
      <p className="mb-3 px-10">
        LA Evolution soccer and fitness program emphasizes correct soccer
        fundamentals and techniques in fun way. Our goal is to create a positive
        environment, to instill our students with a sense of confidence,
        coordination and a love of the game. Our target is to make sure every
        child feels included in each activity while having fun! You will be
        amazed at how quickly they can improve in a positive environment and
        when the basic skills are taught correctly by an experienced coach and
        former player. To bring LA Soccer Evolution to your school please
        contact us at info@lasevolution.com.
      </p>
      <EnrollForm />
    </section>
  );
}
