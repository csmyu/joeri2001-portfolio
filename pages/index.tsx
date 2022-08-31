import type { NextPage } from "next";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <>
    <div className={"w-full min-h-screen bg-color-background text-color-text"}>
      <Navbar />
      <Hero />
    </div>
    </>
  );
};

export default Home;
