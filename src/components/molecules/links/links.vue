<template>
    <ul>
        <li v-for="(link, index) in links" :key="link.name + index">
            <aLink :url="link.url" :name="link.name"/>
        </li>
    </ul>
</template>
<script>
    import { aLink } from '../../atoms/link';

    export default {
        components: {
            aLink
        },
        props: {
            links: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>