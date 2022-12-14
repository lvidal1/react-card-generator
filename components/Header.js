import NavItem from "@components/NavItem";

import styles from "@styles/Header.module.css";

const Header = () => {
	return (
		<header>
			<nav className={styles.header}>
				<NavItem url="/" data-testid="home.link">
					Home
				</NavItem>
				<NavItem url="/sandbox">Sandbox</NavItem>
			</nav>
		</header>
	);
};

export default Header;
