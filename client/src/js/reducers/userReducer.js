import { LOGIN_FAILED, LOGIN_Succsess, LOGOUT, REGISTER_FAILED, REGISTER_Succsess, USER_AUTH_FAILED, USER_AUTH_Succsess, USER_LOAD } from "../const/userconst"

const initialState = {
    loading:false,
    error:null,
    currectuser:{},
    isAuth:false
}

const userReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case USER_LOAD:
    return { ...state, loading:true }
  case REGISTER_Succsess:
    return{...state,currectuser:payload.user,loading:false}
  case REGISTER_FAILED:
    return{...state,error:payload,loading:false}
    case LOGIN_Succsess:
        localStorage.setItem("token",payload.token)
        return{...state,currectuser:payload.user,loading:false,isAuth:true}
      case LOGIN_FAILED:
        return{...state,error:payload,loading:false}
        case USER_AUTH_Succsess:
          return { ...state,currectuser:payload,loading:false,isAuth:true};
          case USER_AUTH_FAILED:
            return { ...state,error:payload,loading:false };
    case LOGOUT:
      return {loading:false,
        error:null,
        currectuser:null,isAuth:false}
  default:
    return state
  }
}
export default userReducer