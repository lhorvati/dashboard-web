/* MYSCRIPT.JS ======================================= */


/* Mobile Side Nav =================== */
$(function() {
	$(".mobile-nav-open").click(function() {
		$(".side-nav").addClass("slide");
	});
});

$(function() {
	$(".mobile-nav-close").click(function() {
		$(".side-nav").removeClass("slide");
	});
});



$(function() {
	$(".side-nav-link").click(function() {
		$(".side-nav").removeClass("slide");
	});
});

/* /Mobile Side Nav */








/* CONTENT TABS ========================================================= */

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





/* COUNTER ========================================================= */

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




/* NEW CUSTOM DOMAIN show/hide ========================================================= */
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





/* ACCOUNT DETAILS ========================================================= */
$(function() {
	$("#account").click(function() {
		$("#user-details-wrap").removeClass("hide");
		$(".edit-photo").removeClass("hide");
		$("#account").addClass("hide");
	});
});

$(function() {
	$(".user-details-close").click(function() {
		$("#user-details-wrap").addClass("hide");
		$(".edit-photo").addClass("hide");
		$("#account").removeClass("hide");
		
	});
});



/* BILLING DETAILS ========================================================= */
$(function() {
	$("#billing").click(function() {
		$(".billing-information__expand").removeClass("hide");
		$(".billing-information__name").addClass("hide");
		$(".billing-information__card").addClass("hide");
		$(".card__abs-bot.row").addClass("hide");
		$("#billing-footer").removeClass("hide");
	});
});

$(function() {
	$(".billing-close").click(function() {
		$(".billing-information__expand").addClass("hide");
		$(".billing-information__name").removeClass("hide");
		$(".billing-information__card").removeClass("hide");
		$(".card__abs-bot.row").removeClass("hide");
		$("#billing-footer").addClass("hide");
		
	});
});









/* SEARCH RESULTS SECTION ========================================================= */
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

/* SEARCH RESULTS SECTION MOBILE ================ */
$(function() {
	$(".mobile-nav-search").click(function() {
		/* Side nav */
		$(".side-nav-link").removeClass("active");
		/* Main content */
		$(".main").removeClass("show-flex");
		$(".main").addClass("hide");
		$(".main.search-results").addClass("show");
		$(".main.search-results").removeClass("hide");
	});
});





/* PROFILE BUTTON TOGGLE ========================================================= */
$(function() {
	$("#profile-btn").click(function() {
		$("#profile").toggleClass("show");
	});
});










/* DIALOGS ============================================================================ */

/* DIALOG REMOVE =================== */
$(function() {
	$(".dialog-remove").click(function() {
		$(".dialog-wrap.remove").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-close").click(function() {
		$(".dialog-wrap.remove").removeClass("fadeIn");
	});
});
/* /DIALOG REMOVE */

/* DIALOG EDIT =================== */
$(function() {
	$(".dialog-edit").click(function() {
		$(".dialog-wrap.edit").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-close").click(function() {
		$(".dialog-wrap.edit").removeClass("fadeIn");
	});
});
/* /DIALOG EDIT */

/* DIALOG ADD-ACCOUNT =================== */
$(function() {
	$(".dialog-add-acc").click(function() {
		$(".dialog-wrap.account").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-close").click(function() {
		$(".dialog-wrap.account").removeClass("fadeIn");
	});
});
/* /DIALOG ADD-ACCOUNT */









/* DIALOG PRICING PLANS =================== */
$(function() {
	$(".dialog-upgrade").click(function() {
		$(".dialog-wrap.pricing-plans").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-close").click(function() {
		$(".dialog-wrap.pricing-plans").removeClass("fadeIn");
	});
});
/* /DIALOG PRICING PLANS */


/* DIALOG COMPAIR PRICING =================== */
$(function() {
	$(".dialog-compair").click(function() {
		$(".dialog-wrap.pricing-compair").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-compair-close").click(function() {
		$(".dialog-wrap.pricing-compair").removeClass("fadeIn");
	});
});
/* /DIALOG COMPAIR PRICING */


/* DIALOG PAYMENT =================== */
$(function() {
	$(".dialog-payment").click(function() {
		$(".dialog-wrap.pricing-payment").addClass("fadeIn");
	});
});

$(function() {
	$(".dialog-payment-close").click(function() {
		$(".dialog-wrap.pricing-payment").removeClass("fadeIn");
	});
});
/* /DIALOG PAYMENT */





