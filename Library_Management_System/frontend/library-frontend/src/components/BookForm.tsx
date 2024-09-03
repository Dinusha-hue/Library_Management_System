import React, { useState } from 'react';
import { Book } from '../models/Book';
import '../styles/bookform.css';  

interface BookFormProps {
    initialBook?: Book;
    onSubmit: (book: Book) => void;
    className?: string; 
}

const BookForm: React.FC<BookFormProps> = ({ initialBook, onSubmit, className }) => {
    const [book, setBook] = useState<Book>(initialBook || { id: 0, title: '', author: '', description: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
        setErrors({ ...errors, [name]: '' }); 
    };

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!book.title.trim()) newErrors.title = 'Title is required';
        if (!book.author.trim()) newErrors.author = 'Author is required';
        if (!book.description.trim()) newErrors.description = 'Description is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(book);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`bookForm ${className}`}>
            <div>
                <label htmlFor="title">
                    Title <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                />
                {errors.title && <div className="error">{errors.title}</div>}
            </div>
            <div>
                <label htmlFor="author">
                    Author <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                />
                {errors.author && <div className="error">{errors.author}</div>}
            </div>
            <div>
                <label htmlFor="description">
                    Description <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={book.description}
                    onChange={handleChange}
                />
                {errors.description && <div className="error">{errors.description}</div>}
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default BookForm;
