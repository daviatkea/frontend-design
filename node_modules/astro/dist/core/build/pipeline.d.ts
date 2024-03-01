import type { RouteData, SSRResult } from '../../@types/astro.js';
import type { SSRManifest } from '../app/types.js';
import { Pipeline } from '../render/index.js';
import { type BuildInternals } from './internal.js';
import type { PageBuildData, StaticBuildOptions } from './types.js';
/**
 * The build pipeline is responsible to gather the files emitted by the SSR build and generate the pages by executing these files.
 */
export declare class BuildPipeline extends Pipeline {
    readonly internals: BuildInternals;
    readonly manifest: SSRManifest;
    readonly options: StaticBuildOptions;
    readonly config: import("../../@types/astro.js").AstroConfig;
    readonly settings: import("../../@types/astro.js").AstroSettings;
    private constructor();
    static create({ internals, manifest, options, }: Pick<BuildPipeline, 'internals' | 'manifest' | 'options'>): BuildPipeline;
    /**
     * The SSR build emits two important files:
     * - dist/server/manifest.mjs
     * - dist/renderers.mjs
     *
     * These two files, put together, will be used to generate the pages.
     *
     * ## Errors
     *
     * It will throw errors if the previous files can't be found in the file system.
     *
     * @param staticBuildOptions
     */
    static retrieveManifest(staticBuildOptions: StaticBuildOptions, internals: BuildInternals): Promise<SSRManifest>;
    headElements(routeData: RouteData): Pick<SSRResult, 'scripts' | 'styles' | 'links'>;
    componentMetadata(): void;
    /**
     * It collects the routes to generate during the build.
     *
     * It returns a map of page information and their relative entry point as a string.
     */
    retrieveRoutesToGenerate(): Map<PageBuildData, string>;
}
