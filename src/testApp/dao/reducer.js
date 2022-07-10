import { handleActions } from "redux-actions";
import {syncPets} from "./action";



export const PetReducer = handleActions({
  // 这里的syncPets会连接相对应的SYNC_PETS的返回值，
  [syncPets]: (state, action) => {
    console.log(action.payload)
    //返回值有payload 与 type
    return action.payload;
  },
},{})