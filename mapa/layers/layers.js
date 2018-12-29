var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_ZONAPONIENTEZONANORTE_0 = new ol.format.GeoJSON();
var features_ZONAPONIENTEZONANORTE_0 = format_ZONAPONIENTEZONANORTE_0.readFeatures(json_ZONAPONIENTEZONANORTE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAPONIENTEZONANORTE_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZONAPONIENTEZONANORTE_0.addFeatures(features_ZONAPONIENTEZONANORTE_0);var lyr_ZONAPONIENTEZONANORTE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAPONIENTEZONANORTE_0, 
                style: style_ZONAPONIENTEZONANORTE_0,
                title: '<img src="styles/legend/ZONAPONIENTEZONANORTE_0.png" /> ZONA PONIENTE - ZONA NORTE'
            });var format_VIVEROSMAQSANJERONIMOSANTAFE_1 = new ol.format.GeoJSON();
var features_VIVEROSMAQSANJERONIMOSANTAFE_1 = format_VIVEROSMAQSANJERONIMOSANTAFE_1.readFeatures(json_VIVEROSMAQSANJERONIMOSANTAFE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIVEROSMAQSANJERONIMOSANTAFE_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VIVEROSMAQSANJERONIMOSANTAFE_1.addFeatures(features_VIVEROSMAQSANJERONIMOSANTAFE_1);var lyr_VIVEROSMAQSANJERONIMOSANTAFE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIVEROSMAQSANJERONIMOSANTAFE_1, 
                style: style_VIVEROSMAQSANJERONIMOSANTAFE_1,
                title: '<img src="styles/legend/VIVEROSMAQSANJERONIMOSANTAFE_1.png" /> VIVEROS - MAQ - SAN JERONIMO - SANTA FE'
            });var format_VALLEDORADOPOLANCOREFORMA_2 = new ol.format.GeoJSON();
var features_VALLEDORADOPOLANCOREFORMA_2 = format_VALLEDORADOPOLANCOREFORMA_2.readFeatures(json_VALLEDORADOPOLANCOREFORMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALLEDORADOPOLANCOREFORMA_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VALLEDORADOPOLANCOREFORMA_2.addFeatures(features_VALLEDORADOPOLANCOREFORMA_2);var lyr_VALLEDORADOPOLANCOREFORMA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VALLEDORADOPOLANCOREFORMA_2, 
                style: style_VALLEDORADOPOLANCOREFORMA_2,
                title: '<img src="styles/legend/VALLEDORADOPOLANCOREFORMA_2.png" /> VALLE DORADO - POLANCO - REFORMA'
            });var format_VALLEDORADOLOMASVERDESSANTAFE_3 = new ol.format.GeoJSON();
var features_VALLEDORADOLOMASVERDESSANTAFE_3 = format_VALLEDORADOLOMASVERDESSANTAFE_3.readFeatures(json_VALLEDORADOLOMASVERDESSANTAFE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALLEDORADOLOMASVERDESSANTAFE_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VALLEDORADOLOMASVERDESSANTAFE_3.addFeatures(features_VALLEDORADOLOMASVERDESSANTAFE_3);var lyr_VALLEDORADOLOMASVERDESSANTAFE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VALLEDORADOLOMASVERDESSANTAFE_3, 
                style: style_VALLEDORADOLOMASVERDESSANTAFE_3,
                title: '<img src="styles/legend/VALLEDORADOLOMASVERDESSANTAFE_3.png" /> VALLE DORADO - LOMAS VERDES - SANTA FE'
            });var format_TOREOSANTAFE_4 = new ol.format.GeoJSON();
var features_TOREOSANTAFE_4 = format_TOREOSANTAFE_4.readFeatures(json_TOREOSANTAFE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOREOSANTAFE_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TOREOSANTAFE_4.addFeatures(features_TOREOSANTAFE_4);var lyr_TOREOSANTAFE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOREOSANTAFE_4, 
                style: style_TOREOSANTAFE_4,
                title: '<img src="styles/legend/TOREOSANTAFE_4.png" /> TOREO - SANTA FE'
            });var format_SANJERONIMOSANTAFE_5 = new ol.format.GeoJSON();
