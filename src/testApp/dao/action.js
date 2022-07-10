import { createActions } from 'redux-actions'
import { petDao } from './index'
const {
  syncPets,
  // deletePet
} = createActions({
  // 需要留意这里的代码对应。
  SYNC_PETS: (res)=> {
    // 这里需要接入 redux-thunk redux-saga 适配。目前只能传值

    return res ? res : 0;//需要确定值，特别是对于undefined的处理。
    // return getPet().then((data) => {
    //   return normalize(data,petSchema)
    // })
  },
  // DELETE_PET:(res) =>{
  //   return res;
  // }
})

// syncPets 主要是用来更新当前代码的。对于请求获取到的store，react-redux会存储到自身的引用中。这里后面的syncPets可以理解以为一种后置
// 动作。即触发了该action之后，可以触发这个dispatch。
// 这里需要中间件配合。
const addPet = (data) => (dispatch)=> petDao.addPet(data).then(() => dispatch(syncPets()))

const deletePet = (data) => (dispatch) => petDao.deletePet(data).then(() => {
  // dispatch(syncPets())
  // dispatch(deletePets())
})

const modifyPet = (data) => (dispatch) => petDao.modifyPet(data).then(() => dispatch(syncPets()))


export {
  syncPets,
  addPet,
  deletePet,
  modifyPet
};
