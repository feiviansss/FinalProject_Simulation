// Datos de ejemplo para las barras 1
var totalProductionPerDay = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Total Production per Week',
        data: [91, 91, 94, 86, 95], // Valores al azar
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', // Color para la primera barra
            'rgba(73, 120, 95, 0.2)', // Color para la segunda barra
            'rgba(180, 218, 167, 0.2)', // Color para la tercera barra
            'rgba(245, 244, 195, 0.2)', // Color para la cuarta barra
            'rgba(194, 85, 46, 0.2)' // Color para la quinta barra
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', // Color del borde para la primera barra
            'rgba(73, 120, 95, 1)', // Color del borde para la segunda barra
            'rgba(180, 218, 167, 1)', // Color del borde para la tercera barra
            'rgba(245, 244, 195, 1)', // Color del borde para la cuarta barra
            'rgba(194, 85, 46, 1)' // Color del borde para la quinta barra
        ],
        borderWidth: 1
    }]
};

// Datos de ejemplo para grafica 2
var totalOccupancyPerDay = {
    labels: ['Workstation 1', 'Workstation 2', 'Workstation 3', 'Workstation 4', 'Workstation 5', 'Workstation 6'],
    datasets: [{
        label: 'Total Occupancy per Week',
        data: [0.998, 0.998, 0.998, 0.998, 0.999, 0.998], // Valores al azar
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', // Color para la primera barra
            'rgba(73, 120, 95, 0.2)', // Color para la segunda barra
            'rgba(180, 218, 167, 0.2)', // Color para la tercera barra
            'rgba(245, 244, 195, 0.2)', // Color para la cuarta barra
            'rgba(194, 85, 46, 0.2)' // Color para la quinta barra
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', // Color del borde para la primera barra
            'rgba(73, 120, 95, 1)', // Color del borde para la segunda barra
            'rgba(180, 218, 167, 1)', // Color del borde para la tercera barra
            'rgba(245, 244, 195, 1)', // Color del borde para la cuarta barra
            'rgba(194, 85, 46, 1)' // Color del borde para la quinta barra
        ],
        borderWidth: 1
    }]
};

// Datos de ejemplo para grafica 3
var totalAvgProdTimePerDay = {
    labels: ['Workstation 1', 'Workstation 2', 'Workstation 3', 'Workstation 4', 'Workstation 5', 'Workstation 6'],
    datasets: [{
        label: 'Average Production Time per Work Station per week',
        data: [58.14, 58.14, 58.14, 58.14, 58.14, 58.14], // Valores al azar
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', // Color para la primera barra
            'rgba(73, 120, 95, 0.2)', // Color para la segunda barra
            'rgba(180, 218, 167, 0.2)', // Color para la tercera barra
            'rgba(245, 244, 195, 0.2)', // Color para la cuarta barra
            'rgba(194, 85, 46, 0.2)' // Color para la quinta barra
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', // Color del borde para la primera barra
            'rgba(73, 120, 95, 1)', // Color del borde para la segunda barra
            'rgba(180, 218, 167, 1)', // Color del borde para la tercera barra
            'rgba(245, 244, 195, 1)', // Color del borde para la cuarta barra
            'rgba(194, 85, 46, 1)' // Color del borde para la quinta barra
        ],
        borderWidth: 1
    }]
};

// Datos de ejemplo para grafica 4
var totalProdRejPerDay = {
    labels: ['Total Products', 'Rejected Products'],
    datasets: [{
        label: 'Total Production Rejection per Work Station per week',
        data: [91.4, 5.2], // Valores al azar
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', // Color para la primera barra
            'rgba(73, 120, 95, 0.2)', // Color para la segunda barra
            'rgba(180, 218, 167, 0.2)', // Color para la tercera barra
            'rgba(245, 244, 195, 0.2)', // Color para la cuarta barra
            'rgba(194, 85, 46, 0.2)' // Color para la quinta barra
        ], borderColor: [
            'rgba(53, 44, 36, 1)', // Color del borde para la primera barra
            'rgba(73, 120, 95, 1)', // Color del borde para la segunda barra
            'rgba(180, 218, 167, 1)', // Color del borde para la tercera barra
            'rgba(245, 244, 195, 1)', // Color del borde para la cuarta barra
            'rgba(194, 85, 46, 1)' // Color del borde para la quinta barra
        ],
        borderWidth: 1
    }]
};

