<template>
    <div>
        {{ buttonText }}
    </div>
</template>

<script>
export default {
    name: 'HeaderButton',
    props: {
        buttonText: {
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