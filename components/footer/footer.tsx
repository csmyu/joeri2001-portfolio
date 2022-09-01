const Footer = () => {
	return (
		<>
			<div
				className={"w-full grid place-items-center leading-6"
				}
			>
				<div
					className={
						"grid place-items-center w-full max-w-[640px]"
					}
				>
					<div className={"flex place-content-between font-thin text-sm text-color-text-dark"}>
						<p>&copy; 2022 Joeri Brinks. All rights reserved.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
