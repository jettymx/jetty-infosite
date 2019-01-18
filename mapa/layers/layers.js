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
var format_ARAGONPOLANCO_0 = new ol.format.GeoJSON();
var features_ARAGONPOLANCO_0 = format_ARAGONPOLANCO_0.readFeatures(json_ARAGONPOLANCO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAGONPOLANCO_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ARAGONPOLANCO_0.addFeatures(features_ARAGONPOLANCO_0);var lyr_ARAGONPOLANCO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARAGONPOLANCO_0, 
                style: style_ARAGONPOLANCO_0,
    title: 'ARAGON - POLANCO<br />\
    <img src="styles/legend/ARAGONPOLANCO_0_0.png" /> ASCENSO<br />\
    <img src="styles/legend/ARAGONPOLANCO_0_1.png" /> DESCENSO<br />'
        });var format_ARAGONSANTAFE_1 = new ol.format.GeoJSON();
var features_ARAGONSANTAFE_1 = format_ARAGONSANTAFE_1.readFeatures(json_ARAGONSANTAFE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAGONSANTAFE_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ARAGONSANTAFE_1.addFeatures(features_ARAGONSANTAFE_1);var lyr_ARAGONSANTAFE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARAGONSANTAFE_1, 
                style: style_ARAGONSANTAFE_1,
    title: 'ARAGON - SANTA FE<br />\
    <img src="styles/legend/ARAGONSANTAFE_1_0.png" /> ASCENSO<br />\
    <img src="styles/legend/ARAGONSANTAFE_1_1.png" /> DESCENSO<br />'
        });var format_VIVEROS_MAQ_SNJERONIMOSANTAFE_2 = new ol.format.GeoJSON();
var features_VIVEROS_MAQ_SNJERONIMOSANTAFE_2 = format_VIVEROS_MAQ_SNJERONIMOSANTAFE_2.readFeatures(json_VIVEROS_MAQ_SNJERONIMOSANTAFE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIVEROS_MAQ_SNJERONIMOSANTAFE_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VIVEROS_MAQ_SNJERONIMOSANTAFE_2.addFeatures(features_VIVEROS_MAQ_SNJERONIMOSANTAFE_2);var lyr_VIVEROS_MAQ_SNJERONIMOSANTAFE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIVEROS_MAQ_SNJERONIMOSANTAFE_2, 
                style: style_VIVEROS_MAQ_SNJERONIMOSANTAFE_2,
    title: 'VIVEROS_MAQ_SN JERONIMO - SANTA FE<br />\
    <img src="styles/legend/VIVEROS_MAQ_SNJERONIMOSANTAFE_2_0.png" /> ASCENSO<br />\
    <img src="styles/legend/VIVEROS_MAQ_SNJERONIMOSANTAFE_2_1.png" /> DESCENSO<br />'
        });var format_PEDREGALSANTAFE_3 = new ol.format.GeoJSON();
var features_PEDREGALSANTAFE_3 = format_PEDREGALSANTAFE_3.readFeatures(json_PEDREGALSANTAFE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEDREGALSANTAFE_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PEDREGALSANTAFE_3.addFeatures(features_PEDREGALSANTAFE_3);var lyr_PEDREGALSANTAFE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEDREGALSANTAFE_3, 
                style: style_PEDREGALSANTAFE_3,
    title: 'PEDREGAL - SANTA FE<br />\
    <img src="styles/legend/PEDREGALSANTAFE_3_0.png" /> ASCENSO<br />\
    <img src="styles/legend/PEDREGALSANTAFE_3_1.png" /> DESCENSO<br />'
        });var format_JOYASANTAFE_4 = new ol.format.GeoJSON();
var features_JOYASANTAFE_4 = format_JOYASANTAFE_4.readFeatures(json_JOYASANTAFE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JOYASANTAFE_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JOYASANTAFE_4.addFeatures(features_JOYASANTAFE_4);var lyr_JOYASANTAFE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JOYASANTAFE_4, 
                style: style_JOYASANTAFE_4,
    title: 'JOYA - SANTA FE<br />\
    <img src="styles/legend/JOYASANTAFE_4_0.png" /> ASCENSO<br />\
    <img src="styles/legend/JOYASANTAFE_4_1.png" /> DESCENSO<br />'
        });var format_COSTCOCOAPAAUDITORIO_5 = new ol.format.GeoJSON();
