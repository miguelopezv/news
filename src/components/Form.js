import React, { Component } from 'react';

class Form extends Component {
  state = {
    categories: [
      'General',
      'Business',
      'Entertainment',
      'Health',
      'Science',
      'Sports',
      'Technology'
    ],
    selected: 'general'
  };

  handleChange = e => {
    this.setState(
      {
        ...this.state,
        selected: e.target.value
      },
      () => {
        this.props.getNews(this.state.selected);
      }
    );
  };

  render() {
    return (
      <div className="search row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Filter by categories</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.handleChange}>
                {this.state.categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
