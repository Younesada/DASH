
var receitas = document.getElementById(`chartReceitas`).getContext(`2d`)
var chart = new Chart(receitas, {
    type: "line",
    data:{
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        datasets: [
            {
                label: "Commandes",
                backgroundColor: `#fff`,
                borderColor: `#38d6eb`,
                data:[5000,3000,8500,70000,15000,10000,17000,15000,36000,85000,75000,100000],
    
            }
            ]
    }
})