<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in servers" @click="clickedServer(index.id, index.status)">
                Server #{{ index.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main';

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
        methods: {
            clickedServer(index, status) {
                this.message = "Server # " + index + " selected, Status: " + status;
                this.$emit('nameWasReset', this.message);
            }
        }
    }

</script>

<style>

</style>
