export function debounce(fn, delay = 1000) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}
