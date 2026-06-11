import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export type Database = any

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined

// Create client only on the client side and when env is present,
// so static export build doesn't fail.
let client: SupabaseClient | any
if (typeof window !== 'undefined' && url && anon) {
  client = createClient(url, anon)
} else {
  client = new Proxy(
    {},
    {
      get() {
        // no-op stub to avoid crashes during build or SSR
        return () => ({ data: null, error: null })
      },
    },
  )
}

export const supabase = client as SupabaseClient
