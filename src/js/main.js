// ---------------------------------------------------------
// Navbar Fix
// ---------------------------------------------------------

// $(window).on('resize', () => {
//   var containerWidth = $('nav > .container').width()
//   $('.nav.navbar').width( containerWidth )
// })

function resizeNavbar() {
  var containerWidth = $('nav > .container').width()
  $('.nav.navbar').width( containerWidth )
}

function handleResize() {
  resizeNavbar()
  console.log('resized')
}
$(window).load('resize', handleResize)
$(window).on('resize', handleResize)

// ---------------------------------------------------------
// Contact Form
// ---------------------------------------------------------


// ---------------------------------------------------------
// Google Map
// ---------------------------------------------------------
function initialize() {
  var myCenter=new google.maps.LatLng(43.58856,-116.29375)

  var mapProp = {
    center: myCenter,
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);

  var marker=new google.maps.Marker({
    position:myCenter,
    animation:google.maps.Animation.BOUNCE
  });

  marker.setMap(map);

  google.maps.event.addListener(map,'center_changed',function() {
// 3 seconds after the center of the map has changed, pan back to the marker
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    },3000);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);