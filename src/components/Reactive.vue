<template>
    <section>
        <h1>Reactive Composition Api</h1>
        <input v-model="message" />
        <p>{{ message }}</p>

        <h2>List Rendering</h2>
        <ul>
            <li v-for="({ id, label }, index) in items" :key="id">
                {{ index }} - {{ label }}</li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue';
let message = ref('Variabile reattiva');
const items = ref([
    { id: 1, label: "coffee" },
    { id: 2, label: "sun glasses" },
    { id: 3, label: "black hat" }
]);

/* (function() {
    message = 'Nuovo valore'; // Cambia
})()

setTimeout(()=> // Non cambia
message = 'Valore cambiato', 3000); */

(function () {
    message.value = 'Nuovo valore';
})()

setTimeout(() => {
    message.value = 'Valore cambiato dopo 3 secondi';
}, 3000);

</script>

<style scoped>
section {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    width: 100%;
    margin: 0 auto;
}
</style>