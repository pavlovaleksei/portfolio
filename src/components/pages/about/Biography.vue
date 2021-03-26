<template>
    <div>
        <div class="biography_container">
            <div class="item1">
                <div>
                    <h1>{{ msg.aboutMeTitle}}</h1>
                </div>
                <div>
                    <b>{{msg.birthDate.title}} </b>{{msg.birthDate.data}}
                </div>
                <div>
                    <b>{{msg.city.title}} </b>{{msg.city.data}}
                </div>
                <div>
                    <b>{{msg.experience.title}} </b>{{msg.experience.data}}
                </div>
                <div>
                    <b>{{msg.position.title}} </b>{{msg.position.data}}
                </div>

                <div>
                    <b>{{msg.preposition.title}} </b>{{msg.preposition.data}}
                </div>

                <div>
                    <dl style="margin-top: 0; margin-bottom: 0">
                        <dt><b>{{msg.technology.title}} </b></dt>
                        <dd><b>{{msg.technology.frontEnd.title}}</b> {{msg.technology.frontEnd.data}}</dd>
                        <dd><b>{{msg.technology.backEnd.title}}</b> {{msg.technology.backEnd.data}}</dd>
                        <dd><b>{{msg.technology.db.title}}</b> {{msg.technology.db.data}}</dd>
                        <dd><b>{{msg.technology.other.title}}</b> {{msg.technology.other.data}}</dd>
                    </dl>
                </div>
                <div>
                    <b>{{msg.otherTechnology.title}}</b> {{msg.otherTechnology.data}}
                </div>
            </div>
            <div class="item2">
                <div>
                    <Contacts></Contacts>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Contacts from "@/components/pages/about/Contacts";
    const lang = localStorage.getItem('language') === null ? "ru" : localStorage.getItem('language');
    const doc = require('../../../assets/text/text_' + lang);

    export default {
        name: 'Biography',
        components: {Contacts},
        data () {
            return {
                msg: {
                    aboutMeTitle: doc.menu.about,
                    birthDate: {
                        title: doc.biography.birthDate.title,
                        data: doc.biography.birthDate.data
                    },
                    city: {
                        title: doc.biography.city.title,
                        data: doc.biography.city.data
                    },
                    experience: {
                        title: doc.biography.experience.title,
                        data: doc.biography.experience.data
                    },
                    specialization: {
                        title: doc.biography.specialization.title,
                        data: doc.biography.specialization.data
                    },
                    position: {
                        title: doc.biography.position.title,
                        data: doc.biography.position.data
                    },
                    preposition: {
                        title: doc.biography.preposition.title,
                        data: doc.biography.preposition.data
                    },
                    technology: {
                        title: doc.biography.technology.title,
                        frontEnd: {
                            title: doc.biography.technology.frontend.title,
                            data: doc.biography.technology.frontend.data
                        },
                        backEnd: {
                            title: doc.biography.technology.backend.title,
                            data: doc.biography.technology.backend.data
                        },
                        db: {
                            title: doc.biography.technology.db.title,
                            data: doc.biography.technology.db.data
                        },
                        other: {
                            title: doc.biography.technology.other.title,
                            data: doc.biography.technology.other.data
                        }
                    },
                    otherTechnology: {
                        title: doc.biography.otherTechnology.title,
                        data: doc.biography.otherTechnology.data
                    }
                }
            }
        }
    }
</script>