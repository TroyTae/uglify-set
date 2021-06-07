const {
  createAnchor,
  createAbbr,
  createAddress,
  createApplet,
  createArea,
  createArticle,
  createAside,
  createAudio,
  createBold,
  createBase,
  createBaseFont,
  createBdi,
  createBdo,
  createBlockQuote,
  createBody,
  createBr,
  createButton,
  createCanvas,
  createHeader,
  createLink,
  createMain,
  createSection,
  createSpan,
} = require("../dist/index");

test("create html", () => {
  expect(createAnchor().tagName).toBe("A");
  expect(createAbbr().tagName).toBe("ABBR");
  expect(createAddress().tagName).toBe("ADDRESS");
  expect(createApplet().tagName).toBe("APPLET");
  expect(createArea().tagName).toBe("AREA");
  expect(createArticle().tagName).toBe("ARTICLE");
  expect(createAside().tagName).toBe("ASIDE");
  expect(createAudio().tagName).toBe("AUDIO");
  expect(createBold().tagName).toBe("B");
  expect(createBase().tagName).toBe("BASE");
  expect(createBaseFont().tagName).toBe("BASEFONT");
  expect(createBdi().tagName).toBe("BDI");
  expect(createBdo().tagName).toBe("BDO");
  expect(createBlockQuote().tagName).toBe("BLOCKQUOTE");
  expect(createBody().tagName).toBe("BODY");
  expect(createBr().tagName).toBe("BR");
  expect(createButton().tagName).toBe("BUTTON");
  expect(createCanvas().tagName).toBe("CANVAS");
});
