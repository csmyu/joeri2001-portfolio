import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  imageUrl: string;
  text: string;
  pageUrl: string;
  background: boolean;
}

const OnTheWebItem = (props: Props) => {
  if (props.background == false) {
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
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <a href={props.pageUrl} target="_blank">{props.text}</a>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div
        className={
          "flex justify-start sm:justify-start text-sm font-bold tracking-wide p-1"
        }
      >
        <div className="bg-color-text rounded-full w-[20px] h-[20px]">
          <div className="ml-[0.5px]">
            <Image
              src={props.imageUrl}
              width={"18px"}
              height={"18px"}
              objectFit={"contain"}
            />
          </div>
        </div>
        <motion.div
          className={"ml-2 text-color-accent-blue"}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <a href={props.pageUrl} target="_blank">{props.text}</a>
        </motion.div>
      </div>
    );
  }
};

export default OnTheWebItem;