var features_SANJERONIMOSANTAFE_5 = format_SANJERONIMOSANTAFE_5.readFeatures(json_SANJERONIMOSANTAFE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANJERONIMOSANTAFE_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SANJERONIMOSANTAFE_5.addFeatures(features_SANJERONIMOSANTAFE_5);var lyr_SANJERONIMOSANTAFE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SANJERONIMOSANTAFE_5, 
                style: style_SANJERONIMOSANTAFE_5,
                title: '<img src="styles/legend/SANJERONIMOSANTAFE_5.png" /> SAN JERONIMO - SANTA FE'
            });var format_REFORMABOSQUES_6 = new ol.format.GeoJSON();
var features_REFORMABOSQUES_6 = format_REFORMABOSQUES_6.readFeatures(json_REFORMABOSQUES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFORMABOSQUES_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REFORMABOSQUES_6.addFeatures(features_REFORMABOSQUES_6);var lyr_REFORMABOSQUES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFORMABOSQUES_6, 
                style: style_REFORMABOSQUES_6,
                title: '<img src="styles/legend/REFORMABOSQUES_6.png" /> REFORMA - BOSQUES'
            });var format_REFORMASANTAFE_7 = new ol.format.GeoJSON();
var features_REFORMASANTAFE_7 = format_REFORMASANTAFE_7.readFeatures(json_REFORMASANTAFE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFORMASANTAFE_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REFORMASANTAFE_7.addFeatures(features_REFORMASANTAFE_7);var lyr_REFORMASANTAFE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFORMASANTAFE_7, 
                style: style_REFORMASANTAFE_7,
                title: '<img src="styles/legend/REFORMASANTAFE_7.png" /> REFORMA - SANTA FE'
            });var format_REFORMAPOLANCOCUAUTITLAN_8 = new ol.format.GeoJSON();
var features_REFORMAPOLANCOCUAUTITLAN_8 = format_REFORMAPOLANCOCUAUTITLAN_8.readFeatures(json_REFORMAPOLANCOCUAUTITLAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFORMAPOLANCOCUAUTITLAN_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REFORMAPOLANCOCUAUTITLAN_8.addFeatures(features_REFORMAPOLANCOCUAUTITLAN_8);var lyr_REFORMAPOLANCOCUAUTITLAN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFORMAPOLANCOCUAUTITLAN_8, 
                style: style_REFORMAPOLANCOCUAUTITLAN_8,
                title: '<img src="styles/legend/REFORMAPOLANCOCUAUTITLAN_8.png" /> REFORMA - POLANCO - CUAUTITLAN'
            });var format_POLANCOSANTAFE_9 = new ol.format.GeoJSON();
var features_POLANCOSANTAFE_9 = format_POLANCOSANTAFE_9.readFeatures(json_POLANCOSANTAFE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLANCOSANTAFE_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_POLANCOSANTAFE_9.addFeatures(features_POLANCOSANTAFE_9);var lyr_POLANCOSANTAFE_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLANCOSANTAFE_9, 
                style: style_POLANCOSANTAFE_9,
                title: '<img src="styles/legend/POLANCOSANTAFE_9.png" /> POLANCO - SANTA FE'
            });var format_POLANCOCUAUTITLAN_10 = new ol.format.GeoJSON();
var features_POLANCOCUAUTITLAN_10 = format_POLANCOCUAUTITLAN_10.readFeatures(json_POLANCOCUAUTITLAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLANCOCUAUTITLAN_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_POLANCOCUAUTITLAN_10.addFeatures(features_POLANCOCUAUTITLAN_10);var lyr_POLANCOCUAUTITLAN_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLANCOCUAUTITLAN_10, 
                style: style_POLANCOCUAUTITLAN_10,
                title: '<img src="styles/legend/POLANCOCUAUTITLAN_10.png" /> POLANCO - CUAUTITLAN'
            });var format_NAPOLESSANTAFE_11 = new ol.format.GeoJSON();
var features_NAPOLESSANTAFE_11 = format_NAPOLESSANTAFE_11.readFeatures(json_NAPOLESSANTAFE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAPOLESSANTAFE_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NAPOLESSANTAFE_11.addFeatures(features_NAPOLESSANTAFE_11);var lyr_NAPOLESSANTAFE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAPOLESSANTAFE_11, 
                style: style_NAPOLESSANTAFE_11,
                title: '<img src="styles/legend/NAPOLESSANTAFE_11.png" /> NAPOLES - SANTA FE'
            });var format_MUNDOESANTAFECHAMAPA_12 = new ol.format.GeoJSON();
