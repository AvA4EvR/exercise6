<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if=!message>Please select a server</p>
        <p v-else>{{message}}</p>

        <button @click="changeNormal">Change to normal</button>
    </div>


</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: ['message'], //Need prop in the receiving child
        methods: {
            changeNormal(){
                this.message = 'Normal';
//                this.$emit('ageWasEdited', this.userAge);
//                eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeStatus(this.message);
            }
        },
    }

</script>

<style>

</style>
