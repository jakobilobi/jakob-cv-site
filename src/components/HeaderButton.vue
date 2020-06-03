<template>
    <div>
        <router-link :to="{ name: targetView }">{{ text }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderButton',
    props: {
        text: {
            type: String,
            required: true
        },
        targetView: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
div {
    color: white;
    background-color: rgb(81, 160, 160);
}
</style>