<template>
  <div class="list">
    <node-list :node="treeData"></node-list>
  </div>
</template>

<script>
import NodeList from "./NodeList"

export default {
    props: {
        treeData: Object,
    },
    components: {
        NodeList
    }
}
</script>

<style>

</style>