<template>
    <div>
        <div class="menu">
            <nav>
                <a style="cursor: pointer" v-on:click="clickMenuItem({'about': true, 'projects': false})">{{menuItems.about}}</a>
                <p>|</p>
                <a style="cursor: pointer" v-on:click="clickMenuItem({'about': false, 'projects': true})">{{menuItems.projects}}</a>
            </nav>
            <div class="checkLanguage">
                <div v-if="!isRu" class="itemLanguage" @click="clickRu">RUS</div>
                <div v-if="isRu" class="itemLanguage" @click="clickEng">ENG</div>
            </div>
        </div>
        <about-me v-if="isShow.about"></about-me>
        <my-projects v-if="isShow.projects"></my-projects>
    </div>
</template>
<script>
    import aboutMe from '@/components/pages/AboutMe'
    import myProjects from '@/components/pages/Projects'

    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')
    const doc = require('../assets/text/text_' + lang);

    export default {
        name: 'Main',

        components: {
            aboutMe,
            myProjects
        },

        data() {
            return {
                isRu: true,
                menuItems: {
                    about: doc.menu.about,
                    projects: doc.menu.projects
                },
                isShow: {
                    about: true,
                    projects: false
                }
            }
        },
        created() {
            this.isRu = lang === 'ru';
        },
        methods: {
            clickRu() {
                localStorage.removeItem("language")
                localStorage.setItem("language", 'ru')
                location.reload()
            },
            clickEng() {
                localStorage.removeItem("language")
                localStorage.setItem("language", 'eng')
                location.reload()
            },
            clickMenuItem(obj) {
                this.isShow = obj;
            }
        }
    }
</script>