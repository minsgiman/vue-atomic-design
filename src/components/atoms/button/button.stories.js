import { storiesOf } from '@storybook/vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { aButton } from './index';

storiesOf('components', module)
    .add('aButton', () => ({
        components: { aButton },
        template: '<div style="padding:10px"><a-button :text="btnTxt" @click="onClick"></a-button></div>',
        data: () => ({
            btnTxt: 'This is Button'
        }),
        methods: {
            onClick() {
                this.btnTxt += ' click'
            }
        }
    }));