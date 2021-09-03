import React from 'react';
import DropMenuList from './DropMenuList';

type DropMenuProps = {
    lists:Array<string>,
    onSelect:(arg?:React.MouseEvent<HTMLElement>) => void
}

function DropMenu({lists,onSelect}:DropMenuProps) {
    return (
        <ul className='DropMenu' onClick={(e) => onSelect(e)}>
            {lists.map(list => <DropMenuList text={list}/>)}
        </ul>
    );
}

export default DropMenu;