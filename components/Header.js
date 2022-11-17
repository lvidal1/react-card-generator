import NavItem from "./NavItem";

const Header = () => {
    return <header>
        <nav className="font-sans flex flex-row text-left justify-between py-4 px-6 bg-white shadow items-baseline w-full">
            <NavItem url="/">Home</NavItem>
            <NavItem url="/sandbox">Sandbox</NavItem>
        </nav>
    </header>;
}

export default Header;