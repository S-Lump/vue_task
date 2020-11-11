<template>
  <div id="app">
    <h1>Tree</h1>
    <tree :tree-data="tree"></tree>
    <hr>
    <h1>List</h1>
    <list :tree-data="tree"></list>
  </div>
</template>

<script>
import Tree from "./Tree"
import List from "./List"

export default {
  name: 'app',
  data: () => ({
    tree: {  
      label: 'root',
      selected: true,
      children: [
        {
        label: 'item1',
        selected: true,
        children: [
          {
            label: 'item1-1',
            selected: true,
            children: [
            ],
          },
          {
            label: 'item1-2',
            selected: true,
            children: [
            ],
          }
        ]
      },
      {
        label: 'item2',
        selected: false,
        children: [
        ],
      },
      {
        label: 'item3',
        selected: true,
        children: [
          {
            label: 'item3-1',
            selected: true,
            children: [
            ],
          }
        ],
      },
      ]
    },
  }),
  components: {
    Tree,
    List
  }
}
</script>

<style>

</style>
