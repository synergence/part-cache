import { PartCache } from 'class';

interface PartCacheConstructor {
	/**
	 * Creates a new part cache using the specified template part, creating precreatedParts parts to grab from the cache. This will error if template is nil or precreatedParts < 0. By default precreatedParts is 5.
	 */
	new(template: BasePart, precreatedParts: number): PartCache;
}

declare const PartCacheModule: PartCacheConstructor;
export = PartCacheModule;