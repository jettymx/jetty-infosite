<nav class="navbar navbar-fixed-top navbar-default nav-background" id="demo">
  <div class="container-fluid">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="{{site.baseurl}}/en/">
          <img src="{{ site.baseurl }}/img/logo-jetty-green.svg">
        </a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <!-- <ul class="nav navbar-nav navbar-right">
          <li><a href="{{site.baseurl}}/en/">Home</a></li>
          <li><a href="{{site.baseurl}}/en/soluciones-tecnologicas">Technological solutions</a></li>
          <li><a href="{{site.baseurl}}/en/servicios-de-transporte">Transport services</a></li>
          <li><a href="{{site.baseurl}}/blog">Blog</a></li>
          <li><a href="{{site.baseurl}}/"><img src="{{site.baseurl}}/img/flagMX.png" class="translate"></a></li>
        </ul> -->

        <ul class="nav navbar-nav navbar-right">
          {% if page.active == "home" %}
            <li class="active"><a href="#">Home</a></li>
          {% else %}
            <li><a href="{{site.baseurl}}/en/">Home</a></li>
          {% endif %}

          {% if page.active == "technological solutions" %}
            <li class="active"><a href="#">Technological solutions</a></li>
          {% else %}
            <li><a href="{{site.baseurl}}/en/soluciones-tecnologicas">Technological solutions</a></li>
          {% endif %}

          {% if page.active == "transport services" %}
            <li class="active"><a href="#">Transport services</a></li>
          {% else %}
            <li><a href="{{site.baseurl}}/en/servicios-de-transporte">Transport services</a></li>
          {% endif %}

          {% if page.active == "blog" %}
            <li class="active"><a href="#">Blog</a></li>
          {% else %}
              <li><a href="{{{site.baseurl}}/blog">Blog</a></li>
          {% endif %}
             <li><a href="{{site.baseurl}}/"><img src="{{site.baseurl}}/img/flagMX.png" class="translate"></a></li>
        </ul>

      </div>
    </div>
  </div>
</nav>