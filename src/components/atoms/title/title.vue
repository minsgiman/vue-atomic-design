<template>
    <component :is="tag">{{ content }}</component>
</template>

<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'h2'
            },
            content: {
                type: String,
                default: ''
            }
        }
    };
</script>