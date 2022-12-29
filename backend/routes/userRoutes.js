const express=require('express')
const { signUp, signIn, getAuthUser, getAllUsers } = require('../controllers/userControrollers')
const { registerRules, validator, loginRules } = require('../middlewares/bodyValidator')
const isAdmin = require('../middlewares/isAdmin')
const isAuthPassport = require('../middlewares/isAuthPassport')
const router=express.Router()
/**
 * @params POST /user/signup
 * @discription Add a new user
 * @acces public
 * 
 */
router.post("/signup",registerRules(),validator,signUp)
/**
 * @params POST /user/signin
 * @discription login user
 * @acces public
 * 
 */
 router.post("/signin",loginRules(),validator,signIn)
 /**
 * @params GET /user/current
 * @discription current user
 * @acces private
 * 
 */
  router.get("/current",isAuthPassport(),getAuthUser)
   /**
 * @params GET /user/all
 * @discription all users
 * @acces private ,for admin
 * 
 */
    router.get("/all",isAuthPassport(),isAdmin,getAllUsers)
module.exports=router
