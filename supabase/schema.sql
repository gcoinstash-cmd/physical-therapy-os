-- KINETIC SPINE & SPORTS PHYSICAL THERAPY OS
-- SCHEMA V1.0.0 WITH ROW LEVEL SECURITY (RLS)

CREATE TABLE IF NOT EXISTS pt_patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  injury_chief_complaint TEXT NOT NULL,
  insurance_carrier TEXT,
  insurance_member_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS therapy_programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  session_price NUMERIC(10,2) NOT NULL,
  duration_weeks INT NOT NULL,
  active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS clinical_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES pt_patients(id) ON DELETE CASCADE,
  program_id UUID REFERENCES therapy_programs(id),
  clinician_name TEXT NOT NULL,
  session_time TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'scheduled', -- scheduled, in_treatment, completed, cancelled
  clinical_soap_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS biomechanical_telemetry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES pt_patients(id) ON DELETE CASCADE,
  metric_name TEXT NOT NULL, -- Bilateral Jump Asymmetry, Peak Eccentric Force, Knee Flexion ROM
  measured_value NUMERIC(10,2) NOT NULL,
  unit TEXT NOT NULL,
  target_threshold TEXT,
  recorded_at DATE NOT NULL
);

-- ENABLE RLS
ALTER TABLE pt_patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE therapy_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE clinical_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE biomechanical_telemetry ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "Public programs read" ON therapy_programs FOR SELECT USING (true);
CREATE POLICY "Staff all access programs" ON therapy_programs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access patients" ON pt_patients FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access sessions" ON clinical_sessions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access telemetry" ON biomechanical_telemetry FOR ALL USING (auth.role() = 'authenticated');
