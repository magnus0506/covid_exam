let sognString;
let pathArr = window.location.pathname.split("/");
console.log(pathArr)

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/kommuner",
        success: function (result) {
            let options = "<option>";
            $.each(result, function (key, val) {
                options += "<option>" + val['kommuneNavn']
            });
            sognString = $("#kommune");
            $(sognString).html(options)
        }
    })

    $.ajax({
        url: "http://localhost:8080/sogne/" + pathArr[1],
        success: function (result) {
            console.log(result)
            let kode = result["sognKode"]
            let sogn = result["sognNavn"]
            let kommune = result["sognKommune"]["kommuneNavn"]
            let incidens = result["sognIncidens"]
            let status = result["sognNedlukket"]
            console.log(status)
            let text
            if (status === false)
                text = 1

            console.log(text)
            let dato = result["sognStartdato"]
            $(function (){
                $("#sognekode").val(kode);
                $("#sogn").val(sogn);
                $("#kommune").val(kommune);
                $("#incidens").val(incidens);
                $("#status").val(text);
                $("#dato").val(dato);
            })
        }
    })




    $(function nedlukningStatus() {
        let options = "<option></option>" + "<option>Ikke nedlukket</option>" + "<option>Nedlukket</option>";
        sognString = $("#status");
        $(sognString).html(options)
    })

    $(function () {
        $('#edit').on('click', function () {
            let dataString = {
                sognKode: $('#sognekode').val(),
                sognNavn: $('#sogn').val(),
                sognKommune: {
                    kommuneId: $("#kommune").get(0).selectedIndex
                },
                sognIncidens: $('#incidens').val(),
                sognNedlukket: $('#status').get(0).selectedIndex - 1,
                sognStartdato: $('#dato').val()
            }


            function maxCheck(x, y) {
                if (x <= y) {
                    return x + 1;
                }
            }

            console.log(dataString)

            sognString = maxCheck(dataString.sognKommune.kommuneId - 1, $("#kommune option").length - 1)
            $.ajax({
                type: 'PATCH',
                url: 'http://localhost:8080/sogne/' + pathArr[1],
                dataType: 'json',
                data: JSON.stringify(dataString),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                success: function (data) {
                    location.replace("http://localhost:8080/")
                    console.log(data);
                },
                error: function () {
                    $('#err').html("Oops, something went wrong!")
                }
            })
        })
    })
})