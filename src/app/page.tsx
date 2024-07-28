import Carousel from "@/components/Carousel";
import Logo1 from "@/components/SvgComponents/Logo1";
import "./home.css";

export default function Home() {
  return (
    <main className="main-home">
      {/* section */}
      <div className="paralax-bg">
        <section className="cover-page home-section">
          <div className="logo-container">
            <Logo1 className="cover-logo" width="1000px" />
          </div>
        </section>
      </div>

      {/* carosel section */}
      <div className="carousel-section">
        <h2>Excellence in sports!</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <Carousel />
      </div>

      {/* section */}
      <div className="paralax-bg">
        <h1>Shaping future champions!</h1>
      </div>
    </main>
  );
}
