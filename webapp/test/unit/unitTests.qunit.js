/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/training/exer1millares/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
