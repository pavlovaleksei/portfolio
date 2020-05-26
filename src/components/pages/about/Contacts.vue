<template>
    <div>
        <h1>{{msg.title}}</h1>
        <div class="contactsBox">
            <div>
                <div>
                    <b>{{msg.phone}} </b>+7 (927) 104-46-37
                </div>
                <div>
                    <b>E-mail: </b>alekseipavlov1988@gmail.com
                </div>
                <div>
                    <b>LinkedIn: </b>alekseipavlov1988@gmail.com
                </div>
                <div>
                    <b>GitHub: </b><a href="https://github.com/pavlovaleksei" target="_blank">@link</a>
                </div>
                <div>
                    <b>Instagram: </b><a href="https://www.instagram.com/pavlov_aleksei" target="_blank">@link</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import text from "../../../assets/text"
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'Contacts',
        data () {
            return {
                msg: {
                    title: text[lang].aboutContacts.title,
                    phone: text[lang].aboutContacts.phone
                }
            }
        }
    }
</script>