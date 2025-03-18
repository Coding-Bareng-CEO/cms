const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ejfdkyqthzjwicnhhqct.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZmRreXF0aHpqd2ljbmhocWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMDg3NTUsImV4cCI6MjA1Nzg4NDc1NX0.bPnmE-7nCGH6BiqwpdIl0f729kw18bK6FtRNEbYawx0'; // Replace with your Supabase Anon Key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;
