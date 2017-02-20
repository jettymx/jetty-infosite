
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>

<!-- Cambio de texto index -->
<script type="text/javascript">
  // var texts = ["¿Te incomoda ir parado en el camión?", "¿Te da miedo viajar en transporte público?", "¿Te estresa ver como avanza el taxímetro y las tarifas dinámicas?"];
  //   var count = 0;
  //   function changeText() {
  //       $("#example").text(texts[count]);
  //       count < 3 ? count++ : count = 0;
  //   }
  // setInterval(changeText, 3000);
</script>

<script type="text/javascript">
  $(function(){
    $('.text-fadein h2:gt(0)').hide();
    setInterval(function(){$('.text-fadein :first-child').fadeOut(1500).next('h2').fadeIn(1500).end().appendTo('.text-fadein');}, 5000);
  });
</script>

<!-- TypeForm Organizaciones -->
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm_share',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()</script>