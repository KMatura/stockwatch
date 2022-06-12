<template>
  <tr>
    <td v-text="row.name"></td>
    <td><a @click.prevent="toggleModal(row)" href="#">Open Modal</a></td>
  </tr>
</template>
<script setup>
defineProps({
  row: Array,
});

const toggleModal = (row) =>{
    Event.$emit('toggleModal', row);
}

</script>
