import React from 'react';

type AvatarProps = {
    avatarType:string,
    size:string,
}
function Avatar({avatarType,size}:AvatarProps) {
    return (
        <div className={`Avatar ${size}`}>
            <img src={`/images/${avatarType}.png`}></img>
        </div>
    );
}

export default Avatar;