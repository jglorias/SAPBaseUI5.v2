/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "nodebaseui5/model/models",
    "./Firebase",
  ],
  function (UIComponent, Device, models, Firebase) {
    "use strict";

    return UIComponent.extend("nodebaseui5.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {

			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();

			this.setModel(models.createDeviceModel(), "device");

			this.setModel(Firebase.initializeFirebase(), "firebase");
      },
    });
  }
);
