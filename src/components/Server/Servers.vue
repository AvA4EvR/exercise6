<template>
    <div class="col-xs-12 col-sm-6">
        <appServer v-bind:servers="servers"></appServer>
    </div>
</template>

<script>
    import { eventBus } from '../../main';
    import Server from './Server.vue';

    export default{
        data: function() {
            return {

                servers: [

                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ],
                message: ''

            }
        },

        components: {
            'appServer': Server
        }
    }

</script>

<style>

</style>
