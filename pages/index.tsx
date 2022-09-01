import { motion } from "framer-motion";
import type { NextPage } from "next";
import About from "../components/about/about";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <>
      <div
        className={"w-full min-h-screen bg-color-background text-color-text"}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
