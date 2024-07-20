import Carousel from "@/components/Carousel";
import Logo1 from "@/components/SvgComponents/Logo1";
import "./home.css";

export default function Home() {
  return (
    <main className="main-home">
      {/* section */}
      <div className="paralax00 paralax-bg">
        <section className="cover-page home-section">
          <div className="logo-container">
            <Logo1 className="cover-logo" width="1000px" />
          </div>
          <h2>BRAZILIAN SOCCER TEACHING METHODOLOGY</h2>
        </section>
      </div>

      {/* carosel section */}
      <div className="carousel-section">
        <h2>Traing with LA Evolution!</h2>
        <Carousel />
      </div>

      {/* section */}
      <div className="paralax02 paralax-bg">
        <h1>Shaping future champions!</h1>
      </div>
    </main>
  );
}
