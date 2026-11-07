-- Create waitlist table
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text default 'website',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Policy: Allow anyone (anon) to submit their email to the waitlist
create policy "Allow waitlist signups" on public.waitlist
  for insert
  with check (true);

-- Policy: Disallow public reads to protect user email privacy
create policy "Disable public reads" on public.waitlist
  for select
  using (false);

