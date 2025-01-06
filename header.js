// JavaScript Document// JavaScript Document
function header() {
    const headerHTML = `
    <header class="header-1">
      <div class="navbar-collapse collapse clearfix">
        <ul class="navigation clearfix">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About us</a></li>
          <li class="dropdown">
            <a href="#">Our Services</a>
            <ul>
              <li class="dropdown">
                <div class="dropdown-link">BIM Services</div>
                <ul>
                  <li><a href="bim-development-services.html">BIM Development Services</a></li>
                  <li><a href="bim-consulting-services.html">BIM Consulting Services</a></li>
                  <li><a href="vdc-services.html">Virtual Design & Construction (VDC)</a></li>
                  <li><a href=bim-technical-services.html>BIM Technical Services</a></li>
                </ul>
              </li>
 <li class="dropdown">
               <div class="dropdown-link">Architecture Services</div>
                <ul>
                  <li><a href="architecture-bim-services.html">Architecture BIM Services</a></li>
                  <li><a href="interior-design-bim-services.html">Interior Design BIM Services</a></li>
                  <li><a href="landscape-bim-services.html">Landscape BIM Services</a></li>
                </ul>
              </li>
              
               

 <li class="dropdown">
                <div class="dropdown-link">Structure Services</div>
                <ul>
                  <li><a href="structural-bim-services.html"> Structural BIM Services</a></li>
<li><a href="structural-design-services.html">Structural Design Services</a></li>
                  
 <li><a href="infrastructure-bim-services.html">Infrastructure Services </a></li>
 <li><a href="bim-services-for-civil-surface-utilities.html">Civil & Underground Utility Services </a></li>
                </ul>
              </li>
              <li><a href="cad-drafting-services.html">CAD Drafting Services</a></li>
              <li><a href="visualization-rendering-service.html">Consulting & Optimization</a></li>

            </ul>
          </li>
          <li><a href="intec-projects.html">Projects</a></li>
         
         
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </div>
    </header>
  `;

    document.write(headerHTML);
}