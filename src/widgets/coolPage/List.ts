import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase'
import { v, w } from '@dojo/framework/widget-core/d'
import TextInput from '@dojo/widgets/text-input'

export interface ListProperties {
    data?: string
    onInput: (value: string) => void
    value: string
}

export default class List extends WidgetBase<ListProperties> {

    protected onInput(value: string) {
        this.properties.onInput(value)
        this.properties.data = value
        console.log('Typed data by input:', value)
        console.log('data changed? Text:', this.properties.data)
    }

    protected render() {
        return v('div', [
            v('b', { classes: [] }, [this.properties.data]),
            w(TextInput, {
                value: this.properties.value,
                onInput: this.onInput,
                placeholder: 'Type a text...'
            })
        ])
    }
}