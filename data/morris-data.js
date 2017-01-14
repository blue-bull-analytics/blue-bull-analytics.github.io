$(function() {

    Morris.Line({
        element: 'morris-area-chart',
        data: [{
            period: '2016-05',
            a: 1000,
            b: 800,
            c: 200
        }, {
            period: '2016-06',
            a: 2500,
            b: 2000,
            c: 500
        }, {
            period: '2016-07',
            a: 3500,
            b: 2800,
            c: 700
        }, {
            period: '2016-08',
            a: 4600,
            b: 3700,
            c: 900
        }, {
            period: '2016-09',
            a: 5000,
            b: 3800,
            c: 1200
        }, {
            period: '2016-10',
            a: 6700,
            b: 4800,
            c: 1900
        }, {
            period: '2016-11',
            a: 8000,
            b: 5500,
            c: 2500
        }, {
            period: '2016-12',
            a: 10500,
            b: 7250,
            c: 3250
        }, {
            period: '2017-01',
            a: 12000,
            b: 8300,
            c: 3700
        }],
        xkey: 'period',
        ykeys: ['a', 'b', 'c'],
        labels: ['Total', 'Turn You Into Angel', 'Take Some Wings'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "15-19",
            value: 300
        }, {
            label: "30-39",
            value: 350
        }, {
            label: "20-29",
            value: 400
        }, {
            label: "Above 40",
            value: 200
        }, {
            label: "Below 15",
            value: 250
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Line({
        element: 'morris-area-chart2',
        data: [{
            period: '2016-05',
            a: 1000,
            b: 800,
            c: 200
        }, {
            period: '2016-06',
            a: 2500,
            b: 2000,
            c: 500
        }, {
            period: '2016-07',
            a: 3500,
            b: 2800,
            c: 700
        }, {
            period: '2016-08',
            a: 4600,
            b: 3700,
            c: 900
        }, {
            period: '2016-09',
            a: 5000,
            b: 3800,
            c: 1200
        }, {
            period: '2016-10',
            a: 6700,
            b: 4800,
            c: 1900
        }, {
            period: '2016-11',
            a: 8000,
            b: 5500,
            c: 2500
        }, {
            period: '2016-12',
            a: 10500,
            b: 7250,
            c: 3250
        }, {
            period: '2017-01',
            a: 12000,
            b: 8300,
            c: 3700
        }],
        xkey: 'period',
        ykeys: ['a', 'b', 'c'],
        labels: ['Total', 'Turn You Into Angel', 'Take Some Wings'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
    
});


