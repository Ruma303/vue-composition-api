<script setup>
import OldSetup from './components/OldSetup.vue';
import NewSetup from './components/NewSetup.vue';
</script>

<template>
    <div class="container max-w-96 flex flex-col mx-auto my-2 gap-8">
        <h1 class="text-6xl">Setup Composition Api</h1>

        <section>
            <h2 class="text-4xl">setup()</h2>
            <old-setup />
        </section>

        <section>
            <h2 class="text-4xl">&lt;script setup&gt;</h2>
            <new-setup />
        </section>
    </div>
</template>

<style scoped>

</style>
