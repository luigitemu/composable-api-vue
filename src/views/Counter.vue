<template >
    <div>
        <h1>Counter view</h1>
        <h2>{{ counter }}</h2>

        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
        <button @click="counter += 5">Increment by 5</button>
    </div>
</template>
<script>
import { useCounter } from '@/composables/useCounter'


export default {
    name: 'Counter',

    setup() {
        const  {
            counter,
            increment,
            decrement,
            reset
        } = useCounter(6)

        return {
            counter,
            increment,
            decrement,
            reset
        }
    }
}

</script>