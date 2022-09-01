import Image from "next/image";

interface Props {
	imageUrl: string;
	text: string;
	pageUrl: string;
}

const OnTheWebItem = (props: Props) => {
	return (
		<div className={"flex justify-start sm:justify-start text-sm font-bold tracking-wide p-1"}>
			<div>
				<Image src={props.imageUrl} width={"20px"} height={"20px"} />
			</div>
			<div className={"ml-2 text-color-accent-blue"}>
				<a href={props.pageUrl} target="_blank">{props.text}</a>
			</div>
		</div>
	)
}

export default OnTheWebItem;
