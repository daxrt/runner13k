!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e){kontra.init(),kontra.canvas.width=100,kontra.canvas.height=150,kontra.getImage=function(t){const e=new Image;return e.src=t,e},kontra.clear=function(){kontra.context.clearRect(0,0,kontra.canvas.width,kontra.canvas.height)},kontra.gameLoopEmpty=function(){return kontra.gameLoop({clearCanvas:!1,update(t){},render(){}})},kontra.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t}},function(t,e){!function(){var t=t={A:[[,1],[1,,1],[1,,1],[1,1,1],[1,,1]],B:[[1,1],[1,,1],[1,1,1],[1,,1],[1,1]],C:[[1,1,1],[1],[1],[1],[1,1,1]],D:[[1,1],[1,,1],[1,,1],[1,,1],[1,1]],E:[[1,1,1],[1],[1,1,1],[1],[1,1,1]],F:[[1,1,1],[1],[1,1],[1],[1]],G:[[,1,1],[1],[1,,1,1],[1,,,1],[,1,1]],H:[[1,,1],[1,,1],[1,1,1],[1,,1],[1,,1]],I:[[1,1,1],[,1],[,1],[,1],[1,1,1]],J:[[1,1,1],[,,1],[,,1],[1,,1],[1,1,1]],K:[[1,,,1],[1,,1],[1,1],[1,,1],[1,,,1]],L:[[1],[1],[1],[1],[1,1,1]],M:[[1,1,1,1,1],[1,,1,,1],[1,,1,,1],[1,,,,1],[1,,,,1]],N:[[1,,,1],[1,1,,1],[1,,1,1],[1,,,1],[1,,,1]],O:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],P:[[1,1,1],[1,,1],[1,1,1],[1],[1]],Q:[[0,1,1],[1,,,1],[1,,,1],[1,,1,1],[1,1,1,1]],R:[[1,1],[1,,1],[1,,1],[1,1],[1,,1]],S:[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],T:[[1,1,1],[,1],[,1],[,1],[,1]],U:[[1,,1],[1,,1],[1,,1],[1,,1],[1,1,1]],V:[[1,,,,1],[1,,,,1],[,1,,1],[,1,,1],[,,1]],W:[[1,,,,1],[1,,,,1],[1,,,,1],[1,,1,,1],[1,1,1,1,1]],X:[[1,,,,1],[,1,,1],[,,1],[,1,,1],[1,,,,1]],Y:[[1,,1],[1,,1],[,1],[,1],[,1]],Z:[[1,1,1,1,1],[,,,1],[,,1],[,1],[1,1,1,1,1]],0:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],1:[[,1],[,1],[,1],[,1],[,1]],2:[[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],3:[[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],4:[[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],5:[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],6:[[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],7:[[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],8:[[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],9:[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]],"|":[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]],"-":[[0,0,0],[0,0,0],[1,1,1],[0,0,0],[0,0,0]]," ":[[,,],[,,],[,,],[,,],[,,]]},e=kontra.context;kontra.drawText=function(a,n,r,i){var o=[];a=a.toUpperCase();for(var s=0;s<a.length;s++){var h=t[a.charAt(s)];h&&o.push(h)}e.fillStyle=i||"black";var c=r&&r.x||0;for(s=0;s<o.length;s++){h=o[s];for(var u=r&&r.y||0,l=0,k=0;k<h.length;k++){for(var d=h[k],p=0;p<d.length;p++)d[p]&&e.fillRect(c+p*n,u,n,n);l=Math.max(l,d.length*n),u+=n}c+=n+l}},kontra.drawTextCenter=function(t,e,a,n){(a=a||{}).x=kontra.canvas.width/2-(3*t.length+t.length)*e/2,kontra.drawText(t,e,a,n)}}()},function(t,e,a){"use strict";a.r(e);a(0),a(1);var n={states:[],clear(){kontra.context.clearRect(0,0,kontra.canvas.width,kontra.canvas.height)},init(){return this},switch(t){if(this.clear(),this.states.forEach(t=>{t.scene.isStopped||(t.scene.destroy&&t.scene.destroy(),t.scene.stop())}),"string"==typeof t)this.states.forEach(e=>{e.key==t&&(e.scene.init&&e.scene.init(),e.scene.start())});else{const e=this.states[t];e.scene.init&&e.scene.init(),e.scene.start()}},addScene(t,e){return e.load&&e.load(),this.states.push({key:t,scene:e}),this}}.init();let r,i,o,s,h=[],c=[],u=[],l=0;const k=kontra.gameLoop({update(t){c.forEach(e=>{e.update(t)}),u.forEach(e=>{e.update(t)}),h.forEach(e=>{e.update(t)}),r.update(t),o(),s()},render(){c.forEach(t=>{t.render()}),u.forEach(t=>{t.render()});var t=[r,...h];t.sort((t,e)=>t.isJump&&t.isJump()?1:e.isJump&&e.isJump()?-1:t.y-e.y),t.forEach(t=>{t.render()}),kontra.drawText(String(Math.floor(r.score)),1,{x:1,y:1},"#fff");var e=Array(r.health+1).join("|");kontra.drawText(e,1,{x:kontra.canvas.width-(3*r.health+r.health),y:1},"red")}});k.load=function(){const t=kontra.spriteSheet({image:kontra.getImage("./assets/runner13k.png"),frameWidth:16,frameHeight:16,animations:{walk:{frames:[0,1],frameRate:8},enemyWalk:{frames:[6,7],frameRate:6},attack:{frames:[2,3],frameRate:8},jump:{frames:4,frameRate:1,loop:!1},heart:{frames:5,frameRate:1,loop:!1},gold:{frames:8,frameRate:1,loop:!1},grass:{frames:9,frameRate:1,loop:!1}}});r=kontra.sprite({type:"player",x:0,y:kontra.canvas.height-16,animations:t.animations,playerState:"walk",prevPlayerState:"walk",health:3,score:0,invulnerableTime:0,invulnerableDuration:1e3,attackTime:0,attackDuration:500,jumpTime:0,jumpDuration:1e3,isJump(){return+new Date-this.jumpTime<this.jumpDuration},collidesWith(t){return this.x<t.x+t.width-2&&this.x+this.width-2>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y},update(t){this.advance(t);let e=+new Date;var a,i,o;e-this.jumpTime<this.jumpDuration&&(a=!0),e-this.attackTime<this.attackDuration&&(i=!0),e-this.invulnerableTime<this.invulnerableDuration&&(o=!0),this.y=a?kontra.canvas.height-20-8:kontra.canvas.height-20,i||a||(this.playerState="walk",kontra.keys.pressed("left")&&r.x>0?(this.x-=1,this.playerState="walk"):kontra.keys.pressed("right")&&this.x+this.width<kontra.canvas.width?(this.x+=1,this.playerState="walk"):kontra.keys.pressed("x")?(this.playerState="attack",i=!0,this.attackTime=+new Date):kontra.keys.pressed("space")&&e-this.jumpTime>this.jumpDuration+200&&(this.playerState="jump",a=!0,this.jumpTime=+new Date)),a||u.forEach((t,e)=>{this.collidesWith(t)&&(this.score+=50,u.splice(e,1))}),h.forEach((t,e)=>{this.collidesWith(t)&&(i&&h.splice(e,1),a||i||o||(this.invulnerableTime=+new Date,this.health--,this.health<=0&&(t.y=0,this.x=0,this.score=0,this.health=3,h=[],console.log("Game over"),n.switch("gameover"))))}),this.prevPlayerState!=this.playerState&&(this.playAnimation(this.playerState),this.prevPlayerState=this.playerState)}}),o=function(){if(h.length<10&&+new Date-l>1e3){l=+new Date;var e=kontra.sprite({type:"enemy",x:kontra.getRandomInt(0,kontra.canvas.width-16),y:kontra.getRandomInt(-kontra.canvas.height,-16),animations:t.animations,collidesWith(t){return this.x<t.x+t.width-2&&this.x+this.width-2>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y},update(t){this.advance(t),this.y++,this.y>kontra.canvas.height&&(this.y=-this.height,this.x=kontra.getRandomInt(0,kontra.canvas.width-16))}});e.playAnimation("enemyWalk"),h.push(e)}},(i=kontra.sprite({type:"heart",x:kontra.canvas.width-16,y:-1,animations:t.animations})).playAnimation("heart");const e=function(e,a,n){return{type:n,x:e,y:a,animations:t.animations,d:!1,update(t){this.advance(t),this.d&&(this.y+=1),this.d=!this.d,this.y>kontra.canvas.height&&(this.y=-this.height,this.x=kontra.getRandomInt(0,kontra.canvas.width-16))}}};for(let t=0;t<kontra.canvas.height/16;t++)c.push(kontra.sprite(e(kontra.getRandomInt(0,kontra.canvas.width-16),16*t,"grass")));c.forEach(t=>{t.playAnimation("grass")}),s=function(){if(u.length<2){var t=kontra.sprite(e(kontra.getRandomInt(0,kontra.canvas.width-16),kontra.getRandomInt(0,-kontra.canvas.height-16),"gold"));t.playAnimation("gold"),u.push(t)}}},k.init=function(){kontra.canvas.style.background="#66b632ff",kontra.keys.bind("esc",function(){n.switch("menu")})},k.destroy=function(){kontra.keys.unbind("esc")};var d=k;const p=kontra.gameLoopEmpty();p.init=function(){kontra.canvas.style.background="#268B67",kontra.keys.bind("enter",function(){n.switch("game")}),[["Runner",3,kontra.canvas.height/2-45,"#CF6A39"],["Start",2,kontra.canvas.height/2-15,"#7B112B"],["Press enter",1,kontra.canvas.height/2,"#7B112B"],["x - attack",1,kontra.canvas.height/2+10,"#E79269"],["space - jump",1,kontra.canvas.height/2+20,"#E79269"],["esc - pause",1,kontra.canvas.height/2+30,"#E79269"]].forEach(t=>{kontra.drawTextCenter(t[0],t[1],{y:t[2]},t[3]||"#fff")})},p.destroy=function(){kontra.keys.unbind("enter")};var f=p;const m=kontra.gameLoopEmpty();m.init=function(){kontra.canvas.style.background="#000",kontra.keys.bind("enter",function(){n.switch("menu")}),setTimeout(()=>{kontra.clear(),kontra.drawTextCenter("Game Over",2,{y:kontra.canvas.height/2-15},"#fff")})},m.destroy=function(){kontra.keys.unbind("enter")};var y=m;kontra.assets.load("./assets/runner13k.png").then(function(){n.addScene("menu",f).addScene("game",d).addScene("gameover",y).switch("menu")}).catch(function(t){console.error(t)})}]);