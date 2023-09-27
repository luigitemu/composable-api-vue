<template >
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal"> Abrir Modal</button>
    <modal title="hola mundo" v-if="isOpen" @on:close="closeModal">
        <template v-slot:footer>
            <button @click="closeModal"> Cerrar Modal</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:body>
            <p>Contenido del modal</p>
        </template>
        <template v-slot:exposed="{ newTitle }">
            {{ newTitle  }}
        </template>
    </modal>
</template>
<script>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'

export default {
    components: { Modal },
    setup() {
        const isOpen = ref(false);
        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,

        }
    },


}
</script>

<style scoped></style>