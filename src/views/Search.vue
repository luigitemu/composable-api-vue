<template >
    <h1>Buscar Pokemon: {{ pokemonId }} </h1>
    <form @submit.prevent="onSubmit">
        <input type="number" name="number" id="pokemonNumber" placeholder="Numero del pokemon" ref="textRef"
            v-model="pokemonId">
    </form>
    <br>
    <span>
        Presione enter para buscar
    </span>
</template>
<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {

        const router = useRouter();
        const pokemonId = ref(1);
        const textRef = ref();
        onActivated(() => {
            textRef.value.select();
        })

        return {
            pokemonId,
            textRef,
            onSubmit: () => {
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }
    }

}
</script>
