import React from 'react';
//import formstyle from './form.module.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Forma = () => {
  return (
      <div>
         <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control  placeholder="Description" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="dark">Add post</Button>
          </Form> 
      </div>
  );
}

export default Forma