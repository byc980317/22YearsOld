export function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const response = {
    statusCode: 200,
    hearders: headers,
    body: {
      company: "Google",
      title: "Senior Principal Scientist",
      level: "L8"
    }
  };

  callback(null, response);
}