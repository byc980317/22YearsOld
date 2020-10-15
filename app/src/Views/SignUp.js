import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
    const history = useHistory();

    const gotoLogin = () => {
        history.push("/login");
    };

    return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
            {/* <Image src='./Images/login-logo.png' />  */}
            Sign up your account
        </Header>
        <Form size='large'>
            <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail Address' />
            {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='Confirm E-mail Address' /> */}
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
            />
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
            />

            <Button color='teal' fluid size='large'>
                Sign Up
            </Button>
            </Segment>
        </Form>
        <Message>
            Already Sign Up? <a href='#' onClick={gotoLogin}>Sign In</a>
        </Message>
        </Grid.Column>
    </Grid>
    );
}

export default SignUpForm