import { cn } from '@/lib/utils'

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <p className={cn('text-xs text-muted-foreground', className)}>
      <span className="sr-only">Technologies: </span>
      {tags.join(' · ')}
    </p>
  )
}
