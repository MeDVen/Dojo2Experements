import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import List from './List'

import * as css from './styles/SpaceStuff.m.css';

export default class SpaceStuff extends WidgetBase {
    private coolText = 'Press button, please!'

    protected render() {
        return v('div', [
            v('h1', { classes: [css.root] }, ['Space stuff']),
            // v('h2', { classes: [css.root] }, [this.coolText]),
            v('b', { classes: [css.root] }, [`${this.coolText}`]),
            v('br', {}, []),
            w(List, {
                onInput: (value: string) => {
                    console.log('Finish him!', value)
                    this.changeText()
                },
                value: '',
                data: this.coolText
            }),
            v('br', {}, []),
            v('button', {
                classes: [css.root],
                onclick: () => {
                    console.log('1 >>>', this.coolText)
                    this.changeText()
                    console.log('2 >>>', this.coolText)
                }
            }, ['Press me'])
        ])
    }

    protected changeText() {
        this.coolText = 'Not now!'
    }
}
