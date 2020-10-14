export default function handler(lambda) {
  return async function (event, context) {
    let result;
    try {
      // Run the Lambda
      result = await lambda(event, context);
    } catch (e) {
      result = {
        statusCode: 500,
        body: {
          error: e.message
        }
      };
    }

    // Return HTTP response
    return {
      ...result,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  };
}