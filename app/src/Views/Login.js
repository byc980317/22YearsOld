import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import stringConstants from './Constants/Strings';

const LoginForm = () => (
  <Grid centered style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 350 }}>
      <Header as='h2' color='black' textAlign='center'>
        {stringConstants.LOGIN_PROMPT}
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input label='Email address' fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            label='Password'
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='green' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message style={{ textAlign: 'center' }}>
        New to us? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm