var React = require("react");

var FooterComponent = React.createClass({
  render: function() {
      return (
       <!--<div className = "footerComp">-->
           <div className = "footer">
              <span>Bookmarklet</span>
              <a className = "readLater" href = "#" >+ Read later</a>
        <p className = "mess">If you are using a browser that supports it, you should be able to click and drag the bookmarklet above to your bookmarks or favorites bar. Next when you will be on the page that you want to read later just click on your bookmarklet.</p>
            </div>
        <!--</div>-->
     )
  }
})
module.exports=FooterComponent;