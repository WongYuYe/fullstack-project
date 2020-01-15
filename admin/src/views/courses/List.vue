<template>
  <div>
    <avue-crud
      :option="option"
      :data="data"
      :page="page"
      @size-change="sizeChange"
      @current-change="currentChange"
      @on-load="loadDate"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class coursesList extends Vue {
  data = [];
  option = {
    column: [
      {
        label: "课程名称",
        prop: "name"
      },
      {
        label: "课程图片",
        prop: "cover"
      }
    ]
  };
  page: any = {
    pageSizes: [5, 10, 20],
    pageSize: 5,
    currentPage: 1,
    total: 0
  };
  query: any = {

  }
  async fetch() {
    const {
      data: { total, data, lastPage, page }
    } = await this.$http.get("courses", {
      params: {
        query: this.query
      }
    });
    this.data = data;
    this.page[`total`] = total;
    this.page[`currentPage`] = page;
  }

  async create(row, done) {
    const params = Object.assign({}, row);
    global.console.log(params);
    const res = await this.$http.post("courses", row);
    this.fetch();
    done();
  }

  async update(row, index, done, loading) {
    const params = Object.assign({}, row);
    delete params.$index;
    global.console.log(row);
    const res = await this.$http.put(`courses/${row._id}`, params);
    this.fetch();

    done();
    // this.data = res.data.data;
  }

  async remove(row, index) {
    const res = await this.$http.delete(`courses/${row._id}`);
    this.fetch();
    // this.data = res.data.data;
  }

  sizeChange(val) {
    this.page.currentPage = 1;
    this.page.pageSize = val;
    this.$message.success("行数" + val);
    this.fetch();
  }
  currentChange(val) {
    this.page.currentPage = val;
    this.$message.success("页码" + val);
  }

  loadDate({ pageSize, currentPage }) {
    this.page.currentPage = currentPage;
    this.page.pageSize = pageSize;
    this.query = {
      limit: pageSize,
      page: currentPage
    }
  }

  created() {
    this.fetch();
  }
}
</script>

<style></style>
