import React from 'react';
import Avatar from './Avatar';
import MenuList from './MenuList';
import {MENU_LISTS} from '../../constants/menu'
import IconButton from './IconButton';
import {MdClose} from 'react-icons/md'

type ActiveMenuProps = {
    name:string,
    avatarType:string,
    closeMenu:(state:boolean) => void,
    currentMenu:string,
    changeCurrentMenu:(menu:string) => void
}
function ActiveMenu({name,avatarType,closeMenu,currentMenu,changeCurrentMenu}:ActiveMenuProps) {
    return (
        <div className='ActiveMenu' data-test-id='activeMenu'>
            <IconButton icon={<MdClose/>} onClick={closeMenu} size='medium'/>
            <div className='wrapper user-info'>
                <Avatar avatarType={avatarType} size='medium'/>
                 <p className='greet'>{name}님 환영합니다</p>
            </div>
            <ul className='wrapper menu-lists'>
                {MENU_LISTS.map(list =>{
                    return <MenuList title={list.title} icon={list.icon} active={list.icon === currentMenu ? 'active': '' } changeCurrentMenu={changeCurrentMenu}/>
                })}
            </ul>
        </div>
    );
}

export default ActiveMenu;