<template>
    <div class="wrapper">
        <Clock></Clock>
        <SearchBar class="sb"></SearchBar>
        <div class="grid-3">
            <div class="column">
                <div class="card">
                    <h3>Kalender</h3>
                    <Calendar></Calendar>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <h3>Tophistorie</h3>
                    <News></News>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <h3>Vejrudsigt</h3>
                    <Weather></Weather>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import url('https://use.typekit.net/mnd2kfz.css');

    * {
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    
    body {
        padding-left: 15px;
        padding-right: 15px;
        background: #000;
        background-image:
            linear-gradient(
                rgba(0,0,0,.8),
                rgba(0,0,0,.6)
            ),
            url('https://source.unsplash.com/random/1920x1080');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        color: #fff;

        font-family: 'proxima-nova', 'Proxima Nova', sans-serif;
        font-weight: 400;
        font-style: normal;

        overflow: hidden;

        display: flex;
        align-items: center;
    }
</style>

<style lang="scss" scoped>
    .wrapper {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
    }

    .sb {
        margin: 0 auto;
    }

    .grid-3 {
        margin-top: 100px;

        display: grid;
        grid-template: "column column column";
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        grid-template-rows: auto;

        .card {
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 5px;
            padding: .5rem 2rem;
            padding-bottom: 2rem;
            color: #000;
            box-shadow: 0 5px 7px rgba(0, 0, 0, 0.41);
        }
    }
</style>

<script>
import Clock from './Clock'
import SearchBar from './SearchBar'
import Calendar from './Calendar'
import News from './News'
import Weather from './Weather'

export default {
    name: 'Index',
    components: {
        Clock,
        SearchBar,
        Calendar,
        News,
        Weather
    }
}
</script>