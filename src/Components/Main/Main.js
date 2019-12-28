import React from 'react';
//import classprof from './Main.module.css';
import MyPosts from './Myposts/MyPosts';
import MainInfo from './MainInfo/MainInfo';

const Main = (props) => {
  
   
  return (
    <div>
       <MainInfo />
       <MyPosts addPost={props.addPost} data={props.data} watchPost={props.watchPost} />
    </div>
  );
}

export default Main