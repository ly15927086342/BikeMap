/*** Created by admin on 2017/7/13.*/
// modify on 2020/7/16 by liyu

//"use strict"
$(function () {
    $("#mmp1 .list-group-item").click(function () {
        $("#mmp1 .list-group-item").removeClass("active");
        $(this).addClass("active");
        var word = $(this).html();
        beginlng = word.substring(word.indexOf('(') + 1, word.indexOf(','));
        beginlat = word.substring(word.indexOf(',') + 1, word.indexOf(')'));
        finishlng = word.substring(word.lastIndexOf('(') + 1, word.lastIndexOf(','));
        finishlat = word.substring(word.lastIndexOf(',') + 1, word.lastIndexOf(')'));
        calculate();
    });
    $("#mmp2 .list-group-item").click(function () {
        $("#mmp2 .list-group-item").removeClass("active");
        $(this).addClass("active");
        var word = $(this).html();
        beginlng = word.substring(word.indexOf('(') + 1, word.indexOf(','));
        beginlat = word.substring(word.indexOf(',') + 1, word.indexOf(')'));
        finishlng = word.substring(word.lastIndexOf('(') + 1, word.lastIndexOf(','));
        finishlat = word.substring(word.lastIndexOf(',') + 1, word.lastIndexOf(')'));
        calculate();
    });
    $("#lishi").click(function () {
        if ($("#lishijilu").css("display") == "none") {
            $("#lishijilu").css("display", "block");
            $("#canshu").css("display", "none");
            $("#xitongid").css("display", "none");
            $("#shuomingid").css("display", "none");
        } else {
            $("#lishijilu").css("display", "none");
        }
    });
    $("#canshu1").click(function () {
        if ($("#canshu").css("display") == "none") {
            $("#canshu").css("display", "block");
            $("#xitongid").css("display", "none");
            $("#shuomingid").css("display", "none");
            $("#lishijilu").css("display", "none");
        } else {
            $("#canshu").css("display", "none");
        }
    });
    $("#xitong").click(function () {
        if ($("#xitongid").css("display") == "none") {
            $("#xitongid").css("display", "block");
            $("#shuomingid").css("display", "none");
            $("#canshu").css("display", "none");
            $("#lishijilu").css("display", "none");
        } else {
            $("#xitongid").css("display", "none");
        }
    });
    $("#shuomingid1").click(function () {
        if ($("#shuomingid").css("display") == "none") {
            $("#shuomingid").css("display", "block");
            $("#canshu").css("display", "none");
            $("#xitongid").css("display", "none");
            $("#lishijilu").css("display", "none");
        } else {
            $("#shuomingid").css("display", "none");
        }
    });
    $("#tishipai").click(function () {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            $("#cont").css("display", "block");
            $(".dropdown-menu li").removeClass("active");
            $("#myTabContent div").removeClass("active in");
            $("#map").addClass("active in");
        } else {
            if ($("#tip").css("display") == "none") {
                $("#tishipai").css("background-color", "rgb(255, 215, 0)");
                $("#tip").css("display", "block");
            } else {
                $("#tip").css("display", "none");
                $("#tishipai").css("background-color", "rgba(0, 0, 0, 0)");
            }
        }
    });
    $("#fenxi").click(function () {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            $("#cont").css("display", "block");
            $(".dropdown-menu li").removeClass("active");
            $("#myTabContent div").removeClass("active in");
            $("#map1").addClass("active in");
        } else {
            if ($("#echarts").css("display") == "none") {
                $("#fenxi").css("background-color", "rgb(255, 215, 0)");
                $("#echarts").css("display", "block");
            } else {
                $("#echarts").css("display", "none");
                $("#fenxi").css("background-color", "rgba(0, 0, 0, 0)");
            }
        }
    });
    $("#dijkstra").click(function () { method = 0; });
    $("#floyd").click(function () { method = 1; });
    $("#dijkstra1").click(function () { method = 0; });
    $("#floyd1").click(function () { method = 1; })
    $("#sea").click(function () {
        $("#search").css("display", "block");
        $("#inf").focus();
    });
    $("#li1").click(function () {
        if ($("#cont").css("display") === "none") {
            $("#cont").css("display", "block");
        } else {
            $("#cont").css("display", "none");
        }
    });
    $("#location1").click(function () {
        var lo = new T.Geolocation();//定位
        lo.getCurrentPosition(position, { enableHighAccuracy: true });
    });
    $("#inf").autocomplete({
        source: availableTag,
        autoFocus: true,
        focus: function (event, ui) {
            removeMapClick();
        }
    });
    $("#position").click(function () {
        lo.getCurrentPosition(position, { enableHighAccuracy: true });
    });
    $("#heatmap").click(function () {
        //  map.addOverLay(countriesOverlay)
        if ($("#heatmap").html() === "显示高程图") {
            map.addOverLay(heatmapOverlay);
            heatmapOverlay.setDataSet({ data: heatmap, max: 119 });
            heatmapOverlay.show();
            map.panTo(new T.LngLat(114.35961, 30.53624), 14);
            $("#heatmap").html("隐藏高程图");
        } else {
            $("#heatmap").html("显示高程图");
            heatmapOverlay.hide();
        }
    })
    $("#heatmap1").click(function () {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            if ($("#cont").css("display") === "block") {
                $("#cont").css("display", "none");
            }
        }
        //  map.addOverLay(countriesOverlay)
        if ($("#heatmap1").html() === "显示高程图") {
            map.addOverLay(heatmapOverlay);
            heatmapOverlay.setDataSet({ data: heatmap, max: 119 });
            heatmapOverlay.show();
            map.panTo(new T.LngLat(114.35961, 30.53624), 14);
            $("#heatmap1").html("隐藏高程图");
        } else {
            $("#heatmap1").html("显示高程图");
            heatmapOverlay.hide();
        }
    })
    $("#te").click(function () {
        var layer1;
        var tp;
        var kp = 0;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            if (tp === 1) {
                map.removeOverLay(layer1[u]);
                kp = 1;
            }
        }
        if (kp === 0) {
            var la = [];
            for (var m = 0; m < data.length - 1; m++) {
                la[m] = new T.Label({
                    text: (data[m][0] - 1).toString(),
                    position: data[m][1],
                    offset: new T.Point(-9, 0)
                });
            }
            $("#te").html('隐点');
            for (var k = 0; k < data.length - 1; k++) {
                map.addOverLay(la[k]);
            }
            var pi = [];
            for (var i = 0; i < data.length - 1; i++) {
                pi.push(data[i][1]);
            }
            map.setViewport(pi);//合适的视野
            pi = [];
        } else {
            $("#te").html('展点');
        }
    });
    $("#te1").click(function () {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            if ($("#cont").css("display") === "block") {
                $("#cont").css("display", "none");
            }
        }
        var layer1;
        var tp;
        var kp = 0;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            if (tp === 1) {
                map.removeOverLay(layer1[u]);
                kp = 1;
            }
        }
        if (kp === 0) {
            var la = [];
            for (var m = 0; m < data.length - 1; m++) {
                la[m] = new T.Label({
                    text: (data[m][0] - 1).toString(),
                    position: data[m][1],
                    offset: new T.Point(-9, 0)
                });
            }
            $("#te1").html('隐点');
            for (var k = 0; k < data.length - 1; k++) {
                map.addOverLay(la[k]);
            }
            var pi = [];
            for (var i = 0; i < data.length - 1; i++) {
                pi.push(data[i][1]);
            }
            map.setViewport(pi);//合适的视野
            pi = [];
        } else {
            $("#te1").html('展点');
        }
    });
    $("#showline").click(function () {
        var layer1;
        var tp, tc;
        var kp = 0;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            tc = layer1[u].options.color;
            if (tp === 4 && tc === '#00BBFF') {
                map.removeOverLay(layer1[u]);
                kp = 1;
            }
        }
        if (kp === 0) {
            $("#showline").html('隐网');
            var poly = [];
            var mm = [];
            var b, f;
            for (var j = 0; j < huduan.length - 1; j++) {
                for (var k = 0; k < data.length - 1; k++) {
                    if (huduan[j][1] + 1 === data[k][0]) {
                        b = data[k][1];
                    } if (huduan[j][2] + 1 === data[k][0]) {
                        f = data[k][1];
                    }
                }
                mm = [];
                mm.push(b, f);
                poly[j] = new T.Polyline(mm, { color: '#00BBFF', lineStyle: "solid", opacity: 0.5, weight: 2 });
            }
            for (var r = 0; r < huduan.length - 1; r++) {
                map.addOverLay(poly[r]);
            }
            var pi = [];
            for (var i = 0; i < data.length - 1; i++) {
                pi.push(data[i][1]);
            }
            map.setViewport(pi);//合适的视野
            pi = [];
        } else {
            $("#showline").html('展网');
        }
    });
    $("#showline1").click(function () {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            if ($("#cont").css("display") === "block") {
                $("#cont").css("display", "none");
            }
        }
        var layer1;
        var tp, tc;
        var kp = 0;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            tc = layer1[u].options.color;
            if (tp === 4 && tc === '#00BBFF') {
                map.removeOverLay(layer1[u]);
                kp = 1;
            }
        }
        if (kp === 0) {
            $("#showline1").html('隐网');
            var poly = [];
            var mm = [];
            var b, f;
            for (var j = 0; j < huduan.length - 1; j++) {
                for (var k = 0; k < data.length - 1; k++) {
                    if (huduan[j][1] + 1 === data[k][0]) {
                        b = data[k][1];
                    } if (huduan[j][2] + 1 === data[k][0]) {
                        f = data[k][1];
                    }
                }
                mm = [];
                mm.push(b, f);
                poly[j] = new T.Polyline(mm, { color: '#00BBFF', lineStyle: "solid", opacity: 0.5, weight: 2 });
            }
            for (var r = 0; r < huduan.length - 1; r++) {
                map.addOverLay(poly[r]);
            }
            var pi = [];
            for (var i = 0; i < data.length - 1; i++) {
                pi.push(data[i][1]);
            }
            map.setViewport(pi);//合适的视野
            pi = [];
        } else {
            $("#showline1").html('展网');
        }
    });
    /*   $("#hideresult").click(function () {
           var layer1;
           var tp, tc;
           var kp = 0;
           layer1 = map.getOverlays();
           for (var u = 0; u < layer1.length; u++) {
               tp = layer1[u].options.__proto__.type;
               tc = layer1[u].options.color;
               if (tp === 4 && tc === "#0000ff") {
                   map.removeOverLay(layer1[u]);
               }
               if (tp === 2) {
                   map.removeOverLay(layer1[u]);
               }
           }
       });*/
   });

