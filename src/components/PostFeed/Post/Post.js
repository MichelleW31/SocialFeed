import React from 'react';
import MyStyles from './Post.css';

const post = (props) => {
    let imgUrl = require(`../../../../src/images/${props.recipe.imgPath}`);

    return (
        <div className={MyStyles.Post}>
            <div className={MyStyles.Copy}>
                <h3 className={MyStyles.Title}>{props.recipe.title}</h3>
                <h4 className={MyStyles.Level}>Level: {props.recipe.level}</h4>
                <h5 className={MyStyles.Time}>Cook time: {props.recipe.cooktime}</h5>
            </div>

            <div className={MyStyles.ImageDiv}>
                <img className={MyStyles.Image} src={imgUrl} alt=""/>
            </div>

            <div className={MyStyles.Sendoff}>
                <i className={MyStyles.fa_heart}></i>
                <i className={MyStyles.fa_paper_plane}></i>
            </div>

            <hr/>
        </div>
    )

};

export default post;