import React from "react";

const NavItem = ({ url, children, "data-testid": dataTestId }) => {
    return <a href={url} data-testid={dataTestId} className="text-lg no-underline text-grey-darkest hover:text-blue-dark">{children}</a>;
}

export default NavItem;