function changemap(ob) {
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        if ($(ob).html() === "地图") {
            map.removeLayer(lay);
            $(ob).html("卫星图");
        } else {
            map.addLayer(lay);
            $(ob).html("地图");
        }
        if ($("#cont").css("display") === "block") {
            $("#cont").css("display", "none");
        }
    } else {
        if ($(ob).html() === "地图") {
            map.removeLayer(lay);
            $(ob).html("卫星图");
        } else {
            map.addLayer(lay);
            $(ob).html("地图");
        }
    }
}

function calculate() {
    if (beginlng != null && beginlat != null && finishlng != null && finishlat != null) {

        //对p/po初始化
        p = [].concat(data);
        po = [].concat(ponow1);
        p.pop();
        //    po.pop();

        $('#infotable1').children('li').remove();
        $('#infotable').children('li').remove();
        $('#infotext').children('li').remove();
        map.clearOverLays();
        map.addOverLay(lk);
        map.addOverLay(yxlk);
        map.addOverLay(xqlk);
        resultline = [];
        resultdir = [];
        resultinf = [];

        if (Tresultline) {
            Tresultline.removeEventListener("click", showresult);
        }

        var icon1 = new T.Icon({
            iconUrl: "static/imgs/mapicon/beg.png",
            iconSize: new T.Point(45, 45),
            iconAnchor: new T.Point(22, 40)
        });
        //向地图上添加自定义标注
        var marker = new T.Marker(new T.LngLat(beginlng, beginlat), { icon: icon1 });
        map.addOverLay(marker);

        var icon2 = new T.Icon({
            iconUrl: "static/imgs/mapicon/fin.png",
            iconSize: new T.Point(45, 45),
            iconAnchor: new T.Point(22, 40)
        });
        var marker1 = new T.Marker(new T.LngLat(finishlng, finishlat), { icon: icon2 });
        map.addOverLay(marker1);
        icon1 = null;
        icon2 = null;



        var lineb = new Boolean(false), linef = new Boolean(false);
        var lib = 0, lif = 0;
        removepoint(beginlng, beginlat, 0);
        if (isaddline.valueOf() === true) {
            lineb = Boolean(true);
        }
        if (add1.valueOf() === true) {
            lib = 1;
        } else if (add2.valueOf() === true) {
            lib = 2;
        }
        removepoint(finishlng, finishlat, 1);
        if (isaddline.valueOf() === true) {
            linef = Boolean(true);
        }
        if (add1.valueOf() === true) {
            lif = 1;
        } else if (add2.valueOf() === true) {
            lif = 2;
        }

        //谢谢   console.log(2);

        pnum = p.length;
        lnum = po.length;


        var result = [];
        var brow = 0;
        var frow = 0;

        //兑换出起点终点对应的行和列
        for (var q = 0; q < pnum; q++) {
            if (p[q][0] === beginid) {
                brow = q;
                bzuobiao = p[q][1];
            } else if (p[q][0] === finishid) {
                frow = q;
                fzuobiao = p[q][1];
            }
        }
        if (method == 0) {
            dijkstra(brow, frow);
            result.push(finishid);
            while (true) {
                if (PP[frow] === brow) {
                    break;
                } else {
                    frow = PP[frow];
                    result.push(p[frow][0]);
                }
            }
            result.push(beginid);
            result.reverse();
        } else {
            floyd();
            result.push(beginid);
            while (true) {
                if (P[brow][frow] === frow) {
                    break;
                } else {
                    brow = P[brow][frow];
                    result.push(p[brow][0]);
                }
            }
            result.push(finishid);
        }

        var zuobiao = [];
        zuobiao.push(bzuobiao, fzuobiao);
        map.setViewport(zuobiao);//合适的视野
        map.zoomOut();

        //显示路线
        result3ddata = [];//3d路线
        var bb = []; //存点的经纬度以及高程
        for (var i = 0; i < result.length; i++) {
            bb[i] = [];
            result3ddata[i] = [];
            for (var j = 0; j < p.length; j++) {
                if (result[i] === p[j][0]) {
                    resultline.push(p[j][1]);
                    bb[i][0] = p[j][2];
                    bb[i][1] = p[j][3];
                    bb[i][2] = p[j][7];
                    result3ddata[i][0] = 0;
                    result3ddata[i][1] = 0;
                    result3ddata[i][2] = 0;
                }
            }
        }
        //   console.log(result);
        /*  console.log(p);
          console.log(result);
          console.log(bb);*/
          var lngb, latb;
          var lngf, latf;
          var theta;
          result3ddata[0][0] = bb[0][0];
          result3ddata[0][1] = bb[0][1];
          result3ddata[0][2] = bb[0][2] + 5;
          for (var i = 0; i < bb.length - 1; i++) {
            result3ddata[i + 1][0] = bb[i + 1][0];
            result3ddata[i + 1][1] = bb[i + 1][1];
            result3ddata[i + 1][2] = bb[i + 1][2] + 5;
            lngb = bb[i][0];
            latb = bb[i][1];
            lngf = bb[i + 1][0];
            latf = bb[i + 1][1];
            if (Math.abs(latf - latb) < 0.00005) {
                if (lngf > lngb) {
                    resultdir.push({ direction: "东" })
                } else {
                    resultdir.push({ direction: "西" })
                }
            } else if (latf < latb) {
                if (Math.abs(lngf - lngb) < 0.00005) {
                    resultdir.push({ direction: "南" })
                } else if (lngf < lngb) {
                    theta = Math.atan(Math.abs(lngf - lngb) / Math.abs(latf - latb));
                    theta = theta * 180 / Math.PI;
                    resultdir.push({ direction: "南偏西" + parseInt(theta) + "度" });
                } else if (lngf > lngb) {
                    theta = Math.atan(Math.abs(lngf - lngb) / Math.abs(latf - latb));
                    theta = theta * 180 / Math.PI;
                    resultdir.push({ direction: "南偏东" + parseInt(theta) + "度" });
                }
            } else if (latf > latb) {
                if (Math.abs(lngf - lngb) < 0.00005) {
                    resultdir.push({ direction: "北" })
                } else if (lngf < lngb) {
                    theta = Math.atan(Math.abs(lngf - lngb) / Math.abs(latf - latb));
                    theta = theta * 180 / Math.PI;
                    resultdir.push({ direction: "北偏西" + parseFloat(theta) + "度" });
                } else if (lngf > lngb) {
                    theta = Math.atan(Math.abs(lngf - lngb) / Math.abs(latf - latb));
                    theta = theta * 180 / Math.PI;
                    resultdir.push({ direction: "北偏东" + parseInt(theta) + "度" });
                }
            }
        }
        option4 = {
            tooltip: {},
            xAxis3D: {
                // show:false,
                axisPointer: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                name: 'Lng',
                type: 'value',
                min: 'min',
                max: 'max',
                data: heatmap.map(function (item) {
                    return {
                        value: item.lng
                    }
                })
            },
            yAxis3D: {
                splitLine: {
                    show: false
                },
                axisPointer: {
                    show: false
                },
                name: 'Lat',
                type: 'value',
                min: 'min',
                max: 'max',
                data: heatmap.map(function (item) {
                    return {
                        value: item.lat
                    }
                })
            },
            zAxis3D: {
                splitNumber: 2,
                splitLine: {
                    show: false
                },
                axisPointer: {
                    show: false
                },
                name: 'H',
                type: 'value'
                /*   min:'min',
                   max:'max',
                   data: heatmap.map(function(item){
                       return{
                           value:item[2]
                       }
                   })*/
               },
               grid3D: {
                boxWidth: 170.833334,
                boxDepth: 230,
                boxHeight: 15,
                //    top:'50%',
                light: {
                    main: {
                        intensity: 1.5,
                        shadow: true
                    },
                    ambient: {
                        intensity: 1
                    }
                }
                //    environment: 'map.png'
            },
            /*  geo3D:{
                  show:true
                //  map:'洪山区'
            },*/
            series: [{
                type: 'line3D',
                //  visualMap: false,
                data: result3ddata,
                lineStyle: {
                    color: [1, 0, 0, 1]
                }
            },
            {
                type: 'surface',
                data: heatmap.map(function (item) {
                    return {
                        value: [item.lng, item.lat, item.count],
                        itemStyle: {
                            color: [1, 1, 1, 1]
                        }
                    }
                }),
                    /*   shading: 'lambert',
                       lambertMaterial:{
                           detailTexture:'map1.png'
                       }*/
                       shading: 'realistic',
                       realisticMaterial: {
                        detailTexture: 'static/imgs/map1.png',
                        textureTiling: 1,
                        roughness: 0.8,
                        metalness: 0
                    }

                }, {
                    type: 'scatter3D',
                    symbolSize: 10,
                    symbol: 'circle',
                    data: [{
                        name: '起点',
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '起点',
                            textStyle: {
                                color: '#fff'
                            },
                            distance: 30
                        },
                        value: [result3ddata[0][0], result3ddata[0][1], (result3ddata[0][2] + 20)],
                        itemStyle: {
                            color: [0, 1, 0, 1]
                        }
                    }, {
                        name: '终点',
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '终点',
                            textStyle: {
                                color: '#fff'
                            },
                            distance: 30
                        },
                        value: [result3ddata[result3ddata.length - 1][0], result3ddata[result3ddata.length - 1][1], (result3ddata[result3ddata.length - 1][2] + 20)],
                        itemStyle: {
                            color: [0, 0, 1, 1]
                        }
                    }]
                }]
            };
            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
                option4.grid3D.boxWidth = 170.833334 / 3;
                option4.grid3D.boxDepth = 230 / 3;
                option4.grid3D.boxHeight = 15 / 3;
                $("#cont").css("display", "none");
            }

        //   console.log(result3ddata);
        var imgurl;
        for (var i = 0; i < result.length - 1; i++) {
            for (var j = 0; j < po.length; j++) {
                if (result[i] == po[j][1] + 1 && result[i + 1] == po[j][2] + 1) {
                    if (Math.abs(po[j][3]) < 0.015) {
                        imgurl = "<img src='static/imgs/plain.png' />";
                    } else if (po[j][3] > 0) {
                        imgurl = "<img src='static/imgs/up.png' />";
                    } else if (po[j][3] < 0) {
                        imgurl = "<img src='static/imgs/down.png' />";
                    }
                    resultinf.push({ slope: po[j][3], distance: po[j][4], block: po[j][5], shade: po[j][6], grade: po[j][7], imgurl: imgurl });
                }
            }
        }

        var reinf = [];
        if (resultinf.length > 1) {
            var Q = [];
            var imgurl = [];
            for (var i = 0; i < resultinf.length - 1; i++) {
                if (resultdir[i].direction === resultdir[i + 1].direction) {
                    Q[i] = 1;
                } else {
                    Q[i] = 0;
                }
                if (resultinf[i].imgurl === resultinf[i + 1].imgurl) {
                    imgurl[i] = 1;
                } else {
                    imgurl[i] = 0;
                }
            }
            for (var i = 0; i < Q.length; i++) {
                reinf[i] = { direction: "", imgurl: "", distance: 0 };
            }
            var k = 0;
            for (var i = 0; i < Q.length; i++) {
                reinf[k] = { direction: resultdir[i].direction, imgurl: reinf[k].imgurl + resultinf[i].imgurl, distance: reinf[k].distance + resultinf[i].distance };
                if (Q[i] === 1) {
                    if (imgurl[i] === 1) {
                        //  reinf[k].imgurl -= resultinf[i].imgurl;
                        var index = reinf[k].imgurl.lastIndexOf("<img");
                        reinf[k].imgurl = reinf[k].imgurl.substring(0, index);
                    }
                } else {
                    k++;
                }
            }
            if (Q[Q.length - 1] === 0) {
                reinf[k] = { direction: resultdir[Q.length].direction, imgurl: resultinf[Q.length].imgurl, distance: resultinf[Q.length].distance };
            }
            if (Q[Q.length - 1] === 1) {
                if (imgurl[i] === 0) {
                    reinf[k] = { direction: resultdir[Q.length].direction, imgurl: reinf[k].imgurl + resultinf[Q.length].imgurl, distance: reinf[k].distance + resultinf[Q.length].distance };
                } else {
                    reinf[k] = { direction: resultdir[Q.length].direction, imgurl: resultinf[Q.length].imgurl, distance: reinf[k].distance + resultinf[Q.length].distance };
                }

            }

            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
                //分析窗口
                $("#drop").css("display", "block");
                /*    $("#myTabContent div").removeClass("active in");
                    $(".dropdown-menu li").removeClass("active");
                    $("#map").addClass("active in");*/
                    var $li = $("<li class='list-group-item' >从<strong class='text-success'>起点</strong>出发</li>");
                    $("#infotable1").append($li);
                    for (var i = 0; i <= k; i++) {
                        $li = $("<li class='list-group-item'>" + reinf[i].imgurl + "往" + reinf[i].direction + "骑行" + reinf[i].distance.toFixed(0) + "米" + "</li>");
                        $("#infotable1").append($li);
                    }
                    $li = $("<li class='list-group-item'>到达<strong class='text-danger'>终点</strong></li>");
                    $("#infotable1").append($li);
                } else {
                    var $li = $("<li class='list-group-item active'><button type='button' class='close' onclick='closeinf()'>&times;</button><span class='badge' style='float:left'>" + (k + 1).toString() + "</span>路线提示</li>");
                    $("#infotext").append($li);
                    $li = $("<li class='list-group-item' >从<strong class='text-success'>起点</strong>出发</li>");
                    $("#infotable").append($li);
                    for (var i = 0; i <= k; i++) {
                        $li = $("<li class='list-group-item'>" + reinf[i].imgurl + "往" + reinf[i].direction + "骑行" + reinf[i].distance.toFixed(0) + "米" + "</li>");
                        $("#infotable").append($li);
                    }
                    $li = $("<li class='list-group-item'>到达<strong class='text-danger'>终点</strong></li>");
                    $("#infotable").append($li);
                }
            } else if (resultinf.length === 1) {
                if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
                //分析窗口
                $("#drop").css("display", "block");
                /*  $("#myTabContent div").removeClass("active in");
                  $(".dropdown-menu li").removeClass("active");
                  $("#map").addClass("active in");*/
                  var $li = $("<li class='list-group-item' >从<strong class='text-success'>起点</strong>出发</li>");
                  $("#infotable1").append($li);
                  reinf[0] = { direction: resultdir[0].direction, imgurl: resultinf[0].imgurl, distance: resultinf[0].distance };
                  $li = $("<li class='list-group-item'>" + reinf[0].imgurl + "往" + reinf[0].direction + "骑行" + reinf[0].distance.toFixed(0) + "米" + "</li>");
                  $("#infotable1").append($li);
                  $li = $("<li class='list-group-item'>到达<strong class='text-danger'>终点</strong></li>");
                  $("#infotable1").append($li);
              } else {
                var $li = $("<li class='list-group-item active'><button type='button' class='close' onclick='closeinf()'>&times;</button><span class='badge' style='float:left'>1</span>路线提示</li>");
                $("#infotext").append($li);
                $li = $("<li class='list-group-item' >从<strong class='text-success'>起点</strong>出发</li>");
                $("#infotable").append($li);
                reinf[0] = { direction: resultdir[0].direction, imgurl: resultinf[0].imgurl, distance: resultinf[0].distance };
                $li = $("<li class='list-group-item'>" + reinf[0].imgurl + "往" + reinf[0].direction + "骑行" + reinf[0].distance.toFixed(0) + "米" + "</li>");
                $("#infotable").append($li);
                $li = $("<li class='list-group-item'>到达<strong class='text-danger'>终点</strong></li>");
                $("#infotable").append($li);
            }
        }
        //  $("#infotable").css("display",show)
        var Tresultline = [];
        //  console.log(resultdir);
        //  console.log(resultinf);
        var bline = [], fline = [], col = "#00CCFF";
        var markb = 0, markf = 0;
        bline.push(resultline[0], resultline[1]);
        fline.push(resultline[resultline.length - 2], resultline[resultline.length - 1]);
        if (lineb.valueOf() === true) {
            col = "#666666";
            Tresultline = new T.Polyline(bline, { color: col, opacity: 1, weight: 3, lineStyle: "dashed" });
            map.addOverLay(Tresultline);
            markb = 1;
        }

        col = "#00CCFF";
        if (linef.valueOf() === true) {
            col = "#666666";
            Tresultline = new T.Polyline(fline, { color: col, opacity: 1, weight: 3, lineStyle: "dashed" });
            map.addOverLay(Tresultline);
            markf = 1;
        }

        var midline = [];
        for (var i = markb; i < resultline.length - markf; i++) {
            midline.push(resultline[i]);
        }
        if (xislope == 1 && xidis == 0 && xiblock == 0 && xishade == 0) {
            col = "#000080";
        } else if (xislope == 0 && xidis == 1 && xiblock == 0 && xishade == 0) {
            col = "#B22222";
        } else if (xislope == 0 && xidis == 0 && xiblock == 1 && xishade == 0) {
            col = "#FFD700";
        } else if (xislope == 0 && xidis == 0 && xiblock == 0 && xishade == 1) {
            col = "#00FF7F";
        } else {
            col = "#00CCFF";
        }
        //  console.log(xislope, xidis, xiblock, xishade);
        Tresultline = new T.Polyline(midline, { color: col, opacity: 0.7, weight: 7, lineStyle: "solid" });
        map.addOverLay(Tresultline);
        Tresultline.addEventListener("click", showresult);

        $("#more").css("display", "block");

        var H = [];
        var Dis = [];
        for (var i = 0; i < bb.length; i++) {
            H.push(bb[i][2]);
        }
        Dis[0] = 0.0;
        var alti = 0.0;
        for (var i = 0; i < resultinf.length; i++) {
            alti += resultinf[i].distance;
            Dis.push(alti.toFixed(0));
        }
        var shadebar = [];
        var blockbar = [];
        var upslope = 0, downslope = 0, aveshade = 0, totalblock = 0;
        for (var i = 0; i < resultinf.length; i++) {
            shadebar.push(resultinf[i].shade);
            blockbar.push(resultinf[i].block);
            totalblock += resultinf[i].block;
            if (resultinf[i].slope > 0) {
                upslope += resultinf[i].distance;
            } else {
                downslope += resultinf[i].distance;
            }
        }
        if ((resultinf.length - lib - lif) != 0) {
            for (var i = lib; i < resultinf.length - lif; i++) {
                aveshade += resultinf[i].shade;
            }
            aveshade = aveshade / (resultinf.length - lib - lif);
        } else {
            aveshade = 0;
        }

        var option = ({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            grid: {
                top: '30%',
                left: 0,
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            legend: {
                left: 0,
                top: '10%',
                // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                data: ['海拔', '绿荫覆盖率', '减速带个数']
            },
            calculable: true,
            /*     grid: {
                     left: '3%',
                     right: '4%',
                     bottom: '3%',
                     containLabel: true
                 },*/
                 toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: true, readOnly: true },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: Dis,
                    name: '距离',
                    nameLocation: 'middle',
                    nameGap: 20,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        formatter: '{value} m'
                    }
                },
                yAxis: [{
                    type: 'value',
                    name: '海拔',
                    axisLabel: {
                        formatter: '{value} m'
                    },
                    min: 0
                },
                {
                 type: 'value',
                 name: '覆盖率/数量',
             }
             ],
             series: [
             {
                name: '海拔',
                type: 'line',
                data: H,
                markPoint: {
                    data: [
                    {
                        type: 'max', name: '最大值', symbol: 'circle', symbolSize: 2, label: {
                            normal: {
                                formatter: '最大值',
                                textStyle: {
                                    color: 'black'
                                }
                            }
                        }
                    },
                    {
                        type: 'min', name: '最小值', symbol: 'circle', symbolSize: 2, label: {
                            normal: {
                                textStyle: {
                                    color: 'black'
                                },
                                formatter: '最小值'
                            }
                        }
                    }
                    ]
                },
                markLine: {
                    data: [
                    { type: 'average', name: '平均值' }
                    ],
                    label: {
                        normal: {
                            position: 'middle',
                            textStyle: {
                                color: 'black'
                            }
                        }
                    }
                },
                smooth: true
            }, {
                name: '绿荫覆盖率',
                type: 'bar',
                data: shadebar,
                yAxisIndex: 1
            },
            {
                name: '减速带个数',
                type: 'bar',
                data: blockbar,
                yAxisIndex: 1
            }
            ]
        })



        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            $("#search").css("display", "none");
            $("#echart1").css('width', $(window).width() - 30);
            $("#echart1").css('height', $(window).height() / 2);
            var chart1 = echarts.init(document.getElementById('echart1'), 'shine');
            chart1.setOption(option);
            $("#tongji1").html("路线总长：" + Dis[Dis.length - 1] + "米" + "<br/>上坡：" + upslope.toFixed(0) + "米<br/>下坡：" + downslope.toFixed(0) + "米<br/>平均绿荫覆盖率：" + aveshade.toFixed(1) + "<br/>减速带个数：" + totalblock);
        } else {
            var chart = echarts.init(document.getElementById('echart'), 'shine');
            chart.setOption(option);
            //   $("#echarts").css("display", "block");
            //   $("#tip").css("display", "block");
            $("#tongji").html("路线总长：" + Dis[Dis.length - 1] + "米" + "<br/>上坡：" + upslope.toFixed(0) + "米<br/>下坡：" + downslope.toFixed(0) + "米<br/>平均绿荫覆盖率：" + aveshade.toFixed(1) + "<br/>减速带个数：" + totalblock);
        }

        //清空内存
        /*    beginlng = null;
            beginlat = null;
            finishlng = null;
            finishlat = null;
            beginid = null;
            finishid = null;*/
            p = [];
            po = [];
            pnum = null;
            lnum = null;
            P = [];
            PP = [];
            isaddline = Boolean(false);
            removeMapClick();
        }
    }
    function showresult(e) {
        if (camposs) {
            map.removeOverLay(camposs)
        }
        if (infoWin1) {
            map.removeOverLay(infoWin1);
            map.removeEventListener("close", infoclose);
        }
        console.log($("#showress").css("background-color"));
        if ($("#showress").css("background-color") === "rgba(0, 0, 0, 0)") {
            $("#showress").css("background-color", "rgb(255, 215, 0)");
        } else {
            $("#showress").css("background-color", "rgb(255, 215, 0)");
        }
        var icon = new T.Icon({
            iconUrl: "static/imgs/指南针.png",
            iconSize: new T.Point(60, 60),
            iconAnchor: new T.Point(30, 30)
        });
        $("#left").css("display", "block");
        $("#right").css("display", "block");
        var layer1;
        var tp, tc;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            tc = layer1[u].options.color;
            if (tp === 4 && tc === '#ff0000') {
                map.removeOverLay(layer1[u]);
            }
        }
    //   console.log(e.target.Gt[0]);
    //    var xy = [].concat(e.target.Gt[0]);

    for (var i = 0; i < resultline.length - 1; i++) {
        var x1 = e.lnglat.lng - resultline[i].lng;
        var y1 = e.lnglat.lat - resultline[i].lat;
        var x2 = e.lnglat.lng - resultline[i + 1].lng;
        var y2 = e.lnglat.lat - resultline[i + 1].lat;
        if ((x1 * x2 + y1 * y2) < 0) {
            mark = i;
            break;
        }
    }
    var linenow = [];
    linenow.push(resultline[mark], resultline[mark + 1]);
    var linen = new T.Polyline(linenow, { color: "#ff0000", opacity: 1, weight: 7, lineStyle: "solid" });
    map.addOverLay(linen);
    map.setViewport(linenow);
    var middlex, middley;
    middlex = (resultline[mark].lng + resultline[mark + 1].lng) / 2;
    middley = (resultline[mark].lat + resultline[mark + 1].lat) / 2;
    /*    $("#middlecam").css("left", middlex);
        $("#middlecam").css("top", middley);
        $("#middlecam").css("display","block");*/
        camposs = new T.Marker(new T.LngLat(middlex, middley), { icon: icon });
        map.addOverLay(camposs);

        var sContent = "<div><font style='line-height:1;'>骑行方向：" + resultdir[mark].direction + "</font></br><font style='line-height:1;'>骑行距离：" + resultinf[mark].distance.toFixed(1) + "米</font></br><font style='line-height:1;'>坡度：" + resultinf[mark].imgurl + "</font></br><font style='line-height:1;'>绿荫覆盖率：" + resultinf[mark].shade + "</font></br><font style='line-height:1;'>减速带：" + resultinf[mark].block + "个</font></div>"
        infoWin1 = new T.InfoWindow(sContent, { closeOnClick: true, autoPan: true, offset: new T.Point(0, -32) });
        infoWin1.setLngLat(new T.LngLat(middlex, middley));
        infoWin1.addEventListener("close", infoclose);
    //向地图上添加信息窗口
    map.addOverLay(infoWin1);
    //   console.log(resultline);    

}
$("#left").click(function () {
    if (mark >= 1) {
        mark--;
        turnlorr();
    }

})
$("#right").click(function () {
    if (mark < resultline.length - 2) {
        mark++;
        turnlorr();
    }
})
function infoclose(e) {
    $("#showress").css("background-color", "rgba(0, 0, 0, 0)");
    $("#left").css("display", "none");
    $("#right").css("display", "none");
    if (camposs) {
        map.removeOverLay(camposs)
    }
    var layer1;
    var tp, tc;
    layer1 = map.getOverlays();
    for (var u = 0; u < layer1.length; u++) {
        tp = layer1[u].options.__proto__.type;
        tc = layer1[u].options.color;
        if (tp === 4 && tc === '#ff0000') {
            map.removeOverLay(layer1[u]);
        }
    }
    mark = 0;
}

