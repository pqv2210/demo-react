/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from "utils/loadable"

export const Callback = lazyLoad(
  () => import("./index"),
  (module) => module.Callback,
)
