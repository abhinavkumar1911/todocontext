import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa';


const TodoList = () => {
  const { todos, deleteTodo, clearAll, search } = useContext(TodoContext);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ListGroup>
        {filteredTodos.map(todo => (
          <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
            {todo.text}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
               <FaTrash/>
              </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {todos.length > 0 && (
        <Button variant="warning" className="mt-3" onClick={clearAll}>
          Clear All
        </Button>
      )}
    </>
  );
};

export default TodoList;