function turnlorr() {
    if (camposs) {
        map.removeOverLay(camposs)
    }
    if (infoWin1) {
        infoWin1.removeEventListener("close", infoclose);
        map.removeOverLay(infoWin1);
    }
    var layer1;
    var tp, tc;
    layer1 = map.getOverlays();
    for (var u = 0; u < layer1.length; u++) {
        tp = layer1[u].options.__proto__.type;
        tc = layer1[u].options.color;
        if (tp === 4 && tc === '#ff0000') {
            map.removeOverLay(layer1[u]);
        }
    }
    var linenow1 = [];
    linenow1.push(resultline[mark], resultline[mark + 1]);
    var linen1 = new T.Polyline(linenow1, { color: "#ff0000", opacity: 1, weight: 7, lineStyle: "solid" });
    map.addOverLay(linen1);
    map.setViewport(linenow1);
    var middlex, middley;
    middlex = (resultline[mark].lng + resultline[mark + 1].lng) / 2;
    middley = (resultline[mark].lat + resultline[mark + 1].lat) / 2;
    /*    $("#middlecam").css("left", middlex);
        $("#middlecam").css("top", middley);
        $("#middlecam").css("display","block");*/

        camposs.setLngLat(new T.LngLat(middlex, middley));
        map.addOverLay(camposs);

        var sContent1 = "<div><font style='line-height:1;'>骑行方向：" + resultdir[mark].direction + "</font></br><font style='line-height:1;'>骑行距离：" + resultinf[mark].distance.toFixed(1) + "米</font></br><font style='line-height:1;'>坡度：" + resultinf[mark].imgurl + "</font></br><font style='line-height:1;'>绿荫覆盖率：" + resultinf[mark].shade + "</font></br><font style='line-height:1;'>减速带：" + resultinf[mark].block + "个</font></div>"
        infoWin1.setContent(sContent1);
        infoWin1.setLngLat(new T.LngLat(middlex, middley));
        infoWin1.addEventListener("close", infoclose);
        map.addOverLay(infoWin1);
    }


