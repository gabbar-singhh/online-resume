import { WithApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default WithApiAuthRequired(function SecretRoute(req, res) {
  const session = getSession(req, res);
  const user = session.user;
});
