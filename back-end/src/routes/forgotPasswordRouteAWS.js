import { CognitoUser } from "amazon-cognito-identity-js";
import { awsUserPool } from "../util/awsUserPool";

export const forgotPasswordRouteAWS = {
  path: "/api/forgot-password-aws/:email",
  method: "put",
  handler: async (req, res) => {
    const { email } = req.params;

    new CognitoUser({ Username: email, Pool: awsUserPool }).forgotPassword({
      onSuccess: () => {
        res.sendStatus(200);
      },
      onFailure: () => {
        res.sendStatus(500);
      },
    });
  },
};
