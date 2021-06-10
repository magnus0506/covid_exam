

// henter data i JSON format fra backend
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/kommuner",
        success: function (result) {
            console.log(result);

            let tableContent = "";

            $.each(result, function (key, value) {

                tableContent += "<tr>";
                tableContent +=
                    "<td>" + value["kommuneId"] +
                    "</td><td>" + value["kommuneNavn"] +
                    "</td><td>" + value["kommuneKode"] + "</td>"
            });
            tableContent += "</tr>";

            $('#tbl tbody').html(tableContent)
        }
    });
    $(document).on('click', ".editbtn", function (e) {
        e.preventDefault();
        const id = $(this).data('id');
        console.log(id)
        window.location.replace("http://localhost:8080/kommuneliste" + id);
    })

    $(document).on('click', ".deletebtn", function (e) {
        e.preventDefault();
        const test = window.confirm("Confirm deletion?")

        if (test) {
            $(this).closest('tr').remove()
            const id = $(this).data('id');
            console.log(id)
            $.ajax({
                url: "http://localhost:8080/kommuneliste/" + id,
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