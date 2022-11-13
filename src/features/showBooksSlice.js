import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


export const booksSlice = createSlice({
    name: 'showBooks',
    initialState: {
        books: [{ id: uuidv4(), title: "History of bangladesh", author: 'mohsin reza' },
        { id: uuidv4(), title: 'How to code', author: 'elon mask' }]
    },
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBooks: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        },
        editBooks: (state, action) => {
            const id = action.payload.id
            const isBooksExist = state.books.filter(book => book.id === id)
            if (isBooksExist) {
                isBooksExist[0].id = uuidv4()
                isBooksExist[0].title = action.payload.title
                isBooksExist[0].author = action.payload.author
            }
        }
    }
})

export const { showBooks, addBooks, deleteBooks, editBooks } = booksSlice.actions
export default booksSlice.reducer