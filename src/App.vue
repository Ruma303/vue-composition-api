<script setup>
import OldSetup from './components/OldSetup.vue';
import NewSetup from './components/NewSetup.vue';
</script>

<template>
    <div class="container max-w-[40em] flex flex-col mx-auto my-2 gap-8">
        <h1 class="text-6xl">Setup Composition Api</h1>

        <section class="flex flex-col gap-3 mb-5">
            <h2 class="text-4xl text-purple-500">setup()</h2>
            <old-setup />
        </section>

        <section class="flex flex-col gap-3">
            <h2 class="text-4xl text-amber-500">&lt;script setup&gt;</h2>
            <new-setup />
        </section>
    </div>
</template>