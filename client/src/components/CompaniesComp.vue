<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Modal</th>
      </tr>
    </thead>
    <company v-for="item in companies" :key="item.id" :row="item"></company>
  </table>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
    companies: Array,
})

</script>
