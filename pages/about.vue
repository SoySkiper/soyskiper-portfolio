<template>
    <div>
        <NuxtLink to="/">Home page</NuxtLink>
        <h1>About page</h1>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'orange',
    layoutTransition: {
        name: 'slide-in'
    }
})
</script>