var features_MUNDOESANTAFECHAMAPA_12 = format_MUNDOESANTAFECHAMAPA_12.readFeatures(json_MUNDOESANTAFECHAMAPA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNDOESANTAFECHAMAPA_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MUNDOESANTAFECHAMAPA_12.addFeatures(features_MUNDOESANTAFECHAMAPA_12);var lyr_MUNDOESANTAFECHAMAPA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNDOESANTAFECHAMAPA_12, 
                style: style_MUNDOESANTAFECHAMAPA_12,
                title: '<img src="styles/legend/MUNDOESANTAFECHAMAPA_12.png" /> MUNDO E - SANTA FE (CHAMAPA)'
            });var format_CUAUTITLANSANTAFE_13 = new ol.format.GeoJSON();
var features_CUAUTITLANSANTAFE_13 = format_CUAUTITLANSANTAFE_13.readFeatures(json_CUAUTITLANSANTAFE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANSANTAFE_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANSANTAFE_13.addFeatures(features_CUAUTITLANSANTAFE_13);var lyr_CUAUTITLANSANTAFE_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUAUTITLANSANTAFE_13, 
                style: style_CUAUTITLANSANTAFE_13,
                title: '<img src="styles/legend/CUAUTITLANSANTAFE_13.png" /> CUAUTITLAN - SANTA FE'
            });var format_DELVALLESANTAFE_14 = new ol.format.GeoJSON();
var features_DELVALLESANTAFE_14 = format_DELVALLESANTAFE_14.readFeatures(json_DELVALLESANTAFE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DELVALLESANTAFE_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DELVALLESANTAFE_14.addFeatures(features_DELVALLESANTAFE_14);cluster_DELVALLESANTAFE_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_DELVALLESANTAFE_14
});var lyr_DELVALLESANTAFE_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_DELVALLESANTAFE_14, 
                style: style_DELVALLESANTAFE_14,
                title: '<img src="styles/legend/DELVALLESANTAFE_14.png" /> DEL VALLE - SANTA FE'
            });var format_CUAUTITLANEXPRESSSANTAFE_15 = new ol.format.GeoJSON();
var features_CUAUTITLANEXPRESSSANTAFE_15 = format_CUAUTITLANEXPRESSSANTAFE_15.readFeatures(json_CUAUTITLANEXPRESSSANTAFE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANEXPRESSSANTAFE_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANEXPRESSSANTAFE_15.addFeatures(features_CUAUTITLANEXPRESSSANTAFE_15);cluster_CUAUTITLANEXPRESSSANTAFE_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CUAUTITLANEXPRESSSANTAFE_15
});var lyr_CUAUTITLANEXPRESSSANTAFE_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CUAUTITLANEXPRESSSANTAFE_15, 
                style: style_CUAUTITLANEXPRESSSANTAFE_15,
                title: '<img src="styles/legend/CUAUTITLANEXPRESSSANTAFE_15.png" /> CUAUTITLAN (EXPRESS) - SANTA FE'
            });var format_CUAUTITLANEXPRESSPOLANCOREFORMA_16 = new ol.format.GeoJSON();
var features_CUAUTITLANEXPRESSPOLANCOREFORMA_16 = format_CUAUTITLANEXPRESSPOLANCOREFORMA_16.readFeatures(json_CUAUTITLANEXPRESSPOLANCOREFORMA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANEXPRESSPOLANCOREFORMA_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANEXPRESSPOLANCOREFORMA_16.addFeatures(features_CUAUTITLANEXPRESSPOLANCOREFORMA_16);cluster_CUAUTITLANEXPRESSPOLANCOREFORMA_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CUAUTITLANEXPRESSPOLANCOREFORMA_16
});var lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_16 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CUAUTITLANEXPRESSPOLANCOREFORMA_16, 
                style: style_CUAUTITLANEXPRESSPOLANCOREFORMA_16,
                title: '<img src="styles/legend/CUAUTITLANEXPRESSPOLANCOREFORMA_16.png" /> CUAUTITLAN (EXPRESS) - POLANCO - REFORMA'
            });var format_COSTCOCOAPAAUDITORIO_17 = new ol.format.GeoJSON();