/* Payment options toogle =================== */
$("#payment-option1").click(function() {
	$(this).addClass("active");
	$("#payment-option2").removeClass("active");
});

$("#payment-option2").click(function() {
	$(this).addClass("active");
	$("#payment-option1").removeClass("active");
});

/* /Payment options toogle */










/* PRICING MOBILE TABS ========================================================= */

/* Free button */
$(function() {
	$(".btn-free").click(function() {
		/* Plans buttons mobile */
		$(".plans-btn").removeClass("active");
		$(".plans-btn.btn-free").addClass("active");
		/* Plans */
		$(".plans-item.plans").removeClass("show-flex");
		$(".plans-item.plans").addClass("hide");
		$(".plans-item.plan-free").addClass("show-flex");
		$(".plans-item.plan-free").removeClass("hide");
		/* Compair */
		$(".comparison-feature__presence").addClass("hide");
		$(".feature__presence1").removeClass("hide");
		/* Compair plan mobile */
		$(".plans-item.compair").addClass("hide");
		$(".compair.plans-item1").removeClass("hide");
		$(".compair.plans-item1").addClass("active");
	});
});

/* Starter button */
$(function() {
	$(".btn-starter").click(function() {
		/* Plans buttons mobile */
		$(".plans-btn").removeClass("active");
		$(".plans-btn.btn-starter").addClass("active");
		/* Plans */
		$(".plans-item.plans").removeClass("show-flex");
		$(".plans-item.plans").addClass("hide");
		$(".plans-item.plan-starter").addClass("show-flex");
		$(".plans-item.plan-starter").removeClass("hide");
		/* Compair */
		$(".comparison-feature__presence").addClass("hide");
		$(".feature__presence2").removeClass("hide");
		/* Compair plan mobile */
		$(".plans-item.compair").addClass("hide");
		$(".compair.plans-item2").removeClass("hide");
		$(".compair.plans-item2").addClass("active");
	});
});

/* Freelancer button */
$(function() {
	$(".btn-freelancer").click(function() {
		/* Plans buttons mobile */
		$(".plans-btn").removeClass("active");
		$(".plans-btn.btn-freelancer").addClass("active");
		/* Plans */
		$(".plans-item.plans").removeClass("show-flex");
		$(".plans-item.plans").addClass("hide");
		$(".plans-item.plan-freelancer").addClass("show-flex");
		$(".plans-item.plan-freelancer").removeClass("hide");
		/* Compair */
		$(".comparison-feature__presence").addClass("hide");
		$(".feature__presence3").removeClass("hide");
		/* Compair plan mobile */
		$(".plans-item.compair").addClass("hide");
		$(".compair.plans-item3").removeClass("hide");
		$(".compair.plans-item3").addClass("active");
	});
});

/* Professional button */
$(function() {
	$(".btn-professional").click(function() {
		/* Plans buttons mobile */
		$(".plans-btn").removeClass("active");
		$(".plans-btn.btn-professional").addClass("active");
		/* Plans */
		$(".plans-item.plans").removeClass("show-flex");
		$(".plans-item.plans").addClass("hide");
		$(".plans-item.plan-professional").addClass("show-flex");
		$(".plans-item.plan-professional").removeClass("hide");
		/* Compair */
		$(".comparison-feature__presence").addClass("hide");
		$(".feature__presence4").removeClass("hide");
		/* Compair plan mobile */
		$(".plans-item.compair").addClass("hide");
		$(".compair.plans-item4").removeClass("hide");
		$(".compair.plans-item4").addClass("active");
	});
});

/* Business button */
$(function() {
	$(".btn-business").click(function() {
		/* Plans buttons mobile */
		$(".plans-btn").removeClass("active");
		$(".plans-btn.btn-business").addClass("active");
		/* Plans */
		$(".plans-item.plans").removeClass("show-flex");
		$(".plans-item.plans").addClass("hide");
		$(".plans-item.plan-business").addClass("show-flex");
		$(".plans-item.plan-business").removeClass("hide");
		/* Compair */
		$(".comparison-feature__presence").addClass("hide");
		$(".feature__presence5").removeClass("hide");
		/* Compair plan mobile */
		$(".plans-item.compair").addClass("hide");
		$(".compair.plans-item5").removeClass("hide");
		$(".compair.plans-item5").addClass("active");
	});
});

