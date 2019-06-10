import React from 'react';
import Topic from './Topic/Topic';

const topicFeed = (props) => {
    let inRecipes = props.recipes.map(recipe =>{
        return <Topic key={recipe.title} recipes={props.recipes} />

    });

    return (
        <div>
            {inRecipes}
        </div>
    )
};

export default topicFeed;