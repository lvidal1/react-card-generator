import Image from "next/image";

const Photo = ({ source }) => {
	return (
		source && (
			<div className="h-full w-full absolute top-0 left-0 z-0">
				<div className="bg-white relative mt-20 h-56 w-44 mx-auto border-2 border-white z-0 rounded-[50%] overflow-hidden">
					<Image
						src={source}
						alt="Photo"
						fill
						style={{ objectFit: "cover" }}
						quality={100}
					/>
				</div>
			</div>
		)
	);
};

export default Photo;
