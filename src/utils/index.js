export default function(fn, delay = 2000) {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
