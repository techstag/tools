!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./dist/",t(t.s=1)}([function(e,t,n){"use strict";function o(e,t){function n(e){e.preventDefault(),i(r,a,o)}var o=t.OrginalImage,r=t.canvas,a=t.originalFileName;e.addEventListener("click",n)}function r(e){console.log(e)}function i(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r,c=t+"-minimage-"+d+".png";a(e,n,o,i),l(e,c,o,i),d++}function a(e,t,n,o){try{var r=e.getContext("2d"),i=r.globalCompositeOperation;return r.globalCompositeOperation="destination-over",r.drawImage(t,0,0,e.width,e.height),r.globalCompositeOperation=i,o&&setTimeout(o),e}catch(e){n&&n(e)}}function l(e,t,n,o){try{e.toBlob(function(e){try{if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(e,t),o&&setTimeout(o);else{var r=window.URL.createObjectURL(e),i=document.createElement("a");document.body.appendChild(i),i.setAttribute("href",r),i.setAttribute("download",t),i.click(),o&&setTimeout(o),setTimeout(function(){window.URL.revokeObjectURL(r),document.body.removeChild(i)},3e3)}}catch(e){n&&n(e)}})}catch(e){n&&n(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.makeDownloadLink=o,t.triggerDownload=i,t.mergeCanvasAndImage=a;var d=0},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(e){"eraser"==e?C():w(e)}k=e,M();var n=L("drawzone"),o=L("drawzoneWrapper");L("inputForAFile").style.display="none",L("drawAndDownload").style.display="",console.log(e.width,e.height);var r=2*Math.max(window.innerWidth,window.innerHeight),i=Math.max(e.width/r,e.height/r,1);e.width=n.width=e.width/i,e.height=n.height=e.height/i,o.style.maxWidth=e.width,o.style.maxHeight=e.height,o.appendChild(e);var l=(n.getContext("2d"),!1),d=L("topbar").classList,c=L("background"),s=(0,a.default)(L("pensizePreview"),{canvasForCursor:n,onColorChange:t,elementToContrastWith:c}),g=s.setColorDotSize,p=s.refreshColorPreviewBorder,h=(s.clearColorPicker,(0,f.default)(n,{onMouseDown:function(){n.getClientRects()[0].height+160>window.innerHeight&&d.add("drawInProgress")},onMouseUp:function(){l||(l=!0,download.classList.add("usable")),d.remove("drawInProgress")},OrginalImage:k})),w=h.drawWithColor,C=h.drawWithEraser,b=h.setPencilSize;(0,u.default)(c,{onChange:p}),(0,m.default)(L("pensize"),{onChange:function(e){g(e),b(e)}}),(0,v.makeDownloadLink)(L("download"),{OrginalImage:k,originalFileName:E,canvas:n}),(0,y.detectCtrlS)({canvas:n,OrginalImage:k,originalFileName:E})}n(3);var i=n(4),a=o(i),l=n(9),d=o(l),c=n(10),u=o(c),s=n(11),f=o(s),v=n(0),g=n(12),m=o(g),p=n(13),h=o(p),w=n(14),y=n(15),C=n(16),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(C),L=document.getElementById.bind(document);b.install();var E=void 0,k=void 0;(0,d.default)({fileinput:L("fileinput"),onImageCreated:function(e,t){E=t,r(e)},startTask:w.startTask,endTask:w.endTask});var F=(0,h.default)(L("welcome"),{fitWindow:!0}),M=F.stopAnim,x=F.bgColor;L("fileInputWrapper").style.color=x},function(e,t){},function(e,t,n){"use strict";function o(e,t){if("eraser"==e)return"transparent";var n=(0,c.luminance)(t),o=(0,c.luminance)(e);return n>125&&o>200?"black":n<125&&o<25?"white":"transparent"}function r(e){return(0,c.luminance)(e)>127.5?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.8)"}function i(e,t){(0,s.createModal)("color-modal",function(o){function i(e){l(),t(e)}var a=o.modal,l=o.closeModal;u.paletteColors.forEach(function(t){var n=document.createElement("button");n.classList.add("colorbutton"),t===e&&(n.classList.add("active"),n.innerHTML="Selected",n.style.color=r(t)),n.style.backgroundColor=t.toLowerCase(),n.addEventListener("click",function(){return i(t)}),a.appendChild(n)});var d=document.createElement("button");d.classList.add("eraser"),d.addEventListener("click",function(){return i("eraser")}),d.innerHTML='<img src="'+n(8)+'"/><span class="imagelabel">'+("eraser"===e?"Eraser selected":"Eraser")+"</span>",a.appendChild(d)})}function a(e,t,n){var o=t<4?4:t,r=document.createElement("canvas");r.width=r.height=o;var i=r.getContext("2d");"eraser"==n?d(i,o):l(i,o,n);var a=r.toDataURL("image/png");e.style.cursor="url("+a+") "+o/2+" "+o/2+",auto"}function l(e,t,n){e.beginPath(),e.arc(t/2,t/2,t/2,0,2*Math.PI,!1),e.fillStyle=n,e.fill()}function d(e,t){e.fillStyle="#da502d",e.fillRect(0,0,2*t/3,t),e.fillStyle="#6584a5",e.fillRect(2*t/3-1,0,t,t),e.globalCompositeOperation="destination-in",l(e,t,"white")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){g.style.background=o(m,u.style.backgroundColor)}function r(){i(m,l)}function l(e){console.log("onColorPicked",e),m&&e!==m&&(p=m),localStorage.setItem("previousColor",p),m=e,a(s,h,m),"eraser"==e?(v.style.background="",v.classList.add("eraser")):(v.classList.remove("eraser"),v.style.background=e,n()),localStorage.setItem("color",e),c(e)}function d(e){h=e,a(s,h,m),v.style.transform="scale("+e/w+")",g.style.transform="scale("+(e/w+1/w)+")"}var c=t.onColorChange,u=t.elementToContrastWith,s=t.canvasForCursor,v=e.children[0],g=e.children[1],m=void 0;e.addEventListener("click",r);var p=localStorage.getItem("previousColor")||"eraser",h=void 0,w=v.getBoundingClientRect().width;return window.addEventListener("keydown",function(e){"x"===String.fromCharCode(e.which).toLowerCase()&&(console.log("x switching to "+p),l(p))}),setTimeout(function(){return l(localStorage.getItem("color")||f)}),{clearColorPicker:function(){e.removeEventListener("click",r)},setColorDotSize:d,refreshColorPreviewBorder:n}};var c=n(5),u=n(6),s=n(7),f="#2b76ce"},function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){var t=document.createElement("canvas");t.width=t.height=1;var n=t.getContext("2d");return n.clearRect(0,0,1,1),n.fillStyle=e,n.fillRect(0,0,1,1),[].concat(o(n.getImageData(0,0,1,1).data)).slice(0,3)}function i(e){return r(e).reduce(function(e,t){return e+t},0)/3}Object.defineProperty(t,"__esModule",{value:!0}),t.colorToRGB=r,t.luminance=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.paletteColors="#000000,#FFFFFF,#F44336,#E91E63,#9C27B0,#673AB7,#3F51B5,#2196F3,#03A9F4,#00BCD4,#009688,#4CAF50,#8BC34A,#CDDC39,#FFEB3B,#FFC107,#FF9800,#FF5722,#795548,#9E9E9E,#607D8B".split(",")},function(e,t,n){"use strict";function o(e,t){function n(e){27==e.which&&o()}function o(){i.classList.add("closing"),a.classList.add("closing"),setTimeout(function(){document.body.removeChild(i),document.body.removeChild(a)},300),document.removeEventListener("keyup",n)}var i=document.createElement("div");i.classList.add("modal"),i.classList.add(e),document.body.appendChild(i);var a=document.createElement("div");return a.classList.add("modal-backdrop"),document.body.appendChild(a),a.style.zIndex=r,i.style.zIndex=r+1,a.addEventListener("click",o),document.addEventListener("keyup",n),r+=2,t({modal:i,closeModal:o})}Object.defineProperty(t,"__esModule",{value:!0}),t.createModal=o;var r=4},function(e,t,n){e.exports=n.p+"eraser.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){l();var t=new FileReader;t.onload=function(){n(t.result),c()},t.onerror=c,t.readAsDataURL(e)}function n(e){if(l(),s){var t=new Image;t.onload=function(){s=!1,r(t,u),c()},t.onerror=c,t.src=e}}function o(e){var o=Array.prototype.find.call(e,function(e){return"file"==e.kind&&e.type.match("image")});if(u="pasted-image",o)return void t(o.getAsFile());var r=Array.prototype.find.call(e,function(e){return"string"==e.kind});r&&r.getAsString(function(e){return n(e)})}var r=e.onImageCreated,i=e.fileinput,a=e.startTask,l=void 0===a?function(){return null}:a,d=e.endTask,c=void 0===d?function(){return null}:d,u="pasted-image",s=!0;!function(){function e(n){i.removeEventListener("change",e),u=i.value.split("\\").pop().split(".")[0]||"image",t(n.target.files[0])}i&&i.addEventListener("change",e)}(),window.addEventListener("paste",function(e){o(e.clipboardData.items)}),document.body.addEventListener("dragover",function(e){e.preventDefault(),e.stopPropagation()}),document.body.addEventListener("drop",function(e){e.preventDefault(),e.stopPropagation(),o(e.dataTransfer.items)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){a++,localStorage.setItem("background",a),o()}function o(){var t=["#DDD","#333"],n=a%t.length;e.style.backgroundColor=t[n],r(n);var o=document.body.classList;t.forEach(function(e,t){return o.remove("background_n_"+t)}),o.add("background_n_"+n),i<8?(console.log(0==n?"jour !":"nuit !"),i++):console.log("Monsieur Jacquouille, je vous en prie, à la longue, ça devient casse-pied !")}var r=t.onChange,i=0,a=localStorage.getItem("background")||0;o(),e.addEventListener("click",n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){g=e.getBoundingClientRect(),v=g.width/e.width,m&&p&&(p.lineWidth=m/v)}function r(e){return{x:(e.clientX-g.left)/v,y:(e.clientY-g.top)/v}}function i(){y||(y=!0,p.beginPath(),l())}function a(){y&&s(),y=!1}function l(){y&&(window.requestAnimationFrame(l),d())}function d(){p.moveTo(w.x,w.y),p.lineTo(h.x,h.y),p.stroke(),w=h}function c(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;e.addEventListener(t,function(e){e.preventDefault();var t=e.touches[0]||{},r=t.clientX,i=t.clientY,a=new MouseEvent(n,{clientX:r,clientY:i});o.dispatchEvent(a)},!1)}var u=t.onMouseDown,s=t.onMouseUp,f=t.OrginalImage,v=void 0,g=void 0,m=void 0;n(),window.addEventListener("resize",n);var p=e.getContext("2d");p.lineCap="round";var h={x:0,y:0},w=h;e.addEventListener("mousedown",function(t){if(3==t.which)return void(0,o.mergeCanvasAndImage)(e,f);h=w=r(t),i(),u()},!1),document.addEventListener("copy",function(t){t.preventDefault(),(0,o.mergeCanvasAndImage)(e,f),t.clipboardData.setData("text/html",'<img src="'+e.toDataURL()+'"/>')}),document.addEventListener("mouseup",a,!1),e.addEventListener("mousemove",function(e){h=r(e)},!1);var y=!1;return c("touchstart","mousedown"),c("touchend","mouseup",document),c("touchmove","mousemove"),{drawWithEraser:function(){p.globalCompositeOperation="destination-out"},drawWithColor:function(e){p.globalCompositeOperation="source-over",p.strokeStyle=e},setPencilSize:function(e){m=e,p.lineWidth=e/v}}};var o=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(t){e.value=t,localStorage.setItem("pensize",t),r(t)}var r=t.onChange;e.addEventListener("input",function(e){return n(e.target.value)}),n(parseInt(localStorage.getItem("pensize"))||o)};var o=20},function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.filter(function(e){return e!=t});return n[Math.floor(Math.random()*n.length)]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){u&&(e.width=window.innerWidth,e.height=window.innerHeight),f=e.width,v=e.height,s=e.getContext("2d"),s.fillStyle=g,s.fillRect(0,0,f,v),s.lineCap="round",i()}function i(){m={x:f/2,y:v/2},p={x:10*Math.random()-5,y:10*Math.random()-5},h={x:10*Math.random()-5,y:10*Math.random()-5},s.strokeStyle=o(r,g),s.lineWidth=20+40*Math.random(),s.beginPath(),s.moveTo(m.x,m.y)}function a(){h={x:2*Math.random()-1,y:2*Math.random()-1},w=setTimeout(a,100+200*Math.random())}function l(){s.moveTo(m.x,m.y),p.x*=.95,p.y*=.95,p.x+=h.x,p.y+=h.y,m.x+=p.x,m.y+=p.y,s.lineTo(m.x,m.y),s.stroke(),(m.x<-50||m.x>f+50||m.y<-50||m.y>v+50)&&i()}function d(){y&&(window.requestAnimationFrame(d),l())}function c(){y=!1,clearTimeout(w),window.removeEventListener("resize",n)}var u=t.fitWindow,s=void 0,f=void 0,v=void 0,g="#F44336",m=void 0,p=void 0,h=void 0,w=void 0;n(),window.addEventListener("resize",n),a();var y=!0;return d(),{stopAnim:c,bgColor:g}};var r="#F44336,#E91E63,#9C27B0,#673AB7,#3F51B5,#2196F3,#03A9F4,#00BCD4,#009688,#4CAF50,#8BC34A,#CDDC39,#FFEB3B,#FFC107,#FF9800,#FF5722".split(",")},function(e,t,n){"use strict";function o(){a++,i()}function r(){a--,setTimeout(i)}function i(){spinners.classList[a?"remove":"add"]("hidden")}Object.defineProperty(t,"__esModule",{value:!0}),t.startTask=o,t.endTask=r,t.updateLook=i;var a=0;document.addEventListener("DOMContentLoaded",i)},function(e,t,n){"use strict";function o(e){var t=e.canvas,n=e.OrginalImage,o=e.originalFileName;window.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&"s"===String.fromCharCode(e.which).toLowerCase()&&(e.preventDefault(),(0,r.triggerDownload)(t,o,n))})}Object.defineProperty(t,"__esModule",{value:!0}),t.detectCtrlS=o;var r=n(0)},function(e,t){var n="offline-plugin: runtime was installed without OfflinePlugin being added to the webpack.config.js. See https://goo.gl/2Ca7NO for details.";window.console&&(console.info?console.info(n):console.log&&console.log(n)),t.install=function(){},t.applyUpdate=function(){},t.update=function(){}}]);
//# sourceMappingURL=bundle.2deff698413f939544a8.js.map