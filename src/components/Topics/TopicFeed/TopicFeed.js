import React from 'react';
import Topic from './Topic/Topic';
import MyStyles from './TopicFeed.css';

const topicFeed = (props) => {
    //Shuffles array so that the featured recipes are different after every reload.
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let recArr = props.recipes;
    shuffle(recArr);

    let inRecipes = recArr.slice(0,8).map((recipe, i) =>{
        console.log(i);
        return <Topic key={recipe.title} title={recipe.title} imgSrc={recipe.imgPath} />
    });

    return (
        <div className={MyStyles.TopicFeed}>
            {inRecipes}
        </div>
    )
};

export default topicFeed;