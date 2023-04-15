<script setup lang="ts">
import { RouterView, useRouter, type RouteRecordName } from 'vue-router'
const router = useRouter()

const onSelect = (name: RouteRecordName ) => {
  router.push({
    name: name
  })
}
</script>
<template>
  <Layout class="layout-base">
    <Sider hide-trigger>
      <Menu width="anto" theme="dark" @on-select="onSelect">
        <MenuItem name="home">
          <Icon type="ios-paper" />
          主页
        </MenuItem>

        <Submenu name="table">
          <template #title>
            <Icon type="ios-people" />
            表格
          </template>
          <MenuItem name="table_page">table_page</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header class="layout-header">Header</Header>
      <Content class="layout-content"><router-view /></Content>
      <Footer class="layout-footer">Footer</Footer>
    </Layout>
  </Layout>
</template>

<style scoped>
.layout-base {
  width: 100vw;
  height: 100vh;
}
.layout-header {
  color: white;
}
.layout-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-content {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
