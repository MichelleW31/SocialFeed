import React from 'react';
import MyStyles from './Topic.css';

const topic = (props) => (
    <div className={MyStyles.Topic}>
        <div className={MyStyles.Topic2}>
            <img src={require(`../../../../../src/images/${props.imgSrc}`)} alt=""/>
        </div>
        <h1>{props.title}</h1>
    </div>
);

export default topic;