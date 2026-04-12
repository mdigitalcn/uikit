'use client'

import type { Row } from '@tanstack/react-table'

import { cn } from '../utils'

interface TableRowProps<TData>
  extends React.HTMLAttributes<HTMLTableRowElement> {
  row: Row<TData>
  index: number
  striped?: boolean
  hoverable?: boolean
  onRowClick?: (row: TData) => void
  isPinned?: boolean
  isExpanded?: boolean
}

export function TableRow<TData>({
  row,
  index,
  striped = false,
  hoverable = true,
  onRowClick,
  isPinned = false,
  isExpanded = false,
  className,
  children,
  ...props
}: TableRowProps<TData>) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onRowClick(row.original)
    }
  }

  return (
    <tr
      className={cn(
        '[--_duration:var(--duration-fast)] table_row border-b border-border last:border-b-0 transition-colors duration-slot',
        striped && index % 2 === 1 && 'bg-surface/50',
        hoverable && 'hover:bg-surface',
        hoverable && onRowClick && 'cursor-pointer',
        onRowClick && 'cursor-pointer focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-slot focus-visible:outline-offset-[-2px]',
        isPinned && 'bg-slot-5 border-slot-20',
        row.getIsSelected() && 'bg-slot-10',
        className,
      )}
      onClick={() => onRowClick?.(row.original)}
      onKeyDown={handleKeyDown}
      tabIndex={onRowClick ? 0 : undefined}
      role={onRowClick ? 'button' : undefined}
      {...props}
    >
      {children}
    </tr>
  )
}

TableRow.displayName = 'TableRow'
