import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Layout from "@components/Layout";
import Toolbar from "@components/Toolbar";
import Area from "@components/Area";
import Information from "@components/modals/Information";
import Position from "@components/modals/Position";
import Country from "@components/modals/Country";
import Technology from "@components/modals/Technology";
import PhotoChooser from "@components/modals/photo/Chooser";

import { setTechnologyList } from "store/slices/technology";
import { technologies } from "data";

export default function Sandbox() {
	const dispatch = useDispatch();

	const personalInfoModal = useSelector((state) => state.modal.personalInfo);
	const positionModal = useSelector((state) => state.modal.position);
	const countryModal = useSelector((state) => state.modal.country);
	const technologyModal = useSelector((state) => state.modal.technology);
	const photoChooserModal = useSelector((state) => state.modal.photoChooser);

	useEffect(() => {
		dispatch(setTechnologyList(technologies));
	}, [dispatch]);

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
			{countryModal.open && <Country></Country>}
			{technologyModal.open && <Technology></Technology>}
			{photoChooserModal.open && <PhotoChooser></PhotoChooser>}
		</Layout>
	);
}
