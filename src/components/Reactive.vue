<template>
    <section>
        <h1>Reactive Composition Api</h1>
        <input v-model="message" />
        <p>{{ message }}</p>
    </section>
</template>

<script setup>
import { ref } from 'vue';
let message = ref('Variabile reattiva');

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
}
</style>