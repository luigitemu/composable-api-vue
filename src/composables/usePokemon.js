import axios from "axios";
import { ref } from "vue";

export const usePokemon = (pokemonId = 1) => {
  const pokemon = ref();
  const isLoading = ref(false);
  const errorMessage = ref();

  const loadPokemon = async () => {
    isLoading.value = true;
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      console.log(data);
      pokemon.value = data;
      errorMessage.value = null;
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };
  loadPokemon();

  return {
    errorMessage,
    isLoading,
    pokemon,
  };
};
