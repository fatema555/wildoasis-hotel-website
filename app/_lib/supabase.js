// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseKey);
