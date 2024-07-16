import { defineConfig } from 'vite'
import testPlugin from './testPlugin'
import aliasPlugin from './aliasPlugin'
import configPlugin from './configPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [testPlugin(), aliasPlugin(), configPlugin()],
});


