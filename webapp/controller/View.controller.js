sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("nodebaseui5.controller.View.", {
      onInit: function () {
        // Get the Firebase Model
        const firebaseModel = this.getView().getModel("firebase");

        // Create a Firestore reference
        const firestore = this.getView()
          .getModel("firebase")
          .getData().firestore;
        // Create a collection reference to the shipments collection
        const collRefShipments = firestore.collection("shipments");

        // Initialize an array for the shipments of the collection as an object
        var oShipments = {
          shipments: [],
        };

        // Create and set the created object to the the shipmentModel
        var shipmentModel = new JSONModel(oShipments);
        this.getView().setModel(shipmentModel);

        // // Get single set of shipments once
        // this.getShipments(collRefShipments);

        //Real Time Shipments
        this.getRealTimeShipments(collRefShipments);
      },

      // getShipments: function (collRefShipments) {
      //   collRefShipments.get().then(
      //     function (collection) {
      //       var shipmentModel = this.getView().getModel();
      //       var shipmentData = shipmentModel.getData();
      //       var shipments = collection.docs.map(function (docShipment) {
      //         return docShipment.data();
      //       });
      //       shipmentData.shipments = shipments;
      //       this.getView().byId("shipmentTable").getBinding("items").refresh();
      //     }.bind(this)
      //   );
      // },

      getRealTimeShipments: function (collRefShipments) {
        // The onSnapshot the keep the data up to date in case of added,
        // modified or removed data in the Firestor database
        collRefShipments.onSnapshot(
          function (snapshot) {
            // Get the shipment model
            var shipmentModel = this.getView().getModel();
            // Get all the shipments
            var shipmentData = shipmentModel.getData();

            // Get the current added/modified/removed document (shipment)
            // of the collection (shipments)
            snapshot.docChanges().forEach(function (change) {
              // set id (to know which document is modifed and
              // replace it on change.Type == modified)
              // and data of firebase document
              var oShipment = change.doc.data();
              oShipment.id = change.doc.id;

              // Added document (shipment) add to arrat
              if (change.type === "added") {
                shipmentData.shipments.push(oShipment);
              }
              // Modified document (find its index and change current doc
              // with the updated version)
              else if (change.type === "modified") {
                var index = shipmentData.shipments
                  .map(function (shipment) {
                    return shipment.id;
                  })
                  .indexOf(oShipment.id);
                shipmentData.shipments[index] = oShipment;
              }
              // Removed document (find index and remove it from the shipments array)
              else if (change.type === "removed") {
                var index = shipmentData.shipments
                  .map(function (shipment) {
                    return shipment.id;
                  })
                  .indexOf(oShipment.id);
                shipmentData.shipments.splice(index, 1);
              }
            });

            //Refresh your model and the binding of the items in the table
            this.getView().getModel().refresh(true);
            this.getView().byId("shipmentTable").getBinding("items").refresh();
          }.bind(this)
        );
      },

      //Fragment and CRUD Controls
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


      closeDialog: function (oEvent) {
        // if (
        //   this.getView()
        //     .getModel("shipmentModel")
        //     .getContext("/currentShipment")
        //     .getObject()
        // ) {
        //   this.clearAddedShipment(oEvent);
        // }
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
        var me = this;
        var shipmentId = oEvent.getSource().data().shipment.id;
        var shipmentCode = oEvent.getSource().data().shipment.code;
        MessageBox.confirm(
          "Are you sure you want to delete the shipment: " + shipmentCode + "?",
          {
            actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
            onClose: function (sAction) {
              if (sAction === "YES") {
                me.collRefShipments
                  .doc(shipmentId)
                  .delete()
                  .then(
                    function () {
                      me.getView()
                        .byId("shipmentTable")
                        .getBinding("items")
                        .refresh();
                      me.showMessageToast(
                        "Shipment: " + shipmentCode + " deleted successfully."
                      );
                    }.bind(me)
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
