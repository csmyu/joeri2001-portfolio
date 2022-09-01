import React from "react";

interface Props {
  title: string;
  content?: string;
}

const AboutItem = (props: Props) => {
  return (
    <>
      <p
        className={
          "font-bold text-xl capitalize border-b-4 border-color-accent w-fit"
        }
      >
        {props.title}
      </p>
      <p className={"text-sm font-thin tracking-wide"}>{props.content}</p>
    </>
  );
};

export default AboutItem;
