function myPromise(executor) {
  let _this = this
  _this.status = 'pending'
  _this.value = undefined
  _this.reason = undefined
  _this.onResolvedCallbacks = [] // 存放 then 成功的回调
  _this.onRejectedCallbacks = [] // 存放 then 失败的回调
  function resolve(value) {
    if (_this.status === 'pending') {
      _this.status = 'fulfilled'
      _this.value = value
      _this.onResolvedCallbacks.forEach(fn => {
        fn()
      })
    }
  }
  function reject(reason) {
    if (_this.status === 'pending') {
      _this.status = 'rejected'
      _this.reason = reason
      _this.onRejectedCallbacks.forEach(fn => {
        fn()
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch {
    reject('错误')
  }
}
myPromise.prototype.then = function() {
  let _this = this
  let myPromise2 = null
  if (_this.status === 'fulfilled') {
    myPromise2 = new myPromise((resolve, reject) => {
      try {
        let x = resolve(_this.value)
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }
  if (_this.status === 'rejected') {
    myPromise2 = new myPromise((resolve, reject) => {
      try {
        let x = reject(_this.reason)
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }
  if (_this.status === 'pending') {
    myPromise2 = new myPromise((resolve, reject) => {
      // 每一次 then 时如果是等待状态，就把回调函数 push 到数组中，什么时候状态改变再执行
      _this.onResolvedCallbacks.push(() => {
        try {
          let x = reject(_this.reason)
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
      _this.onRejectedCallbacks.push(() => {
        try {
          let x = reject(_this.reason)
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  return myPromise2
}
export default myPromise
