export function checkJurisdiction(key) {
  const jurisdictionList = ['1', '2', '3', '4']
  const index = jurisdictionList.indexOf(key)
  if(index > -1) {
    return true
  } else {
    return false
  }
}