// Datos de ejemplo para grafica 5
var totalAvgDelayPerDay = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Total Average Delay Time per Work Station per week',
        data: [249.44, 278.02, 249.53, 398.53, 265.97], // Valores al azar
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', // Color para la primera barra
            'rgba(73, 120, 95, 0.2)', // Color para la segunda barra
            'rgba(180, 218, 167, 0.2)', // Color para la tercera barra
            'rgba(245, 244, 195, 0.2)', // Color para la cuarta barra
            'rgba(194, 85, 46, 0.2)' // Color para la quinta barra
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', // Color del borde para la primera barra
            'rgba(73, 120, 95, 1)', // Color del borde para la segunda barra
            'rgba(180, 218, 167, 1)', // Color del borde para la tercera barra
            'rgba(245, 244, 195, 1)', // Color del borde para la cuarta barra
            'rgba(194, 85, 46, 1)' // Color del borde para la quinta barra
        ],
        borderWidth: 1
    }]
};

// Datos de ejemplo para grafica 6
var totalAccRatePerDay = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Total Accident Rate per Work Station per week',
        data: [0.000001, 0.000001, 0.000001, 0.000001, 0.000001], // Valores al azar
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', // Color para la primera barra
            'rgba(73, 120, 95, 0.2)', // Color para la segunda barra
            'rgba(180, 218, 167, 0.2)', // Color para la tercera barra
            'rgba(245, 244, 195, 0.2)', // Color para la cuarta barra
            'rgba(194, 85, 46, 0.2)' // Color para la quinta barra
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', // Color del borde para la primera barra
            'rgba(73, 120, 95, 1)', // Color del borde para la segunda barra
            'rgba(180, 218, 167, 1)', // Color del borde para la tercera barra
            'rgba(245, 244, 195, 1)', // Color del borde para la cuarta barra
            'rgba(194, 85, 46, 1)' // Color del borde para la quinta barra
        ],
        borderWidth: 1
    }]
};

// Configuración del gráfico 1
var opcionestotalProductionPerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Configuración del gráfico 2
var opcionestotalOccupancyPerDay = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Distribución de colores'
        }
    }
};

// Configuración del gráfico 3
var opcionestotalAvgProdTimePerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Configuración del gráfico 4
var opcionestotalProdRejPerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Configuración del gráfico 5
var opcionestotalAvgDelayPerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Configuración del gráfico 6
var opcionestotalAccRatePerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Obtener el contexto del canvas 1
var contextototalProductionPerDay = document.getElementById('totalProductionPerDay').getContext('2d');

// Crear el gráfico de barras 1
var grafico = new Chart(contextototalProductionPerDay, {
    type: 'bar',
    data: totalProductionPerDay,
    options: opcionestotalProductionPerDay
});

// Obtener el contexto del canvas 2
var contextototalOccupancyPerDay = document.getElementById('totalOccupancyPerDay').getContext('2d');

// Crear el gráfico circular 2
var pieOccupancy = new Chart(contextototalOccupancyPerDay, {
    type: 'pie',
    data: totalOccupancyPerDay,
    options: opcionestotalOccupancyPerDay
});

// Obtener el contexto del canvas AvgProdTime 3
var contextototalAvgProdTimePerDay = document.getElementById('totalAvgProdTimePerDay').getContext('2d');

// Crear el gráfico circular AvgProdTime 3
var pieAvgProdTime = new Chart(contextototalAvgProdTimePerDay, {
    type: 'line',
    data: totalAvgProdTimePerDay,
    options: opcionestotalAvgProdTimePerDay
});

// Obtener el contexto del canvas ProdRej 4
var contextototalProdRejPerDay = document.getElementById('totalProdRejPerDay').getContext('2d');

// Crear el gráfico circular ProdRej 4
var pieProdRej = new Chart(contextototalProdRejPerDay, {
    type: 'doughnut',
    data: totalProdRejPerDay,
    options: opcionestotalProdRejPerDay
});

// Obtener el contexto del canvas AvgDelay 5
var contextototalAvgDelayPerDay = document.getElementById('totalAvgDelayPerDay').getContext('2d');

// Crear el gráfico circular AvgDelay 5
var pieAvgDelay = new Chart(contextototalAvgDelayPerDay, {
    type: 'line',
    data: totalAvgDelayPerDay,
    options: opcionestotalAvgDelayPerDay
});

// Obtener el contexto del canvas AccRate 6
var contextototalAccRatePerDay = document.getElementById('totalAccRatePerDay').getContext('2d');

// Crear el gráfico circular AccRate 6
var pieAccRate = new Chart(contextototalAccRatePerDay, {
    type: 'pie',
    data: totalAccRatePerDay,
    options: opcionestotalAccRatePerDay
});