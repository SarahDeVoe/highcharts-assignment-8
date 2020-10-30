Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Weapons used in California Murders'
    },
    subtitle: {
        text: 'Source: <a href="https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/tables/table-20">ucr.fbi.gov</a>'
    },
    xAxis: {
        categories: ['Handguns', 'Rifles', 'Shotguns', 'Firearms (type unknown)', 'Knives or cutting instruments', 'Other weapons', 'Hands, fists, feet, etc.'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Murders',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
    		name: 'Year 2019',
        data: [765, 34, 26, 320, 252, 183, 102]

    }]
});
