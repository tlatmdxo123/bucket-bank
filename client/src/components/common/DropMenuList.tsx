import React from 'react';

type DropMenuListPropsTypes = {
    text:string,
}
function DropMenuList({text}:DropMenuListPropsTypes) {
    return (
        <li>
            {text}
        </li>
    );
}

export default DropMenuList;