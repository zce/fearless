<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Component</el-breadcrumb-item>
    </el-breadcrumb>
    <!--<div class="heading">
      <h1 class="title">组件</h1>
    </div>-->
    <br>
    <el-alert title="成功提示的文案" type="success"></el-alert>
    <br>
    <el-alert title="消息提示的文案" type="info"></el-alert>
    <br>
    <el-alert title="警告提示的文案" type="warning"></el-alert>
    <br>
    <el-alert title="错误提示的文案" type="error"></el-alert>
    <br>
    <el-alert title="不可关闭的 alert" type="success" :closable="false"></el-alert>
    <br>
    <el-alert title="自定义 close-text" type="info" close-text="知道了"></el-alert>
    <br>
    <el-alert title="设置了回调的 alert" type="warning" @close="hello"></el-alert>
    <br>
    <br>
    <el-row type="flex" justify="space-around">
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </el-row>
    <br>
    <br>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">卡片名称</span>
            <el-button style="float: right;" type="primary">操作按钮</el-button>
          </div>
          <div class="text item" v-for="o in 4" :key="o">{{ '列表内容 ' + o }}</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">卡片名称</span>
            <el-button style="float: right;" type="primary">操作按钮</el-button>
          </div>
          <div class="text item" v-for="o in 4" :key="o">{{ '列表内容 ' + o }}</div>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <br>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <br>
  </div>
</template>

<script>
export default {
  name: 'components',
  methods: {
    hello () {
      alert('你点击了关闭')
    }
  }
}
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: .75rem;
}

.el-carousel__item h3 {
  margin: 0;
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
