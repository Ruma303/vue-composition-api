<template>
    <section>
        <h1>Reactive Composition Api</h1>
        <input v-model="message" />
        <p>{{ message }}</p>

        <h2>Grocery List</h2>
        <form @submit.prevent="addItem">
            <label for="new-item">add new item</label>
            <input type="text" v-model.trim="newItem" id="new-item"
                placeholder="Inserisci nuovo item...">
        </form>
        <p>{{ charactersCount }} / 20</p>
        <p>Items counter: {{ itemsCount }}</p>
        <ul>
            <li v-for="({ id, label }, index) in items" :key="id">
                {{ index }} - {{ label }}</li>
        </ul>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

let message = ref('Variabile reattiva');
const items = ref([
    { id: 1, label: "coffee" },
    { id: 2, label: "sun glasses" },
    { id: 3, label: "black hat" }
]);

    const newItem = ref('');
    const addItem = () => {
        if (newItem.value.length <= 20) {
            items.value.push(
                { id: items.value.length + 1, label: newItem.value });
            newItem.value = '';
        }
    }

    // Computed properties
    const itemsCount = computed(() => {
        return items.value.length;
    });
    const charactersCount = computed(() => {
        return newItem.value.length;
    });

/* (function() {
    message = 'Nuovo valore'; // Cambia
})()

setTimeout(()=> // Non cambia
message = 'Valore cambiato', 3000); */

/* (function () {
    message.value = 'Nuovo valore';
})()

setTimeout(() => {
    message.value = 'Valore cambiato dopo 3 secondi';
}, 3000); */



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

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5em;
}
</style>