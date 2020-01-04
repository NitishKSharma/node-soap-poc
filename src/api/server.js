"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_web_1 = require("@nivinjoseph/n-web");
const n_config_1 = require("@nivinjoseph/n-config");
const app_component_installer_1 = require("./app-component-installer");
const server = new n_web_1.WebApp(Number.parseInt(n_config_1.ConfigurationManager.getConfig("PORT")));
server
    .useInstaller(new app_component_installer_1.AppComponentInstaller())
    .enableCors();
server.bootstrap();
//# sourceMappingURL=server.js.map