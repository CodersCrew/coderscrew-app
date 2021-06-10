import { passportAuth } from "blitz"
import db from "db"

export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new Auth0Strategy({}),
    },
  ],
})
