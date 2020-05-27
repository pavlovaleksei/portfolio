<template>
    <div>
        <Header></Header>
        <div class="containerPage">
            <AboutProjects></AboutProjects>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import AboutProjects from '@/components/pages/about/AboutProjects'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: 'Projects',
        components: {
            Header,
            AboutProjects,
            Footer
        },
        data () {
            return {
                msg: 'Welcome projects page'
            }
        }
    }
</script>