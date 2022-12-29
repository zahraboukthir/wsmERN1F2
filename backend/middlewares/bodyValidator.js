const { body, validationResult } = require("express-validator");
const registerRules = () => [
  body("fullName", "fullname is required").notEmpty(),
  body("email", "Email not valid").isEmail(),
  body("password", "not valid password").isLength({ min: 6, max: 20 }),
];

const loginRules = () => [
  body("email", "Email not valid").isEmail(),
  body("password", "not valid password").isLength({ min: 6, max: 20 }),
];
// const validator=(req,res,next)=>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     else next()
// }
const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(customError(errors.array()));
  } else next();
};

const customError = (errorsArray) =>
  errorsArray.map((err) => ({ msg: err.msg }));
module.exports = { loginRules, registerRules, validator };
