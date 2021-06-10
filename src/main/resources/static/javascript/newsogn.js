let sognString;

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
    });
})

$(function nedlukningStatus() {
    let options = "<option></option>" + "<option>Ikke nedlukket</option>" + "<option>Nedlukket</option>";
    sognString = $("#status");
    $(sognString).html(options)
})


$(function () {
    $('#add-event').on('click', function () {
        let dataString = {
            sognKode: $('#sognekode').val(),
            sognNavn: $('#sogn').val(),
            sognKommune: {
                kommuneId: $("#kommune").get(0).selectedIndex
            },
            sognIncidens: $('#incidens').val(),
            sognNedlukket: $('#status').get(0).selectedIndex - 1,
            sognStartDato: $('#dato')
        }


        function maxCheck(x, y) {
            if (x <= y) {
                return x + 1;
            }
        }


        sognString = maxCheck(dataString.sognKommune.kommuneId - 1, $("#kommune option").length - 1)

        console.log(dataString);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/postsogn',
            dataType: 'json',
            data: JSON.stringify(dataString),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            success: function (data) {
                alert('Sogn oprettet')
                console.log(data);
            },
            error: function () {
                $('#err').html("Oops, something went wrong!")
            }
        })
    })
})