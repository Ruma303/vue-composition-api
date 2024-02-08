<script>
import { ref } from 'vue';
import ChildComp from './ChildComp.vue';
export default {
    setup () {
        const name = ref('Ruma');
        const age = ref(28);
        const randomNumber = ref(10);
        const payload = ref(null);

        const createRandomNumber = () => {
            randomNumber.value = Math.floor(Math.random() * 101);
        }

        const showPayload = (newPayload) => {
            payload.value = newPayload
        }

        const handleSecondEmit = () => {
            console.log('handleSecondEmit ricevuto')
        }

        return {
            name,
            age,
            randomNumber,
            createRandomNumber,
            payload,
            showPayload,
            handleSecondEmit
        }
    },
    components : {
        ChildComp
    }
}
</script>

<template>
    <p class="text-2xl">Ciao, sono {{ name }} e ho {{ age }} anni</p>
    <button @click="createRandomNumber" class="bg-stone-300 p-1 rounded hover:cursor hover:scale-105">Generate random number</button>
    <p>{{ randomNumber }}</p>
    <child-comp text="Valore Prop passata dal genitore" @emitPayload="showPayload" @secondEventEmitted="handleSecondEmit"/>
    <p>{{ payload }}</p>
</template>