//搜索框
function gofun() {
    var text = document.getElementById("inf").value;
    var layer1;
    var tp;
    layer1 = map.getOverlays();
    for (var u = 0; u < layer1.length; u++) {
        tp = layer1[u].options.__proto__.type;
        if (tp === 3) {
            map.removeOverLay(layer1[u]);
        }
    };
    layer1 = null;
    tp = null;
    for (var i = 0; i < address.length; i++) {
        if (text === address[i].name) {
            finish = address[i].lnglat;
            var infoWin = new T.InfoWindow({ closeOnClick: true });
            infoWin.setLngLat(finish);
            //设置信息窗口要显示的内容
            //   infoWin.setContent(address[i].name);
            var sContent =
            "<div style='margin:0px;'>" +
            "<div style='margin:10px 10px; '>" +
            "<img style='float:left;margin-right:10px:0' src='static/imgs/mapicon/logo.png' width='77' height='81'/>" +
            "<div style='margin:10px 10px 10px 100px'>地名 : " + address[i].name + "<br>类别：" + address[i].type + " <br>具体位置：" + address[i].lnglat.lng + "," + address[i].lnglat.lat +
            "</div>" +
        //    "<input type='text' style='width:100px;height:50px' placeholder='kaishi'/>" +
        "<input style='float:left;margin-left:30px; width: 80px;height: 24px; text-align: center; background: #5596de;color: #FFF;border: none;display: block;cursor: pointer;' id='bm' type='button' value='从这出发'/>" +
        "<input style='margin-left:195px;  width: 80px;height: 24px; text-align: center; background: #5596de;color: #FFF;border: none;display: block;cursor: pointer;' id='fm' type='button' value='到这里'/>" +
        "</div>" +
        "</div>";
        infoWin.setContent(sContent);
            //向地图上添加信息窗口
            map.addOverLay(infoWin);
            map.panTo(finish);
            document.getElementById("bm").onclick = function () {
                map.clearOverLays();
                map.addOverLay(lk);
                map.addOverLay(yxlk);
                map.addOverLay(xqlk);
                if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
                    $("#drop").css("display", "none");
                    //删除ul子元素
                    $("#infotable1").children('li').remove();
                    $("#myTabContent div").removeClass("active in");
                    $("#func").addClass("active in");
                    map.removeEventListener("click", MapClick);
                } else {
                    closechart();
                    //删除ul子元素
                    $("#infotable").children('li').remove();
                    //删除ul子元素
                    $("#infotext").children('li').remove();
                    $('#echarts').css("display", "none");
                }

                //起点
                var icon1 = new T.Icon({
                    iconUrl: "static/imgs/mapicon/beg.png",
                    iconSize: new T.Point(45, 45),
                    iconAnchor: new T.Point(22, 40)
                });
                //向地图上添加自定义标注
                var marker = new T.Marker(finish, { icon: icon1 });
                map.addOverLay(marker);
                beginlng = finish.lng;
                beginlat = finish.lat;
                finish = null;
                icon1 = null;
            };
            document.getElementById("fm").onclick = function () {
                if (infoWin) {
                    infoWin.closeInfoWindow();
                }
                removeMapClick();
                if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
                    /*  if ($("#cont").css("display") === "block") {
                          $("#cont").css("display", "none");
                      }*/
                      map.addEventListener("click", MapClick);
                  }
                //终点
                finishlng = finish.lng;
                finishlat = finish.lat;
                finish = null;
                //计算
                calculate();
            };
        }
    }
}
//测距button
function getDistance(points) {
    var r = 0;
    var leng = document.getElementById("leng");
    for (var k = 0; k < points.length - 1; k++) {
        r += points[k].distanceTo(points[k + 1]);
    }
    leng.value = r / 1000 + "公里";
}
//找最佳路径button
function findline() {
    var layer1;
    var tp;
    var tc;
    var kp = 0;
    layer1 = map.getOverlays();
    //  console.log(layer1);
    for (var u = 0; u < layer1.length; u++) {
        tp = layer1[u].options.__proto__.type;
        tc = layer1[u].options.color;
        if (tp === 4 && tc === "#0000ff") {
            map.removeOverLay(layer1[u]);
        }
        if (tp === 2) {
            map.removeOverLay(layer1[u]);
        }
    }

    var begid = parseInt(document.getElementById("begP").value);//起点点号
    var finid = parseInt(document.getElementById("finP").value);//终点点号

    var result = [];
    result.push(begid);
    brow = 0;
    frow = 0;
    //兑换出起点终点对应的行和列
    for (q = 0; q < pnum; q++) {
        if (data[q][0] === begid) {
            brow = q;
        } else if (data[q][0] === finid) {
            frow = q;
        }
    }

    //创建图片对象
    //起点
    var icon1 = new T.Icon({
        iconUrl: "static/imgs/mapicon/beg.png",
        iconSize: new T.Point(45, 45),
        iconAnchor: new T.Point(22, 40)
    });
    //终点
    var icon2 = new T.Icon({
        iconUrl: "static/imgs/mapicon/fin.png",
        iconSize: new T.Point(45, 45),
        iconAnchor: new T.Point(22, 40)
    });
    //向地图上添加自定义标注
    var marker = new T.Marker(data[brow][1], { icon: icon1 });
    var marker1 = new T.Marker(data[frow][1], { icon: icon2 });
    map.addOverLay(marker);
    map.addOverLay(marker1);

    while (true) {
        if (P[brow][frow] === frow) {
            break;
        } else {
            brow = P[brow][frow];
            result.push(data[brow][0]);
        }
    }
    result.push(finid);

    /* var str = "";
     for (i = 0; i < result.length; i++) {
         str += result[i] + ",";
     }
     document.getElementById("result").value = str;*/

    //显示路线
    var resultline = [];
    var Tresultline;
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < data.length - 1; j++) {
            if (result[i] === data[j][0]) {
                resultline.push(data[j][1]);
            }
        }
    }
    Tresultline = new T.Polyline(resultline, { color: "#0000ff" });
    map.addOverLay(Tresultline);
}
//隐藏路线button
function hideresultline() {
    var layer1;
    var tp, tc;
    var kp = 0;
    layer1 = map.getOverlays();
    for (var u = 0; u < layer1.length; u++) {
        tp = layer1[u].options.__proto__.type;
        tc = layer1[u].options.color;
        if (tp === 4 && tc === "#0000ff") {
            map.removeOverLay(layer1[u]);
        }
    }
}
//H5定位
var position = function (e) {
    if (this.getStatus() == 0) {
        removeMapClick();
        map.clearOverLays();
        map.addOverLay(lk);
        map.addOverLay(yxlk);
        map.addOverLay(xqlk);
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            $("#drop").css("display", "none");
            //删除ul子元素
            $("#infotable1").children('li').remove();
            $("#myTabContent div").removeClass("active in");
            $("#func").addClass("active in");
            map.removeEventListener("click", MapClick);
        } else {
            closechart();
            //删除ul子元素
            $("#infotable").children('li').remove();
            //删除ul子元素
            $("#infotext").children('li').remove();
            $('#echarts').css("display", "none");
        }
        var icon1 = new T.Icon({
            iconUrl: "static/imgs/mapicon/beg.png",
            iconSize: new T.Point(45, 45),
            iconAnchor: new T.Point(22, 40)
        });
        map.centerAndZoom(e.lnglat, 17)
        //  alert("获取定位坐标：" + e.lnglat.lat + "," + e.lnglat.lng)
        var marker = new T.Marker(e.lnglat, { icon: icon1 });
        map.addOverLay(marker);
        beginlng = e.lnglat.getLng();
        beginlat = e.lnglat.getLat();
        icon1 = null;
    }
    if (this.getStatus() == 1) {
        alert("定位失败");
    }
}
//坐标移入线段
function removepoint(lngg, latt, num) {
    isaddline = Boolean(false);
    add1 = Boolean(false);
    add2 = Boolean(false);
    var mark1 = 0;
    var n = num;
    var lng = lngg, lat = latt;
    var x0, y0, z0;
    var R = 6370996.81;
    x0 = R * Math.cos(lat * Math.PI / 180.0) * Math.cos(lng * Math.PI / 180.0);
    y0 = R * Math.cos(lat * Math.PI / 180.0) * Math.sin(lng * Math.PI / 180.0);
    z0 = R * Math.sin(lat * Math.PI / 180.0);
    var x1, x2, x3, y1, y2, y3, z1, z2, z3, k;
    var beid, fiid;
    var distan = [100000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//distance,begid,finid,x3,y3,z3,l1,b1,l2,b2,poidb,poidf
    var tans;
    var xi;
    var b1, b2, l1, l2;
    var B0, L0;
    var Hb, Hf;

    //再增加一个判断

    //增加一个判断
    var distt;
    var mindistt = 10000;
    var minid;
    var minidmark;
    var x4, y4, z4;
    var poidb, poidf;
    for (var j = 0; j < p.length; j++) {
        x4 = R * Math.cos(p[j][3] * Math.PI / 180.0) * Math.cos(p[j][2] * Math.PI / 180.0);
        y4 = R * Math.cos(p[j][3] * Math.PI / 180.0) * Math.sin(p[j][2] * Math.PI / 180.0);
        z4 = R * Math.sin(p[j][3] * Math.PI / 180.0);
        if (Math.sqrt(Math.pow((x0 - x4), 2) + Math.pow((y0 - y4), 2) + Math.pow((z0 - z4), 2)) < 5) {//设置和节点距离小于5m，就用节点代替起（终）点
            minid = p[j][0] - 1;
            minidmark = j;
            //谢谢你console     console.log(1);
            mark1 = 2;
            break;
        } else {
            distt = R * Math.acos(Math.cos(lat / 180 * Math.PI) * Math.cos(p[j][3] / 180 * Math.PI) * Math.cos(lng / 180 * Math.PI - p[j][2] / 180 * Math.PI) + Math.sin(lat / 180 * Math.PI) * Math.sin(p[j][3] / 180 * Math.PI));
            if (distt < mindistt) {
                mindistt = distt;
                minid = p[j][0] - 1;
                minidmark = j;
            }
        }
    }
    if (mark1 != 2) {
        //thanks    console.log(1);
        for (var i = 0; i < po.length; i++) {
            for (var j = 0; j < p.length; j++) {
                if (p[j][0] === po[i][1] + 1) {
                    x1 = p[j][4];
                    y1 = p[j][5];
                    z1 = p[j][6];
                    beid = po[i][1];
                    l1 = p[j][2];
                    b1 = p[j][3];
                    poidb = i;
                    Hb = p[j][7];
                }
                if (p[j][0] === po[i][2] + 1) {
                    x2 = p[j][4];
                    y2 = p[j][5];
                    z2 = p[j][6];
                    fiid = po[i][2];
                    l2 = p[j][2];
                    b2 = p[j][3];
                    poidf = i;
                    Hf = p[j][7];
                }
            }
            k = ((x0 - x1) * (x2 - x1) + (y0 - y1) * (y2 - y1) + (z0 - z1) * (z2 - z1)) / (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
            x3 = k * (x2 - x1) + x1;
            y3 = k * (y2 - y1) + y1;
            z3 = k * (z2 - z1) + z1;

            xi = (x1 - x3) * (x2 - x3) + (y1 - y3) * (y2 - y3) + (z1 - z3) * (z2 - z3);
            if (xi < 0) {
                B0 = Math.atan(z3 / Math.sqrt(x3 * x3 + y3 * y3));
                if (B0 < 0) {
                    B0 = Math.PI + B0;
                }
                L0 = Math.atan(y3 / x3);
                if (L0 < 0) {
                    L0 = Math.PI + L0;
                }
                tans = R * Math.acos(Math.cos(lat / 180 * Math.PI) * Math.cos(B0) * Math.cos(lng / 180 * Math.PI - L0) + Math.sin(lat / 180 * Math.PI) * Math.sin(B0));
                if (tans < distan[0]) {
                    distan[0] = tans;
                    distan[1] = beid;
                    distan[2] = fiid;
                    distan[3] = x3;
                    distan[4] = y3;
                    distan[5] = z3;
                    distan[6] = l1;
                    distan[7] = b1;
                    distan[8] = l2;
                    distan[9] = b2;
                    distan[10] = poidb;
                    distan[11] = poidf;
                    distan[12] = Hb;
                    distan[13] = Hf;
                }
            }
        }
        if (distan[0] > mindistt || Math.abs(distan[0] - mindistt) < 5) {//若垂径和节点到起（终）点距离差小于5m，就用节点
            mark1 = 1;
        }
    }

    var H = neicha(lng, lat);//起/终高程
    var h;//垂足高程
    H = parseFloat(H).toFixed(4);
    if (mark1 === 0) {
        var B, L;
        B = Math.atan(distan[5] / Math.sqrt(distan[3] * distan[3] + distan[4] * distan[4]));
        if (B < 0) {
            B = Math.PI + B;
        }

        L = Math.atan(distan[4] / distan[3]);
        if (L < 0) {
            L = Math.PI + L;
        }

        l1 = distan[6] * Math.PI / 180;
        b1 = distan[7] * Math.PI / 180;
        l2 = distan[8] * Math.PI / 180;
        b2 = distan[9] * Math.PI / 180;
        var dis1toc, dis2toc;
        dis1toc = R * Math.acos(Math.cos(b1) * Math.cos(B) * Math.cos(l1 - L) + Math.sin(b1) * Math.sin(B));
        dis2toc = R * Math.acos(Math.cos(b2) * Math.cos(B) * Math.cos(l2 - L) + Math.sin(b2) * Math.sin(B));

        B = B * 180 / Math.PI;
        L = L * 180 / Math.PI;
        h = distan[12] + dis1toc * (distan[13] - distan[12]) / (dis1toc + dis2toc);
        h = parseFloat(h).toFixed(4);
        p.push([p[p.length - 1][0] + 1, new T.LngLat(L, B), L, B, 0, 0, 0, h]);//垂足
        p.push([p[p.length - 1][0] + 1, new T.LngLat(lng, lat), lng, lat, 0, 0, 0, H]);//起点或终点
    } else if (mark1 === 1) {
        p.push([p[p.length - 1][0] + 1, new T.LngLat(lng, lat), lng, lat, 0, 0, 0, H]);//起点或终点
    } else {

    }
    /*   <ul class="nav nav-tabs" style=" text-align: center; z-index: 20000; position: absolute; width:15%; top: 10px; right: 10px;">
            <li class="dropdown active" style="z-index: 20000;width:100%;">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" style=" cursor: pointer">功能列表<span class="caret"></span>
                </a>
                <ul class="dropdown-menu" style="text-align: center;width:100%">
                    <li><a id="instr" data-toggle="modal" data-target="#instrument" aria-expanded="false" style="cursor: pointer">使用说明</a>
                        <a data-toggle="modal" data-target="#mymodal-data" id="xishu" style="cursor: pointer">系数选择</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <p><strong class="text-info">统计分析</strong></p>
                        <button type="button" id="distance" data-toggle="modal" data-target="#modal-dis" class="btn btn-primary">距离</button>
                        <button type="button" id="slope" data-toggle="modal" data-target="#modal-slope" class="btn btn-primary">坡度</button>
                        <button type="button" id="shade" data-toggle="modal" data-target="#modal-shade" class="btn btn-primary">绿荫</button>
                    </li>
                    <li class="divider" id="divi" runat="server"></li>
                    <li id="admin" runat="server">
                        <div>
                            <button type="button" id="te" class="btn btn-primary" >展点</button>
                            <button type="button" id="showline" class="btn btn-primary">展网</button>
                            <button class="btn btn-primary" id="heatmap" type="button">显示高程图</button>
                        </div>
                    </li>
                </ul>
            </li>
            </ul>*/
            var maxid = 0;
            var slo, dis, blo, sha;
            for (var m = 0; m < po.length; m++) {
                if (po[m][0] > maxid) {
                    maxid = po[m][0];
                }
                if (distan[1] === po[m][1] && distan[2] === po[m][2]) {
                    slo = po[m][3];
                    dis = po[m][4];
                    blo = po[m][5];
                    sha = po[m][6];
                }
            }
            if (mark1 === 0) {
        //slope,dis,block,shade
        var slo1, slo2;
        if (slo > 0) {
            slo1 = ((slo - Slmin) / (Slmax - Slmin)) * 0.5 + 0.5;
            slo2 = ((-slo - Slmin) / (Slmax - Slmin)) * 0.5;
        } else {
            slo1 = ((slo - Slmin) / (Slmax - Slmin)) * 0.5;
            slo2 = ((-slo - Slmin) / (Slmax - Slmin)) * 0.5 + 0.5;
        }

        var grade1 = (xislope * slo1 + xidis + xishade * ((Shmax - sha) / (Shmax - Shmin))) * dis1toc;
        var grade2 = (xislope * slo2 + xidis + xishade * ((Shmax - sha) / (Shmax - Shmin))) * dis1toc;
        po.push([maxid + 1, distan[1], p[p.length - 2][0] - 1, slo, dis1toc, 0, sha, grade1]);//be与垂足
        po.push([maxid + 2, p[p.length - 2][0] - 1, distan[1], -slo, dis1toc, 0, sha, grade2]);//垂足与be


        var grade3 = (xislope * slo2 + xidis + xishade * ((Shmax - sha) / (Shmax - Shmin))) * dis2toc;
        var grade4 = (xislope * slo1 + xidis + xishade * ((Shmax - sha) / (Shmax - Shmin))) * dis2toc;
        po.push([maxid + 3, distan[2], p[p.length - 2][0] - 1, -slo, dis2toc, 0, sha, grade3]);//fi与垂足
        po.push([maxid + 4, p[p.length - 2][0] - 1, distan[2], slo, dis2toc, 0, sha, grade4]);//垂足与fi

        var slop1 = (h - H) / distan[0];
        po.push([maxid + 5, p[p.length - 1][0] - 1, p[p.length - 2][0] - 1, slop1, distan[0], 0, 0, 50]);//起/终与垂足
        po.push([maxid + 6, p[p.length - 2][0] - 1, p[p.length - 1][0] - 1, -slop1, distan[0], 0, 0, 50]);//起/终与垂足

        po.splice(distan[10], 1);
        po.splice(distan[11], 1);
        isaddline = Boolean(true);
        add2 = Boolean(true);
    } else if (mark1 === 1) {
        var slop2 = (p[minidmark][7] - H) / mindistt;
        po.push([maxid + 1, p[p.length - 1][0] - 1, minid, slop2, mindistt, 0, 0, 50]);//起/终与节点
        po.push([maxid + 2, minid, p[p.length - 1][0] - 1, -slop2, mindistt, 0, 0, 50]);//起/终与节点
        isaddline = Boolean(true);
        add1 = Boolean(true);
    } else {
        add1 = Boolean(false);
        add2 = Boolean(false);
        isaddline = Boolean(false);
    }

    //取出起点或终点的id
    if (n === 0) {
        if (mark1 === 2) {
            beginid = minid + 1;
        } else {
            beginid = p[p.length - 1][0];
        }
    } else if (n === 1) {
        if (mark1 === 2) {
            finishid = minid + 1;
        } else {
            finishid = p[p.length - 1][0];
        }
    }
    //   console.log(p);
}
function Distance(l1, l2, b1, b2) {
    var R = 6370996.81;
    l1 = l1 * Math.PI / 180;
    l2 = l2 * Math.PI / 180;
    b1 = b1 * Math.PI / 180;
    b2 = b2 * Math.PI / 180;
    var dis = R * Math.acos(Math.cos(b1) * Math.cos(b2) * Math.cos(l1 - l2) + Math.sin(b1) * Math.sin(b2));
    return dis;
}

function neicha(Lng, Lat) {
    var b1, b2, b3, b4;
    var l1, l2, l3, l4;
    var row, col;
    var H;
    row = parseInt((rightlat - Lat) / 0.00083333333333333);
    col = parseInt((Lng - leftlng) / 0.00083333333333333);
    b1 = b2 = rightlat - row * 0.00083333333333333;
    b3 = b4 = b1 - 0.00083333333333333;
    l1 = l3 = leftlng + col * 0.00083333333333333;
    l2 = l4 = l1 + 0.00083333333333333;
    d1 = Distance(Lng, l1, Lat, b1);
    d2 = Distance(Lng, l2, Lat, b2);
    d3 = Distance(Lng, l3, Lat, b3);
    d4 = Distance(Lng, l4, Lat, b4);
    H = (gao[row][col] / (d1 * d1) + gao[row][col + 1] / (d2 * d2) + gao[row + 1][col] / (d3 * d3) + gao[row + 1][col + 1] / (d4 * d4)) / (1 / d1 / d1 + 1 / d2 / d2 + 1 / d3 / d3 + 1 / d4 / d4);
    //  console.log(gao[row, col] + "," + H);
    return H;
}

function removeMapClick() {
    map.removeEventListener("click", MapBClick);
    map.removeEventListener("click", MapFClick);
}

function MapBClick(e) {
    map.clearOverLays();
    map.addOverLay(lk);
    map.addOverLay(yxlk);
    map.addOverLay(xqlk);
    $("#more").css("display", "none");
    $("#shoucang").css("background-color", "rgba(0,0,0,0)");
    close3dmap();
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        //删除ul子元素
        $("#infotable1").children('li').remove();
        /* $(".dropdown-menu li").removeClass("active");
         $("#myTabContent div").removeClass("active in");
         $("#info").addClass("active in");*/
     } else {
        closechart();
        //删除ul子元素
        $("#infotable").children('li').remove();
        //删除ul子元素
        $("#infotext").children('li').remove();
        $('#echarts').css("display", "none");
        $("#tip").css("display", "none");
        $("#tishipai").css("background-color", "rgba(0, 0, 0, 0)");
    }
    //起点
    var icon1 = new T.Icon({
        iconUrl: "static/imgs/mapicon/beg.png",
        iconSize: new T.Point(45, 45),
        iconAnchor: new T.Point(22, 40)
    });
    //向地图上添加自定义标注
    var marker = new T.Marker(new T.LngLat(e.lnglat.getLng(), e.lnglat.getLat()), { icon: icon1 });
    map.addOverLay(marker);
    beginlng = e.lnglat.getLng();
    beginlat = e.lnglat.getLat();
    icon1 = null;
}

function MapFClick(e) {
    //终点
    finishlng = e.lnglat.getLng();
    finishlat = e.lnglat.getLat();
    calculate();
}

function cloudpoint() {
    Cloud = new T.CloudMarkerCollection(addre, {
        color: 'red',
        SizeType: TDT_POINT_SIZE_NORMAL,
    });
    Cloud.removeEventListener("click", cloudClick);
    map.addOverLay(Cloud);
    Cloud.addEventListener("click", cloudClick);
}

function cloudClick(e) {
    removeMapClick();
    var layer1;
    var tp;
    layer1 = map.getOverlays();
    for (var u = 0; u < layer1.length; u++) {
        tp = layer1[u].options.__proto__.type;
        if (tp === 3) {
            map.removeOverLay(layer1[u]);
        }
    }
    layer1 = null;
    tp = null;
    for (var i = 0; i < address.length; i++) {
        if ((address[i].lnglat.lng === e.lnglat.lng) && (address[i].lnglat.lat === e.lnglat.lat)) {
            finish = address[i].lnglat;
            var infoWin = new T.InfoWindow();
            infoWin.setLngLat(finish);
            //设置信息窗口要显示的内容
            infoWin.setContent(address[i].name);
            var sContent =
            "<div style='margin:0px;'>" +
            "<div style='margin:10px 10px; '>" +
            "<img style='float:left;margin-right:10px:0' src='static/imgs/mapicon/logo.png' width='77' height='81'/>" +
            "<div style='margin:10px 10px 10px 100px'>地名 : " + address[i].name + "<br>类别：" + address[i].type + " <br>具体位置：" + address[i].lnglat.lng + "," + address[i].lnglat.lat +
            "</div>" +
            "<input style='float:left;margin-left:30px; width: 80px;height: 24px; text-align: center; background: #5596de;color: #FFF;border: none;display: block;cursor: pointer;' id='bm' type='button' value='从这出发'/>" +
            "<input style='margin-left:195px;  width: 80px;height: 24px; text-align: center; background: #5596de;color: #FFF;border: none;display: block;cursor: pointer;' id='fm' type='button' value='到这里'/>" +
            "</div>" +
            "</div>";
            infoWin.setContent(sContent);
            //向地图上添加信息窗口
            map.addOverLay(infoWin);
            map.panTo(finish);
            document.getElementById("bm").onclick = function () {
                map.clearOverLays();
                //删除ul子元素
                $("#infotext").children('li').remove();
                //删除ul子元素
                $("#infotable").children('li').remove();
                //起点
                var icon1 = new T.Icon({
                    iconUrl: "static/imgs/mapicon/beg.png",
                    iconSize: new T.Point(45, 45),
                    iconAnchor: new T.Point(22, 40)
                });
                //向地图上添加自定义标注
                var marker = new T.Marker(finish, { icon: icon1 });
                map.addOverLay(marker);
                beginlng = finish.lng;
                beginlat = finish.lat;

                finish = null;
                icon1 = null;
            };
            document.getElementById("fm").onclick = function () {
                if (infoWin) {
                    infoWin.closeInfoWindow();
                }
                finishlng = finish.lng;
                finishlat = finish.lat;
                finish = null;
                //计算
                calculate();
            };
        }
    }
}
function MapClick(e) {
    //  console.log(e.lnglat.getLng() + "," + e.lnglat.getLat());
    //      $("#li1").css("display", "none");
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        /*   if ($("#li1").css("display") === "none") {
               $("#li1").css("display", "block");
               $("#main").css("bottom", "3.5em");
           } else {
               $("#li1").css("display", "none");
               $("#main").css("bottom", "0");
           }*/
           $("#search").css("display", "none");
       } else {
        //  console.log(e.lnglat.lng + "," + e.lnglat.lat);
    }
}
function makebe() {
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        if ($("#cont").css("display") === "block") {
            $("#cont").css("display", "none");
        }
        map.removeEventListener("click", MapClick);
    }
    removeMapClick();
    map.addEventListener("click", MapBClick);
}
function makefi() {
    removeMapClick();

    map.addEventListener("click", MapFClick);
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        if ($("#cont").css("display") === "block") {
            $("#cont").css("display", "none");
        }
        map.addEventListener("click", MapClick);
    }
}
function showcloud(ob) {
    if ($(ob).html() === "展POI") {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            if ($("#cont").css("display") === "block") {
                $("#cont").css("display", "none");
            }
        }
        if (Cloud) {
            Cloud.clear();
        }
        cloudpoint();
        $(ob).html("隐POI");
    } else {
        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
            if ($("#cont").css("display") === "block") {
                $("#cont").css("display", "none");
            }
        }
        $(ob).html("展POI");
        Cloud.removeEventListener("click", cloudClick);
        Cloud.clear();
    }
}
function clearmap() {
    beginlng = null;
    beginlat = null;
    finishlng = null;
    finishlat = null;
    beginid = null;
    finishid = null;
    mark = 0;
    map.clearOverLays();
    map.addOverLay(lk);
    map.addOverLay(yxlk);
    map.addOverLay(xqlk);
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        if ($("#cont").css("display") === "block") {
            $("#cont").css("display", "none");
        }
        $("#drop").css("display", "none");
        //删除ul子元素
        $("#infotable1").children('li').remove();
        $(".dropdown-menu li").removeClass("active");
        $("#myTabContent div").removeClass("active in");
        $("#func").addClass("active in");
        map.removeEventListener("click", MapClick);
        map.addEventListener("click", MapClick);

    } else {
        //删除ul子元素
        $("#infotable").children('li').remove();
        //删除ul子元素
        $("#infotext").children('li').remove();
        $('#echarts').css("display", "none");
        $("#tip").css("display", "none");
        $("#tishipai").css("background-color", "rgba(0, 0, 0, 0)");
    }
    removeMapClick();
    $("#heatmap").html("显示高程图");
    $("#te").html('展点');
    $("#showline").html('展网');
    $("#heatmap1").html("显示高程图");
    $("#te1").html('展点');
    $("#showline1").html('展网');
    $("#showc1").html("展POI");
    $("#showc2").html("展POI");
    $("#more").css("display", "none");
    $("#shoucang").css("background-color", "rgba(0,0,0,0)");
    $("#mmp1 .list-group-item").removeClass("active");
    $("#mmp2 .list-group-item").removeClass("active");
    $("#mmp1").unbind("click");
    $("#mmp2").unbind("click");
    close3dmap();
    if (Cloud) {
        Cloud.removeEventListener("click", cloudClick);
        Cloud.clear();
    }
}
function closeinf() {
    $("#tip").css("display", "none");
    $("#tishipai").css("background-color", "rgba(0, 0, 0, 0)");
}
function closechart() {
    $('#echarts').css("display", "none");
    $("#fenxi").css("background-color", "rgba(0, 0, 0, 0)");
}
function closecont() {
    $("#cont").css("display", "none");
}
function showres() {
    // console.log($(ob).css("background-color"));
    if ($("#showress").css("background-color") === "rgb(255, 215, 0)") {
        $("#showress").css("background-color", "rgba(0, 0, 0, 0)");
        $("#left").css("display", "none");
        $("#right").css("display", "none");
        if (camposs) {
            map.removeOverLay(camposs)
        }
        var layer1;
        var tp, tc;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            tc = layer1[u].options.color;
            if (tp === 4 && tc === '#ff0000') {
                map.removeOverLay(layer1[u]);
            }
        }
        mark = 0;
        if (infoWin1) {
            map.removeOverLay(infoWin1);
            map.removeEventListener("close", infoclose);
        }
    } else {
        $("#showress").css("background-color", "rgb(255, 215, 0)");
        var icon = new T.Icon({
            iconUrl: "static/imgs/指南针.png",
            iconSize: new T.Point(60, 60),
            iconAnchor: new T.Point(30, 30)
        });

        if (camposs) {
            map.removeOverLay(camposs)
        }
        if (infoWin1) {
            map.removeOverLay(infoWin1);
            map.removeEventListener("close", infoclose);
        }
        $("#left").css("display", "block");
        $("#right").css("display", "block");
        var layer1;
        var tp, tc;
        layer1 = map.getOverlays();
        for (var u = 0; u < layer1.length; u++) {
            tp = layer1[u].options.__proto__.type;
            tc = layer1[u].options.color;
            if (tp === 4 && tc === '#ff0000') {
                map.removeOverLay(layer1[u]);
            }
        }
        //   console.log(e.target.Gt[0]);
        //    var xy = [].concat(e.target.Gt[0]);
        mark = 0;
        var linenow = [];
        linenow.push(resultline[mark], resultline[mark + 1]);
        var linen = new T.Polyline(linenow, { color: "#ff0000", opacity: 1, weight: 7, lineStyle: "solid" });
        map.addOverLay(linen);
        map.setViewport(linenow);
        var middlex, middley;
        middlex = (resultline[mark].lng + resultline[mark + 1].lng) / 2;
        middley = (resultline[mark].lat + resultline[mark + 1].lat) / 2;
        /*    $("#middlecam").css("left", middlex);
            $("#middlecam").css("top", middley);
            $("#middlecam").css("display","block");*/
            camposs = new T.Marker(new T.LngLat(middlex, middley), { icon: icon });
            map.addOverLay(camposs);

            var sContent = "<div><font style='line-height:1;'>骑行方向：" + resultdir[mark].direction + "</font></br><font style='line-height:1;'>骑行距离：" + resultinf[mark].distance.toFixed(1) + "米</font></br><font style='line-height:1;'>坡度：" + resultinf[mark].imgurl + "</font></br><font style='line-height:1;'>绿荫覆盖率：" + resultinf[mark].shade + "</font></br><font style='line-height:1;'>减速带：" + resultinf[mark].block + "个</font></div>"
            infoWin1 = new T.InfoWindow(sContent, { closeOnClick: true, autoPan: true, offset: new T.Point(0, -32) });
            infoWin1.setLngLat(new T.LngLat(middlex, middley));
            infoWin1.addEventListener("close", infoclose);
        //向地图上添加信息窗口
        map.addOverLay(infoWin1);
    }
}
function init() {
    // chart4.showLoading();
    $("#loading").css("display", "none");

    // chart4.hideLoading();
    chart4.setOption(option4);
}
$("#3did").click(function () {
    $("#3did").css("background-color", " rgb(255, 215, 0)");
    $("#3dmapcont").css("display", "block");
    $("#loading").css("display", "block");

    // $("#3dmapcont").css("display", "block");
    // $("#loading").css("display", "block");
    chart4.clear();
    // chart4.showLoading();
    setTimeout(init, 500);


    // $("#loading").css("display", "none");
    //  $("#3dmap").css("display", "block");
})
function close3dmap() {
    $("#3dmapcont").css("display", "none");
    $("#3did").css("background-color", " rgba(0,0,0,0)");
}

