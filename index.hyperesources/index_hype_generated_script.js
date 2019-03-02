//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"colorClicked",source:"function(hypeDocument, element, event) {\t\n\tif (window.buttonsClickable == true) {\n\t\n\t\tif (element.id == \"redDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"red\") {\n\t\t\t\thypeDocument.startTimelineNamed('redBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"greenDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"green\") {\n\t\t\t\thypeDocument.startTimelineNamed('greenBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"blueDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"blue\") {\n\t\t\t\thypeDocument.startTimelineNamed('blueBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"yellowDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"yellow\") {\n\t\t\t\thypeDocument.startTimelineNamed('yellowBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\t\n\t\t}\n\n\t\tif (window.gameOver == true ) { \n\t\t\twindow.buttonsClickable = false;\n\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t}\n\n\t\tif ((window.currentElement) == window.sequenceCount) {\n\t\t\twindow.currentElement = 0;\n\t\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + window.sequenceCount;\n\t\t\twindow.buttonsClickable = false;\n\t\t\tif ((window.sequenceCount%5) != 0) {\n\t\t\t\twindow.sequenceCount++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('roundComplete'); }, 500);\n\t\t\t\tsetTimeout(function(){ window.playInterval = setInterval(selectColor, window.intervalSpeed); }, 1500);\n\t\t\t} else {\n\t\t\t\tvar tempString = window.sequenceCount + \" ROUNDS<br/>\";\n\t\t\t\tif (window.sequenceCount == (5 || 25 || 50 || 75 || 100)) { \n\t\t\t\t\ttempString += \"BRILLIANT!\";\n\t\t\t\t} else if (window.sequenceCount == (10 || 30 || 55 || 80)) {\n\t\t\t\t\ttempString += \"AMAZING!\";\n\t\t\t\t} else if (window.sequenceCount == (15 || 35 || 60 || 85)) {\n\t\t\t\t\ttempString += \"GENIUS!\";\n\t\t\t\t} else if (window.sequenceCount == (20 || 40 || 65 || 90)) {\n\t\t\t\t\ttempString += \"OUTSTANDING!\";\n\t\t\t\t} else if (window.sequenceCount == (25 || 45 || 70 || 95)) {\n\t\t\t\t\ttempString += \"EXTRAOURDINARY!\";\n\t\t\t\t} \n\t\t\t\tdocument.getElementById(\"badgeMessage\").innerHTML = tempString;\n\t\t\t\twindow.sequenceCount++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('showBadge'); }, 500);\n\t\t\t}\n\t\t}\n\t}\n\t\n}",identifier:"49"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\twindow.selectColor = function() {\n\t\tvar color = window.colorSequence[window.currentElement];\n\t\tif (color == \"blue\") { \n\t\t\thypeDocument.startTimelineNamed('blueBeep');   \n\t\t} else if (color == \"red\") { \n\t\t\thypeDocument.startTimelineNamed('redBeep');    \n\t\t} else if (color == \"green\") { \n\t\t\thypeDocument.startTimelineNamed('greenBeep');  \n\t\t} else if (color == \"yellow\") { \n\t\t\thypeDocument.startTimelineNamed('yellowBeep'); \n\t\t}\n\t\t\n\t\tif (window.currentElement < (window.sequenceCount - 1)) {\n\t\t\twindow.currentElement++;\n\t\t} else {\n\t\t\tclearInterval(window.playInterval);\n\t\t\tlistenSequence();\n\t\t}\n\t};\n\n\twindow.listenSequence = function() {\n\t\twindow.buttonsClickable = true;\n\t\twindow.currentElement = 0;\n\t};\n\t\n\tclearInterval(window.playInterval);\n\t\n\twindow.sequenceCount = 1;\n\twindow.currentElement = 0;\n\twindow.buttonsClickable = false;\n\tvar i; \n\tvar temp1;\n\tvar temp2 = new Array();\n\tfor (i = 0; i < 100; i++) {\n\t\ttemp1 = Math.floor(Math.random()*4);\n\t\tif (temp1 == 0) { \t\ttemp2[i] = \"red\"; }\n\t\telse if (temp1 == 1) {\ttemp2[i] = \"blue\"; }\n\t\telse if (temp1 == 2) {\ttemp2[i] = \"yellow\"; }\n\t\telse if (temp1 == 3) {\ttemp2[i] = \"green\"; }\n\t}\n\twindow.colorSequence = temp2;\n\tconsole.log(\"The color sequence is \" + window.colorSequence);\n\t\n\twindow.gameOver = false;\n\twindow.buttonsClickable = false;\n\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + window.sequenceCount;\n\twindow.playInterval = setInterval(selectColor, window.intervalSpeed);\n\t\n}",identifier:"52"},{name:"resumeGame",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.startTimelineNamed('hideBadge');\n\tsetTimeout(function(){ window.playInterval = setInterval(selectColor, window.intervalSpeed); }, 1500);\n\t\n}",identifier:"97"},{name:"chooseSpeed",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\twindow.intervalSpeed = 1000;\n\t} else {\n\t\twindow.intervalSpeed = 400;\n\t}\n\thypeDocument.showSceneNamed('main');\n\t\n}",identifier:"102"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"10":{p:1,n:"orange%20spaceship.jpg",g:"142",t:"@1x"},"2":{p:2,n:"sound2.mp3",g:"28",t:"audio/mpeg"},"-2":{n:"blank.gif"},"3":{p:2,n:"looseSound.mp3",g:"58",t:"audio/mpeg"},"11":{p:1,n:"yellow.png",g:"15",t:"@1x"},"4":{p:2,n:"winSound.mp3",g:"61",t:"audio/mpeg"},"5":{p:1,n:"mars1.jpg",g:"106",o:true,t:"@1x"},"12":{p:1,n:"blue.png",g:"11",t:"@1x"},"6":{p:1,n:"mars1_2x.jpg",g:"106",o:true,t:"@2x"},"13":{p:1,n:"green.png",g:"13",t:"@1x"},"7":{p:2,n:"sound3.mp3",g:"29",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"0":{p:1,n:"outline.png",g:"5",t:"@1x"},"8":{p:2,n:"sound4.mp3",g:"30",t:"audio/mpeg"},"14":{p:1,n:"red.png",g:"9",t:"@1x"},"1":{p:2,n:"sound1.mp3",g:"27",t:"audio/mpeg"},"9":{p:2,n:"spacemusic.mp3",g:"140",t:"audio/mpeg"}},h,[],d,[{n:"splash",o:"62",X:[0]},{n:"main",o:"1",X:[1]}],[{o:"64",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#000000",bY:1,d:800,U:{},T:{"70_hover":{i:"70_hover",n:"70_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FBFEF5",s:"#8EFA00",o:"167"},{f:"c",y:0,z:1,i:"B",e:"#FFFFFF",s:"#8EFA00",o:"167"},{f:"c",y:0,z:1,i:"C",e:"#FFFFFF",s:"#8EFA00",o:"167"},{f:"c",y:0,z:1,i:"D",e:"#FFFFFF",s:"#8EFA00",o:"167"},{f:"c",y:0,z:1,i:"A",e:"#FFFFFF",s:"#8EFA00",o:"167"},{y:1,i:"G",s:"#FBFEF5",z:0,o:"167",f:"c"},{y:1,i:"B",s:"#FFFFFF",z:0,o:"167",f:"c"},{y:1,i:"C",s:"#FFFFFF",z:0,o:"167",f:"c"},{y:1,i:"D",s:"#FFFFFF",z:0,o:"167",f:"c"},{y:1,i:"A",s:"#FFFFFF",z:0,o:"167",f:"c"}],f:30},"103_hover":{i:"103_hover",n:"103_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"A",e:"#FFFFFF",s:"#8EFA00",o:"166"},{f:"c",y:0,z:1,i:"G",e:"#FBFEF5",s:"#8EFA00",o:"166"},{f:"c",y:0,z:1,i:"C",e:"#FFFFFF",s:"#8EFA00",o:"166"},{f:"c",y:0,z:1,i:"B",e:"#FFFFFF",s:"#8EFA00",o:"166"},{f:"c",y:0,z:1,i:"D",e:"#FFFFFF",s:"#8EFA00",o:"166"},{y:1,i:"A",s:"#FFFFFF",z:0,o:"166",f:"c"},{y:1,i:"G",s:"#FBFEF5",z:0,o:"166",f:"c"},{y:1,i:"C",s:"#FFFFFF",z:0,o:"166",f:"c"},{y:1,i:"B",s:"#FFFFFF",z:0,o:"166",f:"c"},{y:1,i:"D",s:"#FFFFFF",z:0,o:"166",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:16.11,b:[],a:[{f:"c",y:0,z:4,i:"cQ",e:1,s:4.0000000000000027,o:"159"},{f:"c",y:0,z:4,i:"cR",e:1,s:4.0000000000000027,o:"159"},{f:"c",y:0,z:4,i:"a",e:7,s:869,o:"159"},{f:"c",y:0,z:4,i:"b",e:34,s:669,o:"159"},{f:"c",y:0,z:5,i:"G",e:"#945200",s:"#945200",o:"159"},{f:"c",y:0,z:5,i:"s",e:"'Arial Black',Gadget,Sans-Serif",s:"'Arial Black',Gadget,Sans-Serif",o:"159"},{f:"c",p:2,y:0,z:16.11,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:12,o:"140",q:false}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:4,i:"a",e:-129,s:-448,o:"163"},{f:"c",y:0,z:4,i:"b",e:311,s:561,o:"163"},{f:"c",y:0,z:4,i:"cQ",e:1,s:0.20000000000000009,o:"163"},{f:"c",y:0,z:4,i:"cR",e:1,s:0.20000000000000009,o:"163"},{f:"c",y:0,z:5,i:"G",e:"#945200",s:"#929000",o:"164"},{f:"c",y:4,z:1,i:"e",e:1,s:0,o:"164"},{y:4,i:"cQ",s:1,z:0,o:"159",f:"e"},{y:4,i:"cR",s:1,z:0,o:"159",f:"e"},{y:4,i:"a",s:7,z:0,o:"159",f:"e"},{y:4,i:"b",s:34,z:0,o:"159",f:"e"},{y:4,i:"a",s:-129,z:0,o:"163",f:"c"},{y:4,i:"b",s:311,z:0,o:"163",f:"c"},{y:4,i:"cQ",s:1,z:0,o:"163",f:"c"},{y:4,i:"cR",s:1,z:0,o:"163",f:"c"},{y:5,i:"e",s:1,z:0,o:"164",f:"c"},{y:5,i:"s",s:"'Arial Black',Gadget,Sans-Serif",z:0,o:"159",f:"c"},{y:5,i:"G",s:"#945200",z:0,o:"159",f:"c"},{y:5,i:"G",s:"#945200",z:0,o:"164",f:"c"},{f:"c",y:5,z:1.09,i:"b",e:208,s:205,o:"157"},{f:"c",y:5,z:1.09,i:"a",e:540,s:234,o:"157"},{f:"c",y:6.09,z:1.08,i:"a",e:540,s:234,o:"162"},{f:"c",y:6.09,z:1.08,i:"b",e:236,s:236,o:"162"},{y:6.09,i:"a",s:540,z:0,o:"157",f:"c"},{y:6.09,i:"b",s:208,z:0,o:"157",f:"c"},{f:"c",y:7.17,z:1.06,i:"a",e:545,s:239,o:"158"},{f:"c",y:7.17,z:1.06,i:"b",e:267,s:264,o:"158"},{y:7.17,i:"a",s:540,z:0,o:"162",f:"c"},{y:7.17,i:"b",s:236,z:0,o:"162",f:"c"},{y:8.23,i:"a",s:545,z:0,o:"158",f:"b"},{y:8.23,i:"b",s:267,z:0,o:"158",f:"b"},{f:"c",y:10.1,z:1.2,i:"e",e:1,s:0,o:"166"},{f:"c",y:10.1,z:1.2,i:"e",e:1,s:0,o:"167"},{y:12,i:"e",s:1,z:0,o:"166",f:"c"},{y:12,i:"e",s:1,z:0,o:"167",f:"c"},{f:"c",p:2,y:16.11,z:0,i:"ActionHandler",e:{a:[{}]},s:{a:[{}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:16.11,z:0,i:"ActionHandler",s:{a:[{}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["164","160","157","165","162","158","161","167","166","163","159"],n:"Untitled Layout","_":0,v:{"161":{aV:8,w:"LIGHTS AND SOUNDS?",x:"visible",a:239,Z:"break-word",b:264,y:"preserve",j:"absolute",z:9,k:"div",s:"Courier,'Courier New',Monospace",aT:8,d:24,c:342,aS:8,t:18,G:"#8EFA00",aU:8,r:"inline"},"164":{G:"#929000",aU:8,c:200,d:30,aV:8,r:"inline",e:0,s:"'Arial Black',Gadget,Sans-Serif",t:16,Z:"break-word",w:"MARS VERSION 2.34-B<br>",A:"#8EFA00",x:"visible",j:"absolute",B:"#8EFA00",y:"preserve",k:"div",C:"#8EFA00",z:14,aS:8,D:"#8EFA00",aT:8,a:208,b:105},"167":{b:355,z:12,K:"Solid",c:168,L:"Solid",d:68,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,i:"easyButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#8EFA00",B:"#8EFA00",aM:"70_hover",Z:"break-word",C:"#8EFA00",r:"inline",s:"Courier,'Courier New',Monospace",D:"#8EFA00",t:48,aA:{a:[{p:4,h:"102"}]},F:"center",G:"#8EFA00",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:340,y:"preserve",J:"Solid"},"157":{c:293,d:26,I:"Solid",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:1,k:"div",C:"#000000",z:7,O:1,D:"#000000",a:234,b:205},"160":{aV:8,w:"CAN YOU DO WHAT SIMON SAYS",x:"visible",a:239,Z:"break-word",b:202,y:"preserve",j:"absolute",z:6,k:"div",s:"Courier,'Courier New',Monospace",aT:8,d:24,c:342,aS:8,t:18,G:"#8EFA00",aU:8,r:"inline"},"163":{bI:0.72122230529785158,h:"106",w:"",x:"visible",a:-448,q:"100% 100%",b:561,dB:"img",j:"absolute",z:4,k:"div",p:"no-repeat",d:520,c:925,cQ:0.20000000000000009,r:"inline",cR:0.20000000000000009},"166":{b:355,z:13,K:"Solid",c:168,L:"Solid",d:68,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,i:"hardButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#8EFA00",B:"#8EFA00",aM:"103_hover",Z:"break-word",C:"#8EFA00",r:"inline",s:"Courier,'Courier New',Monospace",D:"#8EFA00",t:48,aA:{a:[{p:4,h:"102"}]},F:"center",G:"#8EFA00",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:568,y:"preserve",J:"Solid"},"159":{G:"#945200",aU:8,c:410,d:68,aV:8,r:"inline",cQ:4.0000000000000027,s:"'Arial Black',Gadget,Sans-Serif",X:4,t:48,cR:4.0000000000000027,Z:"break-word",w:"SIMON SAYS",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:869,b:669},"162":{c:293,d:32,I:"Solid",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:1,k:"div",C:"#000000",z:15,O:1,D:"#000000",a:234,b:236},"165":{aV:8,w:"AND FOLLOW THE PATTERN OF",x:"visible",a:239,Z:"break-word",b:233,y:"preserve",j:"absolute",z:8,k:"div",s:"Courier,'Courier New',Monospace",aT:8,d:24,c:342,aS:8,t:18,G:"#8EFA00",aU:8,r:"inline"},"158":{c:293,d:32,I:"Solid",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:1,k:"div",C:"#000000",z:16,O:1,D:"#000000",a:239,b:264}}},{A:{a:[{p:4,h:"52"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#000000",L:[],bY:1,d:800,U:{},T:{"31":{i:"31",n:"blueBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"27",q:false}]},o:"31"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"169"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"169"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"169"},{y:0.1,i:"b",s:-300,z:0,o:"169",f:"c"}],f:30},"146_hover":{i:"146_hover",n:"146_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"A",e:"#FFFFFF",s:"#8EFA00",o:"174"},{f:"c",y:0,z:1,i:"G",e:"#FFFFFF",s:"#8EFA00",o:"174"},{f:"c",y:0,z:1,i:"C",e:"#FFFFFF",s:"#8EFA00",o:"174"},{f:"c",y:0,z:1,i:"B",e:"#FFFFFF",s:"#8EFA00",o:"174"},{f:"c",y:0,z:1,i:"D",e:"#FFFFFF",s:"#8EFA00",o:"174"},{y:1,i:"A",s:"#FFFFFF",z:0,o:"174",f:"c"},{y:1,i:"G",s:"#FFFFFF",z:0,o:"174",f:"c"},{y:1,i:"C",s:"#FFFFFF",z:0,o:"174",f:"c"},{y:1,i:"B",s:"#FFFFFF",z:0,o:"174",f:"c"},{y:1,i:"D",s:"#FFFFFF",z:0,o:"174",f:"c"}],f:30},"76":{i:"76",n:"showBadge",z:1,b:[],a:[{f:"f",p:2,y:0,z:0,i:"ActionHandler",e:{a:[{}]},s:{a:[{}]},o:"76"},{f:"f",y:0,z:1,i:"b",e:266,s:-212,o:"173"},{f:"f",y:0,z:1,i:"a",e:70,s:62,o:"173"},{f:"f",y:0,z:1,i:"b",e:136,s:-360,o:"179"},{f:"f",y:0,z:1,i:"a",e:76,s:68,o:"179"},{f:"f",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"49"}]},o:"76"},{f:"f",y:0,z:1,i:"b",e:404,s:-92,o:"174"},{f:"f",y:0,z:1,i:"a",e:243,s:235,o:"174"},{f:"f",y:0,z:1,i:"b",e:168,s:-328,o:"187"},{f:"f",y:0,z:1,i:"a",e:107,s:99,o:"187"},{y:1,i:"b",s:266,z:0,o:"173",f:"c"},{y:1,i:"a",s:70,z:0,o:"173",f:"c"},{y:1,i:"b",s:136,z:0,o:"179",f:"c"},{y:1,i:"a",s:76,z:0,o:"179",f:"c"},{y:1,i:"b",s:404,z:0,o:"174",f:"c"},{y:1,i:"a",s:243,z:0,o:"174",f:"c"},{y:1,i:"b",s:168,z:0,o:"187",f:"c"},{y:1,i:"a",s:107,z:0,o:"187",f:"c"}],f:30},"45":{i:"45",n:"yellowBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"30",q:false}]},o:"45"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"182"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"182"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"182"},{y:0.1,i:"b",s:-300,z:0,o:"182",f:"c"}],f:30},"35":{i:"35",n:"redBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"28",q:false}]},o:"35"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"172"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"172"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"172"},{y:0.1,i:"b",s:0,z:0,o:"172",f:"c"}],f:30},"101_hover":{i:"101_hover",n:"101_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFFFF",s:"#8EFA00",o:"177"},{f:"c",y:0,z:1,i:"B",e:"#FFFFFF",s:"#8EFA00",o:"177"},{f:"c",y:0,z:1,i:"C",e:"#FFFFFF",s:"#8EFA00",o:"177"},{f:"c",y:0,z:1,i:"D",e:"#FFFFFF",s:"#8EFA00",o:"177"},{f:"c",y:0,z:1,i:"A",e:"#FFFFFF",s:"#8EFA00",o:"177"},{y:1,i:"G",s:"#FFFFFF",z:0,o:"177",f:"c"},{y:1,i:"B",s:"#FFFFFF",z:0,o:"177",f:"c"},{y:1,i:"C",s:"#FFFFFF",z:0,o:"177",f:"c"},{y:1,i:"D",s:"#FFFFFF",z:0,o:"177",f:"c"},{y:1,i:"A",s:"#FFFFFF",z:0,o:"177",f:"c"}],f:30},"90":{i:"90",n:"hideBadge",z:1,b:[],a:[{f:"c",y:0,z:1,i:"b",e:-772,s:268,o:"173"},{f:"c",y:0,z:1,i:"b",e:-920,s:120,o:"179"},{f:"c",y:0,z:1,i:"b",e:-652,s:388,o:"174"},{f:"c",y:0,z:1,i:"b",e:-888,s:152,o:"187"},{y:1,i:"b",s:-772,z:0,o:"173",f:"c"},{y:1,i:"b",s:-920,z:0,o:"179",f:"c"},{y:1,i:"b",s:-652,z:0,o:"174",f:"c"},{y:1,i:"b",s:-888,z:0,o:"187",f:"c"}],f:30},"59":{i:"59",n:"roundComplete",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"61",q:false}]},o:"59"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:16,b:[],a:[{f:"c",y:0,z:2,i:"G",e:"#FFFFFF",s:"#945200",o:"183"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",e:{a:[{}]},s:{a:[{}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:0,z:16,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},s:{a:[{}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:2,z:2,i:"G",e:"#0433FF",s:"#FFFFFF",o:"183"},{f:"c",y:4,z:2,i:"G",e:"#FFFFFF",s:"#0433FF",o:"183"},{f:"c",y:6,z:2,i:"G",e:"#FFFB00",s:"#FFFFFF",o:"183"},{f:"c",y:8,z:2,i:"G",e:"#FFFFFF",s:"#FFFB00",o:"183"},{f:"c",y:10,z:2,i:"G",e:"#00F900",s:"#FFFFFF",o:"183"},{f:"c",y:12,z:2,i:"G",e:"#FFFFFF",s:"#00F900",o:"183"},{f:"c",y:14,z:2,i:"G",e:"#FF2600",s:"#FFFFFF",o:"183"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{y:16,i:"G",s:"#FF2600",z:0,o:"183",f:"c"}],f:30},"41":{i:"41",n:"greenBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"29",q:false}]},o:"41"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"185"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"185"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"185"},{y:0.1,i:"b",s:0,z:0,o:"185",f:"c"}],f:30},"57":{i:"57",n:"gameOver",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"}],f:30}},bZ:180,O:["179","187","173","174","170","180","182","185","169","172","171","175","184","183","186","176","168","178","181","177"],n:"Untitled Layout","_":1,v:{"173":{G:"#945200",bB:2,aU:8,c:262,d:104,bC:2,aV:8,r:"inline",s:"Courier,'Courier New',Monospace",t:36,Z:"break-word",i:"badgeMessage",w:"5 ROUNDS<br>\nBRILLIANT!\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:22,aS:8,aT:8,a:62,bA:"#000000",F:"center",b:-212},"186":{G:"#8EFA00",aU:8,c:184,d:144,aV:8,r:"inline",s:"'Courier New',Courier,Monospace",t:48,Z:"break-word",i:"sequenceValue",w:"SCORE<br>0\n",A:"#008F00",x:"visible",j:"absolute",B:"#008F00",y:"preserve",k:"div",C:"#008F00",z:17,aS:8,D:"#008F00",aT:8,a:600,F:"center",b:250},"178":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"yellowDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:15,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:300,b:300},"182":{h:"15",p:"no-repeat",x:"visible",i:"yellow",q:"100% 100%",b:-300,a:-300,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"181",c:600,r:"inline"},"174":{b:-92,z:24,K:"Solid",c:93,L:"Solid",d:38,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,aU:6,P:8,i:"badgeButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#8EFA00",Y:40,B:"#8EFA00",aM:"146_hover",Z:"break-word",C:"#8EFA00",r:"inline",s:"Courier,'Courier New',Monospace",D:"#8EFA00",t:24,aA:{a:[{p:4,h:"97"}]},F:"center",G:"#8EFA00",aP:"pointer",w:"NEXT",x:"visible",I:"Solid",a:235,y:"preserve",J:"Solid"},"187":{G:"#945201",aU:8,c:408,aV:8,d:64,r:"inline",s:"Courier,'Courier New',Monospace",t:48,Z:"break-word",w:"VICTORY!",j:"absolute",x:"visible",k:"div",y:"preserve",z:20,aS:8,aT:8,a:99,F:"center",b:-328},"179":{bJ:0.74426424050632911,p:"no-repeat",c:447,q:"100% 100%",bK:1,I:"Solid",d:310,r:"inline",J:"Solid",K:"Solid",L:"Solid",h:"142",M:25,i:"badgeBackground",N:25,j:"absolute",x:"visible",O:25,bG:0.147596914556962,k:"div",P:25,dB:"img",z:19,bI:1,a:68,b:-360},"170":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"redDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:11,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:0},"183":{G:"#945200",bB:2,aU:8,c:184,d:164,bC:2,aV:8,r:"inline",s:"Courier,'Courier New',Monospace",t:48,Z:"break-word",v:"normal",i:"title",w:"SIMON<br>SAYS",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:25,aS:8,aT:8,a:600,bA:"#000000",F:"center",b:0},"175":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"greenDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:14,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:300,b:0},"171":{k:"div",x:"hidden",c:300,d:300,z:2,i:"redGroup",a:0,j:"absolute",b:0},"184":{k:"div",x:"hidden",c:300,d:300,z:6,i:"greenGroup",a:300,j:"absolute",b:0},"176":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"blueDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:13,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:300},"168":{k:"div",x:"hidden",c:300,d:300,z:4,i:"blueGroup",a:0,j:"absolute",b:300},"180":{h:"5",p:"no-repeat",x:"visible",i:"outline",q:"100% 100%",b:0,a:0,j:"absolute",z:10,k:"div",dB:"img",d:600,c:600,r:"inline"},"172":{h:"9",p:"no-repeat",x:"visible",i:"red",q:"100% 100%",b:0,a:0,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"171",c:600,r:"inline"},"185":{h:"13",p:"no-repeat",x:"visible",i:"green",q:"100% 100%",b:0,a:-300,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"184",c:600,r:"inline"},"177":{b:520,z:26,K:"Solid",c:122,L:"Solid",d:32,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,aU:6,P:8,i:"quitButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#8EFA00",B:"#8EFA00",aM:"101_hover",Z:"break-word",C:"#8EFA00",r:"inline",s:"Courier,'Courier New',Monospace",D:"#8EFA00",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"62"}]},F:"center",G:"#8EFA00",aP:"pointer",w:"QUIT",x:"visible",I:"Solid",a:625,y:"preserve",J:"Solid"},"169":{h:"11",p:"no-repeat",x:"visible",i:"blue",q:"100% 100%",b:-300,a:0,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"168",c:600,r:"inline"},"181":{k:"div",x:"hidden",c:300,d:300,z:8,i:"yellowGroup",a:300,j:"absolute",b:300}}}],{},g,{f:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
