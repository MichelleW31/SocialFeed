import React from 'react';
import MyStyles from './Topic.css';

const topic = (props) => (
    <div className={MyStyles.Topic}>
        <div>
            <img src="../../../../public/images/sloppy-joe.jpg" alt=""/>
        </div>
        <h1>topic</h1>
    </div>
);

export default topic;