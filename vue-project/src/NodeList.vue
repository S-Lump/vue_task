<template>
  <p>
    <!-- Отображаем ноду, если checked -->
    <label class="label" v-if="node.selected">
    <span>{{ node.label }}</span>
    <button @click="deleteNode(node)">X</button>
    </label>

    <!-- Рекурсивно передаем ноду, если имеет дочерние элементы -->
    <span v-if="node.children && node.children.length">
      <div :key="child" v-for="child in node.children">
        <node v-if="child.selected" :node="child"></node>
      </div>
    </span>
  </p>
</template>

<script>
export default {
    name: "node",
    data() {
        return {
            
        }
    },
    props: {
        node: Object
    },
    methods: {
        deleteNode: function(node) {
            // Рекурсивно производим unchecked всех дочерних элементов
            // при unchecked родителя
            node.selected = false

            if (node.children && node.children.length) {
                for (let child in node.children) {
                    node.children[child].selected = false
                    this.deleteNode(node.children[child])
                }
            }
        },
    }
}
</script>

<style>

</style>