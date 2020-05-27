<template>
    <div>
        <div class="biography_container">
            <div class="item1">
                <div>
                    <h1>{{msg.aboutMeTitle}}</h1>
                </div>
                <div  v-html="msg.aboutMeText"></div>
            </div>
            <div class="item2">
                <div>
                    <Contacts></Contacts>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import text from "../../../assets/text"
    import Contacts from "@/components/pages/about/Contacts";
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'Biography',
        components: {Contacts},
        data () {
            return {
                msg: {
                    aboutMeTitle: text[lang].menu.about,
                    aboutMeText: text[lang].biography.aboutMeText
                }
            }
        }
    }
</script>