import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TopicFeed from '../components/TopicFeed/TopicFeed';
import PostFeed from '../components/PostFeed/PostFeed';
import PostView from '../components/PostView/PostView';



class App extends Component {
    state = {
        recipes: [
            {title: 'Sloppy Joes', cooktime: '30 minutes', popularity: "7/10", level: "Easy" , imgPath: "sloppy-joe.jpg" },
            {title: 'Stir Fry', cooktime: '60 minutes', popularity: "10/10", level: "Easy", imgPath: "stir-fry.jpg" },
            {title: 'Quesadillas', cooktime: '40 minutes', popularity: "10/10", level: "Easy", imgPath: "quesadilla.jpg" },
            {title: 'Nachos', cooktime: '30 minutes', popularity: "8/10", level: "Easy", imgPath: "nachos.jpg" },
            {title: 'Lentil Soup', cooktime: '60 minutes', popularity: "8/10", level: "Medium", imgPath: "lentil-soup.jpg" },
            {title: 'Grilled Salmon', cooktime: '60 minutes', popularity: "10/10", level: "Medium", imgPath: "salmon.jpg" },
            {title: 'Tuna Croquette', cooktime: '50 minutes', popularity: "9/10", level: "Medium", imgPath: "tuna-croquette.jpg" },
            {title: 'Stuffed Shells', cooktime: '30 minutes', popularity: "10/10", level: "Hard", imgPath: "stuffed-shells.jpg" },
            {title: 'Deep Dish Pizza', cooktime: '60 minutes', popularity: "6/10", level: "Hard", imgPath: "deep-dish-pizza.jpg" },
            {title: 'Chicken Parm', cooktime: '90 minutes', popularity: "8/10", level: "Hard", imgPath: "chicken-parmesean.jpg" },
            {title: 'Tacos', cooktime: '30 minutes', popularity: "7/10", level: "Easy" , imgPath: "tacos.jpg" },
            {title: 'Stuffed Chicken', cooktime: '60 minutes', popularity: "10/10", level: "Easy", imgPath: "stuffed-chicken.jpg" },
            {title: 'Spaghetti', cooktime: '40 minutes', popularity: "10/10", level: "Easy", imgPath: "spaghetti.jpg" },
            {title: 'Veggie Rice', cooktime: '30 minutes', popularity: "8/10", level: "Easy", imgPath: "veggie-rice.jpg" },
            {title: 'Sushi', cooktime: '60 minutes', popularity: "8/10", level: "Medium", imgPath: "sushi.jpg" },
            {title: 'Lamb Chops', cooktime: '60 minutes', popularity: "10/10", level: "Medium", imgPath: "lamb-chops.jpg" },
            {title: 'Garlic Shrimp', cooktime: '50 minutes', popularity: "9/10", level: "Medium", imgPath: "shrimp.jpg" },
            {title: 'Pesto Pasta', cooktime: '30 minutes', popularity: "10/10", level: "Hard", imgPath: "pesto-pasta.jpg" },
            {title: 'Macaroni', cooktime: '60 minutes', popularity: "6/10", level: "Hard", imgPath: "macaroni.jpg" },
            {title: 'Lettuce Wraps', cooktime: '90 minutes', popularity: "8/10", level: "Hard", imgPath: "lettuce-wraps.jpg" }
        ],
        step: 0
    };

    incrementStep = () => this.setState(() => ({step: 1}));

    back = () => this.setState(() => ({step: 0}));

    stateManager = () => {
        const {step} = this.state;
        switch (step) {
            case 0:
                return <PostFeed recipes={this.state.recipes}/>;
            case 1:
                return <PostView back={this.back}/>;
            default:
                return <PostFeed recipes={this.state.recipes}/>;
        }
    };


    render() {
        return (
          <>
            <Nav />
            <TopicFeed
                recipes={this.state.recipes}
                incrementStep={this.incrementStep}/>
              {this.stateManager()}
          </>
        );
    }
}

export default App;
