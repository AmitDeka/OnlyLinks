import Image from "next/image";
import Darkmode from "./components/darkmode";
import HeroUsername from "./components/heroUsername";
import Navbar from "./components/navbar";
// import ScriptFTR from "./components/script";

export const metadata = {
  title: "Home",
};

export default function Home() {
  const heroImageStyle = {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "auto",
    borderRadius: "2rem",
  };

  return (
    <main>
      <Navbar />

      <section className="hero h-[950px] lg:h-[800px] heroBG">
        <div className="hero-content text-dark text-center">
          <div className="max-w-xl -mt-[250px] lg:-mt-[150px]">
            <h1 className="md:text-5xl mb-5 text-4xl font-bold leading-normal tracking-normal capitalize">
              Your Gateway to Seamless Digital Navigation
            </h1>
            <div className="max-w-md mx-auto">
              <p className="md:text-xl mb-5 text-lg">
                Connect with your audience seamlessly by sharing all your social
                links in one place.
              </p>
            </div>
            <HeroUsername />
          </div>
        </div>
        <div className="shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <div className="container">
        <div className="max-w-xl lg:max-w-5xl mx-auto lg:-mt-[300px] relative hidden md:block">
          <Image
            src="/images/product_desktop.jpg"
            alt="Product Image Desktop and Tablet"
            priority={false}
            quality={85}
            width={1600}
            height={900}
            style={heroImageStyle}
          />
        </div>
        <div className="w-3/4 mx-auto -mt-[415px] relative md:hidden">
          <Image
            src="/images/product_mobile.jpg"
            alt="Product Image Mobile"
            priority={false}
            quality={75}
            width={900}
            height={1600}
            style={heroImageStyle}
          />
        </div>
      </div>

      <section className="mt-[650px]">
        <div className="container mx-auto">
          <h1 className="md:text-4xl lg:text-5xl mb-8 text-3xl font-bold text-center">
            Key Features of <br />
            <span className="text-primary">&nbsp;OnlyLinks</span>
          </h1>
          <div className="md:flex-row flex flex-col justify-center">
            <div className="card lg:my-0 md:w-1/3 bg-base-100 box-shadow lg:mx-4 w-11/12 mx-auto my-3 transition-all duration-200 ease-in">
              <figure className="mt-12">
                <div className="bg-primary flex items-center justify-center w-24 h-24 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12">
                    <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
                  </svg>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl">
                  Unified Bio Link
                </h2>
                <p className="text-center">
                  Combine all your important links into a single, easily
                  shareable URL, maximizing your bio&apos;s potential across
                  platforms.
                </p>
              </div>
            </div>
            <div className="card lg:my-0 md:w-1/3 bg-base-100 box-shadow lg:mx-4 w-11/12 mx-auto my-3 transition-all duration-200 ease-in">
              <figure className="mt-12">
                <div className="bg-primary flex items-center justify-center w-24 h-24 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12">
                    <path d="M7.05033 14.1213L4.929 16.2427L7.75743 19.0711L19.0711 7.75737L16.2427 4.92894L14.1214 7.05026L15.5356 8.46448L14.1214 9.87869L12.7072 8.46448L11.293 9.87869L12.7072 11.2929L11.293 12.7071L9.87875 11.2929L8.46454 12.7071L9.87875 14.1213L8.46454 15.5355L7.05033 14.1213ZM16.9498 2.80762L21.1925 7.05026C21.583 7.44079 21.583 8.07395 21.1925 8.46448L8.46454 21.1924C8.07401 21.5829 7.44085 21.5829 7.05033 21.1924L2.80768 16.9498C2.41716 16.5592 2.41716 15.9261 2.80768 15.5355L15.5356 2.80762C15.9261 2.4171 16.5593 2.4171 16.9498 2.80762ZM14.1214 18.3635L15.5356 16.9493L17.7781 19.1918H19.1923V17.7776L16.9498 15.5351L18.364 14.1208L20.9997 16.7565V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87806L2.80754 7.04963C2.41702 6.65911 2.41702 6.02594 2.80754 5.63542L5.63597 2.80699C6.02649 2.41647 6.65966 2.41647 7.05018 2.80699L9.87861 5.63542L8.4644 7.04963L6.34308 4.92831L4.92886 6.34253L7.05018 8.46385L5.63597 9.87806Z"></path>
                  </svg>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl">
                  Customizable Layout
                </h2>
                <p className="text-center">
                  Personalize your onlyLinks page with various layout options,
                  showcasing your links in a way that reflects your unique brand
                  or personality.
                </p>
              </div>
            </div>
            <div className="card lg:my-0 md:w-1/3 bg-base-100 box-shadow lg:mx-4 w-11/12 mx-auto my-3 transition-all duration-200 ease-in">
              <figure className="mt-12">
                <div className="bg-primary flex items-center justify-center w-24 h-24 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12">
                    <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path>
                  </svg>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl">
                  Analytics Dashboard
                </h2>
                <p className="text-center">
                  Gain insights into link performance and audience engagement
                  with detailed analytics, empowering you to refine your online
                  strategy effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ScriptFTR /> */}
    </main>
  );
}
