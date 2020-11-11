<template>
  <div id="app">
    <app-list :node="node"></app-list>
    <app-tree></app-tree>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      node: {  
        name: 'root',
        selected: true,
        childred: [
          {
          name: 'item1',
          selected: true,
          children: [
          ]
        },
        {
          name: 'item2',
          selected: false,
          children: [
          ]
        },
        ]
      }
    }
  }
}
</script>

<style>

</style>
