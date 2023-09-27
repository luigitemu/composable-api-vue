import { ref } from "vue";

export const useCounter = (initialValue = 5) => {
  const counter = ref(initialValue); 
  return {
    counter,
    increment: () => counter.value++,
    decrement: () => counter.value--,
    reset: () => (counter.value = 0),
  };
};
