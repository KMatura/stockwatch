<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <div class="content">
          <h1 class="title" v-text="modal.name"></h1>
        </div>
      </div>
    </div>
    <button
      @click.prevent="active = false"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const active = ref(false);
const modal = ref(false);

const show = () => {
  active.value = true;
};

created(() => {
  Event.$on('toggleModal', (row) => {
    this.modal = row;
    show();
  });
});
</script>
