!function(t){"use strict";var s=function(s,o){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,o),this.baseText=this.el.text()||this.el.attr("placeholder")||"",this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.showCursor=!this.isInput&&this.options.showCursor,this.cursorChar=this.options.cursorChar,this.isInput=this.el.is("input"),this.attr=this.options.attr||(this.isInput?"placeholder":null),this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){t.typewrite(t.strings[t.arrayPos],t.strPos)},t.startDelay)},build:function(){!0===this.showCursor&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(!0!==this.stop){var o=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var o=0,e=t.substr(s);if("^"===e.charAt(0)){var r=1;/^\^\d+/.test(e)&&(r+=(e=/\d+/.exec(e)[0]).length,o=parseInt(e)),t=t.substring(0,s)+t.substring(s+r)}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,!1===i.loop||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var o=i.baseText+t.substr(0,s+1);i.attr?i.el.attr(i.attr,o):i.el.text(o),s++,i.typewrite(t,s)}},o)},o)}},backspace:function(t,s){if(!0!==this.stop){var o=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){var o=i.baseText+t.substr(0,s);i.attr?i.el.attr(i.attr,o):i.el.text(o),s>i.stopNum?(s--,i.backspace(t,s)):s<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.init()):i.typewrite(i.strings[i.arrayPos],s))},o)}},reset:function(){clearInterval(this.timeout);var t=this.el.attr("id");this.el.after('<span id="'+t+'"/>'),this.el.remove(),this.cursor.remove(),this.options.resetCallback()}},t.fn.typed=function(o){return this.each(function(){var i=t(this),e=i.data("typed"),r="object"==typeof o&&o;e||i.data("typed",e=new s(this,r)),"string"==typeof o&&e[o]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:1500,loop:!0,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);