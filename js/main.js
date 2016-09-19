$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" }
        { firstName: "Aleksander", lastName: "Nowak" }
        { firstName: "Arek", lastName: "Nowakowski" }
        { firstName: "Adam", lastName: "Nowak" }
        { firstName: "Adrian", lastName: "Nowakowski" }
        { firstName: "Antoni", lastName: "Kielcz" }
    ];

    var doctorsList = [
        { firstName: "Antoni", lastName: "Kowalski" },
        { firstName: "Andrij", lastName: "Kowalski" }
        { firstName: "Marcin", lastName: "Kowal" }
    ];
    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});


}