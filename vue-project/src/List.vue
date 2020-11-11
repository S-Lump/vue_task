<template>
  <div>
      <ul>
          <li v-if="item in node"></li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'I am list',
        }
    },
    props: ['node'],
}
</script>

<style>

</style>