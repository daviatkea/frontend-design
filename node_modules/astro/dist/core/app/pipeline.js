import { Pipeline } from "../base-pipeline.js";
import { createModuleScriptElement, createStylesheetElementSet } from "../render/ssr-element.js";
class AppPipeline extends Pipeline {
  static create({
    logger,
    manifest,
    mode,
    renderers,
    resolve,
    serverLike,
    streaming
  }) {
    return new AppPipeline(logger, manifest, mode, renderers, resolve, serverLike, streaming);
  }
  headElements(routeData) {
    const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script));
      }
    }
    return { links, styles, scripts };
  }
  componentMetadata() {
  }
}
export {
  AppPipeline
};
