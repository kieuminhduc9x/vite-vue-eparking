<template>
    <div class="d-flex justify-content-between" style="padding: 0 25px">
      <div class="d-flex justify-content-start">
        <MenuFoldOutlined v-if="collapsed" @click="changeCollapsed" :style="{'color': '#000000', 'fontSize': '20px!important', 'margin-top': '20px'}"/>
        <MenuUnfoldOutlined v-else @click="changeCollapsed" :style="{'color': '#000000', 'fontSize': '20px!important', 'margin-top': '20px'}"/>
          <span style="font-size: 18px ;font-weight: 500; margin-left: 25px">ATIS - BÃI ĐỖ XE EPARKING</span>
      </div>
      <div class="d-flex justify-content-end pt-3">
        <a-dropdown :trigger="'click'">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1">
                Thông tin chi tiết
              </a-menu-item>
              <a-menu-item key="2" @click="logout">
                Đăng xuất
              </a-menu-item>
            </a-menu>
          </template>
          <font-awesome-icon icon="fa-regular fa-user" size="lg" style="outline: none"/>
        </a-dropdown>
      </div>
    </div>
  <a-drawer
      v-model:visible="visibleMenu"
      title="Danh sách chức năng"
      placement="left"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import { MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import { defineComponent, ref } from 'vue';
import {createRouter as route} from "vue-router";
import router from "../router/index.js";
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  props: {
    collapsed: Boolean
  },
  data() {
    return {
      visibleMenu: false,
      collapsedTmp: false
    }
  },
  methods: {
  // showDrawerMenu  (){
  //     this.visibleMenu = true;
  //   },
     changeCollapsed(){
       this.collapsedTmp = !this.collapsed
      this.$emit('collapsedChanged',this.collapsedTmp)
    },
    logout () {
       localStorage.clear()
       router.push({path: '/login'})
    }
  },
});
</script>
<style>
.ant-layout-header {
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}
</style>
