// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

import { createClient } from "@supabase/supabase-js";

// استخدام القيم الموجودة أو قيم افتراضية مؤقتة لمنع توقف الـ Build
const supabaseUrl =
  process.env.SUPABASE_URL || "https://algzjykvaiwhdwguiss.supabase.co";
const supabaseKey =
  process.env.SUPABASE_PUBLISHABLE_KEY || "dummy_key_for_build";

export const supabase = createClient(supabaseUrl, supabaseKey);
