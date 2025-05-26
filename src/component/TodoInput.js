import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoInput.css'

const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const [clicked, setClicked] = useState(false);

const handleClick = () => {
  setClicked(true);
  setTimeout(() => setClicked(false), 1000); // Reset after 1 second
};

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Row>
        <Col md={10}>
          <Form.Control
            type="text"
            placeholder="Enter a new to-do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button  type="submit"
                    variant="primary"
                      className={`custom-btn ${clicked ? 'clicked' : ''}`}
                      block
                   onClick={handleClick}>
                  Add
              </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoInput;