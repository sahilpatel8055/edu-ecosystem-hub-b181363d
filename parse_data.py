import os
import json
import re

def clean_text(text):
    text = re.sub(r'\[.*?\]\(.*?\)', '', text)
    text = re.sub(r'!\[.*?\]\(.*?\)', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_specialization(filename, slug, is_ma):
    with open(filename, 'r') as f:
        content = f.read()
    
    data = {"slug": slug}
    
    # Definition
    def_match = re.search(r'#.*?\n\n(.*?)\n', content, re.S)
    data["definition"] = clean_text(def_match.group(1))[:350] + "..." if def_match else "Advanced program focusing on professional skills and academic depth in the chosen field."
    
    # Highlights
    h = {
        "duration": "2 Years" if is_ma else "3 Years",
        "eligibility": "Graduation" if is_ma else "10+2",
        "fee_range_inr": "20,000 - 1,20,000",
        "mode": "Online / Distance",
        "approvals": "UGC-DEB, AICTE, NAAC",
        "avg_salary": "3 - 7 LPA"
    }
    
    fee_m = re.search(r'INR (\d+,\d+) to INR (\d+,\d+)', content)
    if fee_m: h["fee_range_inr"] = f"{fee_m.group(1)} - {fee_m.group(2)}"
    data["highlights"] = h
    
    # Scope
    data["scope"] = f"The scope of Online {slug.replace('-', ' ').title()} includes roles in diverse sectors like corporate firms, NGOs, government agencies, and research institutions, offering strong growth potential."
    
    # Eligibility
    data["eligibility_bullets"] = [
        "Bachelor degree from recognized university" if is_ma else "10+2 from a recognized board",
        "Minimum 45-50% marks in previous qualification",
        "No specific entrance exam or age limit"
    ]
    
    # Admission
    data["admission_steps"] = [
        "Visit the official website",
        "Fill the online application form",
        "Upload scanned academic & identity documents",
        "Pay the course fee online",
        "Get enrollment confirmation via email"
    ]
    
    # Reasons
    data["reasons_online"] = [
        "Flexible learning for working professionals",
        "Affordable fee structure compared to regular",
        "Globally recognized UGC-DEB approved degree",
        "Interactive virtual classrooms & digital resources",
        "Opportunity to earn while you learn"
    ]
    
    # Syllabus
    sems = 4 if is_ma else 6
    syllabus = {}
    sem_sections = re.findall(r'Semester (\d+)\n(.*?)(?=\nSemester \d+|\n#|##)', content, re.S | re.I)
    for num, text in sem_sections:
        subs = [clean_text(s) for s in re.findall(r'[-*]\s*(.*)', text) if len(s) > 5]
        if subs: syllabus[f"Sem {num}"] = subs[:3]
    
    # Fill missing sems
    for i in range(1, sems + 1):
        key = f"Sem {i}"
        if key not in syllabus:
            syllabus[key] = ["Core Subject Analysis", "Specialized Elective", "Industry Project"]
    data["syllabus"] = syllabus
    
    # Job Roles
    data["job_roles"] = [
        {"role": "Professional Consultant", "salary": "5-8 LPA"},
        {"role": "Senior Analyst", "salary": "4-6 LPA"},
        {"role": "Strategic Manager", "salary": "6-10 LPA"}
    ]
    
    data["recruiters_industries"] = "Top MNCs, Financial Institutions, NGOs, Education Sector, and Government Organizations."
    
    # FAQs
    data["faqs"] = [
        {"q": "Is this degree valid?", "a": "Yes, it is UGC-DEB approved and equivalent to a regular degree."},
        {"q": "Are exams online?", "a": "Yes, examinations are typically conducted in a proctored online format."},
        {"q": "Can I apply for government jobs?", "a": "Yes, the degree is fully recognized for all government recruitment."},
        {"q": "Is study material provided?", "a": "Yes, universities provide digital resources and recorded lectures."},
        {"q": "What is the minimum eligibility?", "a": f"{'Graduation' if is_ma else '10+2'} with 45-50% marks."}
    ]
    
    return data

def get_mcom_hub():
    return [
        {"specialization": "MCom Financial Management", "description": "Focuses on advanced finance, accounting, and investment analysis."},
        {"specialization": "MCom Accounting and Finance", "description": "Specialises in corporate reporting, auditing, and financial management."},
        {"specialization": "MCom Marketing", "description": "Covers consumer behaviour, marketing research, and digital strategies."},
        {"specialization": "MCom Banking and Finance", "description": "Deals with banking laws, retail banking, and financial services."},
        {"specialization": "MCom Fintech", "description": "Blends technology with finance including blockchain and data analytics."},
        {"specialization": "MCom International Business", "description": "Focuses on global trade, EXIM policies, and international finance."}
    ]

slugs = [
    ("sociology", True), ("political-science", True), ("english", True), ("education", True),
    ("e-accounting", False), ("international-finance-accounting", False), 
    ("e-commerce-management", False), ("accounting", False)
]

final = {}
for slug, is_ma in slugs:
    filename = slug + ".md"
    if os.path.exists(filename):
        final[slug] = extract_specialization(filename, slug, is_ma)

final["mcom_hub"] = get_mcom_hub()
print(json.dumps(final))
