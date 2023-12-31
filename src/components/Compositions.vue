<template>
    <section>
        <h1>{{ message }}</h1>
        <button @click="increment">Count is: {{ count }}</button>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);
const message = 'Composition Api';

function greet() {
    console.log(message)
}

function increment() {
    count.value++
}

onMounted(() => {
    greet(),
    console.log(`The initial count is ${count.value}.`)
})
</script>

<style scoped>
section {
    margin-bottom: 2em;
}
</style>













