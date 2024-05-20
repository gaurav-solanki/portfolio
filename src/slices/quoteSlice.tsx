import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    quote: {
        content: '',
    },
    status: 'idle',
    error: null,
  };
  

export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandom",
  async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quote = action.payload;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message);        
      });
  },
});

export default quoteSlice.reducer;

