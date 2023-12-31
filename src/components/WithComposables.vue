    <script setup>
    import { useCounter } from '@/composables/useCounter';
    const { count, increment } = useCounter();
    </script>

    <template>
        <section>
            <h2>With Composables</h2>
            <button @click="increment">Count is: {{ count }}</button>
        </section>
    </template>

    <style scoped>
    section {
        margin-bottom: 2em;
    }
    </style>

