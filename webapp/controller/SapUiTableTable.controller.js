sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/ResizeHandler"
], function(Controller, ResizeHandler) {
	"use strict";

	return Controller.extend("LoadTest.LoadTest.controller.SapUiTableTable", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf LoadTest.LoadTest.view.SapUiTableTable
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf LoadTest.LoadTest.view.SapUiTableTable
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf LoadTest.LoadTest.view.SapUiTableTable
		 */
		onAfterRendering: function() {
			var oDomRef = this.byId("table").getDomRef();
			// TODO: Add resize handler
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf LoadTest.LoadTest.view.SapUiTableTable
		 */
		//	onExit: function() {
		//
		//	}

	});

});