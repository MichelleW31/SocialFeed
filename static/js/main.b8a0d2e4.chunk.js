(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={Post:"Post__Post__wTYqe",Copy:"Post__Copy__1ta3Q",Title:"Post__Title__2506a",Level:"Post__Level__1U6TF",Time:"Post__Time__5NnZ8",Image:"Post__Image__fZuxv",Sendoff:"Post__Sendoff__28cOC",fa_heart:"Post__fa_heart__3hfyU",fa_paper_plane:"Post__fa_paper_plane__Mh9tt"}},function(e,t,a){e.exports={Nav:"Nav__Nav__3Pyye",header:"Nav__header__2FeTB",fa_heart:"Nav__fa_heart__3n2zf",fa_paper_plane:"Nav__fa_paper_plane__1zqwS"}},function(e,t,a){e.exports={Topic:"Topic__Topic__CUw-z",TopicImage:"Topic__TopicImage__2ZxR8",TopicTitle:"Topic__TopicTitle__37TeK"}},,function(e,t,a){var i={"./chicken-parmesean.jpg":21,"./deep-dish-pizza.jpg":22,"./lamb-chops.jpg":23,"./lentil-soup.jpg":24,"./lettuce-wraps.jpg":25,"./macaroni.jpg":26,"./nachos.jpg":27,"./pesto-pasta.jpg":28,"./quesadilla.jpg":29,"./salmon.jpg":30,"./shrimp.jpg":31,"./sloppy-joe.jpg":32,"./spaghetti.jpg":33,"./stir-fry.jpg":34,"./stuffed-chicken.jpg":35,"./stuffed-shells.jpg":36,"./sushi.jpg":37,"./tacos.jpg":38,"./tuna-croquette.jpg":39,"./veggie-rice.jpg":40};function o(e){var t=p(e);return a(t)}function p(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(i)},o.resolve=p,e.exports=o,o.id=5},,,,,function(e,t,a){e.exports={TopicFeed:"TopicFeed__TopicFeed__2XyUq"}},function(e,t,a){e.exports={PostFeed:"PostFeed__PostFeed__2H--g"}},,,function(e,t,a){e.exports=a(41)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/chicken-parmesean.7dd9c7ea.jpg"},function(e,t,a){e.exports=a.p+"static/media/deep-dish-pizza.e1877ff7.jpg"},function(e,t,a){e.exports=a.p+"static/media/lamb-chops.a55826c7.jpg"},function(e,t,a){e.exports=a.p+"static/media/lentil-soup.fb49c4b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/lettuce-wraps.0fdde81f.jpg"},function(e,t,a){e.exports=a.p+"static/media/macaroni.0f3a5b85.jpg"},function(e,t,a){e.exports=a.p+"static/media/nachos.7beb4db3.jpg"},function(e,t,a){e.exports=a.p+"static/media/pesto-pasta.a9f63c37.jpg"},function(e,t,a){e.exports=a.p+"static/media/quesadilla.385734c5.jpg"},function(e,t,a){e.exports=a.p+"static/media/salmon.562b9ef8.jpg"},function(e,t,a){e.exports=a.p+"static/media/shrimp.c4e047b7.jpg"},function(e,t,a){e.exports=a.p+"static/media/sloppy-joe.5c813b0c.jpg"},function(e,t,a){e.exports=a.p+"static/media/spaghetti.faee6619.jpg"},function(e,t,a){e.exports=a.p+"static/media/stir-fry.e1ee57f8.jpg"},function(e,t,a){e.exports=a.p+"static/media/stuffed-chicken.71bc575b.jpg"},function(e,t,a){e.exports=a.p+"static/media/stuffed-shells.fadbb810.jpg"},function(e,t,a){e.exports=a.p+"static/media/sushi.3901a85b.jpg"},function(e,t,a){e.exports=a.p+"static/media/tacos.5bbc9a9f.jpg"},function(e,t,a){e.exports=a.p+"static/media/tuna-croquette.60a8af84.jpg"},function(e,t,a){e.exports=a.p+"static/media/veggie-rice.cd02ee31.jpg"},function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),p=a(6),c=a.n(p),n=(a(20),a(7)),s=a(8),r=a(12),l=a(9),m=a(13),u=a(2),g=a.n(u),d=function(){return o.a.createElement("div",{className:g.a.Nav},o.a.createElement("i",{className:g.a.fa_heart}),o.a.createElement("h2",{className:g.a.header},"FoodiLo"),o.a.createElement("i",{className:g.a.fa_paper_plane}))},f=a(3),_=a.n(f),h=function(e){var t=a(5)("./".concat(e.imgSrc));return o.a.createElement("div",{className:_.a.Topic},o.a.createElement("div",{className:_.a.TopicImage,style:{backgroundImage:"url("+t+")",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}),o.a.createElement("h2",{className:_.a.TopicTitle},e.title))},j=a(10),v=a.n(j),y=function(e){var t=e.recipes;t.sort(function(){return Math.random()-.5});var a=t.slice(0,8).map(function(e){return o.a.createElement(h,{key:e.title,title:e.title,imgSrc:e.imgPath})});return o.a.createElement("div",{className:v.a.TopicFeed},a)},P=a(1),k=a.n(P),E=function(e){var t=a(5)("./".concat(e.recipe.imgPath));return o.a.createElement("div",{className:k.a.Post},o.a.createElement("div",{className:k.a.Copy},o.a.createElement("h3",{className:k.a.Title},e.recipe.title),o.a.createElement("h4",{className:k.a.Level},"Level: ",e.recipe.level),o.a.createElement("h5",{className:k.a.Time},"Cook time: ",e.recipe.cooktime)),o.a.createElement("div",{className:k.a.ImageDiv},o.a.createElement("img",{className:k.a.Image,src:t,alt:""})),o.a.createElement("div",{className:k.a.Sendoff},o.a.createElement("i",{className:k.a.fa_heart}),o.a.createElement("i",{className:k.a.fa_paper_plane})),o.a.createElement("hr",null))},b=a(11),T=a.n(b),N=function(e){var t=e.recipes;t.sort(function(){return Math.random()-.5});var a=t.map(function(e){return o.a.createElement(E,{key:e.title,recipe:e})});return o.a.createElement("div",{className:T.a.PostFeed},a)},x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,o=new Array(i),p=0;p<i;p++)o[p]=arguments[p];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={recipes:[{title:"Sloppy Joes",cooktime:"30 minutes",popularity:"7/10",level:"Easy",imgPath:"sloppy-joe.jpg"},{title:"Stir Fry",cooktime:"60 minutes",popularity:"10/10",level:"Easy",imgPath:"stir-fry.jpg"},{title:"Quesadillas",cooktime:"40 minutes",popularity:"10/10",level:"Easy",imgPath:"quesadilla.jpg"},{title:"Nachos",cooktime:"30 minutes",popularity:"8/10",level:"Easy",imgPath:"nachos.jpg"},{title:"Lentil Soup",cooktime:"60 minutes",popularity:"8/10",level:"Medium",imgPath:"lentil-soup.jpg"},{title:"Grilled Salmon",cooktime:"60 minutes",popularity:"10/10",level:"Medium",imgPath:"salmon.jpg"},{title:"Tuna Croquette",cooktime:"50 minutes",popularity:"9/10",level:"Medium",imgPath:"tuna-croquette.jpg"},{title:"Stuffed Shells",cooktime:"30 minutes",popularity:"10/10",level:"Hard",imgPath:"stuffed-shells.jpg"},{title:"Deep Dish Pizza",cooktime:"60 minutes",popularity:"6/10",level:"Hard",imgPath:"deep-dish-pizza.jpg"},{title:"Chicken Parm",cooktime:"90 minutes",popularity:"8/10",level:"Hard",imgPath:"chicken-parmesean.jpg"},{title:"Tacos",cooktime:"30 minutes",popularity:"7/10",level:"Easy",imgPath:"tacos.jpg"},{title:"Stuffed Chicken",cooktime:"60 minutes",popularity:"10/10",level:"Easy",imgPath:"stuffed-chicken.jpg"},{title:"Spaghetti",cooktime:"40 minutes",popularity:"10/10",level:"Easy",imgPath:"spaghetti.jpg"},{title:"Veggie Rice",cooktime:"30 minutes",popularity:"8/10",level:"Easy",imgPath:"veggie-rice.jpg"},{title:"Sushi",cooktime:"60 minutes",popularity:"8/10",level:"Medium",imgPath:"sushi.jpg"},{title:"Lamb Chops",cooktime:"60 minutes",popularity:"10/10",level:"Medium",imgPath:"lamb-chops.jpg"},{title:"Garlic Shrimp",cooktime:"50 minutes",popularity:"9/10",level:"Medium",imgPath:"shrimp.jpg"},{title:"Pesto Pasta",cooktime:"30 minutes",popularity:"10/10",level:"Hard",imgPath:"pesto-pasta.jpg"},{title:"Macaroni",cooktime:"60 minutes",popularity:"6/10",level:"Hard",imgPath:"macaroni.jpg"},{title:"Lettuce Wraps",cooktime:"90 minutes",popularity:"8/10",level:"Hard",imgPath:"lettuce-wraps.jpg"}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(y,{recipes:this.state.recipes}),o.a.createElement(N,{recipes:this.state.recipes}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.b8a0d2e4.chunk.js.map