function center1() {
    var zuobiao = [];
    zuobiao.push(bzuobiao, fzuobiao);
    map.setViewport(zuobiao);//合适的视野
    map.zoomOut();
}
function huduanrefresh(xislo1, xidis1, xishade1, xiblock1) {
    ponow1 = [];
    ponow1 = [].concat(huduan);
    ponow1.pop();
    var xi1, xi2 = 1, xi3, xi4;
    xislope, xidis, xiblock, xishade
    xislope = xislo1 / (xislo1 + xidis1 + xishade1 + xiblock1);
    xidis = xidis1 / (xislo1 + xidis1 + xishade1 + xiblock1);
    xishade = xishade1 / (xislo1 + xidis1 + xishade1 + xiblock1);
    xiblock = xiblock1 / (xislo1 + xidis1 + xishade1 + xiblock1);

    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)/*/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)*/) {
        $("#disbar1").css("width", (xidis * 100) + "%");
        $("#shadebar1").css("width", (xishade * 100) + "%");
        $("#slopebar1").css("width", (xislope * 100) + "%");
        $("#blockbar1").css("width", (xiblock * 100) + "%");
    } else {
        $("#disbar").css("width", (xidis * 100) + "%");
        $("#shadebar").css("width", (xishade * 100) + "%");
        $("#slopebar").css("width", (xislope * 100) + "%");
        $("#blockbar").css("width", (xiblock * 100) + "%");
    }

    // xislope = mapslope, xidis = mapdis, xiblock = mapblock, xishade = mapshade;
    for (var i = 0; i < ponow1.length; i++) {
        if (ponow1[i][3] >= 0) {
            xi1 = ((ponow1[i][3] - Slmin) / (Slmax - Slmin)) * 0.5 + 0.5;
        } else {
            xi1 = ((ponow1[i][3] - Slmin) / (Slmax - Slmin)) * 0.5;
        }
        xi3 = (1 - ((ponow1[i][6] - Shmin) / (Shmax - Shmin))) * 0.8 + 0.1;
        xi4 = ((ponow1[i][5] - Bmin) / (Bmax - Bmin)) * 0.8 + 0.1;
        ponow1[i][7] = (xislope * xi1 + xi2 * xidis + xi3 * xishade + xi4 * xiblock) * ponow1[i][4];
    }
    //  console.log(ponow);

    calculate();
}

