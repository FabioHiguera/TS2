import { seriesData } from './data';
console.log(seriesData);
function renderSeries(series) {
    var tableBody = document.getElementById('series-table-body');
    if (!tableBody)
        return;
    var totalSeasons = 0;
    if (tableBody) {
        tableBody.innerHTML = '';
        var totalSeasons_1 = 0;
        series.forEach(function (serie) {
            var row = document.createElement("tr");
            row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n          ");
            tableBody.appendChild(row);
            totalSeasons_1 += serie.seasons;
        });
        var averageSeasons = totalSeasons_1 / series.length;
        var averageRow = document.createElement("tr");
        averageRow.innerHTML = "\n          <td colspan=\"3\"><strong>Promedio de Temporadas:</strong></td>\n          <td><strong>".concat(averageSeasons.toFixed(2), "</strong></td>\n        ");
        tableBody.appendChild(averageRow);
    }
    else {
        console.error("El elemento de la tabla no se encontró.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    renderSeries(seriesData);
});
