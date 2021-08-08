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
      Root: {
        initialRouteName: "Home",
        screens: {
          Home: "home",
          Search: "search",
        },
      },
      Rgpd: "rgpd",
      NotFound: "*",
    },
  },
};
