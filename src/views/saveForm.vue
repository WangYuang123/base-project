<template>
  <div>
    <h2>保存表单</h2>
    <el-button @click="testdebounce(456)">按钮</el-button>
    <p>{{ cloneForm.name }}</p>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { debounce } from '@/utils/index.js'
export default {
  data() {
    return {
      form: {
        name: '2020界辣条大会',
        region: 'shanghai',
        delivery: false,
        type: ['线下主题活动', '单纯品牌曝光'],
        resource: '线下场地免费',
        desc: '2020界辣条大会2020界辣条大会2020界辣条大会'
      }
    }
  },
  computed: {
    cloneForm() {
      return this.deepClone(this.form)
    }
  },
  watch: {
    cloneForm: {
      handler: function(val, oldVal) {
        this.testdebounce(val)
      }
      // handler: function(val, oldVal) {
      //   console.log(val, oldVal)
      // },
      // deep: true
    }
  },
  mounted() {
    // this.deepClone('12313')
    // this.cloneForm = this.deepClone(this.form)
  },
  methods: {
    outCloneFrom() {
      console.log(this.cloneForm)
    },
    deepClone(target) {
      if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (const key in target) {
          cloneTarget[key] = this.deepClone(target[key])
        }
        return cloneTarget
      } else {
        return target
      }
    },

    testdebounce: debounce(val => {
      console.log(val[0])
    })
  }
}
</script>

<style></style>
