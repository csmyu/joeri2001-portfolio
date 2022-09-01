interface Props {
  year: string;
  text: string;
}

const ExperienceItems = (props: Props) => {
  return (
    <div className={"flex justify-between text-sm font-bold tracking-wide p-1"}>
      <div className={"w-1/2 sm:w-1/4"}>
        <p>{props.year}</p>
      </div>
      <div className={"w-1/2 sm:w-3/4"}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ExperienceItems;
