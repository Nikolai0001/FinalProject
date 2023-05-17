require([


    "esri/config"
    "esri/WebMap",
    "esri/MapView",
    "esri/widgets/Legend",
    "esri/widgets/Home"
], function(esriConfig, WebMap, MapView, Legend, Home) {
const webMap = new WebMap({
    portalItem: {
        id:"2945c54a98d24380a1670caab38935f1"
    }
})
const view = new MapView({
    container:"viewDiv"
    map: webMap
}) ;
const homeBtn = new Home({
    view:view
})
view.ui.add(homeBtn,"top-left")
} )