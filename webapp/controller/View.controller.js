sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  function (Controller, MessageBox, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("nodebaseui5.controller.View", {
      collRefShipments: null,

      onInit: function () {
        const firebaseModelOld = this.getView().getModel("firebase");

        // Create a Firestore reference (for real time view)
        const firestoreOld = this.getView()
          .getModel("firebase")
          .getData().firestore;
        // Create a collection reference to the shipments collection (for real time view)
        const collRefShipments = firestoreOld.collection("shipments");

        // Get the Firebase Model
        const firebaseModel = this.getView().getModel("firebase");

        // Create a Authentication reference
        const fireAuth = this.getView()
          .getModel("firebase")
          .getProperty("/fireAuth");

        // Create a Firestore reference
        const firestore = this.getView()
          .getModel("firebase")
          .getProperty("/firestore");
        // Create a collection reference to the shipments collection (not used for real time view but for add and delete)
        this.collRefShipments = firestore.collection("shipments");

        // Initialize an array for the shipments from firebase database
        var oShipments = {
          shipments: [],
          possibleShipmentStatus: [
            {
              id: "Damaged",
              status: "Damaged",
            },
            {
              id: "Missing",
              status: "Missing",
            },
            {
              id: "Preparing",
              status: "Preparing",
            },
            {
              id: "Shipped",
              status: "Shipped",
            },
          ],
          currentShipment: {},
        };

        // Create and set object to the shipmentModel
        var shipmentModel = new JSONModel(oShipments);
        this.getView().setModel(shipmentModel, "shipmentModel");

        //Real Time Shipments
        this.getRealTimeShipments(collRefShipments);

        fireAuth.onAuthStateChanged(
          function (user) {
            if (user) {
              // Get realtime shipments
              his.getRealTimeShipments();
            }
          }.bind(this)
        );
      },

      getRealTimeShipments: function () {
        this.collRefShipments.onSnapshot(
          function (snapshot) {
            var shipmentModel = this.getView().getModel("shipmentModel");

            var shipmentData = shipmentModel.getData();

            snapshot.docChanges().forEach(function (change) {
              var oShipment = change.doc.data();
              oShipment.id = change.doc.id;

              if (change.type === "added") {
                shipmentData.shipments.push(oShipment);
              } else if (change.type === "modified") {
                var index = shipmentData.shipments
                  .map(function (shipment) {
                    return shipment.id;
                  })
                  .indexOf(oShipment.id);
                shipmentData.shipments[index] = oShipment;
              } else if (change.type === "removed") {
                var index = shipmentData.shipments
                  .map(function (shipment) {
                    return shipment.id;
                  })
                  .indexOf(oShipment.id);
                shipmentData.shipments.splice(index, 1);
              }
            });
            this.getView().getModel("shipmentModel").refresh(true);
            this.getView().byId("shipmentTable").getBinding("items").refresh();
          }.bind(this)
        );
      },
	  

      _getDialog: function () {
        if (!this._oDialog) {
          this._oDialog = sap.ui.xmlfragment(
            "nodebaseui5.view.fragment.AddShipment",
            this
          );
          this.getView().addDependent(this._oDialog);
        }
        return this._oDialog;
      },

      onOpenShipmentFragment: function () {
        this._getDialog().open();
      },

      clearAddedShipment: function () {
        this.getView()
          .getModel("shipmentModel")
          .getContext("/currentShipment")
          .getModel()
          .getData().currentShipment = {};
        this.getView()
          .getModel("shipmentModel")
          .getContext("/currentShipment")
          .getModel()
          .setProperty("/selectedKey", "");
        this.getView().getModel("shipmentModel").refresh(true);
      },

      closeDialog: function (oEvent) {
        if (
          this.getView()
            .getModel("shipmentModel")
            .getContext("/currentShipment")
            .getObject()
        ) {
          this.clearAddedShipment(oEvent);
        }
        this._getDialog().close();
      },

      onSaveShipment: function (oEvent) {
        var oModel = oEvent.getSource().getModel("shipmentModel");
        var oShipment = oModel.getContext("/currentShipment").getObject();

        this.collRefShipments
          .add(oShipment)
          .then(
            function (docShipment) {
              oShipment.id = docShipment.id;
              oModel.refresh(true);
              this.getView()
                .byId("shipmentTable")
                .getBinding("items")
                .refresh();
              this.clearAddedShipment(oEvent);
              this.closeDialog();
              this.showMessageToast("Shipment created successfully.");
            }.bind(this)
          )
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      },

      onShipmentStatusSelect: function (oEvent) {
        var oShipment = oEvent
          .getSource()
          .getModel("shipmentModel")
          .getContext("/currentShipment")
          .getObject();
        oShipment.status = oEvent.getSource().getSelectedItem().getKey();
      },

      showMessageToast: function (message) {
        MessageToast.show(message);
      },

      onDeleteShipment: function (oEvent) {
        var placeholder = this;
        var shipmentId = oEvent.getSource().data().shipment.id;
        var shipmentCode = oEvent.getSource().data().shipment.code;
        MessageBox.confirm(
          "Are you sure you want to delete the shipment: " + shipmentCode + "?",
          {
            actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
            onClose: function (sAction) {
              if (sAction === "YES") {
                placeholder.collRefShipments
                  .doc(shipmentId)
                  .delete()
                  .then(
                    function () {
                      placeholder
                        .getView()
                        .byId("shipmentTable")
                        .getBinding("items")
                        .refresh();
                      placeholder.showMessageToast(
                        "Shipment: " + shipmentCode + " deleted successfully."
                      );
                    }.bind(placeholder)
                  )
                  .catch(function (error) {
                    console.error(
                      "Error removing document: " + shipmentCode + ": ",
                      error
                    );
                  });
              }
            },
          }
        );
      },
    });
  }
);
