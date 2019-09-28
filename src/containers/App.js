import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import TopicFeed from '../components/TopicFeed/TopicFeed';
import PostFeed from '../components/PostFeed/PostFeed';
import PostView from '../components/PostView/PostView';
import Likes from '../components/Nav/Likes/Likes';



class App extends Component {
    state = {
        recipes: [
            {title: 'Sloppy Joes', cooktime: '30 minutes', popularity: "7/10", level: "Easy" , imgPath: "sloppy-joe.jpg", liked: false },
            {title: 'Stir Fry', cooktime: '60 minutes', popularity: "10/10", level: "Easy", imgPath: "stir-fry.jpg", liked: false },
            {title: 'Quesadillas', cooktime: '40 minutes', popularity: "10/10", level: "Easy", imgPath: "quesadilla.jpg" , liked:false},
            {title: 'Nachos', cooktime: '30 minutes', popularity: "8/10", level: "Easy", imgPath: "nachos.jpg", liked:false },
            {title: 'Lentil Soup', cooktime: '60 minutes', popularity: "8/10", level: "Medium", imgPath: "lentil-soup.jpg", liked:false },
            {title: 'Grilled Salmon', cooktime: '60 minutes', popularity: "10/10", level: "Medium", imgPath: "salmon.jpg", liked:false },
            {title: 'Tuna Croquette', cooktime: '50 minutes', popularity: "9/10", level: "Medium", imgPath: "tuna-croquette.jpg", liked:false },
            {title: 'Stuffed Shells', cooktime: '30 minutes', popularity: "10/10", level: "Hard", imgPath: "stuffed-shells.jpg", liked:false },
            {title: 'Deep Dish Pizza', cooktime: '60 minutes', popularity: "6/10", level: "Hard", imgPath: "deep-dish-pizza.jpg", liked:false },
            {title: 'Chicken Parm', cooktime: '90 minutes', popularity: "8/10", level: "Hard", imgPath: "chicken-parmesean.jpg", liked:false },
            {title: 'Tacos', cooktime: '30 minutes', popularity: "7/10", level: "Easy" , imgPath: "tacos.jpg", liked:false },
            {title: 'Stuffed Chicken', cooktime: '60 minutes', popularity: "10/10", level: "Easy", imgPath: "stuffed-chicken.jpg", liked:false },
            {title: 'Spaghetti', cooktime: '40 minutes', popularity: "10/10", level: "Easy", imgPath: "spaghetti.jpg", liked:false },
            {title: 'Veggie Rice', cooktime: '30 minutes', popularity: "8/10", level: "Easy", imgPath: "veggie-rice.jpg", liked:false },
            {title: 'Sushi', cooktime: '60 minutes', popularity: "8/10", level: "Medium", imgPath: "sushi.jpg", liked:false },
            {title: 'Lamb Chops', cooktime: '60 minutes', popularity: "10/10", level: "Medium", imgPath: "lamb-chops.jpg", liked:false },
            {title: 'Garlic Shrimp', cooktime: '50 minutes', popularity: "9/10", level: "Medium", imgPath: "shrimp.jpg", liked:false },
            {title: 'Pesto Pasta', cooktime: '30 minutes', popularity: "10/10", level: "Hard", imgPath: "pesto-pasta.jpg" , liked:false},
            {title: 'Macaroni', cooktime: '60 minutes', popularity: "6/10", level: "Hard", imgPath: "macaroni.jpg", liked:false },
            {title: 'Lettuce Wraps', cooktime: '90 minutes', popularity: "8/10", level: "Hard", imgPath: "lettuce-wraps.jpg", liked:false }
        ],
        step: 0,
        post: {},
        like: []
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


    toggleLikes = (like) => {
      const likeArray = [...this.state.like];

      if(!like.liked) {
        likeArray.push(like);
        this.setState({
          like: likeArray
        });
      } else {
          let index = likeArray.indexOf(likeArray.find(recipe => recipe.title === like.title));
            likeArray.splice(index, 1);
          this.setState({
            like:likeArray
          })
      }
    };

    stateManager = () => {
        const {step} = this.state;
        switch (step) {
            case 0:
                return <PostFeed recipes={this.state.recipes} toggleLikes={this.toggleLikes} step={this.state.step}/>;
            case 1:
                return <PostView post={this.state.post} recipes={this.state.recipes} back={this.back} toggleLikes={this.toggleLikes}/>;
            case 2:
                return <Likes back={this.back} like={this.state.like} toggleLikes={this.toggleLikes}/>;
            default:
                return <PostFeed recipes={this.state.recipes} toggleLikes={this.toggleLikes} step={this.state.step}/>;
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
