import React from 'react';
import MyStyles from './PostView.css';

const postview = (props) => {

    return (
        <div className={MyStyles.Postview}>
            <p onClick={props.back}>Back to recipes</p>
            This is the postview
        </div>
    )
};

export default postview;