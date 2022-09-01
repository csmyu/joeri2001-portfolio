import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  imageUrl: string;
  text: string;
  pageUrl: string;
}

const OnTheWebItem = (props: Props) => {
  return (
    <div
      className={
        "flex justify-start sm:justify-start text-sm font-bold tracking-wide p-1"
      }
    >
      <div>
        <Image
          src={props.imageUrl}
          width={"20px"}
          height={"20px"}
          objectFit={"contain"}
        />
      </div>
      <motion.div
        className={"ml-2 text-color-accent-blue"}
        initial={{  scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <a href={props.pageUrl}>{props.text}</a>
      </motion.div>
    </div>
  );
};

export default OnTheWebItem;
