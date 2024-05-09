import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//define the initial state
const initialState = {
  loading: false,
  articles: [],
  error: "",
};

//define the method that returns the fetch function
export const getNews = createAsyncThunk("news/getNews", (category) => {
  let country = "us";
  let apiKey = `aa39d0f8b6fa431d8241c56b9304ddac`;
  let url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const results = data.articles;
      console.log(results);
      console.log(data);
      return data.articles;
    })
    .catch((err) => console.log(err));
});

//create a news slice
const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getNews.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.error = "";
    });

    builder.addCase(getNews.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer;
