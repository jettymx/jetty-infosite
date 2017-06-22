
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>

<script type="text/javascript">
  $(function(){
    $('.text-fadein h2:gt(0)').hide();
    setInterval(function(){$('.text-fadein :first-child').fadeOut(1500).next('h2').fadeIn(1500).end().appendTo('.text-fadein');}, 5000);
  });
</script>

<!-- TypeForm Organizaciones -->
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm_share',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()</script>

<!-- Animated AOS -->
<script src="js/aos.js"></script>
<script>
  AOS.init();
</script>

<!-- SVG Animated -->
<script src="js/vivus.js"></script>
<script>
  obt1 = new Vivus('asiento', {type: 'delayed', duration: 100}),
  obt2 = new Vivus('rutas', {type: 'delayed', duration: 100}),
  obt3 = new Vivus('zzz', {type: 'delayed', duration: 100}),
  obt4 = new Vivus('cartera', {type: 'delayed', duration: 100}),
  obt5 = new Vivus('laptop', {type: 'delayed', duration: 100}),
  obt6 = new Vivus('chofer', {type: 'delayed', duration: 100}),
  obt7 = new Vivus('rocket', {type: 'delayed', duration: 100});
</script>
