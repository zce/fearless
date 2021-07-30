<template>
  <div>
    <div class="heading">
      <h1 class="title">Table</h1>
    </div>
    <el-table :data="temp" @selection-change="handleSelectionChange" @filter-change="handleFilterChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="Date" width="160">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="160" :filters="[{ text: '汪磊', value: '汪磊' }, { text: '汪子文', value: '汪子文' }]"></el-table-column>
      <el-table-column prop="address" label="Address" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'components-table',
  data () {
    const temp = []
    for (let i = 0; i < 100; i++) {
      temp.push({
        date: new Date().toLocaleDateString(),
        name: i % 2 ? '汪磊' : '汪子文',
        address: `北京市海淀区中关村 ${i} 号`
      })
    }
    return {
      temp: temp,
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (value) {
      this.multipleSelection = value
    },
    handleFilterChange (value) {
      console.log(value)
    }
  }
}
</script>
