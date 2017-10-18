<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"></app-servers>
            <p>{{name}}</p>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>


    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function () {
            return {
                name: '',
                age: 28,
                message: ''
            };
        },
        methods: {
            changeName() {
                this.name = 'Rich';
            },
            resetName() {
                this.name = 'Co';
            }
        },
        components: {
            appHeader: Header,
            'app-servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>


<style>

</style>
