import React from 'react';

type ButtonProps = {
    type:'button' | 'submit' | 'reset', 
    children:string,
    disabled:boolean,
    size:string,
    testId?:string,
}



function Button({type,children,disabled,size,testId}:ButtonProps) {
    return (
        <button type={type} className={`Button ${size}`} disabled={disabled} data-test-id={testId}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type:'button'
}



export default Button;