import { createClient } from "@supabase/supabase-js"

const accessToken = process.env.SUPABASE_ACCESS_TOKEN!
const host = process.env.SUPABASE_HOST!
const supabase = createClient(host, accessToken)
export default supabase
