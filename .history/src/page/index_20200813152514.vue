<!--
 * @Author: your name
 * @Date: 2020-08-13 13:18:39
 * @LastEditTime: 2020-08-13 15:25:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learning-web\src\page\index.vue
-->
<template>
  <el-container
    class="containerMain"
    direction="vertical"
  >
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <!-- <el-menu :default-openeds="['1', '3']">
         <el-submenu index="1">
           <template slot="title"><i class="el-icon-message"></i>导航一</template>
           <el-menu-item-group>
             <template slot="title">分组一</template>
             <el-menu-item index="1-1">选项1</el-menu-item>
             <el-menu-item index="1-2">选项2</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="分组2">
             <el-menu-item index="1-3">选项3</el-menu-item>
           </el-menu-item-group>
           <el-submenu index="1-4">
             <template slot="title">选项4</template>
             <el-menu-item index="1-4-1">选项4-1</el-menu-item>
           </el-submenu>
         </el-submenu>
         <el-submenu index="2">
           <template slot="title"><i class="el-icon-menu"></i>导航二</template>
           <el-menu-item-group>
             <template slot="title">分组一</template>
             <el-menu-item index="2-1">选项1</el-menu-item>
             <el-menu-item index="2-2">选项2</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="分组2">
             <el-menu-item index="2-3">选项3</el-menu-item>
           </el-menu-item-group>
           <el-submenu index="2-4">
             <template slot="title">选项4</template>
             <el-menu-item index="2-4-1">选项4-1</el-menu-item>
           </el-submenu>
         </el-submenu>
         <el-submenu index="3">
           <template slot="title"><i class="el-icon-setting"></i>导航三</template>
           <el-menu-item-group>
             <template slot="title">分组一</template>
             <el-menu-item index="3-1">选项1</el-menu-item>
             <el-menu-item index="3-2">选项2</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="分组2">
             <el-menu-item index="3-3">选项3</el-menu-item>
           </el-menu-item-group>
           <el-submenu index="3-4">
             <template slot="title">选项4</template>
             <el-menu-item index="3-4-1">选项4-1</el-menu-item>
           </el-submenu>
         </el-submenu>
       </el-menu> -->
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.containerMain {
  height: 100vh;
}
</style>
