import React from 'react';
import MyStyles from "../../PostView/PostView.css";

const likes = (props) => {
  let likeArray = props.like;

  let layout = <p>You currently have no likes</p>;

  if(likeArray.length > 0){

    layout = likeArray.map((like) => {
      let imgUrl = require(`../../../images/${like.imgPath}`);

      return (
        <div key={like.title}>
          <div>
            <h3 className={MyStyles.Title}>{like.title}</h3>
            <h4 className={MyStyles.Level}>Level: {like.level}</h4>
            <h5 className={MyStyles.Time}>Cook time: {like.cooktime}</h5>
          </div>
      
          <div>
            <img className={MyStyles.Image} src={imgUrl} alt={like.title}/>
          </div>
        </div>
      )
    });
  }


  return (
    <div >
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