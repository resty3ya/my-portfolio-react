import React from "react";
import NavbarLink from "./NavbarLink";
import links from "../links";

function Header(props){
    return <navbar>
            <table>
                <tr>
                    <NavbarLink links={props.name} />
                </tr>
                <tr>
                    
                </tr>
            </table>
    </navbar>
}

export default Header;