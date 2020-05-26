<template>
    <div class="container-page">
        <ContactsMin></ContactsMin>
    </div>
</template>
<script>
    import ContactsMin from '@/components/pages/about/Contacts'

    export default {
        name: 'Contacts',
        components: {
            ContactsMin
        },
        data () {
            return {
                msg: 'Welcome contacts page'
            }
        }
    }
</script>