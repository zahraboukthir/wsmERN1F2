const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("../models/userModel");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
// const opts = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.SECRET,
//   };
passport.initialize();
passport.use(
  new JwtStrategy(
    opts,
    //     function (jwt_payload, done) {
    //     User.findOne({ _id: jwt_payload._id }, function (err, user) {
    //       if (err) {
    //         return done(err, false);
    //       }
    //       if (user) {
    //         return done(null, user);
    //       } else {
    //         return done(null, false);
    //         // or you could create a new account
    //       }
    //     });
    //   })
    async (decoded, done) => {
      try {
        const user = await User.findById(decoded._id).select("-password");
        if (!user) {
          done(null, false);
        }
        done(null, user); //req.user = user
      } catch (error) {
        console.log(error);
        done(error, false);
      }
    }
  )
);

module.exports = isAuthpassport = () =>
  passport.authenticate("jwt", { session: false });