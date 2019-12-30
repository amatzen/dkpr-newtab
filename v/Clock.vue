<template>
    <div class="clock">
        <p class="time">
            {{ time }}
        </p>
        <p class="date">
            {{ date }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .clock {
        max-width: 640px;
        margin: 60px auto;
        text-align: center;
        
        p.time {
            font-size: 84pt;
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        p.date {
            font-size: 22pt;
            margin-top: 0px;
            margin-bottom: 10px;
        }
    }
</style>

<script>
import moment from 'moment'
import 'moment/locale/da'

export default {
    name: 'Clock',
    data() {
        return {
            time: '10.10',
            date: '30. december 2019'
        }
    },
    methods: {
        updateClock() {
            this.time = moment().locale("da").format('LT')
            this.date = moment().locale("da").format('LL')
        }
    },
    mounted() {
        this.updateClock()
        
        setInterval(() => {
            this.updateClock()
        }, 500);
    }
}
</script>