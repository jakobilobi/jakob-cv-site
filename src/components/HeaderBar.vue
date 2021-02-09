<template>
    <nav>
        <div id="headerbar">
            <router-link id="navTitle" to="/">{{ navTitle }}</router-link>
            <header-button class="hdr-btn" v-for="btn in buttons" :key="btn.id" :text="btn.text" :targetView="btn.targetView" />
        </div>
    </nav>
</template>

<script>
import HeaderButton from './HeaderButton.vue'

export default {
    name: 'HeaderBar',
    components: {
        HeaderButton
    },
    props: {
        navTitle: String
    },
    data() {
        return {
            buttons: [
                {
                    id: 0,
                    text: 'Start',
                    targetView: 'ViewStart'
                },
                {
                    id: 1,
                    text: 'Apps',
                    targetView: 'ViewApps'
                },
                {
                    id: 2,
                    text: 'About me',
                    targetView: 'ViewMe'
                }
            ]
        }
    }
}
</script>

<style scoped>
#headerbar {
    width: auto;
    padding: 10px;
    border: 3px dashed black;
    background-color: lightblue;
}

#navTitle {
    width: 20%;
    vertical-align: top;
    display: inline-block;
    color: #42b983;
}

.hdr-btn {
    width: 25%;
    vertical-align: top;
    display: inline-block;
    *display: inline;

}
</style>