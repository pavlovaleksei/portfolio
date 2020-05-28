<template>
    <div>
        <Header :isCustom="true"/>
        <div class="containerPage">
            <Project
                    v-for="item in projects"
                    :key="item.id"
                    :id="item.id"
                    :image="item.image"
                    :title="item.title"
                    :link="item.link"
                    :role="item.role"
                    :text="item.text"
            />
            <div class="other_text">
                <i>{{otherText}}</i>
            </div>

        </div>
        <Footer/>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import Project from '@/components/projects/BaseProject'

    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language');
    const doc = require('../../assets/text/text_' + lang);

    export default {
        name: 'Projects',
        components: {
            Header,
            Project,
            Footer
        },
        data () {
            return {
                otherText: doc.projects.otherProjectInfo,
                projects: [
                    {
                        id: 'infoclinicaRu',
                        image: "portal_logo.png",
                        title: doc.projects.infoclinicaRu.title,
                        link: 'https://demo.infoclinica.ru',
                        role: doc.projects.infoclinicaRu.role,
                        text: doc.projects.infoclinicaRu.text
                    },
                    {
                        id: 'labportal',
                        image: "lab_logo.jpeg",
                        title: doc.projects.labportal.title,
                        role: doc.projects.labportal.role,
                        text: doc.projects.labportal.text
                    },
                    {
                        id: 'misInfoclinica',
                        image: "webinf_logo.jpeg",
                        title: doc.projects.misInfoclinica.title,
                        role: doc.projects.misInfoclinica.role,
                        text: doc.projects.misInfoclinica.text
                    },
                    {
                        id: 'cc-alfatell',
                        image: "alfatell_logo.png",
                        title: doc.projects.ccAlfatell.title,
                        role: doc.projects.ccAlfatell.role,
                        text: doc.projects.ccAlfatell.text
                    },
                    {
                        id: 'visual-control',
                        image: "alfatell_logo.png",
                        title: doc.projects.visualControl.title,
                        role: doc.projects.visualControl.role,
                        text: doc.projects.visualControl.text
                    },
                    {
                        id: 'terminal',
                        image: "default.png",
                        title: doc.projects.terminal.title,
                        role: doc.projects.terminal.role,
                        text: doc.projects.terminal.text
                    }
                ]
            }
        }
    }
</script>