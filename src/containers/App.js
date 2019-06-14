import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TopicFeed from '../components/Topics/TopicFeed/TopicFeed';



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
            {title: 'Tacos', cooktime: '30 minutes', popularity: "7/10", level: "easy" , imgPath: "sloppy-joe.jpg" },
            {title: 'Food', cooktime: '60 minutes', popularity: "10/10", level: "easy", imgPath: "stir-fry.jpg" },
            {title: 'Spaghetti', cooktime: '40 minutes', popularity: "10/10", level: "easy", imgPath: "quesadilla.jpg" },
            {title: 'Veggie Rice', cooktime: '30 minutes', popularity: "8/10", level: "easy", imgPath: "nachos.jpg" },
            {title: 'Sushi', cooktime: '60 minutes', popularity: "8/10", level: "medium", imgPath: "lentil-soup.jpg" },
            {title: 'Pork Chops', cooktime: '60 minutes', popularity: "10/10", level: "medium", imgPath: "salmon.jpg" },
            {title: 'Garlic Shrimp', cooktime: '50 minutes', popularity: "9/10", level: "medium", imgPath: "tuna-croquette.jpg" },
            {title: 'Pesto Pasta', cooktime: '30 minutes', popularity: "10/10", level: "hard", imgPath: "stuffed-shells.jpg" },
            {title: 'Macaroni', cooktime: '60 minutes', popularity: "6/10", level: "hard", imgPath: "deep-dish-pizza.jpg" },
            {title: 'Lettuce Wraps', cooktime: '90 minutes', popularity: "8/10", level: "hard", imgPath: "chicken-parmesean.jpg" }
        ]
    };


    render() {
        return (
          <>
            <Nav />
            <TopicFeed
                recipes={this.state.recipes} />
            PostFeed
          </>
        );
    }
}

export default App;
