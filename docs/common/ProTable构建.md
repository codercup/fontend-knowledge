# ProTable 构建

## 功能介绍

表格内容自适应屏幕宽高，溢出内容表格内部滚动（flex 布局）

表格搜索、重置、分页查询 Hooks 封装 （页面使用不会存在任何搜索、重置、分页查询逻辑）

表格数据操作 Hooks 封装 （单条数据删除、批量删除、重置密码、状态切换等操作）

表格数据多选 Hooks 封装 （支持现跨页勾选数据）

表格数据导入组件、导出 Hooks 封装

表格搜索区域使用 Grid 布局重构，支持自定义响应式配置

表格分页组件封装（Pagination）支持静态数据分页

表格数据刷新、列显隐、搜索区域显隐设置

表格配置 columns 支持动态更新（1.2.0 版本可用）

表格支持行拖拽排序、单选框设置（1.2.0 版本可用）

表格配置支持多级 prop（示例 ==> prop: user.detail.name）

单元格内容格式化、tag 标签显示（有字典 enum 会根据字典 enum 自动格式化）

支持多级表头、表头内容自定义渲染（支持作用域插槽、tsx 语法、h 函数）

支持单元格内容自定义渲染（支持作用域插槽、tsx 语法、h 函数）

配合 TreeFilter、SelectFilter 组件使用更佳（项目中有使用示例）

## 代码

GiTable:

```vue
<template>
  <a-table ref="tableRef" v-bind="{ ...attrs, columns: _columns }">
    <template v-for="key in Object.keys(slots)" :key="key" #[key]="scoped">
      <slot :key="key" :name="key" v-bind="scoped"></slot>
    </template>
  </a-table>
</template>

<script setup lang="ts">
defineOptions({ name: 'GiTable', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
const _columns = computed(() => {
  // 通过  attrs.columns 计算得来
}) // 计算排序后过滤后的值
const tableRef = ref<TableInstance | null>(null)
</script>
```
