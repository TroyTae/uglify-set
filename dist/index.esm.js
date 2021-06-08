function createObserver(initialValue) {
    var key = 0;
    var value = initialValue;
    var subscribers = {};
    return [
        function getValue() {
            return value;
        },
        function setValue(newValue) {
            value = newValue;
            for (var k in subscribers) {
                subscribers[k](value);
            }
        },
        function subscribeValue(callback) {
            subscribers[key] = callback;
            return key++;
        },
        function unsubscribeValue(listenerKey) {
            delete subscribers[listenerKey];
        },
    ];
}

function createElement(tagName, builder) {
    var html = document.createElement(tagName);
    builder && builder(html);
    return html;
}
function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function createAnchor(builder) {
    return createElement("a", builder);
}
function createAbbr(builder) {
    return createElement("abbr", builder);
}
function createAddress(builder) {
    return createElement("address", builder);
}
function createApplet(builder) {
    return createElement("applet", builder);
}
function createArea(builder) {
    return createElement("area", builder);
}
function createArticle(builder) {
    return createElement("article", builder);
}
function createAside(builder) {
    return createElement("aside", builder);
}
function createAudio(builder) {
    return createElement("audio", builder);
}
function createBold(builder) {
    return createElement("b", builder);
}
function createBase(builder) {
    return createElement("base", builder);
}
function createBaseFont(builder) {
    return createElement("basefont", builder);
}
function createBdi(builder) {
    return createElement("bdi", builder);
}
function createBdo(builder) {
    return createElement("bdo", builder);
}
function createBlockQuote(builder) {
    return createElement("blockquote", builder);
}
function createBody(builder) {
    return createElement("body", builder);
}
function createBr(builder) {
    return createElement("br", builder);
}
function createButton(builder) {
    return createElement("button", builder);
}
function createCanvas(builder) {
    return createElement("canvas", builder);
}
function createCaption(builder) {
    return createElement("caption", builder);
}
function createCite(builder) {
    return createElement("cite", builder);
}
function createCode(builder) {
    return createElement("code", builder);
}
function createCol(builder) {
    return createElement("col", builder);
}
function createColGroup(builder) {
    return createElement("colgroup", builder);
}
function createHeader(builder) {
    return createElement("header", builder);
}
function createLink(builder) {
    return createElement("link", builder);
}
function createMain(builder) {
    return createElement("main", builder);
}
function createSection(builder) {
    return createElement("section", builder);
}
function createSpan(builder) {
    return createElement("span", builder);
}

export { createAbbr, createAddress, createAnchor, createApplet, createArea, createArticle, createAside, createAudio, createBase, createBaseFont, createBdi, createBdo, createBlockQuote, createBody, createBold, createBr, createButton, createCanvas, createCaption, createCite, createCode, createCol, createColGroup, createElement, createHeader, createLink, createMain, createObserver, createSection, createSpan, removeChildren };
