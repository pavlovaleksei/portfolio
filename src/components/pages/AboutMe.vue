<template>
    <div>
        <Header></Header>
        <div class="containerPage">
            <Biography></Biography>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import Biography from '@/components/pages/about/Biography'
    import text from "../../assets/text"

    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'AboutMe',
        components: {
            Header,
            Biography
        },
        data () {
            return {
                msg: {
                    titleProjectText: text[lang].aboutProject.aboutProjectTitleText
                }
            }
        }
    }
</script>