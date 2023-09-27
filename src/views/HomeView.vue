<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>
      <pre>{{ ironMan }}</pre>
      <pre>{{ hulk }}</pre>
    </h3>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';



export default {
  name: 'HomeView',

  setup() {
    const ironMan = ref({name: 'Tony Stark',age: 45,})
    const hulk = reactive({name: 'Bruce Banner',age: 45,})
    return {
      ironMan,
      hulk,
    }
  }
}
</script>
 