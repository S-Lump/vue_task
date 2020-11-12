<template>
  <li class="node-tree">
      <label class="label">
        {{ node.label }}<input type="checkbox" v-model="node.selected" @click="uncheckChildren(node)">
      </label>
        
      <!-- Рекурсивно передаем ноду, если имеет дочерние элементы -->
      <ul v-if="node.children && node.children.length">
        <node :key="child" v-for="child in node.children" :node="child"></node>
      </ul>
  </li>
</template>

<script>
export default {
    name: "node",
    props: {
        node: Object
    },
    methods: {
        // Рекурсивно производим unchecked всех дочерних элементов
        // при unchecked родителя
        uncheckChildren: function(node) {
            node.selected = false

            if (node.children && node.children.length) {
                for (let child in node.children) {
                    node.children[child].selected = false
                    this.uncheckChildren(node.children[child])
                }
            }
        },
    }
}
</script>

<style>

</style>