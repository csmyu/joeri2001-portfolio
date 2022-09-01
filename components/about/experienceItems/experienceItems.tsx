interface Props {
	year: string;
	text: string;
}

const ExperienceItems = (props: Props) => {
	return (
		<div className={"flex justify-start sm:justify-between text-sm font-bold tracking-wide p-1"}>
			<div>
				<p>{props.year}</p>
			</div>
			<div className={"ml-2"}>
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default ExperienceItems;
