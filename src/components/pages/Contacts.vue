<template>
    <div>
        <Header></Header>
        <div class="containerPage">
            <ContactsMin></ContactsMin>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import ContactsMin from '@/components/pages/about/Contacts'

    export default {
        name: 'Contacts',
        components: {
            Header,
            ContactsMin
        },
        data () {
            return {
                msg: 'Welcome contacts page'
            }
        }
    }
</script>