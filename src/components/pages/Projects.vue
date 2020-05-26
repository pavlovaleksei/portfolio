<template>
    <div class="container-page">
        <AboutProjects></AboutProjects>
    </div>
</template>
<script>
    import AboutProjects from '@/components/pages/about/AboutProjects'

    export default {
        name: 'Projects',
        components: {
            AboutProjects
        },
        data () {
            return {
                msg: 'Welcome projects page'
            }
        }
    }
</script>