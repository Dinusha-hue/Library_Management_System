import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { Book } from '../models/Book';
import { addBook } from '../services/BookService';

const AddBookPage: React.FC = () => {
    const navigate = useNavigate();

    const handleAddBook = async (book: Book) => {
        try {
            await addBook(book);
            navigate('/'); 
        } catch (error) {
            console.error('Failed to add the book:', error);
        } 
    };

    return (
        <div
                style={{
                    margin: '20px',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
                    Add New Book
                </h1>
            <BookForm onSubmit={handleAddBook} />
        </div>
    );
};

export default AddBookPage;