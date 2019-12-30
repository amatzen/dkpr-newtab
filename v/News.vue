<template>
    <div>
        <div class="news-item" v-for="item in items">
            <div class="image">
                <img :src="item.image">
            </div>
            <div class="content">
                <p class="news-title">
                    <a :href="item.link" target="_blank">
                        {{ item.title }}
                    </a>
                </p>
                <p class="news-description">
                    {{ item.description }}
                </p>
                <p class="news-source">
                    <a :href="item.link" target="_blank">
                        {{ item.source }}
                    </a>
                </p>
            </div>
        </div>
        <p class="small">
            Data leveret af <a href="https://newsapi.org">NewsAPI</a>    
        </p>   
    </div>
</template>

<style lang="scss" scoped>
    .news-item {
        width: 100%;
        padding: .8em 0;
        display: grid;
        grid-template: "image content";
        grid-template-columns: 50px auto;
        grid-column-gap: 20px;

        .image {
            grid-area: image;
            
            img {
                width: 100%;
            }
        }

        .content {
            p.news-title {
                font-weight: bold;
                margin-top: 0;
            }
        }
    }

    a {
        color: #000;
        text-decoration: none;

        &:hover {
            color: lighten(#000, 15%);
            text-decoration: underline;
        }
    }
    p.small {
        font-size: 8pt;
    }
</style>

<script>
const axios = require('axios')

const truncate = (input, length) => input.length > length ? `${input.substring(0, length)}...` : input;

export default {
    name: 'News',
    data() {
        return {
            items: []
        }
    },
    mounted() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=16d98e18bcd04697bdc3e0d3a99758e8')
            .then(r => {
                var data = r.data;
                data = data.articles;
                data = data.slice(0,1);

                data.forEach(e => {
                    this.items.push({
                        image: e.urlToImage,
                        title: e.title,
                        description: truncate(e.description, 120),
                        source: e.source.name,
                        link: e.url
                    })
                });

            })
    }
}
</script>