import React from "react";


const Book = ({ book, toggleStatus }) => {
  const { title, author, dueDate, status } = book;

  const handleToggleStatus = () => {
    toggleStatus(book);
  };

  return (
    <div className="book">
      <span>{title}</span>
      <span>{author}</span>
      {status === "Checked Out" ? <span>{dueDate}</span> : null}
      <button onClick={handleToggleStatus}>Toggle Status</button>
    </div>
  );
};

const Books = ({ books }) => {
  const toggleStatus = (book) => {
    // Implement your logic to toggle the status of the book
  };

  return (
    <div className="books">
      <h2>Books</h2>
      <div className="book-list">
        <div className="book-header">
          <span>No.</span>
          <span>Title</span>
          <span>Author</span>
          <span>Due Date</span>
          <span>Status</span>
        </div>
        {books.map((book, index) => (
          <Book key={index} book={book} toggleStatus={toggleStatus} />
        ))}
      </div>
    </div>
  );
};

export default Books;
