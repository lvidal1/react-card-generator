import React from "react";

import { useSelector } from "react-redux";

import Layout from "@components/Layout";
import Toolbar from "@components/Toolbar";
import Area from "@components/Area";
import Information from "@components/modals/Information";

export default function Sandbox() {
	const personalInfoModal = useSelector((state) => state.modal.personalInfo);

	return (
		<Layout>
			<div className="flex flex-col flex-grow self-stretch">
				<div className="flex-1 flex">
					<Area />
				</div>
				<Toolbar />
			</div>
			{personalInfoModal.open && <Information></Information>}
		</Layout>
	);
}
