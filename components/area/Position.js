import Image from "next/image";

const Position = ({ position, onClick }) => {
	return (
		<div
			className="bg-transparent w-8 h-10 relative cursor-pointer opacity-80"
			onClick={onClick}
		>
			<div className="w-full h-full">
				<Image
					src="/soccer-icon.png"
					alt="Soccer field"
					fill
					style={{ objectFit: "contain" }}
					quality={100}
				/>
			</div>
			<div className="absolute z-0 w-full top-0 flex font-bold justify-center z-10 text-xs">
				{position}
			</div>
		</div>
	);
};

export default Position;
