import DynamoDBStack from "./DynamoDBStack";
import CognitStack from "./CognitoStack";

export default function main(app) {
  new DynamoDBStack(app, "dynamodb");
  new CognitStack(app, "cognito")
}
