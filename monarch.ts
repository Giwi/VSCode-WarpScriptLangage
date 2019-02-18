export class Monarch {
        public static rules:any =  {
    "keywords": [
        "MAP",
        "FILTER",
        "APPLY",
        "REDUCE",
        "BUCKETIZE",
        "filler.trend",
        "filler.previous",
        "filler.next",
        "filler.interpolate",
        "MACROFILLER",
        "FILL",
        "VARS",
        "TIMEON",
        "TIMEOFF",
        "SHMSTORE",
        "SHMLOAD",
        "PSTACK",
        "PEEKN",
        "PEEK",
        "NPEEK",
        "MUTEX",
        "WSSTACK",
        "JSONSTACK",
        "ECHOON",
        "ECHOOFF",
        "PUSHR",
        "POPR",
        "CPOPR",
        "CLEARREGS",
        "ASREGS",
        "UNSECURE",
        "TYPEOF",
        "TIMINGS",
        "SWAP",
        "STORE",
        "STOP",
        "STACKTOLIST",
        "STACKATTRIBUTE",
        "SNAPSHOTTOMARK",
        "SNAPSHOTN",
        "SNAPSHOTCOPYTOMARK",
        "SNAPSHOTCOPYN",
        "SNAPSHOTCOPYALLTOMARK",
        "SNAPSHOTCOPYALL",
        "SNAPSHOTCOPY",
        "SNAPSHOTALLTOMARK",
        "SNAPSHOTALL",
        "SNAPSHOT",
        "SECUREKEY",
        "SECURE",
        "SECTION",
        "SAVE",
        "RUNNERNONCE",
        "ROT",
        "ROLLD",
        "ROLL",
        "REXECZ",
        "REXEC",
        "RESTORE",
        "RESET",
        "REDEFS",
        "PIGSCHEMA",
        "PICK",
        "NOTIMINGS",
        "NDEBUGON",
        "MAXDEPTH",
        "MARK",
        "LOAD",
        "[",
        "LINEON",
        "LINEOFF",
        "ISAUTHENTICATED",
        "IDENT",
        "HEADER",
        "GETSECTION",
        "FORGET",
        "EXTLOADED",
        "EXPORT",
        "EVALSECURE",
        "ERROR",
        "ELAPSED",
        "DUPN",
        "DUP",
        "DROPN",
        "DROP",
        "DEPTH",
        "DEF",
        "DEBUGON",
        "DEBUGOFF",
        "CSTORE",
        "COUNTTOMARK",
        "CLEARTOMARK",
        "CLEARSYMBOLS",
        "CLEARDEFS",
        "CLEAR",
        "BOOTSTRAP",
        "AUTHENTICATE",
        "TOKENGEN",
        "TOKENDUMP",
        "SHMSTORE",
        "SHMLOAD",
        "MUTEX",
        "SQLEXEC",
        "SENSISIONUPDATE",
        "SENSISIONSET",
        "SENSISIONGET",
        "SENSISIONEVENT",
        "PMMLLOAD",
        "PMMLEVAL",
        "HLOCATE",
        "FUNCTIONS",
        "TDESCRIBE",
        "STDOUT",
        "STDERR",
        "NOLOG",
        "LOGMSG",
        "SYNC",
        "REXECZ",
        "REXEC",
        "CEVAL",
        "TOKENGEN",
        "TOKENDUMP",
        "FUNCTIONS",
        "UPDATE",
        "TOKENINFO",
        "RUN",
        "REV",
        "OPS",
        "NOOP",
        "MINREV",
        "MAXSYMBOLS",
        "MAXRECURSION",
        "MAXPIXELS",
        "MAXOPS",
        "MAXLOOP",
        "MAXGTS",
        "MAXGEOCELLS",
        "MAXDEPTH",
        "MAXBUCKETS",
        "MACROTTL",
        "LIMIT",
        "JSONSTRICT",
        "JSONLOOSE",
        "PICKLE->",
        "INFOMODE",
        "INFO",
        "GETHOOK",
        "EVERY",
        "CALL",
        "->PICKLE",
        "LASTACTIVITY",
        "REMOVETICK",
        "ZSCORETEST",
        "ZSCORE",
        "ZPATTERNS",
        "ZPATTERNDETECTION",
        "ZDTW",
        "ZDISCORDS",
        "WRAPRAWOPT",
        "WRAPRAW",
        "WRAPOPT",
        "WRAP",
        "VALUESPLIT",
        "VALUESORT",
        "VALUES",
        "VALUEHISTOGRAM",
        "VALUEDEDUP",
        "UPDATE",
        "UNWRAPSIZE",
        "UNWRAPENCODER",
        "UNWRAPEMPTY",
        "UNWRAP",
        "UNBUCKETIZE",
        "TOSELECTOR",
        "TOBITS",
        "TLTTB",
        "TIMESPLIT",
        "TIMESHIFT",
        "TIMESCALE",
        "TIMEMODULO",
        "TIMECLIP",
        "TICKS",
        "TICKLIST",
        "TICKINDEX",
        "THRESHOLDTEST",
        "STRICTPARTITION",
        "STLESDTEST",
        "STL",
        "STANDARDIZE",
        "SORTBY",
        "SORT",
        "SMARTPARSE",
        "SKEWNESS",
        "SIZE",
        "SINGLEEXPONENTIALSMOOTHING",
        "SHRINK",
        "SETVALUE",
        "SETATTRIBUTES",
        "RVALUESORT",
        "RSORT",
        "RLOWESS",
        "RESETS",
        "RENAME",
        "RELABEL",
        "RAWDTW",
        "RANGECOMPACT",
        "QUANTIZE",
        "PROB",
        "PATTERNS",
        "PATTERNDETECTION",
        "PARTITION",
        "PARSESELECTOR",
        "PARSE",
        "PAPPLY",
        "OPTIMIZE",
        "ONLYBUCKETS",
        "NSUMSUMSQ",
        "NORMALIZE",
        "NONEMPTY",
        "NEWGTS",
        "NEWENCODER",
        "NAME",
        "MUSIGMA",
        "MONOTONIC",
        "MODE",
        "METASORT",
        "METASET",
        "META",
        "MERGE",
        "MAXGTS",
        "mapper.percentile",
        "mapper.npdf",
        "mapper.mod",
        "mapper.median",
        "mapper.finite",
        "MAKEGTS",
        "LTTB",
        "LR",
        "LOWESS",
        "LOCSTRINGS",
        "LOCATIONS",
        "LOCATIONOFFSET",
        "LASTTICK",
        "LASTSORT",
        "LASTBUCKET",
        "LABELS",
        "KURTOSIS",
        "ISONORMALIZE",
        "INTEGRATE",
        "IFFT",
        "IDWT",
        "HYBRIDTEST2",
        "HYBRIDTEST",
        "GRUBBSTEST",
        "ENCODER->",
        "GEO.WITHIN",
        "GEO.INTERSECTS",
        "FUSE",
        "FIRSTTICK",
        "FINDSTATS",
        "FINDSETS",
        "FIND",
        "filter.latencies",
        "FILLVALUE",
        "FILLTICKS",
        "FILLPREVIOUS",
        "FILLNEXT",
        "FFTWINDOW",
        "FFTAP",
        "FFT",
        "FETCHSTRING",
        "FETCHLONG",
        "FETCHDOUBLE",
        "FETCHBOOLEAN",
        "FETCH",
        "FDWT",
        "ESDTEST",
        "EMPTY",
        "ELEVATIONS",
        "DWTSPLIT",
        "DTW",
        "DOUBLEEXPONENTIALSMOOTHING",
        "DISCORDS",
        "DELETE",
        "DEDUP",
        "CPROB",
        "CORRELATE",
        "COPYGEO",
        "COMPACT",
        "COMMONTICKS",
        "CLONEEMPTY",
        "CLONE",
        "CLIP",
        "CHUNK",
        "BUCKETSPAN",
        "BUCKETIZE",
        "BUCKETCOUNT",
        "BBOX",
        "ATTRIBUTES",
        "ATTICK",
        "ATINDEX",
        "ATBUCKET",
        "APPLY",
        "->GTS",
        "->DOUBLEBITS",
        "ADDVALUE",
        "LOGEVENT->",
        "TDESCRIBE",
        "TYPEOF",
        "STOP",
        "SECTION",
        "LINEON",
        "LINEOFF",
        "GETSECTION",
        "EXPORT",
        "ASSERTMSG",
        "ASSERT",
        "TOINTEXACT",
        "SUBTRACTEXACT",
        "SCALB",
        "RANDOM",
        "NEXTDOWN",
        "NEGATEEXACT",
        "MULTIPLYEXACT",
        "INCREMENTEXACT",
        "GETEXPONENT",
        "FLOORMOD",
        "FLOORDIV",
        "DECREMENTEXACT",
        "ADDEXACT",
        "~=",
        "~",
        "ULP",
        "TRANSPOSE",
        "TR",
        "TOBITS",
        "TANH",
        "TAN",
        "SRAND",
        "SQRT",
        "SINH",
        "SIN",
        "SIGNUM",
        "ROUND",
        "RINT",
        "REVBITS",
        "RANDPDF",
        "RAND",
        "pi",
        "PROBABILITY",
        "PRNG",
        "OPTDTW",
        "e",
        "NPDF",
        "NONNULL",
        "NEXTUP",
        "NEXTAFTER",
        "NBOUNDS",
        "MINLONG",
        "MIN",
        "MAXLONG",
        "MAX",
        "LOG1P",
        "LOG10",
        "LOG",
        "LBOUNDS",
        "VEC->",
        "PI",
        "ISNULL",
        "ISNaN",
        "INV",
        "MAT->",
        "HYPOT",
        "E",
        "FLOOR",
        "FDWT",
        ">=",
        "EXPM1",
        "EXP",
        ">",
        "==",
        "<=",
        "<",
        "DET",
        "COSH",
        "COS",
        "COPYSIGN",
        "CEIL",
        "CBRT",
        "ATAN2",
        "ATAN",
        "ASIN",
        "/",
        "->VEC",
        "->MAT",
        "->FLOATBITS",
        "->DOUBLEBITS",
        "ACOS",
        "ABS",
        "**",
        "+",
        "GROUPBY",
        "FILTERBY",
        "ZIP",
        "UNPACK",
        "UNLIST",
        "UNIQUE",
        "SUBLIST",
        "SORTBY",
        "SIZE",
        "SET",
        "REVERSE",
        "REMOVE",
        "PACK",
        "]",
        "LSORT",
        "[]",
        "[[]]",
        "LMAP",
        "[",
        "LFLATMAP",
        "VEC->",
        "V->",
        "IMMUTABLE",
        "MAT->",
        "LIST->",
        "GET",
        "FLATTEN",
        "CONTAINS",
        "CLONEREVERSE",
        "CLONE",
        "APPEND",
        "->VEC",
        "->MAT",
        "->LIST",
        "+!",
        "COUNTERSET",
        "RANGE",
        "COUNTERVALUE",
        "COUNTERDELTA",
        "COUNTER",
        "F",
        "T",
        "||",
        "reducer.and",
        "reducer.and.exclude-nulls",
        "OR",
        "NOT",
        "NONNULL",
        "mapper.or",
        "mapper.and",
        "ISNULL",
        "DEFINEDMACRO",
        "DEFINED",
        "CONTINUE",
        "bucketizer.or",
        "bucketizer.and",
        "BREAK",
        "AND",
        "&&",
        "!",
        "PshapeMode",
        "Pshape",
        "PloadShape",
        "Pvertex",
        "PupdatePixels",
        "Ptriangle",
        "Ptranslate",
        "Ptint",
        "PtextWidth",
        "PtextSize",
        "PtextMode",
        "PtextLeading",
        "PtextFont",
        "PtextDescent",
        "PtextAscent",
        "PtextAlign",
        "Ptext",
        "PstrokeWeight",
        "PstrokeJoin",
        "PstrokeCap",
        "Pstroke",
        "PsphereDetail",
        "Psphere",
        "PshearY",
        "PshearX",
        "Pset",
        "Pscale",
        "Psaturation",
        "Protate",
        "PresetMatrix",
        "Pred",
        "PrectMode",
        "Prect",
        "PquadraticVertex",
        "Pquad",
        "PpushStyle",
        "PpushMatrix",
        "PpopStyle",
        "PpopMatrix",
        "Ppoint",
        "Ppixels",
        "PnoTint",
        "PnoStroke",
        "Pnorm",
        "PnoFill",
        "PnoClip",
        "Pmap",
        "Pmag",
        "Pline",
        "PlerpColor",
        "Plerp",
        "PimageMode",
        "Pimage",
        "Phue",
        "Pgreen",
        "PGraphics",
        "Pget",
        "Pfill",
        "PendShape",
        "PendContour",
        "Pencode",
        "PellipseMode",
        "Pellipse",
        "Pdist",
        "Pdecode",
        "PcurveVertex",
        "PcurveTightness",
        "PcurveTangent",
        "PcurvePoint",
        "PcurveDetail",
        "Pcurve",
        "PcreateFont",
        "Pcopy",
        "Pconstrain",
        "PcolorMode",
        "Pcolor",
        "Pclip",
        "Pclear",
        "Pbrightness",
        "Pbox",
        "Pblue",
        "PblendMode",
        "Pblend",
        "PbezierVertex",
        "PbezierTangent",
        "PbezierPoint",
        "PbezierDetail",
        "Pbezier",
        "PbeginShape",
        "PbeginContour",
        "Pbackground",
        "Parc",
        "Palpha",
        "Pfilter",
        "MAN",
        "UUID",
        "RTFM",
        "MAN",
        "RTFM",
        "INFOMODE",
        "INFO",
        "DOCMODE",
        "DOC",
        "ZSCORETEST",
        "ZDISCORDS",
        "THRESHOLDTEST",
        "STLESDTEST",
        "HYBRIDTEST2",
        "HYBRIDTEST",
        "GRUBBSTEST",
        "ESDTEST",
        "DISCORDS",
        "ZDTW",
        "RAWDTW",
        "OPTDTW",
        "DTW",
        "WRAPRAWOPT",
        "WRAPRAW",
        "WRAP",
        "SETATTRIBUTES",
        "RENAME",
        "ENCODER->",
        "CHUNKENCODER",
        "->GTS",
        "->ENCODER",
        "WEBCALL",
        "w",
        "us",
        "TSELEMENTS",
        "TOTIMESTAMP",
        "STU",
        "s",
        "ps",
        "ns",
        "NOW",
        "NOTBEFORE",
        "NOTAFTER",
        "MSTU",
        "ms",
        "m",
        "TSELEMENTS->",
        "ISO8601",
        "HUMANDURATION",
        "h",
        "d",
        "->TSELEMENTS",
        "AGO",
        "ADDYEARS",
        "ADDMONTHS",
        "ADDDAYS",
        "VALUELIST",
        "UNMAP",
        "}",
        "{}",
        "{",
        "SUBMAP",
        "SIZE",
        "REMOVE",
        "PUT",
        "MSORT",
        "MAPID",
        "KEYLIST",
        "IMMUTABLE",
        "MAP->",
        "GET",
        "CONTAINSVALUE",
        "CONTAINSKEY",
        "CLONE",
        "APPEND",
        "->MAP",
        "~=",
        "~",
        "||",
        "|",
        "SIGNUM",
        "OR",
        "op.sub",
        "op.or",
        "op.or.ignore-nulls",
        "op.negmask",
        "op.ne",
        "op.mul",
        "op.mul.ignore-nulls",
        "op.mask",
        "op.lt",
        "op.le",
        "op.gt",
        "op.ge",
        "op.eq",
        "op.div",
        "op.and",
        "op.and.ignore-nulls",
        "op.add",
        "op.add.ignore-nulls",
        "^",
        "LOG10",
        "LOG",
        "IEEEREMAINDER",
        ">>>",
        ">>",
        ">=",
        ">",
        "==",
        "<=",
        "<<",
        "<",
        "AND",
        "/",
        "-",
        "**",
        "*",
        "+!",
        "+",
        "&&",
        "&",
        "%",
        "!=",
        "~",
        "|",
        "TOBIN",
        "^",
        "HEXTOBIN",
        "FLOATBITS->",
        "DOUBLEBITS->",
        "BIN->",
        "FROMBITS",
        "FROMBIN",
        "BYTESTOBITS",
        "BITSTOBYTES",
        "BITGET",
        "BITCOUNT",
        "BINTOHEX",
        "->BIN",
        "&",
        "URLENCODE",
        "URLDECODE",
        "TRIM",
        "TOUPPER",
        "TOSTRING",
        "TOLOWER",
        "TOBIN",
        "TEMPLATE",
        "SUBSTRING",
        "SPLIT",
        "SMARTPARSE",
        "SIZE",
        "REVERSE",
        "REPLACEALL",
        "REPLACE",
        "REOPTALT",
        "PARSE",
        "MATCHER",
        "MATCH",
        "JOIN",
        "HASH",
        "BIN->",
        "B64URL->",
        "B64->",
        "BYTES->",
        "CLONEREVERSE",
        "BINTOHEX",
        "B64TOHEX",
        "->B64URL",
        "->B64",
        "UNSECURE",
        "SHA256HMAC",
        "SHA256",
        "SHA1HMAC",
        "SHA1",
        "SECUREKEY",
        "SECURE",
        "RSAVERIFY",
        "RSASIGN",
        "RSAPUBLIC",
        "RSAPRIVATE",
        "RSAGEN",
        "RSAENCRYPT",
        "RSADECRYPT",
        "MD5",
        "EVALSECURE",
        "AESWRAP",
        "AESUNWRAP",
        "UNION",
        "SET->",
        "INTERSECTION",
        "IMMUTABLE",
        "DIFFERENCE",
        "->SET",
        ")",
        "()",
        "(",
        "UNGZIP",
        "TOTIMESTAMP",
        "TOSTRING",
        "TORADIANS",
        "TOLONG",
        "TOHEX",
        "TODOUBLE",
        "TODEGREES",
        "TOBOOLEAN",
        "TOBIN",
        "OPB64TOHEX",
        "Z->",
        "VEC->",
        "V->",
        "OPB64->",
        "MAT->",
        "MAP->",
        "LIST->",
        "HEXTOBIN",
        "HEXTOB64",
        "HEX->",
        "JSON->",
        "FLOATBITS->",
        "GZIP",
        "ENCODER->",
        "DOUBLEBITS->",
        "BIN->",
        "B64URL->",
        "B64->",
        "FROMHEX",
        "FROMBITS",
        "FROMBIN",
        "BYTES->",
        "BYTESTOBITS",
        "BITSTOBYTES",
        "BINTOHEX",
        "B64TOHEX",
        "->Z",
        "->VEC",
        "->V",
        "->OPB64",
        "->MAT",
        "->MAP",
        "->LIST",
        "->JSON",
        "->HEX",
        "->GTS",
        "->ENCODER",
        "->BYTES",
        "->BIN",
        "->B64URL",
        "->B64",
        "TSELEMENTS",
        "STU",
        "NOW",
        "MSTU",
        "TSELEMENTS->",
        "ISODURATION",
        "ISO8601",
        "HUMANDURATION",
        "DURATION",
        "->TSELEMENTS",
        "TANH",
        "TAN",
        "SINH",
        "SIN",
        "HYPOT",
        "COSH",
        "COS",
        "ATAN2",
        "ATAN",
        "ASIN",
        "ACOS",
        "SWITCH",
        "RETURN",
        "RETHROW",
        "IFTE",
        "IFT",
        "STL",
        "MAXBUCKETS",
        "MACROBUCKETIZER",
        "LASTBUCKET",
        "INTERPOLATE",
        "FILLVALUE",
        "FILLPREVIOUS",
        "FILLNEXT",
        "CROP",
        "BUCKETSPAN",
        "BUCKETIZE",
        "BUCKETCOUNT",
        "ATBUCKET",
        "SKEWNESS",
        "SINGLEEXPONENTIALSMOOTHING",
        "RANDPDF",
        "PROBABILITY",
        "PROB",
        "LR",
        "KURTOSIS",
        "DOUBLEEXPONENTIALSMOOTHING",
        "ROTATIONQ",
        "QROTATION",
        "QROTATE",
        "QMULTIPLY",
        "QDIVIDE",
        "QCONJUGATE",
        "Q->",
        "->Q",
        "REDUCE",
        "PREDUCE",
        "PFILTER",
        "PAPPLY",
        "max.time.sliding.window",
        "max.tick.sliding.window",
        "MAP",
        "FILTER",
        "BUCKETIZE",
        "APPLY",
        "PIGSCHEMA",
        "]]",
        "[[",
        "V->",
        "->V",
        "PAPPLY",
        "APPLY",
        "mapper.truecourse",
        "mapper.hdist",
        "mapper.geo.within",
        "mapper.geo.outside",
        "mapper.geo.clear",
        "mapper.geo.approximate",
        "LOCSTRINGS",
        "LOCATIONS",
        "HAVERSINE",
        "HHCODE->",
        "GEOHASH->",
        "GEOUNPACK",
        "GEOPACK",
        "GEO.WKT",
        "GEO.WKT.UNIFORM",
        "GEO.WITHIN",
        "GEO.UNION",
        "GEO.REGEXP",
        "GEO.OPTIMIZE",
        "GEO.JSON",
        "GEO.JSON.UNIFORM",
        "GEO.INTERSECTS",
        "GEO.INTERSECTION",
        "GEO.DIFFERENCE",
        "ELEVATIONS",
        "BBOX",
        "->HHCODELONG",
        "->HHCODE",
        "->GEOHASH",
        "BYTESTOBITS",
        "BITSTOBYTES",
        "BITGET",
        "BITCOUNT"
    ],
    "constants": [
        "F",
        "T",
        "pi",
        "e",
        "NULL",
        "NaN",
        "MINLONG",
        "MAXLONG",
        "PI",
        "E"
    ],
    "functions": [
        "reducer.rms.exclude-nulls",
        "reducer.rms",
        "STRICTREDUCER",
        "reducer.var",
        "reducer.var.forbid-nulls",
        "reducer.sum",
        "reducer.sum.nonnull",
        "reducer.sum.forbid-nulls",
        "reducer.shannonentropy.1",
        "reducer.shannonentropy.0",
        "reducer.sd",
        "reducer.sd.forbid-nulls",
        "reducer.product",
        "reducer.percentile",
        "reducer.or",
        "reducer.or.exclude-nulls",
        "reducer.min",
        "reducer.min.nonnull",
        "reducer.min.forbid-nulls",
        "reducer.median",
        "reducer.mean",
        "reducer.mean.exclude-nulls",
        "reducer.mean.circular",
        "reducer.mean.circular.exclude-nulls",
        "reducer.max",
        "reducer.max.nonnull",
        "reducer.max.forbid-nulls",
        "reducer.mad",
        "reducer.join",
        "reducer.join.urlencoded",
        "reducer.join.nonnull",
        "reducer.join.forbid-nulls",
        "reducer.count",
        "reducer.count.nonnull",
        "reducer.count.include-nulls",
        "reducer.count.exclude-nulls",
        "reducer.argmin",
        "reducer.argmax",
        "reducer.and",
        "reducer.and.exclude-nulls",
        "REDUCE",
        "PREDUCE",
        "MACROREDUCER",
        "mapper.rms",
        "STRICTMAPPER",
        "max.time.sliding.window",
        "max.tick.sliding.window",
        "mapper.year",
        "mapper.weekday",
        "mapper.vspeed",
        "mapper.vdist",
        "mapper.var",
        "mapper.var.forbid-nulls",
        "mapper.truecourse",
        "mapper.tostring",
        "mapper.tolong",
        "mapper.todouble",
        "mapper.toboolean",
        "mapper.tick",
        "mapper.tanh",
        "mapper.sum",
        "mapper.sum.forbid-nulls",
        "mapper.sqrt",
        "mapper.sigmoid",
        "mapper.second",
        "mapper.sd",
        "mapper.sd.forbid-nulls",
        "mapper.round",
        "mapper.replace",
        "mapper.rate",
        "mapper.product",
        "mapper.pow",
        "mapper.percentile",
        "mapper.parsedouble",
        "mapper.or",
        "mapper.npdf",
        "mapper.ne",
        "mapper.mul",
        "mapper.month",
        "mapper.mod",
        "mapper.minute",
        "mapper.min",
        "mapper.min.x",
        "mapper.min.forbid-nulls",
        "mapper.median",
        "mapper.mean",
        "mapper.mean.exclude-nulls",
        "mapper.mean.circular",
        "mapper.mean.circular.exclude-nulls",
        "mapper.max",
        "mapper.max.x",
        "mapper.max.forbid-nulls",
        "mapper.mad",
        "mapper.lt",
        "mapper.lowest",
        "mapper.log",
        "mapper.le",
        "mapper.last",
        "mapper.kernel.uniform",
        "mapper.kernel.triweight",
        "mapper.kernel.tricube",
        "mapper.kernel.triangular",
        "mapper.kernel.silverman",
        "mapper.kernel.quartic",
        "mapper.kernel.logistic",
        "mapper.kernel.gaussian",
        "mapper.kernel.epanechnikov",
        "mapper.kernel.cosine",
        "mapper.join",
        "mapper.join.forbid-nulls",
        "mapper.hspeed",
        "mapper.hour",
        "mapper.highest",
        "mapper.hdist",
        "mapper.gt",
        "mapper.geo.within",
        "mapper.geo.outside",
        "mapper.geo.clear",
        "mapper.geo.approximate",
        "mapper.ge",
        "mapper.floor",
        "mapper.first",
        "mapper.finite",
        "mapper.exp",
        "mapper.eq",
        "mapper.dotproduct",
        "mapper.dotproduct.tanh",
        "mapper.dotproduct.sigmoid",
        "mapper.dotproduct.positive",
        "mapper.delta",
        "mapper.day",
        "mapper.count",
        "mapper.count.nonnull",
        "mapper.count.include-nulls",
        "mapper.count.exclude-nulls",
        "mapper.ceil",
        "mapper.and",
        "mapper.add",
        "mapper.abs",
        "MAP",
        "MACROMAPPER",
        "bucketizer.rms",
        "bucketizer.sum",
        "bucketizer.sum.forbid-nulls",
        "bucketizer.percentile",
        "bucketizer.or",
        "bucketizer.min",
        "bucketizer.min.forbid-nulls",
        "bucketizer.median",
        "bucketizer.mean",
        "bucketizer.mean.exclude-nulls",
        "bucketizer.mean.circular",
        "bucketizer.mean.circular.exclude-nulls",
        "bucketizer.max",
        "bucketizer.max.forbid-nulls",
        "bucketizer.mad",
        "bucketizer.last",
        "bucketizer.join",
        "bucketizer.join.forbid-nulls",
        "bucketizer.first",
        "bucketizer.count",
        "bucketizer.count.nonnull",
        "bucketizer.count.include-nulls",
        "bucketizer.count.exclude-nulls",
        "bucketizer.and",
        "BUCKETIZE",
        "PFILTER",
        "MACROFILTER",
        "FILTER",
        "filter.latencies",
        "filter.last.ne",
        "filter.last.lt",
        "filter.last.le",
        "filter.last.gt",
        "filter.last.ge",
        "filter.last.eq",
        "filter.bymetadata",
        "filter.bylabelsattr",
        "filter.bylabels",
        "filter.byclass",
        "filter.byattr"
    ],
    "control": [
        "WHILE",
        "UNTIL",
        "UDF",
        "TRY",
        "NRETURN",
        "MSGFAIL",
        "FORSTEP",
        "FOREACH",
        "FOR",
        "FAIL",
        "EVAL",
        "DEFINEDMACRO",
        "DEFINED",
        "CUDF",
        "CONTINUE",
        "BREAK"
    ],
    "operators": [
        "&",
        "^",
        "|",
        ">>>",
        "~",
        "<<",
        ">>",
        "!=",
        "<",
        ">",
        "~=",
        "<=",
        "==",
        ">=",
        "%",
        "*",
        "+",
        "-",
        "/",
        "**",
        "!",
        "&&",
        "AND",
        "OR",
        "NOT",
        "&",
        "^",
        "|",
        ">>>",
        "~",
        "<<",
        ">>"
    ],
    "escapes": "\\\\(?:[abfnrtv\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})",
    "tokenizer": {
        "root": [
            [
                "\\@[A-Za-z0-9._\\/]+",
                "variable"
            ],
            [
                "\\$[A-Za-z0-9._\\/]+",
                "variable"
            ],
            [
                "true|false",
                "number"
            ],
            [
                "[A-Za-z_][.\\w$]*",
                {
                    "cases": {
                        "@constants": "regexp",
                        "@keywords": "keyword",
                        "@functions": "type",
                        "@control": "metatag",
                        "@default": "identifier"
                    }
                }
            ],
            [
                "[{}()[\\]]",
                "@brackets"
            ],
            [
                "\\d*\\.\\d+([eE][-+]?\\d+)?[fFdD]?",
                "number.float"
            ],
            [
                "0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?",
                "number.hex"
            ],
            [
                "0[0-7_]*[0-7][Ll]?",
                "number.octal"
            ],
            [
                "0[bB][0-1_]*[0-1][Ll]?",
                "number.binary"
            ],
            [
                "\\d+[lL]?",
                "number"
            ],
            {
                "include": "@whitespace"
            },
            [
                "\"([^\"\\\\]|\\\\.)*$",
                "string.invalid"
            ],
            [
                "\"",
                "string",
                "@string"
            ],
            [
                "'([^'\\\\]|\\\\.)*$",
                "string.invalid"
            ],
            [
                "'",
                "string",
                "@string2"
            ],
            [
                "<'",
                "string",
                "@string3"
            ]
        ],
        "whitespace": [
            [
                "[ \\t\\r\\n]+",
                "white"
            ],
            [
                "\\/\\*",
                "comment",
                "@comment"
            ],
            [
                "\\/\\/.*$",
                "comment"
            ]
        ],
        "comment": [
            [
                "[^\\/*]+",
                "comment"
            ],
            [
                "\\/\\*",
                "comment.invalid"
            ],
            [
                "\\*/",
                "comment",
                "@pop"
            ],
            [
                "[\\/*]",
                "comment"
            ]
        ],
        "string": [
            [
                "[^\\\"]+",
                "string"
            ],
            [
                "@escapes",
                "string.escape"
            ],
            [
                "\\.",
                "string.escape.invalid"
            ],
            [
                "\"",
                "string",
                "@pop"
            ]
        ],
        "string2": [
            [
                "[^\\']+",
                "string"
            ],
            [
                "@escapes",
                "string.escape"
            ],
            [
                "\\.",
                "string.escape.invalid"
            ],
            [
                "'",
                "string",
                "@pop"
            ]
        ],
        "string3": [
            [
                "[^\\(<')]+",
                "string"
            ],
            [
                "'>",
                "string",
                "@pop"
            ]
        ]
    }
};
      }