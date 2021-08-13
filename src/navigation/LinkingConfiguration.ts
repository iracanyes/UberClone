/***
 * Linking configuration
 */

export default {
  prefixes: [
    "uberClone://",
    /*"https://uberClone.iracanyes.com",*/
  ],
  config: {
    initialRouteName: "login",
    screens: {
      Login: "login",
      SignUp: "sign_up",
      confirmSignUp: "confirm_signup",
      Root: {
        initialRouteName: "home",
        screens: {
          Main: {
            initialRouteName: "home",
            screens: {
              Home: "home",
              Search: "search",
            },
          },
          Messages: "messages",
          MakeMoney: "make_money",
          YourTrips: "your_trips",
          Help: "help",
          Wallet: "wallet",
          Settings: "settings",
        },
      },
      Rgpd: "rgpd",
      NotFound: "*",
    },
  },
};
