import { clsx } from "clsx"

import { blockquote } from "./blockquote.css"

/**
 * A styled `<blockquote>` element, for use in MDX.
 */
export function Blockquote({
  className,
  ...restProps
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className={clsx(blockquote, className)} {...restProps} />
}
