import React from 'react';
import classmypost from './MyPosts.module.css';
import Forma from './Form/form';
import {NavLink} from "react-router-dom"

class MyPosts extends React.Component {
 render(){

  fetch('https://postify-api.herokuapp.com/posts', {
    method: 'GET',
    headers: new Headers ({
      'Content-Type': 'application/json',
      'Access-Token': localStorage.getItem('Access-Token'),
      'Client': localStorage.getItem('Client'),
      'Uid': localStorage.getItem('Uid'),
    })
  })

  let allPosts
    if (this.props.data.length) {
      allPosts = this.props.data.map(function (item) {
        return (
            <div key={item.id} className={classmypost. main}>
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
                      <h6>add:</h6>
                    </div>
                  </div>
                </div>
                <div className = {classmypost.postContent}>
                  <h1> {item.title} </h1>
                  <h4>{item.discription}</h4>
                </div>
              </div>
                <div>
                  <label>
                      Comments:
                  </label>
                </div>
                <NavLink to={`/posts/${item.id}`} className = {classmypost.NavLink}>Check Post</NavLink>
            </div>
        )
      })
    } else {
      allPosts = <p>No posts :(</p>
    }
    return (   
      <div>
        <h1>Add new post</h1>
            <div className = {classmypost.forma}>
              <Forma addPost={this.props.addPost}/>
            </div>
        {allPosts}
      </div> 
      
    );
 }
}

export default MyPosts

