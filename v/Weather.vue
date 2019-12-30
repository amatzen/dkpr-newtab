<template>
    <div>
        <a class="weatherwidget-io" href="https://forecast7.com/en/55d6812d57/copenhagen/" data-label_1="KØBENHAVN" data-label_2="Vejr" data-theme="pure" >RANDERS Vejr</a>
    </div>
</template>

<script>
export default {
    name: 'Weather',
    mounted() {
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
    }
}
</script>