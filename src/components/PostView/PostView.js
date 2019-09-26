import React from 'react';
import MyStyles from './PostView.css';
import Post from "../PostFeed/Post/Post";

const postview = (props) => {
    let chosenTopic = props.post;

    return (
        <div className={MyStyles.Postview}>
            <div className={MyStyles.Back}>
                <i className={MyStyles.fa_angle_left}></i>
                <p onClick={props.back}>Back to recipes</p>
            </div>

            <Post key={chosenTopic.title}
                  recipe={chosenTopic}
                  addLikes={props.addLikes} />
        </div>
    )
};

export default postview;