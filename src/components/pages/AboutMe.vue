<template>
    <div class="container-page">
        <Biography></Biography>
    </div>
</template>
<script>
    import Biography from '@/components/pages/about/Biography'

    export default {
        name: 'AboutMe',
        components: {
            Biography
        },
        data () {
            return {
                msg: 'Welcome about me page'
            }
        }
    }
</script>