import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { w } from '@dojo/framework/widget-core/d';
import Link from '@dojo/framework/routing/ActiveLink';
import Toolbar from '@dojo/widgets/toolbar';

import * as css from '../styles/CPMenu.m.css';

export default class Menu extends WidgetBase {
    protected render() {
        return w(Toolbar, { heading: 'Cool page menu!', collapseWidth: 600 }, [
            w(
                Link,
                {
                    to: 'spaceStuff',
                    classes: [css.link],
                    activeClasses: [css.selected]
                },
                ['<Space Stuff>']
            ),
            w(
                Link,
                {
                    to: 'greatWolf',
                    classes: [css.link],
                    activeClasses: [css.selected]
                },
                ['<Great Wolf>']
            )
        ]);
    }
}
