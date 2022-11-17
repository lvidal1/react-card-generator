import NavItem from "./NavItem";

const Header = () => {
    return <header>
        <nav className="font-sans flex flex-row text-left justify-between py-4 px-6 bg-white shadow items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <NavItem url="/home" >Home</NavItem>
            </div>
            <div>
                <NavItem url="/sandbox">Sandbox</NavItem>
            </div>
        </nav>
    </header>;
}

export default Header;