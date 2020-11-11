<template>
  <p>
    <label class="label">
    {{ node.label }}
    <button @click="deleteNode(node)">X</button>
    </label>
    <span v-if="node.children && node.children.length">
      <node 
        v-for="child in node.children"
        :node="child" 
        v-if="child.selected"
      ></node>
    </span>
  </p>
</template>

<script>
export default {
    name: "node",
    data() {
        return {
            isChecked: false,
        }
    },
    props: {
        node: Object
    },
    methods: {
        deleteNode: function(vert) {
            vert.selected = false
        }
    }
}
</script>

<style>

</style>