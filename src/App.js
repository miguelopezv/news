import React, { Component, Fragment } from 'react';
import { Header, NewsList } from './components';

class App extends Component {
  state = { news: [] };

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=ff046894563742c3922c231081f8bdce`;

    const response = await fetch(url);
    const news = await response.json();
    this.setState({ news: news.articles });
  };

  render() {
    return (
      <Fragment>
        <Header title="API News" />
        <div className="container white news-container">
          <NewsList news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
