<template>
    <div class="container_project">

        <div class="image">
            <img class="project_image" :src="require('@/assets/projects/' + image + '')"/>
        </div>
        <div class="content">
            <div class="project_title" v-on:click="openLink(link)">
                {{title}}
            </div>
            <div class="project_link" v-on:click="openLink(link)">
                {{link}}
            </div>
            <div class="project_role" v-html="role"></div>
            <div class="project_text" v-html="text"></div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'base_project',
        props: {
            image: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            },
            role: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                msg: {
                    // hello: "background-image: (../../assets/projects/portal_logo.png)"
                    hello: "color: red; background-image: (../../assets/projects/portal_logo.png)"
                }
            }
        },
        methods: {
            openLink(link) {
                if (link) window.open(link, '_blank')
            }
        }
    }
</script>