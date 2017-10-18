<template>
    <div>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="index in servers" @click="clickedServer(index.id, index.status)">
                    Server #{{ index.id }}
                </li>
            </ul>
        </div>
        <appServerDetails v-bind:message="message"></appServerDetails>
    </div>
</template>
<script>

    import { eventBus } from '../../main';
    import ServerDetails from './ServerDetails.vue'
    export default {
       props: ['servers'],
        data: function() {
            return {
                message: ''
            }
        },

        methods: {
            clickedServer(index, status) {
                this.message = "Server # " + index + " selected, Status: " + status;
                this.$emit('nameWasReset', this.message);
            }
        },
        components: {
            'appServerDetails': ServerDetails
        }

    }



</script>
<style>

</style>