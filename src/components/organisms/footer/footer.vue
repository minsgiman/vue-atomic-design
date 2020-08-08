<template>
    <footer>
        <div>
            <m-links :links="fLinks"></m-links>
        </div>
        <div>
            <m-links :links="sLinks"></m-links>
        </div>
    </footer>
</template>

<script>
    import { mLinks } from '../../molecules/links';

    export default {
        components: {
            mLinks
        },
        props: {
            fLinks: {
                type: Array,
                default: function () {
                    return []
                }
            },
            sLinks: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    };
</script>