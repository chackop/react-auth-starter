import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { forgotPasswordRouteAWS } from "./forgotPasswordRouteAWS";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";
import { logInRoute } from "./logInRoute";
import { logInRouteAWS } from "./logInRouteAWS";
import { resetPasswordRouteAWS } from "./resetPasswordRouteAWS";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { signUpRoute } from "./signUpRoute";
import { signUpRouteAWS } from "./signUpRouteAWS";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { verifyEmailRouteAWS } from "./verifyEmailRouteAWS";

export const routes = [
  forgotPasswordRouteAWS,
  forgotPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
  logInRoute,
  logInRouteAWS,
  resetPasswordRoute,
  resetPasswordRouteAWS,
  signUpRoute,
  signUpRouteAWS,
  testRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
  verifyEmailRouteAWS,
];
