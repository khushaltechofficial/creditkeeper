type ToastOptions = {
  title?: string
  description?: string
  variant?: 'default' | 'destructive' | string
  duration?: number
}

export function toast(opts: ToastOptions) {
  if (typeof window !== 'undefined') {
    // Minimal noop toast to avoid build errors
    console.log('[toast]', opts.title || '', opts.description || '', opts.variant || 'default')
  }
}
