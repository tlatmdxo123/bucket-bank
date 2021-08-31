import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Menu from '../components/common/Menu';
import {RootState} from '../reducers'
import {setCurrentMenu} from '../actions/MenuActions'

function MenuContainer() {
    const dispatch = useDispatch()
    const {name,avatarType,currentMenu} = useSelector((state:RootState) => ({
        name:state.setUser.name,
        avatarType:state.setUser.avatarType,
        currentMenu:state.setMenu.currentMenu
    }))

    const changeCurrentMenu = (menu:string) => {
        dispatch(setCurrentMenu(menu))
    }

     
    return (
        <>
            <Menu name={name} avatarType={avatarType} currentMenu={currentMenu} changeCurrentMenu={changeCurrentMenu}/>
        </>
    );
}

export default MenuContainer;