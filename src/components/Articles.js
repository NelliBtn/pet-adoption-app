import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";

export default function Articles () {
  const articles = useSelector(selectArticles)
  
  const { search } = useLocation(); // get current URL's query string
  const queryParams = new URLSearchParams(search); // get queryParams value (that has methods to get the query param)
  const title = queryParams.get('title'); // use .get method and the name of the query parameter to extract the value
  
  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        { 
          filteredArticles.map(article => {
            return (
              <li key={article.slug}>
                <Link to={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Search />
    </main>
  )
}
