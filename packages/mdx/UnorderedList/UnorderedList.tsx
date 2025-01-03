import { clsx } from "clsx"

import { unorderedList } from "./UnorderedList.css"

/**
 * A styled `<ul>` element, for use in MDX.
 */
export function UnorderedList({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...restProps} className={clsx(unorderedList, className)} />
}
