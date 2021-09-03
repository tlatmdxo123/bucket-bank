import React from 'react';

type DropMenuListPropsTypes = {
    text:string,
}
function DropMenuList({text}:DropMenuListPropsTypes) {
    return (
        <li className='dropMenuList'>
            {text}
        </li>
    );
}

export default DropMenuList;