var features_COSTCOCOAPAAUDITORIO_5 = format_COSTCOCOAPAAUDITORIO_5.readFeatures(json_COSTCOCOAPAAUDITORIO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COSTCOCOAPAAUDITORIO_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_COSTCOCOAPAAUDITORIO_5.addFeatures(features_COSTCOCOAPAAUDITORIO_5);var lyr_COSTCOCOAPAAUDITORIO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COSTCOCOAPAAUDITORIO_5, 
                style: style_COSTCOCOAPAAUDITORIO_5,
    title: 'COSTCO COAPA - AUDITORIO<br />\
    <img src="styles/legend/COSTCOCOAPAAUDITORIO_5_0.png" /> ASCENSO<br />\
    <img src="styles/legend/COSTCOCOAPAAUDITORIO_5_1.png" /> DESCENSO<br />'
        });var format_ACOXPASANTAFE_6 = new ol.format.GeoJSON();
var features_ACOXPASANTAFE_6 = format_ACOXPASANTAFE_6.readFeatures(json_ACOXPASANTAFE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACOXPASANTAFE_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACOXPASANTAFE_6.addFeatures(features_ACOXPASANTAFE_6);var lyr_ACOXPASANTAFE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACOXPASANTAFE_6, 
                style: style_ACOXPASANTAFE_6,
    title: 'ACOXPA - SANTA FE<br />\
    <img src="styles/legend/ACOXPASANTAFE_6_0.png" /> ASCENSO<br />\
    <img src="styles/legend/ACOXPASANTAFE_6_1.png" /> DESCENSO<br />'
        });var format_ACOXPACOAPASANTAFE_7 = new ol.format.GeoJSON();
var features_ACOXPACOAPASANTAFE_7 = format_ACOXPACOAPASANTAFE_7.readFeatures(json_ACOXPACOAPASANTAFE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACOXPACOAPASANTAFE_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACOXPACOAPASANTAFE_7.addFeatures(features_ACOXPACOAPASANTAFE_7);var lyr_ACOXPACOAPASANTAFE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACOXPACOAPASANTAFE_7, 
                style: style_ACOXPACOAPASANTAFE_7,
    title: 'ACOXPA - COAPA - SANTA FE<br />\
    <img src="styles/legend/ACOXPACOAPASANTAFE_7_0.png" /> ASCENSO<br />\
    <img src="styles/legend/ACOXPACOAPASANTAFE_7_1.png" /> DESCENSO<br />'
        });var format_ACOXPAAUDITORIO_8 = new ol.format.GeoJSON();
var features_ACOXPAAUDITORIO_8 = format_ACOXPAAUDITORIO_8.readFeatures(json_ACOXPAAUDITORIO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACOXPAAUDITORIO_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACOXPAAUDITORIO_8.addFeatures(features_ACOXPAAUDITORIO_8);var lyr_ACOXPAAUDITORIO_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACOXPAAUDITORIO_8, 
                style: style_ACOXPAAUDITORIO_8,
    title: 'ACOXPA - AUDITORIO<br />\
    <img src="styles/legend/ACOXPAAUDITORIO_8_0.png" /> ASCENSO<br />\
    <img src="styles/legend/ACOXPAAUDITORIO_8_1.png" /> DESCENSO<br />'
        });var format_TACUBAYASANTAFE_9 = new ol.format.GeoJSON();
var features_TACUBAYASANTAFE_9 = format_TACUBAYASANTAFE_9.readFeatures(json_TACUBAYASANTAFE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACUBAYASANTAFE_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TACUBAYASANTAFE_9.addFeatures(features_TACUBAYASANTAFE_9);var lyr_TACUBAYASANTAFE_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TACUBAYASANTAFE_9, 
                style: style_TACUBAYASANTAFE_9,
    title: 'TACUBAYA - SANTA FE<br />\
    <img src="styles/legend/TACUBAYASANTAFE_9_0.png" /> ASCENSO<br />\
    <img src="styles/legend/TACUBAYASANTAFE_9_1.png" /> DESCENSO<br />'
        });var format_REFORMABOSQUES_10 = new ol.format.GeoJSON();
var features_REFORMABOSQUES_10 = format_REFORMABOSQUES_10.readFeatures(json_REFORMABOSQUES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFORMABOSQUES_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REFORMABOSQUES_10.addFeatures(features_REFORMABOSQUES_10);var lyr_REFORMABOSQUES_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFORMABOSQUES_10, 
                style: style_REFORMABOSQUES_10,
    title: 'REFORMA - BOSQUES<br />\
    <img src="styles/legend/REFORMABOSQUES_10_0.png" /> ASCENSO<br />\
    <img src="styles/legend/REFORMABOSQUES_10_1.png" /> DESCENSO<br />'
        });var format_REFORMASANTAFE_11 = new ol.format.GeoJSON();
