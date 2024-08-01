import React, { useState, useEffect } from 'react';

function SearchFilter({ searchQuery, onChange }) {
  return (
    <div>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search books by title or author"
      />
    </div>
  );
}

function Books() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([
    {
        title: "Book 1",
        author: "John",
        dueDate: new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        status: "Checked Out"
      },
      {
        title: "Book 2",
        author: "Jane",
        dueDate: new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        status: "Checked Out"
      },
      {
        title: "Book 3",
        author: "Mike",
        dueDate: new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        status: "Checked Out"
      },
      {
        title: "Book 4",
        author: "Lisa",
        dueDate: new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        status: "Checked Out"
      },
      {
        title: "Book 5",
        author: "John",
        dueDate: null,
        status: "Available"
      },
      {
        title: "Book 6",
        author: "Jane",
        dueDate: null,
        status: "Available"
      },
      {
        title: "Book 7",
        author: "Mike",
        dueDate: null,
        status: "Available"
      },
      {
        title: "Book 8",
        author: "Lisa",
        dueDate: null,
        status: "Available"
      },
      {
        title: "Book 9",
        author: "John",
        dueDate: null,
        status: "Available"
      },
      {
        title: "Book 10",
        author: "Jane",
        dueDate: null,
        status: "Available"
      }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const toggleStatus = (book) => {
    setBooks(books.map((b) => {
      if (b.title === book.title) {
        return {
          ...b,
          status: b.status === "Available" ? "Checked Out" : "Available",
          dueDate: b.status === "Available" ? new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000) : null,
        };
      }
      return b;
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
  };

  useEffect(() => {
    const filtered = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
  }, [books, searchQuery]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} onChange={handleSearch} />
      {filteredBooks.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Status: {book.status}</p>
          {book.dueDate && <p>Due Date: {book.dueDate.toDateString()}</p>}
          <button onClick={() => toggleStatus(book)}>Toggle Status</button>
        </div>
      ))}
    </div>
  );
}

export default Books;