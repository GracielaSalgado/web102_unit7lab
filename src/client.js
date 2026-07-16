import { createClient } from '@supabase/supabase-js'

const URL = 'https://ylnthdnorlotuyxdbrpy.supabase.co'
const API_KEY = 'sb_publishable_6oNKHDTGfvxLtGFt4bc2FA_7dyyxNGP'

export const supabase = createClient(URL, API_KEY)