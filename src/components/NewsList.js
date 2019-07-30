import React from 'react';
import New from './New';

const NewsList = ({ news }) => (
  <div className="row">
    {news.map((article, index) => (
      <New key={index} article={article} />
    ))}
  </div>
);

export default NewsList;
