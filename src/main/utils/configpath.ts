import { homedir, platform } from 'os'
import { existsSync } from 'fs'
import { resolve } from 'path'

/*
 * 获取配置文件的路径
 */
export function GetConfigPath(filename: string) {
    let myDocPath = homedir()
    let userData = ''

    switch (platform()) {
        case 'win32':
            userData = resolve(homedir(), 'AppData\\Roaming\\CodeSnippets')
            break
        case 'darwin':
            userData = resolve(homedir(), 'Library', 'Application Support')
            break
        case 'linux':
            userData = resolve(homedir(), '.config')
            break
    }

    const defaultPath = resolve(myDocPath, 'CodeSnippets')
    const backupPath = resolve(defaultPath, 'backups')

    const filePath1 = resolve(userData, 'CodeSnippets', 'v2')
    const filePath2 = resolve(process.cwd(), 'CodeSnippets', 'v2')
    const filePath3 = resolve(defaultPath, 'CodeSnippets', 'v2')

    let configPath = ''

    if (existsSync(resolve(filePath2, filename + '.json'))) {
        configPath = filePath2
    } else if (existsSync(resolve(filePath1, filename + '.json'))) {
        configPath = filePath1
    } else {
        configPath = filePath3
    }

    return [configPath, defaultPath, backupPath]
}
