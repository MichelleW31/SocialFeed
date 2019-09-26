import React from 'react';
import Post from './Post/Post';
import MyStyles from './PostFeed.css';

const postfeed = (props) =>{
    //Shuffles array so that the featured recipes are different after every reload.
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let recArr = [...props.recipes];
    // shuffle(recArr);

    //Maps through recipes and returns a post for each one.
    let inRecipes = recArr.map((recipe) =>{
        return <Post key={recipe.title} recipe={recipe} addLikes={props.addLikes} step={props.step} />
    });


    return (
        <div className={MyStyles.PostFeed}>
            {inRecipes}
        </div>
    )
};

export default postfeed;