<template>
    <div class="container-page">
        <Biography></Biography>
        <AboutProjects></AboutProjects>
    </div>
</template>
<script>
    import Biography from '@/components/pages/about/Biography'
    import AboutProjects from '@/components/pages/about/AboutProjects'

    export default {
        name: 'AboutMe',
        components: {
            Biography,
            AboutProjects
        },
        data () {
            return {
                msg: 'Welcome about me page'
            }
        }
    }
</script>