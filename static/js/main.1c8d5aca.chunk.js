(this.webpackJsonpvideotizame=this.webpackJsonpvideotizame||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/VOD-app.a2b389ef.png"},,,,,,,,function(e,a){},,,function(e,a){},function(e,a){},function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),i=(t(33),t(2)),m=t(7),o=t(23),s=t.n(o),u=t(9),h=t(10),b=t(13),d=t(11),E=t(12),p=(t(34),function(e){function a(){return Object(u.a)(this,a),Object(b.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"nav-item"},l.a.createElement("img",{src:t(15),alt:"brand-home",className:"brand-home"}),l.a.createElement(i.b,{to:"/Watched",className:"btn-history"},"History"),l.a.createElement(i.b,{to:"/Home",className:"btn-home"},"Home")))}}]),a}(l.a.Component)),g=function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(p,null))},f=(t(40),t(41),function(){return l.a.createElement("div",{className:"log-btn-container"},l.a.createElement(i.b,{to:"/Login",className:"log-btn log-text"},"Sign in"))}),v=(t(42),function(){return l.a.createElement("div",{className:"Info-container"},l.a.createElement("img",{src:t(15),alt:"brand",className:"brand-img"}),l.a.createElement("h2",{className:"Info-text"},"Experiment the magical world of ",l.a.createElement("b",null,"VOD app"),", come, prove and see all movies you want.",l.a.createElement("br",null)," Everytime, everywhere for less than the competition."))}),N=(t(43),function(){return l.a.createElement("div",{className:"reg-btn-container"},l.a.createElement(i.b,{to:"/Register",className:"reg-btn reg-text"},"Let's go there!"))}),w=function(){return l.a.createElement("div",{className:"Initiate"},l.a.createElement("div",{className:"Initiate-container"},l.a.createElement("br",null),l.a.createElement(f,null),l.a.createElement(v,null),l.a.createElement(N,null),l.a.createElement("br",null)))},x=t(16),O=t(6),y=(t(44),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){return function(a){t.setState(Object(x.a)({},e,a.target.value))}},t.handleSubmit=function(e){alert("Welcome back!"),e.preventDefault()},t.state={name:"",email:"",password:""},t.handleChange=t.handleChange.bind(Object(O.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(O.a)(t)),t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"loginform"},l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(i.b,{to:"/",className:"back"},"Back"),l.a.createElement("div",{className:"logform-container"},l.a.createElement("img",{src:t(15),alt:"brand-log",className:"brand-pic"}),l.a.createElement("h3",{className:"login-text"},"Sign in to start watching"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"email",value:this.state.value,onChange:this.handleChange,className:"mail-box2",placeholder:"e-mail"}),l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.value,onChange:this.handleChange,className:"pass-box",placeholder:"password"}),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/Home"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn-submit"})),l.a.createElement(i.b,{to:"/Register",className:"log-text2"},l.a.createElement("p",null,"Do you want to suscribe? Press here")))))}}]),a}(l.a.Component)),j=function(){return l.a.createElement("div",{className:"login-container"},l.a.createElement(y,null))},C=t(26),k=t.n(C),S=(t(45),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(b.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){return function(a){t.setState(Object(x.a)({},e,a.target.value))}},t.state={name:"",email:"",password:""},t.handleChange=t.handleChange.bind(Object(O.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(O.a)(t)),t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"handleSubmit",value:function(e){alert("Your account was created succesfully!!"),e.preventDefault();var a=this.state,t={name:a.name,email:a.email,password:a.password};console.log(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"Regform"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/",className:"back"}," Back"),l.a.createElement("div",{className:"reg-container"},l.a.createElement("img",{src:t(15),alt:"reg-brand",className:"brand-pic"}),l.a.createElement("h3",{className:"reg-text2"},"Register Form"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"name",className:"name-box"}),l.a.createElement("br",null),l.a.createElement("input",{type:"email",value:this.state.value,onChange:this.handleChange,placeholder:"e-mail",className:"mail-box"}),l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.value,onChange:this.handleChange,placeholder:"password",className:"pass-box"}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Register",className:"btn-submit"})),l.a.createElement(i.b,{to:"/Login"},l.a.createElement("p",{className:"log-text2"},"Do you have an account? Click here"))))}}]),a}(l.a.Component)),R=function(){return l.a.createElement("div",{className:"Register-container"},l.a.createElement(S,null))},D=t(27),H=t.n(D);t(46);var I=function(){return l.a.createElement(i.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",render:function(){return l.a.createElement(w,null)}}),l.a.createElement(m.a,{exact:!0,path:"/Login",render:function(){return l.a.createElement(j,null)}}),l.a.createElement(m.a,{exact:!0,path:"/Reset-Password",render:function(){return l.a.createElement(H.a,null)}}),l.a.createElement(m.a,{exact:!0,path:"/Register",render:function(){return l.a.createElement(R,null)}}),l.a.createElement(m.a,{exact:!0,path:"/Home",render:function(){return l.a.createElement(g,null)}}),l.a.createElement(m.a,{exact:!0,path:"/Movie",render:function(){return l.a.createElement(k.a,null)}}),l.a.createElement(m.a,{exact:!0,path:"/Watched",render:function(){return l.a.createElement(s.a,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.1c8d5aca.chunk.js.map