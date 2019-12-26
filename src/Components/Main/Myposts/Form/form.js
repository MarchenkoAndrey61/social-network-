import React from 'react';
//import formstyle from './form.module.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Forma extends React.Component{
  state = {
    title: '',
    discription: ''
  }

  onBtnClick = () => {
    const title = this.state.title
    const discription = this.state.discription
    this.props.addPost(title, discription)
    this.setState({
      title: '',
      discription: '',
    })
  }
  changeNewPost = (e) => {
    const { name } = e.currentTarget
    this.setState({ [name]: e.currentTarget.value })
  }

  render () {
    
    return (
      <div>
         <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control name='title' onChange={this.changeNewPost}  placeholder="Title" value ={this.state.title} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Textarea</Form.Label>
              <Form.Control name='discription' onChange={this.changeNewPost} placeholder="Description"  as="textarea" rows="3" value ={this.state.discription} />
            </Form.Group>
            <Button onClick={this.onBtnClick} variant="dark">Add post</Button>
          </Form> 
      </div>
    );
  }
  
}

export default Forma