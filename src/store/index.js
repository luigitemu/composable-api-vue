import { createStore } from "vuex";
import { tabs } from '@/shared/constants'

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Recolectar las piedras del infinito", done: false },
      { id: "2", text: "Piedra del alma", done: true },
      { id: "3", text: "Piedra del poder", done: true },
      { id: "4", text: "Piedra de la realidad", done: false },
      { id: "5", text: "Conseguir nuevos secuaces competentes ", done: false },
    ],
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todo) => !todo.done);
    },
    allTodos(state) {
      return state.todos;
    },
    completedTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
    getTodosByTab: (_, getters) => (tab) => {

      switch (tab) {
        case tabs.completed:
          return getters.completedTodos;
        case tabs.pending:
          return getters.pendingTodos;
        case tabs.all:
          return getters.allTodos;
        default:
          return getters.allTodos;
      }

    },

  },
  mutations: {
    toggleTodo( state, todoId ) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      state.todos[todoIndex].done = !state.todos[todoIndex].done;
    },
    createTodo ( state, text = '' ) {
      if (text.trim() === '') return;
      state.todos.push({
        id: self.crypto.randomUUID(),
        text,
        done: false
      })
    }
  },
  actions: {},
  modules: {},
});
