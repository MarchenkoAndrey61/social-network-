import React from 'react';
import classmypost from './MyPosts.module.css';
import Post from './Post/Post';
import {Form} from 'react-bootstrap';

const MyPosts = () => {

  let PostData = [
    {id: 1, message:'First Post', likeCount: 11 },
    {id: 2, message:'Second Post', likeCount: 23}
  ]

  let PostElements = PostData
      .map( post => <Post message = {post.message} likeCount = {post.likeCount}/> );

  return (  
        <div className = {classmypost.middle}>
           <h1>Add new post</h1>
          <div>
            <div className = {classmypost.forma}>
              <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  placeholder="Description" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Form> 
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


