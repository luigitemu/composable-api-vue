import { computed, ref } from "vue";
import { useStore } from "vuex";

import { tabs } from "@/shared/constants";

export const useTodos = () => {
  const store = useStore();
  const currentTab = ref(tabs.all);

  return {
    currentTab,
    tabs,

    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    pending: computed(() => store.getters["pendingTodos"]),

    toggleTodo: (id) => store.commit("toggleTodo", id),
    createTodo: (text) => store.commit("createTodo", text),
  };
};
