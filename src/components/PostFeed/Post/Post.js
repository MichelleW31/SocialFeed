import React from 'react';
import MyStyles from './Post.css';

class Post extends React.Component {
    imgUrl = require(`../../../../src/images/${this.props.recipe.imgPath}`);

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
                    <i className={MyStyles.fa_heart}></i>
                    <i className={MyStyles.fa_paper_plane}></i>
                </div>

                <hr/>
            </div>
        )
}

}

export default Post;