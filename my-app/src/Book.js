import React from 'react';
export const Book = ({ title = "No Title Provided", author = "No Author", pages = 0, freeBookMark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <h2> by: {author}</h2>
      <p>Pages:{pages}</p>
      <p>Free BookMarks Today :{freeBookMark ? 'yes!' : 'no!'}</p>
    </section>
  )
}