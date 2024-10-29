var wms_layers = [];

var format_Bharathapuzha_0 = new ol.format.GeoJSON();
var features_Bharathapuzha_0 = format_Bharathapuzha_0.readFeatures(json_Bharathapuzha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_0.addFeatures(features_Bharathapuzha_0);
var lyr_Bharathapuzha_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_0, 
                style: style_Bharathapuzha_0,
                popuplayertitle: "Bharathapuzha",
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_0.png" /> Bharathapuzha'
            });
var format_roadclip_1 = new ol.format.GeoJSON();
var features_roadclip_1 = format_roadclip_1.readFeatures(json_roadclip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadclip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadclip_1.addFeatures(features_roadclip_1);
var lyr_roadclip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadclip_1, 
                style: style_roadclip_1,
                popuplayertitle: "roadclip",
                interactive: false,
                title: '<img src="styles/legend/roadclip_1.png" /> roadclip'
            });
var format_geomorphologyclip_2 = new ol.format.GeoJSON();
var features_geomorphologyclip_2 = format_geomorphologyclip_2.readFeatures(json_geomorphologyclip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphologyclip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphologyclip_2.addFeatures(features_geomorphologyclip_2);
var lyr_geomorphologyclip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphologyclip_2, 
                style: style_geomorphologyclip_2,
                popuplayertitle: "geomorphologyclip",
                interactive: false,
    title: 'geomorphologyclip<br />\
    <img src="styles/legend/geomorphologyclip_2_0.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/geomorphologyclip_2_1.png" /> Denudational Hills<br />\
    <img src="styles/legend/geomorphologyclip_2_2.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/geomorphologyclip_2_3.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/geomorphologyclip_2_4.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/geomorphologyclip_2_5.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphologyclip_2_6.png" /> Pediplain Weathered<br />\
    <img src="styles/legend/geomorphologyclip_2_7.png" /> Piedmont Zone<br />\
    <img src="styles/legend/geomorphologyclip_2_8.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/geomorphologyclip_2_9.png" /> Residual Hill<br />\
    <img src="styles/legend/geomorphologyclip_2_10.png" /> Residual Mount<br />\
    <img src="styles/legend/geomorphologyclip_2_11.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/geomorphologyclip_2_12.png" /> Rock Exposure<br />\
    <img src="styles/legend/geomorphologyclip_2_13.png" /> Structural Hills<br />\
    <img src="styles/legend/geomorphologyclip_2_14.png" /> Valley<br />\
    <img src="styles/legend/geomorphologyclip_2_15.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphologyclip_2_16.png" /> Water Body<br />\
    <img src="styles/legend/geomorphologyclip_2_17.png" /> <br />'
        });
var format_drainageclip_3 = new ol.format.GeoJSON();
var features_drainageclip_3 = format_drainageclip_3.readFeatures(json_drainageclip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainageclip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainageclip_3.addFeatures(features_drainageclip_3);
var lyr_drainageclip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainageclip_3, 
                style: style_drainageclip_3,
                popuplayertitle: "drainageclip",
                interactive: false,
                title: '<img src="styles/legend/drainageclip_3.png" /> drainageclip'
            });
var format_point_4 = new ol.format.GeoJSON();
var features_point_4 = format_point_4.readFeatures(json_point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_4.addFeatures(features_point_4);
var lyr_point_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_4, 
                style: style_point_4,
                popuplayertitle: "point",
                interactive: true,
                title: '<img src="styles/legend/point_4.png" /> point'
            });

lyr_Bharathapuzha_0.setVisible(true);lyr_roadclip_1.setVisible(true);lyr_geomorphologyclip_2.setVisible(true);lyr_drainageclip_3.setVisible(true);lyr_point_4.setVisible(true);
var layersList = [lyr_Bharathapuzha_0,lyr_roadclip_1,lyr_geomorphologyclip_2,lyr_drainageclip_3,lyr_point_4];
lyr_Bharathapuzha_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_roadclip_1.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_geomorphologyclip_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_drainageclip_3.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_point_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'photo': 'photo', });
lyr_Bharathapuzha_0.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_roadclip_1.set('fieldImages', {'fid': '', 'NAME': '', 'Length': '', });
lyr_geomorphologyclip_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_drainageclip_3.set('fieldImages', {'fid': '', 'ORDER1': '', });
lyr_point_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'photo': 'ExternalResource', });
lyr_Bharathapuzha_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_roadclip_1.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_geomorphologyclip_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_drainageclip_3.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_point_4.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'photo': 'no label', });
lyr_point_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});