var features_REFORMASANTAFE_11 = format_REFORMASANTAFE_11.readFeatures(json_REFORMASANTAFE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFORMASANTAFE_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REFORMASANTAFE_11.addFeatures(features_REFORMASANTAFE_11);var lyr_REFORMASANTAFE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFORMASANTAFE_11, 
                style: style_REFORMASANTAFE_11,
    title: 'REFORMA - SANTA FE<br />\
    <img src="styles/legend/REFORMASANTAFE_11_0.png" /> ASCENSO<br />\
    <img src="styles/legend/REFORMASANTAFE_11_1.png" /> DESCENSO<br />'
        });var format_POLANCOSANTAFE_12 = new ol.format.GeoJSON();
var features_POLANCOSANTAFE_12 = format_POLANCOSANTAFE_12.readFeatures(json_POLANCOSANTAFE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLANCOSANTAFE_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_POLANCOSANTAFE_12.addFeatures(features_POLANCOSANTAFE_12);var lyr_POLANCOSANTAFE_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLANCOSANTAFE_12, 
                style: style_POLANCOSANTAFE_12,
    title: 'POLANCO - SANTA FE<br />\
    <img src="styles/legend/POLANCOSANTAFE_12_0.png" /> ASCENSO<br />\
    <img src="styles/legend/POLANCOSANTAFE_12_1.png" /> DESCENSO<br />'
        });var format_JUANACATLANSANTAFE_13 = new ol.format.GeoJSON();
var features_JUANACATLANSANTAFE_13 = format_JUANACATLANSANTAFE_13.readFeatures(json_JUANACATLANSANTAFE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUANACATLANSANTAFE_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JUANACATLANSANTAFE_13.addFeatures(features_JUANACATLANSANTAFE_13);var lyr_JUANACATLANSANTAFE_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JUANACATLANSANTAFE_13, 
                style: style_JUANACATLANSANTAFE_13,
    title: 'JUANACATLAN - SANTA FE<br />\
    <img src="styles/legend/JUANACATLANSANTAFE_13_0.png" /> ASCENSO<br />\
    <img src="styles/legend/JUANACATLANSANTAFE_13_1.png" /> DESCENSO<br />'
        });var format_DELVALLESANTAFE_14 = new ol.format.GeoJSON();
var features_DELVALLESANTAFE_14 = format_DELVALLESANTAFE_14.readFeatures(json_DELVALLESANTAFE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DELVALLESANTAFE_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DELVALLESANTAFE_14.addFeatures(features_DELVALLESANTAFE_14);var lyr_DELVALLESANTAFE_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DELVALLESANTAFE_14, 
                style: style_DELVALLESANTAFE_14,
    title: 'DEL VALLE - SANTA FE<br />\
    <img src="styles/legend/DELVALLESANTAFE_14_0.png" /> ASCENSO<br />\
    <img src="styles/legend/DELVALLESANTAFE_14_1.png" /> DESCENSO<br />'
        });var format_CHAPULTEPECCIRUELOS_15 = new ol.format.GeoJSON();
var features_CHAPULTEPECCIRUELOS_15 = format_CHAPULTEPECCIRUELOS_15.readFeatures(json_CHAPULTEPECCIRUELOS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHAPULTEPECCIRUELOS_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CHAPULTEPECCIRUELOS_15.addFeatures(features_CHAPULTEPECCIRUELOS_15);var lyr_CHAPULTEPECCIRUELOS_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHAPULTEPECCIRUELOS_15, 
                style: style_CHAPULTEPECCIRUELOS_15,
    title: 'CHAPULTEPEC - CIRUELOS<br />\
    <img src="styles/legend/CHAPULTEPECCIRUELOS_15_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CHAPULTEPECCIRUELOS_15_1.png" /> DESCENSO<br />'
        });var format_CHABACANOSANTAFE_16 = new ol.format.GeoJSON();
var features_CHABACANOSANTAFE_16 = format_CHABACANOSANTAFE_16.readFeatures(json_CHABACANOSANTAFE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHABACANOSANTAFE_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CHABACANOSANTAFE_16.addFeatures(features_CHABACANOSANTAFE_16);var lyr_CHABACANOSANTAFE_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHABACANOSANTAFE_16, 
                style: style_CHABACANOSANTAFE_16,
    title: 'CHABACANO - SANTA FE<br />\
    <img src="styles/legend/CHABACANOSANTAFE_16_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CHABACANOSANTAFE_16_1.png" /> DESCENSO<br />'
        });var format_CIBELESSEVILLASANTAFE_17 = new ol.format.GeoJSON();
