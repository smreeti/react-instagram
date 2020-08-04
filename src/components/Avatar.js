import React from "react";

const Avatar = (props) => {

    return (
        <header>
            <div className="Post-user">
                <div className="Post-user-avatar">
                    <img
                        src={props.avatar}
                        alt={props.username}/>
                </div>
                <div className="Post-user-nickname">
                    <span>{props.username}</span>
                </div>
            </div>
        </header>
    )
};

export default Avatar;