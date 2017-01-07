$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016/05',
            Total: 1000,
            Male: 800,
            Female: 200
        }, {
            period: '2016/06',
            Total: 2500,
            Male: 2000,
            Female: 500
        }, {
            period: '2016/07',
            Total: 3500,
            Male: 2800,
            Female: 700
        }, {
            period: '2016/08',
            Total: 4600,
            Male: 3700,
            Female: 900
        }, {
            period: '2016/09',
            Total: 5000,
            Male: 3800,
            Female: 1200
        }, {
            period: '2016/10',
            Total: 6700,
            Male: 4800,
            Female: 1900
        }, {
            period: '2016/11',
            Total: 8000,
            Male: 5500,
            Female: 2500
        }, {
            period: '2016/12',
            Total: 10500,
            Male: 7250,
            Female: 3250
        }, {
            period: '2017/01',
            Total: 12000,
            Male: 8300,
            Female: 3700
        }],
        xkey: 'period',
        ykeys: ['Total', 'Male', 'Female'],
        labels: ['Total', 'Male', 'Female'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
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
    
});
