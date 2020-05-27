<template>
    <div>
        <h1>{{msg.title}}</h1>
        <div class="contactsBox">
            <div>
                <div>
                    <a href="mailto:alekseipavlov1988@gmail.com" target="_blank" class="contact_link_full"><i class="fas fa-envelope"></i> alekseipavlov1988@gmail.com</a>
                </div>
                <div>
                    <a href="skype:pavlov_aleksei@list.ru" target="_blank" class="contact_link_full"><i class="fab fa-skype"></i> Skype</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/aleksey-pavlov-a65131182/" target="_blank" class="contact_link_full"><i class="fab fa-linkedin"></i> LinkedIn</a>
                </div>
                <div>
                    <a href="https://www.instagram.com/pavlov_aleksei" target="_blank" class="contact_link_full"><i class="fab fa-instagram"></i> Instagram</a>
                </div>
                <div>
                    <a href="https://github.com/pavlovaleksei" target="_blank" class="contact_link_full"><i class="fab fa-github-square"></i> GitHub</a>
                </div>
                <div>
                    <a href="https://t-do.ru/pavlov_aleksey" target="_blank" class="contact_link_full"><i class="fab fa-telegram"></i> Telegram</a>
                </div>
                <div>
                    <a href="https://wa.me/79271044637" target="_blank" class="contact_link_full"><i class="fab fa-whatsapp"></i> WhatsUp</a>
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
                    title: text[lang].aboutContacts.title
                }
            }
        }
    }
</script>