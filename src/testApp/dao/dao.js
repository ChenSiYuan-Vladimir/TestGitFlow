const axios = require('axios');
// const qs = require('qs')
const request = axios.create({
  headers:{
    'Content-Type': 'application/json'
  },
  baseURL:'http://127.0.0.1:4523/m1/724894-0-default/pet'
})




export async function getPet_1(){
  const a = {
    "name":"C",
    "lastName":"sy"
  }
  return new Promise(() => {
    console.log(a)
  })
}

export async function getPet(petId){
  return request({
    method:'get',
    url:`/${petId}`
  })
}

/**
 * 
 * @param {string} name  // e.g: hello kitty
 * @param {string} status // e.g: sold / selling
 */
export async function addPet(name,status){
  return request({
    method:'post',
    data:{
      name:name,
      status:status
    }
  })
}

/**
 * 
 * @returns data
 */
export async function modifyPet(){
  const data = '<body data here>'
  return request({
    method:'put',
    data
  })
}

/**
 * @returns boolean
 */

export async function deletePet(petId){
  return request({
    method:'delete',
    url:`/${petId}`,
  })
}