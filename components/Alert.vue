<template>
    <section class="container mx-auto py-3">
        <div class="py-5 bg-rose-200 text-center rounded">
            Lightning spotted. Lake closed until 2:00pm
        </div>
    </section>
</template>

<script setup>
defineProps({
    alertType: { type: String }
})
</script>