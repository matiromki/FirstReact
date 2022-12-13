import { NavLink, useMatch } from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    const setActive = match ? "header-nav-link header-nav-link-active" : "header-nav-link";
    return (
        <NavLink to={to} className={setActive} {...props}>{children}</NavLink>
    );
} 

export {CustomLink};