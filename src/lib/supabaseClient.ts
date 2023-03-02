import { createClient } from "@supabase/supabase-js"

const accessToken = process.env.SUPABASE_ACCESS_TOKEN!
const host = process.env.SUPABASE_HOST!
console.log(host, accessToken)
const supabase = createClient(host, accessToken)
export default supabase
