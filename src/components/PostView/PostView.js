import React from 'react';
import MyStyles from './PostView.css';

const postview = (props) => {

    let chosenTopic = props.post;
    let imgUrl = require(`../../../src/images/${chosenTopic.imgPath}`);
    // console.log('From postview', chosenTopic);

    return (
        <div className={MyStyles.Postview}>
            <div className={MyStyles.Back}>
                <i className={MyStyles.fa_angle_left}></i>
                <p onClick={props.back}>Back to recipes</p>
            </div>

            <div className={MyStyles.Copy}>
                <h3 className={MyStyles.Title}>{chosenTopic.title}</h3>
                <h4 className={MyStyles.Level}>Level: {chosenTopic.level}</h4>
                <h5 className={MyStyles.Time}>Cook time: {chosenTopic.cooktime}</h5>
            </div>

            <div className={MyStyles.ImageDiv}>
                <img className={MyStyles.Image} src={imgUrl} alt=""/>
            </div>

            <div className={MyStyles.Sendoff}>
                <i className={MyStyles.fa_heart}></i>
                <i className={MyStyles.fa_paper_plane}></i>
            </div>
        </div>
    )
};

export default postview;