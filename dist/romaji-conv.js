/*!
 * @name     @koozaki/romaji-conv
 * @version  1.0.6
 * @desc     Convert romaji into hiragana
 * @author   Kojiro Ozaki <koujirou0111@gmail.com> (https://koozaki.com/)
 * @see      {@link https://koozaki.com/romaji-conv/}
 * @license  MIT
 */!function(e){var y={};function o(u){if(y[u])return y[u].exports;var t=y[u]={i:u,l:!1,exports:{}};return e[u].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=y,o.d=function(e,y,u){o.o(e,y)||Object.defineProperty(e,y,{enumerable:!0,get:u})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,y){if(1&y&&(e=o(e)),8&y)return e;if(4&y&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(o.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&y&&"string"!=typeof e)for(var t in e)o.d(u,t,function(y){return e[y]}.bind(null,t));return u},o.n=function(e){var y=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(y,"a",y),y},o.o=function(e,y){return Object.prototype.hasOwnProperty.call(e,y)},o.p="",o(o.s=0)}([function(e,y,o){var u=o(1);window.romajiConv=u},function(e,y,o){var u=o(2);e.exports=function(e){return Object.keys(u).reduce((function(e,y){var o=u[y],t=new RegExp(y,"gi");return e.replace(t,o)}),e)}},function(e,y){e.exports={nn:"ん",mb:"んb",mm:"んm",mp:"んp",bb:"っb",cc:"っc",dd:"っd",ff:"っf",gg:"っg",hh:"っh",jj:"っj",kk:"っk",ll:"っl",pp:"っp",qq:"っq",rr:"っr",ss:"っs",tt:"っt",vv:"っv",ww:"っw",xx:"っx",yy:"っy",zz:"っz",ltsu:"っ",xtsu:"っ",hwyu:"ふゅ",vya:"ゔゃ",vyi:"ゔぃ",vyu:"ゔゅ",vye:"ゔぇ",vyo:"ゔょ",kya:"きゃ",kyi:"きぃ",kyu:"きゅ",kye:"きぇ",kyo:"きょ",kwa:"くぁ",kwi:"くぃ",kwu:"くぅ",kwe:"くぇ",kwo:"くぉ",gya:"ぎゃ",gyi:"ぎぃ",gyu:"ぎゅ",gye:"ぎぇ",gyo:"ぎょ",gwa:"ぐぁ",gwi:"ぐぃ",gwu:"ぐぅ",gwe:"ぐぇ",gwo:"ぐぉ",sya:"しゃ",syi:"しぃ",syu:"しゅ",sye:"しぇ",syo:"しょ",sha:"しゃ",shi:"し",shu:"しゅ",she:"しぇ",sho:"しょ",jya:"じゃ",jyi:"じぃ",jyu:"じゅ",jye:"じぇ",jyo:"じょ",zya:"じゃ",zyi:"じぃ",zyu:"じゅ",zye:"じぇ",zyo:"じょ",tsa:"つぁ",tsi:"つぃ",tsu:"つ",tse:"つぇ",tso:"つぉ",tya:"ちゃ",tyi:"ちぃ",tyu:"ちゅ",tye:"ちぇ",tyo:"ちょ",tha:"てゃ",thi:"てぃ",thu:"てゅ",the:"てぇ",tho:"てょ",cya:"ちゃ",cyi:"ちぃ",cyu:"ちゅ",cye:"ちぇ",cyo:"ちょ",cha:"ちゃ",chi:"ち",chu:"ちゅ",che:"ちぇ",cho:"ちょ",twa:"とぁ",twi:"とぃ",twu:"とぅ",twe:"とぇ",two:"とぉ",dya:"ぢゃ",dyi:"ぢぃ",dyu:"ぢゅ",dye:"ぢぇ",dyo:"ぢょ",dha:"でゃ",dhi:"でぃ",dhu:"でゅ",dhe:"でぇ",dho:"でょ",nya:"にゃ",nyi:"にぃ",nyu:"にゅ",nye:"にぇ",nyo:"にょ",hya:"ひゃ",hyi:"ひぃ",hyu:"ひゅ",hye:"ひぇ",hyo:"ひょ",hwa:"ふぁ",hwi:"ふぃ",hwe:"ふぇ",hwo:"ふぉ",fya:"ふゃ",fyu:"ふゅ",fyo:"ふょ",bya:"びゃ",byi:"びぃ",byu:"びゅ",bye:"びぇ",byo:"びょ",pya:"ぴゃ",pyi:"ぴぃ",pyu:"ぴゅ",pye:"ぴぇ",pyo:"ぴょ",mya:"みゃ",myi:"みぃ",myu:"みゅ",mye:"みぇ",myo:"みょ",rya:"りゃ",ryi:"りぃ",ryu:"りゅ",rye:"りぇ",ryo:"りょ",wha:"うぁ",whi:"うぃ",whu:"う",whe:"うぇ",who:"うぉ",ltu:"っ",xtu:"っ",lya:"ゃ",lyi:"ぃ",lyu:"ゅ",lye:"ぇ",lyo:"ょ",xya:"ゃ",xyi:"ぃ",xyu:"ゅ",xye:"ぇ",xyo:"ょ",lwa:"ゎ",xwa:"ゎ",ka:"か",ki:"き",ku:"く",ke:"け",ko:"こ",sa:"さ",si:"し",su:"す",se:"せ",so:"そ",ca:"か",ci:"し",cu:"く",ce:"せ",co:"こ",ta:"た",ti:"ち",tu:"つ",te:"て",to:"と",na:"な",ni:"に",nu:"ぬ",ne:"ね",no:"の",ha:"は",hi:"ひ",hu:"ふ",he:"へ",ho:"ほ",ma:"ま",mi:"み",mu:"む",me:"め",mo:"も",ya:"や",yu:"ゆ",yo:"よ",ra:"ら",ri:"り",ru:"る",re:"れ",ro:"ろ",wa:"わ",wi:"うぃ",wu:"う",we:"うぇ",wo:"を",qa:"くぁ",qi:"くぃ",qu:"く",qe:"くぇ",qo:"くぉ",fa:"ふぁ",fi:"ふぃ",fu:"ふ",fe:"ふぇ",fo:"ふぉ",va:"ゔぁ",vi:"ゔぃ",vu:"ゔ",ve:"ゔぇ",vo:"ゔぉ",ga:"が",gi:"ぎ",gu:"ぐ",ge:"げ",go:"ご",za:"ざ",zi:"じ",zu:"ず",ze:"ぜ",zo:"ぞ",ja:"じゃ",ji:"じ",ju:"じゅ",je:"じぇ",jo:"じょ",da:"だ",di:"ぢ",du:"づ",de:"で",do:"ど",ba:"ば",bi:"び",bu:"ぶ",be:"べ",bo:"ぼ",pa:"ぱ",pi:"ぴ",pu:"ぷ",pe:"ぺ",po:"ぽ",la:"ぁ",li:"ぃ",lu:"ぅ",le:"ぇ",lo:"ぉ",xa:"ぁ",xi:"ぃ",xu:"ぅ",xe:"ぇ",xo:"ぉ",a:"あ",i:"い",u:"う",e:"え",o:"お",n:"ん",0:"０",1:"１",2:"２",3:"３",4:"４",5:"５",6:"６",7:"７",8:"８",9:"９","-":"ー",",":"、","\\.":"。","\\!":"！","\\?":"？"}}]);