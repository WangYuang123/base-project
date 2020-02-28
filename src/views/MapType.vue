<template>
  <div>
    <h3>Map类型</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: '',
      text2: ''
    }
  },
  created() {
    // const map = new Map([
    //   [
    //     1,
    //     () => {
    //       console.log('okkk')
    //     }
    //   ]
    // ])
    // map.get(1)()
    const obj = {
      1: () => {
        console.log('ojjjjj')
      }
    }
    obj[1]()
    // console.log(map.get(1))
    // const colorHexMap = new Map()
    // colorHexMap.set('white', '#fff')
    // colorHexMap.set('black', '#000')
    // console.log([...colorHexMap.keys()])
    // for (const key of colorHexMap.values()) {
    //   console.log(key)
    // }
  },
  methods: {
    fun1() {
      console.log(1111111)
    },
    getByKey(kindOfMap, key) {
      for (const [k, v] of kindOfMap) {
        if (key == k) {
          return v
        }
      }
    }
  }
}
</script>

<style></style>
