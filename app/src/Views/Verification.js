import React, {useState} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Auth } from "aws-amplify"
import { strings } from '../Constants';

const VerificationForm = () => {
    const [email, setEmail] = useState('');
    const [confirmCode, setConfirmCode] = useState('');

    function validateForm() {
        return email.length > 0 && confirmCode.length > 0;
    }

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(email, confirmCode);
        } catch (error) {
          alert("Error confirming sign up");
          console.log("error confirming sign up", error);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        confirmSignUp();
    }

    return (
        <Grid centered style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 350 }}>
            <Header as='h2' color='black' textAlign='center'>
                {strings.VERIFY_PROMPT}
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
                    label='Verification Code'
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Verification Code'
                    type='password'
                    value={confirmCode}
                    onChange={e => setConfirmCode(e.target.value)}
                />
    
                <Button disabled={!validateForm()}color='green' fluid size='large' type='submit'>
                    Submit
                </Button>
                </Segment>
            </Form>
            <Message style={{ textAlign: 'center' }}>
                Already Verified? <a href='/signin'>Sign In</a>
            </Message>
            </Grid.Column>
        </Grid>
        );
}

export default VerificationForm;