var features_CIBELESSEVILLASANTAFE_17 = format_CIBELESSEVILLASANTAFE_17.readFeatures(json_CIBELESSEVILLASANTAFE_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIBELESSEVILLASANTAFE_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CIBELESSEVILLASANTAFE_17.addFeatures(features_CIBELESSEVILLASANTAFE_17);var lyr_CIBELESSEVILLASANTAFE_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIBELESSEVILLASANTAFE_17, 
                style: style_CIBELESSEVILLASANTAFE_17,
    title: 'CIBELES - SEVILLA - SANTA FE<br />\
    <img src="styles/legend/CIBELESSEVILLASANTAFE_17_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CIBELESSEVILLASANTAFE_17_1.png" /> DESCENSO<br />'
        });var format_VALLEDORADOPOLANCOREFORMA_18 = new ol.format.GeoJSON();
var features_VALLEDORADOPOLANCOREFORMA_18 = format_VALLEDORADOPOLANCOREFORMA_18.readFeatures(json_VALLEDORADOPOLANCOREFORMA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALLEDORADOPOLANCOREFORMA_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VALLEDORADOPOLANCOREFORMA_18.addFeatures(features_VALLEDORADOPOLANCOREFORMA_18);var lyr_VALLEDORADOPOLANCOREFORMA_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VALLEDORADOPOLANCOREFORMA_18, 
                style: style_VALLEDORADOPOLANCOREFORMA_18,
    title: 'VALLE DORADO - POLANCO - REFORMA<br />\
    <img src="styles/legend/VALLEDORADOPOLANCOREFORMA_18_0.png" /> ASCENSO<br />\
    <img src="styles/legend/VALLEDORADOPOLANCOREFORMA_18_1.png" /> DESCENSO<br />'
        });var format_VALLEDORADOLOMASVERDESSANTAFE_19 = new ol.format.GeoJSON();
var features_VALLEDORADOLOMASVERDESSANTAFE_19 = format_VALLEDORADOLOMASVERDESSANTAFE_19.readFeatures(json_VALLEDORADOLOMASVERDESSANTAFE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALLEDORADOLOMASVERDESSANTAFE_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VALLEDORADOLOMASVERDESSANTAFE_19.addFeatures(features_VALLEDORADOLOMASVERDESSANTAFE_19);var lyr_VALLEDORADOLOMASVERDESSANTAFE_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VALLEDORADOLOMASVERDESSANTAFE_19, 
                style: style_VALLEDORADOLOMASVERDESSANTAFE_19,
    title: 'VALLE DORADO - LOMAS VERDES - SANTA FE<br />\
    <img src="styles/legend/VALLEDORADOLOMASVERDESSANTAFE_19_0.png" /> ASCENSO<br />\
    <img src="styles/legend/VALLEDORADOLOMASVERDESSANTAFE_19_1.png" /> DESCENSO<br />'
        });var format_TOREOSANTAFE_20 = new ol.format.GeoJSON();
var features_TOREOSANTAFE_20 = format_TOREOSANTAFE_20.readFeatures(json_TOREOSANTAFE_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOREOSANTAFE_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TOREOSANTAFE_20.addFeatures(features_TOREOSANTAFE_20);var lyr_TOREOSANTAFE_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOREOSANTAFE_20, 
                style: style_TOREOSANTAFE_20,
    title: 'TOREO - SANTA FE<br />\
    <img src="styles/legend/TOREOSANTAFE_20_0.png" /> ASCENSO<br />\
    <img src="styles/legend/TOREOSANTAFE_20_1.png" /> DESCENSO<br />'
        });var format_MUNDOESANTAFECHAMAPA_21 = new ol.format.GeoJSON();
var features_MUNDOESANTAFECHAMAPA_21 = format_MUNDOESANTAFECHAMAPA_21.readFeatures(json_MUNDOESANTAFECHAMAPA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNDOESANTAFECHAMAPA_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MUNDOESANTAFECHAMAPA_21.addFeatures(features_MUNDOESANTAFECHAMAPA_21);var lyr_MUNDOESANTAFECHAMAPA_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNDOESANTAFECHAMAPA_21, 
                style: style_MUNDOESANTAFECHAMAPA_21,
    title: 'MUNDO E - SANTA FE (CHAMAPA)<br />\
    <img src="styles/legend/MUNDOESANTAFECHAMAPA_21_0.png" /> ASCENSO<br />\
    <img src="styles/legend/MUNDOESANTAFECHAMAPA_21_1.png" /> DESCENSO<br />'
        });var format_CUAUTITLANSANTAFE_22 = new ol.format.GeoJSON();
