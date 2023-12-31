<template>
    <section>
        <h1>{{ message }}</h1>
        <button @click="increment">Count is: {{ count }}</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            message: 'Option API',
            count: 0
        }
    },
    methods: {
        greet() {
            console.log(this.message)
        },
        increment() {
            this.count++
        }
    },
    mounted() {
        this.greet(),
        console.log(`The initial count is ${this.count}.`)
    }
}
</script>

<style scoped>
section {
    margin-bottom: 2em;
}
</style>















