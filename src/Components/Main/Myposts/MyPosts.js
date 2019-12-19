import React from 'react';
import classmypost from './MyPosts.module.css';
import Post from './Post/Post';
import Forma from './Form/form';

const MyPosts = (props) => {
  console.log(props);
  let PostElements = 
                props.posts.map( post => <Post message = {post.message} comment = {post.comment}/> );

  return (  
        <div className = {classmypost.middle}>
           <h1>Add new post</h1>
          <div>
            <div className = {classmypost.forma}>
              <Forma />
            </div>


          </div>
          <h1>All post (..)</h1>
          <div className = {classmypost.post}>
            {PostElements}
          </div>
        </div>
  );
}

export default MyPosts