<template>
  <div>
    <avue-crud
      :option="option"
      :data="data"
      :page="page"
      @on-load="onLoad"
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
  page = 1;
  async fatch() {
    const res = await this.$http.get("courses");
    this.data = res.data.data;
  }

  async create(row, done) {
    const params = Object.assign({}, row);
    global.console.log(params);
    const res = await this.$http.post("courses", row);
    this.fatch()
    done()
    // this.data = res.data.data;
  }

  async update(row,index,done,loading) {
    const params = Object.assign({}, row);
    delete params.$index
    global.console.log(row)
    const res = await this.$http.put(`courses/${row._id}`, params);
    this.fatch()

    done()
    // this.data = res.data.data;
  }

  async remove(row,index) {
    const res = await this.$http.delete(`courses/${row._id}`);
    this.fatch()
    // this.data = res.data.data;
  }

  created() {
    this.fatch();
  }
}
</script>

<style></style>
