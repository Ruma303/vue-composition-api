<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from "vue";

onBeforeMount(() => {
    console.log('onBeforeMount');
});
onMounted(() => {
    console.log('onMounted');
});
onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
});
onUnmounted(() => {
    console.log('onUnmounted');
});
</script>

<template>
    <h1 class="text-2xl">Componente Home page</h1>
    <p class="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo! Ex voluptatem iusto in, perspiciatis laboriosam doloribus unde fuga voluptatum harum, dicta nemo esse tempore, quos quo soluta quaerat explicabo? Distinctio impedit voluptate voluptatem. Cum reiciendis odio rem perspiciatis aperiam. Velit voluptatem a magnam! Ducimus adipisci nam sint totam, itaque esse similique suscipit, dolorem deserunt sequi saepe consequatur voluptatum sapiente commodi qui minima doloremque laudantium inventore aut vel neque eligendi! Architecto, quidem pariatur voluptatem, ipsam fugiat nobis odio necessitatibus repudiandae hic consequuntur veniam sint? Quia fugiat ipsum inventore error tempore labore vel cum consequatur, exercitationem, porro repellat minus, voluptatibus ullam?
    </p>
</template>
