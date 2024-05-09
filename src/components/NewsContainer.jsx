import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../news_container/news/newsSlice";
import NewsCard from "./NewsCard";

const NewsContainer = ({ category }) => {
  const dispatch = useDispatch();
  const { loading, articles, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews(category));
  }, [category, dispatch]);

  return (
    <>
      <div className="news-container p-3">
        <div className="articles">
          {loading && <p>Loading....</p>}
          {!loading && error ? <h2>{error}</h2> : null}
          <div className="row">
            {!loading &&
              articles &&
              articles.map((article, index) => {
                return (
                  <NewsCard
                    key={index}
                    urlToImage={article.urlToImage}
                    title={article.title}
                    description={article.description}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContainer;
