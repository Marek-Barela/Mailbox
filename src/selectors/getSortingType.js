export const getSortingType = state => {
  return state.sorting.sortedBy
}

export const getSortingDirection = state => {
  return state.sorting.fromNewestToOldest
}