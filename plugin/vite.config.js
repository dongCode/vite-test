import { defineConfig } from 'vite'
import testPlugin from './testPlugin'
import aliasPlugin from './aliasPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [testPlugin(), aliasPlugin()],
});


