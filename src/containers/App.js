import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TopicFeed from '../components/TopicFeed/TopicFeed';
import PostFeed from '../components/PostFeed/PostFeed';



class App extends Component {
    state = {
        recipes: [
            {title: 'Sloppy Joes', cooktime: '30 minutes', popularity: "7/10", level: "easy" , imgPath: "sloppy-joe.jpg" },
            {title: 'Stir Fry', cooktime: '60 minutes', popularity: "10/10", level: "easy", imgPath: "stir-fry.jpg" },
            {title: 'Quesadillas', cooktime: '40 minutes', popularity: "10/10", level: "easy", imgPath: "quesadilla.jpg" },
            {title: 'Nachos', cooktime: '30 minutes', popularity: "8/10", level: "easy", imgPath: "nachos.jpg" },
            {title: 'Lentil Soup', cooktime: '60 minutes', popularity: "8/10", level: "medium", imgPath: "lentil-soup.jpg" },
            {title: 'Grilled Salmon', cooktime: '60 minutes', popularity: "10/10", level: "medium", imgPath: "salmon.jpg" },
            {title: 'Tuna Croquette', cooktime: '50 minutes', popularity: "9/10", level: "medium", imgPath: "tuna-croquette.jpg" },
            {title: 'Stuffed Shells', cooktime: '30 minutes', popularity: "10/10", level: "hard", imgPath: "stuffed-shells.jpg" },
            {title: 'Deep Dish Pizza', cooktime: '60 minutes', popularity: "6/10", level: "hard", imgPath: "deep-dish-pizza.jpg" },
            {title: 'Chicken Parm', cooktime: '90 minutes', popularity: "8/10", level: "hard", imgPath: "chicken-parmesean.jpg" },
            {title: 'Tacos', cooktime: '30 minutes', popularity: "7/10", level: "easy" , imgPath: "tacos.jpg" },
            {title: 'Stuffed Chicken', cooktime: '60 minutes', popularity: "10/10", level: "easy", imgPath: "stuffed-chicken.jpg" },
            {title: 'Spaghetti', cooktime: '40 minutes', popularity: "10/10", level: "easy", imgPath: "spaghetti.jpg" },
            {title: 'Veggie Rice', cooktime: '30 minutes', popularity: "8/10", level: "easy", imgPath: "veggie-rice.jpg" },
            {title: 'Sushi', cooktime: '60 minutes', popularity: "8/10", level: "medium", imgPath: "sushi.jpg" },
            {title: 'Lamb Chops', cooktime: '60 minutes', popularity: "10/10", level: "medium", imgPath: "lamb-chops.jpg" },
            {title: 'Garlic Shrimp', cooktime: '50 minutes', popularity: "9/10", level: "medium", imgPath: "shrimp.jpg" },
            {title: 'Pesto Pasta', cooktime: '30 minutes', popularity: "10/10", level: "hard", imgPath: "pesto-pasta.jpg" },
            {title: 'Macaroni', cooktime: '60 minutes', popularity: "6/10", level: "hard", imgPath: "macaroni.jpg" },
            {title: 'Lettuce Wraps', cooktime: '90 minutes', popularity: "8/10", level: "hard", imgPath: "lettuce-wraps.jpg" }
        ]
    };


    render() {
        return (
          <>
            <Nav />
            <TopicFeed
                recipes={this.state.recipes} />
            <PostFeed
                recipes={this.state.recipes}/>
          </>
        );
    }
}

export default App;
