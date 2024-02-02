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

        <div>
            <p>{{ state.count }}</p>
            <button @click="state.count++">Increment</button>
            <button @click="decrement">Decrement</button>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

// ref()
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

// reactive()
let state = reactive({count: 0});
const decrement = () => state.count--;

/* Non funzioneranno: */
// const primitiveDate = reactive({10});
/* const decrement = () => {
    state = state.count--
}; */


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