import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TopicFeed from '../components/Topics/TopicFeed/TopicFeed';



class App extends Component {
    state = {
        recipes: [
            {title: 'Sloppy Joes', cooktime: '30 minutes', popularity: "7/10", level: "easy" , imgPath: "/public/images/sloppy-joe" },
            {title: 'Stir Fry', cooktime: '60 minutes', popularity: "10/10", level: "easy", imgPath: "/public/images/stir-fry" },
            {title: 'Quesadillas', cooktime: '40 minutes', popularity: "10/10", level: "easy", imgPath: "/public/images/quesadilla" },
            {title: 'Nachos', cooktime: '30 minutes', popularity: "8/10", level: "easy", imgPath: "/public/images/nachos" },
            {title: 'Lentil Soup', cooktime: '60 minutes', popularity: "8/10", level: "medium", imgPath: "/public/images/lentil-soup" },
            {title: 'Garlic Salmon', cooktime: '60 minutes', popularity: "10/10", level: "medium", imgPath: "/public/images/salmon" },
            {title: 'Tuna Croquettes', cooktime: '50 minutes', popularity: "9/10", level: "medium", imgPath: "/public/images/tuna-croquette" },
            {title: 'Stuffed Shells', cooktime: '30 minutes', popularity: "10/10", level: "hard", imgPath: "/public/images/stuffed-shells" },
            {title: 'Deep Dish Pizza', cooktime: '60 minutes', popularity: "6/10", level: "hard", imgPath: "/public/images/deep-dish-pizza" },
            {title: 'Chicken Parmesean', cooktime: '90 minutes', popularity: "8/10", level: "hard", imgPath: "/public/images/chicken-parmesean" }
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
