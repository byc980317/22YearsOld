import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import { strings } from '../Constants';

const SignUpForm = () => {
    return (
    <Grid centered style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 350 }}>
        <Header as='h2' color='black' textAlign='center'>
            {strings.SIGNUP_PROMPT}
        </Header>
        <Form size='large'>
            <Segment stacked>
            <Form.Input
                label='Email'
                fluid icon='user'
                iconPosition='left'
                placeholder='E-mail Address'
            />
            <Form.Input
                label='Password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
            />
            <Form.Input
                label='Confirm password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
            />

            <Button color='green' fluid size='large'>
                Sign Up
            </Button>
            </Segment>
        </Form>
        <Message style={{ textAlign: 'center' }}>
            Already Signed Up? <a href='/signin'>Sign In</a>
        </Message>
        </Grid.Column>
    </Grid>
    );
}

export default SignUpForm