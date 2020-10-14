import handler from "../libs/handler";

export const main = handler(async (event, context) => {

  return {
    statusCode: 200,
    body: {
      company: "Google",
      title: "Senior Principal Scientist",
      level: "L8"
    }
  };

});