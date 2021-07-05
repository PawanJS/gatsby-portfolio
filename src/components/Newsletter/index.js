import React from 'react';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import FormInput from 'components/formInput';
import Form from 'components/form';

import * as Styled from './styles';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Newsletter', ...this.state })
    })
      .then(() => {
        const feedback = document.querySelector('.feedback');

        feedback.classList.remove('text-red-600');
        feedback.classList.add('text-green-600');
        feedback.textContent = `You're all set! Thank You ${this.state.name}`;

        this.setState({ name: '', email: '' });
      })
      .catch(() => {
        const feedback = document.querySelector('.feedback');

        feedback.classList.remove('text-green-600');
        feedback.classList.add('text-red-600');
        feedback.textContent = "Oops! May be you're offline";
      });

    e.preventDefault();
  };

  render() {
    return (
      <Styled.Newsletter>
        <Container section>
          <TitleSection title="Newsletter" subtitle="Subscribe to my mailing list" center />
          <Form
            onSubmit={this.handleSubmit}
            name="Newsletter"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Newsletter" />
            <FormInput
              id="name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="Email"
              required
            />
            <Button primary block type="submit">
              Subscribe
            </Button>
          </Form>
        </Container>
      </Styled.Newsletter>
    );
  }
}

export default Newsletter;
