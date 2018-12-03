import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import menu from './CPMenu'

import Outlet from '@dojo/framework/routing/Outlet';

import SpaceStuff from './SpaceStuff'
import GreatWolf from './GreatWolf'

import * as css from '../styles/CoolPage.m.css';

export default class Home extends WidgetBase {
    protected render() {
        return v('div', { classes: [css.root] }, [
            w(menu, {}),
            v('h1', { classes: [css.root] }, ['Cool Page']),
            v('div', [
                w(Outlet, { key: 'spaceStuff', id: 'spaceStuff', renderer: () => w(SpaceStuff, {}) }),
                w(Outlet, { key: 'greatWolf', id: 'greatWolf', renderer: () => w(GreatWolf, {}) })
            ])
        ])
    }
}
