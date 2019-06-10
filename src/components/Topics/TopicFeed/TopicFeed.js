import React from 'react';
import Topic from './Topic/Topic';
import MyStyles from './TopicFeed.css';

const topicFeed = (props) => {
    let inRecipes = props.recipes.map(recipe =>{
        return <Topic key={recipe.title} title={recipe.title} imgSrc={recipe.imgPath} />

    });

    return (
        <div className={MyStyles.TopicFeed}>
            {inRecipes}
        </div>
    )
};

export default topicFeed;