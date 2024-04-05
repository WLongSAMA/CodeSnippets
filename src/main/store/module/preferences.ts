import Store from 'electron-store'
import type { PreferencesStore } from '@shared/types/main/store'
import { GetConfigPath } from '../../../main/utils/configpath'

const ConfigPath = GetConfigPath('preferences')

export default new Store<PreferencesStore>({
    name: 'preferences',
    cwd: ConfigPath[0],

    defaults: {
        storagePath: ConfigPath[1],
        backupPath: ConfigPath[2],
        theme: 'light:github',
        editor: {
            wrap: true,
            fontFamily:
                'SF Mono, Consolas, Menlo, Ubuntu Mono, Inconsolata, monospace, PingFang SC, Microsoft Yahei',
            fontSize: 12,
            tabSize: 4,
            trailingComma: 'none',
            semi: false,
            singleQuote: true,
            highlightLine: true,
            highlightGutter: false,
            matchBrackets: true
        },
        screenshot: {
            background: false,
            gradient: ['#D02F98', '#9439CA'],
            darkMode: true,
            width: 600
        },
        markdown: {
            presentationScale: 1.3,
            codeRenderer: 'highlight.js'
        },
        language: 'zh_CN'
    }
})
