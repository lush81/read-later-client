var React = require('react');
var shortBody;

var comp = React.createClass({
 
  render: function() {
      
return (
<div className = "contentComp">
   <div className = "contentMain">
      <div className = "content">
         <div className ="article panel panel-danger">
           <div >
               <a className = "titleArticle" href = "#" onClick = {this.a}>
                  <h1><b>aaa</b></h1>
               </a>
            </div>
           <div className = "bodyArticle">bbbb</div>
    <!--div className = "bodyArticle">{this.props.article.content}</div>-->
            <div className = "urlArticle"><a href="#"  onClick = {this.b}>vvv</a></div>
         </div>
      </div>
   </div>
</div>
                   )
  }
})

module.exports=comp;