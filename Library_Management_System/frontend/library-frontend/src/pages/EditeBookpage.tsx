import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { Book } from '../models/Book';
import { getBooks, updateBook } from '../services/BookService';
import '../styles/editebook.css';

const EditBookPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
            const books = await getBooks();
            const selectedBook = books.find((b) => b.id === parseInt(id ?? ''));
            setBook(selectedBook || null);
        };

        fetchBook();
    }, [id]);

    const handleUpdateBook = async (updatedBook: Book) => {
        await updateBook(updatedBook);
        navigate('/');
    };

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="editBookPage">
            <h1>Edit Book</h1>
            <BookForm initialBook={book} onSubmit={handleUpdateBook} className="bookForm" />
        </div>
    );
};

export default EditBookPage;
