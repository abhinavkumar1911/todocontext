import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
  const { search, setSearch, todos } = useContext(TodoContext);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (trimmedSearch === '') {
      setError('Please enter the search');
    } else {
      const match = todos.some(todo =>
        todo.text.toLowerCase().includes(trimmedSearch.toLowerCase())
      );
      if (!match) {
        setError('No matching todo found');
      } else {
        setError(''); // Clear error if match found
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <Form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="me-2"
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
};

export default SearchBar;