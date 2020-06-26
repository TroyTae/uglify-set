const {
  createAnchorElement,
  createAbbrElement,
  createAddressElement,
  createAppletElement,
  createAreaElement,
  createArticleElement,
  createAsideElement,
  createAudioElement,
  createBoldElement,
  createBaseElement,
  createBaseFontElement,
  createBdiElement,
  createBdoElement,
  createBlockQuoteElement,
  createBodyElement,
  createBrElement,
  createButtonElement,
  createCanvasElement,
  createCaptionElement,
  createCiteElement,
  createCodeElement,
  createColElement,
  createColGroupElement,
  createDataElement,
  createDataListElement,
  createDdElement,
  createDelElement,
  createDetailsElement,
  createDfnElement,
  createDialogElement,
  createDirElement,
  createDivElement,
  createDlElement,
  createDtElement,
  createEmElement,
  createEmbedElement,
  createFieldSetElement,
  createFigcaptionElement,
  createFigureElement,
  createFontElement,
  createFooterElement,
  createFormElement,
  createFrameElement,
  createFrameSetElement,
  createH1Element,
  createH2Element,
  createH3Element,
  createH4Element,
  createH5Element,
  createH6Element,
  createHeadElement,
  createHeaderElement,
  createHGroupElement,
  createHrElement,
  createHtmlElement,
  createItalicElement,
  createIFrameElement,
  createImageElement,
  createInputElement,
  createInsElement,
  createKbdElement,
  createLabelElement,
  createLegendElement,
  createLiElement,
  createLinkElement,
  createMainElement,
  createMapElement,
  createMarkElement,
  createMarqueeElement,
  createMenuElement,
  createMetaElement,
  createMeterElement,
  createNavElement,
  createNoScriptElement,
  createObjectElement,
  createOListElement,
  createOptGroupElement,
  createOptionElement,
  createOutputElement,
  createParagraphElement,
  createParamElement,
  createPictureElement,
  createPreElement,
  createProgressElement,
  createQuoteElement,
  createRpElement,
  createRtElement,
  createRubyElement,
  createStrikethroughElement,
  createSampElement,
  createScriptElement,
  createSectionElement,
  createSelectElement,
  createSlotElement,
  createSmallElement,
  createSourceElement,
  createSpanElement,
  createStrongElement,
  createStyleElement,
  createSubElement,
  createTableElement,
  createTableSectionElement,
  createTableDataCellElement,
} = require('../dist/index');

