import React from 'react';
import LikeSend from '../../LikeSend/LikeSend';
import MyStyles from './Post.css';

class Post extends React.Component {
    imgUrl = require(`../../../../src/images/${this.props.recipe.imgPath}`);

    likePost = () =>{
        console.log(this.props.recipe);
    };

    render() {
        return(
            <div className={MyStyles.Post}>
                <div className={MyStyles.Copy}>
                    <h3 className={MyStyles.Title}>{this.props.recipe.title}</h3>
                    <h4 className={MyStyles.Level}>Level: {this.props.recipe.level}</h4>
                    <h5 className={MyStyles.Time}>Cook time: {this.props.recipe.cooktime}</h5>
                </div>

                <div className={MyStyles.ImageDiv}>
                    <img className={MyStyles.Image} src={this.imgUrl} alt=""/>
                </div>

                <div className={MyStyles.Sendoff}>
                    <LikeSend
                        recipe={this.props.recipe}
                        likePost={this.likePost}/>
                </div>

                <hr/>
            </div>
        )
}

}

export default Post;