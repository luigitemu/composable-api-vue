<template >
    <h1> Thanos todo list</h1>
    <h4>Pendientes: {{ pending.length }}</h4>

    <button :class="{ 'active': currentTab === tabs.all }" @click="currentTab = tabs.all">
        Todos
    </button>
    <button :class="{ 'active': currentTab === tabs.pending }" @click="currentTab = tabs.pending">
        Pendientes
    </button>
    <button :class="{ 'active': currentTab === tabs.completed }" @click="currentTab = tabs.completed">
        Completados
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ completed: todo.done }"
                @dblclick="toggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="openModal"> Crear todo</button>
    <modal v-if="isOpen" @on:close="closeModal">
        <template v-slot:header>
            <h1>Crear todo</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="onSubmit">
                <input type="text" placeholder="Escribe tu todo" required v-model="todoText" />
                <input type="submit" value="Crear" />

            </form>
        </template>
        <template v-slot:footer>
            <button @click="closeModal"> Cerrar Modal</button>
        </template>
    </modal>
</template>
<script>
import { useTodos } from '@/composables/useTodos';
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'

export default {
    components: { Modal },
    setup() {



        const { currentTab, getTodosByTab, pending, tabs, toggleTodo, createTodo } = useTodos();
        const isOpen = ref(false);
        const todoText = ref('');

        return {
            currentTab,
            getTodosByTab,
            pending,
            tabs,
            toggleTodo,
            isOpen,
            todoText,
            onSubmit: () => {
                createTodo(todoText.value);
                todoText.value = '';
                isOpen.value = false;
            },
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        };


    }

}
</script>
<style scoped >
div {
    display: flex;
    justify-content: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
    user-select: none;
}

.active {
    background-color: #2c3e50;
    color: #fff;
}

.completed {
    text-decoration: line-through;
}

button {
    margin: 5px 0px;
}
</style>