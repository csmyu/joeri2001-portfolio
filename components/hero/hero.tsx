import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        className={"w-full grid place-items-center leading-6 text-base mb-5"
        }
      >
        <div className={"m-5"}>
          <div className={"grid place-items-center border-color-accent-pink border-2 rounded"}>
            <Image src={"/giphy.gif"} width={"400px"} height={"200px"} objectFit={"cover"} className={"rounded"} />
          </div>
          <div className={"flex space-x-0.5"}>
            <p className={"text-xs font-thin text-color-text"}>Source:</p><p className={"text-xs font-thin text-color-accent-blue"}><Link href={"https://giphy.com/"}>giphy.com</Link></p>
          </div>
        </div>
        <div
          className={
            "grid place-items-center w-full max-w-[500px] p-3 bg-color-accent rounded"
          }
        >
          <div className={"flex place-content-between font-thin text-md"}>
            <p>Hello, I'm a fullstack web-developer from the Netherlands!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
