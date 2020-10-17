import { Auth } from 'aws-amplify';

export const isUserLoggedIn = async () => {

  try {
    await Auth.signOut();
    await Auth.currentAuthenticatedUser();
    console.log("?");
    return true;
  } catch {
    return false;
  }
};