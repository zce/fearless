<template>
  <section class="users">
    <header class="heading">
      <h1 class="title" v-if="!selections.length">{{ total }} 个用户</h1>
      <h1 class="title" v-else>{{ selections.length }} 个被选中</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-checkmark" @click.prevent="handleToggleSelection(true)"></a></li>
          <li><a href="#" class="icon-before icon-blocked" @click.prevent="handleToggleSelection(false)"></a></li>
          <li><a href="#" class="icon-before icon-bin" @click.prevent="handleDeleteSelection"></a></li>
        </ul>
      </transition>
      <form class="search icon-before icon-search" @submit.prevent="handleSearch">
        <input type="text" placeholder="Search" v-model="search">
      </form>
      <el-button type="primary" size="small" icon="el-icon-plus">Add user</el-button>
    </header>
    <el-table :data="users" v-loading="loading" element-loading-text="Loading..." @selection-change="handleSelectionChange" @filter-change="handleFilterChange" @sort-change="handleSortChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="username" label="Username" min-width="200" sortable="custom">
        <template #default="scope">
          <div class="user-info">
            <img :src="scope.row.meta.avatar" alt="scope.row.name">
            <div class="names">
              <router-link to="/">{{ scope.row.username }}</router-link>
              <span>{{ scope.row.name }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" width="120" align="center" :filters="filters.status" column-key="status">
        <template #default="scope">
          <i class="status status-primary" title="Activated" v-if="scope.row.status === 'activated'" @click="handleToggleStatus(scope.row)"></i>
          <i class="status status-warning" title="Email Unactivated" v-else-if="scope.row.status === 'email-unactivated'"></i>
          <i class="status status-warning" title="Phone Unactivated" v-else-if="scope.row.status === 'phone-unactivated'"></i>
          <i class="status status-danger" title="Forbidden" v-else-if="scope.row.status === 'forbidden'" @click="handleToggleStatus(scope.row)"></i>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="Email" width="240" sortable="custom"></el-table-column>
      <el-table-column prop="phone" label="Mobile" width="160" sortable="custom"></el-table-column>
      <el-table-column prop="roles" label="Role" width="320" :filters="filters.roles" column-key="roles">
        <template #default="scope">
          <el-tag type="success" v-for="item in scope.row.roles" :key="item">{{ item }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :total="total" :page-size="size" :current-page="page" :page-sizes="[20, 30, 50]" layout="total, sizes, prev, pager, next" @size-change="handlePageSizeChange" @current-change="handleCurrentPageChange"></el-pagination>
  </section>
</template>

<script>
export default {
  name: 'users',
  data () {
    // column filters
    const filters = {
      status: [
        { text: '已激活', value: 'activated' },
        { text: '邮箱未激活', value: 'email-unactivated' },
        { text: '手机未激活', value: 'phone-unactivated' },
        { text: '已禁用', value: 'forbidden' }
      ],
      roles: [
        { text: '管理员', value: 'administrator' },
        { text: '作者', value: 'author' },
        { text: '编辑', value: 'editor' },
        { text: '协同者', value: 'contributor' },
        { text: '订阅者', value: 'subscriber' }
      ]
    }
    return {
      users: [],
      selections: [],
      total: 0,
      size: 20,
      page: 1,
      search: '',
      sort: '',
      order: '',
      filter: {},
      filters: filters,
      loading: false
    }
  },
  created () {
    // initial data
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      // toggle loading
      this.loading = true
      // paginate
      const params = { _page: this.page, _limit: this.size }
      // sort
      if (this.sort) params._sort = this.sort
      if (this.order) params._order = this.order
      // search
      if (this.search) params.q = this.search
      // filter
      Object.assign(params, this.filter)
      // request
      return this.$services.user.get({ params })
        .then(res => {
          // response
          this.users = res.data
          this.total = res.headers['x-total-count'] - 0
          // toggle loading
          this.loading = false
        })
        .catch(err => {
          // handle error
          console.error(err)
          this.loading = false
        })
    },

    handleCurrentPageChange (page) {
      this.page = page
      this.loadUsers()
    },

    handlePageSizeChange (size) {
      this.size = size
      this.loadUsers()
    },

    handleSortChange (e) {
      this.sort = e.prop
      if (e.order) this.order = e.order === 'ascending' ? 'ASC' : 'DESC'
      this.loadUsers()
    },

    handleFilterChange (filter) {
      Object.assign(this.filter, filter)
      this.loadUsers()
    },

    handleSearch () {
      this.loadUsers()
    },

    handleToggleStatus (item) {
      const targetStatus = item.status === 'forbidden' ? 'activated' : 'forbidden'
      this.$services.user
        .patch(item.id, { status: targetStatus })
        .then(res => Object.assign(item, res.data))
    },

    handleDeleteSelection () {
      this.$confirm('此操作将永久删除选中用户, 是否继续?')
        .then(() => this.selections.map(item => this.$services.user.delete(item.id)))
        .then(() => this.loadUsers())
        .catch(e => console.error(e))
    },

    handleToggleSelection (enable) {
      const targetStatus = enable ? 'activated' : 'forbidden'
      this.selections.forEach(item => this.$services.user
        .patch(item.id, { status: targetStatus })
        .then(res => Object.assign(item, res.data)))
    },

    // TODO
    handleSelectionChange (value) {
      this.selections = value
    }
  }
}
</script>

<style lang="scss">
@import '../theme';

.el-pagination {
  margin: 1rem 0 2rem;
  text-align: right;
}

.el-tag {
  margin: 0 .0625rem;
}

.user-info {
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border: .0625rem solid #c0c0c0;
    border-radius: 50%;
    background: #cfd2d7;
  }

  .names {
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: .8125rem;
    line-height: 1.4;
  }
}
</style>
