import React, {useState} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Auth } from "aws-amplify"
import { strings } from '../Constants';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function passwordMatch() {
        let match = password === confirmPassword;
        return match;
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
          await Auth.signUp({
            username:email,
            password,
          })
          alert("Sign up successfully");
        } catch (error) {
          console.log("Error in sign up", error);
        }
    }

    return (
    <Grid centered style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 350 }}>
        <Header as='h2' color='black' textAlign='center'>
            {strings.SIGNUP_PROMPT}
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
            <Form.Input
                label='Email'
                fluid icon='user'
                iconPosition='left'
                placeholder='E-mail Address'
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
            <Form.Input
                label='Confirm password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />

            <Button disabled={!validateForm() || !passwordMatch()}color='green' fluid size='large' type='submit'>
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