import * as React from 'react'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Avatar({ className = '', children, ...props }: AvatarProps) {
  return (
    <div className={`inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
export function AvatarImage({ className = '', ...props }: AvatarImageProps) {
  return <img className={`h-full w-full object-cover ${className}`} {...props} />
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}
export function AvatarFallback({ className = '', children, ...props }: AvatarFallbackProps) {
  return (
    <div className={`h-full w-full flex items-center justify-center bg-blue-600 text-white ${className}`} {...props}>
      {children}
    </div>
  )
}
