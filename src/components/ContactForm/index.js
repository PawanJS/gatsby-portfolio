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

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Contact Form', ...this.state })
    })
      .then(() => {
        const feedback = document.querySelector('.feedback');

        feedback.classList.remove('text-red-600');
        feedback.classList.add('text-green-600');
        feedback.textContent = `Thank You ${this.state.name}, I'll get back to you soon!`;

        this.setState({ name: '', email: '', message: '' });
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
      <Styled.ContactForm>
        <Container section>
          <TitleSection title="Contact" subtitle="Drop me a message" center />
          <Form
            onSubmit={this.handleSubmit}
            name="Contact Form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
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
            <Styled.Label htmlFor="message">
              <Styled.Textarea
                name="message"
                id="message"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Message"
              />
            </Styled.Label>
            <Button primary type="submit">
              Send Message
            </Button>
          </Form>
        </Container>
      </Styled.ContactForm>
    );
  }
}

export default ContactForm;
