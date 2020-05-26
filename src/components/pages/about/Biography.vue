<template>
    <div>
        <div><h2>{{msg.hello}}</h2></div>
        <div class="title_text" v-html="msg.titleText"></div>
        <div class="biography_container">
            <div class="item1">
                <img class="photo" alt="Photo" src="../../../assets/photo.jpeg">
            </div>
            <div class="item2">
                <div v-html="msg.aboutMeText"></div>
            </div>

        </div>
    </div>
</template>
<script>
    import text from "../../../assets/text"
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'Biography',
        data () {
            return {
                msg: {
                    hello: text[lang].biography.hello,
                    titleText: text[lang].biography.titleText,
                    aboutMeText: text[lang].biography.aboutMeText,
                }
            }
        }
    }
</script>