import React from 'react';
import { Book } from '../models/Book';

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => (
    <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.description}</p>
    </div>
);

export default BookCard;