    <script>
    import { ref } from 'vue';
    export default {
        setup () {
            const name = ref('Ruma');
            const age = ref(28);
            let randomNumber = ref(10);
            const createRandomNumber = () => {
                randomNumber.value = Math.floor(Math.random() * 101);
            }

            return {
                name,
                age,
                randomNumber,
                createRandomNumber
            }
        }
    }
    </script>

    <template>
        <p class="text-2xl">Ciao, sono {{ name }} e ho {{ age }} anni</p>
        <button @click="createRandomNumber" class="bg-stone-300 p-1 rounded hover:cursor hover:scale-105">Random number</button>
        <p>{{ randomNumber }}</p>
    </template>

<style scoped>
</style>
