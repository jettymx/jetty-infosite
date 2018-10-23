var map = L.map('map', {
            zoomControl:true, maxZoom:20, minZoom:5
        })
        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        var bounds_group = new L.featureGroup([]);
        var basemap0 = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 20
        });
        basemap0.addTo(map);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        function pop_TRAZOSDERUTAS_0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ID'] !== null ? Autolinker.link(String(feature.properties['ID'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>DISTANCIA</strong><br />' + (feature.properties['DISTANCIA'] !== null ? Autolinker.link(String(feature.properties['DISTANCIA'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_TRAZOSDERUTAS_0_0(feature) {
            if (feature.properties['DISTANCIA'] >= 2736.125000 && feature.properties['DISTANCIA'] <= 14571.476000 ) {
                return {
                pane: 'pane_TRAZOSDERUTAS_0',
                opacity: 1,
                color: 'rgba(54,141,69,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
            }
            }
            if (feature.properties['DISTANCIA'] >= 14571.476000 && feature.properties['DISTANCIA'] <= 29651.942000 ) {
                return {
                pane: 'pane_TRAZOSDERUTAS_0',
                opacity: 1,
                color: 'rgba(27,116,157,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
            }
            }
            if (feature.properties['DISTANCIA'] >= 29651.942000 && feature.properties['DISTANCIA'] <= 42296.600000 ) {
                return {
                pane: 'pane_TRAZOSDERUTAS_0',
                opacity: 1,
                color: 'rgba(252,80,6,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
            }
            }
            if (feature.properties['DISTANCIA'] >= 42296.600000 && feature.properties['DISTANCIA'] <= 57063.681000 ) {
                return {
                pane: 'pane_TRAZOSDERUTAS_0',
                opacity: 1,
                color: 'rgba(202,0,32,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
            }
            }
        }
        map.createPane('pane_TRAZOSDERUTAS_0');
        map.getPane('pane_TRAZOSDERUTAS_0').style.zIndex = 400;
        map.getPane('pane_TRAZOSDERUTAS_0').style['mix-blend-mode'] = 'normal';
        var layer_TRAZOSDERUTAS_0 = new L.geoJson(json_TRAZOSDERUTAS_0, {
            attribution: '<a href=""></a>',
            pane: 'pane_TRAZOSDERUTAS_0',
            onEachFeature: pop_TRAZOSDERUTAS_0,
            style: style_TRAZOSDERUTAS_0_0,
        });
        bounds_group.addLayer(layer_TRAZOSDERUTAS_0);
        map.addLayer(layer_TRAZOSDERUTAS_0);
        function pop_Paradas_1(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['boarding_n'] !== null ? Autolinker.link(String(feature.properties['boarding_n'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['boarding_l'] !== null ? Autolinker.link(String(feature.properties['boarding_l'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['boarding_1'] !== null ? Autolinker.link(String(feature.properties['boarding_1'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Paradas_1_0() {
            return {
                pane: 'pane_Paradas_1',
                radius: 3.2,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(74,190,167,1.0)',
            }
        }
        map.createPane('pane_Paradas_1');
        map.getPane('pane_Paradas_1').style.zIndex = 401;
        map.getPane('pane_Paradas_1').style['mix-blend-mode'] = 'normal';
        var layer_Paradas_1 = new L.geoJson(json_Paradas_1, {
            attribution: '<a href=""></a>',
            pane: 'pane_Paradas_1',
            onEachFeature: pop_Paradas_1,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Paradas_1_0(feature));
            },
        });
        var cluster_Paradas_1 = new L.MarkerClusterGroup({showCoverageOnHover: false,
            spiderfyDistanceMultiplier: 2});
        cluster_Paradas_1.addLayer(layer_Paradas_1);

        bounds_group.addLayer(layer_Paradas_1);
        cluster_Paradas_1.addTo(map);
        function pop_df_estatal_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['CVEGEO'] !== null ? Autolinker.link(String(feature.properties['CVEGEO'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB1'] !== null ? Autolinker.link(String(feature.properties['POB1'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB2'] !== null ? Autolinker.link(String(feature.properties['POB2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB2_R'] !== null ? Autolinker.link(String(feature.properties['POB2_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB3'] !== null ? Autolinker.link(String(feature.properties['POB3'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB3_R'] !== null ? Autolinker.link(String(feature.properties['POB3_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB4'] !== null ? Autolinker.link(String(feature.properties['POB4'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB4_R'] !== null ? Autolinker.link(String(feature.properties['POB4_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB5'] !== null ? Autolinker.link(String(feature.properties['POB5'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB5_R'] !== null ? Autolinker.link(String(feature.properties['POB5_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB6'] !== null ? Autolinker.link(String(feature.properties['POB6'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB6_R'] !== null ? Autolinker.link(String(feature.properties['POB6_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB7'] !== null ? Autolinker.link(String(feature.properties['POB7'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB7_R'] !== null ? Autolinker.link(String(feature.properties['POB7_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB8'] !== null ? Autolinker.link(String(feature.properties['POB8'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB8_R'] !== null ? Autolinker.link(String(feature.properties['POB8_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB9'] !== null ? Autolinker.link(String(feature.properties['POB9'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB9_R'] !== null ? Autolinker.link(String(feature.properties['POB9_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB10'] !== null ? Autolinker.link(String(feature.properties['POB10'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB10_R'] !== null ? Autolinker.link(String(feature.properties['POB10_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB11'] !== null ? Autolinker.link(String(feature.properties['POB11'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB11_R'] !== null ? Autolinker.link(String(feature.properties['POB11_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB12'] !== null ? Autolinker.link(String(feature.properties['POB12'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB12_R'] !== null ? Autolinker.link(String(feature.properties['POB12_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB13'] !== null ? Autolinker.link(String(feature.properties['POB13'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB13_R'] !== null ? Autolinker.link(String(feature.properties['POB13_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB14'] !== null ? Autolinker.link(String(feature.properties['POB14'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB14_R'] !== null ? Autolinker.link(String(feature.properties['POB14_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB15'] !== null ? Autolinker.link(String(feature.properties['POB15'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB15_R'] !== null ? Autolinker.link(String(feature.properties['POB15_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB16'] !== null ? Autolinker.link(String(feature.properties['POB16'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB16_R'] !== null ? Autolinker.link(String(feature.properties['POB16_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB17'] !== null ? Autolinker.link(String(feature.properties['POB17'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB17_R'] !== null ? Autolinker.link(String(feature.properties['POB17_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB18'] !== null ? Autolinker.link(String(feature.properties['POB18'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB18_R'] !== null ? Autolinker.link(String(feature.properties['POB18_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB19'] !== null ? Autolinker.link(String(feature.properties['POB19'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB19_R'] !== null ? Autolinker.link(String(feature.properties['POB19_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB20'] !== null ? Autolinker.link(String(feature.properties['POB20'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB20_R'] !== null ? Autolinker.link(String(feature.properties['POB20_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB21'] !== null ? Autolinker.link(String(feature.properties['POB21'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB21_R'] !== null ? Autolinker.link(String(feature.properties['POB21_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB22'] !== null ? Autolinker.link(String(feature.properties['POB22'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB22_R'] !== null ? Autolinker.link(String(feature.properties['POB22_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB23'] !== null ? Autolinker.link(String(feature.properties['POB23'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB23_R'] !== null ? Autolinker.link(String(feature.properties['POB23_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB24'] !== null ? Autolinker.link(String(feature.properties['POB24'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB24_R'] !== null ? Autolinker.link(String(feature.properties['POB24_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB25'] !== null ? Autolinker.link(String(feature.properties['POB25'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB25_R'] !== null ? Autolinker.link(String(feature.properties['POB25_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB26_R'] !== null ? Autolinker.link(String(feature.properties['POB26_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB27_R'] !== null ? Autolinker.link(String(feature.properties['POB27_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB28_R'] !== null ? Autolinker.link(String(feature.properties['POB28_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB29_R'] !== null ? Autolinker.link(String(feature.properties['POB29_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB30_R'] !== null ? Autolinker.link(String(feature.properties['POB30_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB31'] !== null ? Autolinker.link(String(feature.properties['POB31'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB31_R'] !== null ? Autolinker.link(String(feature.properties['POB31_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB32'] !== null ? Autolinker.link(String(feature.properties['POB32'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB32_R'] !== null ? Autolinker.link(String(feature.properties['POB32_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB33'] !== null ? Autolinker.link(String(feature.properties['POB33'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB33_R'] !== null ? Autolinker.link(String(feature.properties['POB33_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB34'] !== null ? Autolinker.link(String(feature.properties['POB34'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB34_R'] !== null ? Autolinker.link(String(feature.properties['POB34_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB35'] !== null ? Autolinker.link(String(feature.properties['POB35'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB35_R'] !== null ? Autolinker.link(String(feature.properties['POB35_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB36'] !== null ? Autolinker.link(String(feature.properties['POB36'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB36_R'] !== null ? Autolinker.link(String(feature.properties['POB36_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB37'] !== null ? Autolinker.link(String(feature.properties['POB37'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB37_R'] !== null ? Autolinker.link(String(feature.properties['POB37_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB38'] !== null ? Autolinker.link(String(feature.properties['POB38'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB38_R'] !== null ? Autolinker.link(String(feature.properties['POB38_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB39'] !== null ? Autolinker.link(String(feature.properties['POB39'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB39_R'] !== null ? Autolinker.link(String(feature.properties['POB39_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB40'] !== null ? Autolinker.link(String(feature.properties['POB40'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB40_R'] !== null ? Autolinker.link(String(feature.properties['POB40_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB41'] !== null ? Autolinker.link(String(feature.properties['POB41'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB41_R'] !== null ? Autolinker.link(String(feature.properties['POB41_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB42'] !== null ? Autolinker.link(String(feature.properties['POB42'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB42_R'] !== null ? Autolinker.link(String(feature.properties['POB42_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB43'] !== null ? Autolinker.link(String(feature.properties['POB43'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB43_R'] !== null ? Autolinker.link(String(feature.properties['POB43_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB44'] !== null ? Autolinker.link(String(feature.properties['POB44'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB44_R'] !== null ? Autolinker.link(String(feature.properties['POB44_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB45'] !== null ? Autolinker.link(String(feature.properties['POB45'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB45_R'] !== null ? Autolinker.link(String(feature.properties['POB45_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB46'] !== null ? Autolinker.link(String(feature.properties['POB46'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB46_R'] !== null ? Autolinker.link(String(feature.properties['POB46_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB47'] !== null ? Autolinker.link(String(feature.properties['POB47'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB47_R'] !== null ? Autolinker.link(String(feature.properties['POB47_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB48'] !== null ? Autolinker.link(String(feature.properties['POB48'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB48_R'] !== null ? Autolinker.link(String(feature.properties['POB48_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB49'] !== null ? Autolinker.link(String(feature.properties['POB49'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB49_R'] !== null ? Autolinker.link(String(feature.properties['POB49_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB50'] !== null ? Autolinker.link(String(feature.properties['POB50'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB50_R'] !== null ? Autolinker.link(String(feature.properties['POB50_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB51'] !== null ? Autolinker.link(String(feature.properties['POB51'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB51_R'] !== null ? Autolinker.link(String(feature.properties['POB51_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB52'] !== null ? Autolinker.link(String(feature.properties['POB52'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB52_R'] !== null ? Autolinker.link(String(feature.properties['POB52_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB53'] !== null ? Autolinker.link(String(feature.properties['POB53'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB53_R'] !== null ? Autolinker.link(String(feature.properties['POB53_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB54'] !== null ? Autolinker.link(String(feature.properties['POB54'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB54_R'] !== null ? Autolinker.link(String(feature.properties['POB54_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB55'] !== null ? Autolinker.link(String(feature.properties['POB55'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB55_R'] !== null ? Autolinker.link(String(feature.properties['POB55_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB56'] !== null ? Autolinker.link(String(feature.properties['POB56'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB56_R'] !== null ? Autolinker.link(String(feature.properties['POB56_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB57'] !== null ? Autolinker.link(String(feature.properties['POB57'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB57_R'] !== null ? Autolinker.link(String(feature.properties['POB57_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB58'] !== null ? Autolinker.link(String(feature.properties['POB58'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB58_R'] !== null ? Autolinker.link(String(feature.properties['POB58_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB59'] !== null ? Autolinker.link(String(feature.properties['POB59'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB59_R'] !== null ? Autolinker.link(String(feature.properties['POB59_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB60'] !== null ? Autolinker.link(String(feature.properties['POB60'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB60_R'] !== null ? Autolinker.link(String(feature.properties['POB60_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB61'] !== null ? Autolinker.link(String(feature.properties['POB61'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB61_R'] !== null ? Autolinker.link(String(feature.properties['POB61_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB62'] !== null ? Autolinker.link(String(feature.properties['POB62'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB62_R'] !== null ? Autolinker.link(String(feature.properties['POB62_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB63'] !== null ? Autolinker.link(String(feature.properties['POB63'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB63_R'] !== null ? Autolinker.link(String(feature.properties['POB63_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB64'] !== null ? Autolinker.link(String(feature.properties['POB64'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB64_R'] !== null ? Autolinker.link(String(feature.properties['POB64_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB65'] !== null ? Autolinker.link(String(feature.properties['POB65'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB65_R'] !== null ? Autolinker.link(String(feature.properties['POB65_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB66'] !== null ? Autolinker.link(String(feature.properties['POB66'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB66_R'] !== null ? Autolinker.link(String(feature.properties['POB66_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB67'] !== null ? Autolinker.link(String(feature.properties['POB67'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB67_R'] !== null ? Autolinker.link(String(feature.properties['POB67_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB68'] !== null ? Autolinker.link(String(feature.properties['POB68'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB68_R'] !== null ? Autolinker.link(String(feature.properties['POB68_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB69'] !== null ? Autolinker.link(String(feature.properties['POB69'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB69_R'] !== null ? Autolinker.link(String(feature.properties['POB69_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB70'] !== null ? Autolinker.link(String(feature.properties['POB70'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB70_R'] !== null ? Autolinker.link(String(feature.properties['POB70_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB71'] !== null ? Autolinker.link(String(feature.properties['POB71'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB71_R'] !== null ? Autolinker.link(String(feature.properties['POB71_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB72'] !== null ? Autolinker.link(String(feature.properties['POB72'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB72_R'] !== null ? Autolinker.link(String(feature.properties['POB72_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB73'] !== null ? Autolinker.link(String(feature.properties['POB73'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB73_R'] !== null ? Autolinker.link(String(feature.properties['POB73_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB74'] !== null ? Autolinker.link(String(feature.properties['POB74'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB74_R'] !== null ? Autolinker.link(String(feature.properties['POB74_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB75'] !== null ? Autolinker.link(String(feature.properties['POB75'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB75_R'] !== null ? Autolinker.link(String(feature.properties['POB75_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB76'] !== null ? Autolinker.link(String(feature.properties['POB76'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB76_R'] !== null ? Autolinker.link(String(feature.properties['POB76_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB77'] !== null ? Autolinker.link(String(feature.properties['POB77'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB77_R'] !== null ? Autolinker.link(String(feature.properties['POB77_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB78'] !== null ? Autolinker.link(String(feature.properties['POB78'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB78_R'] !== null ? Autolinker.link(String(feature.properties['POB78_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB79'] !== null ? Autolinker.link(String(feature.properties['POB79'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB79_R'] !== null ? Autolinker.link(String(feature.properties['POB79_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB80'] !== null ? Autolinker.link(String(feature.properties['POB80'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB80_R'] !== null ? Autolinker.link(String(feature.properties['POB80_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB81'] !== null ? Autolinker.link(String(feature.properties['POB81'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['POB81_R'] !== null ? Autolinker.link(String(feature.properties['POB81_R'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['OID'] !== null ? Autolinker.link(String(feature.properties['OID'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_df_estatal_2_0() {
            return {
                pane: 'pane_df_estatal_2',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        map.createPane('pane_df_estatal_2');
        map.getPane('pane_df_estatal_2').style.zIndex = 402;
        map.getPane('pane_df_estatal_2').style['mix-blend-mode'] = 'normal';
        var layer_df_estatal_2 = new L.geoJson(json_df_estatal_2, {
            attribution: '<a href=""></a>',
            pane: 'pane_df_estatal_2',
            onEachFeature: pop_df_estatal_2,
            style: style_df_estatal_2_0,
        });
        bounds_group.addLayer(layer_df_estatal_2);
        map.addLayer(layer_df_estatal_2);
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/df_estatal_2.png" /> df_estatal': layer_df_estatal_2,'<img src="legend/Paradas_1.png" /> Paradas': cluster_Paradas_1,'TRAZOS DE RUTAS <br /><table><tr><td style="text-align: center;"><img src="legend/TRAZOSDERUTAS_0_2736145710.png" /></td><td> 2736 - 14571 </td></tr><tr><td style="text-align: center;"><img src="legend/TRAZOSDERUTAS_0_14571296521.png" /></td><td> 14571 - 29652 </td></tr><tr><td style="text-align: center;"><img src="legend/TRAZOSDERUTAS_0_29652422972.png" /></td><td> 29652 - 42297 </td></tr><tr><td style="text-align: center;"><img src="legend/TRAZOSDERUTAS_0_42297570643.png" /></td><td> 42297 - 57064 </td></tr></table>': layer_TRAZOSDERUTAS_0,},{collapsed:false}).addTo(map);
        setBounds();
