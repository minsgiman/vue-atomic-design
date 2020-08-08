<template>
    <div>
        <div v-for="card in cards" :key="card.id">
            <m-card :title="card.title" :text="card.text"></m-card>
        </div>
    </div>
</template>

<script>
    import { mCard } from '../../molecules/card';

    export default {
        components: {
            mCard
        },
        props: {
            cards: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    };
</script>