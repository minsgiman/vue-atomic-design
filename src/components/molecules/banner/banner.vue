<template>
    <div>
        <header>
            <a-title tag="h1" content="Atomic Design in Vue.js"/>
            <a-text text="Etiam in arcu lectus. Nulla facilisi."/>
            <a-button text="Button"/>
        </header>
    </div>
</template>

<script>
    import { aTitle } from '../../atoms/title';
    import { aText } from '../../atoms/text';
    import { aButton } from '../../atoms/button';

    export default {
        components: {
            aTitle,
            aText,
            aButton
        }
    };
</script>