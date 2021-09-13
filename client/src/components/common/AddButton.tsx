import React from 'react';
import { MdAdd } from 'react-icons/md';

function AddButton({onClickHandler,size}:{onClickHandler:() => void,size:string}) {
    return (
       <button className={`AddButton ${size}`} type='button' onClick={() => onClickHandler()}>
            <MdAdd/>
        </button>
    );
}

export default AddButton;