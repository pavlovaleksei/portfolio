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

    export default {
        name: 'AboutMe',
        components: {
            Header,
            Biography
        }
    }
</script>