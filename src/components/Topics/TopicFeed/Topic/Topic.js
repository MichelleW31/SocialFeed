import React from 'react';
import MyStyles from './Topic.css';

const topic = (props) => {
    let imgUrl = require(`../../../../../src/images/${props.imgSrc}`);

    return (
        <div className={MyStyles.Topic}>
            <div className={MyStyles.TopicImage} style={{
                backgroundImage: 'url(' + imgUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
            </div>
            <h1 className={MyStyles.TopicTitle}>{props.title}</h1>
        </div>
    )

};

export default topic;