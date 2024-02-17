<script setup>
import Counter from './components/Counter.vue';
import { useMouse } from './composables/useMouse.js';

const { x, y } = useMouse();

</script>

<template>
    <main class="min-w-[300px] max-w-[900px] min-h-[800px] shadow-lg shadow-gray-300 flex flex-col gap-2 items-center py-4 m-4 rounded-lg">
        <h1 class="text-4xl mb-4">Composables</h1>
        Coordinate mouse: X {{ x }}, Y : {{ y }}
        <counter class="" />
    </main>
</template>
