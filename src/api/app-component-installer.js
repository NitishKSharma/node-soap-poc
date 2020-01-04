"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
class AppComponentInstaller {
    install(registry) {
        n_defensive_1.given(registry, "registry").ensureHasValue().ensureIsObject();
    }
}
exports.AppComponentInstaller = AppComponentInstaller;
//# sourceMappingURL=app-component-installer.js.map