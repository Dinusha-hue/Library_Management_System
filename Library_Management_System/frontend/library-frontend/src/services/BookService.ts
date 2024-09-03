import { Book } from '../models/Book';
import axios from 'axios';

export const getBooks = async (): Promise<Book[]> => {
    const response = await axios.get<Book[]>('http://localhost:5000/api/books');
    console.log(response);
    return response.data;
};

export const addBook = async (book: Book): Promise<void> => {
    await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
    });
};

export const updateBook = async (book: Book): Promise<void> => {
    await fetch(`http://localhost:5000/api/books/${book.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
    });
};

export const deleteBook = async (bookId: number): Promise<void> => {
    await axios.delete(`http://localhost:5000/api/books/${bookId}`);
};