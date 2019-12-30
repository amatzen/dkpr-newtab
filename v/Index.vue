<template>
    <div class="wrapper">
        <Clock></Clock>
        <SearchBar class="sb"></SearchBar>
    </div>
</template>

<style lang="scss">
    @import url('https://use.typekit.net/mnd2kfz.css');

    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }
    
    body {
        background: #000;
        color: #fff;

        font-family: 'proxima-nova', 'Proxima Nova', sans-serif;
        font-weight: 400;
        font-style: normal;
    }
</style>

<style lang="scss" scoped>
    .wrapper {
        max-width: 960px;
        width: 100%;
        margin: 50px auto;
    }

    .sb {
        margin: 0 auto;
    }
</style>

<script>
import Clock from './Clock.vue'
import SearchBar from './SearchBar.vue'

export default {
    name: 'Index',
    components: {
        Clock,
        SearchBar
    }
}
</script>