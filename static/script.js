document.getElementById('functionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const func = document.getElementById('function').value;
    const x0 = parseFloat(document.getElementById('x0').value);
    fetch('/find_root', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ function: func, x0: x0 }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = `Raiz: ${data.root}\n N° Interacciones: ${data.iterations}`;
        plotFunction(func, x0, data.root);
    });
});

function plotFunction(func, x0, root) {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    const x = [];
    const y = [];
    const f = new Function('x', `return ${func}`);
    
    // Recoger los datos de la función
    for (let i = x0 - 5; i <= x0 + 5; i += 0.1) {
        x.push(i);
        y.push(f(i));
    }

    // Datos para los ejes
    const xAxis = {
        label: 'Eje x',
        data: x.map(val => ({ x: val, y: 0 })),
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        showLine: true,
        pointRadius: 0,
        type: 'line'
    };

    const yAxis = {
        label: 'Eje y',
        data: [{ x: 0, y: Math.min(...y) }, { x: 0, y: Math.max(...y) }],
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        showLine: true,
        pointRadius: 0,
        type: 'line'
    };

    // Destruir el gráfico anterior si existe
    if (window.chart) {
        window.chart.destroy();
    }

    // Crear un nuevo gráfico
    window.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x,
            datasets: [
                {
                    label: 'Funcion',
                    data: x.map((val, idx) => ({ x: val, y: y[idx] })),
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'Raiz',
                    data: [{ x: root, y: f(root) }],
                    borderColor: 'red',
                    backgroundColor: 'red',
                    pointRadius: 5,
                    type: 'scatter',
                },
                xAxis,
                yAxis
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'x'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'y'
                    }
                }
            }
        }
    });
}
