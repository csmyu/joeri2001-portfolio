import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div
        className={
          "fixed w-full grid place-items-center backdrop-blur-sm leading-6 text-base z-50"
        }
      >
        <div className={"flex w-full max-w-[640px] place-content-between p-3"}>
          <div className={"flex space-x-1 pt-2"}>
            <motion.div animate={{ scale: [1, 1.5, 1], rotate: [-180, 0, 0] }}>
              <motion.div initial={{ rotate: -15 }} whileHover={{ rotate: 0 }}>
                <Image
                  src={"/icon.png"}
                  width={"24px"}
                  height={"24px"}
                  className={"border-2"}
                />
              </motion.div>
            </motion.div>
            <p className={"capitalize font-medium"}>joeri brinks</p>
          </div>
          <div />
          <motion.a
            href={"https://github.com/csmyu"}
            target="_blank"
            className={
              "hover:cursor-pointer font-thin capitalize bg-color-accent p-2 rounded hover:bg-color-accent-pink"
            }
            initial={{ opacity: 0.6, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
      <div className={"pt-[4rem]"} />
    </>
  );
};

export default Navbar;
