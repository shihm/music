(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(78)},53:function(e,t,a){},55:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(43),l=a.n(o),i=(a(53),a(11)),c=a(12),s=a(14),u=a(13),m=a(15),h=a(24),p=a(30),_=a(86),d=a(87),b=(a(55),a(79)),f=a(80),y=a(57),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={play:!1,audio:new Audio(a.props.theKey)},a.togglePlay=function(){var e=a.state.audio;if(a.setState({play:!a.state.play}),a.state.play){e.pause(),e.currentTime=0;var t=r.a.createContext({note:e.src,dur:e.currentTime});console.log(t)}else e.play()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"updateAudio",value:function(e){this.setState({audio:new Audio(e)})}},{key:"componentWillReceiveProps",value:function(e){this.updateAudio(e.theKey)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{onClick:this.togglePlay},this.state.play?"stop":"play"))}}]),t}(r.a.Component),g=r.a.createContext({width:320,height:512}),E={instrument:r.a.createContext("accordion"),screenSize:g},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(){console.log("keyboard receive props"),this.render()}},{key:"row",value:function(e){var t="tree/gh-pages/music/tree/gh-pages/MusyngKite/"+E.instrument+"-mp3",a=["C","D","E","F","G","A","B"],n=[];for(var o in["Do","Re","Mi","Fa","So","La","Ti"]){var l=a[o]+String(e),i=t+"/"+l+".mp3";n.push(r.a.createElement(v,{key:l,theKey:i,keyname:l}))}return n}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(f.a,null,this.row(3))),r.a.createElement(b.a,null,r.a.createElement(f.a,null,this.row(4))),r.a.createElement(b.a,null,r.a.createElement(f.a,null,this.row(5))))}}]),t}(r.a.Component),k=a(22),O=["accordion","acoustic_bass","acoustic_grand_piano","acoustic_guitar_nylon","acoustic_guitar_steel","agogo","alto_sax","applause","bagpipe","banjo","baritone_sax","bassoon","bird_tweet","blown_bottle","brass_section","breath_noise","bright_acoustic_piano","celesta","cello","choir_aahs","church_organ","clarinet","clavinet","contrabass","distortion_guitar","drawbar_organ","dulcimer","electric_bass_finger","electric_bass_pick","electric_grand_piano","electric_guitar_clean","electric_guitar_jazz","electric_guitar_muted","electric_piano_1","electric_piano_2","english_horn","fiddle","flute","french_horn","fretless_bass","fx_1_rain","fx_2_soundtrack","fx_3_crystal","fx_4_atmosphere","fx_5_brightness","fx_6_goblins","fx_7_echoes","fx_8_scifi","glockenspiel","guitar_fret_noise","guitar_harmonics","gunshot","harmonica","harpsichord","helicopter","honkytonk_piano","kalimba","koto","lead_1_square","lead_2_sawtooth","lead_3_calliope","lead_4_chiff","lead_5_charang","lead_6_voice","lead_7_fifths","lead_8_bass__lead","marimba","melodic_tom","music_box","muted_trumpet","oboe","ocarina","orchestra_hit","orchestral_harp","overdriven_guitar","pad_1_new_age","pad_2_warm","pad_3_polysynth","pad_4_choir","pad_5_bowed","pad_6_metallic","pad_7_halo","pad_8_sweep","pan_flute","percussive_organ","piccolo","pizzicato_strings","recorder","reed_organ","reverse_cymbal","rock_organ","seashore","shakuhachi","shamisen","shanai","sitar","slap_bass_1","slap_bass_2","soprano_sax","steel_drums","string_ensemble_1","string_ensemble_2","synth_bass_1","synth_bass_2","synth_brass_1","synth_brass_2","synth_choir","synth_drum","synth_strings_1","synth_strings_2","taiko_drum","tango_accordion","telephone_ring","tenor_sax","timpani","tinkle_bell","tremolo_strings","trombone","trumpet","tuba","tubular_bells","vibraphone","viola","violin","voice_oohs","whistle","woodblock","xylophone"],j=a(81),x=a(82),S=a(83),C=a(84),A=a(89),D=a(88),P=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),o=a[0],l=a[1],i=O.map(function(t){return r.a.createElement(j.a,{key:t,onClick:function(){return e.chooseInstru(t)}},t)}),c=e.value.replace(/^\w/,function(e){return e.toUpperCase()}),s="https://en.wikipedia.org/wiki/"+e.value;return r.a.createElement(x.a,{body:!0},r.a.createElement(S.a,null,c),r.a.createElement("a",{href:s,style:{padding:"0 0 10px 0"}},"wiki"),r.a.createElement(C.a,{isOpen:o,toggle:function(){return l(function(e){return!e})}},r.a.createElement(A.a,{caret:!0},"Select Instrument"),r.a.createElement(D.a,null,i)))},M=a(25),W=a.n(M),I=a(46),F=[[1,3,5],[3],[5],[3]],T=["C4","D4","E4","F4","G4","A4","B4"],z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={play:!1,audio:[]},a.togglePlay=function(){var e=a.state.audio;a.setState({play:!0}),a.state.play||a.playbar(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateAudio(F)}},{key:"componentWillReceiveProps",value:function(e){console.log("barplayer",e),this.updateAudio(F)}},{key:"updateAudio",value:function(e){var t=[];for(var a in e)for(var n in t.push([]),e[a]){var r="music/tree/gh-pages/MusyngKite/"+E.instrument+"-mp3/"+T[e[a][n]-1]+".mp3";t[a].push(new Audio(r))}this.setState({audio:t})}},{key:"playbeat",value:function(e){return console.log(e),new Promise(function(t){for(var a in e)e[a].play(),setTimeout(function(){e[a].pause(),e[a].currentTime=0,t(1)},600)})}},{key:"playbar",value:function(){var e=Object(I.a)(W.a.mark(function e(t){var a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=W.a.keys(t);case 1:if((e.t1=e.t0()).done){e.next=7;break}return a=e.t1.value,e.next=5,this.playbeat(t[a]);case 5:e.next=1;break;case 7:this.setState({play:!1});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.togglePlay},this.state.play?"stop":"play"))}}]),t}(r.a.Component),R=E.instrument,B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={theInstrument:"accordion"},a.chooseInstru=function(e){a.setState({theInstrument:e}),E.instrument=e},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){E.instrument="accordion"}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions.bind(this))}},{key:"updateWindowDimensions",value:function(){E.screenSize={width:window.innerWidth,height:window.innerHeight}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R.Provider,{value:this.state.theInstrument},r.a.createElement(P,{value:this.state.theInstrument,chooseInstru:this.chooseInstru})),r.a.createElement(w,null),r.a.createElement(z,{instrument:this.state.theInstrument}))}}]),t}(n.Component),K=a(85),L=function(e){return r.a.createElement(K.a,null,r.a.createElement(_.a,null,r.a.createElement(d.a,null,"Do Do So So"),r.a.createElement(d.a,null,"La La So")),r.a.createElement(_.a,null,r.a.createElement(d.a,null,"Fa Fa Mi Mi "),r.a.createElement(d.a,null,"Re Re Do")),r.a.createElement(_.a,null,r.a.createElement(d.a,null,"So So Fa Fa"),r.a.createElement(d.a,null,"Mi Mi Re")),r.a.createElement(_.a,null,r.a.createElement(d.a,null,"So So Fa Fa"),r.a.createElement(d.a,null,"Mi Mi Re")))},G=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),o=a[0],l=a[1],i=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"].map(function(t){return r.a.createElement(j.a,{key:t,onClick:function(){return e.selectPitch(t)}},t)});return r.a.createElement(C.a,{isOpen:o,toggle:function(){return l(function(e){return!e})}},r.a.createElement(A.a,{caret:!0},"Do = C4"),r.a.createElement(D.a,null,i))},H=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),o=a[0],l=a[1],i=[60,70,80,90,100,110,120].map(function(t){return r.a.createElement(j.a,{key:t,onClick:function(){return e.selectTap(t)}},t)});return r.a.createElement(C.a,{isOpen:o,toggle:function(){return l(function(e){return!e})}},r.a.createElement(A.a,{caret:!0},"Tap = 90"),r.a.createElement(D.a,null,i))},J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).selectPitch=function(e){console.log(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Twinkle star"),r.a.createElement(_.a,null,r.a.createElement(G,null),r.a.createElement(H,null)),r.a.createElement(L,{selectPitch:this.selectPitch}))}}]),t}(r.a.Component);function U(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"))}var q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(d.a,null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement(d.a,null,r.a.createElement(h.b,{to:"/compose"},"Compose")),r.a.createElement(d.a,null,r.a.createElement(h.b,{to:"/tools"},"Tools"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(U,null)),r.a.createElement(p.a,{path:"/compose"},r.a.createElement(J,null)),r.a.createElement(p.a,{path:"/tools"},r.a.createElement(B,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,2,1]]]);
//# sourceMappingURL=main.183d9661.chunk.js.map