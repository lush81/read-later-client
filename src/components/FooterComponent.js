var React = require("react");

var FooterComponent = React.createClass({
  
   render: function() {
      return (
       <!--<div className = "footerComp">-->
           <div className = "footer">
              <span>Bookmarklet</span>
             
        <a className = "readLater"  href="javascript:!function(){function e(e,t){var n=document.createElement(&quot;div&quot;);n.id=&quot;__READABILITY_APP_FLASH__&quot;,n.style.width=&quot;100%&quot;,n.style.position=&quot;fixed&quot;,n.style.zIndex=99999,n.style.color=&quot;white&quot;,n.style.fontSize=&quot;18px&quot;,n.style.textAlign=&quot;center&quot;,n.style.padding=&quot;20px 0&quot;,n.style.fontFamily=&quot;'Open Sans', Helvetica, Arial, sans-serif&quot;,n.innerHTML=t,n.style.background=e===o.SUCCESS?&quot;rgba(130, 69, 137, 0.95)&quot;:&quot;red&quot;,document.body.insertBefore(n,document.body.childNodes[0]),setTimeout(function(){document.body.removeChild(n)},3500)}var t,n=&quot;http://read-later-server.herokuapp.com/scraper&quot;,o={SUCCESS:&quot;SUCCESS&quot;,ERROR:&quot;ERROR&quot;};t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;),t.onreadystatechange=function(){4===t.readyState&&(200===t.status?e(o.SUCCESS,&quot;Item has been successfully added&quot;):e(o.ERROR,&quot;Sorry, something went wrong. &quot;+t.statusText))},t.open(&quot;POST&quot;,n,!0),t.setRequestHeader(&quot;Content-type&quot;,&quot;application/x-www-form-urlencoded&quot;),t.send(&quot;url=&quot;+document.URL)}();" >
  + Read later
  </a>
        <p className = "mess">If you are using a browser that supports it, you should be able to click and drag the bookmarklet above to your bookmarks or favorites bar. Next when you will be on the page that you want to read later just click on your bookmarklet.</p>
            </div>
        <!--</div>-->
     )
  }
})
module.exports=FooterComponent;