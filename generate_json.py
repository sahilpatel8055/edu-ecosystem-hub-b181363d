import json

data = {
    "marketing": {
        "definition": "Online MBA Marketing equips students with brand management, consumer behavior, and digital expertise. It blends traditional principles with AI-driven strategies to prepare professionals for leading customer-centric business growth and innovative campaigns.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "50k-10L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "5-25 LPA"},
        "scope": "Indian marketing grows at 9.9% CAGR. Surging digital ad spends create massive demand for SEO and strategy experts in global MNCs and startups.",
        "eligibility": ["Bachelor's degree from recognized university", "Minimum 50% aggregate marks", "Reserved category 5% relaxation"],
        "admission": ["Online application", "Document upload", "Fee payment", "Counseling/Interview"],
        "why_study_online": ["Flexible schedule", "Low cost", "Networking", "Skill update", "UGC recognized"],
        "syllabus": {
            "sem_1": ["Management", "Economics", "OB", "Law", "Accounting"],
            "sem_2": ["Operations", "Finance", "HRM", "Marketing", "Digital"],
            "sem_3": ["Brand", "Consumer Behavior", "Strategy", "CRM", "Sales"],
            "sem_4": ["International", "Services", "Research", "Ethics", "Project"]
        },
        "job_roles": {"Digital Manager": "11-24 LPA", "Marketing Manager": "8-18 LPA", "Sales Manager": "6-21 LPA", "Social Media": "8-26 LPA", "Research Analyst": "4-17 LPA"},
        "recruiters": ["HUL", "TCS", "ITC", "Deloitte", "Amazon"],
        "faqs": [{"q": "Worth it?", "a": "Yes, if UGC approved."}, {"q": "Duration?", "a": "2-4 years."}, {"q": "Entrance?", "a": "Depends on college."}, {"q": "Work-study?", "a": "Yes, designed for it."}, {"q": "Jobs?", "a": "High hiring in digital."}]
    },
    "healthcare": {
        "definition": "Focuses on hospital operations, patient care management, and healthcare policy. It merges management principles with clinical environment knowledge for future medical facility administrators and healthcare system leaders.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "90k-1.9L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "5-20 LPA"},
        "scope": "Private hospital boom and digital health records increase demand for skilled administrators, pharmaceutical managers, and healthcare consultants globally.",
        "eligibility": ["Bachelor's degree in any discipline", "Minimum 50% marks", "Relevant experience preferred"],
        "admission": ["Online portal submission", "Transcript upload", "Fee payment", "Counseling"],
        "why_study_online": ["Work-pace balance", "Case studies", "Networking", "Low cost", "Digital skill"],
        "syllabus": {
            "sem_1": ["Management", "OB", "Accounting", "Comm", "Disaster"],
            "sem_2": ["HRM", "Marketing", "Finance", "Operations", "Strategy"],
            "sem_3": ["Hospital Services", "Legal", "Health Marketing", "Quality"],
            "sem_4": ["Administration", "Waste Management", "Ethics", "Project"]
        },
        "job_roles": {"Hospital Admin": "5-12 LPA", "Healthcare Consultant": "7-18 LPA", "Pharma Manager": "9-20 LPA", "Hospital CFO": "10-25 LPA", "Operations Manager": "6-13 LPA"},
        "recruiters": ["Apollo", "Max", "Fortis", "Pharma firms"],
        "faqs": [{"q": "Govt job valid?", "a": "Yes, if UGC-DEB approved."}, {"q": "Medical background?", "a": "Not required."}, {"q": "Exams?", "a": "Usually online proctored."}, {"q": "Freshers?", "a": "Yes, can apply."}, {"q": "Clinical?", "a": "Admin focus only."}]
    },
    "it": {
        "definition": "Aligns IT goals with business strategy. Covers cloud, AI, and IoT to prepare managers who oversee digital infrastructure, network security, and technological innovation in organizations.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "90k-2L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "5-28 LPA"},
        "scope": "IT sector to hit 10% of India's GDP by 2026. High demand for digital transformation leaders across software, hardware, and services globally.",
        "eligibility": ["Graduation in any stream", "Minimum 50% aggregate", "Basic tech interest"],
        "admission": ["Website registration", "Application form", "Document upload", "Fee payment"],
        "why_study_online": ["Cross-disciplinary", "Tech update", "Career growth", "Expert faculty", "ROI"],
        "syllabus": {
            "sem_1": ["Process", "Economics", "DBA", "Quant", "Accounting"],
            "sem_2": ["System Analysis", "Marketing", "HRM", "Law", "Operations"],
            "sem_3": ["ERP Advance", "CSR", "Information Systems", "Software Project"],
            "sem_4": ["ERP Admin", "Quality", "E-CRM", "E-Business", "Security"]
        },
        "job_roles": {"IT Manager": "3-26 LPA", "CIO": "17-100+ LPA", "Security Manager": "8-41 LPA", "DBA Manager": "1-35 LPA", "Project Coord": "2-9 LPA"},
        "recruiters": ["Accenture", "IBM", "TCS", "Google", "Amazon"],
        "faqs": [{"q": "Coding needed?", "a": "Basic helps, not mandatory."}, {"q": "Growth?", "a": "Huge in India GDP."}, {"q": "Toughest role?", "a": "IT Project Manager."}, {"q": "Recognition?", "a": "Yes, by top firms."}, {"q": "Switching?", "a": "Possible from any stream."}]
    },
    "banking-finance": {
        "definition": "Provides foundation in money management, fraud prevention, and banking regulations. Integrates fintech and economic principles for leadership in financial institutions and global consultancies.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "50k-8L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "4-29 LPA"},
        "scope": "Fintech boom and retail finance expansion create massive demand for wealth managers, risk analysts, and investment bankers globally.",
        "eligibility": ["Graduation degree", "Min 50% marks", "1yr experience preferred"],
        "admission": ["Online profile", "Verify email", "Form submission", "Fee payment"],
        "why_study_online": ["Work balance", "Fintech tools", "Low cost", "Networking", "Global degree"],
        "syllabus": {
            "sem_1": ["Economics", "Accounting", "OB", "Quant", "Ethics"],
            "sem_2": ["Entrepreneurship", "Marketing", "BFSI", "Law", "Analytics"],
            "sem_3": ["Research", "Operations", "Banking Domain", "KYC", "Service"],
            "sem_4": ["Financial Management", "Audit", "Digital Fraud", "Risk", "Thesis"]
        },
        "job_roles": {"Investment Banker": "7-20 LPA", "Portfolio Manager": "7-29 LPA", "Financial Analyst": "4-9 LPA", "Budget Analyst": "4-24 LPA", "Credit Risk": "5-15 LPA"},
        "recruiters": ["JPMorgan", "ICICI", "HDFC", "Goldman", "Deloitte"],
        "faqs": [{"q": "UGC approved?", "a": "Yes, ensures validity."}, {"q": "Installments?", "a": "Yes, semester-wise."}, {"q": "Exams?", "a": "Online proctored."}, {"q": "Experience?", "a": "Preferred but not mandatory."}, {"q": "Fintech?", "a": "Yes, included."}]
    },
    "int-business": {
        "definition": "Navigates global trade, international finance, and cross-cultural management. Teaches import/export laws and strategic negotiations for multinational operations and global brand expansion.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "40k-3L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "2-35 LPA"},
        "scope": "Booming international trade creates demand for leaders in global supply chains, MNC logistics, and international marketing across diverse world markets.",
        "eligibility": ["Bachelor's degree", "Minimum 50% marks", "NOC for sponsored"],
        "admission": ["Online portal", "Records upload", "Entrance exam (if)", "Fee payment"],
        "why_study_online": ["Global degree", "Trade master", "Self-pace", "Global cohort", "High pay"],
        "syllabus": {
            "sem_1": ["Process", "Communication", "Stats", "Accounting", "Economics"],
            "sem_2": ["Operations", "Finance", "Marketing", "MIS", "Research"],
            "sem_3": ["Methodology", "Legal", "Int Marketing", "MNC Mgmt", "Export-Import"],
            "sem_4": ["Strategy", "Business Env", "Logistics", "Law", "Finance"]
        },
        "job_roles": {"Global Marketer": "20.9 LPA", "Int Sales": "12.7 LPA", "Supply Chain": "14.3 LPA", "Financial Mgr": "16.9 LPA", "Project Mgr": "19.3 LPA"},
        "recruiters": ["MNCs", "Logistics", "Export houses", "Global banks"],
        "faqs": [{"q": "Global value?", "a": "Yes, UGC approved."}, {"q": "Duration?", "a": "2 years."}, {"q": "Skills?", "a": "Global trade & laws."}, {"q": "Work?", "a": "Designed for it."}, {"q": "Entrance?", "a": "Depends on college."}]
    },
    "retail": {
        "definition": "Covers store operations, e-commerce, and logistics. Focuses on consumer behavior, inventory management, and analytics for roles in traditional and digital retail sectors.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "65k-1.7L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "2.4-29 LPA"},
        "scope": "30% growth in retail sector offers 2M+ global jobs. E-commerce expansion drives need for managers in supply chain and customer loyalty.",
        "eligibility": ["Graduation degree", "40-50% marks", "Diploma holders (50%+) eligible"],
        "admission": ["Digital portal", "Form entry", "Upload docs", "Fee payment"],
        "why_study_online": ["Industry knowledge", "Cost-effective", "Work-study", "Hands-on", "Networking"],
        "syllabus": {
            "sem_1": ["MIS", "Management", "Stats", "Accounting", "Economics"],
            "sem_2": ["Cost", "Finance", "HRM", "Research", "Marketing"],
            "sem_3": ["Strategic Retail", "Analytics", "Brand", "E-Comm", "Innovation"],
            "sem_4": ["Buying Behavior", "Logistics", "Strategy", "Ethics", "Project"]
        },
        "job_roles": {"Supply Chain": "3-29 LPA", "Marketing Manager": "2.4-24 LPA", "E-comm Manager": "2.3-20 LPA", "Retail Analyst": "2.6-18 LPA", "CRM Manager": "1.5-7 LPA"},
        "recruiters": ["Reliance", "Flipkart", "Amazon", "Walmart", "Snapdeal"],
        "faqs": [{"q": "Good career?", "a": "Yes, high growth."}, {"q": "Recruiters?", "a": "Reliance, Amazon, etc."}, {"q": "Post-degree roles?", "a": "Store/Supply Manager."}, {"q": "Age limit?", "a": "None."}, {"q": "Role?", "a": "Staff & budget mgmt."}]
    },
    "business-analytics": {
        "definition": "Transforms raw data into strategic insights. Merges statistical analysis with management, using predictive modeling and big data tools for evidence-based decision-making in organizations.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "60k-10L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "5-14 LPA"},
        "scope": "Sector grows at 9.6% CAGR. Demand for data scientists and analysts surges across finance, health, and tech for consumer insights.",
        "eligibility": ["Bachelor's degree", "Any stream", "Math background helpful", "Work experience valued"],
        "admission": ["University selection", "Apply online", "Doc verify", "Fee payment"],
        "why_study_online": ["Global network", "High pay", "Flex learning", "High ROI", "Data leadership"],
        "syllabus": {
            "sem_1": ["Economics", "Finance", "Marketing", "Quant", "Operations"],
            "sem_2": ["HRM", "CRM", "Project mgmt", "Strategy", "Research"],
            "sem_3": ["Data Env", "Data mgmt", "Analytics", "Intelligence", "Mining"],
            "sem_4": ["Visualization", "Big Data", "Social/Web", "Modeling", "Project"]
        },
        "job_roles": {"Data Scientist": "14.4 LPA", "BI Manager": "23.2 LPA", "Business Analyst": "9.7 LPA", "Data Analyst": "7.5 LPA", "Financial Analyst": "6 LPA"},
        "recruiters": ["Amazon", "Deloitte", "Meta", "Accenture", "KPMG"],
        "faqs": [{"q": "Worth it?", "a": "High demand makes it so."}, {"q": "Cost?", "a": "60k-2L avg."}, {"q": "Jobs?", "a": "Analyst, Scientist, etc."}, {"q": "Non-math UG?", "a": "Yes, but prep needed."}, {"q": "Duration?", "a": "2 years."}]
    },
    "operations": {
        "definition": "Optimizes business processes for efficiency. Covers manufacturing, service delivery, logistics, and supply chain to minimize costs and lead production teams effectively.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "80k-10L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "8-16 LPA"},
        "scope": "$1 trillion manufacturing projection by 2026 drives need for managers in aviation, e-commerce, and logistics for senior executive roles.",
        "eligibility": ["Bachelor's (any stream)", "Min 50% marks", "Final year can apply"],
        "admission": ["Submit form", "Upload credentials", "Register fee", "Enrollment"],
        "why_study_online": ["Master tools", "Problem solving", "Global network", "Cost save", "Lean Six Sigma"],
        "syllabus": {
            "sem_1": ["OB", "Marketing", "Economics", "Accounting", "Mgmt Practice"],
            "sem_2": ["Info Systems", "Law", "Strategy", "Operations", "HRM"],
            "sem_3": ["Production/Planning", "Project mgmt", "Logistics", "Procurement", "Stats"],
            "sem_4": ["Work Design", "Tech mgmt", "Lean Six Sigma", "Research", "Project"]
        },
        "job_roles": {"Director Ops": "38-94 LPA", "QA Manager": "18-34 LPA", "Supply Chain": "14-30 LPA", "Logistics Mgr": "9-20 LPA", "Procurement Mgr": "15-27 LPA"},
        "recruiters": ["Amazon", "Boeing", "IBM", "Flipkart", "Accenture"],
        "faqs": [{"q": "Worth it?", "a": "Yes, impacts career."}, {"q": "Job types?", "a": "Ops Director, SCM Mgr."}, {"q": "Duration?", "a": "2 years."}, {"q": "Cost?", "a": "80k-3L avg."}, {"q": "Skills?", "a": "Inventory & Risk mgmt."}]
    },
    "finance": {
        "definition": "Focuses on strategic planning and control of financial resources. Covers investment, capital budgeting, and risk management for leadership roles in global banking and corporate sectors.",
        "highlights": {"duration": "2y", "eligibility": "UG degree", "fee_range_INR": "62k-3L", "mode": "Online", "approvals": "UGC-DEB", "avg_salary": "10-25 LPA"},
        "scope": "7% annual growth in global finance services. Fintech expertise is redefining roles in banking, audit, and wealth management leadership.",
        "eligibility": ["Graduation degree", "Min 50% marks", "Math interest helpful"],
        "admission": ["Online register", "Form details", "Submit docs", "Fee payment"],
        "why_study_online": ["High demand", "Pay boost", "Global view", "Flexible pace", "Cost saving"],
        "syllabus": {
            "sem_1": ["Economics", "Accounting", "Marketing", "Effectiveness", "Entrep"],
            "sem_2": ["BFSI", "OB", "Law", "Quant", "Analytics"],
            "sem_3": ["Research", "Operations", "Taxation", "Investment", "Fintech"],
            "sem_4": ["Environment", "Fixed Income", "Investment Banking", "Int Finance", "Thesis"]
        },
        "job_roles": {"CFO": "25-45 LPA", "Financial Analyst": "10-25 LPA", "Finance Manager": "8-27 LPA", "PE Manager": "7-18 LPA", "Account Manager": "8-25 LPA"},
        "recruiters": ["ICICI", "Accenture", "TCS", "EY", "Infosys", "PwC"],
        "faqs": [{"q": "Online Finance MBA?", "a": "Yes, widely available."}, {"q": "Worth it?", "a": "High ROI via hikes."}, {"q": "Avg cost?", "a": "1.5L-3L INR."}, {"q": "Recruiters?", "a": "Banks & IT firms."}, {"q": "Salary hike?", "a": "Up to 50% avg."}]
    }
}

print(json.dumps(data, separators=(',', ':')))
