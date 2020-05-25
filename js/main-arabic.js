console.log(document.documentElement.lang);
var direction = document.getElementsByTagName("BODY")[0].getAttribute("dir");
console.log(direction);


var marginLeft = '280px',
    restMarginLeft = '-280px',
    marginRight = '220px',
    restMarginRight = '-220px';

var dashboard_top = '0px';
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var header_height;

/* Start NEW Variables */
var isHeaderFullWidth = true,
    isHeaderScrollActive = true,
    isDashboardOpened = true,
    isDeviceWidthSmall;


console.log(1);
/* Style Header With Small Width */
if (width < 768) {
    header_height = $('#header-sm').height();
    header_height = Math.floor(header_height) + 'px';
    isDeviceWidthSmall = true;
    isDashboardOpened = false;
    if (document.getElementById('sideMenu') != null) {
        document.getElementById('sideMenu').style.top = '0px';
    }

} else {
    header_height = $('#header').height();
    header_height = Math.floor(header_height) + 'px';
    dashboard_top = header_height;
    isDeviceWidthSmall = false;
    if (isHeaderFullWidth) {
        dashboard_top = header_height;
    } else {
        dashboard_top = '0px';
    }
    if (document.getElementById('sideMenu') != null) {
        document.getElementById('sideMenu').style.top = dashboard_top;
    }

}

if (isDeviceWidthSmall) {

}

/* Style Scroll Effect */
if (isHeaderScrollActive) {
    $(document).scroll(function() {
        var y = $(this).scrollBottom();
        var x = Document.getElementById('filter-btn-container');
        if (y > 800) {
            x.style.display = "block";
        } else {
            $('.filter-btn-container').fadeOut();
        }
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            // Shoe header
            document.getElementById("header").style.top = "0";
            document.getElementById("header-sm").style.top = "0";
            var x = document.getElementById("filter-bar");
            if (x != null) {

                document.getElementById("filter-bar").style.top = header_height;
                document.getElementById("search-container").style.top = "80px";

            }
            if (document.getElementById('sideMenu') != null) {
                if (!isDeviceWidthSmall) {
                    document.getElementById('sideMenu').style.top = dashboard_top;
                }
                //
            }

            if (document.getElementById('cart-card-info') != null) {
                document.getElementById('cart-card-info').style.top = "80px";
            }

        } else {
            // hide header

            var x1 = document.getElementById("profile-card");
            var y1 = document.getElementById('profile-card-btn');
            if (y1.value != "closed") {

                x1.style.marginTop = '-525px';
                y1.value = "closed";
            }
            document.getElementById("header").style.top = "-65px";
            document.getElementById("header-sm").style.top = "-55px";
            var x = document.getElementById("filter-bar");
            if (x != null) {
                document.getElementById("filter-bar").style.top = "0";
                document.getElementById("search-container").style.top = "-500px";
            }
            if (document.getElementById('sideMenu') != null) {
                document.getElementById('sideMenu').style.top = "0";
            }
            if (document.getElementById('cart-card-info') != null) {
                document.getElementById('cart-card-info').style.top = "0";
            }


        }

        prevScrollpos = currentScrollPos;
    }

}

/* Style Dashboard */
if (isDashboardOpened) {
    openDashboard();
}

/* END NEW Variables */

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}

function openDashboard() {
    if (document.getElementById('sideMenu') != null) {
        if (isDeviceWidthSmall) {
            document.getElementById('sideMenu').style.marginRight = '0';
            document.getElementById('close-dashboard').style.display = 'block';
            document.getElementById('header-toggle-btn').style.display = 'none';
            document.getElementById("header-open-dashboard").style.display = "none";
        } else {
            document.getElementById('main').style.marginRight = marginLeft;
            document.getElementById('sideMenu').style.marginRight = '0';
            document.getElementById('footer').style.marginRight = marginLeft;
            document.getElementById("header-open-dashboard").style.display = "none";
            document.getElementById("header-close-dashboard").style.display = "block";
            if (!isHeaderFullWidth) {
                document.getElementById('header').style.marginRight = marginLeft;
            }
        }
    }

}

