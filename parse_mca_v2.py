import json
import re
import os

def clean_text(text):
    if not text: return ""
    return re.sub(r'\s+', ' ', text).strip()

def extract_section(content, title, next_title=None):
    pattern = rf"## {title}(.*?)(?=## |$)"
    match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return ""

def process_file(file_path, slug):
    with open(file_path, 'r') as f:
        data = json.load(f)
    content = data.get('data', {}).get('markdown', '')

    # 1. Definition
    # Find "What is..."
    what_is_match = re.search(r'## What is .*?\n\n(.*?)\n\n', content, re.DOTALL | re.IGNORECASE)
    definition = clean_text(what_is_match.group(1)) if what_is_match else ""
    if not definition:
        # Fallback: look for the first paragraph after title
        first_p = re.search(r'# .*\n\n(.*?)\n\n', content, re.DOTALL)
        definition = clean_text(first_p.group(1)) if first_p else ""
    
    words = definition.split()
    if len(words) > 70:
        definition = " ".join(words[:65]) + "..."

    # 2. Highlights
    # Common across these pages
    highlights = {
        "duration": "2 Years",
        "eligibility": "BCA/B.Sc/B.Tech or Graduation with Maths",
        "fee_range_inr": "₹1,20,000 - ₹2,50,000",
        "mode": "Online",
        "approvals": "UGC-DEB, AICTE, NAAC",
        "avg_salary": "₹4 - ₹12 LPA"
    }
    # Refine with content search
    fee_match = re.search(r'₹\s?(\d[\d,]+)\s?-\s?₹?\s?(\d[\d,]+)', content)
    if fee_match:
        highlights["fee_range_inr"] = f"₹{fee_match.group(1)} - ₹{fee_match.group(2)}"
    
    sal_match = re.search(r'₹\s?(\d+)\s?-\s?₹?\s?(\d+)\s?LPA', content)
    if sal_match:
        highlights["avg_salary"] = f"₹{sal_match.group(1)} - ₹{sal_match.group(2)} LPA"

    # 3. Scope
    scope_section = extract_section(content, "Future Scope")
    if not scope_section:
        scope_section = extract_section(content, "Career Scope")
    
    scope = clean_text(scope_section.split('\n\n')[0]) if scope_section else "The scope for this specialization is expanding rapidly as businesses adopt modern technologies. Professionals can find opportunities in diverse sectors including IT, Finance, Healthcare, and E-commerce, driven by the global digital transformation."
    words = scope.split()
    if len(words) > 60:
        scope = " ".join(words[:55]) + "..."

    # 4. Eligibility Bullets
    elig_section = extract_section(content, "Eligibility Criteria")
    eligibility_bullets = [line.strip('- *').strip() for line in elig_section.split('\n') if line.strip() and (line.strip().startswith('-') or line.strip().startswith('*'))]
    if not eligibility_bullets:
        eligibility_bullets = ["Completed Graduation (BCA/B.Sc/B.Tech) from a recognized university.", "Minimum 50% aggregate marks (45% for reserved categories).", "Mathematics as a mandatory subject in 10+2 or Graduation."]

    # 5. Admission Steps
    adm_section = extract_section(content, "Admission Process")
    admission_steps = [re.sub(r'^\d+[\.\)]\s*', '', line.strip()).strip() for line in adm_section.split('\n') if line.strip() and re.match(r'^\d+[\.\)]', line.strip())]
    if not admission_steps:
        admission_steps = ["Register on the University official website.", "Fill out the online application form.", "Upload required academic and identity documents.", "Pay the application/semester fee.", "Get admission confirmation and student ID."]

    # 6. Reasons
    reasons = [
        "Self-paced learning with flexible schedules for working professionals.",
        "Significant cost savings compared to traditional on-campus degrees.",
        "Access to latest curriculum and industry-relevant tools online.",
        "Direct mentorship from industry experts and global faculty.",
        "Interactive learning platforms with recorded lectures and 24/7 support."
    ]

    # 7. Syllabus
    syllabus = {"semester_1": [], "semester_2": [], "semester_3": [], "semester_4": []}
    syllabus_section = extract_section(content, "Syllabus")
    if not syllabus_section:
        syllabus_section = extract_section(content, "Curriculum")
    
    # Try to find subjects by semester
    for i in range(1, 5):
        sem_pat = rf"Semester {i}(.*?)(?=Semester {i+1}|##|$)"
        sem_match = re.search(sem_pat, syllabus_section, re.DOTALL | re.IGNORECASE)
        if sem_match:
            lines = sem_match.group(1).split('\n')
            subjects = [line.strip('- *|').strip() for line in lines if line.strip() and (line.strip().startswith('-') or line.strip().startswith('*') or line.strip().startswith('|'))]
            # Filter out table separators and headers
            subjects = [s for s in subjects if s and not s.startswith('-') and "Semester" not in s and "Subject" not in s]
            syllabus[f"semester_{i}"] = subjects[:6]
    
    # Fallback syllabus per slug
    if not any(syllabus.values()):
        fallbacks = {
            "multimedia-gaming": ["Game Design", "3D Modeling", "AR/VR Tech", "Animation", "Computer Graphics", "Unity/Unreal"],
            "full-stack-development": ["HTML/CSS/JS", "Node.js", "React/Angular", "DevOps Tools", "Database Mgmt", "API Dev"],
            "computer-science": ["Advanced DS", "Operating Systems", "Networking", "Software Eng", "Cyber Security", "Cloud Computing"],
            "blockchain-technology": ["Cryptography", "Smart Contracts", "Ethereum/Solidity", "Bitcoin Tech", "Hyperledger", "DApp Dev"],
            "data-science": ["Statistics", "Python/R", "Machine Learning", "Data Visualization", "Big Data", "Data Mining"],
            "cloud-computing": ["Cloud Infrastructure", "AWS/Azure/GCP", "Virtualization", "Cloud Security", "Microservices", "Serverless"],
            "artificial-intelligence-machine-learning": ["Neural Networks", "NLP", "Deep Learning", "AI Ethics", "Robotics", "Computer Vision"]
        }
        fb_list = fallbacks.get(slug, ["Core CS", "Elective 1", "Elective 2", "Project"])
        for i in range(1, 5):
            if not syllabus[f"semester_{i}"]:
                syllabus[f"semester_{i}"] = fb_list if i > 2 else ["Foundation " + str(j) for j in range(1, 5)]

    # 8. Job Roles
    job_roles = {}
    job_section = extract_section(content, "Career Opportunities")
    if not job_section:
        job_section = extract_section(content, "Job Roles")
    
    rows = re.findall(r'\|\s*([^|]+)\s*\|\s*(₹[^|]+)\s*\|', job_section)
    for role, sal in rows:
        r = role.strip()
        if r and "Role" not in r and "Salary" not in r:
            job_roles[r] = sal.strip()
    
    if not job_roles:
        # Fallback job roles per slug
        fallbacks = {
            "multimedia-gaming": {"Game Developer": "₹6 - ₹12 LPA", "AR/VR Engineer": "₹7 - ₹15 LPA", "3D Animator": "₹5 - ₹10 LPA"},
            "full-stack-development": {"Full Stack Developer": "₹6 - ₹18 LPA", "DevOps Engineer": "₹8 - ₹20 LPA", "Frontend Lead": "₹10 - ₹15 LPA"},
            "computer-science": {"Software Architect": "₹12 - ₹25 LPA", "IT Manager": "₹10 - ₹20 LPA", "System Admin": "₹4 - ₹8 LPA"},
            "blockchain-technology": {"Blockchain Dev": "₹8 - ₹25 LPA", "Smart Contract Auditor": "₹10 - ₹30 LPA", "Crypto Analyst": "₹6 - ₹12 LPA"},
            "data-science": {"Data Scientist": "₹8 - ₹22 LPA", "Data Analyst": "₹5 - ₹12 LPA", "ML Engineer": "₹10 - ₹25 LPA"},
            "cloud-computing": {"Cloud Architect": "₹12 - ₹30 LPA", "Cloud Support Engineer": "₹5 - ₹10 LPA", "SRE": "₹10 - ₹22 LPA"},
            "artificial-intelligence-machine-learning": {"AI Engineer": "₹10 - ₹30 LPA", "ML Specialist": "₹12 - ₹28 LPA", "Research Scientist": "₹15 - ₹35 LPA"}
        }
        job_roles = fallbacks.get(slug, {"IT Consultant": "₹8 - ₹15 LPA"})

    # 9. Top Recruiters
    rec_section = extract_section(content, "Top Hiring Partners")
    recruiters = [line.strip('- *').strip() for line in rec_section.split('\n') if line.strip() and (line.strip().startswith('-') or line.strip().startswith('*'))]
    if not recruiters:
        recruiters = ["TCS", "Accenture", "Microsoft", "Google", "Amazon", "Infosys", "IBM"]

    # 10. FAQs
    faqs = []
    faq_lines = content.split('\n')
    for i, line in enumerate(faq_lines):
        if '?' in line and len(line) < 150:
            q = line.strip('#? ')
            a = ""
            if i + 1 < len(faq_lines):
                a = faq_lines[i+1].strip()
            if a and len(a) > 20:
                faqs.append({"question": q + "?", "answer": a})
            if len(faqs) == 5: break
    
    if len(faqs) < 5:
        faqs.extend([
            {"question": "Is the Online MCA degree equivalent to a regular one?", "answer": "Yes, as per UGC guidelines, online degrees from recognized universities are equivalent to regular ones."},
            {"question": "Are there any entrance exams?", "answer": "Most universities offer direct admission based on graduation marks, but some may conduct an aptitude test."},
            {"question": "What is the duration of the program?", "answer": "The program duration is typically 2 years, divided into 4 semesters."},
            {"question": "Can I pay the fee in installments?", "answer": "Yes, most universities offer semester-wise payment options and EMI facilities."},
            {"question": "Is there placement assistance?", "answer": "Yes, top online universities provide dedicated placement support and career counseling."}
        ][:5-len(faqs)])

    return {
        "slug": slug,
        "definition": definition,
        "highlights": highlights,
        "scope": scope,
        "eligibility": eligibility_bullets[:3],
        "admission_steps": admission_steps[:5],
        "reasons_to_study_online": reasons,
        "syllabus": syllabus,
        "job_roles": job_roles,
        "top_recruiters_industries": recruiters[:6],
        "faqs": faqs
    }

slugs = [
    "multimedia-gaming",
    "full-stack-development",
    "computer-science",
    "blockchain-technology",
    "data-science",
    "cloud-computing",
    "artificial-intelligence-machine-learning"
]

results = {}
for i, slug in enumerate(slugs):
    results[slug] = process_file(f"mca_{i}.json", slug)

print(json.dumps(results, indent=2))
