// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.JavaScript=new Blockly.Generator("JavaScript");Blockly.JavaScript.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.JavaScript.ORDER_ATOMIC=0;Blockly.JavaScript.ORDER_MEMBER=1;Blockly.JavaScript.ORDER_NEW=1;Blockly.JavaScript.ORDER_FUNCTION_CALL=2;Blockly.JavaScript.ORDER_INCREMENT=3;Blockly.JavaScript.ORDER_DECREMENT=3;Blockly.JavaScript.ORDER_LOGICAL_NOT=4;Blockly.JavaScript.ORDER_BITWISE_NOT=4;Blockly.JavaScript.ORDER_UNARY_PLUS=4;Blockly.JavaScript.ORDER_UNARY_NEGATION=4;Blockly.JavaScript.ORDER_TYPEOF=4;Blockly.JavaScript.ORDER_VOID=4;Blockly.JavaScript.ORDER_DELETE=4;
Blockly.JavaScript.ORDER_MULTIPLICATION=5;Blockly.JavaScript.ORDER_DIVISION=5;Blockly.JavaScript.ORDER_MODULUS=5;Blockly.JavaScript.ORDER_ADDITION=6;Blockly.JavaScript.ORDER_SUBTRACTION=6;Blockly.JavaScript.ORDER_BITWISE_SHIFT=7;Blockly.JavaScript.ORDER_RELATIONAL=8;Blockly.JavaScript.ORDER_IN=8;Blockly.JavaScript.ORDER_INSTANCEOF=8;Blockly.JavaScript.ORDER_EQUALITY=9;Blockly.JavaScript.ORDER_BITWISE_AND=10;Blockly.JavaScript.ORDER_BITWISE_XOR=11;Blockly.JavaScript.ORDER_BITWISE_OR=12;
Blockly.JavaScript.ORDER_LOGICAL_AND=13;Blockly.JavaScript.ORDER_LOGICAL_OR=14;Blockly.JavaScript.ORDER_CONDITIONAL=15;Blockly.JavaScript.ORDER_ASSIGNMENT=16;Blockly.JavaScript.ORDER_COMMA=17;Blockly.JavaScript.ORDER_NONE=99;
Blockly.JavaScript.init=function(b){Blockly.JavaScript.definitions_=Object.create(null);Blockly.JavaScript.functionNames_=Object.create(null);Blockly.JavaScript.variableDB_?Blockly.JavaScript.variableDB_.reset():Blockly.JavaScript.variableDB_=new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);var c=[];b=Blockly.Variables.allVariables(b);for(var a=0;a<b.length;a++)c[a]="var "+Blockly.JavaScript.variableDB_.getName(b[a],Blockly.Variables.NAME_TYPE)+";";Blockly.JavaScript.definitions_.variables=c.join("\n")};
Blockly.JavaScript.finish=function(b){var c=[],a;for(a in Blockly.JavaScript.definitions_)c.push(Blockly.JavaScript.definitions_[a]);delete Blockly.JavaScript.definitions_;delete Blockly.JavaScript.functionNames_;Blockly.JavaScript.variableDB_.reset();return c.join("\n\n")+"\n\n\n"+b};Blockly.JavaScript.scrubNakedValue=function(b){return b+";\n"};Blockly.JavaScript.quote_=function(b){b=b.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+b+"'"};
Blockly.JavaScript.scrub_=function(b,c){var a="";if(!b.outputConnection||!b.outputConnection.targetConnection){var d=b.getCommentText();d&&(a+=Blockly.JavaScript.prefixLines(d,"// ")+"\n");for(var e=0;e<b.inputList.length;e++)b.inputList[e].type==Blockly.INPUT_VALUE&&(d=b.inputList[e].connection.targetBlock())&&(d=Blockly.JavaScript.allNestedComments(d))&&(a+=Blockly.JavaScript.prefixLines(d,"// "))}e=b.nextConnection&&b.nextConnection.targetBlock();e=Blockly.JavaScript.blockToCode(e);return a+c+
e};Blockly.JavaScript.begin_end={};Blockly.JavaScript.begin_end=function(b){current_function="main";if(pre_compilation)return"";scope="global";quadruples.push([35]);Blockly.JavaScript.statementToCode(b,"main");quadruples.push([36]);clearLocalAndTemporal();return!0};Blockly.JavaScript.conditions={};Blockly.JavaScript["if"]=function(b){var c=Blockly.JavaScript.statementToCode(b,"condition"),a=quadruples.length;quadruples.push([37,quadruples[c][3],"",0]);Blockly.JavaScript.statementToCode(b,"statment");quadruples[a][3]=quadruples.length;return""};
Blockly.JavaScript.if_else=function(b){var c=Blockly.JavaScript.statementToCode(b,"condition"),a=quadruples.length;quadruples.push([37,quadruples[c][3],"",0]);Blockly.JavaScript.statementToCode(b,"statment");c=quadruples.length;quadruples.push([38,"","",0]);quadruples[a][3]=quadruples.length;Blockly.JavaScript.statementToCode(b,"else_condition");quadruples[c][3]=quadruples.length;return""};
Blockly.JavaScript.equal_to=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_equal");b=Blockly.JavaScript.statementToCode(b,"right_equal");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);
"var"===k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,4);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([4,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.less_than=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_lt");b=Blockly.JavaScript.statementToCode(b,"right_lt");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);"var"===
k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,5);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([5,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.greater_than=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_gt");b=Blockly.JavaScript.statementToCode(b,"right_gt");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);"var"===
k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,6);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([6,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.less_than_or_equal_to=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_lte");b=Blockly.JavaScript.statementToCode(b,"right_lte");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===
a&&(a=e);"var"===k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,7);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([7,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.greater_than_or_equal_to=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_gte");b=Blockly.JavaScript.statementToCode(b,"right_gte");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===
a&&(a=e);"var"===k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,8);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([8,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.not_equal_to=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_not_equal");b=Blockly.JavaScript.statementToCode(b,"right_not_equal");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===
a&&(a=e);"var"===k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,9);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([9,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.and=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_and");b=Blockly.JavaScript.statementToCode(b,"right_and");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);"var"===k?
-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,10);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([10,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.or=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_or");b=Blockly.JavaScript.statementToCode(b,"right_or");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);"var"===k?-1===
findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,11);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([11,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.not=function(b){var c=Blockly.JavaScript.statementToCode(b,"r_not"),a,d;Number(c)?(d=quadruples[c][3],b=indexToType(d[0])):(b=c.type,a=c.input);"var"===b?-1===findVariable(a)?(insertIntoShell('Variable "'+a+'" not defined.'),errorMessage("Semantic Error")):(a=findVariable(a),b=indexToType(a),d=a):"boolean"!==b||Number(c)||(d=c.input);"boolean"!==b&&(insertIntoShell("not operator only accepts booleans"),errorMessage(""));quadruples.push([41,d,"",resultType("not",b,41)]);return quadruples.length-
1};Blockly.JavaScript.functions={};
Blockly.JavaScript.def_function=function(b){scope="local";clearLocal();var c=b.getFieldValue("func_name"),a=Blockly.JavaScript.statementToCode(b,"return_type");current_function=c;if(pre_compilation)return checkVarSyntax(c),-1!==findGlobalVariable(c)&&(insertIntoShell('Variable "'+c+'" already defined.'),errorMessage("Semantic Error")),scope="global","no_return"!==a&&pushVarToTable(c,a),current_function="main","";function_params_array=[];Blockly.JavaScript.statementToCode(b,"params");getHashNameValues(function_params_array).forEach(function(a){null!==
a&&checkVarSyntax(a)});function_params_array.forEach(function(a){null!==a&&(-1!==findLocalVariable(a.name)&&(insertIntoShell("Parameter with name "+a.name+" in function "+c+" already defined"),errorMessage("Semantic Error")),pushVarToTable(a.name,a.type),quadruples.push([12,getNextParam(findLocalVariable(a.name)),"",findLocalVariable(a.name)]))});clearParamsTable();functions_table[c]=[quadruples.length-function_params_array.length,function_params_array,a];Blockly.JavaScript.statementToCode(b,"main");
quadruples.push([34,"","",""]);function_params_array=[];clearLocal();current_function="main";return""};
Blockly.JavaScript.call_function=function(b){var c=b.getFieldValue("function_call_value");function_params_array=[];Blockly.JavaScript.statementToCode(b,"params");function_params_array.forEach(function(a){"integer"===a.type?null!==a.name.match(int_r)?pushToParamTable(parseInt(a.name),a.type):-1!==findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not an integer"),errorMessage("Semantic Error")):
(insertIntoShell("Params error: "+a.name+" is not an integer"),errorMessage("Semantic Error")):"float"===a.type?null!==a.name.match(float_r)?pushToParamTable(parseFloat(a.name),a.type):-1!==findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not a float"),errorMessage("Semantic Error")):(insertIntoShell("Params error: "+a.name+" is not a float"),errorMessage("Semantic Error")):
"string"===a.type?null!==a.name.match(string_r)?pushToParamTable(a.name,a.type):-1!==findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not a string"),errorMessage("Semantic Error")):(insertIntoShell("Params error: "+a.name+" is not a string"),errorMessage("Semantic Error")):"boolean"===a.type&&(null!==a.name.match(boolean_r)?pushToParamTable("true"===a.name,a.type):-1!==
findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not a boolean"),errorMessage("Semantic Error")):(insertIntoShell("Params error: "+a.name+" is not a boolean"),errorMessage("Semantic Error")))});clearParamsTable();functions_call_table.push([c,quadruples.length,function_params_array,"no_return"]);quadruples.push([33,"","",0]);function_params_array=[];return""};
Blockly.JavaScript.return_function=function(b){var c=b.getFieldValue("function_call_value");function_params_array=[];Blockly.JavaScript.statementToCode(b,"params");function_params_array.forEach(function(a){"integer"===a.type?null!==a.name.match(int_r)?pushToParamTable(parseInt(a.name),a.type):-1!==findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not an integer"),errorMessage("Semantic Error")):
(insertIntoShell("Params error: "+a.name+" is not an integer"),errorMessage("Semantic Error")):"float"===a.type?null!==a.name.match(float_r)?pushToParamTable(parseFloat(a.name),a.type):-1!==findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not a float"),errorMessage("Semantic Error")):(insertIntoShell("Params error: "+a.name+" is not a float"),errorMessage("Semantic Error")):
"string"===a.type?null!==a.name.match(string_r)?pushToParamTable(a.name,a.type):-1!==findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not a string"),errorMessage("Semantic Error")):(insertIntoShell("Params error: "+a.name+" is not a string"),errorMessage("Semantic Error")):"boolean"===a.type&&(null!==a.name.match(boolean_r)?pushToParamTable("true"===a.name,a.type):-1!==
findVariable(a.name)?indexToType(findVariable(a.name))==a.type?pushToParamTable(findVariable(a.name),indexToType(findVariable(a.name))):(insertIntoShell("Params error: "+a.name+" is not a boolean"),errorMessage("Semantic Error")):(insertIntoShell("Params error: "+a.name+" is not a boolean"),errorMessage("Semantic Error")))});clearParamsTable();b=findVariable(c);-1===b&&(insertIntoShell("Function "+c+" does not exist"),errorMessage("Semantic Error"));b=indexToType(b);functions_call_table.push([c,quadruples.length,
function_params_array,b]);quadruples.push([33,"","",0]);function_params_array=[];return{input:c,type:"var",fnc:!0}};Blockly.JavaScript.param=function(b){var c=b.getFieldValue("param_type"),a=b.getFieldValue("param_name");function_params_array.push({type:c,name:a});Blockly.JavaScript.statementToCode(b,"next_param");return""};Blockly.JavaScript.no_params=function(b){function_params_array.push({type:"no_params",name:null});return""};Blockly.JavaScript.return_value=function(b){return b.getFieldValue("return_type")};
Blockly.JavaScript["return"]=function(b){"main"===current_function&&(insertIntoShell("Begin - End block cannot contain a return statement"),errorMessage("Syntax Error"));b=Blockly.JavaScript.statementToCode(b,"return");var c=!1,a,d,e;b===parseInt(b,10)?(c=quadruples[b][3],d=indexToType(c[0])):(a=b.input,d=b.type);e=d;"var"===d?-1===findVariable(a)?(insertIntoShell('Variable "'+a+'" not defined.'),errorMessage("Semantic Error")):(c=findVariable(a),e=indexToType(c)):!1===c&&(c=a);a=findVariable(current_function);
-1===a&&(insertIntoShell("Function "+current_function+" should not have a return statement"),errorMessage("Syntax Error"));e!==indexToType(a)&&(insertIntoShell("Return value of function "+current_function+" must be "+indexToType(a)),errorMessage("Semantic Error"));!0===b.fnc&&(c="m"+c);quadruples.push([12,c,"","m"+a]);quadruples.push([34,"","",""]);return""};Blockly.JavaScript.loops={};
Blockly.JavaScript.repeat=function(b){var c=Blockly.JavaScript.statementToCode(b,"n_times"),a=!1,d,e;Number(c)?(a=quadruples[c][3],e=indexToType(a[0])):(d=c.input,e=c.type);c=e;"var"===e?-1===findVariable(d)?(insertIntoShell('Variable "'+d+'" not defined.'),errorMessage("Semantic Error")):(a=findVariable(d),c=indexToType(a)):!1===a&&(a=d);"integer"!==c&&(insertIntoShell("Repeat loop must have an integer"),errorMessage("Type Mismatch"));d=a;a=resultType("integer","integer",0);quadruples.push([12,d,
"",a]);d=resultType("integer","integer",6);c=quadruples.length;quadruples.push([6,a,0,d]);quadruples.push([1,a,1,a]);a=quadruples.length;quadruples.push([37,d,"",0]);Blockly.JavaScript.statementToCode(b,"statement");quadruples.push([38,"","",c]);quadruples[a][3]=quadruples.length;return""};
Blockly.JavaScript["while"]=function(b){quadruples.push([21,"","",""]);var c=quadruples.length,a=Blockly.JavaScript.statementToCode(b,"expression"),d=quadruples.length;quadruples.push([37,quadruples[a][3],"",0]);Blockly.JavaScript.statementToCode(b,"statment");quadruples.push([38,"","",c]);quadruples[d][3]=quadruples.length;return""};
Blockly.JavaScript.do_while=function(b){var c=quadruples.length;Blockly.JavaScript.statementToCode(b,"statment");Blockly.JavaScript.statementToCode(b,"expression");quadruples.push([39,quadruples[quadruples.length-1][3],"",c]);return""};Blockly.JavaScript.movements={};
Blockly.JavaScript.move=function(b){var c=Blockly.JavaScript.statementToCode(b,"move_blocks");b=!1;var a,d;Number(c)?(b=quadruples[c][3],d=indexToType(b[0])):(a=c.input,d=c.type);c=d;"var"===d?-1===findVariable(a)?(insertIntoShell('Variable "'+a+'" not defined.'),errorMessage("Semantic Error")):(a=findVariable(a),c=indexToType(a),b=a):!1===b&&(b=a);"integer"!==c&&(insertIntoShell("Repeat loop must have an integer"),errorMessage("Type Mismatch"));quadruples.push([15,"","",b]);return""};
Blockly.JavaScript.turn=function(b){b=b.getFieldValue("directions");quadruples.push([16,"","",b]);return""};Blockly.JavaScript.wall_in_front=function(b){b=resultType("boolean","boolean",4);quadruples.push([24,"","",b]);return quadruples.length-1};Blockly.JavaScript.on_goal=function(b){b=resultType("boolean","boolean",4);quadruples.push([40,"","",b]);return quadruples.length-1};Blockly.JavaScript.operations={};
Blockly.JavaScript.assignation=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_assig");b=Blockly.JavaScript.statementToCode(b,"right_assig");var a=c.input,d=-1,e,g;g=Number(b)?b:b.input;var h=b.type,m,f=h;checkVarSyntax(a);-1===findVariable(a)?(insertIntoShell('Variable "'+a+'" not defined.'),errorMessage("Semantic Error")):(d=findVariable(a),e=indexToType(d));"var"===h?-1===findVariable(g)?(insertIntoShell('Variable "'+g+'" not defined.'),errorMessage("Semantic Error")):(m=findVariable(g),
f=indexToType(m)):void 0===h?(f=indexToType(quadruples[g][3]),m=quadruples[g][3]):m=g;e!==f&&(alert(a+" and "+f+" must be same type"),errorMessage("Type Mismatch Error"));!0===c.fnc&&(d="m"+d);!0===b.fnc&&(m="m"+m);quadruples.push([12,m,"",d]);return""};
Blockly.JavaScript.sum=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_sum");b=Blockly.JavaScript.statementToCode(b,"right_sum");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);"var"===k?
-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,0);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([0,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.substraction=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_substractor");b=Blockly.JavaScript.statementToCode(b,"right_substractor");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):
!1===a&&(a=e);"var"===k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,1);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([1,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.multiplication=function(b){var c=Blockly.JavaScript.statementToCode(b,"left_multiplier");b=Blockly.JavaScript.statementToCode(b,"right_multiplier");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):
!1===a&&(a=e);"var"===k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,2);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([2,a,d,e]);return quadruples.length-1};
Blockly.JavaScript.division=function(b){var c=Blockly.JavaScript.statementToCode(b,"nominator");b=Blockly.JavaScript.statementToCode(b,"denominator");var a=!1,d=!1,e,g,h,m,f,k,l,n;Number(c)?(a=quadruples[c][3],g=indexToType(a[0])):(e=c.input,g=c.type);m=g;Number(b)?(d=quadruples[b][3],k=indexToType(d[0])):(f=b.input,k=b.type);n=k;"var"===g?-1===findVariable(e)?(insertIntoShell('Variable "'+e+'" not defined.'),errorMessage("Semantic Error")):(h=findVariable(e),m=indexToType(h),a=h):!1===a&&(a=e);"var"===
k?-1===findVariable(f)?(insertIntoShell('Variable "'+f+'" not defined.'),errorMessage("Semantic Error")):(l=findVariable(f),n=indexToType(l),d=l):!1===d&&(d=f);e=resultType(m,n,3);!0===c.fnc&&(a="m"+h);!0===b.fnc&&(d="m"+l);quadruples.push([3,a,d,e]);return quadruples.length-1};Blockly.JavaScript.print={};Blockly.JavaScript.print=function(b){b=Blockly.JavaScript.statementToCode(b,"print_expression");var c=!1,a,d,e;Number(b)?(c=quadruples[b][3],d=indexToType(c[0])):(a=b.input,d=b.type);"var"===d?-1===findVariable(a)?(insertIntoShell('Variable "'+a+'" not defined.'),errorMessage("Semantic Error")):(e=findVariable(a),indexToType(e),c=e):!1===c&&(c=a);!0===b.fnc&&(c="m"+e);quadruples.push([13,"","",c]);return""};
Blockly.JavaScript.say=function(b){b=b.getFieldValue("say_value");quadruples.push([14,"","",b]);return""};Blockly.JavaScript.variables_and_constants={};Blockly.JavaScript.factor=function(b){b=b.getFieldValue("input");if(null!==b.match(int_r))return{input:parseInt(b),type:"integer"};if(null!==b.match(float_r))return{input:parseFloat(b),type:"float"};if(null!==b.match(string_r))return{input:b,type:"string"};if(null!==b.match(boolean_r))return{input:"true"===b,type:"boolean"};if(checkVarSyntax(b))return{input:b,type:"var"};insertIntoShell("Not a valid expression: "+b);errorMessage("Syntax Error")};
Blockly.JavaScript["var"]=function(b){var c=b.getFieldValue("var_dic");b=b.getFieldValue("value");checkVarSyntax(b);"global"==scope?-1!==findGlobalVariable(b)&&(insertIntoShell('Variable "'+b+'" already defined.'),errorMessage("Semantic Error")):"local"==scope&&-1!==findLocalVariable(b)&&(insertIntoShell('Variable "'+b+'" already defined.'),errorMessage("Semantic Error"));pushVarToTable(b,c);return""};