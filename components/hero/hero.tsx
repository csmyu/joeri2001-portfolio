import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div
        className={
          "fixed w-full grid place-items-center leading-6 text-base select-none"
        }
      >
        <div className={"flex w-full max-w-[640px] place-content-between p-3"}>
          <p>Hi, my name is Joeri!</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
