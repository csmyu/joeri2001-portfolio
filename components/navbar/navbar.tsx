import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div
        className={
          "fixed w-full grid place-items-center backdrop-blur-[2px] leading-6 text-base select-none"
        }
      >
        <div
          className={"flex w-full sm:w-3/6 lg:w-2/6 place-content-between p-5"}
        >
          <div className={"flex space-x-1"}>
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [-180, 0, 0],
              }}
            >
              <motion.div
                initial={{
                  rotate: -15,
                }}
                whileHover={{
                  rotate: 0,
                }}
              >
                <Image
                  src={"/icon.png"}
                  width={"24px"}
                  height={"24px"}
                  className={"border-2"}
                />
              </motion.div>
            </motion.div>
            <p className={"capitalize"}>joeri brinks</p>
          </div>
          <div />
          <motion.a
            href={"https://github.com/joeri2001/"}
            target="_blank"
            className={"hover:cursor-pointer font-thin capitalize"}
            initial={{
              opacity: 0.6,
            }}
            whileHover={{
              opacity: 1,
            }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
      <div className={"pt-[3.75rem]"} />
    </>
  );
};

export default Navbar;
