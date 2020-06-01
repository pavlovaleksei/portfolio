<template>
    <div>
        <div class="header_custom" v-if="isCustom">
            <div class="header_content_custom">
                <div class="header_title">{{msg.projectTitle}}</div>
            </div>
        </div>
        <div class="header" v-if="!isCustom">
            <div class="header_content">
                <img class="header_image" alt="Photo" src="../assets/photo.jpg">
                <div>
                    <div class="header_title">{{msg.name}}</div>
                    <div class="header_description">fullstack web developer</div>
                    <div class="header_skills_container">
                        <div class="header_skills">
                            <div class="header_skills_item">Java</div>
                            <div class="header_skills_item">Scala</div>
                            <div class="header_skills_item">Spring Framework</div>
                            <div class="header_skills_item">Play Framework</div>
                            <div class="header_skills_item">JavaScript</div>
                            <div class="header_skills_item">VueJs</div>
                            <div class="header_skills_item">ExtJs</div>
                            <div class="header_skills_item">CSS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language');
    const doc = require('../assets/text/text_' + lang);

    export default {
        name: 'Header',
        props: {
            isCustom: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                msg: {
                    name: doc.name,
                    projectTitle: doc.projecttitle
                }
            }
        }
    }
</script>