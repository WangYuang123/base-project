<template>
  <div>
    <h3>练习 Promise</h3>
  </div>
</template>

<script>
import myPromise from './Promise'
export default {
  name: 'promise',
  data() {
    return {
      bool: true
    }
  },
  mounted() {
    // console.log(Promise)
    let p = new myPromise((resolve, reject) => {
      setTimeout(() => {
        if (this.bool) {
          resolve('success')
        } else {
          reject('error')
        }
      }, 2000)
      // throw new Error('错误')
    })

    p.then(
      res => {
        resolve(res)
      },
      res => {
        console.log(`res：${res}`)
      }
    ).then(res => {
      console.log(res)
    })
    // let promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (false) {
    //       resolve()
    //     } else {
    //       reject()
    //     }
    //   }, 1000)
    // })
    // let promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (false) {
    //       resolve()
    //     } else {
    //       reject()
    //     }
    //   }, 6000)
    // })
    // let promise3 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (true) {
    //       resolve()
    //     } else {
    //       reject()
    //     }
    //   }, 1000)
    // })
    // let p = Promise.race([promise1, promise2, promise2])
    // p.then(
    //   () => {
    //     console.log('all success')
    //   },
    //   () => {
    //     console.log('only error')
    //   }
    // )
    // let p = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const num = Math.random()
    //     if (num > 0.5) {
    //       resolve(num + '大于0.5')
    //     } else {
    //       reject(num + '小于0.5')
    //     }
    //   }, 2000)
    // })
    // p.then(
    //   res => {
    //     // console.log(res)
    //     return res
    //   },
    //   res => {
    //     // console.log(res)
    //     return res
    //   }
    // ).then(
    //   res => {
    //     console.log(res, '1111')
    //   },
    //   res => {
    //     console.log(res, '2222')
    //   }
    // )
  },
  methods: {}
}
</script>

<style></style>
