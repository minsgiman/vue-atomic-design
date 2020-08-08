<template>
    <a :href="url">{{ name }}</a>
</template>
<script>
    export default {
        props: {
            url: {
                type: String,
                default: '/'
            },
            name: {
                type: String,
                default: ''
            }
        }
    }
</script>