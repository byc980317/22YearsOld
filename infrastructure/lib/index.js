import DynamoDBStack from "./DynamoDBStack";
import CognitoStack from "./CognitoStack";

export default function main(app) {
  new DynamoDBStack(app, "dynamodb");
  new CognitoStack(app, "cognito");
}
