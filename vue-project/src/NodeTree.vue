<template>
  <li class="node-tree">
      <label class="label">
        {{ node.label }}<input type="checkbox" :checked="node.selected">
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
    }
}
</script>

<style>

</style>