
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel();
      });
});
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/owl.carousel/dist/owl.carousel.min.js"></script>