import React from "react";

import { useSelector } from "react-redux";

import Layout from "@components/Layout";
import Toolbar from "@components/Toolbar";
import Area from "@components/Area";
import Information from "@components/modals/Information";
import Position from "@components/modals/Position";
import Country from "@components/modals/Country";

export default function Sandbox() {
	const personalInfoModal = useSelector((state) => state.modal.personalInfo);
	const positionModal = useSelector((state) => state.modal.position);

	return (
		<Layout>
			<div className="flex flex-col flex-grow self-stretch">
				<div className="flex-1 flex">
					<Area />
				</div>
				<Toolbar />
			</div>
			{personalInfoModal.open && <Information></Information>}
			{positionModal.open && <Position></Position>}
			{true && <Country></Country>}
		</Layout>
	);
}
