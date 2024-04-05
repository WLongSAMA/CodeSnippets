import Store from 'electron-store'
import type { AppStore } from '@shared/types/main/store'
import { GetConfigPath } from '../../../main/utils/configpath'

const ConfigPath = GetConfigPath('app')

export default new Store<AppStore>({
    name: 'app',
    cwd: ConfigPath[0],

    defaults: {
        bounds: {},
        sidebarWidth: 180,
        snippetListWidth: 250,
        sort: 'updatedAt',
        hideSubfolderSnippets: false,
        compactMode: false
    }
})
