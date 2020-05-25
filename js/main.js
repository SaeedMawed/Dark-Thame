function openDashboard() {
    var dashboard = document.getElementById('dashboardSection');
    var open = document.getElementById('dashboard-open-btn');
    var close = document.getElementById('dashboard-close-btn');
    dashboard.style.marginLeft = '0px';
    open.style.display = 'none';
    close.style.display = 'block';
}

function closeDashboard() {
    var dashboard = document.getElementById('dashboardSection');
    var open = document.getElementById('dashboard-open-btn');
    var close = document.getElementById('dashboard-close-btn');
    dashboard.style.marginLeft = '-350px';
    open.style.display = 'block';
    close.style.display = 'none';
}

$(window).resize(function() {

    if ($(window).width() < 768) {

    } else {
        openDashboard();
    }
});