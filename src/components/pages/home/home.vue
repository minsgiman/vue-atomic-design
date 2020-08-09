<template>
    <t-home
            :links="links"
            :cards="cards"
            :fLinks="fLinks"
            :sLinks="sLinks"
    />
</template>

<script>
    import { tHome } from '../../templates/home';

    export default {
        components: {
            tHome
        },
        data: () => {
            return {
                links: [
                    {url: '/', name: 'h1'},
                    {url: '/', name: 'h2'},
                    {url: '/', name: 'h3'}
                ],
                cards: [
                    {id: '1', title: 'Title1', text: 'Text1'},
                    {id: '2', title: 'Title2', text: 'Text2'},
                    {id: '3', title: 'Title3', text: 'Text3'},
                    {id: '4', title: 'Title4', text: 'Text4'},
                ],
                fLinks: [
                    {url: '/', name: 'f1-1'},
                    {url: '/', name: 'f1-2'},
                    {url: '/', name: 'f1-3'}
                ],
                sLinks: [
                    {url: '/', name: 'f2-1'},
                    {url: '/', name: 'f2-2'},
                    {url: '/', name: 'f2-3'}
                ]
            }
        }
    };
</script>