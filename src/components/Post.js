import React from "react";

const Post = (props) => {

    return (
        <>
            <div className="Post-image">
                <div className="Post-image">
                    <img alt="Icon Living"
                         src={props.post}/>
                </div>

            </div>

            <div className="Post-caption">
                <strong>{props.username}</strong>{props.caption}
            </div>
        </>
    )
};

export default Post;