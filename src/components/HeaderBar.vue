<template>
    <nav>
        <div id="headerbar">
            <div class="headerItem" id="navTitle">{{ navigationTitle }}</div>
            <!-- replace thse with link component -->
            <div class="headerItem" id="first">First link</div>
            <div class="headerItem" id="second">Second link</div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderBar',
    props: {
        navigationTitle: String
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

div.headerItem {
    width: 39%;
    vertical-align: top;
    display: inline-block;
    *display: inline;

}
</style>