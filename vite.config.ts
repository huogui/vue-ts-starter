import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { VantResolver,ElementPlusResolver,AntDesignVueResolver,NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({}),Components({
    dts:false,
    resolvers:[VantResolver(),ElementPlusResolver(),AntDesignVueResolver(),NaiveUiResolver()],
  })]
})
