import React, { useState } from 'react'
import { Image, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Auth } from 'aws-amplify';


import stringConstants from '../Constants/Strings';

const SigninForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      alert('logged in');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Grid centered style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 350 }}>
        <div style={{ textAlign: 'center' }}>
          <Image
            href='/'
            src={require('../Images/login-logo.png')}
            size='tiny'
          />
        </div>
        <Header as='h2' color='black' textAlign='center'>
          {stringConstants.SIGNIN_PROMPT}
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              label='Email address'
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Input
              label='Password'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button disabled={!validateForm()} color='green' fluid size='large' type='submit'>
              Sign In
            </Button>
          </Segment>
        </Form>
        <Message style={{ textAlign: 'center' }}>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default SigninForm;