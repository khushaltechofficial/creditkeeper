"use client"

import * as SeparatorPrimitive from "@radix-ui/react-separator"

export function Separator(props: SeparatorPrimitive.SeparatorProps) {
  return <SeparatorPrimitive.Root {...props} className={`bg-gray-200 dark:bg-gray-700 h-px w-full ${props.className || ''}`} />
}
