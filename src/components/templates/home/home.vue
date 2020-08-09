<template>
    <section>
        <o-header :links="links"></o-header>
        <div>
            <m-banner></m-banner>
            <div>
                <o-card-grid :cards="cards"></o-card-grid>
            </div>
        </div>
        <o-footer :fLinks="fLinks" :sLinks="sLinks"></o-footer>
    </section>
</template>

<script>
    import { oHeader } from '../../organisms/header';
    import { oFooter } from '../../organisms/footer';
    import { mBanner } from '../../molecules/banner';
    import { oCardGrid } from '../../organisms/card-grid';

    export default {
        components: {
            mBanner,
            oHeader,
            oFooter,
            oCardGrid
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