import React from "react";

import Layout from "@components/Layout";
import Toolbar from "@components/Toolbar";
import Area from "@components/Area";
import Modal from "@components/shared/Modal";

export default function Sandbox() {
	return (
		<Layout>
			<div className="flex flex-col flex-grow self-stretch">
				<div className="flex-1 flex">
					<Area />
				</div>
				<Toolbar />
			</div>
			<Modal />
		</Layout>
	);
}
