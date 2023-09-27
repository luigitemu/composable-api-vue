<template >
    <h1 v-if="!pokemon && !errorMessage">Buscando ...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <router-link :to="{ name: 'pokemon-search' }">Buscar otro pokemon</router-link>
    </template>
</template>
<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { usePokemon } from '@/composables/usePokemon';
export default {
    setup() {
        const route = useRoute();
        // const { id } = route.params;
        const { isLoading, errorMessage, pokemon } = usePokemon(route.params.id);
        onBeforeRouteLeave(() => window.confirm('¿Estas seguro de salir?'))

        return {
            errorMessage,
            isLoading,
            pokemon
        }
    }

}
</script>
<style scoped></style>