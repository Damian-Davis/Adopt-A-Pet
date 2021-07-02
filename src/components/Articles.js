import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";

// Import Link from React Router
import { Link, useLocation } from "react-router-dom";
 
export default function Articles () {
  const articles = useSelector(selectArticles)
  
  // grab the search value from useLocation()
  const { search } = useLocation();
  
  // get the queryParams from new URLSearchParams() 
  const queryParams = new URLSearchParams(search);
  
  const title = queryParams.get('title');
  
  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        { 
          filteredArticles.map(article => {
            return (
              <li>
                {/* Replace these a tags! */}
                <a href={`/articles/${article.slug}`}>
                  {article.title}
                </a>
              </li>
            )
          })
        }
      </ul>
      <Search />
    </main>
  )
}
