// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fnaufalzhafran_2FDocuments_2F2023_2FSalman_20Digital_20Lab_2Fjambore_amki_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGUoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9wcm9maWxlLzpwYXRoKiJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2F1dGgoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9hdXRoLzpwYXRoKiJ9XQ_3D_3D_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGUoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9wcm9maWxlLzpwYXRoKiJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2F1dGgoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9hdXRoLzpwYXRoKiJ9XX0_3D_)
});

// NAMESPACE OBJECT: ./middleware.ts
var middleware_namespaceObject = {};
__webpack_require__.r(middleware_namespaceObject);
__webpack_require__.d(middleware_namespaceObject, {
  config: () => (config),
  middleware: () => (middleware)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/utils.js
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : normalizeLocalePath(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var spec_extension_cookies = __webpack_require__(423);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        validateURL(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new NextURL(url, {
            headers: toNodeOutgoingHttpHeaders(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new spec_extension_cookies/* RequestCookies */.q(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js



const response_INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[response_INTERNALS] = {
            cookies: new spec_extension_cookies/* ResponseCookies */.n(this.headers),
            url: init.url ? new NextURL(init.url, {
                headers: toNodeOutgoingHttpHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[response_INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc"; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js

const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}
/**
 * Headers that are set by the Next.js server and should be stripped from the
 * request headers going to the user's application.
 */ const INTERNAL_HEADERS = (/* unused pure expression or super */ null && ([
    "x-invoke-path",
    "x-invoke-status",
    "x-invoke-error",
    "x-invoke-query",
    "x-invoke-output",
    "x-middleware-invoke"
]));
/**
 * Strip internal headers from the request headers.
 *
 * @param headers the headers to strip of internal headers
 */ function stripInternalHeaders(headers) {
    for (const key of INTERNAL_HEADERS){
        delete headers[key];
    }
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js


/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
const ESLINT_DEFAULT_DIRS = (/* unused pure expression or super */ null && ([
    "app",
    "pages",
    "components",
    "lib",
    "src"
]));
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
            // plus middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
 //# sourceMappingURL=constants.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js
var adapters_headers = __webpack_require__(150);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js
var request_cookies = __webpack_require__(734);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/index.js


/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = adapters_headers/* HeadersAdapter */.h.from(req.headers);
    const previewModeId = headers.get(PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(104);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = adapters_headers/* HeadersAdapter */.h.from(headers);
    for (const param of FLIGHT_PARAMETERS){
        cleaned.delete(param.toString().toLowerCase());
    }
    return adapters_headers/* HeadersAdapter */.h.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(adapters_headers/* HeadersAdapter */.h.from(headers));
    return request_cookies/* RequestCookiesAdapter */.Qb.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(adapters_headers/* HeadersAdapter */.h.from(headers));
    return request_cookies/* MutableRequestCookiesAdapter */.vr.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js
var request_async_storage_external = __webpack_require__(37);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = fromNodeOutgoingHttpHeaders(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    // we only care to make async storage available for middleware
    const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
    if (isMiddleware) {
        response = await RequestAsyncStorageWrapper.wrap(request_async_storage_external/* requestAsyncStorage */.F, {
            req: request,
            renderOpts: {
                onUpdateCookies: (cookies)=>{
                    cookiesFromResponse = cookies;
                },
                // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                    previewModeId: "development-id",
                    previewModeEncryptionKey: "",
                    previewModeSigningKey: ""
                }
            }
        }, ()=>params.handler(request, event));
    } else {
        response = await params.handler(request, event);
    }
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : NextResponse.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

;// CONCATENATED MODULE: ./node_modules/pocketbase/dist/pocketbase.es.mjs
function __awaiter(e, t, i, s) {
    return new (i || (i = Promise))(function(n, o) {
        function fulfilled(e) {
            try {
                step(s.next(e));
            } catch (e) {
                o(e);
            }
        }
        function rejected(e) {
            try {
                step(s.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function step(e) {
            e.done ? n(e.value) : (function adopt(e) {
                return e instanceof i ? e : new i(function(t) {
                    t(e);
                });
            })(e.value).then(fulfilled, rejected);
        }
        step((s = s.apply(e, t || [])).next());
    });
}
"function" == typeof SuppressedError && SuppressedError;
class ClientResponseError extends Error {
    constructor(e){
        var t, i, s, n;
        super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = !1, this.originalError = null, Object.setPrototypeOf(this, ClientResponseError.prototype), null !== e && "object" == typeof e && (this.url = "string" == typeof e.url ? e.url : "", this.status = "number" == typeof e.status ? e.status : 0, this.isAbort = !!e.isAbort, this.originalError = e.originalError, null !== e.response && "object" == typeof e.response ? this.response = e.response : null !== e.data && "object" == typeof e.data ? this.response = e.data : this.response = {}), this.originalError || e instanceof ClientResponseError || (this.originalError = e), "undefined" != typeof DOMException && e instanceof DOMException && (this.isAbort = !0), this.name = "ClientResponseError " + this.status, this.message = null === (t = this.response) || void 0 === t ? void 0 : t.message, this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : (null === (n = null === (s = null === (i = this.originalError) || void 0 === i ? void 0 : i.cause) || void 0 === s ? void 0 : s.message) || void 0 === n ? void 0 : n.includes("ECONNREFUSED ::1")) ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong while processing your request.");
    }
    get data() {
        return this.response;
    }
    toJSON() {
        return Object.assign({}, this);
    }
}
const e = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function cookieParse(e, t) {
    const i = {};
    if ("string" != typeof e) return i;
    const s = Object.assign({}, t || {}).decode || defaultDecode;
    let n = 0;
    for(; n < e.length;){
        const t = e.indexOf("=", n);
        if (-1 === t) break;
        let o = e.indexOf(";", n);
        if (-1 === o) o = e.length;
        else if (o < t) {
            n = e.lastIndexOf(";", t - 1) + 1;
            continue;
        }
        const r = e.slice(n, t).trim();
        if (void 0 === i[r]) {
            let n = e.slice(t + 1, o).trim();
            34 === n.charCodeAt(0) && (n = n.slice(1, -1));
            try {
                i[r] = s(n);
            } catch (e) {
                i[r] = n;
            }
        }
        n = o + 1;
    }
    return i;
}
function cookieSerialize(t, i, s) {
    const n = Object.assign({}, s || {}), o = n.encode || defaultEncode;
    if (!e.test(t)) throw new TypeError("argument name is invalid");
    const r = o(i);
    if (r && !e.test(r)) throw new TypeError("argument val is invalid");
    let a = t + "=" + r;
    if (null != n.maxAge) {
        const e = n.maxAge - 0;
        if (isNaN(e) || !isFinite(e)) throw new TypeError("option maxAge is invalid");
        a += "; Max-Age=" + Math.floor(e);
    }
    if (n.domain) {
        if (!e.test(n.domain)) throw new TypeError("option domain is invalid");
        a += "; Domain=" + n.domain;
    }
    if (n.path) {
        if (!e.test(n.path)) throw new TypeError("option path is invalid");
        a += "; Path=" + n.path;
    }
    if (n.expires) {
        if (!function isDate(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date;
        }(n.expires) || isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        a += "; Expires=" + n.expires.toUTCString();
    }
    if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.priority) {
        switch("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority){
            case "low":
                a += "; Priority=Low";
                break;
            case "medium":
                a += "; Priority=Medium";
                break;
            case "high":
                a += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid");
        }
    }
    if (n.sameSite) {
        switch("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite){
            case !0:
                a += "; SameSite=Strict";
                break;
            case "lax":
                a += "; SameSite=Lax";
                break;
            case "strict":
                a += "; SameSite=Strict";
                break;
            case "none":
                a += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return a;
}
function defaultDecode(e) {
    return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
}
function defaultEncode(e) {
    return encodeURIComponent(e);
}
let t;
function getTokenPayload(e) {
    if (e) try {
        const i = decodeURIComponent(t(e.split(".")[1]).split("").map(function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(i) || {};
    } catch (e) {}
    return {};
}
function isTokenExpired(e, t = 0) {
    let i = getTokenPayload(e);
    return !(Object.keys(i).length > 0 && (!i.exp || i.exp - t > Date.now() / 1e3));
}
t = "function" == typeof atob ? atob : (e)=>{
    let t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    for(var i, s, n = 0, o = 0, r = ""; s = t.charAt(o++); ~s && (i = n % 4 ? 64 * i + s : s, n++ % 4) ? r += String.fromCharCode(255 & i >> (-2 * n & 6)) : 0)s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);
    return r;
};
const i = "pb_auth";
class BaseAuthStore {
    constructor(){
        this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
    }
    get token() {
        return this.baseToken;
    }
    get model() {
        return this.baseModel;
    }
    get isValid() {
        return !isTokenExpired(this.token);
    }
    get isAdmin() {
        return "admin" === getTokenPayload(this.token).type;
    }
    get isAuthRecord() {
        return "authRecord" === getTokenPayload(this.token).type;
    }
    save(e, t) {
        this.baseToken = e || "", this.baseModel = t || null, this.triggerChange();
    }
    clear() {
        this.baseToken = "", this.baseModel = null, this.triggerChange();
    }
    loadFromCookie(e, t = i) {
        const s = cookieParse(e || "")[t] || "";
        let n = {};
        try {
            n = JSON.parse(s), (null === typeof n || "object" != typeof n || Array.isArray(n)) && (n = {});
        } catch (e) {}
        this.save(n.token || "", n.model || null);
    }
    exportToCookie(e, t = i) {
        var s, n;
        const o = {
            secure: !0,
            sameSite: !0,
            httpOnly: !0,
            path: "/"
        }, r = getTokenPayload(this.token);
        (null == r ? void 0 : r.exp) ? o.expires = new Date(1e3 * r.exp) : o.expires = new Date("1970-01-01"), e = Object.assign({}, o, e);
        const a = {
            token: this.token,
            model: this.model ? JSON.parse(JSON.stringify(this.model)) : null
        };
        let l = cookieSerialize(t, JSON.stringify(a), e);
        const c = "undefined" != typeof Blob ? new Blob([
            l
        ]).size : l.length;
        if (a.model && c > 4096) {
            a.model = {
                id: null === (s = null == a ? void 0 : a.model) || void 0 === s ? void 0 : s.id,
                email: null === (n = null == a ? void 0 : a.model) || void 0 === n ? void 0 : n.email
            };
            const i = [
                "collectionId",
                "username",
                "verified"
            ];
            for(const e in this.model)i.includes(e) && (a.model[e] = this.model[e]);
            l = cookieSerialize(t, JSON.stringify(a), e);
        }
        return l;
    }
    onChange(e, t = !1) {
        return this._onChangeCallbacks.push(e), t && e(this.token, this.model), ()=>{
            for(let t = this._onChangeCallbacks.length - 1; t >= 0; t--)if (this._onChangeCallbacks[t] == e) return delete this._onChangeCallbacks[t], void this._onChangeCallbacks.splice(t, 1);
        };
    }
    triggerChange() {
        for (const e of this._onChangeCallbacks)e && e(this.token, this.model);
    }
}
class LocalAuthStore extends BaseAuthStore {
    constructor(e = "pocketbase_auth"){
        super(), this.storageFallback = {}, this.storageKey = e, this._bindStorageEvent();
    }
    get token() {
        return (this._storageGet(this.storageKey) || {}).token || "";
    }
    get model() {
        return (this._storageGet(this.storageKey) || {}).model || null;
    }
    save(e, t) {
        this._storageSet(this.storageKey, {
            token: e,
            model: t
        }), super.save(e, t);
    }
    clear() {
        this._storageRemove(this.storageKey), super.clear();
    }
    _storageGet(e) {
        if (false) {}
        return this.storageFallback[e];
    }
    _storageSet(e, t) {
        if (false) {} else this.storageFallback[e] = t;
    }
    _storageRemove(e) {
        var t;
         false && (0), delete this.storageFallback[e];
    }
    _bindStorageEvent() {
         false && 0;
    }
}
class BaseService {
    constructor(e){
        this.client = e;
    }
}
class SettingsService extends BaseService {
    getAll(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/settings", e);
    }
    update(e, t) {
        return t = Object.assign({
            method: "PATCH",
            body: e
        }, t), this.client.send("/api/settings", t);
    }
    testS3(e = "storage", t) {
        return t = Object.assign({
            method: "POST",
            body: {
                filesystem: e
            }
        }, t), this.client.send("/api/settings/test/s3", t).then(()=>!0);
    }
    testEmail(e, t, i) {
        return i = Object.assign({
            method: "POST",
            body: {
                email: e,
                template: t
            }
        }, i), this.client.send("/api/settings/test/email", i).then(()=>!0);
    }
    generateAppleClientSecret(e, t, i, s, n, o) {
        return o = Object.assign({
            method: "POST",
            body: {
                clientId: e,
                teamId: t,
                keyId: i,
                privateKey: s,
                duration: n
            }
        }, o), this.client.send("/api/settings/apple/generate-client-secret", o);
    }
}
class CrudService extends BaseService {
    decode(e) {
        return e;
    }
    getFullList(e, t) {
        if ("number" == typeof e) return this._getFullList(e, t);
        let i = 500;
        return (t = Object.assign({}, e, t)).batch && (i = t.batch, delete t.batch), this._getFullList(i, t);
    }
    getList(e = 1, t = 30, i) {
        return (i = Object.assign({
            method: "GET"
        }, i)).query = Object.assign({
            page: e,
            perPage: t
        }, i.query), this.client.send(this.baseCrudPath, i).then((e)=>{
            var t;
            return e.items = (null === (t = e.items) || void 0 === t ? void 0 : t.map((e)=>this.decode(e))) || [], e;
        });
    }
    getFirstListItem(e, t) {
        return (t = Object.assign({
            requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e
        }, t)).query = Object.assign({
            filter: e,
            skipTotal: 1
        }, t.query), this.getList(1, 1, t).then((e)=>{
            var t;
            if (!(null === (t = null == e ? void 0 : e.items) || void 0 === t ? void 0 : t.length)) throw new ClientResponseError({
                status: 404,
                data: {
                    code: 404,
                    message: "The requested resource wasn't found.",
                    data: {}
                }
            });
            return e.items[0];
        });
    }
    getOne(e, t) {
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then((e)=>this.decode(e));
    }
    create(e, t) {
        return t = Object.assign({
            method: "POST",
            body: e
        }, t), this.client.send(this.baseCrudPath, t).then((e)=>this.decode(e));
    }
    update(e, t, i) {
        return i = Object.assign({
            method: "PATCH",
            body: t
        }, i), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), i).then((e)=>this.decode(e));
    }
    delete(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(()=>!0);
    }
    _getFullList(e = 500, t) {
        (t = t || {}).query = Object.assign({
            skipTotal: 1
        }, t.query);
        let i = [], request = (s)=>__awaiter(this, void 0, void 0, function*() {
                return this.getList(s, e || 500, t).then((e)=>{
                    const t = e.items;
                    return i = i.concat(t), t.length == e.perPage ? request(s + 1) : i;
                });
            });
        return request(1);
    }
}
function normalizeLegacyOptionsArgs(e, t, i, s) {
    const n = void 0 !== s;
    return n || void 0 !== i ? n ? (console.warn(e), t.body = Object.assign({}, t.body, i), t.query = Object.assign({}, t.query, s), t) : Object.assign(t, i) : t;
}
function resetAutoRefresh(e) {
    var t, i;
    null === (i = (t = e)._resetAutoRefresh) || void 0 === i || i.call(t);
}
class AdminService extends CrudService {
    get baseCrudPath() {
        return "/api/admins";
    }
    update(e, t, i) {
        return super.update(e, t, i).then((e)=>{
            var t, i;
            return (null === (t = this.client.authStore.model) || void 0 === t ? void 0 : t.id) === e.id && void 0 === (null === (i = this.client.authStore.model) || void 0 === i ? void 0 : i.collectionId) && this.client.authStore.save(this.client.authStore.token, e), e;
        });
    }
    delete(e, t) {
        return super.delete(e, t).then((t)=>{
            var i, s;
            return t && (null === (i = this.client.authStore.model) || void 0 === i ? void 0 : i.id) === e && void 0 === (null === (s = this.client.authStore.model) || void 0 === s ? void 0 : s.collectionId) && this.client.authStore.clear(), t;
        });
    }
    authResponse(e) {
        const t = this.decode((null == e ? void 0 : e.admin) || {});
        return (null == e ? void 0 : e.token) && (null == e ? void 0 : e.admin) && this.client.authStore.save(e.token, t), Object.assign({}, e, {
            token: (null == e ? void 0 : e.token) || "",
            admin: t
        });
    }
    authWithPassword(e, t, i, s) {
        return __awaiter(this, void 0, void 0, function*() {
            let n = {
                method: "POST",
                body: {
                    identity: e,
                    password: t
                }
            };
            n = normalizeLegacyOptionsArgs("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).", n, i, s);
            const o = n.autoRefreshThreshold;
            delete n.autoRefreshThreshold, n.autoRefresh || resetAutoRefresh(this.client);
            let r = yield this.client.send(this.baseCrudPath + "/auth-with-password", n);
            return r = this.authResponse(r), o && function registerAutoRefresh(e, t, i, s) {
                resetAutoRefresh(e);
                const n = e.beforeSend, o = e.authStore.model, r = e.authStore.onChange((t, i)=>{
                    (!t || (null == i ? void 0 : i.id) != (null == o ? void 0 : o.id) || ((null == i ? void 0 : i.collectionId) || (null == o ? void 0 : o.collectionId)) && (null == i ? void 0 : i.collectionId) != (null == o ? void 0 : o.collectionId)) && resetAutoRefresh(e);
                });
                e._resetAutoRefresh = function() {
                    r(), e.beforeSend = n, delete e._resetAutoRefresh;
                }, e.beforeSend = (o, r)=>__awaiter(this, void 0, void 0, function*() {
                        var a;
                        const l = e.authStore.token;
                        if (null === (a = r.query) || void 0 === a ? void 0 : a.autoRefresh) return n ? n(o, r) : {
                            url: o,
                            sendOptions: r
                        };
                        let c = e.authStore.isValid;
                        if (c && isTokenExpired(e.authStore.token, t)) try {
                            yield i();
                        } catch (e) {
                            c = !1;
                        }
                        c || (yield s());
                        const d = r.headers || {};
                        for(let t in d)if ("authorization" == t.toLowerCase() && l == d[t] && e.authStore.token) {
                            d[t] = e.authStore.token;
                            break;
                        }
                        return r.headers = d, n ? n(o, r) : {
                            url: o,
                            sendOptions: r
                        };
                    });
            }(this.client, o, ()=>this.authRefresh({
                    autoRefresh: !0
                }), ()=>this.authWithPassword(e, t, Object.assign({
                    autoRefresh: !0
                }, n))), r;
        });
    }
    authRefresh(e, t) {
        let i = {
            method: "POST"
        };
        return i = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", i, e, t), this.client.send(this.baseCrudPath + "/auth-refresh", i).then(this.authResponse.bind(this));
    }
    requestPasswordReset(e, t, i) {
        let s = {
            method: "POST",
            body: {
                email: e
            }
        };
        return s = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", s, t, i), this.client.send(this.baseCrudPath + "/request-password-reset", s).then(()=>!0);
    }
    confirmPasswordReset(e, t, i, s, n) {
        let o = {
            method: "POST",
            body: {
                token: e,
                password: t,
                passwordConfirm: i
            }
        };
        return o = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).", o, s, n), this.client.send(this.baseCrudPath + "/confirm-password-reset", o).then(()=>!0);
    }
}
class RealtimeService extends BaseService {
    constructor(){
        super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentTopics = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [
            200,
            300,
            500,
            1e3,
            1200,
            1500,
            2e3
        ], this.pendingConnects = [];
    }
    get isConnected() {
        return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
    }
    subscribe(e, t) {
        var i;
        return __awaiter(this, void 0, void 0, function*() {
            if (!e) throw new Error("topic must be set.");
            const listener = function(e) {
                const i = e;
                let s;
                try {
                    s = JSON.parse(null == i ? void 0 : i.data);
                } catch (e) {}
                t(s || {});
            };
            return this.subscriptions[e] || (this.subscriptions[e] = []), this.subscriptions[e].push(listener), this.isConnected ? 1 === this.subscriptions[e].length ? yield this.submitSubscriptions() : null === (i = this.eventSource) || void 0 === i || i.addEventListener(e, listener) : yield this.connect(), ()=>__awaiter(this, void 0, void 0, function*() {
                    return this.unsubscribeByTopicAndListener(e, listener);
                });
        });
    }
    unsubscribe(e) {
        var t;
        return __awaiter(this, void 0, void 0, function*() {
            if (this.hasSubscriptionListeners(e)) {
                if (e) {
                    for (let i of this.subscriptions[e])null === (t = this.eventSource) || void 0 === t || t.removeEventListener(e, i);
                    delete this.subscriptions[e];
                } else this.subscriptions = {};
                this.hasSubscriptionListeners() ? this.hasSubscriptionListeners(e) || (yield this.submitSubscriptions()) : this.disconnect();
            }
        });
    }
    unsubscribeByPrefix(e) {
        var t;
        return __awaiter(this, void 0, void 0, function*() {
            let i = !1;
            for(let s in this.subscriptions)if (s.startsWith(e)) {
                i = !0;
                for (let e of this.subscriptions[s])null === (t = this.eventSource) || void 0 === t || t.removeEventListener(s, e);
                delete this.subscriptions[s];
            }
            i && (this.hasSubscriptionListeners() ? yield this.submitSubscriptions() : this.disconnect());
        });
    }
    unsubscribeByTopicAndListener(e, t) {
        var i;
        return __awaiter(this, void 0, void 0, function*() {
            if (!Array.isArray(this.subscriptions[e]) || !this.subscriptions[e].length) return;
            let s = !1;
            for(let n = this.subscriptions[e].length - 1; n >= 0; n--)this.subscriptions[e][n] === t && (s = !0, delete this.subscriptions[e][n], this.subscriptions[e].splice(n, 1), null === (i = this.eventSource) || void 0 === i || i.removeEventListener(e, t));
            s && (this.subscriptions[e].length || delete this.subscriptions[e], this.hasSubscriptionListeners() ? this.hasSubscriptionListeners(e) || (yield this.submitSubscriptions()) : this.disconnect());
        });
    }
    hasSubscriptionListeners(e) {
        var t, i;
        if (this.subscriptions = this.subscriptions || {}, e) return !!(null === (t = this.subscriptions[e]) || void 0 === t ? void 0 : t.length);
        for(let e in this.subscriptions)if (null === (i = this.subscriptions[e]) || void 0 === i ? void 0 : i.length) return !0;
        return !1;
    }
    submitSubscriptions() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.clientId) return this.addAllSubscriptionListeners(), this.lastSentTopics = this.getNonEmptySubscriptionTopics(), this.client.send("/api/realtime", {
                method: "POST",
                body: {
                    clientId: this.clientId,
                    subscriptions: this.lastSentTopics
                },
                query: {
                    requestKey: this.getSubscriptionsCancelKey()
                }
            }).catch((e)=>{
                if (!(null == e ? void 0 : e.isAbort)) throw e;
            });
        });
    }
    getSubscriptionsCancelKey() {
        return "realtime_" + this.clientId;
    }
    getNonEmptySubscriptionTopics() {
        const e = [];
        for(let t in this.subscriptions)this.subscriptions[t].length && e.push(t);
        return e;
    }
    addAllSubscriptionListeners() {
        if (this.eventSource) {
            this.removeAllSubscriptionListeners();
            for(let e in this.subscriptions)for (let t of this.subscriptions[e])this.eventSource.addEventListener(e, t);
        }
    }
    removeAllSubscriptionListeners() {
        if (this.eventSource) for(let e in this.subscriptions)for (let t of this.subscriptions[e])this.eventSource.removeEventListener(e, t);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(this.reconnectAttempts > 0)) return new Promise((e, t)=>{
                this.pendingConnects.push({
                    resolve: e,
                    reject: t
                }), this.pendingConnects.length > 1 || this.initConnect();
            });
        });
    }
    initConnect() {
        this.disconnect(!0), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(()=>{
            this.connectErrorHandler(new Error("EventSource connect took too long."));
        }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")), this.eventSource.onerror = (e)=>{
            this.connectErrorHandler(new Error("Failed to establish realtime connection."));
        }, this.eventSource.addEventListener("PB_CONNECT", (e)=>{
            const t = e;
            this.clientId = null == t ? void 0 : t.lastEventId, this.submitSubscriptions().then(()=>__awaiter(this, void 0, void 0, function*() {
                    let e = 3;
                    for(; this.hasUnsentSubscriptions() && e > 0;)e--, yield this.submitSubscriptions();
                })).then(()=>{
                for (let e of this.pendingConnects)e.resolve();
                this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
            }).catch((e)=>{
                this.clientId = "", this.connectErrorHandler(e);
            });
        });
    }
    hasUnsentSubscriptions() {
        const e = this.getNonEmptySubscriptionTopics();
        if (e.length != this.lastSentTopics.length) return !0;
        for (const t of e)if (!this.lastSentTopics.includes(t)) return !0;
        return !1;
    }
    connectErrorHandler(e) {
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
            for (let t of this.pendingConnects)t.reject(new ClientResponseError(e));
            return this.pendingConnects = [], void this.disconnect();
        }
        this.disconnect(!0);
        const t = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
        this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(()=>{
            this.initConnect();
        }, t);
    }
    disconnect(e = !1) {
        var t;
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), null === (t = this.eventSource) || void 0 === t || t.close(), this.eventSource = null, this.clientId = "", !e) {
            this.reconnectAttempts = 0;
            for (let e of this.pendingConnects)e.resolve();
            this.pendingConnects = [];
        }
    }
}
class RecordService extends CrudService {
    constructor(e, t){
        super(e), this.collectionIdOrName = t;
    }
    get baseCrudPath() {
        return this.baseCollectionPath + "/records";
    }
    get baseCollectionPath() {
        return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
    }
    subscribeOne(e, t) {
        return __awaiter(this, void 0, void 0, function*() {
            return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."), this.client.realtime.subscribe(this.collectionIdOrName + "/" + e, t);
        });
    }
    subscribe(e, t) {
        return __awaiter(this, void 0, void 0, function*() {
            if ("function" == typeof e) return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."), this.client.realtime.subscribe(this.collectionIdOrName, e);
            if (!t) throw new Error("Missing subscription callback.");
            if ("" === e) throw new Error("Missing topic.");
            let i = this.collectionIdOrName;
            return "*" !== e && (i += "/" + e), this.client.realtime.subscribe(i, t);
        });
    }
    unsubscribe(e) {
        return __awaiter(this, void 0, void 0, function*() {
            return "*" === e ? this.client.realtime.unsubscribe(this.collectionIdOrName) : e ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
        });
    }
    getFullList(e, t) {
        if ("number" == typeof e) return super.getFullList(e, t);
        const i = Object.assign({}, e, t);
        return super.getFullList(i);
    }
    getList(e = 1, t = 30, i) {
        return super.getList(e, t, i);
    }
    getFirstListItem(e, t) {
        return super.getFirstListItem(e, t);
    }
    getOne(e, t) {
        return super.getOne(e, t);
    }
    create(e, t) {
        return super.create(e, t);
    }
    update(e, t, i) {
        return super.update(e, t, i).then((e)=>{
            var t, i, s;
            return (null === (t = this.client.authStore.model) || void 0 === t ? void 0 : t.id) !== (null == e ? void 0 : e.id) || (null === (i = this.client.authStore.model) || void 0 === i ? void 0 : i.collectionId) !== this.collectionIdOrName && (null === (s = this.client.authStore.model) || void 0 === s ? void 0 : s.collectionName) !== this.collectionIdOrName || this.client.authStore.save(this.client.authStore.token, e), e;
        });
    }
    delete(e, t) {
        return super.delete(e, t).then((t)=>{
            var i, s, n;
            return !t || (null === (i = this.client.authStore.model) || void 0 === i ? void 0 : i.id) !== e || (null === (s = this.client.authStore.model) || void 0 === s ? void 0 : s.collectionId) !== this.collectionIdOrName && (null === (n = this.client.authStore.model) || void 0 === n ? void 0 : n.collectionName) !== this.collectionIdOrName || this.client.authStore.clear(), t;
        });
    }
    authResponse(e) {
        const t = this.decode((null == e ? void 0 : e.record) || {});
        return this.client.authStore.save(null == e ? void 0 : e.token, t), Object.assign({}, e, {
            token: (null == e ? void 0 : e.token) || "",
            record: t
        });
    }
    listAuthMethods(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send(this.baseCollectionPath + "/auth-methods", e).then((e)=>Object.assign({}, e, {
                usernamePassword: !!(null == e ? void 0 : e.usernamePassword),
                emailPassword: !!(null == e ? void 0 : e.emailPassword),
                authProviders: Array.isArray(null == e ? void 0 : e.authProviders) ? null == e ? void 0 : e.authProviders : []
            }));
    }
    authWithPassword(e, t, i, s) {
        let n = {
            method: "POST",
            body: {
                identity: e,
                password: t
            }
        };
        return n = normalizeLegacyOptionsArgs("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).", n, i, s), this.client.send(this.baseCollectionPath + "/auth-with-password", n).then((e)=>this.authResponse(e));
    }
    authWithOAuth2Code(e, t, i, s, n, o, r) {
        let a = {
            method: "POST",
            body: {
                provider: e,
                code: t,
                codeVerifier: i,
                redirectUrl: s,
                createData: n
            }
        };
        return a = normalizeLegacyOptionsArgs("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).", a, o, r), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", a).then((e)=>this.authResponse(e));
    }
    authWithOAuth2(...e) {
        return __awaiter(this, void 0, void 0, function*() {
            if (e.length > 1 || "string" == typeof (null == e ? void 0 : e[0])) return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code((null == e ? void 0 : e[0]) || "", (null == e ? void 0 : e[1]) || "", (null == e ? void 0 : e[2]) || "", (null == e ? void 0 : e[3]) || "", (null == e ? void 0 : e[4]) || {}, (null == e ? void 0 : e[5]) || {}, (null == e ? void 0 : e[6]) || {});
            const t = (null == e ? void 0 : e[0]) || {}, i = (yield this.listAuthMethods()).authProviders.find((e)=>e.name === t.provider);
            if (!i) throw new ClientResponseError(new Error(`Missing or invalid provider "${t.provider}".`));
            const s = this.client.buildUrl("/api/oauth2-redirect"), n = new RealtimeService(this.client);
            let o = null;
            function cleanup() {
                null == o || o.close(), n.unsubscribe();
            }
            return t.urlCallback || (o = openBrowserPopup(void 0)), new Promise((e, r)=>__awaiter(this, void 0, void 0, function*() {
                    var a;
                    try {
                        yield n.subscribe("@oauth2", (o)=>__awaiter(this, void 0, void 0, function*() {
                                const a = n.clientId;
                                try {
                                    if (!o.state || a !== o.state) throw new Error("State parameters don't match.");
                                    const n = Object.assign({}, t);
                                    delete n.provider, delete n.scopes, delete n.createData, delete n.urlCallback;
                                    const r = yield this.authWithOAuth2Code(i.name, o.code, i.codeVerifier, s, t.createData, n);
                                    e(r);
                                } catch (e) {
                                    r(new ClientResponseError(e));
                                }
                                cleanup();
                            }));
                        const l = {
                            state: n.clientId
                        };
                        (null === (a = t.scopes) || void 0 === a ? void 0 : a.length) && (l.scope = t.scopes.join(" "));
                        const c = this._replaceQueryParams(i.authUrl + s, l);
                        let d = t.urlCallback || function(e) {
                            o ? o.location.href = e : o = openBrowserPopup(e);
                        };
                        yield d(c);
                    } catch (e) {
                        cleanup(), r(new ClientResponseError(e));
                    }
                }));
        });
    }
    authRefresh(e, t) {
        let i = {
            method: "POST"
        };
        return i = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", i, e, t), this.client.send(this.baseCollectionPath + "/auth-refresh", i).then((e)=>this.authResponse(e));
    }
    requestPasswordReset(e, t, i) {
        let s = {
            method: "POST",
            body: {
                email: e
            }
        };
        return s = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", s, t, i), this.client.send(this.baseCollectionPath + "/request-password-reset", s).then(()=>!0);
    }
    confirmPasswordReset(e, t, i, s, n) {
        let o = {
            method: "POST",
            body: {
                token: e,
                password: t,
                passwordConfirm: i
            }
        };
        return o = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", o, s, n), this.client.send(this.baseCollectionPath + "/confirm-password-reset", o).then(()=>!0);
    }
    requestVerification(e, t, i) {
        let s = {
            method: "POST",
            body: {
                email: e
            }
        };
        return s = normalizeLegacyOptionsArgs("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", s, t, i), this.client.send(this.baseCollectionPath + "/request-verification", s).then(()=>!0);
    }
    confirmVerification(e, t, i) {
        let s = {
            method: "POST",
            body: {
                token: e
            }
        };
        return s = normalizeLegacyOptionsArgs("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", s, t, i), this.client.send(this.baseCollectionPath + "/confirm-verification", s).then(()=>!0);
    }
    requestEmailChange(e, t, i) {
        let s = {
            method: "POST",
            body: {
                newEmail: e
            }
        };
        return s = normalizeLegacyOptionsArgs("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", s, t, i), this.client.send(this.baseCollectionPath + "/request-email-change", s).then(()=>!0);
    }
    confirmEmailChange(e, t, i, s) {
        let n = {
            method: "POST",
            body: {
                token: e,
                password: t
            }
        };
        return n = normalizeLegacyOptionsArgs("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", n, i, s), this.client.send(this.baseCollectionPath + "/confirm-email-change", n).then(()=>!0);
    }
    listExternalAuths(e, t) {
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths", t);
    }
    unlinkExternalAuth(e, t, i) {
        return i = Object.assign({
            method: "DELETE"
        }, i), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths/" + encodeURIComponent(t), i).then(()=>!0);
    }
    _replaceQueryParams(e, t = {}) {
        let i = e, s = "";
        e.indexOf("?") >= 0 && (i = e.substring(0, e.indexOf("?")), s = e.substring(e.indexOf("?") + 1));
        const n = {}, o = s.split("&");
        for (const e of o){
            if ("" == e) continue;
            const t = e.split("=");
            n[decodeURIComponent(t[0].replace(/\+/g, " "))] = decodeURIComponent((t[1] || "").replace(/\+/g, " "));
        }
        for(let e in t)t.hasOwnProperty(e) && (null == t[e] ? delete n[e] : n[e] = t[e]);
        s = "";
        for(let e in n)n.hasOwnProperty(e) && ("" != s && (s += "&"), s += encodeURIComponent(e.replace(/%20/g, "+")) + "=" + encodeURIComponent(n[e].replace(/%20/g, "+")));
        return "" != s ? i + "?" + s : i;
    }
}
function openBrowserPopup(e) {
    if (true) throw new ClientResponseError(new Error("Not in a browser context - please pass a custom urlCallback function."));
    let t = 1024, i = 768, s = window.innerWidth, n = window.innerHeight;
    t = t > s ? s : t, i = i > n ? n : i;
    let o = s / 2 - t / 2, r = n / 2 - i / 2;
    return window.open(e, "popup_window", "width=" + t + ",height=" + i + ",top=" + r + ",left=" + o + ",resizable,menubar=no");
}
class CollectionService extends CrudService {
    get baseCrudPath() {
        return "/api/collections";
    }
    import(e, t = !1, i) {
        return __awaiter(this, void 0, void 0, function*() {
            return i = Object.assign({
                method: "PUT",
                body: {
                    collections: e,
                    deleteMissing: t
                }
            }, i), this.client.send(this.baseCrudPath + "/import", i).then(()=>!0);
        });
    }
}
class LogService extends BaseService {
    getRequestsList(e = 1, t = 30, i) {
        return (i = Object.assign({
            method: "GET"
        }, i)).query = Object.assign({
            page: e,
            perPage: t
        }, i.query), this.client.send("/api/logs/requests", i);
    }
    getRequest(e, t) {
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send("/api/logs/requests/" + encodeURIComponent(e), t);
    }
    getRequestsStats(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/logs/requests/stats", e);
    }
}
class HealthService extends BaseService {
    check(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/health", e);
    }
}
class FileService extends BaseService {
    getUrl(e, t, i = {}) {
        if (!t || !(null == e ? void 0 : e.id) || !(null == e ? void 0 : e.collectionId) && !(null == e ? void 0 : e.collectionName)) return "";
        const s = [];
        s.push("api"), s.push("files"), s.push(encodeURIComponent(e.collectionId || e.collectionName)), s.push(encodeURIComponent(e.id)), s.push(encodeURIComponent(t));
        let n = this.client.buildUrl(s.join("/"));
        if (Object.keys(i).length) {
            !1 === i.download && delete i.download;
            const e = new URLSearchParams(i);
            n += (n.includes("?") ? "&" : "?") + e;
        }
        return n;
    }
    getToken(e) {
        return e = Object.assign({
            method: "POST"
        }, e), this.client.send("/api/files/token", e).then((e)=>(null == e ? void 0 : e.token) || "");
    }
}
class BackupService extends BaseService {
    getFullList(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/backups", e);
    }
    create(e, t) {
        return t = Object.assign({
            method: "POST",
            body: {
                name: e
            }
        }, t), this.client.send("/api/backups", t).then(()=>!0);
    }
    upload(e, t) {
        return t = Object.assign({
            method: "POST",
            body: e
        }, t), this.client.send("/api/backups/upload", t).then(()=>!0);
    }
    delete(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}`, t).then(()=>!0);
    }
    restore(e, t) {
        return t = Object.assign({
            method: "POST"
        }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`, t).then(()=>!0);
    }
    getDownloadUrl(e, t) {
        return this.client.buildUrl(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`);
    }
}
const s = [
    "requestKey",
    "$cancelKey",
    "$autoCancel",
    "fetch",
    "headers",
    "body",
    "query",
    "params",
    "cache",
    "credentials",
    "headers",
    "integrity",
    "keepalive",
    "method",
    "mode",
    "redirect",
    "referrer",
    "referrerPolicy",
    "signal",
    "window"
];
class Client {
    constructor(e = "/", t, i = "en-US"){
        this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = !0, this.baseUrl = e, this.lang = i, this.authStore = t || new LocalAuthStore, this.admins = new AdminService(this), this.collections = new CollectionService(this), this.files = new FileService(this), this.logs = new LogService(this), this.settings = new SettingsService(this), this.realtime = new RealtimeService(this), this.health = new HealthService(this), this.backups = new BackupService(this);
    }
    collection(e) {
        return this.recordServices[e] || (this.recordServices[e] = new RecordService(this, e)), this.recordServices[e];
    }
    autoCancellation(e) {
        return this.enableAutoCancellation = !!e, this;
    }
    cancelRequest(e) {
        return this.cancelControllers[e] && (this.cancelControllers[e].abort(), delete this.cancelControllers[e]), this;
    }
    cancelAllRequests() {
        for(let e in this.cancelControllers)this.cancelControllers[e].abort();
        return this.cancelControllers = {}, this;
    }
    getFileUrl(e, t, i = {}) {
        return this.files.getUrl(e, t, i);
    }
    buildUrl(e) {
        var t;
        let i = this.baseUrl;
        return  true || (0), e && (i += i.endsWith("/") ? "" : "/", i += e.startsWith("/") ? e.substring(1) : e), i;
    }
    send(e, t) {
        return __awaiter(this, void 0, void 0, function*() {
            t = this.initSendOptions(e, t);
            let i = this.buildUrl(e);
            if (this.beforeSend) {
                const e = Object.assign({}, (yield this.beforeSend(i, t)));
                void 0 !== e.url || void 0 !== e.options ? (i = e.url || i, t = e.options || t) : Object.keys(e).length && (t = e, (null === console || void 0 === console ? void 0 : console.warn) && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."));
            }
            if (void 0 !== t.query) {
                const e = this.serializeQueryParams(t.query);
                e && (i += (i.includes("?") ? "&" : "?") + e), delete t.query;
            }
            "application/json" == this.getHeader(t.headers, "Content-Type") && t.body && "string" != typeof t.body && (t.body = JSON.stringify(t.body));
            return (t.fetch || fetch)(i, t).then((e)=>__awaiter(this, void 0, void 0, function*() {
                    let t = {};
                    try {
                        t = yield e.json();
                    } catch (e) {}
                    if (this.afterSend && (t = yield this.afterSend(e, t)), e.status >= 400) throw new ClientResponseError({
                        url: e.url,
                        status: e.status,
                        data: t
                    });
                    return t;
                })).catch((e)=>{
                throw new ClientResponseError(e);
            });
        });
    }
    initSendOptions(e, t) {
        (t = Object.assign({
            method: "GET"
        }, t)).query = t.query || {}, t.body = this.convertToFormDataIfNeeded(t.body);
        for(let e in t)s.includes(e) || (t.query[e] = t[e], delete t[e]);
        if (t.query = Object.assign({}, t.params, t.query), void 0 === t.requestKey && (!1 === t.$autoCancel || !1 === t.query.$autoCancel ? t.requestKey = null : (t.$cancelKey || t.query.$cancelKey) && (t.requestKey = t.$cancelKey || t.query.$cancelKey)), delete t.$autoCancel, delete t.query.$autoCancel, delete t.$cancelKey, delete t.query.$cancelKey, null !== this.getHeader(t.headers, "Content-Type") || this.isFormData(t.body) || (t.headers = Object.assign({}, t.headers, {
            "Content-Type": "application/json"
        })), null === this.getHeader(t.headers, "Accept-Language") && (t.headers = Object.assign({}, t.headers, {
            "Accept-Language": this.lang
        })), this.authStore.token && null === this.getHeader(t.headers, "Authorization") && (t.headers = Object.assign({}, t.headers, {
            Authorization: this.authStore.token
        })), this.enableAutoCancellation && null !== t.requestKey) {
            const i = t.requestKey || (t.method || "GET") + e;
            delete t.requestKey, this.cancelRequest(i);
            const s = new AbortController;
            this.cancelControllers[i] = s, t.signal = s.signal;
        }
        return t;
    }
    convertToFormDataIfNeeded(e) {
        if ("undefined" == typeof FormData || void 0 === e || "object" != typeof e || null === e || this.isFormData(e) || !this.hasBlobField(e)) return e;
        const t = new FormData;
        for(let i in e){
            const s = Array.isArray(e[i]) ? e[i] : [
                e[i]
            ];
            for (let e of s)t.append(i, e);
        }
        return t;
    }
    hasBlobField(e) {
        for(let t in e){
            const i = Array.isArray(e[t]) ? e[t] : [
                e[t]
            ];
            for (let e of i)if ("undefined" != typeof Blob && e instanceof Blob || "undefined" != typeof File && e instanceof File) return !0;
        }
        return !1;
    }
    getHeader(e, t) {
        e = e || {}, t = t.toLowerCase();
        for(let i in e)if (i.toLowerCase() == t) return e[i];
        return null;
    }
    isFormData(e) {
        return e && ("FormData" === e.constructor.name || "undefined" != typeof FormData && e instanceof FormData);
    }
    serializeQueryParams(e) {
        const t = [];
        for(const i in e){
            if (null === e[i]) continue;
            const s = e[i], n = encodeURIComponent(i);
            if (Array.isArray(s)) for (const e of s)t.push(n + "=" + encodeURIComponent(e));
            else s instanceof Date ? t.push(n + "=" + encodeURIComponent(s.toISOString())) : null !== typeof s && "object" == typeof s ? t.push(n + "=" + encodeURIComponent(JSON.stringify(s))) : t.push(n + "=" + encodeURIComponent(s));
        }
        return t.join("&");
    }
}
class AsyncAuthStore extends (/* unused pure expression or super */ null && (BaseAuthStore)) {
    constructor(e){
        super(), this.queue = [], this.saveFunc = e.save, this.clearFunc = e.clear, this._loadInitial(e.initial);
    }
    save(e, t) {
        super.save(e, t);
        let i = "";
        try {
            i = JSON.stringify({
                token: e,
                model: t
            });
        } catch (e) {
            console.warn("AsyncAuthStore: failed to stringify the new state");
        }
        this._enqueue(()=>this.saveFunc(i));
    }
    clear() {
        super.clear(), this.clearFunc ? this._enqueue(()=>this.clearFunc()) : this._enqueue(()=>this.saveFunc(""));
    }
    _loadInitial(e) {
        if (e) try {
            const t = JSON.parse(e) || {};
            this.save(t.token || "", t.model || null);
        } catch (e) {}
    }
    _enqueue(e) {
        this.queue.push(e), 1 == this.queue.length && this._dequeue();
    }
    _dequeue() {
        this.queue.length && this.queue[0]().finally(()=>{
            this.queue.shift(), this.queue.length && this._dequeue();
        });
    }
}
 //# sourceMappingURL=pocketbase.es.mjs.map

// EXTERNAL MODULE: ./node_modules/next/headers.js
var next_headers = __webpack_require__(952);
;// CONCATENATED MODULE: ./src/lib/pocketbase.ts

const pocketbase_PocketBaseInstance = new Client("http://13.212.105.117:8090/");
/* harmony default export */ const pocketbase = ((/* unused pure expression or super */ null && (pocketbase_PocketBaseInstance)));

;// CONCATENATED MODULE: ./src/lib/servercookie.ts


function encodeCookie(cookie) {
    let encodedCookie = "";
    for (const [key, value] of Object.entries(cookie)){
        encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(value)}; `;
    }
    return encodedCookie.trimEnd();
}
function encodeNextPBCookie(next_cookie) {
    if (!next_cookie) {
        return "";
    }
    const cookie = {
        pb_auth: next_cookie.value
    };
    let encodedCookie = "";
    for (const [key, value] of Object.entries(cookie)){
        encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(value)}; `;
    }
    return encodedCookie.trimEnd();
}
async function server_component_pb() {
    // const cookie = req.cookies.get('pb_auth')?.value;
    const cookie = await getNextjsCookie();
    // const response = NextResponse.next();
    // load the auth store data from the request cookie string
    // console.log("server component cookie == ",cookie)
    PocketBaseInstance.authStore.loadFromCookie(cookie || "");
    // send back the default 'pb_auth' cookie to the client with the latest store state
    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        PocketBaseInstance.authStore.isValid && await PocketBaseInstance.collection("users").authRefresh();
    } catch (_) {
        // clear the auth store on failed refresh
        PocketBaseInstance.authStore.clear();
    }
    return {
        PocketBaseInstance,
        cookies,
        headers
    };
}
async function getNextjsCookie(request_cookie) {
    // console.log("middleware request cookie  === ",request_cookie)
    try {
        if (request_cookie) {
            const cookie = encodeNextPBCookie(request_cookie);
            return cookie;
        }
        const next_cookie = await (0,next_headers.cookies)().get("pb_auth");
        const cookie = encodeNextPBCookie(next_cookie);
        return cookie;
    } catch (error) {
        console.log("issue getting next-cookie  === ", error);
        return "";
    }
}

;// CONCATENATED MODULE: ./middleware.ts



async function middleware(request) {
    const response = NextResponse.next();
    const request_cookie = request.cookies.get("pb_auth");
    // console.log("middlware request cookie  ===",)
    const cookie = await getNextjsCookie(request_cookie);
    const pb = new Client("http://13.212.105.117:8090/");
    if (cookie) {
        try {
            pb.authStore.loadFromCookie(cookie);
        } catch (error) {
            pb.authStore.clear();
            response.headers.set("set-cookie", pb.authStore.exportToCookie({
                httpOnly: false
            }));
        }
    }
    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        pb.authStore.isValid && await pb.collection("users").authRefresh();
    } catch (err) {
        // clear the auth store on failed refresh
        pb.authStore.clear();
        response.headers.set("set-cookie", pb.authStore.exportToCookie({
            httpOnly: false
        }));
    }
    if (!pb.authStore.model && !request.nextUrl.pathname.startsWith("/auth")) {
        const redirect_to = new URL("/auth", request.url);
        if (request.nextUrl.pathname) {
            redirect_to.search = new URLSearchParams({
                next: request.nextUrl.pathname
            }).toString();
        } else {
            redirect_to.search = new URLSearchParams({
                next: "/"
            }).toString();
        }
        return NextResponse.redirect(redirect_to);
    }
    if (pb.authStore.model && request.nextUrl.pathname.startsWith("/auth")) {
        const next_url = request.headers.get("next-url");
        if (next_url) {
            const redirect_to = new URL(next_url, request.url);
            return NextResponse.redirect(redirect_to);
        }
        const redirect_to = new URL(`/`, request.url);
        return NextResponse.redirect(redirect_to);
    }
    return response;
}
const config = {
    matcher: [
        "/profile/:path*",
        "/auth/:path*"
    ]
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fnaufalzhafran%2FDocuments%2F2023%2FSalman%20Digital%20Lab%2Fjambore-amki&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGUoPzpcXC8oKD86W15cXC8jXFw%2FXSs%2FKSg%2FOlxcLyg%2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9wcm9maWxlLzpwYXRoKiJ9LHsicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2F1dGgoPzpcXC8oKD86W15cXC8jXFw%2FXSs%2FKSg%2FOlxcLyg%2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9hdXRoLzpwYXRoKiJ9XQ%3D%3D&preferredRegion=&middlewareConfig=eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGUoPzpcXC8oKD86W15cXC8jXFw%2FXSs%2FKSg%2FOlxcLyg%2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9wcm9maWxlLzpwYXRoKiJ9LHsicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2F1dGgoPzpcXC8oKD86W15cXC8jXFw%2FXSs%2FKSg%2FOlxcLyg%2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9hdXRoLzpwYXRoKiJ9XX0%3D!

        
        
        

        const mod = { ...middleware_namespaceObject }
        const handler = mod.middleware || mod.default

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fnaufalzhafran_2FDocuments_2F2023_2FSalman_20Digital_20Lab_2Fjambore_amki_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGUoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9wcm9maWxlLzpwYXRoKiJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2F1dGgoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9hdXRoLzpwYXRoKiJ9XQ_3D_3D_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGUoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9wcm9maWxlLzpwYXRoKiJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2F1dGgoPzpcXC8oKD86W15cXC8jXFw_2FXSs_2FKSg_2FOlxcLyg_2FOlteXFwvI1xcP10rPykpKikpPyguanNvbik_2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii9hdXRoLzpwYXRoKiJ9XX0_3D_(opts) {
          return adapter({
            ...opts,
            page: "/middleware",
            handler,
          })
        }
    

/***/ }),

/***/ 929:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    splitCookiesString: ()=>splitCookiesString,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b;
        this._headers = responseHeaders;
        const setCookie = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders);
        (_b = responseHeaders.get("set-cookie")) != null ? _b : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : // TODO: remove splitCookiesString when `getSetCookie` adoption is high enough in Node.js
        // https://developer.mozilla.org/en-US/docs/Web/API/Headers/getSetCookie#browser_compatibility
        splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 104:
/***/ ((module) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ }),

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cookies: () => (/* binding */ headers_cookies)
});

// UNUSED EXPORTS: draftMode, headers

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js
var request_cookies = __webpack_require__(734);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js
var headers = __webpack_require__(150);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var cookies = __webpack_require__(423);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js
var request_async_storage_external = __webpack_require__(37);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/async-local-storage.js
var async_local_storage = __webpack_require__(92);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/action-async-storage.external.js

const actionAsyncStorage = (0,async_local_storage/* createAsyncLocalStorage */.P)(); //# sourceMappingURL=action-async-storage.external.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/hooks-server-context.js
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
} //# sourceMappingURL=hooks-server-context.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js

const staticGenerationAsyncStorage = (0,async_local_storage/* createAsyncLocalStorage */.P)(); //# sourceMappingURL=static-generation-async-storage.external.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/static-generation-bailout.js


class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
function formatErrorMessage(reason, opts) {
    const { dynamic, link } = opts || {};
    const suffix = link ? " See more info here: " + link : "";
    return "Page" + (dynamic ? ' with `dynamic = "' + dynamic + '"`' : "") + " couldn't be rendered statically because it used `" + reason + "`." + suffix;
}
const static_generation_bailout_staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        var _opts_dynamic;
        throw new StaticGenBailoutError(formatErrorMessage(reason, {
            ...opts,
            dynamic: (_opts_dynamic = opts == null ? void 0 : opts.dynamic) != null ? _opts_dynamic : "error"
        }));
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
        if (!(opts == null ? void 0 : opts.dynamic)) {
            // we can statically prefetch pages that opt into dynamic,
            // but not things like headers/cookies
            staticGenerationStore.staticPrefetchBailout = true;
        }
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new DynamicServerError(formatErrorMessage(reason, {
            ...opts,
            // this error should be caught by Next to bail out of static generation
            // in case it's uncaught, this link provides some additional context as to why
            link: "https://nextjs.org/docs/messages/dynamic-server-error"
        }));
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
}; //# sourceMappingURL=static-generation-bailout.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/draft-mode.js

class draft_mode_DraftMode {
    get isEnabled() {
        return this._provider.isEnabled;
    }
    enable() {
        if (staticGenerationBailout("draftMode().enable()")) {
            return;
        }
        return this._provider.enable();
    }
    disable() {
        if (staticGenerationBailout("draftMode().disable()")) {
            return;
        }
        return this._provider.disable();
    }
    constructor(provider){
        this._provider = provider;
    }
} //# sourceMappingURL=draft-mode.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/headers.js







function headers_headers() {
    if (staticGenerationBailout("headers", {
        link: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"
    })) {
        return HeadersAdapter.seal(new Headers({}));
    }
    const requestStore = requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error("Invariant: headers() expects to have requestAsyncStorage, none available.");
    }
    return requestStore.headers;
}
function headers_cookies() {
    if (static_generation_bailout_staticGenerationBailout("cookies", {
        link: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"
    })) {
        return request_cookies/* RequestCookiesAdapter */.Qb.seal(new cookies/* RequestCookies */.q(new Headers({})));
    }
    const requestStore = request_async_storage_external/* requestAsyncStorage */.F.getStore();
    if (!requestStore) {
        throw new Error("Invariant: cookies() expects to have requestAsyncStorage, none available.");
    }
    const asyncActionStore = actionAsyncStorage.getStore();
    if (asyncActionStore && (asyncActionStore.isAction || asyncActionStore.isAppRoute)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        return requestStore.mutableCookies;
    }
    return requestStore.cookies;
}
function draftMode() {
    const requestStore = requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error("Invariant: draftMode() expects to have requestAsyncStorage, none available.");
    }
    return new DraftMode(requestStore.draftMode);
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ requestAsyncStorage)
/* harmony export */ });
/* harmony import */ var _async_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);

const requestAsyncStorage = (0,_async_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .createAsyncLocalStorage */ .P)(); //# sourceMappingURL=request-async-storage.external.js.map


/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ HeadersAdapter)
/* harmony export */ });
/* unused harmony export ReadonlyHeadersError */
/* harmony import */ var _reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ReflectAdapter)
/* harmony export */ });
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map


/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qb: () => (/* binding */ RequestCookiesAdapter),
/* harmony export */   vr: () => (/* binding */ MutableRequestCookiesAdapter)
/* harmony export */ });
/* unused harmony exports ReadonlyRequestCookiesError, getModifiedCookieValues, appendMutableCookies */
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(325);


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect__WEBPACK_IMPORTED_MODULE_1__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new _cookies__WEBPACK_IMPORTED_MODULE_0__/* .ResponseCookies */ .n(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore.call(fetch)) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies__WEBPACK_IMPORTED_MODULE_0__/* .ResponseCookies */ .n(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect__WEBPACK_IMPORTED_MODULE_1__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map


/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.ResponseCookies),
/* harmony export */   q: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.RequestCookies)
/* harmony export */ });
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(929);
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);
 //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(309);


/***/ }),

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ createAsyncLocalStorage)
/* harmony export */ });
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(602));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map