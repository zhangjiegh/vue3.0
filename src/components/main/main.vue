<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <Layout class="layout-base">
    <Sider hide-trigger>
      <Menu width="anto" theme="dark">
        <MenuItem name="1">
          <Icon type="ios-paper" />
          主页
        </MenuItem>

        <Submenu name="2">
          <template #title>
            <Icon type="ios-people" />
            表格
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
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
