
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="{{site.baseurl}}/js/bootstrap.min.js"></script>

<!-- LOTTIE ANIMACIONES -->
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

<!-- SGMNT -->
<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("ConqY6qh0tPXUytdyE6Tl69McgJ55J2U");
  analytics.page();
  }}();
</script>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/js/forms.js?v=2020020401"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/locale/es.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/js/bootstrap-datetimepicker.min.js"></script>

<script type="text/javascript">
  //Wrapper for scrollTo.js
  function scroll(id, time) {
    $.scrollTo(id, time)
  }

  $(function () {
    $('.event-date-picker').datetimepicker({
      locale: 'es',
      format: 'DD/MM/YYYY',
      minDate: new Date()
    });

    $('.event-time-picker').datetimepicker({
      locale: 'es',
      format: 'LT'
    });

    $('#datetimepicker-org-1').datetimepicker({
      locale: 'es',
      minDate: new Date(),
      sideBySide: true
    })

    $('#timepicker-org-1').datetimepicker({
      locale: 'es',
      format: 'LT'
    });

    $('#timepicker-org-2').datetimepicker({
      locale: 'es',
      format: 'LT'
    });

  });
</script>

<script type="text/javascript">
  //Set your APP_ID
  var APP_ID = "aij161lx";
  // APP_ID prod aij161lx
  // APP_ID test k86qldbk

  window.intercomSettings = {
    app_id: APP_ID
  };

  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

  Intercom('update', {"name": "Usuario Web"});
</script>

<!-- SCROLLTO CONDUCTORES -->
<script type="text/javascript">
  $("#button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});
</script>

<!-- Animated AOS -->
<script src="{{site.baseurl}}/js/aos.js"></script>
<script>
  AOS.init();
</script>

<!-- inSight Linkedin -->
<script type="text/javascript">
  _linkedin_partner_id = "2641898";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  </script><script type="text/javascript">
  (function(){var s = document.getElementsByTagName(“script”)[0];
  var b = document.createElement(“script”);
  b.type = “text/javascript”;b.async = true;
  b.src = “https://snap.licdn.com/li.lms-analytics/insight.min.js”;
  s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=2641898&fmt=gif" />
</noscript>
