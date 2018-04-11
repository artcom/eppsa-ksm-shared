import mapValues from "lodash.mapvalues"
import omit from "lodash.omit"

export function transform(content) {
  return Object.assign(mapValues(omit(content, "index"), transform), content.index)
}