var features_CUAUTITLANSANTAFE_22 = format_CUAUTITLANSANTAFE_22.readFeatures(json_CUAUTITLANSANTAFE_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANSANTAFE_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANSANTAFE_22.addFeatures(features_CUAUTITLANSANTAFE_22);var lyr_CUAUTITLANSANTAFE_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUAUTITLANSANTAFE_22, 
                style: style_CUAUTITLANSANTAFE_22,
    title: 'CUAUTITLAN - SANTA FE<br />\
    <img src="styles/legend/CUAUTITLANSANTAFE_22_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CUAUTITLANSANTAFE_22_1.png" /> DESCENSO<br />'
        });var format_CUAUTITLANEXPRESSPOLANCOREFORMA_23 = new ol.format.GeoJSON();
var features_CUAUTITLANEXPRESSPOLANCOREFORMA_23 = format_CUAUTITLANEXPRESSPOLANCOREFORMA_23.readFeatures(json_CUAUTITLANEXPRESSPOLANCOREFORMA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANEXPRESSPOLANCOREFORMA_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANEXPRESSPOLANCOREFORMA_23.addFeatures(features_CUAUTITLANEXPRESSPOLANCOREFORMA_23);var lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUAUTITLANEXPRESSPOLANCOREFORMA_23, 
                style: style_CUAUTITLANEXPRESSPOLANCOREFORMA_23,
    title: 'CUAUTITLAN (EXPRESS) - POLANCO - REFORMA<br />\
    <img src="styles/legend/CUAUTITLANEXPRESSPOLANCOREFORMA_23_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CUAUTITLANEXPRESSPOLANCOREFORMA_23_1.png" /> DESCENSO<br />'
        });var format_CUAUTITLANEXPRESSSANTAFE_24 = new ol.format.GeoJSON();
var features_CUAUTITLANEXPRESSSANTAFE_24 = format_CUAUTITLANEXPRESSSANTAFE_24.readFeatures(json_CUAUTITLANEXPRESSSANTAFE_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANEXPRESSSANTAFE_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANEXPRESSSANTAFE_24.addFeatures(features_CUAUTITLANEXPRESSSANTAFE_24);var lyr_CUAUTITLANEXPRESSSANTAFE_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUAUTITLANEXPRESSSANTAFE_24, 
                style: style_CUAUTITLANEXPRESSSANTAFE_24,
    title: 'CUAUTITLAN (EXPRESS) - SANTA FE<br />\
    <img src="styles/legend/CUAUTITLANEXPRESSSANTAFE_24_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CUAUTITLANEXPRESSSANTAFE_24_1.png" /> DESCENSO<br />'
        });var format_CUAUTITLANLOMASVERDESSANTAFE_25 = new ol.format.GeoJSON();
var features_CUAUTITLANLOMASVERDESSANTAFE_25 = format_CUAUTITLANLOMASVERDESSANTAFE_25.readFeatures(json_CUAUTITLANLOMASVERDESSANTAFE_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUAUTITLANLOMASVERDESSANTAFE_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUAUTITLANLOMASVERDESSANTAFE_25.addFeatures(features_CUAUTITLANLOMASVERDESSANTAFE_25);var lyr_CUAUTITLANLOMASVERDESSANTAFE_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUAUTITLANLOMASVERDESSANTAFE_25, 
                style: style_CUAUTITLANLOMASVERDESSANTAFE_25,
    title: 'CUAUTITLAN - LOMAS VERDES - SANTA FE<br />\
    <img src="styles/legend/CUAUTITLANLOMASVERDESSANTAFE_25_0.png" /> ASCENSO<br />\
    <img src="styles/legend/CUAUTITLANLOMASVERDESSANTAFE_25_1.png" /> DESCENSO<br />'
        });var format_COACALCOPOLANCOREFORMA_26 = new ol.format.GeoJSON();