test('HTMLElement creation test', () => {
  expect(createAnchorElement().tagName).toBe('A');
  expect(createAbbrElement().tagName).toBe('ABBR');
  expect(createAddressElement().tagName).toBe('ADDRESS');
  expect(createAppletElement().tagName).toBe('APPLET');
  expect(createAreaElement().tagName).toBe('AREA');
  expect(createArticleElement().tagName).toBe('ARTICLE');
  expect(createAsideElement().tagName).toBe('ASIDE');
  expect(createAudioElement().tagName).toBe('AUDIO');
  expect(createBoldElement().tagName).toBe('B');
  expect(createBaseElement().tagName).toBe('BASE');
  expect(createBaseFontElement().tagName).toBe('BASEFONT');
  expect(createBdiElement().tagName).toBe('BDI');
  expect(createBdoElement().tagName).toBe('BDO');
  expect(createBlockQuoteElement().tagName).toBe('BLOCKQUOTE');
  expect(createBodyElement().tagName).toBe('BODY');
  expect(createBrElement().tagName).toBe('BR');
  expect(createButtonElement().tagName).toBe('BUTTON');
  expect(createCanvasElement().tagName).toBe('CANVAS');
  expect(createCaptionElement().tagName).toBe('CAPTION');
  expect(createCiteElement().tagName).toBe('CITE');
  expect(createCodeElement().tagName).toBe('CODE');
  expect(createColElement().tagName).toBe('COL');
  expect(createColGroupElement().tagName).toBe('COLGROUP');
  expect(createDataElement().tagName).toBe('DATA');
  expect(createDataListElement().tagName).toBe('DATALIST');
  expect(createDdElement().tagName).toBe('DD');
  expect(createDelElement().tagName).toBe('DEL');
  expect(createDetailsElement().tagName).toBe('DETAILS');
  expect(createDfnElement().tagName).toBe('DFN');
  expect(createDialogElement().tagName).toBe('DIALOG');
  expect(createDirElement().tagName).toBe('DIR');
  expect(createDivElement().tagName).toBe('DIV');
  expect(createDlElement().tagName).toBe('DL');
  expect(createDtElement().tagName).toBe('DT');
  expect(createEmElement().tagName).toBe('EM');
  expect(createEmbedElement().tagName).toBe('EMBED');
  expect(createFieldSetElement().tagName).toBe('FIELDSET');
  expect(createFigcaptionElement().tagName).toBe('FIGCAPTION');
  expect(createFigureElement().tagName).toBe('FIGURE');
  expect(createFontElement().tagName).toBe('FONT');
  expect(createFooterElement().tagName).toBe('FOOTER');
  expect(createFormElement().tagName).toBe('FORM');
  expect(createFrameElement().tagName).toBe('FRAME');
  expect(createFrameSetElement().tagName).toBe('FRAMESET');
  expect(createH1Element().tagName).toBe('H1');
  expect(createH2Element().tagName).toBe('H2');
  expect(createH3Element().tagName).toBe('H3');
  expect(createH4Element().tagName).toBe('H4');
  expect(createH5Element().tagName).toBe('H5');
  expect(createH6Element().tagName).toBe('H6');
  expect(createHeadElement().tagName).toBe('HEAD');
  expect(createHeaderElement().tagName).toBe('HEADER');
  expect(createHGroupElement().tagName).toBe('HGROUP');
  expect(createHrElement().tagName).toBe('HR');
  expect(createHtmlElement().tagName).toBe('HTML');
  expect(createItalicElement().tagName).toBe('I');
  expect(createIFrameElement().tagName).toBe('IFRAME');
  expect(createImageElement().tagName).toBe('IMG');
  expect(createInputElement().tagName).toBe('INPUT');
  expect(createInsElement().tagName).toBe('INS');
  expect(createKbdElement().tagName).toBe('KBD');
  expect(createLabelElement().tagName).toBe('LABEL');
  expect(createLegendElement().tagName).toBe('LEGEND');
  expect(createLiElement().tagName).toBe('LI');
  expect(createLinkElement().tagName).toBe('LINK');
  expect(createMainElement().tagName).toBe('MAIN');
  expect(createMapElement().tagName).toBe('MAP');
  expect(createMarkElement().tagName).toBe('MARK');
  expect(createMarqueeElement().tagName).toBe('MARQUEE');
  expect(createMenuElement().tagName).toBe('MENU');
  expect(createMetaElement().tagName).toBe('META');
  expect(createMeterElement().tagName).toBe('METER');
  expect(createNavElement().tagName).toBe('NAV');
  expect(createNoScriptElement().tagName).toBe('NOSCRIPT');
  expect(createObjectElement().tagName).toBe('OBJECT');
  expect(createOListElement().tagName).toBe('OL');
  expect(createOptGroupElement().tagName).toBe('OPTGROUP');
  expect(createOptionElement().tagName).toBe('OPTION');
  expect(createOutputElement().tagName).toBe('OUTPUT');
  expect(createParagraphElement().tagName).toBe('P');
  expect(createParamElement().tagName).toBe('PARAM');
  expect(createPictureElement().tagName).toBe('PICTURE');
  expect(createPreElement().tagName).toBe('PRE');
  expect(createProgressElement().tagName).toBe('PROGRESS');
  expect(createQuoteElement().tagName).toBe('Q');
  expect(createRpElement().tagName).toBe('RP');
  expect(createRtElement().tagName).toBe('RT');
  expect(createRubyElement().tagName).toBe('RUBY');
  expect(createStrikethroughElement().tagName).toBe('S');
  expect(createSampElement().tagName).toBe('SAMP');
  expect(createScriptElement().tagName).toBe('SCRIPT');
  expect(createSectionElement().tagName).toBe('SECTION');
  expect(createSelectElement().tagName).toBe('SELECT');
  expect(createSlotElement().tagName).toBe('SLOT');
  expect(createSmallElement().tagName).toBe('SMALL');
  expect(createSourceElement().tagName).toBe('SOURCE');
  expect(createSpanElement().tagName).toBe('SPAN');
  expect(createStrongElement().tagName).toBe('STRONG');
  expect(createStyleElement().tagName).toBe('STYLE');
  expect(createSubElement().tagName).toBe('SUB');
  expect(createTableElement().tagName).toBe('TABLE');
  expect(createTableSectionElement().tagName).toBe('TBODY');
  expect(createTableDataCellElement().tagName).toBe('TD');
});