function huduanrefresh1() {
    var x1, x2, x3, x4;
    x1 = parseFloat($("#Text1").val());
    x2 = parseFloat($("#Text2").val());
    x3 = parseFloat($("#Text4").val());
    x4 = parseFloat($("#Text3").val());
    huduanrefresh(x1, x2, x3, x4);
}
function huduanrefresh2() {
    var x1, x2, x3, x4;
    x1 = parseFloat($("#Text5").val());
    x2 = parseFloat($("#Text6").val());
    x3 = parseFloat($("#Text8").val());
    x4 = parseFloat($("#Text7").val());
    huduanrefresh(x1, x2, x3, x4);

}

function shoucangfun() {
    if ($("#shoucang").css("background-color") != "rgb(255, 215, 0)") {
        var baddress, faddress;
        baddress = addressfind(beginlng, beginlat);
        faddress = addressfind(finishlng, finishlat);
        $("#shoucang").css("background-color", "rgb(255, 215, 0)");
        store.unshift({
            belng:beginlng,
            belat:beginlat,
            filng:finishlng,
            filat:finishlat,
            baddress:baddress,
            faddress:faddress,
            time: new Date()
        })
        localStorage.setItem('records',JSON.stringify(store))
        renderRecords()
        $("#mmp1 .list-group-item").click(function () {
            $("#mmp1 .list-group-item").removeClass("active");
            $(this).addClass("active");
            var word = $(this).html();
            beginlng = word.substring(word.indexOf('(') + 1, word.indexOf(','));
            beginlat = word.substring(word.indexOf(',') + 1, word.indexOf(')'));
            finishlng = word.substring(word.lastIndexOf('(') + 1, word.lastIndexOf(','));
            finishlat = word.substring(word.lastIndexOf(',') + 1, word.lastIndexOf(')'));
            calculate();
        });
        $("#mmp2 .list-group-item").click(function () {
            $("#mmp2 .list-group-item").removeClass("active");
            $(this).addClass("active");
            var word = $(this).html();
            beginlng = word.substring(word.indexOf('(') + 1, word.indexOf(','));
            beginlat = word.substring(word.indexOf(',') + 1, word.indexOf(')'));
            finishlng = word.substring(word.lastIndexOf('(') + 1, word.lastIndexOf(','));
            finishlat = word.substring(word.lastIndexOf(',') + 1, word.lastIndexOf(')'));
            calculate();
        });
    }
}

