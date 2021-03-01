require(["esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/geometry/Extent",
        "esri/dijit/Scalebar",
        "esri/dijit/Legend",
        "esri/dijit/BasemapGallery",
        "esri/layers/FeatureLayer",
        "esri/dijit/Search",
        "esri/dijit/OverviewMap",
        "esri/toolbars/draw",
        "esri/graphic",
        "esri/dijit/PopupTemplate",

        "dojo/on",

        "dijit/layout/TabContainer",
        "dijit/layout/ContentPane",
        "dijit/layout/BorderContainer",
        "dojo/domReady!"],
        function(
          Map, ArcGISDynamicMapServiceLayer, Extent, Scalebar, Legend, BasemapGallery, FeatureLayer,  Search, OverviewMap,
          Draw, Graphic, on, PopupTemplate
        ) {
            ready(function () {

                // Parse DOM nodes decorated with the data-dojo-type attribute
                parser.parse();

                var sUrlQuakesLayer = "http://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0";

                
            
            });
        });