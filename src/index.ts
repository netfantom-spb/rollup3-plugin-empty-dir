import { Plugin } from 'rollup'
import { emptyDir as fsEmptyDir } from 'fs-extra'

export function EmptyDir(): Plugin {
    return {
        name: 'empty-dir',
        async generateBundle({ dir }) {
            if (dir) {
                await fsEmptyDir(dir)
            }
        },
    }
}