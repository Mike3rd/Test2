<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
  </head>
  <body style={{"fontFamily":"Arial, Helvetica, sans-serif"}}>

    <div style={{"width":"760px"}}>
      <h2>About Us</h2>
      <p>We help software developers do more with PDFs. PDF.js Express gives a flexible and modern UI to your PDF.js viewer while also adding out-of-the-box features like annotations, form filling and signatures.</p>
	<a href="web/viewer.html?file=2021.11.16_Lennar_2022_Guide.pdf"  target="blank" >Open Full Screen PDF.js Viewer</a>
        <!--
          Place the following <div> element where you want the PDF to be displayed in your website. You can adjust the size using the width and height attributes.
        -->
        <div>
            <iframe id="pdf-js-viewer" src="web/viewer.html?file=2021.11.16_Lennar_2022_Guide.pdf#zoom=40"title="webviewer" frameborder="0" width="500" height="600"></iframe>
	
        </div>

    </div>

  </body>
</html>

