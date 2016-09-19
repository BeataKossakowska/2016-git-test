$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" }
        { firstName: "Aleksander", lastName: "Nowak" }
        { firstName: "Arek", lastName: "Nowakowski" }
    ];

    var doctorsList = [
        { firstName: "Antoni", lastName: "Kowalski" },
        { firstName: "Andrzej", lastName: "Kowalski" }
        { firstName: "Andrzej", lastName: "Kowal" }
    ];
    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}