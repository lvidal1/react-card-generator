import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryList } from "store/slices/country";
import { setCountry } from "store/slices/user";
import { toggleCountry } from "store/slices/modal";

import Modal from "@components/shared/Modal";
import Button from "@components/shared/Button";
import Radio from "components/shared/Radio";
import Input from "components/shared/Input";
import { countries } from "data";
import classNames from "classnames";

import styles from "@styles/modals/Country.module.css";

const Country = () => {
	const dispatch = useDispatch();

	const [modalCountry, setModalCountry] = useState("");
	const [searchCountry, setSearchCountry] = useState("");
	const countryList = useSelector(({ country }) => country.list);

	useEffect(() => {
		dispatch(setCountryList(countries));
	}, [dispatch]);

	const submit = () => {
		if (modalCountry.length) {
			dispatch(setCountry(modalCountry));
			close();
		}
	};

	const handleCountryChange = (e) => {
		setModalCountry(e.target.value);
	};

	const handleSearchCountryChange = (e) => {
		setSearchCountry(e.target.value);
	};

	const close = () => {
		dispatch(toggleCountry(false));
	};

	return (
		<Modal>
			<Modal.Header onClose={close}>Set your country</Modal.Header>
			<Modal.Body>
				<Input
					id="Modal.Information.Fullname"
					label="Search your country"
					value={searchCountry}
					onChange={handleSearchCountryChange}
				/>
				<div className="flex justify-evenly mt-5 flex-wrap overflow-y-scroll h-64">
					{countryList
						.filter(({ name }) =>
							name
								.toLowerCase()
								.includes(searchCountry.toLowerCase())
						)
						.map(({ id, name }) => (
							<span key={`Country.Option.${id}`}>
								<Radio
									id={`Country.Option.${id}`}
									name="Country"
									onChange={handleCountryChange}
									value={id}
									title={name}
									className={styles.flagOption}
								>
									<span
										className={classNames(
											"fi",
											`fi-${id.toLowerCase()}`,
											styles.flag
										)}
									></span>
								</Radio>
							</span>
						))}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button text="Save" onClick={submit} />
			</Modal.Footer>
		</Modal>
	);
};

export default Country;
