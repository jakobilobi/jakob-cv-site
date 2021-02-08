<template>
    <div>
        <router-link :to="{ name: targetView }">{{ text }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderButton',
    props: {
        targetView: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
div {
    color: white;
    background-color: lightsalmon;
}
</style>