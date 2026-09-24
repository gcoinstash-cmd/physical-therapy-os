-- SEED DATA FOR KINETIC SPINE & SPORTS PT OS

INSERT INTO therapy_programs (slug, title, category, session_price, duration_weeks) VALUES
('acl-knee-biomechanics', 'ACL & Knee Biomechanics Return-to-Sport', 'ORTHOPEDIC SPORTS', 185.00, 20),
('spine-lumbar-decompression', 'Spine & Lumbar Herniation Decompression', 'SPINE & POSTURE', 175.00, 10),
('overhead-athlete-shoulder', 'Overhead Athlete Shoulder & Rotator Cuff', 'UPPER EXTREMITY', 180.00, 12),
('dry-needling-myofascial', 'Integrative Dry Needling & Myofascial Release', 'ACUTE PAIN RELIEF', 140.00, 6);

INSERT INTO pt_patients (full_name, email, phone, injury_chief_complaint, insurance_carrier, insurance_member_id) VALUES
('Marcus Vance', 'marcus.vance@example.com', '+1 (555) 928-1123', 'Right knee post-op ACL reconstruction patellar graft', 'Anthem Blue Cross PPO', 'XED8920194'),
('Claire Sterling', 'claire.sterling@example.com', '+1 (555) 438-9921', 'L4-L5 disc protrusion with radiating radiculopathy', 'Aetna Choice POS II', 'W481920381'),
('Julian Ramos', 'julian.ramos@example.com', '+1 (555) 302-8819', 'Supraspinatus tendinopathy and subacromial bursitis', 'Self-Pay Direct Access', 'N/A');

INSERT INTO biomechanical_telemetry (patient_id, metric_name, measured_value, unit, target_threshold, recorded_at) VALUES
((SELECT id FROM pt_patients WHERE email='marcus.vance@example.com'), 'Bilateral Jump Asymmetry', 4.2, '%', '< 10%', '2026-09-22'),
((SELECT id FROM pt_patients WHERE email='marcus.vance@example.com'), 'Peak Eccentric Deceleration Force', 3850.0, 'N', '> 3500 N', '2026-09-22'),
((SELECT id FROM pt_patients WHERE email='marcus.vance@example.com'), 'Knee Flexion Range of Motion', 142.0, 'deg', '> 135 deg', '2026-09-22');
