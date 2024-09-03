import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from '../models/Book';
import { getBooks, deleteBook } from '../services/BookService'; 
import '../styles/home.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetchBooks(); 

        const intervalId = setInterval(() => {
            fetchBooks(); 
        }, 10000);

        return () => clearInterval(intervalId); 
    }, []);

    const fetchBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleEdit = (book: Book) => {
        navigate(`/edit-book/${book.id}`); 
    };

    const handleDelete = async (bookId: number) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await deleteBook(bookId);
                setBooks(books.filter(book => book.id !== bookId));
                console.log(`Book with ID ${bookId} deleted.`);
            } catch (error) {
                console.error('Failed to delete the book:', error);
            }
        }
    };

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Library Books</h1>
            <button className="add-book-button" onClick={() => navigate('/add-book')}>
                Add New Book
            </button>
            <table className="books-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>
                                <button className="edit-button" onClick={() => navigate(`/edit-book/${book.id}`)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="delete-button" onClick={() => handleDelete(book.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
