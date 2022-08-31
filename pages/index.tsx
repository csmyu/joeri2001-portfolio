import type { NextPage } from "next";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <div className={"w-full min-h-screen bg-color-background text-color-text"}>
      <Navbar />
    </div>
  );
};

export default Home;
