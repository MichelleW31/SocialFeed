import React from 'react';
import MyStyles from './Topic.css';

class Topic extends React.Component {
    imgUrl = require(`../../../../src/images/${this.props.imgSrc}`);

    selectPost = () => {
    this.props.incrementStep();
        console.log(this);
    };


    render(){
        return (
            <div className={MyStyles.Topic} onClick={this.selectPost}>
                <div className={MyStyles.TopicImage} style={{
                    backgroundImage: 'url(' + this.imgUrl + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>
                <h2 className={MyStyles.TopicTitle}>{this.props.title}</h2>
            </div>
        )
    }

}

export default Topic;