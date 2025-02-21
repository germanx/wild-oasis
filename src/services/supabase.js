import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zkluwfclukbwnsitvntv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprbHV3ZmNsdWtid25zaXR2bnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMjg1OTcsImV4cCI6MjA1NTcwNDU5N30.xJ0w8W0MDBmXMmBKVHJcooVEHPbTy_hRDubX0iuUpEU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
