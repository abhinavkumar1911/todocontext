import React from 'react';
import { Container } from 'react-bootstrap';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <TodoProvider>
      <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
        <h2 className="text-center mb-4">React To-Do App</h2>
        <SearchBar />
        <TodoInput />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;