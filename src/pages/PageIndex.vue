<template>
<h1>My App</h1>
<input v-model="text" />
<p>Hello {{ text }} World!</p>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'PageIndex',
  setup() {
    const text = ref('Mobile App');
    return { text };
  },
}
</script>
