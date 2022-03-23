const ctx2 = document.getElementById(`chartClientes`).getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['ARGANA', 'AMADIL', 'SENATOR'],
        datasets: [{
            label: 'Employees',
            data: [40,30,10,2],
            backgroundColor: [
                'salmon',
                'springgreen',
                '#ffebcd'
            ],
            borderColor: [
                '#ffebcd',
                'lightcyan',
                'pink'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive:true
    }
});