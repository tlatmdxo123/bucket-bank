import React from 'react';
import { Link } from 'react-router-dom';


type MenuListProps = {
    title:string,
    icon:string,
    active:string,
    changeCurrentMenu:(menu:string) => void
}
function MenuList({title,icon,active,changeCurrentMenu}:MenuListProps) {
    return (
        <Link to={{pathname:`/${icon}`}}>
            <li className={`menu-list ${active}`} data-test-id='menu-list' onClick={() => changeCurrentMenu(icon)}>
                <div className="icon">
                    <img src={`/images/${icon}.png`} alt={icon} />
                </div>
                <span>{title}</span>
            </li>
        </Link>
    );
}

export default MenuList;