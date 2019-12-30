<template>
    <div>
        <div class="cal-item" v-for="item in cal">
            <p class="title">{{ item.title }}</p>
            <p>{{ item.start }} - {{ item.end }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cal-item {
        padding: 0;
        border: 1px solid #fff;
        box-sizing: border-box;

        p.title {
            font-weight: bold;
            margin-bottom: 0;
        }
        p:not(.title) {
            margin-top: 5px;
        }
    }
</style>

<script>
const moment = require('moment')

export default {
    name: 'Calendar',
    data() {
        return {
            cal: []
        }
    },
    mounted() {
        const months = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
        const ical = require('ical')
        const axios = require('axios').default

        axios.get('https://backend.amatzen.dk/assorted/calendar.php').then(r => {
            var data = r.data

            var pdata = ical.parseICS(data)

            var i=0;
            for (let k in pdata) {
                if (pdata.hasOwnProperty(k)) {
                    var ev = pdata[k];
                    if (pdata[k].type == 'VEVENT') {
                        this.cal.unshift({
                            title: ev.summary,
                            start: moment(ev.start.toISOString()).format('LL LT'),
                            end: moment(ev.end.toISOString()).format('LL LT')
                        })
                    }
                }
            }
        }).then (() => {
            this.cal = this.cal.slice(0,3)
        })

    }    
}
</script>