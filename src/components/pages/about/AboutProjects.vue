<template>
    <div>
        <div><h2>{{msg.title}}</h2></div>
        <div class="projectContainer">
            <div class="projectBox">
                <div class="title">{{msg.misInfoclinica.title}}</div>
                <div v-html="msg.misInfoclinica.detail"></div>
                <div class="more">{{msg.more}}</div>
            </div>
            <div class="projectBox">
                <div class="title">{{msg.infoclinicaRU.title}}</div>
                <div v-html="msg.infoclinicaRU.detail"></div>
                <div class="more">{{msg.more}}</div>
            </div>
            <div class="projectBox">
                <div class="title">{{msg.labportal.title}}</div>
                <div v-html="msg.labportal.detail"></div>
                <div class="more">{{msg.more}}</div>
            </div>
            <div class="projectBox">
                <div class="title">{{msg.contactCenter.title}}</div>
                <div v-html="msg.contactCenter.detail"></div>
                <div class="more">{{msg.more}}</div>
            </div>
            <div class="projectBox">
                <div class="title">{{msg.visualControl.title}}</div>
                <div v-html="msg.visualControl.detail"></div>
                <div class="more">{{msg.more}}</div>
            </div>
            <div class="projectBox">
                <div class="title">{{msg.terminal.title}}</div>
                <div v-html="msg.terminal.detail"></div>
                <div class="more">{{msg.more}}</div>
            </div>

        </div>
    </div>
</template>
<script>
    import text from "../../../assets/text"
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'AboutProjects',
        data () {
            return {
                msg: {
                    title: text[lang].aboutProject.title,
                    more: text[lang].aboutProject.more,
                    misInfoclinica: {
                        title: text[lang].aboutProject.misInfoclinica.title,
                        detail: text[lang].aboutProject.misInfoclinica.detail
                    },
                    infoclinicaRU: {
                        title: text[lang].aboutProject.infoclinicaRU.title,
                        detail: text[lang].aboutProject.infoclinicaRU.detail
                    },
                    labportal: {
                        title: text[lang].aboutProject.labportal.title,
                        detail: text[lang].aboutProject.labportal.detail
                    },
                    contactCenter: {
                        title: text[lang].aboutProject.contactCenter.title,
                        detail: text[lang].aboutProject.contactCenter.detail
                    },
                    visualControl: {
                        title: text[lang].aboutProject.visualControl.title,
                        detail: text[lang].aboutProject.visualControl.detail
                    },
                    terminal: {
                        title: text[lang].aboutProject.terminal.title,
                        detail: text[lang].aboutProject.terminal.detail
                    },
                }
            }
        }
    }
</script>