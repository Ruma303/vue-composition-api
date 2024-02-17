<script setup>
import { ref } from 'vue';
import { useCounter } from '@/composables/useCounter';
const { counterData, counterDoubled, increaseCounter, decreaseCounter } = useCounter();
const componentTitle = ref('Cakes counter');
</script>

<template>
    <h2 class="text-2xl">{{ componentTitle }}</h2>
    <section class="flex items-center gap-2">
        <button @click="decreaseCounter" class="bg-sky-400 py-1 px-2 rounded-lg disabled:bg-gray-300"
            :disabled="counterData.count <= 0">-</button>
        <button @click="increaseCounter" class="bg-sky-400 py-1 px-2 rounded-lg">+</button>
    </section>
    <section class="flex flex-col items-center gap-2">
        <p>Counter is: <b>{{ counterData.count }}</b></p>
        <p>Counter doubled: <b>{{ counterDoubled }}</b></p>
    </section>
</template>
