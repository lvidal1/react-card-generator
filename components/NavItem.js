import React from "react";

const NavItem = ({ url, children }) => {
    return <a href={url} className="text-lg no-underline text-grey-darkest hover:text-blue-dark">{children}</a>;
}

export default NavItem;
