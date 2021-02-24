import React from 'react';
import ContactDetails from './ContactDetails';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      contact: null,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    const id = this.props.match.params.id;

    fetch(`${host}/contacts/${id}.json`)
      .then(result => result.json())
      .then(contact => {
        this.setState({contact: contact, loading: false});
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    if (this.state.loading) {
      return 'Loading';
    }
    if (this.state.error) {
      return 'Sorry, but that contact is currently unavailable.';
    }

    return <ContactDetails contact={this.state.contact} />;
  }
}

export default Contact;
