# ⚡ 3-Minute Supabase Database Setup — Kinetic Spine & Sports PT OS

Follow these 3 simple steps to connect your production Supabase database:

### 1. Create a Supabase Project
- Head to [supabase.com](https://supabase.com) and create a new project.
- Give it a name: `kinetic-sports-pt` and set your database password.

### 2. Run Database Schema & Seed Data
- Navigate to the **SQL Editor** tab in your Supabase dashboard.
- Paste the entire contents of `supabase/schema.sql` and click **Run**.
- Open a new query, paste the contents of `supabase/seed.sql`, and click **Run**.

### 3. Connect Environment Keys
- Go to **Project Settings** > **API**.
- Copy your `Project URL` and `anon public` key.
- Create a `.env` file in the root of your application:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
- Run `npm run build` or `npm run dev` to start serving your physical therapy clinic OS.
