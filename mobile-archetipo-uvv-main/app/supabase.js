import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zydoliywzwyfoqgtsbpz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZG9saXl3end5Zm9xZ3RzYnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzM3OTYsImV4cCI6MjA0NzUwOTc5Nn0.7q0F_2KPbU0xlxsMFTplQn5c21H3sbaXVmw9nHiuHko';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);