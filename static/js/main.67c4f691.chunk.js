(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,o){},105:function(e,t,o){},106:function(e,t,o){},107:function(e,t,o){},108:function(e,t,o){},109:function(e,t,o){},110:function(e,t,o){},111:function(e,t,o){},112:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(40),s=o.n(r);o(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=o(5),u=o(42),l=o.n(u),h=o(1),d=o(3),c=o(4);o(104);var y=25;function m(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=n.useState(""),r=Object(h.a)(a,2),s=r[0],i=r[1],u=n.useState(y),l=Object(h.a)(u,2),d=l[0],c=l[1],m=n.useState(!1),w=Object(h.a)(m,2),p=w[0],f=w[1];return function(e,t){var o=Object(n.useRef)(),a=Object(n.useRef)();Object(n.useEffect)(function(){o.current=e},[e]),Object(n.useEffect)(function(){if(null!==t)return a.current=setInterval(function(){o.current&&a.current&&o.current(function(){return clearInterval(a.current)})},t),function(){return clearInterval(a.current)}},[t])}(function(o){s!==e||p||(o(),t(),f(!0)),d>y&&c(y);var n=e.slice(0,s.length+1);"."===n[n.length-1]&&c(20*y),"?"===n[n.length-1]&&c(20*y),","===n[n.length-1]&&c(10*y),i(e.slice(0,s.length+1))},o?2:d),[s]}o(105);var w=n.memo(function(e){var t=m(e.text,e.onFinish,e.fast),o=Object(h.a)(t,1)[0];return n.createElement("span",{className:"Phrase"},o)}),p=(o(106),n.createContext({sendMessage:function(){},register:function(){},unregister:function(){}})),f=n.memo(function(e){var t=n.useState({}),o=Object(h.a)(t,2),a=o[0],r=o[1],s=n.useCallback(function(e){if(console.log("sent",e),a[e.type])for(var t=0,o=Object.keys(a[e.type]);t<o.length;t++){var n=o[t];a[e.type][n](e)}},[a]),i=n.useCallback(function(e,t,o){console.log("registering",t,e),r(function(n){return Object(d.a)({},n,Object(c.a)({},e,Object(d.a)({},n[e],Object(c.a)({},t,o))))})},[r]),u=n.useCallback(function(e,t){console.log("unregistering",t,e),a[e]&&a[e][t]&&(delete a[e][t],Object.keys(a[e]).length<=0&&delete a[e]),r(a)},[a,r]),l=n.useMemo(function(){return{sendMessage:s,register:i,unregister:u}},[s,i]);return n.createElement(p.Provider,{value:l},e.children)}),b=n.memo(function(e){var t=m(e.text,e.onFinish,e.fast),o=Object(h.a)(t,1)[0],a=n.useState(!1),r=Object(h.a)(a,2),s=r[0],i=r[1],u=n.useContext(p).sendMessage,l=n.useCallback(function(e){u({type:"addToWordbox",payload:e}),i(!0)},[u]);return n.createElement(g,Object.assign({},e,{key:e.text+s,consumed:s,setConsumed:i,renderText:o,onDoubleClick:"story"===e.location?l:e.onDoubleClick}))}),g=n.memo(function(e){var t=i.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag({item:{type:"keyword",id:e.text,source:e.location},canDrag:!e.consumed,end:function(t,o){o.didDrop()&&(e.setConsumed(!0),e.onConsumed&&e.onConsumed(e.text))}}),o=Object(h.a)(t,2),a=(o[0],o[1]),r=n.useCallback(function(){return!e.consumed&&e.onDoubleClick&&e.onDoubleClick(e.text)},[e.consumed,e.onDoubleClick,e.text]);return n.createElement("span",{className:"Keyword"+(e.consumed?" consumed":"")+("story"===e.location?" story":""),ref:a,onDoubleClick:r},e.renderText)}),v=b,k=(o(107),n.memo(function(e){var t=e.fast,o=e.texts,a=e.onFinish,r=n.useState(0),s=Object(h.a)(r,2),i=s[0],u=s[1],l=n.useState(!1),d=Object(h.a)(l,2),c=d[0],y=d[1],m=n.useCallback(function(){return!c&&u(i+1)},[c,i,u]),w=o.length;return n.useEffect(function(){i>=w&&!c&&(a(),y(!0))},[i,c,y,w,a]),n.createElement("div",{className:"Paragraph"},o.slice(0,t?o.length:i+1).map(function(e,t){return n.createElement(e,{key:t,onFinish:m})}))}));o(108);function x(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}var E={};function j(e,t){var o=e[t.chapterName]||[];switch(t.type){case"addWord":return Object(d.a)({},e,Object(c.a)({},t.chapterName,o.concat(t.word)));case"removeWord":return Object(d.a)({},e,Object(c.a)({},t.chapterName,o.filter(function(e){return e!==t.word})));default:return e}}var C=n.memo(function(e){var t=e.chapterName,o=e.solutions,a=e.onAccept,r=n.useCallback(function(){},[]),s=n.useReducer(j,E),u=Object(h.a)(s,2),l=u[0],d=u[1],c=l[t]||[],y=i.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop({accept:"keyword",canDrop:function(e){return"puzzle"!==e.source},collect:function(e){return{canDrop:e.canDrop(),hovering:e.isOver()}},drop:function(e){return d({type:"addWord",chapterName:t,word:e.id}),{target:"puzzle"}}}),m=Object(h.a)(y,2),w=m[0],f=m[1],b=n.useCallback(function(e){return d({type:"removeWord",chapterName:t,word:e})},[t,d]),g=n.useMemo(function(){for(var e=0;e<o.length;e++){var t=o[e];if(x(t.answer,c))return t.next}},[o,c]),k=n.useCallback(function(){return g&&a(g)},[a,g]),C=n.useContext(p),O=C.sendMessage,N=C.register,_=C.unregister,D=n.useCallback(function(e){e.payload.currentChapter===t&&d({type:"addWord",chapterName:e.payload.currentChapter,word:e.payload.word})},[t,d]);n.useEffect(function(){return N("addToPrompt","prompt-"+t,D),function(){return _("addToPrompt","prompt-"+t)}},[t]);var M=n.useCallback(function(e){d({type:"removeWord",chapterName:t,word:e}),O({type:"addToWordbox",payload:e})},[t,d,O]);return n.createElement("div",{className:"Prompt"+(w.hovering&&w.canDrop?" hovering":""),ref:f},n.createElement("span",{className:"Symbol"},">"),c.map(function(e){return n.createElement(v,{key:e,text:e,location:"puzzle",onFinish:r,onConsumed:b,onDoubleClick:M})}),n.createElement("span",{className:"OK"+(g?" activated":""),onClick:k},"OK"))}),O=function(e,t,o){return function(t){return n.createElement(k,{texts:e,fast:o,onFinish:t.onFinish})}},N=n.memo(function(e){var t=e.chapter,o=e.onNavigate,a=n.useCallback(function(){},[]),r=n.useMemo(function(){var e=t.body.flatMap(function(e,o){var a=e.split(/[\[\]]/).map(function(e,o){return(o%2===1?function(e,t){return function(o){return n.createElement(v,{text:e,fast:t,location:"story",onFinish:o.onFinish})}}:function(e,t){return function(o){return n.createElement(w,{text:e,fast:t,onFinish:o.onFinish})}})(e,t.fast)});return t.fast?a:[O(a,0,t.fast)]});return O(e,t.name,t.fast)({onFinish:a})},[t,a]);return n.createElement(n.Fragment,null,r,n.createElement(C,{chapterName:t.name,solutions:t.solutions,onAccept:o}))}),_=(o(109),a.a.memo(function(e){return a.a.createElement("div",{className:"Frame"},e.children)})),D=o(44),M=(o(110),{words:["set","close"],page:0}),A=14,T=function(e){return Math.floor(e.words.length/A)+1};function P(e,t){var o=T(e);switch(t.type){case"addWord":var n=Object(D.a)(e.words);return n.splice(e.page*A+A-1,0,t.word),Object(d.a)({},e,{words:n});case"removeWord":return Object(d.a)({},e,{words:e.words.filter(function(e){return e!==t.word})});case"prevPage":return Object(d.a)({},e,{page:Math.max(0,e.page-1)});case"nextPage":return Object(d.a)({},e,{page:Math.min(o-1,e.page+1)});default:return e}}var W=a.a.memo(function(e){var t=e.currentChapter,o=a.a.useCallback(function(){},[]),n=a.a.useReducer(P,M),r=Object(h.a)(n,2),s=r[0],u=r[1],l=i.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop({accept:"keyword",canDrop:function(e){return"wordbank"!==e.source},collect:function(e){return{canDrop:e.canDrop(),hovering:e.isOver()}},drop:function(e){return u({type:"addWord",word:e.id}),{target:"wordbank"}}}),d=Object(h.a)(l,2),c=d[0],y=d[1],m=a.a.useCallback(function(e){return u({type:"removeWord",word:e})},[u]),w=T(s),f=a.a.useCallback(function(){return u({type:"prevPage"})},[u]),b=a.a.useCallback(function(){return u({type:"nextPage"})},[u]),g=a.a.useContext(p),k=g.sendMessage,x=g.register,E=g.unregister,j=a.a.useCallback(function(e){return u({type:"addWord",word:e.payload})},[u]);a.a.useEffect(function(){return x("addToWordbox","wordbox",j),function(){return E("addToWordbox","wordbox")}},[]);var C=a.a.useCallback(function(e){u({type:"removeWord",word:e}),k({type:"addToPrompt",payload:{word:e,currentChapter:t}})},[u,t,k]);return a.a.createElement("div",{className:"Wordbank"+(c.hovering&&c.canDrop?" hovering":""),ref:y},s.words.slice(A*s.page,A*s.page+A).map(function(e){return a.a.createElement(v,{key:e,text:e,location:"wordbank",onFinish:o,onConsumed:m,onDoubleClick:C})}),a.a.createElement("div",{className:"Pagination"+(w>1?" activated":"")},a.a.createElement("span",{className:"Previous"+(s.page>0?" activated":""),onClick:f},"<"),a.a.createElement("span",{className:"Next"+(s.page<w-1?" activated":""),onClick:b},">")))});var F=o(43),S=function(){var e=a.a.useState(Object(c.a)({},F.start,{chapterName:F.start,beforeName:null})),t=Object(h.a)(e,2),o=t[0],n=t[1],r=a.a.useState(F.start),s=Object(h.a)(r,2),i=s[0],u=s[1],l=a.a.useState(!1),y=Object(h.a)(l,2),m=y[0],w=y[1],p=a.a.useState(!1),b=Object(h.a)(p,2),g=b[0],v=b[1],k=o[i],x=null!==k.beforeName,E=a.a.useCallback(function(e){var t=o[e];t=t?Object(d.a)({},t,{beforeName:i}):{chapterName:e,beforeName:i};var a=Object(d.a)({},o,Object(c.a)({},e,t));n(a),u(e),"the-details"===e&&(P(!0),setTimeout(function(){S.current.pause(),S.current.load(),S.current.play()}))},[i,u,o,n]),j=a.a.useCallback(function(){x&&("the-details"===k.chapterName&&(P(!1),setTimeout(function(){S.current.pause(),S.current.load(),S.current.play()})),u(k.beforeName))},[x,k,u]),C=a.a.useCallback(function(){w(!0)},[w]),O=a.a.useCallback(function(){v(!g)},[g,v]),D=a.a.useCallback(function(){w(!1),v(!1)},[w,v]),M=a.a.useState(!1),A=Object(h.a)(M,2),T=A[0],P=A[1],S=a.a.useRef(void 0);return a.a.createElement(f,null,a.a.createElement("div",{className:"App"},a.a.createElement("audio",{ref:S,src:T?"before.mp3":"timeremaining.mp3",loop:!0,autoPlay:!0}),a.a.createElement(_,null,a.a.createElement("div",{className:"Navigation"},a.a.createElement("span",{className:"Before"+(x?" activated":""),onClick:j},"< BEFORE"),a.a.createElement("span",{className:"HelpButton",onClick:C},"?")),Object.keys(o).map(function(e){return a.a.createElement("div",{key:e,style:{display:e===k.chapterName?"flex":"none",flexDirection:"column",height:"100%"}},a.a.createElement(N,{key:e,chapter:F.chapters[e],onNavigate:E}))}),m&&a.a.createElement("div",{className:"Help"},g?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"drag bold words from the story to the word bank on the right."),a.a.createElement("p",null,"drag (or double-click) words from the word bank to the prompt at the bottom."),a.a.createElement("p",null,"if you've found a valid answer, you'll see the OK button light up."),a.a.createElement("p",null,"you can always change your answers.")):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"welcome into ",a.a.createElement("em",null,"invertebrae"),"."),a.a.createElement("p",null,"while life may progress along with currency, you as an observer do not."),a.a.createElement("p",null,"to the right stores knowledge, and below submits answers."),a.a.createElement("p",null,"the future does not cement the past."),a.a.createElement("p",null,"good luck.")),a.a.createElement("div",{className:"Buttons"},a.a.createElement("span",{className:"CloseHelp",onClick:O},g?"OH OK":"HUH?"),a.a.createElement("span",{className:"CloseHelp",onClick:D},"I'LL TRY")))),a.a.createElement(W,{currentChapter:k.chapterName})))},H=(o(111),function(){var e=n.useState(!1),t=Object(h.a)(e,2),o=t[0],a=t[1],r=n.useCallback(function(){return a(!0)},[a]);return o?n.createElement(S,null):n.createElement("div",{className:"Preload",onClick:r},n.createElement("span",{className:"Message"},"Click anywhere to begin."))});s.a.render(a.a.createElement(i.DragDropContextProvider,{backend:l.a},a.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e){e.exports={start:"welcome",chapters:{welcome:{name:"welcome",body:["...it is july 14th, 2013.","you just got off of work, and are taking the subway back to your apartment. there aren't many people on your train car. this isn't uncommon, as your line travels far from the city.","your [watch] says the time is 6:13pm. last week you had flown back from a work trip, and lazily put off adjusting it for the time-zone change.","you should probably do that."],solutions:[{answer:["set","watch"],next:"adjust"},{answer:["before","subway"],next:"a-priori"}]},adjust:{name:"adjust",body:["you welcome your watch back home, adjusting it fowards to 9:13pm. you don't normally [find] yourself at work this late, but today though, it made sense. honestly, maybe you're lucky to leave even this late.","coincidentally, the subway reaches your stop fifteen minutes ahead of schedule. you exit the station and begin [walk]ing [home]."],solutions:[{answer:["walk","home"],next:"doorstep"}]},doorstep:{name:"doorstep",body:["arriving at your apartment, you hear the mew of your neighbor's [cat], pawing at the building's front [door]. the landlord has pretty relaxed rules on [pet]s, which leads to your neighbor letting their cat roam the premises.","how the cat manages to get outside so often is a mystery. maybe it's finding an [open] window.","you should probably go inside."],solutions:[{answer:["pet","cat"],next:"cat-lover"},{answer:["open","door"],next:"return-home"}]},"cat-lover":{name:"cat-lover",body:["you lean over to pet the cat. noticing you approaching, it hisses away. ah well, [figures].","at least it's no longer blocking the door."],solutions:[{answer:["open","door"],next:"return-home"},{answer:["opens","door"],next:"return-home"}]},"return-home":{name:"return-home",body:["you are home.","you immediately throw your bag down onto the floor, and your sweater onto the pile of laundry amassing in your bathroom. you can't explain why it's so messy. you've lived here for months, you should have bought a hamper already. there are many things you have no time for.","what you do have time for, however, is your [computer].","but where is it?"],solutions:[{answer:["find","computer"],next:"outbox-pending"}]},"outbox-pending":{name:"outbox-pending",body:["your laptop is in the kitchen. you had some emails to [read] while making coffee this morning. they aren't work-related, not really any way.","your computer takes several minutes to boot. it's quite old, and wasn't even new when you had bought it. you should probably buy a new computer already.","computers are expensive. that's fine though, you'll have the money for one soon enough.","after it boots, you open your [email] client. at the top of your inbox is a new email. it's the one you've been waiting for."],solutions:[{answer:["read","email"],next:"the-letter"}]},"the-letter":{name:"the-letter",body:["\"we have received the documents you sent us earlier today. they're currently being re[view]ed, but we're fairly certain they're what we've been looking for.","we appreciate you securing these documents for us. likewise, we will uphold our end of the deal.","please open the provided [attachment]. it will contain more details for the money transfer.","",'i n v e r t e b r a e"               ',"...","wow, it really worked. what a relief."],solutions:[{answer:["view","attachment"],next:"the-details"},{answer:["suspect"],next:"the-conclusion"},{answer:["doubt"],next:"the-conclusion"}]},"the-details":{name:"the-details",body:["this is not what happened before ths is not what happened beo","re this is not wat happened before this is not hat happeed befoe th","is is not what happeed before this is not what hapened befre this is not what hppened beore this is not what happened before this is not what haened befo","re this i not what hapened befo","re ths is not what happend before ths is not what hapened [before] this is not what hapn","ed before this is not what happened bere this is not wt happned befoe ts is not what hapned before this is not what appened befre tis is not what hapened before this is not wat happened befo","re this is not what happened before this is not what happ","ened before this is nt what hppened before this is not what hapned before this is not what happened bere this is not wt happned befoe ts is not what hapned before this is not what appened befre tis is not w","hat hapened before this is not wat happened before thi","s is not what happened before this is not what happe"],fast:!0,solutions:[{answer:["close"],next:"the-bad-end"}]},"the-bad-end":{name:"the-bad-end",body:["wait, what?","after the barrage, your computer shuts down. you're not able to turn it back on.","the next morning, you receive three phone calls. one from your work's hr department, another from your bank, and the last from the police. none have very pleasant news.","this is definitely not what you expected on that [subway] ride home. you were looking for an ending, but not this one."],solutions:[{answer:["before","subway"],next:"hint"},{answer:["figures"],next:"nice"}]},hint:{name:"hint",body:["it's too late, there's no point in remembering now.","it was too late the moment you left work and got on that subway."],solutions:[]},nice:{name:"nice",body:["yeah, doesn't it."],solutions:[]},"a-priori":{name:"a-priori",body:["the train [enter]s a run-down section of the tunnel, and the lights go out briefly. you can fix your watch later, right now is not the time.","after quickly glancing around the train for anyone else, you slump into an empty seat and rest your [head] in your palms as you remember what you did today.     ","today was exhausting. nerve-wracking.         ","you've been in your boss's [office] a few times, but never without her in it."],solutions:[{answer:["enter","office"],next:"a-plan"}]},"a-plan":{name:"a-plan",body:["it was july 14th, 2013. your watch read 9:37am.","you work at the kind of place where most people eat [out] for lunch, so the office is usually empty. today was no exception.","there was no time for lunch today.       ","your boss's office is [upstairs]."],solutions:[{answer:["head","upstairs"],next:"well-stairs"},{answer:["walk","upstairs"],next:"well-stairs"},{answer:["head","out"],next:"small-details"}]},"small-details":{name:"small-details",body:["you headed outside for a short smoke break.","it's nice, but inconsequential."],solutions:[]},"well-stairs":{name:"well-stairs",body:["you trodged up the metal [stairwell]. supposedly this is the safest place in the office in case of an emergency. the way each step squeals like a dying cat [leave]s you with little confidence.","you checked your pocket for the [device] you had received in the mail. inspecting it, it looks sort of like a flash drive, save for a small button on the side.","they said all you needed to do was to plug it into a computer and [wait]. you didn't quite think that was how computers worked anymore, but you weren't going to [pretend] you were some hacker. that's someone else's job, apparently."],solutions:[{answer:["pet","cat"],next:"big-woof"},{answer:["leave","stairwell"],next:"in-front"}]},"big-woof":{name:"big-woof",body:["you bend over to pet the stairs. noticing you approaching, the staircase plummets away, taking you down with it.","as you fall to your death, you smirk at your correct assessment regarding stairwell safety.","you weren't right about many things, but at least you were right about this one.        ","...","maybe this was the ending you were looking for?"],solutions:[{answer:["figures"],next:"nice"}]},"in-front":{name:"in-front",body:["you stumbled to your boss's office. there was no one immediately present, but you heard murmurs of others on the floor. not your boss though, you were fairly certain.","you saw her laptop sitting on the desk, [plug]ged into a wall outlet. the screen was shut.","you hesitated. you weren't sure if you should have just gone for it, or if there was anything else you should do first.","what did you end up doing?"],solutions:[{answer:["watch","out"],next:"looksee"},{answer:["open","computer"],next:"beneath-covers"},{answer:["plug","device"],next:"too-easy"},{answer:["wait"],next:"pointless"}]},pointless:{name:"pointless",body:["just waiting would be pointless."],solutions:[]},"beneath-covers":{name:"beneath-covers",body:["you slowly opened the laptop, greeted by a blue glow. the computer was logged in and had her email client open. so much for [security], surprised no one had broken in alre...      ",'"re: confidential security alert, unknown network traffic detec..." read the subject line of the newest email.',"what? how did they know already? you hadn't even done anything yet. is it possible that you weren't the only one sent one of these strange devices?","you felt the urgency growing even further, and wanted to get it over with as soon as possible."],solutions:[{answer:["plug","device"],next:"with-urgency"}]},looksee:{name:"looksee",body:["you peered slightly out into the hallway again, before [pull]ing back in the moment you noticed someone coming down the hall.","you hastily slid the door closed, and then ducked to the floor, waiting for the footsteps to pass.","...","they did. you were fine.","you should probably hurry up."],solutions:[{answer:["plug","device"],next:"with-caution"}]},"too-easy":{name:"too-easy",body:["there was no time for anything else.","you plugged the device into the computer, without even verifying if the computer was on first. that's fine, these were hackers, right? surely it contained some computer code to turn the computer on, probably.","whatever.","you loomed nervously and waited. they had said it would take around five minutes to complete.","..."],solutions:[{answer:["wait"],next:"big-boss-lady"}]},"big-boss-lady":{name:"big-boss-lady",body:['"hey! what are you doing? please do not come into my office without me here."',"shit.","swimming in your anxiety you didn't notice your boss walking down the hall, walking into her office, and walking up to you. she didn't look angry, more [confused].",'"u-uh, well, you see...", was all you could [get] out at first.',"but how did you actually get out?"],solutions:[{answer:["get","confused"],next:"whoops"},{answer:["get","out"],next:"whoops"},{answer:["stall"],next:"nice-try"}]},"nice-try":{name:"nice-try",body:["...","...",'"yes? could you please tell me why you\'re here?"',"you got the feeling that this wasn't the right time to stall. maybe in a different time it would have worked."],solutions:[{answer:["get","confused"],next:"whoops"},{answer:["get","out"],next:"whoops"}]},whoops:{name:"whoops",body:['"i, uh, needed to meet with you for...and you weren\'t, er...sorrythisbadtimeileavenowgoodbye"',"you stammered out of her office, abandoning the device. you heard her call out to you, but definitely did not listen.","you found a bathroom on another floor and hid in an empty [stall]. with your face in your hands, you just sat there for hours. surely security would be coming for you shortly.","...they didn't. somehow that's even more unsatifying. you had a sinking feeling that nothing had changed.","six hours later, you take your face out of your hands and see you're back on the subway. it's your stop. you should probably [deboard]."],solutions:[{answer:["deboard"],next:"doorstep"}]},"with-urgency":{name:"with-urgency",body:["let's do this.","you jam the device into the computer. immediately various windows opened, all spurring about. you weren't sure what any of it meant, but you were surprised how theatrical it was.","they had said it would take around five minutes to complete, but you were only going to wait for two. if there were other people like you trying to steal company data, surely that would be enough.","you stared at the screen, distracted by the light show. so distracted that you don't even notice when your boss comes in.","...",'"hey! what the hell are you doing here?"',"you needed an excuse."],solutions:[{answer:["pretend","security"],next:"the-gambit"}]},"the-gambit":{name:"the-gambit",body:["\"hi ma'am. i'm with the on-site security team. we're current doing a routine examination of all the computers on this floor, you might have saw the email.\"",'"oh...er, sure, i think I saw something like that."','"i noticed you had left your computer unlocked on your desk. surely you know this is against corporate guidelines. anybody could have walked right in and accessed your data."','"o-oh, did i? i\'m sorry, i guess, i guess i forgot?" she stammered, clearly feeling the [pressure].',"you were amazed this worked."],solutions:[{answer:["pressure"],next:"the-resolution"}]},"the-resolution":{name:"the-resolution",body:['"anyway, as this is a first offense we\'ll let you off the hook. just give me a couple seconds for my security dongle here to finish updating your anti-virus software", you offer, gesturing to the device.',"another awkward minute later, you removed the device, nod to your boss, and head out.","you were swelling with emotions. adrenaline from the gambit, joy from the success, and quite a bit of anger at how your boss didn't even recognize you.","it's fine, there's no time for your boss anymore.","you took out your phone, ready to [message] the [number] you were given."],solutions:[{answer:["message","number"],next:"signal"}]},signal:{name:"signal",body:["you opened the messaging app they had you download. they mentioned pretty firmly to only contact them through this app. perhaps they [suspect]ed things like email and text messages were unsecure. you don't really know.",'"got data, sending over now"','and after a minute, "great. we have started receiving it. we will contact you shortly with more details."',"fantastic.","you left the office and, overjoyed with your success, spent the next several hours at your favorite bar. you briefly pass out in a drunken stupor. when you come to, you're back on the subway.","it's your stop. you should [disembark]."],solutions:[{answer:["disembark"],next:"doorstep"},{answer:["deboard"],next:"doorstep"}]},"with-caution":{name:"with-caution",body:["with the door closed, you should be a little safer. at least if anyone comes in, you'd hear them.","you inserted the device into the computer. with the screen closed, you weren't quite sure what it was doing, but you have faith in the widget.","they said it would take about five minutes, so there's nothing to do but wait.     ","...                ","your wait, however, was interrupted by the noise of the door handle. you had only moments to prepare yourself, but it's enough such that you don't immediately [stumble].",'"hey! what are you doing in here?"',"you needed more time."],solutions:[{answer:["stumble"],next:"whoops"},{answer:["stall"],next:"business-papers"}]},"business-papers":{name:"business-papers",body:["\"oh, i've been waiting for you! apologies, i thought i had scheduled a meeting around this time but i guess you hadn't seen it.\"",'"yeah, no, i didn\'t see anyt-"','"anyway, about the latest contract..." and you talked business with your boss for the next twenty minutes. the initial confusion on her face gave way to the typical workplace apathy.',"you stood between her and her computer, successfully hiding the [widget] from sight. there's a brief moment during the conversation where she turned away and looked out into the hall.","you should make your leave."],solutions:[{answer:["pull","widget"],next:"business-as-usual"}]},"business-as-usual":{name:"business-as-usual",body:["as she looked away, you removed the device from her computer. you then thanked her for her input and hurried out the door. you saw her gesturing towards you to stop, the conversation clearly not over, but you're a busy person.","it's fine, there's no time for your boss right now.","you headed downstairs back to your desk and slumped into your chair, sighing with relief. you did it.","you took out your phone, ready to [contact] the [address] you were given."],solutions:[{answer:["contact","address"],next:"telegram"}]},telegram:{name:"telegram",body:["you opened the messaging app they had you download. they mentioned pretty firmly to only contact them through this app. perhaps they [doubt]ed the security of things like email and text messages. you don't really know.",'"got the data, sending over now"','and after a minute, "great. we have started receiving it. we will contact you shortly with more details."          ',"to avoid suspicion, you worked the rest of the day. it was uneventful, but quite long and tiring. business as usual.","near the end of the day, you started to doze off. when you came to, you were back on the subway.","it's your stop. you should [take] [off]."],solutions:[{answer:["take","off"],next:"doorstep"}]},"the-conclusion":{name:"the-conclusion",body:["no, wait, this isn't right.","they explicitly told you no contact through email. furthermore, what is this 'invertebrae'? they had never given you a name prior.","you delete the email. you don't know how or why you got this, but you feel like you might have gotten involved in something more complicated than you expected.","you don't have time for complications.","you send another message to them detailing [the] strange email, and wait for a reply.","of all things, this [end] you have time for."],solutions:[{answer:["the","end"],next:"the-end"}]},"the-end":{name:"the-end",body:["i n v e r t e b r a e                 ","a short game by y2bd                    ",'for ludum dare 44, "your life is currency"                  ',"source at github.com/y2bd/invertebrae                       ","...                   ","thanks for making time"],solutions:[]}}}},45:function(e,t,o){e.exports=o(112)},50:function(e,t,o){}},[[45,1,2]]]);
//# sourceMappingURL=main.67c4f691.chunk.js.map