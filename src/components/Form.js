import React, { Component } from 'react';

class Form extends Component {
  state = {
    categories: [
      'Business',
      'Entertainment',
      'General',
      'Health',
      'Science',
      'Sports',
      'Technology'
    ]
  };
  render() {
    return (
      <div className="search row">
        <div className="col s12 m8 offset-2">
          <form>
            <h2>Filter by categories</h2>
            <div className="input-field col s12 m8">
              <select>
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
