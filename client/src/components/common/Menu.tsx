import React, { useState } from 'react';
import IconButton from './IconButton'
import {MdMenu} from 'react-icons/md'
import ActiveMenu from './ActiveMenu';

type MenuProps = {
    name:string,
    avatarType:string,
    currentMenu:string,
    changeCurrentMenu:(menu:string) => void
}
function Menu({name,avatarType,currentMenu,changeCurrentMenu}:MenuProps) {
    const [active,setActive] = useState(false)
    const activeMenu = (state:boolean) => {
        setActive(state)
    }
    return (
        <div className='Menu'>
            {active ? <ActiveMenu name={name} avatarType={avatarType} closeMenu={() => activeMenu(false)} currentMenu={currentMenu} changeCurrentMenu={changeCurrentMenu}/> : <IconButton icon={<MdMenu/>} onClick={() => activeMenu(true)} size='medium' type='menuBtn'/>}
        </div>
    );
}

export default Menu;