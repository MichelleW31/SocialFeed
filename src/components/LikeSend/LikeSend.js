import React from 'react';
import MyStyles from './LikeSend.css';

const likesend = (props) => {

    return(
        <>
            <i className={MyStyles.fa_heart} onClick={props.likePost}></i>
            <i className={MyStyles.fa_paper_plane}></i>
        </>
    )

};

export default likesend;