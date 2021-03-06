import { CfnOutput } from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as sst from "@serverless-stack/resources";

export default class DynamoDBStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    const openJobsTable = new dynamodb.Table(this, "OpenJobsTable", {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      sortKey: { name: "title", type: dynamodb.AttributeType.STRING },
      partitionKey: { name: "company", type: dynamodb.AttributeType.STRING }
    });

    const usersTable = new dynamodb.Table(this, "usersTable", {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING }
    });

    // Output values
    new CfnOutput(this, "UsersTableName", {
      value: usersTable.tableName,
      exportName: app.logicalPrefixedName("UsersTableName"),
    });
    new CfnOutput(this, "UsersTableArn", {
      value: usersTable.tableArn,
      exportName: app.logicalPrefixedName("UsersTableArn"),
    });
    new CfnOutput(this, "OpenJobsTableName", {
      value: openJobsTable.tableName,
      exportName: app.logicalPrefixedName("OpenJobsTableName"),
    });
    new CfnOutput(this, "OpenJobsTableArn", {
      value: openJobsTable.tableArn,
      exportName: app.logicalPrefixedName("OpenJobsTableArn"),
    });
  }
}