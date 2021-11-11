/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 19:50:30
 * @LastEditTime: 2021-11-11 09:57:39
 */
import type { UserConfig, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import';
export default ({ mode, command }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      react(),
      styleImport({
        libs: [
          {
            libraryName: 'antd',
            esModule: true,
            resolveStyle: (name) => {
              // 组件样式按需加载，无需全局引入
              return `antd/es/${name}/style/index`
            },
          },
        ],
      })
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src')
        },
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: { '@primary-color': '#18BA79' },
          javascriptEnabled: true,
        }
      }
    },
  }
}

