import React from 'react';
import classmypost from './Post.module.css';
import {Button} from 'react-bootstrap';

const Post = (props) => {
  return (     
      <div className = {classmypost.main}>
        <div className = {classmypost.topContent}>     
          <div className = {classmypost.title}> 
            <div>
              <img src = "https://s.yimg.com/ny/api/res/1.2/7bbMUDnuJ0DeybIOk_CVzQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/68ead40c4b63a59b3c33c2e01a647f19" 
                  alt = "avatar"
              />
            </div>
            <div className = {classmypost.user}>
              <div>
                 <h5>username</h5>
              </div>
              <div>
                <h6>post:</h6>
              </div>
            </div>
          </div>
          <div className = {classmypost.postContent}>
            <h1>Descriptions: </h1>
            <h4>Content: </h4>
          </div>
        </div>
        <div className = {classmypost.comment}>
          <div>
              <span> comments count:</span> 
          </div>
          <Button variant="dark">Show comments</Button>
        </div>
      </div> 
  );
}

export default Post