var features_COACALCOPOLANCOREFORMA_26 = format_COACALCOPOLANCOREFORMA_26.readFeatures(json_COACALCOPOLANCOREFORMA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COACALCOPOLANCOREFORMA_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_COACALCOPOLANCOREFORMA_26.addFeatures(features_COACALCOPOLANCOREFORMA_26);var lyr_COACALCOPOLANCOREFORMA_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COACALCOPOLANCOREFORMA_26, 
                style: style_COACALCOPOLANCOREFORMA_26,
    title: 'COACALCO - POLANCO - REFORMA<br />\
    <img src="styles/legend/COACALCOPOLANCOREFORMA_26_0.png" /> ASCENSO<br />\
    <img src="styles/legend/COACALCOPOLANCOREFORMA_26_1.png" /> DESCENSO<br />'
        });var format_AZCAPOTZALCOPOLANCOSANTAFE_27 = new ol.format.GeoJSON();
var features_AZCAPOTZALCOPOLANCOSANTAFE_27 = format_AZCAPOTZALCOPOLANCOSANTAFE_27.readFeatures(json_AZCAPOTZALCOPOLANCOSANTAFE_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AZCAPOTZALCOPOLANCOSANTAFE_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AZCAPOTZALCOPOLANCOSANTAFE_27.addFeatures(features_AZCAPOTZALCOPOLANCOSANTAFE_27);var lyr_AZCAPOTZALCOPOLANCOSANTAFE_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AZCAPOTZALCOPOLANCOSANTAFE_27, 
                style: style_AZCAPOTZALCOPOLANCOSANTAFE_27,
    title: 'AZCAPOTZALCO - POLANCO - SANTA FE<br />\
    <img src="styles/legend/AZCAPOTZALCOPOLANCOSANTAFE_27_0.png" /> ASCENSO<br />\
    <img src="styles/legend/AZCAPOTZALCOPOLANCOSANTAFE_27_1.png" /> DESCENSO<br />'
        });var format_ATIZAPANSANTAFE_28 = new ol.format.GeoJSON();
var features_ATIZAPANSANTAFE_28 = format_ATIZAPANSANTAFE_28.readFeatures(json_ATIZAPANSANTAFE_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATIZAPANSANTAFE_28 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATIZAPANSANTAFE_28.addFeatures(features_ATIZAPANSANTAFE_28);var lyr_ATIZAPANSANTAFE_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATIZAPANSANTAFE_28, 
                style: style_ATIZAPANSANTAFE_28,
    title: 'ATIZAPAN - SANTA FE<br />\
    <img src="styles/legend/ATIZAPANSANTAFE_28_0.png" /> ASCENSO<br />\
    <img src="styles/legend/ATIZAPANSANTAFE_28_1.png" /> DESCENSO<br />'
        });
var group_SURSANTAFEyPOLANCO = new ol.layer.Group({
                                layers: [lyr_VIVEROS_MAQ_SNJERONIMOSANTAFE_2,lyr_PEDREGALSANTAFE_3,lyr_JOYASANTAFE_4,lyr_COSTCOCOAPAAUDITORIO_5,lyr_ACOXPASANTAFE_6,lyr_ACOXPACOAPASANTAFE_7,lyr_ACOXPAAUDITORIO_8,],
                                title: "SUR ------>  SANTA FE y POLANCO"});
var group_CENTROSANTAFEyPOLANCO = new ol.layer.Group({
                                layers: [lyr_TACUBAYASANTAFE_9,lyr_REFORMABOSQUES_10,lyr_REFORMASANTAFE_11,lyr_POLANCOSANTAFE_12,lyr_JUANACATLANSANTAFE_13,lyr_DELVALLESANTAFE_14,lyr_CHAPULTEPECCIRUELOS_15,lyr_CHABACANOSANTAFE_16,lyr_CIBELESSEVILLASANTAFE_17,],
                                title: "CENTRO ------> SANTA FE y POLANCO"});
var group_NORTESANTAFEyPOLANCO = new ol.layer.Group({
                                layers: [lyr_VALLEDORADOPOLANCOREFORMA_18,lyr_VALLEDORADOLOMASVERDESSANTAFE_19,lyr_TOREOSANTAFE_20,lyr_MUNDOESANTAFECHAMAPA_21,lyr_CUAUTITLANSANTAFE_22,lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_23,lyr_CUAUTITLANEXPRESSSANTAFE_24,lyr_CUAUTITLANLOMASVERDESSANTAFE_25,lyr_COACALCOPOLANCOREFORMA_26,lyr_AZCAPOTZALCOPOLANCOSANTAFE_27,lyr_ATIZAPANSANTAFE_28,],
                                title: "NORTE ------> SANTA FE y POLANCO"});