var features_COSTCOCOAPAAUDITORIO_17 = format_COSTCOCOAPAAUDITORIO_17.readFeatures(json_COSTCOCOAPAAUDITORIO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COSTCOCOAPAAUDITORIO_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_COSTCOCOAPAAUDITORIO_17.addFeatures(features_COSTCOCOAPAAUDITORIO_17);cluster_COSTCOCOAPAAUDITORIO_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_COSTCOCOAPAAUDITORIO_17
});var lyr_COSTCOCOAPAAUDITORIO_17 = new ol.layer.Vector({
                declutter: true,
                source:cluster_COSTCOCOAPAAUDITORIO_17, 
                style: style_COSTCOCOAPAAUDITORIO_17,
                title: '<img src="styles/legend/COSTCOCOAPAAUDITORIO_17.png" /> COSTCO COAPA - AUDITORIO'
            });var format_CUAUTITLANLOMASVERDESSANTAFE_18 = new ol.format.GeoJSON();
var features_CUAUTITLANLOMASVERDESSANTAFE_18 = format_CUAUTITLANLOMASVERDESSANTAFE_18.readFeatures(json_CUAUTITLANLOMASVERDESSANTAFE_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANLOMASVERDESSANTAFE_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANLOMASVERDESSANTAFE_18.addFeatures(features_CUAUTITLANLOMASVERDESSANTAFE_18);cluster_CUAUTITLANLOMASVERDESSANTAFE_18 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CUAUTITLANLOMASVERDESSANTAFE_18
});var lyr_CUAUTITLANLOMASVERDESSANTAFE_18 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CUAUTITLANLOMASVERDESSANTAFE_18, 
                style: style_CUAUTITLANLOMASVERDESSANTAFE_18,
                title: '<img src="styles/legend/CUAUTITLANLOMASVERDESSANTAFE_18.png" /> CUAUTITLAN - LOMAS VERDES - SANTA FE'
            });var format_CHABACANOSANTAFE_19 = new ol.format.GeoJSON();
var features_CHABACANOSANTAFE_19 = format_CHABACANOSANTAFE_19.readFeatures(json_CHABACANOSANTAFE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHABACANOSANTAFE_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CHABACANOSANTAFE_19.addFeatures(features_CHABACANOSANTAFE_19);cluster_CHABACANOSANTAFE_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CHABACANOSANTAFE_19
});var lyr_CHABACANOSANTAFE_19 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CHABACANOSANTAFE_19, 
                style: style_CHABACANOSANTAFE_19,
                title: '<img src="styles/legend/CHABACANOSANTAFE_19.png" /> CHABACANO - SANTA FE'
            });var format_CIBELESSEVILLASANTAFE_20 = new ol.format.GeoJSON();
var features_CIBELESSEVILLASANTAFE_20 = format_CIBELESSEVILLASANTAFE_20.readFeatures(json_CIBELESSEVILLASANTAFE_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIBELESSEVILLASANTAFE_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CIBELESSEVILLASANTAFE_20.addFeatures(features_CIBELESSEVILLASANTAFE_20);cluster_CIBELESSEVILLASANTAFE_20 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CIBELESSEVILLASANTAFE_20
});var lyr_CIBELESSEVILLASANTAFE_20 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CIBELESSEVILLASANTAFE_20, 
                style: style_CIBELESSEVILLASANTAFE_20,
                title: '<img src="styles/legend/CIBELESSEVILLASANTAFE_20.png" /> CIBELES - SEVILLA - SANTA FE'
            });var format_CHAPULTEPECCIRUELOS_21 = new ol.format.GeoJSON();
var features_CHAPULTEPECCIRUELOS_21 = format_CHAPULTEPECCIRUELOS_21.readFeatures(json_CHAPULTEPECCIRUELOS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHAPULTEPECCIRUELOS_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CHAPULTEPECCIRUELOS_21.addFeatures(features_CHAPULTEPECCIRUELOS_21);cluster_CHAPULTEPECCIRUELOS_21 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CHAPULTEPECCIRUELOS_21
});var lyr_CHAPULTEPECCIRUELOS_21 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CHAPULTEPECCIRUELOS_21, 
                style: style_CHAPULTEPECCIRUELOS_21,
                title: '<img src="styles/legend/CHAPULTEPECCIRUELOS_21.png" /> CHAPULTEPEC - CIRUELOS'
            });var format_AZCAPOTZALCOPOLANCOSANTAFE_22 = new ol.format.GeoJSON();