function openDashboardWithoutMargin() {
    document.getElementById('sideMenu').style.marginRight = '0';
    document.getElementById('close-dashboard').style.display = 'block';
    document.getElementById('header-toggle-btn').style.display = 'none';
    document.getElementById("header-open-dashboard").style.display = "none";
}

function closeDashboard() {

    if (document.getElementById('sideMenu') != null) {
        document.getElementById('sideMenu').style.marginRight = restMarginLeft;
        document.getElementById("header-close-dashboard").style.display = "none";
    }
    document.getElementById('main').style.marginRight = '0';
    document.getElementById('header').style.marginRight = '0';
    document.getElementById('footer').style.marginRight = '0';

    var c = document.getElementById('close-dashboard');
    if (c != null) {
        c.style.display = 'none';
    }
    var h = document.getElementById('header-toggle-btn');
    if (h != null) {

        h.style.display = 'block';
    }
    var x = document.getElementById("header-open-dashboard");
    if (x != null) {
        x.style.display = "block";
    }

}

function showMenu() {
    var x = document.getElementById("main-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showShortProfile() {
    var x = document.getElementById("profile-card");
    var y = document.getElementById('profile-card-btn');

    if (y.value === "closed") {
        // x.style.display="block";
        x.style.marginTop = '100';
        x.style.marginTop = '0';
        y.value = "open";
        document.getElementById('filter-btn').value = 'open';
        document.getElementById('filter-bar').style.marginRight = restMarginRight;
        document.getElementById('filter-btn-container').style.marginRight = '0';
        document.getElementById('main').style.marginRight = '0';
        document.getElementById('footer').style.marginRight = '0';
    } else {
        x.style.marginTop = '-525px';
        // x.style.display = "none";
        y.value = "closed";
    }
}

function showAdvancedSearch() {
    var x = document.getElementById("advance-search");
    var y = document.getElementById("advance");
    if (x.style.display === "none") {

        x.style.display = "block";
        y.value = "Hide advanced search box";
    } else {
        x.style.display = "none";
        y.value = "Show advanced search box";
    }
}

$(document).ready(function() {
    $('.search').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#userTbl tbody tr').each(function() {
            var lineStr = $(this).text().toLowerCase();
            if (lineStr.indexOf(searchTerm) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});

function openFilterMargin() {
    var x = document.getElementById('filter-btn');
    var y = document.getElementById('filter-btn-container');

    if (x.value === 'open') {
        x.value = 'close';
        y.style.marginRight = marginRight;
        var r = document.getElementById("profile-card");
        var z = document.getElementById('profile-card-btn');
        if (r != null) {
            r.style.marginTop = '-525px';
            z.value = "closed";
        }
        document.getElementById('filter-bar').style.marginRight = '0';
        document.getElementById('main').style.marginRight = marginRight;
        document.getElementById('footer').style.marginRight = marginRight;
        closeDashboard();
    } else {
        x.value = 'open';
        document.getElementById('filter-bar').style.marginRight = restMarginRight;
        y.style.marginRight = '0';
        document.getElementById('filter-btn').style.marginRight = '0';
        document.getElementById('main').style.marginRight = '0';
        document.getElementById('footer').style.marginRight = '0';
    }
}

function openFilterWithoutMargin() {
    var x = document.getElementById('filter-btn');
    var y = document.getElementById('filter-btn-container');

    if (x.value === 'open') {
        x.value = 'close';
        y.style.marginRight = marginRight;
        document.getElementById('filter-bar').style.marginRight = '0';
        closeDashboard();
        document.getElementById('main').style.marginRight = '0';
        document.getElementById('header').style.marginRight = '0';
        document.getElementById('footer').style.marginRight = '0';
    } else {
        x.value = 'open';
        document.getElementById('filter-bar').style.marginRight = restMarginRight;
        y.style.marginRight = '0';
    }
}

/*
 * function display(){ console.log("display"); }
 */