var group_ORIENTESANTAFEyPOLANCO = new ol.layer.Group({
                                layers: [lyr_ARAGONPOLANCO_0,lyr_ARAGONSANTAFE_1,],
                                title: "ORIENTE ------> SANTA FE y POLANCO"});

lyr_ARAGONPOLANCO_0.setVisible(false);lyr_ARAGONSANTAFE_1.setVisible(false);lyr_VIVEROS_MAQ_SNJERONIMOSANTAFE_2.setVisible(false);lyr_PEDREGALSANTAFE_3.setVisible(false);lyr_JOYASANTAFE_4.setVisible(false);lyr_COSTCOCOAPAAUDITORIO_5.setVisible(false);lyr_ACOXPASANTAFE_6.setVisible(false);lyr_ACOXPACOAPASANTAFE_7.setVisible(false);lyr_ACOXPAAUDITORIO_8.setVisible(false);lyr_TACUBAYASANTAFE_9.setVisible(false);lyr_REFORMABOSQUES_10.setVisible(false);lyr_REFORMASANTAFE_11.setVisible(false);lyr_POLANCOSANTAFE_12.setVisible(false);lyr_JUANACATLANSANTAFE_13.setVisible(false);lyr_DELVALLESANTAFE_14.setVisible(false);lyr_CHAPULTEPECCIRUELOS_15.setVisible(false);lyr_CHABACANOSANTAFE_16.setVisible(false);lyr_CIBELESSEVILLASANTAFE_17.setVisible(false);lyr_VALLEDORADOPOLANCOREFORMA_18.setVisible(true);lyr_VALLEDORADOLOMASVERDESSANTAFE_19.setVisible(true);lyr_TOREOSANTAFE_20.setVisible(true);lyr_MUNDOESANTAFECHAMAPA_21.setVisible(true);lyr_CUAUTITLANSANTAFE_22.setVisible(true);lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_23.setVisible(true);lyr_CUAUTITLANEXPRESSSANTAFE_24.setVisible(true);lyr_CUAUTITLANLOMASVERDESSANTAFE_25.setVisible(true);lyr_COACALCOPOLANCOREFORMA_26.setVisible(true);lyr_AZCAPOTZALCOPOLANCOSANTAFE_27.setVisible(true);lyr_ATIZAPANSANTAFE_28.setVisible(true);
var layersList = [baseLayer,group_ORIENTESANTAFEyPOLANCO,group_SURSANTAFEyPOLANCO,group_CENTROSANTAFEyPOLANCO,group_NORTESANTAFEyPOLANCO];
lyr_ARAGONPOLANCO_0.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_ARAGONSANTAFE_1.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_VIVEROS_MAQ_SNJERONIMOSANTAFE_2.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_PEDREGALSANTAFE_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'RUTA': 'RUTA', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_JOYASANTAFE_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'RUTA': 'RUTA', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_COSTCOCOAPAAUDITORIO_5.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIOS': 'HORARIOS', 'TIPO': 'TIPO', });
lyr_ACOXPASANTAFE_6.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ACOXPACOAPASANTAFE_7.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ACOXPAAUDITORIO_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'RUTA': 'RUTA', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_TACUBAYASANTAFE_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'RUTA': 'RUTA', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_REFORMABOSQUES_10.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_REFORMASANTAFE_11.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_POLANCOSANTAFE_12.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_JUANACATLANSANTAFE_13.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'RUTA': 'RUTA', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_DELVALLESANTAFE_14.set('fieldAliases', {'RUTA': 'RUTA', 'NOMBRE': 'NOMBRE', 'HORARIOS': 'HORARIOS', 'TIPO': 'TIPO', });
lyr_CHAPULTEPECCIRUELOS_15.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_CHABACANOSANTAFE_16.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_CIBELESSEVILLASANTAFE_17.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_VALLEDORADOPOLANCOREFORMA_18.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_VALLEDORADOLOMASVERDESSANTAFE_19.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_TOREOSANTAFE_20.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_MUNDOESANTAFECHAMAPA_21.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_CUAUTITLANSANTAFE_22.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_23.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_CUAUTITLANEXPRESSSANTAFE_24.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_CUAUTITLANLOMASVERDESSANTAFE_25.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_COACALCOPOLANCOREFORMA_26.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_AZCAPOTZALCOPOLANCOSANTAFE_27.set('fieldAliases', {'Name': 'Name', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', });
lyr_ATIZAPANSANTAFE_28.set('fieldAliases', {'Name': 'Name', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'HORARIO': 'HORARIO', });
lyr_ARAGONPOLANCO_0.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_ARAGONSANTAFE_1.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_VIVEROS_MAQ_SNJERONIMOSANTAFE_2.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_PEDREGALSANTAFE_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'RUTA': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_JOYASANTAFE_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'RUTA': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_COSTCOCOAPAAUDITORIO_5.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIOS': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_ACOXPASANTAFE_6.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ACOXPACOAPASANTAFE_7.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ACOXPAAUDITORIO_8.set('fieldImages', {'NOMBRE': 'TextEdit', 'RUTA': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_TACUBAYASANTAFE_9.set('fieldImages', {'NOMBRE': 'TextEdit', 'RUTA': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_REFORMABOSQUES_10.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_REFORMASANTAFE_11.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_POLANCOSANTAFE_12.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_JUANACATLANSANTAFE_13.set('fieldImages', {'NOMBRE': 'TextEdit', 'RUTA': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_DELVALLESANTAFE_14.set('fieldImages', {'RUTA': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIOS': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CHAPULTEPECCIRUELOS_15.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CHABACANOSANTAFE_16.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CIBELESSEVILLASANTAFE_17.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_VALLEDORADOPOLANCOREFORMA_18.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_VALLEDORADOLOMASVERDESSANTAFE_19.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_TOREOSANTAFE_20.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_MUNDOESANTAFECHAMAPA_21.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CUAUTITLANSANTAFE_22.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_23.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CUAUTITLANEXPRESSSANTAFE_24.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CUAUTITLANLOMASVERDESSANTAFE_25.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_COACALCOPOLANCOREFORMA_26.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_AZCAPOTZALCOPOLANCOSANTAFE_27.set('fieldImages', {'Name': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_ATIZAPANSANTAFE_28.set('fieldImages', {'Name': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HORARIO': 'TextEdit', });
lyr_ARAGONPOLANCO_0.set('fieldLabels', {});
lyr_ARAGONSANTAFE_1.set('fieldLabels', {});
lyr_VIVEROS_MAQ_SNJERONIMOSANTAFE_2.set('fieldLabels', {});
lyr_PEDREGALSANTAFE_3.set('fieldLabels', {});
lyr_JOYASANTAFE_4.set('fieldLabels', {});
lyr_COSTCOCOAPAAUDITORIO_5.set('fieldLabels', {});
lyr_ACOXPASANTAFE_6.set('fieldLabels', {});
lyr_ACOXPACOAPASANTAFE_7.set('fieldLabels', {});
lyr_ACOXPAAUDITORIO_8.set('fieldLabels', {});
lyr_TACUBAYASANTAFE_9.set('fieldLabels', {});
lyr_REFORMABOSQUES_10.set('fieldLabels', {});
lyr_REFORMASANTAFE_11.set('fieldLabels', {});
lyr_POLANCOSANTAFE_12.set('fieldLabels', {});
lyr_JUANACATLANSANTAFE_13.set('fieldLabels', {});
lyr_DELVALLESANTAFE_14.set('fieldLabels', {});
lyr_CHAPULTEPECCIRUELOS_15.set('fieldLabels', {});
lyr_CHABACANOSANTAFE_16.set('fieldLabels', {});
lyr_CIBELESSEVILLASANTAFE_17.set('fieldLabels', {});
lyr_VALLEDORADOPOLANCOREFORMA_18.set('fieldLabels', {});
lyr_VALLEDORADOLOMASVERDESSANTAFE_19.set('fieldLabels', {});
lyr_TOREOSANTAFE_20.set('fieldLabels', {});
lyr_MUNDOESANTAFECHAMAPA_21.set('fieldLabels', {});
lyr_CUAUTITLANSANTAFE_22.set('fieldLabels', {});
lyr_CUAUTITLANEXPRESSPOLANCOREFORMA_23.set('fieldLabels', {});
lyr_CUAUTITLANEXPRESSSANTAFE_24.set('fieldLabels', {});
lyr_CUAUTITLANLOMASVERDESSANTAFE_25.set('fieldLabels', {});
lyr_COACALCOPOLANCOREFORMA_26.set('fieldLabels', {});
lyr_AZCAPOTZALCOPOLANCOSANTAFE_27.set('fieldLabels', {});
lyr_ATIZAPANSANTAFE_28.set('fieldLabels', {});
lyr_ATIZAPANSANTAFE_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});