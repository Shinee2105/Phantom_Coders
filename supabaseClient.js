import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and API Key from the Supabase dashboard
const SUPABASE_URL = 'https://adlxcijdgvkucpwokexn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbHhjaWpkZ3ZrdWNwd29rZXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4Mzg0MTcsImV4cCI6MjA1NzQxNDQxN30.GlmibQ6379gWDjhAkenkGeaAzf16lJIcDBcg9QJWCng';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