var features_AZCAPOTZALCOPOLANCOSANTAFE_22 = format_AZCAPOTZALCOPOLANCOSANTAFE_22.readFeatures(json_AZCAPOTZALCOPOLANCOSANTAFE_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AZCAPOTZALCOPOLANCOSANTAFE_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AZCAPOTZALCOPOLANCOSANTAFE_22.addFeatures(features_AZCAPOTZALCOPOLANCOSANTAFE_22);cluster_AZCAPOTZALCOPOLANCOSANTAFE_22 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AZCAPOTZALCOPOLANCOSANTAFE_22
});var lyr_AZCAPOTZALCOPOLANCOSANTAFE_22 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AZCAPOTZALCOPOLANCOSANTAFE_22, 
                style: style_AZCAPOTZALCOPOLANCOSANTAFE_22,
                title: '<img src="styles/legend/AZCAPOTZALCOPOLANCOSANTAFE_22.png" /> AZCAPOTZALCO - POLANCO - SANTA FE'
            });var format_ARAGONSANTAFE_23 = new ol.format.GeoJSON();
var features_ARAGONSANTAFE_23 = format_ARAGONSANTAFE_23.readFeatures(json_ARAGONSANTAFE_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAGONSANTAFE_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ARAGONSANTAFE_23.addFeatures(features_ARAGONSANTAFE_23);cluster_ARAGONSANTAFE_23 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ARAGONSANTAFE_23
});var lyr_ARAGONSANTAFE_23 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ARAGONSANTAFE_23, 
                style: style_ARAGONSANTAFE_23,
                title: '<img src="styles/legend/ARAGONSANTAFE_23.png" /> ARAGON - SANTA FE'
            });var format_ARAGONPOLANCO_24 = new ol.format.GeoJSON();
var features_ARAGONPOLANCO_24 = format_ARAGONPOLANCO_24.readFeatures(json_ARAGONPOLANCO_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAGONPOLANCO_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ARAGONPOLANCO_24.addFeatures(features_ARAGONPOLANCO_24);cluster_ARAGONPOLANCO_24 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ARAGONPOLANCO_24
});var lyr_ARAGONPOLANCO_24 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ARAGONPOLANCO_24, 
                style: style_ARAGONPOLANCO_24,
                title: '<img src="styles/legend/ARAGONPOLANCO_24.png" /> ARAGON - POLANCO'
            });var format_ACOXPASANTAFE_25 = new ol.format.GeoJSON();
var features_ACOXPASANTAFE_25 = format_ACOXPASANTAFE_25.readFeatures(json_ACOXPASANTAFE_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACOXPASANTAFE_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACOXPASANTAFE_25.addFeatures(features_ACOXPASANTAFE_25);cluster_ACOXPASANTAFE_25 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ACOXPASANTAFE_25
});var lyr_ACOXPASANTAFE_25 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ACOXPASANTAFE_25, 
                style: style_ACOXPASANTAFE_25,
                title: '<img src="styles/legend/ACOXPASANTAFE_25.png" /> ACOXPA - SANTA FE'
            });var format_ACOXPACOAPASANTAFE_26 = new ol.format.GeoJSON();
var features_ACOXPACOAPASANTAFE_26 = format_ACOXPACOAPASANTAFE_26.readFeatures(json_ACOXPACOAPASANTAFE_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACOXPACOAPASANTAFE_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACOXPACOAPASANTAFE_26.addFeatures(features_ACOXPACOAPASANTAFE_26);cluster_ACOXPACOAPASANTAFE_26 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ACOXPACOAPASANTAFE_26
});var lyr_ACOXPACOAPASANTAFE_26 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ACOXPACOAPASANTAFE_26, 
                style: style_ACOXPACOAPASANTAFE_26,
                title: '<img src="styles/legend/ACOXPACOAPASANTAFE_26.png" /> ACOXPA - COAPA - SANTA FE'
            });var format_ATIZAPANSANTAFE_27 = new ol.format.GeoJSON();
