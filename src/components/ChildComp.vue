<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Contenuto del ChildComponent',
        }
    },
    emits: ['emitPayload', 'secondEventEmitted'],
    setup(props, { emit }) {
        const secondEvent = () => {
            emit('secondEventEmitted');
            console.log('emitted')
        }
        return {
            secondEvent
        }
    }
}
</script>
<!-- <script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Contenuto del ChildComponent',
    }
});
const secondEvent = () => {
    emit('secondEventEmitted');
    console.log('emitted')
};
// const emit = defineEmits(['emitPayload', 'secondEventEmitted']);
// console.log(props.text); // OK!
// console.log(text); // Impossibile accedere alla prop
</script> -->

<template>
    <p class="text-2xl italic">{{ text }}</p>
    <!-- <p class="text-2xl italic">{{ props.text }}</p> -->
    <button @click="$emit('emitPayload', 'payload acquisito dal ChildComp')" class="bg-sky-300 p-1 rounded hover:cursor hover:scale-105">Emetti evento</button>
    <button @click="secondEvent" class="bg-pink-300 p-1 rounded hover:cursor hover:scale-105">Emetti evento 2</button>
</template>