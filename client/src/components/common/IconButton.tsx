import React,{MouseEvent} from 'react';

type IconButtonProps = {
    icon:JSX.Element,
    onClick:Function,
    size:string,
    type?:string,
}

function IconButton({icon,onClick,size,type}:IconButtonProps) {
    return (
        <button type='button' className={`IconButton ${size} ${type}`} onClick={(e: MouseEvent<HTMLButtonElement>)  => onClick(e)}>
            {icon}
        </button>
    );
}

IconButton.defaultProps = {
    type:''
}

export default IconButton;