<script setup>
import { reactive, watch } from 'vue';

const counterData = reactive({
    count: 0,
    title: 'My Counter'
});

const increment = () => {
    counterData.count++
}

watch(() => counterData.count, (newCount, oldCount) => {
    console.log('from ', oldCount, 'to ', newCount)
});

</script>

<template>
    <h2 class="text-xl mb-2">{{ counterData.title }}</h2>
    <button @click="increment" class=" py-1 px-2 bg-sky-400 rounded-lg text-white">
        Increment</button>
    <p>Count is: <b>{{ counterData.count }}</b></p>
</template>

