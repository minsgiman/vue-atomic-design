<template>
    <section>
        <o-header :links="links"></o-header>
        <div>
            <m-banner></m-banner>
            <div>
                <o-grid :cards="cards"></o-grid>
            </div>
        </div>
        <o-footer :fLinks="fLinks" :sLinks="sLinks"></o-footer>
    </section>
</template>

<script>
    import { oHeader } from '../../organisms/header';
    import { oFooter } from '../../organisms/footer';
    import { mBanner } from '../../molecules/banner';
    import { oGrid } from '../../organisms/grid';

    export default {
        components: {
            mBanner,
            oHeader,
            oFooter,
            oGrid
        },
        props: {
            links: {
                type: Array,
                default: function () {
                    return []
                }
            },
            cards: {
                type: Array,
                default: function () {
                    return []
                }
            },
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