import React from "react";
import postData from "../postData"
import Avatar from "./Avatar";
import Post from "./Post";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            postsList: postData
        })
    }

    render() {
        return (
            <>
                {this.state.postsList.map(
                    posts => (
                        <article className="Post">
                            <Avatar username={posts.username}
                                    avatar={posts.avatar}/>

                            <Post post={posts.post}
                                  username={posts.username}
                                  caption={posts.caption}
                            />

                        </article>
                    )
                )}
            </>
        )
    }
}

export default Home