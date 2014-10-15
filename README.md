# Kraken 1.0 Minimal Generated App

This branch is a testbed for i18n ideas.

Right now, it integrates a new `@pre` tag helper in dust, and a `@useContent` helper, allowing bundle loading to be explicit, rather than implicit based on the template name. This simplifies and separates a lot of the machinery needed for localization, specifically making sure that caching concerns don't touch i18n concerns.

There is no memoization of content loading at this point, so speed may be affected, but I think the overall shape of things is becoming apparent here.

Next steps: Integrating the new bundleless content model, and defining a transport format to get translations to a browser for rendering with client-side templates.