var features_ATIZAPANSANTAFE_27 = format_ATIZAPANSANTAFE_27.readFeatures(json_ATIZAPANSANTAFE_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATIZAPANSANTAFE_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATIZAPANSANTAFE_27.addFeatures(features_ATIZAPANSANTAFE_27);cluster_ATIZAPANSANTAFE_27 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ATIZAPANSANTAFE_27
});var lyr_ATIZAPANSANTAFE_27 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ATIZAPANSANTAFE_27, 
                style: style_ATIZAPANSANTAFE_27,
                title: '<img src="styles/legend/ATIZAPANSANTAFE_27.png" /> ATIZAPAN - SANTA FE'
            });

lyr_ZONAPONIENTEZONANORTE_0.setVisible(false);lyr_VIVEROSMAQSANJERONIMOSANTAFE_1.setVisible(false);lyr_VALLEDORADOPOLANCOREFORMA_2.setVisible(false);lyr_VALLEDORADOLOMASVERDESSANTAFE_3.setVisible(false);lyr_TOREOSANTAFE_4.setVisible(false);lyr_SANJERONIMOSANTAFE_5.setVisible(false);lyr_REFORMABOSQUES_6.setVisible(false);lyr_REFORMASANTAFE_7.setVisible(false);lyr_REFORMAPOLANCOCUAUTITLAN_8.setVisible(false);lyr_POLANCOSANTAFE_9.setVisible(false);lyr_POLANCOCUAUTITLAN_10.setVisible(false);lyr_NAPOLESSANTAFE_11.setVisible(false);lyr_MUNDOESANTAFECHAMAPA_12.setVisible(false);lyr_CUAUTITLANSANTAFE_13.setVisible(false);lyr_DELVALLESANTAFE_14.setVisible(true);lyr_CUAUTITLANEXPRESSSANTAFE_15.setVisible(true);lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_16.setVisible(true);lyr_COSTCOCOAPAAUDITORIO_17.setVisible(true);lyr_CUAUTITLANLOMASVERDESSANTAFE_18.setVisible(true);lyr_CHABACANOSANTAFE_19.setVisible(true);lyr_CIBELESSEVILLASANTAFE_20.setVisible(true);lyr_CHAPULTEPECCIRUELOS_21.setVisible(true);lyr_AZCAPOTZALCOPOLANCOSANTAFE_22.setVisible(true);lyr_ARAGONSANTAFE_23.setVisible(true);lyr_ARAGONPOLANCO_24.setVisible(true);lyr_ACOXPASANTAFE_25.setVisible(true);lyr_ACOXPACOAPASANTAFE_26.setVisible(true);lyr_ATIZAPANSANTAFE_27.setVisible(true);
var layersList = [baseLayer,lyr_ZONAPONIENTEZONANORTE_0,lyr_VIVEROSMAQSANJERONIMOSANTAFE_1,lyr_VALLEDORADOPOLANCOREFORMA_2,lyr_VALLEDORADOLOMASVERDESSANTAFE_3,lyr_TOREOSANTAFE_4,lyr_SANJERONIMOSANTAFE_5,lyr_REFORMABOSQUES_6,lyr_REFORMASANTAFE_7,lyr_REFORMAPOLANCOCUAUTITLAN_8,lyr_POLANCOSANTAFE_9,lyr_POLANCOCUAUTITLAN_10,lyr_NAPOLESSANTAFE_11,lyr_MUNDOESANTAFECHAMAPA_12,lyr_CUAUTITLANSANTAFE_13,lyr_DELVALLESANTAFE_14,lyr_CUAUTITLANEXPRESSSANTAFE_15,lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_16,lyr_COSTCOCOAPAAUDITORIO_17,lyr_CUAUTITLANLOMASVERDESSANTAFE_18,lyr_CHABACANOSANTAFE_19,lyr_CIBELESSEVILLASANTAFE_20,lyr_CHAPULTEPECCIRUELOS_21,lyr_AZCAPOTZALCOPOLANCOSANTAFE_22,lyr_ARAGONSANTAFE_23,lyr_ARAGONPOLANCO_24,lyr_ACOXPASANTAFE_25,lyr_ACOXPACOAPASANTAFE_26,lyr_ATIZAPANSANTAFE_27];
lyr_ZONAPONIENTEZONANORTE_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VIVEROSMAQSANJERONIMOSANTAFE_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VALLEDORADOPOLANCOREFORMA_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VALLEDORADOLOMASVERDESSANTAFE_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TOREOSANTAFE_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SANJERONIMOSANTAFE_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_REFORMABOSQUES_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_REFORMASANTAFE_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_REFORMAPOLANCOCUAUTITLAN_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLANCOSANTAFE_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLANCOCUAUTITLAN_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NAPOLESSANTAFE_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MUNDOESANTAFECHAMAPA_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CUAUTITLANSANTAFE_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DELVALLESANTAFE_14.set('fieldAliases', {'RUTA': 'RUTA', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIOS': 'HORARIOS', });
lyr_CUAUTITLANEXPRESSSANTAFE_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_COSTCOCOAPAAUDITORIO_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CUAUTITLANLOMASVERDESSANTAFE_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CHABACANOSANTAFE_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CIBELESSEVILLASANTAFE_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CHAPULTEPECCIRUELOS_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AZCAPOTZALCOPOLANCOSANTAFE_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ARAGONSANTAFE_23.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ARAGONPOLANCO_24.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ACOXPASANTAFE_25.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ACOXPACOAPASANTAFE_26.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ATIZAPANSANTAFE_27.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ZONAPONIENTEZONANORTE_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_VIVEROSMAQSANJERONIMOSANTAFE_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_VALLEDORADOPOLANCOREFORMA_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_VALLEDORADOLOMASVERDESSANTAFE_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TOREOSANTAFE_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SANJERONIMOSANTAFE_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_REFORMABOSQUES_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_REFORMASANTAFE_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_REFORMAPOLANCOCUAUTITLAN_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_POLANCOSANTAFE_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_POLANCOCUAUTITLAN_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_NAPOLESSANTAFE_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_MUNDOESANTAFECHAMAPA_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CUAUTITLANSANTAFE_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_DELVALLESANTAFE_14.set('fieldImages', {'RUTA': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIOS': 'TextEdit', });
lyr_CUAUTITLANEXPRESSSANTAFE_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_COSTCOCOAPAAUDITORIO_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CUAUTITLANLOMASVERDESSANTAFE_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CHABACANOSANTAFE_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CIBELESSEVILLASANTAFE_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CHAPULTEPECCIRUELOS_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AZCAPOTZALCOPOLANCOSANTAFE_22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ARAGONSANTAFE_23.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ARAGONPOLANCO_24.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ACOXPASANTAFE_25.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ACOXPACOAPASANTAFE_26.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ATIZAPANSANTAFE_27.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ZONAPONIENTEZONANORTE_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_VIVEROSMAQSANJERONIMOSANTAFE_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_VALLEDORADOPOLANCOREFORMA_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_VALLEDORADOLOMASVERDESSANTAFE_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TOREOSANTAFE_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SANJERONIMOSANTAFE_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_REFORMABOSQUES_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_REFORMASANTAFE_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_REFORMAPOLANCOCUAUTITLAN_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLANCOSANTAFE_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_POLANCOCUAUTITLAN_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NAPOLESSANTAFE_11.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MUNDOESANTAFECHAMAPA_12.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CUAUTITLANSANTAFE_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DELVALLESANTAFE_14.set('fieldLabels', {'RUTA': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'HORARIOS': 'no label', });
lyr_CUAUTITLANEXPRESSSANTAFE_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_16.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_COSTCOCOAPAAUDITORIO_17.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CUAUTITLANLOMASVERDESSANTAFE_18.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CHABACANOSANTAFE_19.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CIBELESSEVILLASANTAFE_20.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CHAPULTEPECCIRUELOS_21.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AZCAPOTZALCOPOLANCOSANTAFE_22.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ARAGONSANTAFE_23.set('fieldLabels', {'Name': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'HORARIO': 'no label', });
lyr_ARAGONPOLANCO_24.set('fieldLabels', {'Name': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'HORARIO': 'no label', });
lyr_ACOXPASANTAFE_25.set('fieldLabels', {'Name': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'HORARIO': 'no label', });
lyr_ACOXPACOAPASANTAFE_26.set('fieldLabels', {'Name': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'HORARIO': 'no label', });
lyr_ATIZAPANSANTAFE_27.set('fieldLabels', {'Name': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'HORARIO': 'no label', });
lyr_ATIZAPANSANTAFE_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});