<template>
    <section>
        <h1>{{ message }}</h1>
        <button @click="increment">Count is: {{ count }}</button>
    </section>
</template>

    <script>
    import { ref } from 'vue';
    export default {
        setup() {
            // Definire eventuali proprietà reattive con ref()
            const message = ref('Composition Api con Setup()');
            const count = ref(0);

            // Definire eventuali funzioni
            function greet() {
                console.log(message.value);
            }

            function increment() {
                count.value++;
            }

            // Ritorniamo ciò che vogliamo esporre al template
            return {
                message,
                count,
                increment
            };
        }
    }
    </script>

<style scoped>
section {
    margin-bottom: 2em;
}
</style>