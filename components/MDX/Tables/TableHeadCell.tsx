import { clsx } from "clsx"

import { tableHeadCell } from "./tableHeadCell.css"

/**
 * A styled `<td>` element, for use in MDX.
 */
export function TableHeadCell({
  className,
  ...restProps
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...restProps} className={clsx(tableHeadCell, className)} />
}
