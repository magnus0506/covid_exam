// tjekker om kalender dagen eller måned er under 10
// hvis den er under tilføjer den et 0 foran for at gøre datoen to cifret
function datoCheck(x, y, z) {
    if (x < y) {
        return "0" + (x + z)
    }
    return x
}

// tjekker om sognet er nedlukket
// de to strings der bliver returneret bliver brugt til dropdown menuen
function nedlukketCheck(x) {
    if (x === true) {
        return "Nedlukket";
    }
    return "Ikke nedlukket";
}

// henter data i JSON format fra backend
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/sogne",
        success: function (result) {
            console.log(result);

            let tableContent = "";

            // kører et forEach loop på alle objekter i resultatet med to parametere
            $.each(result, function (key, value) {

                let date = new Date(value["sognStartdato"])
                date.toJSON();

                // tredje parameter er sat til 1 fordi måned går fra 0-11 i stedet for 1-12
                let monthChecked = datoCheck(date.getMonth(), 10, 1)
                let datoChecked = datoCheck(date.getDate(), 10, 0)
                let nedlukDatoString = datoChecked + "-" + monthChecked + "-" + date.getFullYear()


                let nedlukketBool = nedlukketCheck(value["sognNedlukket"])

                let nedlukningStatus = function () {
                    if (nedlukketBool === "Ikke nedlukket") {
                        return nedlukDatoString = " "
                    } else
                        return nedlukDatoString
                }

                tableContent += "<tr>";
                tableContent +=
                    "<td>" + value["sognKode"] +
                    "</td><td>" + value["sognNavn"] +
                    "</td><td>" + value["sognKommune"]["kommuneKode"] + "</td>" +
                    "</td><td>" + value["sognKommune"]["kommuneNavn"] + "</td>" +
                    "</td><td>" + value["sognIncidens"] + "</td>" +
                    "</td><td>" + nedlukketBool + "</td>" +
                    "<td>" + nedlukningStatus() +
                    "</td><td>" +
                    "<input  type='image' src='/images/edit.png' style='width:20px' alt='Edit' id='img' " +
                    "class='editbtn' data-id='" + value["sognId"] + "'>" +
                    "</td><td>" +
                    "<input type='image' src='/images/delete.png' style='width:20px' alt='Delete' id='img' " +
                    "class='deletebtn' data-id='" + value["sognId"] + "'></td>";
            });
            tableContent += "</tr>";

            $('#tbl tbody').html(tableContent)
        }
    });
    $(document).on('click', ".editbtn", function (e) {
        e.preventDefault();
        const id = $(this).data('id');
        console.log(id)
        window.location.replace("http://localhost:8080/" + id);
    })

    $(document).on('click', ".deletebtn", function (e) {
        e.preventDefault();
        const test = window.confirm("Confirm deletion?")

        if (test) {
            $(this).closest('tr').remove()
            const id = $(this).data('id');
            console.log(id)
            $.ajax({
                url: "http://localhost:8080/sogne/" + id,
                type: 'delete',
                success: function (data) {
                    console.log(data)
                },
                error: function (data) {
                    console.log("error: " + data)
                }
            })
        }
    });

});