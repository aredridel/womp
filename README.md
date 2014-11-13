# Kraken 1.0 Minimal Generated App

This branch is a testbed for i18n ideas.

Right now, it integrates a new `@pre` tag helper in dust, and a `@useContent` helper, allowing bundle loading to be explicit, rather than implicit based on the template name. This simplifies and separates a lot of the machinery needed for localization, specifically making sure that caching concerns don't touch i18n concerns.

Content is transported to the browser as `_languagepack.js` for each localization, at least with browserify builds. Require.js is as yet unhandled, but will be similar: `_languagepack.js` will `define()` a module that can be loaded.

The parts:

* `dust-makara-helpers` encompasses:
  * `dust-message-helper`: Renders `{@pre}` and `{@message}`
  * `dust-usecontent-helper`: Loads content from bundles or packaged location
* From Yahoo: 
  * `intl`: Shim for ES5.1 Intl object
  * `react-intl`: Binding to `intl` and the content store.
* `express-bcp47`: A middleware to set the locality object in an open-sourceable way, using the `bcp47` module.
* `grunt-makara-browserify` to build browserified content bundles. (Also will exist: `grunt-makara-plain` and `grunt-makara-requirejs`). Uses:
  * `spundle`: A library that will dump the content store for a language and country (or the whole thing for development mode)
  * `spud@2`: A minimal spud with a JSON-like `spud.parse` and `spud.stringify` interface, and no understanding of files.

There is no memoization of content loading at this point, so speed may be affected, but I think the overall shape of things is becoming apparent here.

Future plans:

* integrating the new bundleless content model.
* Serving the right language pack depending on the user's locale.
