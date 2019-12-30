<template>
    <div class="searchbar">
        <input type="text" placeholder="Søg her" class="sb-input">
    </div>
</template>

<style lang="scss" scoped>
    .searchbar {
        width: 100%;
        background: #fff;
        max-width: 640px;
        padding: 1rem;
        border-radius: 5px;
        position: relative;

        &::after {
            content: " ";
            display: inline-block;
            position: absolute;
            right: 25px;
            top: 0;
            bottom: 0;
            width: 70px;
            height: 100%;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            z-index: 1;
        }
    }
    .sb-input {
        width: 100%;
        padding: 1rem;
        border-radius: 5px;
        border: 0;
        font-size: 18pt;
        outline: none;
        background: transparent;
        z-index: 2;
    }
</style>

<script>
import autoComplete from "@tarekraafat/autocomplete.js";

export default {
    name: 'SearchBar',
    mounted() {
        document.querySelector(".sb-input").addEventListener("keypress", event => {
            const q = document.querySelector(".sb-input").value;

            if ( event.which == 13 ) {
                window.location.href = `https://www.google.dk/search?q=${q}`;
            }
        });
    }
}
</script>