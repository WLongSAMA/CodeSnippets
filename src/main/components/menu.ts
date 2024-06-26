import type { MenuItemConstructorOptions } from 'electron'
import { Menu } from 'electron'

export const createMenu = (template: MenuItemConstructorOptions[]) => {
    const menu = Menu.buildFromTemplate(template)
    return menu
}
