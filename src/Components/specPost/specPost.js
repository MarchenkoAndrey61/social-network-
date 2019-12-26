import React from "react";
import spec from './specPost.module.css';
import {Button} from 'react-bootstrap';

class specPost extends React.Component {
  render(){
    let allPosts
      if (this.props.data.length) {
        allPosts = this.props.data.map(function (item) {
          return (
              <div key={item.id} className={spec. main}>
                <div className = {spec.topContent}>
                  <div className = {spec.title}> 
                    <div>
                      <img src = "https://s.yimg.com/ny/api/res/1.2/7bbMUDnuJ0DeybIOk_CVzQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/68ead40c4b63a59b3c33c2e01a647f19" 
                          alt = "avatar"
                      />
                    </div>
                    <div className = {spec.user}>
                      <div>
                        <h5>username</h5>
                      </div>
                      <div>
                        <h6>add:</h6>
                      </div>
                    </div>
                  </div>
                  <div className = {spec.postContent}>
                    <h1> {item.title} </h1>
                    <h4>{item.discription}</h4>
                  </div>
                </div>
                  <div>
                    <label>
                        Comments:
                    </label>
                  </div>
                  <Button variant="dark">Show post</Button>
              </div>
          )
        })
      } else {
        allPosts = <p>No posts :(</p>
      }
      return (   
        <div>
          
        </div> 
        
      );
   }
  }


export default specPost