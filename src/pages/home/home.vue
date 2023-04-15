<template>
  <Form ref="formInlineRef" :model="formInline" :rules="ruleInline">
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="Username">
        <template #prepend>
          <Icon type="ios-person-outline"></Icon>
        </template>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="Password">
        <template #prepend>
          <Icon type="ios-lock-outline"></Icon>
        </template>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
    </FormItem>
    <FormItem>
      {{ formInline.sex }}
    </FormItem>

    <FormItem>
      {{ formInline.user }}
    </FormItem>
  </Form>

  <button @click="increment">
    {{ state.count }}
  </button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formInline = ref({
  user: 'user',
  password: 'password',
  sex: 'sex'
})
const ruleInline = ref({
  user: [{ required: true, message: 'Please fill in the user name', trigger: 'blur' }],
  password: [
    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
    {
      type: 'string',
      min: 6,
      message: 'The password length cannot be less than 6 bits',
      trigger: 'blur'
    }
  ]
})
const formInlineRef = ref()

const handleSubmit = (name: any) => {
  formInline.value.sex = 'aaaa'
  formInlineRef.value.validate((valid: any) => {
    console.log('valid', valid)
  })
}

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>
