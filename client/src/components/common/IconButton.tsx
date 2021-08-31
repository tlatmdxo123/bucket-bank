import React,{MouseEvent} from 'react';

type IconButtonProps = {
    icon:JSX.Element,
    onClick:Function,
    size:string,
    shape:string,
    background:string,
    color?:string,
    type?:string,
}

function IconButton({icon,onClick,size,type,shape,background,color}:IconButtonProps) {
    return (
        <button type='button' className={`IconButton ${size} ${type} ${shape} bg-${background} ${color}`} onClick={(e: MouseEvent<HTMLButtonElement>)  => onClick(e)} data-test-id={type}>
            {icon}
        </button>
    );
}

IconButton.defaultProps = {
    type:'',
    shape:'',
    background: '',

}

export default IconButton;