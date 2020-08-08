<template>
    <div>
        <a-title tag="h2" :content="title"></a-title>
        <a-text :text="text"></a-text>
    </div>
</template>

<script>
    import { aTitle } from './../../atoms/title'
    import { aText } from './../../atoms/text'

    export default {
        components: {
            aTitle,
            aText
        },
        props: {
            text: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        }
    };
</script>