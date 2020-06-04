import React from 'react';
import escapeRegExp from 'escape-string-regexp';
import Contacts from "./components/Contacts";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";

import './App.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: [],
      query: '',
      filter: '',
    };
  }

  componentDidMount(){
    const urlApi = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(urlApi)
    .then(response => {
      if (response.ok) {
        response.json()
        .then((contacts) => this.setState({ contacts }));
      }
    });
  }


  filterContacts = (showingContacts) => {
    const { query, filter } = this.state;
    const match = new RegExp(escapeRegExp(query), 'i');

    query &&
      (showingContacts = showingContacts.filter(({ name }) =>
        match.test(name)
      ));

    filter && (showingContacts = this.sortBy(showingContacts,filter));

    return showingContacts;
  }

  sortBy(showingContacts,filter){
    return showingContacts.sort((a,b)=> 
      a[filter] < b[filter] ? 1 * -1 : 1
    )
  }

  handleQueryInput = (query) => {
    this.setState({ query: query.trim() });
  }

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, query, filter } = this.state;
    let showingContacts = [...contacts];
    showingContacts =
      query || filter ? this.filterContacts(showingContacts) : showingContacts;
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          onQuery={this.handleQueryInput}
          onFilter={this.handleFilter}
          filter={filter}
        />
        <Contacts contacts={showingContacts} />        
      </React.Fragment>
    )
  }
}

export default App;
