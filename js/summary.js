/**
 * Created by lh on 14-2-27.
 */

var serverPath = "http://192.168.1.105:8080/DataService/";

// 从服务端得到入井信息统计的数据
function getRjxxcxData() {
    var startDate = $("#startDate-10").val();
    var endDate = $("#endDate-10").val();
    var unit = $("#unit-10").val();
    var title = $("#title-10").val();


    // TODO : 打开注释, 删除测试方法
    // 校验提交的参数
    /*  if (checkRjxxcxData(startDate, endDate, unit, title)) {
     // 提交到服务端
     $.ajax({
     url: serverPath + "summary/rjxx/beginDate/" + startDate + "/endDate/" + endDate + "/dwid/" + unit + "/zwjb/" + title,
     dataType: "jsonp",
     type: "post",
     jsonpCallback: "rjxxSummary",
     success: function (data) {
     if (data != undefined && data != null && data.length > 0) {
     $.mobile.changePage("#rjxxcx2");
     for (var i = 0; i < data.length; i++) {
     var tableStr = "<tr>";
     tableStr += "<td>" + data[i].deptName + "</td>";
     tableStr += "<td>" + data[i].name + "</td>";
     if (data != undefined && data != null && data.length > 0) {
     $.mobile.changePage("#rjxxcx2");
     for (var i = 0; i < data.length; i++) {
     var tableStr = "<tr>";
     tableStr += "<td>" + data[i].deptName + "</td>";
     tableStr += "<td>" + data[i].name + "</td>";
     tableStr += "<td>" + data[i].rjsj + "</td>";
     tableStr + "</tr>";

     //                                $(tableStr).insertAfter($("#rjxxcx-result tr:last"));
     $(tableStr).appendTo($("#rjxxcx-result tbody"));
     }

     // 刷新table, 否则隐藏coloumn功能不可用
     $("#rjxxcx-result").table("refresh");
     } else {
     alert("没有数据!")
     }

     }
     } else {
     alert("没有数据!")
     }

     },
     error: function () {
     alert("error");
     }
     });
     }*/

    // 测试========start========
    unit = "010102";
    title = "152";
    $.ajax({
        url: serverPath + "summary/rjxx/beginDate/" + startDate + "/endDate/" + endDate + "/dwid/" + unit + "/zwjb/" + title,
        dataType: "jsonp",
        type: "post",
        jsonpCallback: "rjxxSummary",
        success: function (data) {
            if (data != undefined && data != null && data.length > 0) {
                $.mobile.changePage("#rjxxcx2");
                for (var i = 0; i < data.length; i++) {
                    var tableStr = "<tr>";
                    tableStr += "<td>" + data[i].deptName + "</td>";
                    tableStr += "<td>" + data[i].name + "</td>";
                    tableStr += "<td>" + data[i].rjsj + "</td>";
                    tableStr + "</tr>";

//                    $(tableStr).insertAfter($("#rjxxcx-result tr:last"));
                    $(tableStr).appendTo($("#rjxxcx-result tbody"));
                }

                // 刷新table, 否则隐藏coloumn功能不可用
                $("#rjxxcx-result").table("refresh");
            } else {
                alert("没有数据!")
            }

        },
        error: function () {
            alert("error");
        }
    });
    // 测试========end========
}

// 校验入井信息统计提交到服务端的参数
function checkRjxxcxData(startDate, endDate, unit, title) {
    if (startDate == undefined || startDate == null || startDate == "") {
        alert("请输入开始日期!");
        return false;
    }
    if (endDate == undefined || endDate == null || endDate == "") {
        alert("请输入结束日期!");
        return false;
    }
    if (unit == undefined || unit == null || unit == "") {
        alert("请选择单位!");
        return false;
    }
    if (title == undefined || title == null || title == "") {
        alert("请选择职务级别!");
        return false;
    }
}