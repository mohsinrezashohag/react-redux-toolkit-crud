import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBooks } from '../showBooksSlice';

const ShowBooks = () => {

    const books = useSelector(state => state.booksReducer.books)

    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
        dispatch(deleteBooks(id));

    }



    return (
        <div className="container">
            <h1> Show Books</h1>
            <div>
                <table className="table table-info text-left mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books && books.map(book => {
                            const { id, title, author } = book;
                            return <tr key={book.id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <Link state={{ id, title, author }} to="/edit-books">  <button className="text-success me-1 ">edit</button></Link>

                                    <button onClick={() => handleDeleteBook(id)} className="text-danger"> delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        </div >
    );
};

export default ShowBooks;