<template>
    <div>
        <div class="menu">
            <nav>
                <a><router-link to="/">{{menuItems.about}}</router-link></a>
                <p>|</p>
                <a><router-link to="/projects">{{menuItems.projects}}</router-link></a>
            </nav>
            <div class="checkLanguage">
                <div v-if="!isRu" class="itemLanguage" @click="clickRu">RUS</div>
                <div v-if="isRu" class="itemLanguage" @click="clickEng">ENG</div>
            </div>
        </div>
    </div>
</template>
<script>
    import text from "../assets/text"
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'Menu',
        data() {
            return {
                isRu: true,
                menuItems: {
                    about: text[lang].menu.about,
                    projects: text[lang].menu.projects,
                    contacts:text[lang].menu.contacts
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
            }
        }
    }
</script>