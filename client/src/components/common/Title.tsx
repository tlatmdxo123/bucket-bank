import React from 'react';

type TitleProps = {
    content:string
}
function Title({content}:TitleProps) {
    return (
        <h2 className='title'>
            {content}
        </h2>
    );
}

export default Title;