function renderRecords(){
    let record = localStorage.getItem('records')
    if(record){
        store = JSON.parse(record)
        let word = ''
        let head1 = `<ul id='mmp1' class='list-group'>`
        let head2 = `<ul id='mmp2' class='list-group'>`
        store.forEach(item=>{
            word += `
            <li class='list-group-item' style='cursor:pointer'>
            <p style='color:green'>起点：</p>${item["baddress"]}<br/>
            (${item["belng"]},${item["belat"]})<br/>
            <p style='color:red'>终点：</p>${item["faddress"]}<br/>
            (${item["filng"]},${item["filat"]})<br/>
            <p align='right'>${item["time"]}</p>
            </li>`
        })
        word += `</ul>`
        $('#Label1').html(head1+word)
        $('#Label2').html(head2+word)
    }
}

function addressfind(lng, lat) {
    var pointss = new T.LngLat(lng, lat);
    var mindis = 500;
    var minmark;
    for (var i = 0; i < address.length; i++) {
        var disss = pointss.distanceTo(address[i].lnglat);
        if (disss < mindis) {
            mindis = parseInt(disss);
            minmark = i;
        }
    }
    if (mindis == 0) {
        return address[minmark].name;
    } else {
        var lng1 = address[minmark].lnglat.lng;
        var lat1 = address[minmark].lnglat.lat;
        var theta;
        if (Math.abs(lat - lat1) < 0.00005) {
            if (lng > lng1) {
                return address[minmark].name + "往东" + mindis + "米";
            } else {
                return address[minmark].name + "往西" + mindis + "米";
            }
        } else if (lat < lat1) {
            if (Math.abs(lng - lng1) < 0.00005) {
                return address[minmark].name + "往南" + mindis + "米";
            } else if (lng < lng1) {
                theta = Math.atan(Math.abs(lng - lng1) / Math.abs(lat - lat1));
                theta = theta * 180 / Math.PI;
                return address[minmark].name + "南偏西" + parseInt(theta) + "度" + mindis + "米";
            } else if (lng > lng1) {
                theta = Math.atan(Math.abs(lng - lng1) / Math.abs(lat - lat1));
                theta = theta * 180 / Math.PI;
                return address[minmark].name + "南偏东" + parseInt(theta) + "度" + mindis + "米";
            }
        } else if (lat > lat1) {
            if (Math.abs(lng - lng1) < 0.00005) {
                return address[minmark].name + "往北" + mindis + "米";
            } else if (lng < lng1) {
                theta = Math.atan(Math.abs(lng - lng1) / Math.abs(lat - lat1));
                theta = theta * 180 / Math.PI;
                return address[minmark].name + "北偏西" + parseInt(theta) + "度" + mindis + "米";
            } else if (lng > lng1) {
                theta = Math.atan(Math.abs(lng - lng1) / Math.abs(lat - lat1));
                theta = theta * 180 / Math.PI;
                return address[minmark].name + "北偏东" + parseInt(theta) + "度" + mindis + "米";
            }
        }
    }
}