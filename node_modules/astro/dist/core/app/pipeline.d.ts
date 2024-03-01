import type { RouteData, SSRResult } from '../../@types/astro.js';
import { Pipeline } from '../base-pipeline.js';
export declare class AppPipeline extends Pipeline {
    static create({ logger, manifest, mode, renderers, resolve, serverLike, streaming, }: Pick<AppPipeline, 'logger' | 'manifest' | 'mode' | 'renderers' | 'resolve' | 'serverLike' | 'streaming'>): AppPipeline;
    headElements(routeData: RouteData): Pick<SSRResult, 'scripts' | 'styles' | 'links'>;
    componentMetadata(): void;
}
