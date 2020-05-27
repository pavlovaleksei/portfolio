<template>
    <div>
        <Header></Header>
        <div class="containerPage">
            <Biography></Biography>
            <div style="text-align: center">
                <h2>{{msg.titleProjectText}}</h2>
            </div>
            <AboutProjects></AboutProjects>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import Biography from '@/components/pages/about/Biography'
    import AboutProjects from '@/components/pages/about/AboutProjects'
    import Footer from '@/components/Footer'
    import text from "../../assets/text"

    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'AboutMe',
        components: {
            Header,
            Biography,
            AboutProjects,
            Footer
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