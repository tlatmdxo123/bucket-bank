import React from 'react';
type ModalPropsTypes = {
    children:JSX.Element | JSX.Element[]
}
function Modal({children}:ModalPropsTypes) {
    return (
        <div className='Modal'>
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
}

export default Modal;