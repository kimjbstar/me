import { createClient } from "@supabase/supabase-js"

const accessToken = process.env.NEXT_PUBLIC_SUPABASE_ACCESS_TOKEN!
const host = process.env.NEXT_PUBLIC_SUPABASE_HOST!
const supabase = createClient(host, accessToken)
export default supabase
