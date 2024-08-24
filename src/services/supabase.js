import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gowpoioeroylmyhdrnus.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvd3BvaW9lcm95bG15aGRybnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5OTU0NjQsImV4cCI6MjAzOTU3MTQ2NH0.OVvy-TYJ6urysNKwn95K6bcl5f6xGLacvGYx3u2Uf4c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
