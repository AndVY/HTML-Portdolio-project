// Pagination dots on the rigth of the page
$('#page-nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.3,
	filter: '',
	easing: 'swing',
	begin: function () { },
	end: function () { },
	scrollChange: function ($currentListItem) { }
});