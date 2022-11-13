import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from '../showBooksSlice';
import { v4 as uuidv4 } from 'uuid';


const AddBooks = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    // const numberOfBooks = useSelector(state => state.booksReducer.books.length)

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const data = { id: uuidv4(), title, author }
        dispatch(addBooks(data))
        navigate("/show-books")
    }


    return (
        <div>
            <h1>Add Books </h1>

            <div className="mt-5 d-flex align-items-center justify-content-center text-start">
                <form onSubmit={handleOnSubmit} type="submit">
                    <label className="form-label" htmlFor="title">Enter book name :  </label>
                    <input className='form-control' type="text" name="title" id="title" onChange={handleTitle} />

                    <br />

                    <label className="form-label" htmlFor="author">Enter Author name:  </label>
                    <input className='form-control' type="text" name="author" id="author" onChange={handleAuthor} />

                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;