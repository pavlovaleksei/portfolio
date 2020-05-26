<template>
    <div class="container-page">
        <Biography></Biography>
        <AboutProjects></AboutProjects>
        <Contacts></Contacts>
    </div>
</template>
<script>
    import Biography from '@/components/pages/about/Biography'
    import AboutProjects from '@/components/pages/about/AboutProjects'
    import Contacts from '@/components/pages/about/Contacts'

    export default {
        name: 'AboutMe',
        components: {
            Biography,
            AboutProjects,
            Contacts
        },
        data () {
            return {
                msg: 'Welcome about me page'
            }
        }
    }
</script>