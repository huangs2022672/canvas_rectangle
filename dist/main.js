!function(){"use strict";!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=function(){function e(t,n,i,s,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.ctx=t,this.x=n,this.y=i,this.startX=10,this.endX=n-this.startX,this.startY=10,this.endY=i-this.startY,this.color="rgb(200, 0, 0)",this.drawRect(this.color),this.changeColor=this.changeColor.bind(this)}var n,i;return n=e,(i=[{key:"drawRect",value:function(t){this.color=t,this.ctx.fillStyle=this.color,this.ctx.fillRect(this.startX,this.startY,this.endX,this.endY)}},{key:"changeColor",value:function(t){console.log(t.clientX,t.clientY),t.clientX>=this.startX&&t.clientX<=this.endX&&t.clientY>=this.startY&&t.clientY<=this.endY&&this.drawRect("rgb(200, 200, 0)")}}])&&t(n.prototype,i),e}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas");t.width=600,t.height=600;var n=t.getContext("2d"),i=new e(n,50,50);document.addEventListener("click",i.changeColor)}))}()}();
//# sourceMappingURL=main.js.map