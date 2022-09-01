import Image from "next/image";
import AboutItem from "./aboutItems/aboutItems";
import ExperienceItems from "./experienceItems/experienceItems";
import OnTheWebItem from "./onthewebItems/onthewebItems";

const About = () => {
  return (
    <>
      <div className={"w-full grid place-items-center leading-6 text-base"}>
        <div className={"w-full max-w-[500px]"}>
          <div className={"flex justify-between"}>
            <div>
              <p className={"font-medium text-3xl capitalize"}>joeri brinks</p>
              <p className={"font-thin text-sm uppercase"}>
                professional digital craftsman
              </p>
            </div>
            <div className={"grid place-items-center"}>
              <div className={"grid border-color-text border-2 rounded-full"}>
                <Image
                  src={"/me.jpg"}
                  width={"80px"}
                  height={"80px"}
                  objectFit={"cover"}
                  className={"rounded-full"}
                />
              </div>
            </div>
          </div>
          <div className={"py-5"}>
            <div className={"pb-5"}>
              <AboutItem
                title={"Work"}
                content={
                  "I'm a fullstack web developer with a passion for building websites and web apps." +
                  "I have a knack for planning, organizing, designing, coding, problem solving and development in it's entirety." +
                  "Offline, I often read, go for a walk and spend time with my girlfriend, friends and family."
                }
              />
            </div>

            <div className={"pb-5"}>
              <AboutItem title={"Experience"} />
              <div>
                <p className={"font-thin text-sm"}>
                  (All years are 2nd millennium)
                </p>
                <div className={"divide-color-accent divide-y"}>
                  <ExperienceItems
                    year={"('01)"}
                    text={"Born in Bleiswijk, the Netherlands"}
                  />
                  <ExperienceItems
                    year={"('17 - '20)"}
                    text={
                      "Studied at Grafisch Lyceum Rotterdam (Fullstack developer)"
                    }
                  />
                  <ExperienceItems
                    year={"('19 - '20)"}
                    text={"Worked at Ridemi (Fullstack)"}
                  />
                  <ExperienceItems
                    year={"('22 - present)"}
                    text={"Working at Competa (Fullstack)"}
                  />
                  <ExperienceItems
                    year={"('22)"}
                    text={"Worked at Zorgverkeer (via Competa)"}
                  />
                  <ExperienceItems
                    year={"('22 - present)"}
                    text={"Working at Inergy (via Competa)"}
                  />
                </div>
              </div>
            </div>

            <div className={"pb-5"}>
              <AboutItem
                title={"I \u2665"}
                content={
                  "Videogames, Art/Drawing, Videography, Movies, Manga & Anime"
                }
              />
            </div>

            <div className={"pb-5"}>
              <AboutItem title={"On the web"} />
              <div>
                <OnTheWebItem
                  imageUrl={"/github.png"}
                  text={"@joeri2001"}
                  pageUrl={"https://github.com/joeri2001/"}
                />
                <OnTheWebItem
                  imageUrl={"/twitter.png"}
                  text={"@joeri2k1"}
                  pageUrl={"https://twitter.com/joeri2k1"}
                />
                <OnTheWebItem
                  imageUrl={"/linkedin.png"}
                  text={"@joeribrinks"}
                  pageUrl={"https://www.linkedin.com/in/joeribrinks/"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
