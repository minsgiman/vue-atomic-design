<template>
    <b-button
        v-on="$listeners"
        :variant="color"
        :disabled="disabled"
    >{{text}}</b-button>
</template>
<script>
import { BButton } from 'bootstrap-vue';

export default {
    components: {
        BButton
    },
    props: {
        text: {
            type: String,
            default: 'Button'
        },
        color: {
            type: String,
            default: 'primary'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>