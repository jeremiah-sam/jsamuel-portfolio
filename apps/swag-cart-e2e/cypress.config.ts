import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run swag-cart:serve',
        production: 'nx run swag-cart:preview',
      },
      ciWebServerCommand: 'nx run swag-cart:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
