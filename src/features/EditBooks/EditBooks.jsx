import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { editBooks } from '../showBooksSlice';


const EditBooks = () => {
    const location = useLocation();

    console.log("location state : ", location.state);


    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        const book = { id, title, author }
        dispatch(editBooks(book))
        navigate("/show-books")
        e.preventDefault();
    }



    return (
        <div>
            <h1>Edit Books</h1>

            <div className="mt-5 d-flex align-items-center justify-content-center text-start">


                <form type="submit" onSubmit={handleOnSubmit}>

                    <label className="form-label" htmlFor="title">change book name :  </label>
                    <input className='form-control' type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <br />

                    <label className="form-label" htmlFor="author">change Author name:  </label>
                    <input className='form-control' type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />

                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default EditBooks