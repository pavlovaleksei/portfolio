<template>
    <div class="container-page">
        {{msg}}
        <a href="https://yandex.ru" target="_blank">link</a>
    </div>
</template>
<script>
    export default {
        name: 'Contacts',
        data () {
            return {
                msg: 'Welcome contacts page'
            }
        }
    }
</script>