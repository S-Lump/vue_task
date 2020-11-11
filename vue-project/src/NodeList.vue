<template>
  <p>
    <label class="label">
    {{ node.label }}
    <button @click="deleteNode(node)">X</button>
    </label>

    <span v-if="node.children && node.children.length">
      <div v-for="child in node.children">
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
        deleteNode: function(vert) {
            console.log(vert)
            vert.selected = false

            if (vert.children && vert.children.length) {
                for (let child in vert.children) {
                    vert.children[child].selected = false
                    this.deleteNode(vert.children[child])
                }
            }
        },
    }
}
</script>

<style>

</style>