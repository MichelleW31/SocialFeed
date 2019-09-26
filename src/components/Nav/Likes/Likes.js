import React from 'react';
import MyStyles from "../../PostView/PostView.css";

const likes = (props) => {

  let chosenTopic = props.like;
  console.log('liked item:', chosenTopic);
  // let imgUrl = require(`../../../../src/images/${chosenTopic.imgPath}`);

  let layout = <p>You currently have no likes</p>;

    if(chosenTopic.length > 0){
      layout =
        <>
          <div>
            <h3 className={MyStyles.Title}>{chosenTopic[0].title}</h3>
            <h4 className={MyStyles.Level}>Level: {chosenTopic[0].level}</h4>
            <h5 className={MyStyles.Time}>Cook time: {chosenTopic[0].cooktime}</h5>
          </div>

          <div>
            {/*<img className={MyStyles.Image} src={imgUrl} alt={chosenTopic.title}/>*/}
          </div>
        </>
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