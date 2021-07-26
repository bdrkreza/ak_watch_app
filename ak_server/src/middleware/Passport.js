const { ExtractJwt, Strategy } = require("passport-jwt");
const User = require("../models/user.schema");


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_ACCESS_SECRET
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      try {
        let user = await User.findById(payload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return done(null, false);
      }
    })
  );
};
