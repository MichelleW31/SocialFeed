import React from 'react';
import MyStyles from "../../PostView/PostView.css";
import Post from "../../PostFeed/Post/Post";

const likes = (props) => {
  let likeArray = props.like;

  let layout = <p>You currently have no likes</p>;

  if(likeArray.length > 0){

    layout = likeArray.map((like) => {
      return <Post key={like.title} recipe={like} addLikes={props.addLikes} />
    });

  }

  return (
    <div>
      <div>
        <div className={MyStyles.Back}>
          <i className={MyStyles.fa_angle_left}></i>
          <p onClick={props.back}>Back to recipes</p>
        </div>
        {layout}
      </div>
    </div>
  )
};

export default likes;