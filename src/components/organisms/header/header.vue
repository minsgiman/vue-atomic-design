<template>
    <header>
        <div>
            <m-links :links="links"></m-links>
        </div>
        <div>
            <a-button text="Button"></a-button>
        </div>
    </header>
</template>

<script>
    import { aButton } from '../../atoms/button';
    import { mLinks } from '../../molecules/links';

    export default {
        components: {
            aButton,
            mLinks
        },
        props: {
            links: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    };
</script>