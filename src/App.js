import React, { Component, Fragment } from 'react';
import { Header, NewsList, Form } from './components';

class App extends Component {
  state = { news: [] };

  componentDidMount() {
    this.getNews();
  }

  getNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=ff046894563742c3922c231081f8bdce`;

    const response = await fetch(url);
    const news = await response.json();
    this.setState({ news: news.articles });
  };

  render() {
    return (
      <Fragment>
        <Header title="API News" />
        <div className="container white news-container">
          <Form getNews={this.getNews} />
          <NewsList news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
