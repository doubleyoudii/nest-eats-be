// // import { TransformFnParams } from 'class-transformer/types/interfaces';
// import { TransformFnParams } from 'class-transformer';
// import { MaybeType } from '../types/maybe.type';

// export const lowerCaseTransformer = (
//   params: TransformFnParams,
// ): MaybeType<string> => params.value?.toLowerCase().trim();

import { TransformFnParams } from 'class-transformer/types/interfaces';
import { MaybeType } from '../types/maybe.type';

export const lowerCaseTransformer = (
  params: TransformFnParams,
): MaybeType<string> => params.value?.toLowerCase().trim();
