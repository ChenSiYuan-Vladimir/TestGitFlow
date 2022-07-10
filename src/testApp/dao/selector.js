import {createSelector} from 'reselect'

/**
 * 这里的selector写法主要是针对于class Component的。对于Function Component需要使用hooks。
 */
export const createEntitesSelector = (keys) => {
  const entitiesSelectors = keys.map((key) => (state) => state.entities(key))
  return createSelector(entitiesSelectors,(...entities) => {
    const result = {}
    keys.forEach((key,index) => {
      result[key] = entities[index]
    })
    return result
  })
}


export const petNameSelector = createEntitesSelector(['petName'])