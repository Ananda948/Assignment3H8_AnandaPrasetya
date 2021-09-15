const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
// inisialisasi
const table = document.getElementById("table");

fetch(BASE_URL)
.then((Response) => Response.json())
.then((data) => {
    const prov = data.data;
    console.log(prov);
    for(let i = 0; i < prov.length; i++) {
        const row = table.insertRow(i + 1);

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = prov[i].provinsi;
        cell2.innerHTML = prov[i].kasusPosi;
        cell3.innerHTML = prov[i].kasusSemb;
        cell4.innerHTML = prov[i].kasusMeni;
    }
    console.log(prov);
});