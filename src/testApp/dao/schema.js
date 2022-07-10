import {schema} from 'normalizr'

const petName = new schema.Entity('petName',{},{})

export const petSchema = {
  pet_name: new schema.Array(petName)
}