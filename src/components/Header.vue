<template>
    <div>
        <div class="header">
            <div class="header_content">
                <img class="header_image" alt="Photo" src="../assets/photo.png">
                <div>
                    <div class="header_title">
                        {{msg.name}}
                    </div>
                    <div class="header_description">
                        fullstack web developer
                    </div>
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
    import text from "../assets/text"

    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language')

    export default {
        name: 'Header',
        data() {
            return {
                msg: {
                    name: text[lang].name
                }
            }
        }
    }
</script>