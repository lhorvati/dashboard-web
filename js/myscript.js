/* MYSCRIPT.JS ======================================= */


/* Mobile Main Nav =================== */
$(function() {
	$(".main-nav__m-open").click(function() {
		$(".main-nav__mobile-wrap").addClass("slide");
	});
});

$(function() {
	$(".main-nav__m-close").click(function() {
		$(".main-nav__mobile-wrap").removeClass("slide");
	});
});
/* /Mobile Main Nav */








/* CONTENT TABS =================== */

/* Accounts button */
$(function() {
	$(".side-nav-link.account").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.account").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.account").addClass("show-flex");
		$(".main.account").removeClass("hide");
	});
});

/* Billing button */
$(function() {
	$(".side-nav-link.billing").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.billing").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.billing").addClass("show-flex");
		$(".main.billing").removeClass("hide");
	});
});

/* Projects button */
$(function() {
	$(".side-nav-link.projects").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.projects").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.projects").addClass("show-flex");
		$(".main.projects").removeClass("hide");
	});
});

/* Shared with me button */
$(function() {
	$(".side-nav-link.shared-with-me").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.shared-with-me").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.shared-with-me").addClass("show-flex");
		$(".main.shared-with-me").removeClass("hide");
	});
});

/* My shares button */
$(function() {
	$(".side-nav-link.my-shares").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.my-shares").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.my-shares").addClass("show-flex");
		$(".main.my-shares").removeClass("hide");
	});
});

/* SSH keys button */
$(function() {
	$(".side-nav-link.ssh-keys").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.ssh-keys").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.ssh-keys").addClass("show-flex");
		$(".main.ssh-keys").removeClass("hide");
	});
});

/* Custom stacks button */
$(function() {
	$(".side-nav-link.custom-stacks").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.custom-stacks").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.custom-stacks").addClass("show-flex");
		$(".main.custom-stacks").removeClass("hide");
	});
});

/* Custom Domains button */
$(function() {
	$(".side-nav-link.custom-domains").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.custom-domains").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.custom-domains").addClass("show-flex");
		$(".main.custom-domains").removeClass("hide");
	});
});

/* Refer a friend button */
$(function() {
	$(".side-nav-link.refer-friend").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		$(".side-nav-link.refer-friend").addClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.refer-friend").addClass("show-flex");
		$(".main.refer-friend").removeClass("hide");
	});
});

/* /CONTENT TABS */





/* COUNTER =================== */

var counter = 0;

$(document).ready(function() {

	$("#up").click(function(){
		counter++;
		$("#mid").text(counter);
	});

	$("#down").click(function(){
		counter--;
		$("#mid").text(counter);
	});

});
/* /COUNTER */




/* NEW CUSTOM DOMAIN show/hide =================== */
$(function() {
	$(".ncd-title").click(function() {
		$(".ncd-title").addClass("hide");
		$(".ncd-wrap").addClass("show");
	});
});

$(function() {
	$(".ncd-close").click(function() {
		$(".ncd-wrap").removeClass("show");
		$(".ncd-title").removeClass("hide");
	});
});
/* /NEW CUSTOM DOMAIN show/hide */





/* ACCOUNT DETAILS =================== */
$(function() {
	$("#account").click(function() {
		$("#user-details-wrap").removeClass("hide");
		$(".edit-photo").removeClass("hide");
	});
});

$(function() {
	$(".user-details-close").click(function() {
		$("#user-details-wrap").addClass("hide");
		$(".edit-photo").addClass("hide");
	});
});






/* SEARCH RESULTS SECTION =================== */
$(function() {
	$(".input-search").focus(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.search-results").addClass("show");
		$(".main.search-results").removeClass("hide");
	});
});











/* DIALOG open/close =================== */
$(function() {
	$(".dialog-open").click(function() {
		$(".dialog-wrap").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-close").click(function() {
		$(".dialog-wrap").removeClass("fadeIn");
	});
});
/* /DIALOG open/close */






