import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const NewsList = ({ news }) => (
  <div className="row">
    {news.map((article, index) => (
      <Article key={index} article={article} />
    ))}
  </div>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired
};

export default NewsList;
