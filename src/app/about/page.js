import Image from "next/image";
import Navbar from "../components/navbar";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <Navbar />
      <h1>about</h1>

      <a href="/">Home</a>

      {/* <ScriptFTR /> */}
    </main>
  );
}
