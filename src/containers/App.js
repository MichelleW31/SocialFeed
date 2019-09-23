import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TopicFeed from '../components/TopicFeed/TopicFeed';
import PostFeed from '../components/PostFeed/PostFeed';
import PostView from '../components/PostView/PostView';
import Likes from '../components/Nav/Likes/Likes';



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
        step: 0,
        post: {},
        like: {}
    };

    incrementStep = () => this.setState(() => ({step: 1}));

    back = () => this.setState(() => ({step: 0}));

    showPost = (post) =>{
        this.setState({
            post: post
        })
    };

    likes = () =>{
      this.setState(() => ({step: 2}));
    };

    addLikes = (like) => {
      this.setState({
        like: like
      });

    };

    stateManager = () => {
        const {step} = this.state;
        switch (step) {
            case 0:
                return <PostFeed recipes={this.state.recipes} like={this.state.like} addLikes={this.addLikes} />;
            case 1:
                return <PostView post={this.state.post} recipes={this.state.recipes} back={this.back}/>;
            case 2:
                return <Likes back={this.back} like={this.state.like}/>;
            default:
                return <PostFeed recipes={this.state.recipes} like={this.state.like} addLikes={this.addLikes} />;
        }
    };


    render() {
        return (
          <>
            <Nav
              likes={this.likes}/>
            <TopicFeed
                recipes={this.state.recipes}
                incrementStep={this.incrementStep}
                showPost={this.showPost}/>
              {this.stateManager()}
          </>
        );
    }
}

export default App;
