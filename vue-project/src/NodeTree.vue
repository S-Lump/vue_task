<template>
  <li class="node-tree">
      <label class="label">
        {{ node.label }}<input type="checkbox" v-model="node.selected" @click="uncheckedChildren(node)">
      </label>

      <ul v-if="node.children && node.children.length">
          <node v-for="child in node.children" :node="child"></node>
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
        uncheckedChildren: function(vert) {
            console.log(vert)
            vert.selected = false

            if (vert.children && vert.children.length) {
                for (let child in vert.children) {
                    vert.children[child].selected = false
                    this.uncheckedChildren(vert.children[child])
                }
            }
        },
    }
}
</script>

<style>

</style>