var size = 0;
var placement = 'point';
function categories_JOYASANTAFE_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'ASCENSO':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [62, 66.242],
                  scale: 0.41935483871,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ascenso.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'DESCENSO':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [62, 66.243],
                  scale: 0.41935483871,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/descenso.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_JOYASANTAFE_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TIPO");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_JOYASANTAFE_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
