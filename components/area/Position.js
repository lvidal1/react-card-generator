import Image from "next/image";

const Position = ({ position, onClick }) => {
	return (
		<div
			className="bg-white w-12 h-14 relative cursor-pointer"
			onClick={onClick}
		>
			<div className="w-full h-full">
				<Image
					src="/soccer-icon.png"
					alt="Soccer field"
					fill
					style={{ objectFit: "cover" }}
					quality={100}
				/>
			</div>
			<div className="absolute z-0 w-full top-0 flex font-bold justify-center z-10">
				{position}
			</div>
		</div>
	);
};

export default Position;
