import React from 'react';
import classmypost from './MyPosts.module.css';

import Forma from './Form/form';

const MyPosts = (props) => {
 

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
            
          </div>
        </div>
  );
}

export default MyPosts