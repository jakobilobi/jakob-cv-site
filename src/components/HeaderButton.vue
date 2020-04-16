<template>
    <div>
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'HeaderButton',
    props: {
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
    background-color: darkslategray;
}
</style>