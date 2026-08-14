/**
 * Authored specialisation records.
 *
 * One seed per researched subject area. A seed is level-neutral: the same
 * "Marketing" record powers Online MBA in Marketing and Online BBA in
 * Marketing, with the copy adapted through the SpecCtx passed at render time.
 * Nothing here is university-specific — university facts always come from the
 * dataset.
 */
import type { AuthoredSpec, SpecCtx } from "./types";

interface Seed {
  match: RegExp[];
  oneLiner: string;
  /** Sentence 1 of "What is …" — describes the subject itself. */
  subject: string;
  /** Sentence 2 — what the learner actually studies and builds. */
  learn: string;
  /** Market/demand sentence for the Scope section. */
  demand: string;
  /** Second scope sentence — where the work sits. */
  where: string;
  scopeAreas: [string, string][];
  subjectsPg: string[][];
  subjectsUg?: string[][];
  roles: { role: string; salary: string; detail: string }[];
  recruiters: string[];
  industries: string[];
  faqs?: { question: string; answer: string }[];
}

const seeds: Seed[] = [
  {
    match: [/^marketing/, /digital-marketing/, /sales-and-marketing/],
    oneLiner: "Brand, digital and consumer-behaviour track for growth and demand-generation roles.",
    subject:
      "Marketing is the discipline of finding demand, building a brand people trust and converting attention into revenue — today far more through search, performance media and CRM data than through print or television.",
    learn:
      "You study consumer behaviour, segmentation, brand and product management, pricing, sales-channel design, digital and performance marketing, marketing analytics and integrated campaign planning, and you finish with a live campaign or market-research capstone.",
    demand:
      "India's marketing and advertising spend keeps compounding at roughly 10% a year, and almost all of the incremental spend is digital — which is why the shortage is not of marketers but of marketers who can read a dashboard.",
    where:
      "Hiring sits in consumer brands, e-commerce and D2C, agencies, SaaS and fintech growth teams, and the marketing arms of banks, hospitals and education companies.",
    scopeAreas: [
      ["Performance & digital", "Paid search, social, SEO and marketing automation — the largest volume of openings."],
      ["Brand management", "Positioning, packaging, campaign ownership and category P&L in consumer companies."],
      ["Marketing analytics", "Attribution, cohort and funnel analysis; the fastest-growing pay band in marketing."],
      ["Sales & channel", "Distribution, key accounts and modern-trade management for FMCG and retail."],
      ["CRM & retention", "Lifecycle marketing, loyalty and win-back programmes in subscription and D2C businesses."],
      ["Market research", "Consumer insight, pricing research and category studies for brands and agencies."],
    ],
    subjectsPg: [
      ["Management Principles & Organisational Behaviour", "Managerial Economics", "Financial & Cost Accounting", "Business Statistics", "Business Communication"],
      ["Marketing Management", "Human Resource Management", "Financial Management", "Operations Management", "Legal Aspects of Business"],
      ["Consumer Behaviour", "Brand Management", "Digital & Social Media Marketing", "Sales & Distribution Management", "Marketing Research"],
      ["Integrated Marketing Communication", "Services & Retail Marketing", "Marketing Analytics", "Strategic Management", "Capstone Project"],
    ],
    subjectsUg: [
      ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication"],
      ["Marketing Fundamentals", "Business Statistics", "Organisational Behaviour", "Business Law"],
      ["Consumer Behaviour", "Advertising & Sales Promotion", "Cost Accounting", "Business Environment"],
      ["Digital Marketing", "Sales Management", "Market Research", "Financial Management"],
      ["Brand Management", "Retail Marketing", "Services Marketing", "Entrepreneurship"],
      ["Strategic Marketing", "Marketing Analytics", "International Marketing", "Project Work"],
    ],
    roles: [
      { role: "Digital Marketing Manager", salary: "₹8 – ₹24 LPA", detail: "Owns paid, organic and lifecycle channels against a CAC and revenue target." },
      { role: "Marketing Manager", salary: "₹8 – ₹18 LPA", detail: "Runs the plan, budget and agency roster for a brand or category." },
      { role: "Brand Manager", salary: "₹7 – ₹20 LPA", detail: "Owns positioning, packaging and campaign calendar for a product line." },
      { role: "Sales Manager", salary: "₹6 – ₹21 LPA", detail: "Carries a territory or channel number and manages the field team." },
      { role: "Social Media / Content Lead", salary: "₹5 – ₹16 LPA", detail: "Builds the organic engine and the always-on content calendar." },
      { role: "Market Research Analyst", salary: "₹4 – ₹17 LPA", detail: "Runs consumer studies, pricing tests and category tracking." },
    ],
    recruiters: ["HUL", "ITC", "Amazon", "TCS", "Deloitte", "Nykaa", "Reliance Retail"],
    industries: ["FMCG", "E-commerce & D2C", "Advertising & media", "BFSI", "SaaS & technology", "Healthcare"],
  },
  {
    match: [/hospital/, /healthcare/, /health-care/, /health-management/],
    oneLiner: "Hospital operations, healthcare quality and health-policy track for care-delivery management.",
    subject:
      "Hospital and healthcare management is the administration side of care delivery — patient flow, clinical support services, quality accreditation, medical records, insurance and cost control inside hospitals, diagnostic chains and insurers.",
    learn:
      "You study hospital planning and operations, healthcare quality and NABH/JCI accreditation, medical-records and health-information systems, healthcare finance and insurance, biomedical waste and safety, and healthcare marketing, closing with a hospital-process or quality-improvement project.",
    demand:
      "Private hospital chains, diagnostics networks and health insurers are expanding into tier-2 and tier-3 India at the same time as digital health records become mandatory, and administration headcount grows with every new bed added.",
    where:
      "Hospitals and hospital chains, diagnostic and pathology networks, health-insurance and TPA companies, pharmaceutical and medical-device firms, and public-health programmes.",
    scopeAreas: [
      ["Hospital operations", "Patient flow, OPD/IPD coordination, bed management and support services."],
      ["Quality & accreditation", "NABH/JCI documentation, clinical audits and patient-safety systems."],
      ["Health insurance & TPA", "Claims, empanelment, pre-authorisation and cashless desk management."],
      ["Healthcare analytics", "Occupancy, case-mix and revenue-cycle reporting for management."],
      ["Pharma & device management", "Product, territory and institutional-sales management."],
      ["Public health programmes", "Programme coordination with NGOs, trusts and government missions."],
    ],
    subjectsPg: [
      ["Management Principles & Organisational Behaviour", "Managerial Economics", "Accounting for Managers", "Business Statistics", "Healthcare Communication"],
      ["Human Resource Management", "Marketing Management", "Financial Management", "Operations Management", "Health Systems in India"],
      ["Hospital Planning & Operations", "Healthcare Quality & Accreditation", "Medical Records & Health Informatics", "Health Insurance & Managed Care", "Healthcare Law & Ethics"],
      ["Hospital Support & Utility Services", "Biomedical Waste & Safety Management", "Healthcare Marketing", "Strategic Management", "Capstone / Hospital Project"],
    ],
    roles: [
      { role: "Hospital Administrator", salary: "₹5 – ₹12 LPA", detail: "Runs day-to-day operations of a unit, floor or department." },
      { role: "Healthcare Consultant", salary: "₹7 – ₹18 LPA", detail: "Advises hospitals on process, cost and accreditation readiness." },
      { role: "Quality / NABH Manager", salary: "₹6 – ₹14 LPA", detail: "Owns audits, documentation and patient-safety indicators." },
      { role: "Pharma Product Manager", salary: "₹9 – ₹20 LPA", detail: "Owns a therapy portfolio, pricing and field-force enablement." },
      { role: "Claims / TPA Manager", salary: "₹5 – ₹12 LPA", detail: "Manages cashless desks, empanelment and claim turnaround." },
      { role: "Operations Manager (Diagnostics)", salary: "₹6 – ₹13 LPA", detail: "Runs collection centres, lab turnaround and logistics." },
    ],
    recruiters: ["Apollo Hospitals", "Fortis", "Max Healthcare", "Dr Lal PathLabs", "Star Health", "Cipla"],
    industries: ["Hospitals", "Diagnostics", "Health insurance", "Pharmaceuticals", "Medical devices", "Public health"],
    faqs: [
      { question: "Do I need a medical background?", answer: "No. These programmes are open to graduates from any stream; clinical knowledge is taught only to the depth an administrator needs." },
    ],
  },
  {
    match: [/information-technology/, /^it$/, /^it-/, /-it$/, /it-management/, /systems-management/],
    oneLiner: "Technology-management track aligning IT infrastructure, security and delivery with business goals.",
    subject:
      "IT management is the discipline of running technology as a business function — budgets, vendors, delivery teams, security posture and cloud spend — rather than writing the code yourself.",
    learn:
      "You study information systems, systems analysis and design, database and ERP administration, IT project and service management, cybersecurity governance, e-business models and IT strategy, and you close with an IT transformation or software-project capstone.",
    demand:
      "IT and IT-enabled services are on track to contribute close to a tenth of India's GDP, and every large enterprise is simultaneously running a cloud migration, a data programme and a security uplift — all of which need managers, not just engineers.",
    where:
      "IT services and consulting firms, product companies, the technology arms of banks and insurers, GCCs of global corporates, and public-sector digital programmes.",
    scopeAreas: [
      ["IT project delivery", "Scope, schedule, vendors and stakeholder reporting across delivery teams."],
      ["IT service management", "Incident, change and SLA management for enterprise operations."],
      ["Cybersecurity governance", "Policy, audit, access control and compliance with IT and data law."],
      ["ERP & enterprise systems", "SAP/Oracle rollout, configuration and support ownership."],
      ["Cloud & infrastructure", "Capacity, cost and vendor management for cloud estates."],
      ["Business analysis", "Translating business requirements into system specifications."],
    ],
    subjectsPg: [
      ["Management Process & Organisational Behaviour", "Managerial Economics", "Accounting for Managers", "Quantitative Techniques", "Business Communication"],
      ["Systems Analysis & Design", "Database Management Systems", "Marketing Management", "Human Resource Management", "Legal Aspects of Business"],
      ["Management Information Systems", "IT Project Management", "Enterprise Resource Planning", "Software Quality Management", "Research Methodology"],
      ["Information Security & Governance", "Cloud & Emerging Technologies", "E-Business & Digital Platforms", "IT Strategy", "Capstone Project"],
    ],
    roles: [
      { role: "IT Manager", salary: "₹8 – ₹26 LPA", detail: "Owns infrastructure, applications and the IT budget for a business unit." },
      { role: "IT Project Manager", salary: "₹9 – ₹24 LPA", detail: "Delivers programmes across engineering, vendor and business teams." },
      { role: "Information Security Manager", salary: "₹10 – ₹35 LPA", detail: "Runs policy, audits and incident response for the enterprise." },
      { role: "Business Systems Analyst", salary: "₹6 – ₹16 LPA", detail: "Bridges business requirements and technical design." },
      { role: "ERP Functional Consultant", salary: "₹7 – ₹22 LPA", detail: "Configures and rolls out SAP/Oracle modules for clients." },
      { role: "IT Service Delivery Lead", salary: "₹8 – ₹20 LPA", detail: "Owns SLAs, escalations and support operations." },
    ],
    recruiters: ["TCS", "Accenture", "Infosys", "IBM", "Wipro", "Capgemini"],
    industries: ["IT services", "BFSI technology", "Global capability centres", "Telecom", "Manufacturing IT", "Government digital"],
  },
  {
    match: [/banking/, /bfsi/, /banking-and-finance/, /banking-finance/],
    oneLiner: "Banking, fintech and risk track for BFSI roles across lending, wealth and compliance.",
    subject:
      "Banking and finance is the business of moving, lending and safeguarding money — retail and corporate banking, credit assessment, treasury, regulation and, increasingly, the fintech rails underneath all of it.",
    learn:
      "You study banking operations and products, credit appraisal, financial markets and instruments, risk and regulatory compliance, KYC/AML and digital-fraud control, fintech and payments, and you finish with a credit or risk-analysis project.",
    demand:
      "Retail credit, insurance penetration and UPI-led payments are all expanding at the same time, and every new product line adds compliance, risk and relationship headcount to banks, NBFCs and fintechs.",
    where:
      "Private and public-sector banks, NBFCs, insurance companies, wealth and broking firms, fintechs, and the BFSI practices of consulting and analytics firms.",
    scopeAreas: [
      ["Retail & corporate banking", "Relationship management, liabilities and lending across branch and corporate desks."],
      ["Credit & risk", "Appraisal, underwriting, portfolio monitoring and collections strategy."],
      ["Wealth & investments", "Portfolio advisory, mutual funds and insurance-linked planning."],
      ["Compliance & AML", "KYC, transaction monitoring, audit and regulatory reporting."],
      ["Fintech & payments", "Product and operations roles in lending, payments and neobanking."],
      ["Treasury & markets", "Liquidity, forex and fixed-income desk support functions."],
    ],
    subjectsPg: [
      ["Management Principles & Organisational Behaviour", "Managerial Economics", "Financial Accounting", "Business Statistics", "Business Ethics"],
      ["Financial Management", "Marketing of Financial Services", "Human Resource Management", "Business Law & Banking Regulation", "Business Analytics"],
      ["Banking Operations & Products", "Credit Appraisal & Risk Management", "Financial Markets & Instruments", "KYC, AML & Compliance", "Research Methodology"],
      ["Investment Banking & Wealth Management", "Insurance & Risk", "Fintech, Payments & Digital Fraud", "Strategic Management", "Capstone Project"],
    ],
    subjectsUg: [
      ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication"],
      ["Banking Theory & Practice", "Business Statistics", "Business Law", "Organisational Behaviour"],
      ["Corporate Accounting", "Financial Markets", "Cost Accounting", "Insurance Principles"],
      ["Credit & Lending Operations", "Income Tax", "Financial Management", "Digital Banking"],
      ["Investment Analysis", "Risk & Compliance", "Auditing", "Entrepreneurship"],
      ["International Banking", "Fintech & Payments", "Strategic Management", "Project Work"],
    ],
    roles: [
      { role: "Investment Banking Analyst", salary: "₹7 – ₹20 LPA", detail: "Builds models, pitch material and deal documentation." },
      { role: "Portfolio / Wealth Manager", salary: "₹7 – ₹29 LPA", detail: "Manages HNI portfolios against risk and return mandates." },
      { role: "Credit Risk Analyst", salary: "₹5 – ₹15 LPA", detail: "Appraises borrowers and monitors portfolio quality." },
      { role: "Financial Analyst", salary: "₹4 – ₹12 LPA", detail: "Forecasting, variance analysis and management reporting." },
      { role: "Relationship Manager", salary: "₹4 – ₹14 LPA", detail: "Owns a book of retail or corporate banking clients." },
      { role: "Compliance / AML Officer", salary: "₹5 – ₹16 LPA", detail: "Runs KYC, monitoring and regulatory reporting." },
    ],
    recruiters: ["HDFC Bank", "ICICI Bank", "Axis Bank", "Deloitte", "JPMorgan", "Bajaj Finserv"],
    industries: ["Banking", "NBFC & lending", "Insurance", "Fintech", "Wealth management", "Consulting"],
  },
  {
    match: [/international-business/, /global-business/, /export/, /foreign-trade/],
    oneLiner: "Cross-border trade, global supply chain and international finance track.",
    subject:
      "International business covers everything that changes when a company sells or sources across a border — trade documentation and EXIM policy, currency and payment risk, global logistics, and managing teams across cultures and time zones.",
    learn:
      "You study international trade theory and policy, export-import documentation, international marketing, global supply chain and logistics, international finance and forex, and cross-cultural management, ending with a country-entry or export-plan project.",
    demand:
      "Indian exports, global capability centres and China-plus-one sourcing have all expanded together, so companies need people who can read an incoterm, a letter of credit and a customs schedule without outsourcing the judgement.",
    where:
      "Export houses and manufacturers, freight-forwarding and logistics firms, global banks' trade-finance desks, MNC regional offices and GCCs, and international consulting.",
    scopeAreas: [
      ["Export–import operations", "Documentation, customs, incoterms and compliance for shipments."],
      ["Global supply chain", "Sourcing, freight, warehousing and landed-cost management."],
      ["International marketing", "Country entry, distributor networks and global brand adaptation."],
      ["Trade finance", "Letters of credit, forex exposure and export credit at bank desks."],
      ["Global sourcing", "Vendor development and quality management across geographies."],
      ["Cross-border strategy", "Market-entry evaluation and regulatory due diligence."],
    ],
    subjectsPg: [
      ["Management Process", "Managerial Economics", "Accounting for Managers", "Business Statistics", "Business Communication"],
      ["Marketing Management", "Financial Management", "Operations Management", "Management Information Systems", "Research Methodology"],
      ["International Business Environment", "International Marketing", "Export–Import Documentation & Procedures", "International Financial Management", "Cross-Cultural Management"],
      ["Global Supply Chain & Logistics", "International Trade Law", "Foreign Exchange Management", "Global Strategy", "Capstone Project"],
    ],
    roles: [
      { role: "International Marketing Manager", salary: "₹10 – ₹21 LPA", detail: "Owns overseas markets, distributors and country plans." },
      { role: "Export–Import Manager", salary: "₹6 – ₹15 LPA", detail: "Runs documentation, customs and shipment compliance." },
      { role: "Global Supply Chain Manager", salary: "₹9 – ₹18 LPA", detail: "Manages sourcing, freight and landed cost across regions." },
      { role: "Trade Finance Officer", salary: "₹6 – ₹14 LPA", detail: "Processes LCs, guarantees and export credit at a bank." },
      { role: "International Business Development", salary: "₹7 – ₹19 LPA", detail: "Opens new geographies and partner networks." },
      { role: "Logistics Manager", salary: "₹6 – ₹14 LPA", detail: "Owns 3PL partners, transit time and freight spend." },
    ],
    recruiters: ["Maersk", "DHL", "Reliance", "Tata International", "HSBC", "Adani Logistics"],
    industries: ["Logistics & shipping", "Manufacturing & exports", "Trade finance", "FMCG", "Pharmaceuticals", "Consulting"],
  },
  {
    match: [/retail/, /supply-chain-and-retail/],
    oneLiner: "Store operations, category management and omnichannel retail track.",
    subject:
      "Retail management is about the economics of selling to consumers at scale — assortment and pricing, store or platform operations, inventory and shrinkage, and the omnichannel bridge between a shelf and an app.",
    learn:
      "You study retail formats and store operations, category and buying management, retail supply chain, visual merchandising, retail analytics, e-commerce and omnichannel strategy, and finish with a category or store-performance project.",
    demand:
      "Organised retail and quick commerce are both taking share from unorganised trade, and each new format needs category managers, supply-chain planners and store leaders who can read a P&L.",
    where:
      "Retail chains and malls, quick-commerce and e-commerce platforms, consumer brands' modern-trade teams, and retail supply-chain and 3PL firms.",
    scopeAreas: [
      ["Store operations", "Staffing, shrinkage, service standards and store P&L ownership."],
      ["Category & buying", "Assortment, margin, vendor negotiation and markdown planning."],
      ["Retail supply chain", "Replenishment, warehousing and last-mile for stores and dark stores."],
      ["E-commerce & omnichannel", "Marketplace listings, pricing and fulfilment integration."],
      ["Retail analytics", "Basket, footfall and conversion analysis for merchandising decisions."],
      ["Loyalty & CRM", "Retention programmes and personalised offers across channels."],
    ],
    subjectsPg: [
      ["Management Principles", "Managerial Economics", "Accounting for Managers", "Business Statistics", "Business Communication"],
      ["Marketing Management", "Financial Management", "Human Resource Management", "Operations Management", "Research Methodology"],
      ["Retail Management & Formats", "Consumer Behaviour", "Merchandising & Category Management", "Retail Supply Chain", "Retail Analytics"],
      ["Store Operations Management", "E-Commerce & Omnichannel Retail", "Retail Branding & CRM", "Strategic Management", "Capstone Project"],
    ],
    subjectsUg: [
      ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication"],
      ["Retail Environment", "Business Statistics", "Organisational Behaviour", "Business Law"],
      ["Consumer Behaviour", "Store Operations", "Cost Accounting", "Marketing Management"],
      ["Merchandising & Buying", "Retail Supply Chain", "Financial Management", "Digital Retail"],
      ["Visual Merchandising", "Retail Analytics", "Services Marketing", "Entrepreneurship"],
      ["Omnichannel Strategy", "Retail Branding", "Sales Management", "Project Work"],
    ],
    roles: [
      { role: "Store Manager", salary: "₹4 – ₹12 LPA", detail: "Owns the store P&L, team and customer experience." },
      { role: "Category / Buying Manager", salary: "₹8 – ₹22 LPA", detail: "Owns assortment, margin and vendor terms for a category." },
      { role: "Supply Chain Manager", salary: "₹7 – ₹20 LPA", detail: "Plans replenishment and warehousing for a retail network." },
      { role: "E-Commerce Manager", salary: "₹6 – ₹18 LPA", detail: "Runs marketplace and D2C sales, pricing and fulfilment." },
      { role: "Retail Analyst", salary: "₹4 – ₹12 LPA", detail: "Analyses basket, footfall and stock productivity." },
      { role: "CRM / Loyalty Manager", salary: "₹5 – ₹14 LPA", detail: "Designs retention and repeat-purchase programmes." },
    ],
    recruiters: ["Reliance Retail", "Flipkart", "Amazon", "Tata Cliq", "DMart", "Zepto"],
    industries: ["Organised retail", "Quick commerce", "FMCG modern trade", "Fashion & lifestyle", "Logistics", "Consumer durables"],
  },
  {
    match: [/business-analytics/, /data-analytics/, /analytics/],
    oneLiner: "Data, modelling and decision-science track for analytics and BI roles.",
    subject:
      "Business analytics is the practice of turning transaction, customer and operational data into decisions — sizing an opportunity, forecasting demand, or proving whether a campaign actually worked.",
    learn:
      "You study statistics for business, data management and SQL, visualisation and BI tools, predictive modelling and machine-learning basics, big-data platforms, and domain analytics for marketing, finance and operations, finishing with an end-to-end analytics capstone.",
    demand:
      "Analytics roles keep growing at a high single-digit to low double-digit CAGR because every function now carries a dashboard, and the shortage is sharpest in people who can interpret the numbers for a business audience.",
    where:
      "Analytics and consulting firms, BFSI risk and marketing analytics teams, e-commerce and product companies, GCCs, and healthcare and telecom analytics units.",
    scopeAreas: [
      ["Business intelligence", "Dashboards, KPI definition and self-serve reporting for leadership."],
      ["Predictive modelling", "Churn, propensity, demand and credit-risk models."],
      ["Marketing analytics", "Attribution, segmentation and campaign measurement."],
      ["Operations analytics", "Forecasting, capacity planning and process optimisation."],
      ["Data engineering basics", "SQL, pipelines and data-quality management."],
      ["Product analytics", "Funnel, cohort and experimentation analysis for digital products."],
    ],
    subjectsPg: [
      ["Management Principles", "Managerial Economics", "Accounting for Managers", "Statistics for Business", "Business Communication"],
      ["Marketing Management", "Financial Management", "Operations Management", "Research Methodology", "Database Management"],
      ["Data Management & SQL", "Data Visualisation & BI", "Predictive Analytics", "Machine Learning for Business", "Optimisation & Decision Models"],
      ["Big Data Technologies", "Marketing & Financial Analytics", "Data Ethics & Governance", "Strategic Management", "Analytics Capstone"],
    ],
    roles: [
      { role: "Data Scientist", salary: "₹9 – ₹24 LPA", detail: "Builds and productionises models against business metrics." },
      { role: "Business Intelligence Manager", salary: "₹12 – ₹25 LPA", detail: "Owns the reporting layer and analytics roadmap." },
      { role: "Business Analyst", salary: "₹6 – ₹15 LPA", detail: "Frames problems, runs analyses and drives decisions." },
      { role: "Data Analyst", salary: "₹4 – ₹12 LPA", detail: "SQL, dashboards and recurring performance analysis." },
      { role: "Marketing Analytics Lead", salary: "₹8 – ₹20 LPA", detail: "Measures spend efficiency and customer lifetime value." },
      { role: "Risk Analyst", salary: "₹6 – ₹16 LPA", detail: "Credit, fraud and portfolio analytics in BFSI." },
    ],
    recruiters: ["Deloitte", "Accenture", "Amazon", "KPMG", "Fractal", "EXL"],
    industries: ["Analytics & consulting", "BFSI", "E-commerce", "Healthcare", "Telecom", "Technology"],
  },
  {
    match: [/operations/, /supply-chain/, /logistics/, /production/],
    oneLiner: "Process, supply-chain and quality track for manufacturing and service operations.",
    subject:
      "Operations management is the discipline of delivering a product or service reliably at the lowest sensible cost — capacity, scheduling, inventory, quality systems and the supply chain that feeds all of it.",
    learn:
      "You study production planning and control, supply-chain and logistics management, procurement, quality management and Lean Six Sigma, service operations, and project management, finishing with a process-improvement capstone.",
    demand:
      "Manufacturing expansion, PLI-linked capacity additions and the logistics build-out behind e-commerce have all raised demand for managers who can run a plant, a warehouse network or a service desk to SLA.",
    where:
      "Manufacturing plants, e-commerce and 3PL supply chains, aviation and hospitality operations, consulting, and the back-office operations of banks and insurers.",
    scopeAreas: [
      ["Production & planning", "Capacity, scheduling and shop-floor productivity."],
      ["Supply chain & procurement", "Sourcing, vendor development and inventory strategy."],
      ["Quality & Lean Six Sigma", "Defect reduction, SOPs, audits and continuous improvement."],
      ["Logistics & warehousing", "Network design, transport cost and fulfilment SLAs."],
      ["Service operations", "Process design and SLA management in BFSI and BPO."],
      ["Project management", "Cross-functional delivery of capacity and change projects."],
    ],
    subjectsPg: [
      ["Management Principles & Organisational Behaviour", "Managerial Economics", "Accounting for Managers", "Quantitative Techniques", "Business Communication"],
      ["Operations Management", "Marketing Management", "Financial Management", "Human Resource Management", "Management Information Systems"],
      ["Production Planning & Control", "Supply Chain Management", "Procurement & Vendor Management", "Total Quality Management", "Research Methodology"],
      ["Lean Six Sigma", "Logistics & Warehouse Management", "Service Operations Management", "Strategic Management", "Capstone Project"],
    ],
    roles: [
      { role: "Operations Manager", salary: "₹8 – ₹20 LPA", detail: "Owns throughput, cost and service levels for a site or process." },
      { role: "Supply Chain Manager", salary: "₹9 – ₹24 LPA", detail: "Plans demand, inventory and distribution across the network." },
      { role: "Quality Assurance Manager", salary: "₹8 – ₹22 LPA", detail: "Runs quality systems, audits and improvement projects." },
      { role: "Logistics Manager", salary: "₹7 – ₹18 LPA", detail: "Manages transport partners, cost per shipment and transit time." },
      { role: "Procurement Manager", salary: "₹9 – ₹22 LPA", detail: "Negotiates contracts and develops the vendor base." },
      { role: "Production Planner", salary: "₹5 – ₹12 LPA", detail: "Builds the schedule against demand and capacity constraints." },
    ],
    recruiters: ["Amazon", "Flipkart", "Tata Motors", "Accenture", "Maersk", "Reliance"],
    industries: ["Manufacturing", "E-commerce fulfilment", "Logistics", "Automotive", "Pharmaceuticals", "Consulting"],
  },
  {
    match: [/^finance$/, /financial-management/, /^finance-/, /-finance$/, /accounting-and-finance/],
    oneLiner: "Corporate finance, investment and control track for FP&A, treasury and advisory roles.",
    subject:
      "Finance is the management of how a business raises capital, allocates it and reports on it — capital budgeting, working capital, valuation, taxation and the controls that keep the numbers trustworthy.",
    learn:
      "You study financial accounting and reporting, corporate finance and capital budgeting, security analysis and portfolio management, taxation, financial modelling, and international finance, finishing with a valuation or financial-analysis project.",
    demand:
      "Financial services keep growing at mid-to-high single digits globally while Indian companies professionalise their FP&A and controllership functions, so demand runs from analyst roles up to CFO-track positions.",
    where:
      "Corporate finance teams, Big Four and mid-tier advisory, banks and NBFCs, investment and PE firms, and the finance shared-service centres of MNCs.",
    scopeAreas: [
      ["FP&A", "Budgeting, forecasting and management reporting."],
      ["Controllership", "Closing, consolidation, compliance and audit coordination."],
      ["Investments & valuation", "Equity research, modelling and deal support."],
      ["Treasury", "Cash, forex and debt management."],
      ["Taxation", "Direct and indirect tax planning and filings."],
      ["Advisory & consulting", "Transaction, risk and process-improvement engagements."],
    ],
    subjectsPg: [
      ["Management Principles", "Managerial Economics", "Financial Accounting", "Business Statistics", "Business Ethics"],
      ["Corporate Finance", "Cost & Management Accounting", "Marketing Management", "Business Law & Taxation", "Business Analytics"],
      ["Security Analysis & Portfolio Management", "Financial Modelling", "Corporate Taxation", "Financial Markets & Institutions", "Research Methodology"],
      ["International Finance", "Investment Banking", "Risk Management & Derivatives", "Strategic Financial Management", "Capstone Project"],
    ],
    subjectsUg: [
      ["Financial Accounting", "Business Economics", "Principles of Management", "Business Communication"],
      ["Corporate Accounting", "Business Statistics", "Business Law", "Organisational Behaviour"],
      ["Cost Accounting", "Income Tax", "Financial Markets", "Company Law"],
      ["Management Accounting", "Indirect Tax (GST)", "Financial Management", "Auditing"],
      ["Investment Analysis", "Corporate Tax Planning", "Financial Reporting", "Entrepreneurship"],
      ["Strategic Finance", "Risk Management", "Financial Modelling", "Project Work"],
    ],
    roles: [
      { role: "Financial Analyst", salary: "₹6 – ₹18 LPA", detail: "Forecasting, modelling and decision support for management." },
      { role: "Finance Manager", salary: "₹8 – ₹27 LPA", detail: "Owns budgets, controls and reporting for a business unit." },
      { role: "Investment Analyst", salary: "₹7 – ₹20 LPA", detail: "Research, valuation and portfolio recommendations." },
      { role: "Treasury Manager", salary: "₹8 – ₹22 LPA", detail: "Manages liquidity, forex exposure and banking relationships." },
      { role: "Taxation Manager", salary: "₹7 – ₹18 LPA", detail: "Direct and indirect tax compliance and planning." },
      { role: "Financial Controller", salary: "₹15 – ₹35 LPA", detail: "Owns the close, consolidation and statutory reporting." },
    ],
    recruiters: ["Deloitte", "EY", "PwC", "ICICI Bank", "Infosys BPM", "HDFC"],
    industries: ["BFSI", "Consulting & audit", "Manufacturing finance", "IT & GCC finance", "Private equity", "Insurance"],
  },
  {
    match: [/human-resource/, /^hr/, /-hr$/, /people-management/],
    oneLiner: "Talent, employee-relations and HR-analytics track for people-function roles.",
    subject:
      "Human resource management is the function that finds, develops, pays and retains the people a business runs on — hiring, performance systems, compensation design, compliance and culture.",
    learn:
      "You study organisational behaviour, talent acquisition, learning and development, performance and compensation management, industrial relations and labour law, and HR analytics, ending with an HR-process or engagement project.",
    demand:
      "Hybrid work, high attrition in services and the shift to skills-based hiring have all raised the value of HR professionals who can back their recommendations with data rather than intuition.",
    where:
      "Corporate HR teams, IT and GCC talent functions, staffing and RPO firms, HR consulting practices, and HR shared-service centres.",
    scopeAreas: [
      ["Talent acquisition", "Sourcing, assessment and hiring-funnel ownership."],
      ["HR business partnering", "Advising line managers on people decisions."],
      ["Learning & development", "Capability building, training design and delivery."],
      ["Compensation & benefits", "Benchmarking, salary structures and incentive design."],
      ["Industrial relations", "Labour compliance, grievance handling and statutory filings."],
      ["HR analytics", "Attrition, engagement and workforce-cost analysis."],
    ],
    subjectsPg: [
      ["Management Principles & Organisational Behaviour", "Managerial Economics", "Accounting for Managers", "Business Statistics", "Business Communication"],
      ["Human Resource Management", "Marketing Management", "Financial Management", "Operations Management", "Legal Aspects of Business"],
      ["Talent Acquisition & Retention", "Performance Management", "Training & Development", "Compensation & Benefits", "Research Methodology"],
      ["Industrial Relations & Labour Law", "HR Analytics", "Organisational Development & Change", "Strategic HRM", "Capstone Project"],
    ],
    roles: [
      { role: "HR Business Partner", salary: "₹8 – ₹20 LPA", detail: "Owns the people agenda for a business unit." },
      { role: "Talent Acquisition Manager", salary: "₹7 – ₹18 LPA", detail: "Runs hiring plans, sourcing channels and offer conversion." },
      { role: "Compensation & Benefits Analyst", salary: "₹6 – ₹16 LPA", detail: "Benchmarks pay and designs incentive structures." },
      { role: "L&D Manager", salary: "₹7 – ₹17 LPA", detail: "Builds capability programmes and measures impact." },
      { role: "HR Operations Manager", salary: "₹6 – ₹14 LPA", detail: "Payroll, compliance and HRMS process ownership." },
      { role: "HR Analytics Specialist", salary: "₹7 – ₹18 LPA", detail: "Attrition modelling and workforce planning analytics." },
    ],
    recruiters: ["TCS", "Accenture", "Wipro", "Randstad", "Deloitte", "Amazon"],
    industries: ["IT services", "Consulting", "Manufacturing", "BFSI", "Staffing & RPO", "Retail"],
  },
  {
    match: [/data-science/],
    oneLiner: "Statistics, machine learning and big-data track for data-science roles.",
    subject:
      "Data science combines statistics, programming and domain judgement to extract predictions and insight from large datasets — from churn models to recommendation engines.",
    learn:
      "You study Python and R programming, statistics and probability, data wrangling and SQL, machine learning, deep learning basics, big-data tools and data visualisation, closing with a modelling capstone on a real dataset.",
    demand:
      "Data-science hiring has broadened beyond product companies into banks, insurers, hospitals and manufacturers, all of whom now run models in production and need people to build and maintain them.",
    where:
      "Product and platform companies, analytics services firms, BFSI risk and fraud teams, healthtech, and GCCs of global corporates.",
    scopeAreas: [
      ["Machine learning", "Supervised and unsupervised modelling for prediction and segmentation."],
      ["Data engineering", "Pipelines, warehouses and feature stores that feed the models."],
      ["Deep learning", "Neural networks for vision, text and sequence problems."],
      ["Statistical analysis", "Experiment design, inference and causal reasoning."],
      ["Visualisation & storytelling", "Communicating model output to business stakeholders."],
      ["MLOps", "Deployment, monitoring and retraining of production models."],
    ],
    subjectsPg: [
      ["Programming with Python", "Discrete Mathematics & Statistics", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Object-Oriented Programming", "Operating Systems", "Software Engineering", "Data Warehousing", "Web Technologies"],
      ["Machine Learning", "Statistical Modelling & R", "Big Data Technologies", "Data Visualisation", "Research Methodology"],
      ["Deep Learning & Neural Networks", "Natural Language Processing", "MLOps & Model Deployment", "Data Ethics & Governance", "Major Project"],
    ],
    subjectsUg: [
      ["Programming Fundamentals", "Mathematics for Computing", "Computer Fundamentals", "Communication Skills"],
      ["Data Structures", "Python Programming", "Statistics", "Database Systems"],
      ["Machine Learning Basics", "Data Wrangling", "Operating Systems", "Web Technologies"],
      ["Data Visualisation", "Big Data Concepts", "Software Engineering", "Cloud Basics"],
      ["Predictive Modelling", "Analytics Tools", "Computer Networks", "Mini Project"],
      ["Applied Data Science", "Data Ethics", "Elective", "Major Project"],
    ],
    roles: [
      { role: "Data Scientist", salary: "₹8 – ₹22 LPA", detail: "Owns model development from problem framing to deployment." },
      { role: "Machine Learning Engineer", salary: "₹10 – ₹25 LPA", detail: "Productionises and scales models with engineering rigour." },
      { role: "Data Analyst", salary: "₹5 – ₹12 LPA", detail: "SQL, dashboards and exploratory analysis." },
      { role: "Data Engineer", salary: "₹8 – ₹20 LPA", detail: "Builds and maintains pipelines and warehouses." },
      { role: "Research Scientist", salary: "₹12 – ₹30 LPA", detail: "Applied research on modelling and algorithms." },
      { role: "BI Developer", salary: "₹5 – ₹14 LPA", detail: "Builds reporting layers on top of the data platform." },
    ],
    recruiters: ["Google", "Microsoft", "TCS", "Accenture", "Fractal", "Mu Sigma"],
    industries: ["Technology", "BFSI", "E-commerce", "Healthtech", "Consulting", "Telecom"],
  },
  {
    match: [/artificial-intelligence/, /machine-learning/, /^ai/, /-ai-/, /-ml$/],
    oneLiner: "AI, neural-network and applied-ML track for engineering and research roles.",
    subject:
      "Artificial intelligence and machine learning is the study of systems that learn from data and act on it — from recommendation and fraud models to language and vision systems.",
    learn:
      "You study algorithms and data structures, machine learning, neural networks and deep learning, natural language processing, computer vision, and AI ethics and deployment, finishing with an applied AI capstone.",
    demand:
      "Generative AI has pushed AI budgets out of research labs and into mainstream product and operations teams, and Indian GCCs are hiring heavily for applied AI rather than pure research.",
    where:
      "Product companies, AI services and consulting firms, BFSI fraud and risk teams, healthtech, and R&D units of global corporates.",
    scopeAreas: [
      ["Applied machine learning", "Fraud, churn, pricing and recommendation systems in production."],
      ["Deep learning", "Vision, speech and language models built on neural networks."],
      ["Natural language processing", "Chat, search, summarisation and document intelligence."],
      ["Computer vision", "Detection, OCR and quality-inspection systems."],
      ["AI engineering / MLOps", "Serving, monitoring and cost control for models."],
      ["Responsible AI", "Bias testing, explainability and governance."],
    ],
    subjectsPg: [
      ["Programming with Python", "Mathematics & Statistics for AI", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Object-Oriented Programming", "Operating Systems", "Software Engineering", "Data Warehousing & Mining", "Web Technologies"],
      ["Artificial Intelligence", "Machine Learning", "Neural Networks & Deep Learning", "Cloud Computing for AI", "Research Methodology"],
      ["Natural Language Processing", "Computer Vision", "Reinforcement Learning", "AI Ethics & Governance", "Major Project"],
    ],
    roles: [
      { role: "AI Engineer", salary: "₹10 – ₹30 LPA", detail: "Builds and ships AI features into products." },
      { role: "Machine Learning Specialist", salary: "₹12 – ₹28 LPA", detail: "Owns model quality across a product area." },
      { role: "NLP Engineer", salary: "₹10 – ₹26 LPA", detail: "Language models, search and document intelligence." },
      { role: "Computer Vision Engineer", salary: "₹10 – ₹24 LPA", detail: "Detection and inspection systems for images and video." },
      { role: "Research Scientist", salary: "₹15 – ₹35 LPA", detail: "Applied research and publication-grade experimentation." },
      { role: "MLOps Engineer", salary: "₹9 – ₹22 LPA", detail: "Deployment pipelines, monitoring and model governance." },
    ],
    recruiters: ["Google", "Microsoft", "Amazon", "Accenture", "IBM", "Infosys"],
    industries: ["Technology", "BFSI", "Healthcare", "Automotive", "Retail", "Consulting"],
  },
  {
    match: [/cloud/, /devops/],
    oneLiner: "Cloud architecture, DevOps and infrastructure-automation track.",
    subject:
      "Cloud computing is the practice of designing, deploying and operating applications on shared, elastic infrastructure — AWS, Azure or GCP — with automation and cost control built in.",
    learn:
      "You study operating systems and networking, virtualisation and containers, cloud service models (IaaS/PaaS/SaaS), CI/CD and infrastructure as code, cloud security, and site reliability practices, ending with a cloud-deployment capstone.",
    demand:
      "Enterprise migration to cloud is still mid-journey in India, and every migrated workload creates ongoing demand for engineers who can automate, secure and optimise it.",
    where:
      "Cloud and IT services firms, product engineering teams, BFSI infrastructure, GCCs, and managed-service providers.",
    scopeAreas: [
      ["Cloud architecture", "Designing resilient, cost-aware workloads on AWS/Azure/GCP."],
      ["DevOps & CI/CD", "Build pipelines, release automation and infrastructure as code."],
      ["Containers & Kubernetes", "Packaging and orchestrating services at scale."],
      ["Cloud security", "Identity, network policy and compliance controls."],
      ["Site reliability", "SLOs, observability and incident response."],
      ["FinOps", "Cloud cost visibility and optimisation."],
    ],
    subjectsPg: [
      ["Programming with Python", "Mathematics for Computing", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Operating Systems", "Object-Oriented Programming", "Software Engineering", "Web Technologies", "Linux Administration"],
      ["Cloud Computing Fundamentals", "Virtualisation & Containers", "AWS / Azure / GCP Services", "DevOps & CI/CD", "Research Methodology"],
      ["Cloud Security & Compliance", "Infrastructure as Code", "Site Reliability Engineering", "Distributed Systems", "Major Project"],
    ],
    roles: [
      { role: "Cloud Architect", salary: "₹12 – ₹30 LPA", detail: "Designs the target cloud estate and migration path." },
      { role: "DevOps Engineer", salary: "₹8 – ₹22 LPA", detail: "Owns pipelines, automation and release reliability." },
      { role: "Site Reliability Engineer", salary: "₹10 – ₹24 LPA", detail: "Keeps production available against SLOs." },
      { role: "Cloud Support Engineer", salary: "₹5 – ₹12 LPA", detail: "Operates and troubleshoots cloud workloads." },
      { role: "Kubernetes / Platform Engineer", salary: "₹9 – ₹22 LPA", detail: "Builds the internal platform other teams deploy on." },
      { role: "Cloud Security Engineer", salary: "₹10 – ₹25 LPA", detail: "Identity, policy and compliance for cloud environments." },
    ],
    recruiters: ["Amazon Web Services", "Microsoft", "TCS", "Accenture", "Wipro", "IBM"],
    industries: ["IT services", "Product engineering", "BFSI", "Telecom", "Global capability centres", "Managed services"],
  },
  {
    match: [/full-stack/, /web-development/, /software-development/],
    oneLiner: "Front-end, back-end and DevOps track for full-stack engineering roles.",
    subject:
      "Full-stack development means owning a feature end to end — the interface a user sees, the API and database behind it, and the pipeline that ships it to production.",
    learn:
      "You study programming fundamentals and data structures, HTML/CSS/JavaScript and a modern front-end framework, server-side development and REST APIs, databases, version control, testing, and CI/CD, finishing with a deployed full-stack application.",
    demand:
      "Full-stack engineers remain the highest-volume hire in Indian product and services companies because one engineer who can move across the stack reduces coordination cost on small teams.",
    where:
      "Product startups, IT services, digital agencies, enterprise application teams and GCCs.",
    scopeAreas: [
      ["Front-end engineering", "React/Angular interfaces, state management and accessibility."],
      ["Back-end engineering", "APIs, authentication, business logic and integrations."],
      ["Databases", "Relational and document modelling, indexing and query tuning."],
      ["DevOps", "Containers, CI/CD and cloud deployment of the application."],
      ["Testing & quality", "Unit, integration and end-to-end test automation."],
      ["System design", "Scaling, caching and service decomposition."],
    ],
    subjectsPg: [
      ["Programming with Python/Java", "Mathematics for Computing", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Object-Oriented Programming", "Operating Systems", "Software Engineering", "Web Technologies (HTML/CSS/JS)", "Version Control & Tooling"],
      ["Front-End Frameworks (React/Angular)", "Server-Side Development (Node/Java)", "REST & API Design", "Cloud & Containers", "Research Methodology"],
      ["DevOps & CI/CD", "Software Testing & Automation", "System Design", "Application Security", "Major Project"],
    ],
    subjectsUg: [
      ["Programming Fundamentals", "Computer Fundamentals", "Mathematics", "Communication Skills"],
      ["Data Structures", "Web Technologies", "Database Systems", "Digital Logic"],
      ["Object-Oriented Programming", "Front-End Development", "Operating Systems", "Software Engineering"],
      ["Back-End Development", "API Design", "Computer Networks", "Cloud Basics"],
      ["Full-Stack Frameworks", "Testing & DevOps", "Mobile Development", "Mini Project"],
      ["System Design Basics", "Application Security", "Elective", "Major Project"],
    ],
    roles: [
      { role: "Full Stack Developer", salary: "₹6 – ₹18 LPA", detail: "Builds and ships features across UI, API and database." },
      { role: "Front-End Developer", salary: "₹5 – ₹15 LPA", detail: "Owns the interface layer and its performance." },
      { role: "Back-End Developer", salary: "₹6 – ₹18 LPA", detail: "APIs, data models and integrations." },
      { role: "DevOps Engineer", salary: "₹8 – ₹20 LPA", detail: "Automates build, release and infrastructure." },
      { role: "Software Engineer", salary: "₹5 – ₹16 LPA", detail: "General application engineering in product or services teams." },
      { role: "Technical Lead", salary: "₹14 – ₹28 LPA", detail: "Owns architecture and delivery for a squad." },
    ],
    recruiters: ["TCS", "Infosys", "Accenture", "Microsoft", "Zoho", "Cognizant"],
    industries: ["Product engineering", "IT services", "Fintech", "E-commerce", "SaaS", "Digital agencies"],
  },
  {
    match: [/blockchain/, /web3/, /crypto/],
    oneLiner: "Distributed ledger, smart-contract and cryptography track.",
    subject:
      "Blockchain technology is the study of tamper-evident distributed ledgers, the cryptography that secures them and the smart contracts that automate agreements on top of them.",
    learn:
      "You study cryptography fundamentals, distributed systems and consensus, Ethereum and Solidity, smart-contract design and auditing, enterprise blockchain platforms, and tokenisation and regulation, finishing with a dApp or enterprise-ledger project.",
    demand:
      "Beyond crypto, banks, logistics firms and government registries are piloting permissioned ledgers for settlement, provenance and identity, which keeps a steady niche demand for engineers who understand both the cryptography and the compliance.",
    where:
      "Fintech and crypto firms, banking innovation labs, IT services blockchain practices, supply-chain traceability projects and govtech.",
    scopeAreas: [
      ["Smart-contract development", "Solidity contracts, testing and gas optimisation."],
      ["Contract auditing", "Security review of on-chain code — the best-paid niche."],
      ["Enterprise ledgers", "Hyperledger and permissioned networks for consortiums."],
      ["Cryptography", "Hashing, signatures and zero-knowledge basics."],
      ["Tokenisation & DeFi", "Asset tokenisation, wallets and protocol integration."],
      ["Compliance", "Regulatory and AML considerations for digital assets."],
    ],
    subjectsPg: [
      ["Programming with Python", "Discrete Mathematics", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Operating Systems", "Object-Oriented Programming", "Software Engineering", "Web Technologies", "Distributed Systems"],
      ["Cryptography & Network Security", "Blockchain Fundamentals & Consensus", "Ethereum & Solidity", "Smart Contract Development", "Research Methodology"],
      ["Enterprise Blockchain (Hyperledger)", "Smart Contract Security & Auditing", "Tokenisation & DeFi", "Blockchain Regulation", "Major Project"],
    ],
    roles: [
      { role: "Blockchain Developer", salary: "₹8 – ₹25 LPA", detail: "Builds contracts, nodes and dApp back-ends." },
      { role: "Smart Contract Auditor", salary: "₹10 – ₹30 LPA", detail: "Reviews on-chain code for security flaws." },
      { role: "Blockchain Solution Architect", salary: "₹15 – ₹32 LPA", detail: "Designs permissioned ledger architectures for enterprises." },
      { role: "Web3 Backend Engineer", salary: "₹8 – ₹22 LPA", detail: "Indexers, wallets and protocol integrations." },
      { role: "Crypto / Product Analyst", salary: "₹6 – ₹14 LPA", detail: "Protocol and market analysis for product decisions." },
      { role: "Blockchain Consultant", salary: "₹9 – ₹20 LPA", detail: "Use-case assessment and pilots for clients." },
    ],
    recruiters: ["Infosys", "TCS", "Accenture", "Polygon", "IBM", "Wipro"],
    industries: ["Fintech", "Banking", "IT services", "Supply chain", "Govtech", "Gaming"],
  },
  {
    match: [/cyber/, /information-security/, /network-security/],
    oneLiner: "Security operations, ethical hacking and governance track.",
    subject:
      "Cybersecurity is the practice of protecting systems, networks and data from attack — through hardening, monitoring, incident response and the governance that proves controls actually work.",
    learn:
      "You study network and operating-system security, cryptography, ethical hacking and penetration testing, security operations and SIEM, digital forensics, and security governance and compliance, ending with a security-assessment capstone.",
    demand:
      "Reporting rules from CERT-In and RBI, plus a steady rise in ransomware against Indian enterprises, have made security one of the few functions where budgets grow even in a slow year.",
    where:
      "Security operations centres, banks and insurers, IT services security practices, product security teams, and consulting firms.",
    scopeAreas: [
      ["Security operations", "Monitoring, triage and incident response in a SOC."],
      ["Penetration testing", "Application, network and cloud security assessments."],
      ["GRC", "Policy, audit and regulatory compliance programmes."],
      ["Cloud security", "Identity, workload and configuration security."],
      ["Digital forensics", "Evidence collection and breach investigation."],
      ["Application security", "Secure SDLC, code review and threat modelling."],
    ],
    subjectsPg: [
      ["Programming with Python", "Discrete Mathematics", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Operating Systems", "Object-Oriented Programming", "Software Engineering", "Web Technologies", "Linux Administration"],
      ["Cryptography", "Network & System Security", "Ethical Hacking & Penetration Testing", "Security Operations & SIEM", "Research Methodology"],
      ["Digital Forensics", "Cloud & Application Security", "Cyber Law & Governance", "Risk & Compliance", "Major Project"],
    ],
    roles: [
      { role: "Security Analyst (SOC)", salary: "₹5 – ₹14 LPA", detail: "Monitors alerts and handles incident triage." },
      { role: "Penetration Tester", salary: "₹7 – ₹20 LPA", detail: "Finds and reports exploitable weaknesses." },
      { role: "Security Engineer", salary: "₹8 – ₹22 LPA", detail: "Builds and hardens controls across the estate." },
      { role: "GRC Analyst", salary: "₹6 – ₹16 LPA", detail: "Policy, audit and compliance evidence." },
      { role: "Cloud Security Engineer", salary: "₹10 – ₹25 LPA", detail: "Secures cloud identity, network and workloads." },
      { role: "Information Security Manager", salary: "₹12 – ₹30 LPA", detail: "Owns the security programme and reporting." },
    ],
    recruiters: ["Deloitte", "PwC", "TCS", "IBM", "Accenture", "HDFC Bank"],
    industries: ["BFSI", "IT services", "Consulting", "Technology products", "Telecom", "Government"],
  },
  {
    match: [/multimedia/, /gaming/, /animation/, /ar-vr/, /^game/],
    oneLiner: "Game development, 3D and immersive AR/VR technology track.",
    subject:
      "Multimedia, gaming and AR/VR covers the tools and engineering behind interactive experiences — 3D modelling, animation, game engines and the spatial computing behind augmented and virtual reality.",
    learn:
      "You study computer graphics, 3D modelling and animation, game-engine programming with Unity or Unreal, game design and physics, AR/VR development and UX for immersive media, ending with a playable or interactive project.",
    demand:
      "Indian gaming, edtech simulation and enterprise training are all adopting real-time 3D, and studios that once only outsourced art now hire engine programmers and technical artists locally.",
    where:
      "Game studios, animation and VFX houses, edtech simulation teams, enterprise AR training providers and advertising production.",
    scopeAreas: [
      ["Game programming", "Gameplay systems, physics and engine scripting."],
      ["3D art & animation", "Modelling, rigging, texturing and animation pipelines."],
      ["AR/VR engineering", "Headset and mobile immersive application development."],
      ["Technical art", "Shaders, optimisation and pipeline tooling."],
      ["Game design", "Level design, systems balancing and player progression."],
      ["Interactive media", "Simulation and visualisation for training and marketing."],
    ],
    subjectsPg: [
      ["Programming with C++/C#", "Mathematics for Graphics", "Data Structures & Algorithms", "Database Management Systems", "Computer Networks"],
      ["Object-Oriented Programming", "Operating Systems", "Software Engineering", "Web Technologies", "Human–Computer Interaction"],
      ["Computer Graphics", "3D Modelling & Animation", "Game Engine Programming (Unity/Unreal)", "Game Design & Physics", "Research Methodology"],
      ["Augmented & Virtual Reality", "Multimedia Systems", "Real-Time Rendering & Optimisation", "Interactive Storytelling", "Major Project"],
    ],
    roles: [
      { role: "Game Developer", salary: "₹6 – ₹16 LPA", detail: "Builds gameplay systems in Unity or Unreal." },
      { role: "AR/VR Engineer", salary: "₹7 – ₹18 LPA", detail: "Develops immersive applications for headsets and mobile." },
      { role: "3D Artist / Animator", salary: "₹4 – ₹12 LPA", detail: "Models, rigs and animates assets for production." },
      { role: "Technical Artist", salary: "₹8 – ₹20 LPA", detail: "Bridges art and engineering with shaders and tooling." },
      { role: "Game Designer", salary: "₹5 – ₹14 LPA", detail: "Designs levels, economy and progression systems." },
      { role: "UI/UX Designer (Interactive)", salary: "₹5 – ₹14 LPA", detail: "Designs interfaces for games and immersive apps." },
    ],
    recruiters: ["Ubisoft India", "Zynga", "Dream11", "Technicolor", "Accenture", "Nazara"],
    industries: ["Gaming", "Animation & VFX", "Edtech simulation", "Advertising", "Enterprise training", "Technology"],
  },
  {
    match: [/computer-science/, /^cs$/, /computer-application/, /software-engineering/],
    oneLiner: "Core computing track covering algorithms, systems, networks and software engineering.",
    subject:
      "Computer science and IT is the general-purpose computing track — algorithms, systems, databases, networks and software engineering — designed to keep every downstream specialisation open.",
    learn:
      "You study data structures and algorithms, operating systems, database management, computer networks, software engineering, web and mobile development, plus electives in cloud, security or data, finishing with a major software project.",
    demand:
      "Generalist engineers remain the largest hiring pool in Indian IT because service and product firms both staff broad delivery teams before they staff specialists.",
    where:
      "IT services, product companies, GCCs, banking technology teams and public-sector IT.",
    scopeAreas: [
      ["Software development", "Application engineering across web, mobile and backend."],
      ["Systems & networks", "Infrastructure, administration and network engineering."],
      ["Database administration", "Design, tuning and reliability of data stores."],
      ["Quality engineering", "Automation frameworks and release quality."],
      ["Technical support & operations", "Enterprise application support and incident handling."],
      ["Specialisation launchpad", "A base for cloud, data, security or AI later."],
    ],
    subjectsPg: [
      ["Programming with Python/Java", "Discrete Mathematics", "Data Structures & Algorithms", "Database Management Systems", "Computer Organisation"],
      ["Object-Oriented Programming", "Operating Systems", "Computer Networks", "Software Engineering", "Web Technologies"],
      ["Design & Analysis of Algorithms", "Advanced Databases", "Cloud Computing", "Mobile Application Development", "Research Methodology"],
      ["Information Security", "Distributed Systems", "Emerging Technologies", "Software Testing", "Major Project"],
    ],
    subjectsUg: [
      ["Programming Fundamentals", "Computer Fundamentals", "Mathematics", "Communication Skills"],
      ["Data Structures", "Digital Electronics", "Database Systems", "Operating Systems"],
      ["Object-Oriented Programming", "Computer Networks", "Web Technologies", "Software Engineering"],
      ["Algorithms", "Java Programming", "Cloud Basics", "Mobile Development"],
      ["Information Security", "Data Analytics Basics", "Elective", "Mini Project"],
      ["Emerging Technologies", "Software Testing", "Elective", "Major Project"],
    ],
    roles: [
      { role: "Software Engineer", salary: "₹5 – ₹16 LPA", detail: "Builds and maintains applications in delivery teams." },
      { role: "Software Architect", salary: "₹12 – ₹25 LPA", detail: "Owns technical design across systems." },
      { role: "System Administrator", salary: "₹4 – ₹10 LPA", detail: "Runs servers, identity and enterprise infrastructure." },
      { role: "Database Administrator", salary: "₹6 – ₹16 LPA", detail: "Performance, backup and availability of databases." },
      { role: "QA / Automation Engineer", salary: "₹4 – ₹12 LPA", detail: "Builds automated test coverage for releases." },
      { role: "IT Manager", salary: "₹10 – ₹20 LPA", detail: "Owns delivery, vendors and technology budget." },
    ],
    recruiters: ["TCS", "Infosys", "Accenture", "Cognizant", "IBM", "HCLTech"],
    industries: ["IT services", "Product engineering", "BFSI technology", "Global capability centres", "Telecom", "Government IT"],
  },
  {
    match: [/sociology/, /social-work/],
    oneLiner: "Society, social research and development-sector track.",
    subject:
      "Sociology is the systematic study of society — how institutions, inequality, culture and social movements shape behaviour, and how that can be measured rather than assumed.",
    learn:
      "You study classical and modern sociological theory, social research methodology and statistics, Indian society and social change, gender, urban and rural sociology, and social policy, closing with a dissertation or field study.",
    demand:
      "CSR budgets, impact-evaluation mandates and the growth of policy think tanks have created steady demand for people trained to design and interpret social research.",
    where:
      "NGOs and development agencies, CSR teams, policy think tanks, market and social research firms, universities and government programmes.",
    scopeAreas: [
      ["Social research", "Survey design, fieldwork and qualitative analysis."],
      ["Development sector", "Programme design, monitoring and evaluation in NGOs."],
      ["CSR & impact", "Corporate social responsibility strategy and reporting."],
      ["Policy analysis", "Evidence briefs and evaluation for think tanks."],
      ["Academia & teaching", "NET/PhD pathway into college teaching."],
      ["Civil services preparation", "Sociology as a strong optional and general-studies base."],
    ],
    subjectsPg: [
      ["Classical Sociological Theory", "Foundations of Sociology", "Social Research Methodology", "Indian Society: Structure & Change"],
      ["Modern Sociological Theory", "Sociology of Development", "Statistics for Social Research", "Social Stratification"],
      ["Political Sociology", "Social Movements in India", "Gender & Society", "Sociology of Religion"],
      ["Urban & Rural Sociology", "Sociology of Environment", "Social Policy & Welfare", "Dissertation / Project Work"],
    ],
    subjectsUg: [
      ["Introduction to Sociology", "Indian Society", "Communication Skills", "Political Science Basics"],
      ["Sociological Thinkers", "Social Institutions", "Statistics Basics", "Environment & Society"],
      ["Research Methods", "Rural Sociology", "Social Problems in India", "Elective"],
      ["Urban Sociology", "Gender Studies", "Social Change", "Elective"],
      ["Development & Society", "Sociology of Media", "Field Study", "Elective"],
      ["Contemporary Social Issues", "Social Policy", "Project Work", "Elective"],
    ],
    roles: [
      { role: "Social Research Analyst", salary: "₹4 – ₹8 LPA", detail: "Designs and analyses surveys and field studies." },
      { role: "Programme Coordinator (NGO)", salary: "₹3.5 – ₹7 LPA", detail: "Runs field programmes, budgets and reporting." },
      { role: "Policy Research Associate", salary: "₹5 – ₹9 LPA", detail: "Evidence review and briefs for think tanks." },
      { role: "CSR Executive", salary: "₹4 – ₹9 LPA", detail: "Manages corporate social programmes and impact reporting." },
      { role: "Monitoring & Evaluation Officer", salary: "₹5 – ₹10 LPA", detail: "Tracks outcomes against programme indicators." },
      { role: "Lecturer (after NET/PhD)", salary: "₹5 – ₹11 LPA", detail: "Teaching and research in colleges." },
    ],
    recruiters: ["NGOs", "Think tanks", "CSR foundations", "Research agencies", "Government programmes", "Universities"],
    industries: ["Development sector", "Public policy", "Research", "Education", "CSR", "Media"],
  },
  {
    match: [/political-science/, /public-administration/, /public-policy/],
    oneLiner: "Governance, international relations and public-policy track.",
    subject:
      "Political science studies power and governance — political theory, comparative systems, Indian government, international relations and the policy process that turns intent into administration.",
    learn:
      "You study political thought, comparative politics, Indian government and politics, public administration and policy analysis, international relations and diplomacy, and research methods, ending with a dissertation.",
    demand:
      "Policy consulting, election and legislative research, and the media's appetite for political analysis have all professionalised, adding paid roles beyond the traditional academic and civil-services routes.",
    where:
      "Policy consultancies and think tanks, political consulting firms, media houses, embassies and international organisations, NGOs and government departments.",
    scopeAreas: [
      ["Public policy", "Research, briefs and evaluation for policy teams."],
      ["Political consulting", "Constituency research, messaging and campaign strategy."],
      ["Journalism & analysis", "Political reporting and commentary."],
      ["International relations", "Roles in embassies, multilateral bodies and global NGOs."],
      ["Civil services", "A strong content base for UPSC and state services."],
      ["Academia", "NET/PhD track into teaching and research."],
    ],
    subjectsPg: [
      ["Western Political Thought", "Indian Political Thought", "Comparative Politics", "Research Methodology"],
      ["Indian Government & Politics", "Public Administration", "International Relations", "Political Sociology"],
      ["Public Policy Analysis", "Global Political Economy", "Modern Political Ideologies", "Human Rights"],
      ["Diplomacy & Security Studies", "Contemporary Political Issues", "State Politics in India", "Dissertation"],
    ],
    subjectsUg: [
      ["Introduction to Political Science", "Indian Constitution", "Communication Skills", "History Basics"],
      ["Political Theory", "Indian Government", "Comparative Politics", "Elective"],
      ["Public Administration", "International Relations", "Research Methods", "Elective"],
      ["Political Thought", "Indian Foreign Policy", "State Politics", "Elective"],
      ["Public Policy", "Human Rights", "Political Sociology", "Elective"],
      ["Contemporary Issues", "Diplomacy", "Project Work", "Elective"],
    ],
    roles: [
      { role: "Public Policy Analyst", salary: "₹5 – ₹10 LPA", detail: "Researches and evaluates policy options." },
      { role: "Political Consultant", salary: "₹6 – ₹12 LPA", detail: "Campaign research, messaging and constituency strategy." },
      { role: "Legislative Research Associate", salary: "₹5 – ₹9 LPA", detail: "Supports legislators with briefs and analysis." },
      { role: "Political Journalist", salary: "₹4 – ₹9 LPA", detail: "Reporting and analysis for media houses." },
      { role: "Programme Officer (International)", salary: "₹6 – ₹12 LPA", detail: "Project roles with multilateral and donor agencies." },
      { role: "Lecturer (after NET/PhD)", salary: "₹5 – ₹11 LPA", detail: "College teaching and research." },
    ],
    recruiters: ["Think tanks", "Media houses", "Policy consultancies", "NGOs", "Embassies", "Universities"],
    industries: ["Public policy", "Media", "Political consulting", "International development", "Education", "Government"],
  },
  {
    match: [/^english/, /literature/, /journalism/, /mass-communication/],
    oneLiner: "Literature, critical theory and professional-communication track.",
    subject:
      "English studies combines literature across periods and geographies with language, criticism and the writing craft that turns reading skill into professional communication.",
    learn:
      "You study British, American and Indian English literature, literary criticism and theory, linguistics, post-colonial and gender writing, and academic and professional writing, ending with a dissertation or long research essay.",
    demand:
      "Content, communications and edtech hiring have made strong writers commercially valuable, while the traditional teaching route stays open through NET and B.Ed.",
    where:
      "Schools and colleges, publishing and edtech, content and communications teams, advertising agencies, and media houses.",
    scopeAreas: [
      ["Teaching", "School and college teaching via NET/B.Ed pathways."],
      ["Content & copywriting", "Brand, product and SEO content for companies and agencies."],
      ["Publishing & editing", "Commissioning, editing and proofreading."],
      ["Corporate communication", "Internal comms, PR and executive writing."],
      ["Edtech content", "Curriculum and assessment writing."],
      ["Research", "PhD track in literature and cultural studies."],
    ],
    subjectsPg: [
      ["British Poetry & Drama", "Literary Criticism", "Academic Writing", "History of English Literature"],
      ["American Literature", "Indian Writing in English", "Linguistics", "Research Methodology"],
      ["Post-Colonial Studies", "Literary Theory", "Victorian Literature", "Comparative Literature"],
      ["Women's Writing", "Modernism & Post-Modernism", "Cultural Studies", "Dissertation"],
    ],
    subjectsUg: [
      ["Introduction to Literature", "Communication Skills", "Indian Writing", "Elective"],
      ["British Poetry", "Grammar & Composition", "Drama", "Elective"],
      ["Fiction", "American Literature", "Linguistics Basics", "Elective"],
      ["Literary Criticism", "Post-Colonial Writing", "Creative Writing", "Elective"],
      ["World Literature", "Media & Communication", "Translation Studies", "Elective"],
      ["Contemporary Literature", "Cultural Studies", "Project Work", "Elective"],
    ],
    roles: [
      { role: "Content Strategist", salary: "₹4 – ₹10 LPA", detail: "Owns content planning and quality for a brand." },
      { role: "Copywriter", salary: "₹3 – ₹8 LPA", detail: "Campaign, product and performance copy." },
      { role: "Editor / Sub-editor", salary: "₹4 – ₹9 LPA", detail: "Editing and publishing workflow ownership." },
      { role: "Corporate Communications Executive", salary: "₹4 – ₹10 LPA", detail: "Internal comms, PR and messaging." },
      { role: "Teacher / PGT English", salary: "₹3.5 – ₹8 LPA", detail: "School teaching (B.Ed usually required)." },
      { role: "Assistant Professor (after NET)", salary: "₹5 – ₹11 LPA", detail: "College-level teaching and research." },
    ],
    recruiters: ["Publishing houses", "Edtech firms", "Digital agencies", "Media houses", "Schools & colleges", "Corporate comms teams"],
    industries: ["Education", "Publishing", "Advertising", "Media", "Edtech", "Corporate communication"],
  },
  {
    match: [/education/, /^med$/, /teaching/, /pedagogy/],
    oneLiner: "Pedagogy, curriculum and educational-leadership track.",
    subject:
      "Education as a discipline studies how people learn and how learning systems are designed — pedagogy, curriculum, assessment, educational psychology and the administration of schools and programmes.",
    learn:
      "You study foundations of education, educational psychology, research methods in education, curriculum development, ICT and instructional design, educational leadership and special education, ending with a dissertation.",
    demand:
      "Edtech content teams, school groups professionalising their academic leadership and NEP-driven curriculum work have all expanded roles beyond classroom teaching.",
    where:
      "Schools and school chains, edtech companies, curriculum and assessment organisations, NGOs in education and government boards.",
    scopeAreas: [
      ["Curriculum development", "Designing syllabi, materials and assessments."],
      ["Instructional design", "Learning-experience design for edtech and corporate training."],
      ["Academic leadership", "Coordinator, head-of-department and principal tracks."],
      ["Educational research", "Evaluation studies and evidence for policy."],
      ["Special education", "Inclusive learning support and intervention."],
      ["Teacher training", "Capability building for schools and networks."],
    ],
    subjectsPg: [
      ["Foundations of Education", "Educational Psychology", "History of Education in India", "Philosophy of Education"],
      ["Sociology of Education", "Research Methods in Education", "ICT in Education", "Statistics in Education"],
      ["Curriculum Development", "Educational Leadership & Management", "Special & Inclusive Education", "Guidance & Counselling"],
      ["Educational Measurement & Evaluation", "Comparative Education", "Value Education", "Dissertation"],
    ],
    roles: [
      { role: "Curriculum Developer", salary: "₹5 – ₹10 LPA", detail: "Builds syllabi, lesson plans and assessments." },
      { role: "Instructional Designer", salary: "₹5 – ₹12 LPA", detail: "Designs learning journeys for digital platforms." },
      { role: "Educational Consultant", salary: "₹4 – ₹9 LPA", detail: "Advises schools on academics and accreditation." },
      { role: "Academic Coordinator", salary: "₹4 – ₹9 LPA", detail: "Runs academic planning for a school or grade band." },
      { role: "School Administrator", salary: "₹6 – ₹12 LPA", detail: "Operations and academic leadership of a school." },
      { role: "Assistant Professor (after NET)", salary: "₹5 – ₹11 LPA", detail: "Teaching and research in education departments." },
    ],
    recruiters: ["School chains", "Edtech companies", "NGOs in education", "Assessment bodies", "State education boards", "Universities"],
    industries: ["K-12 education", "Edtech", "Higher education", "Assessment", "Corporate training", "Development sector"],
    faqs: [
      { question: "Is MA Education the same as M.Ed?", answer: "No. MA Education is broader and more theory- and research-oriented; M.Ed is a professional teacher-education degree and usually requires a B.Ed." },
    ],
  },
  {
    match: [/e-accounting/, /computerised-accounting/, /tally/],
    oneLiner: "Digital accounting track built around Tally, ERP and GST compliance.",
    subject:
      "E-accounting is conventional accounting practised on software — Tally, ERP systems and cloud ledgers — with GST filing, digital vouchers and automated reconciliations replacing manual books.",
    learn:
      "You study financial and corporate accounting, Tally and ERP operation, GST and income-tax compliance, cost and management accounting, auditing, and digital finance tools, finishing with a practical accounting project.",
    demand:
      "GST compliance made software-literate accountants mandatory for even small firms, so employability is unusually direct: the software skill is the hiring filter.",
    where:
      "CA and accounting firms, SME finance departments, corporate shared-service centres, fintech and payroll providers, and retail chains.",
    scopeAreas: [
      ["Books & compliance", "Day-to-day accounting, GST returns and TDS filings."],
      ["ERP accounting", "Tally, SAP or Zoho-based transaction processing."],
      ["Taxation support", "Preparation and filing support for clients."],
      ["Audit assistance", "Vouching, reconciliation and audit schedules."],
      ["Payroll", "Salary processing, PF/ESI and statutory compliance."],
      ["Finance analytics", "MIS reporting for owners and management."],
    ],
    subjectsPg: [
      ["Advanced Financial Accounting", "Corporate Accounting", "Business Statistics", "Research Methodology"],
      ["Management Accounting", "Direct Taxation", "ERP & Accounting Systems", "Business Law"],
      ["Indirect Taxation (GST)", "Auditing & Assurance", "Financial Reporting", "Digital Finance Tools"],
      ["Corporate Tax Planning", "Advanced ERP", "Forensic Accounting Basics", "Project Work"],
    ],
    subjectsUg: [
      ["Financial Accounting", "Principles of Management", "Business Economics", "Business Communication"],
      ["Corporate Accounting", "Business Law", "Tally / ERP Basics", "Business Statistics"],
      ["Advanced E-Accounting", "Cost Accounting", "Banking & Insurance", "Company Law"],
      ["Indirect Tax (GST)", "Management Accounting", "Digital Finance", "Income Tax"],
      ["Auditing & Assurance", "Financial Reporting", "Entrepreneurship", "Elective"],
      ["Corporate Tax Planning", "ERP Systems", "Payroll Management", "Major Project"],
    ],
    roles: [
      { role: "E-Accounting Specialist", salary: "₹4 – ₹6 LPA", detail: "Runs the books on Tally/ERP with GST compliance." },
      { role: "Accounts Executive", salary: "₹3 – ₹5.5 LPA", detail: "Vouchers, reconciliations and vendor payments." },
      { role: "Tax Consultant (Junior)", salary: "₹3.5 – ₹6 LPA", detail: "GST and income-tax filing support." },
      { role: "Audit Assistant", salary: "₹3.5 – ₹5.5 LPA", detail: "Audit schedules and verification work." },
      { role: "Payroll Executive", salary: "₹3 – ₹6 LPA", detail: "Salary processing and statutory filings." },
      { role: "Accounts Manager", salary: "₹6 – ₹12 LPA", detail: "Owns the finance function of an SME or unit." },
    ],
    recruiters: ["CA firms", "Infosys BPM", "Genpact", "SME finance teams", "Zoho", "Retail chains"],
    industries: ["Accounting & audit", "Shared services", "Retail", "Manufacturing", "Fintech", "Professional services"],
  },
  {
    match: [/international-finance/, /global-finance/, /acca/, /cma/, /ifrs/],
    oneLiner: "IFRS, global reporting and international-accounting track, often certification-aligned.",
    subject:
      "International finance and accounting applies global reporting standards — IFRS, cross-border taxation and consolidated reporting — to companies that operate in more than one currency and jurisdiction.",
    learn:
      "You study financial and advanced corporate reporting, IFRS, management and performance accounting, global taxation, audit and assurance, and risk and governance, often mapped to ACCA or CMA exemptions, finishing with a reporting project.",
    demand:
      "The rapid expansion of finance GCCs in India has created thousands of roles that require IFRS familiarity rather than only Indian GAAP, and the pay premium reflects that.",
    where:
      "Big Four and mid-tier audit firms, finance shared services and GCCs, MNC controllership teams, investment banks and consulting.",
    scopeAreas: [
      ["IFRS reporting", "Consolidation and disclosure under global standards."],
      ["Global audit", "Group audit support for multinational clients."],
      ["Management accounting", "Performance reporting across entities and currencies."],
      ["International taxation", "Transfer pricing and cross-border compliance basics."],
      ["Risk & governance", "Controls testing and SOX-style compliance."],
      ["Certification track", "ACCA/CMA exemptions alongside the degree."],
    ],
    subjectsPg: [
      ["Advanced Financial Reporting", "IFRS Framework", "Business Statistics", "Research Methodology"],
      ["Management & Performance Accounting", "Corporate Governance", "International Business Law", "Financial Management"],
      ["Global Taxation", "Audit & Assurance", "Risk Management", "Consolidated Financial Statements"],
      ["Strategic Business Reporting", "Forensic Accounting", "International Finance", "Project Work"],
    ],
    subjectsUg: [
      ["Global Business Environment", "Financial Accounting", "Business Ethics", "Business Communication"],
      ["Management Accounting", "Business Law", "Economics", "Business Statistics"],
      ["Advanced Financial Reporting", "IFRS", "Performance Management", "Cost Accounting"],
      ["Global Taxation", "Financial Management", "Audit & Assurance", "Corporate Law"],
      ["Strategic Finance", "Risk Management", "Corporate Governance", "Elective"],
      ["Business Analysis", "Forensic Accounting", "International Finance", "Project Work"],
    ],
    roles: [
      { role: "International Auditor", salary: "₹6 – ₹12 LPA", detail: "Audit support for multinational group entities." },
      { role: "Financial Analyst (MNC)", salary: "₹5.5 – ₹12 LPA", detail: "Reporting and analysis across geographies." },
      { role: "IFRS Reporting Analyst", salary: "₹6 – ₹14 LPA", detail: "Consolidation and disclosure preparation." },
      { role: "Investment Banking Associate", salary: "₹7 – ₹18 LPA", detail: "Modelling and transaction support." },
      { role: "Transfer Pricing Analyst", salary: "₹6 – ₹13 LPA", detail: "Cross-border pricing documentation and compliance." },
      { role: "Finance Manager (GCC)", salary: "₹10 – ₹22 LPA", detail: "Owns a reporting process for global stakeholders." },
    ],
    recruiters: ["Deloitte", "EY", "KPMG", "PwC", "Genpact", "Standard Chartered"],
    industries: ["Audit & advisory", "Global capability centres", "Investment banking", "MNC finance", "Consulting", "Insurance"],
  },
  {
    match: [/e-commerce/, /ecommerce/, /digital-business/],
    oneLiner: "Online-trade, digital marketing and marketplace-operations track.",
    subject:
      "E-commerce management is the business of selling online — marketplace and D2C operations, digital marketing, payments, fulfilment and the analytics that keep unit economics positive.",
    learn:
      "You study e-commerce technology and business models, digital marketing, consumer behaviour online, supply chain and last-mile fulfilment, payment systems and security, and e-commerce analytics, finishing with a store or category project.",
    demand:
      "Marketplace sellers, D2C brands and quick commerce all keep expanding their category and operations teams, and the roles are open to commerce graduates without a coding background.",
    where:
      "Marketplaces and D2C brands, digital agencies, logistics and fulfilment providers, payment companies and retail chains.",
    scopeAreas: [
      ["Marketplace operations", "Listings, pricing, ratings and seller performance."],
      ["Digital marketing", "Performance ads, SEO and email/CRM for online stores."],
      ["Fulfilment & logistics", "Inventory, warehousing and delivery SLAs."],
      ["Category management", "Assortment, margin and vendor terms online."],
      ["Payments & risk", "Gateways, chargebacks and fraud control."],
      ["E-commerce analytics", "Conversion, AOV and retention analysis."],
    ],
    subjectsPg: [
      ["E-Business Models", "Digital Marketing", "Business Statistics", "Research Methodology"],
      ["E-Commerce Technology", "Consumer Behaviour Online", "Financial Management", "Business Law & IT Act"],
      ["Supply Chain & Fulfilment", "Payment Systems & Security", "Marketplace Management", "E-Commerce Analytics"],
      ["Omnichannel Strategy", "Social Commerce", "Digital Entrepreneurship", "Project Work"],
    ],
    subjectsUg: [
      ["Principles of Management", "Business Communication", "IT Fundamentals", "Business Economics"],
      ["Marketing Management", "Digital Business", "Business Law", "Financial Accounting"],
      ["E-Commerce Technology", "Consumer Behaviour", "Cost Accounting", "Business Statistics"],
      ["Digital Marketing", "Supply Chain Management", "Online Payment Systems", "Financial Management"],
      ["Data Analytics for Commerce", "Customer Relationship Management", "Auditing", "Elective"],
      ["E-Commerce Strategy", "Social Media Marketing", "Entrepreneurship", "Project Work"],
    ],
    roles: [
      { role: "E-Commerce Manager", salary: "₹5 – ₹14 LPA", detail: "Owns online revenue, pricing and fulfilment." },
      { role: "Category Executive", salary: "₹4 – ₹9 LPA", detail: "Assortment, listings and vendor coordination." },
      { role: "Digital Marketing Executive", salary: "₹3.5 – ₹8 LPA", detail: "Runs paid and organic acquisition." },
      { role: "Supply Chain Coordinator", salary: "₹4 – ₹8 LPA", detail: "Inventory, dispatch and delivery performance." },
      { role: "Marketplace Specialist", salary: "₹4 – ₹10 LPA", detail: "Amazon/Flipkart seller account management." },
      { role: "E-Commerce Analyst", salary: "₹4 – ₹10 LPA", detail: "Conversion, pricing and retention analysis." },
    ],
    recruiters: ["Amazon", "Flipkart", "Nykaa", "Meesho", "Delhivery", "Digital agencies"],
    industries: ["E-commerce", "D2C brands", "Logistics", "Digital marketing", "Payments", "Retail"],
  },
  {
    match: [/^accounting/, /accountancy/, /taxation/, /audit/],
    oneLiner: "Core accounting, taxation and audit track — the base for CA, CS and CMA routes.",
    subject:
      "Accounting is the discipline of recording, reporting and verifying financial activity — the ledgers, statements, tax filings and audits every organisation is legally required to maintain.",
    learn:
      "You study financial and corporate accounting, cost and management accounting, direct and indirect taxation, company law, auditing, and financial reporting, closing with a practical accounting or audit project.",
    demand:
      "Accounting demand is structural rather than cyclical — every registered entity files, audits and reports — which is why it stays the most reliable commerce career base in India.",
    where:
      "CA firms, corporate finance and shared-service centres, banks and PSUs, tax consultancies, and SME finance departments.",
    scopeAreas: [
      ["Financial accounting", "Books, closing and statutory financial statements."],
      ["Taxation", "Income tax, GST and compliance filings."],
      ["Auditing", "Statutory, internal and concurrent audit work."],
      ["Cost & management accounting", "Costing, budgeting and MIS."],
      ["Professional exams", "A recognised base degree for CA, CS and CMA."],
      ["Banking & PSU exams", "Eligible graduate degree for Bank PO and SSC routes."],
    ],
    subjectsPg: [
      ["Advanced Financial Accounting", "Corporate Accounting", "Business Statistics", "Research Methodology"],
      ["Management Accounting", "Direct Taxation", "Corporate Law", "Financial Management"],
      ["Indirect Taxation (GST)", "Advanced Auditing", "Financial Reporting", "Cost Control"],
      ["Corporate Tax Planning", "Forensic Accounting", "Strategic Financial Management", "Project Work"],
    ],
    subjectsUg: [
      ["Financial Accounting", "Business Organisation", "Business Economics", "Business Communication"],
      ["Corporate Accounting", "Business Law", "Business Statistics", "Principles of Management"],
      ["Cost Accounting", "Income Tax Law", "Company Law", "Banking & Insurance"],
      ["Management Accounting", "Auditing", "Indirect Tax (GST)", "Financial Management"],
      ["Direct & Indirect Taxes", "Financial Reporting", "Marketing Management", "Entrepreneurship"],
      ["Advanced Auditing", "Corporate Reporting", "Elective", "Project Work"],
    ],
    roles: [
      { role: "Junior Accountant", salary: "₹3 – ₹5 LPA", detail: "Day-to-day books, reconciliations and vouchers." },
      { role: "Audit Assistant", salary: "₹3.5 – ₹5.5 LPA", detail: "Verification and audit documentation." },
      { role: "Tax Executive", salary: "₹3.5 – ₹7 LPA", detail: "Return preparation and compliance." },
      { role: "Accounts Manager", salary: "₹6 – ₹12 LPA", detail: "Owns the accounting function of a unit." },
      { role: "Financial Consultant", salary: "₹4 – ₹9 LPA", detail: "Advisory for SMEs and individuals." },
      { role: "Finance Executive (Shared Services)", salary: "₹4 – ₹8 LPA", detail: "P2P, O2C and R2R processes for global clients." },
    ],
    recruiters: ["CA firms", "Genpact", "Infosys BPM", "Public sector banks", "Deloitte", "Corporate finance teams"],
    industries: ["Accounting & audit", "BFSI", "Shared services", "Manufacturing", "Consulting", "Public sector"],
  },
];

function toAuthored(seed: Seed): AuthoredSpec {
  return {
    match: seed.match,
    oneLiner: seed.oneLiner,
    what: (ctx: SpecCtx) => [
      `${ctx.family.name} in ${ctx.specName} is the ${ctx.specName} elective track of the ${ctx.family.degreeName}, delivered fully online by UGC-entitled universities. ${seed.subject}`,
      seed.learn,
      `Across the ${ctx.providers} ${ctx.providers === 1 ? "university" : "universities"} in our dataset that run this track, the programme takes ${ctx.duration} and costs ${ctx.feeRange} in total. Your degree certificate reads ${ctx.family.shortName} — the specialisation appears through your elective papers and project, exactly as it does on campus.`,
    ],
    scope: (ctx: SpecCtx) => [
      seed.demand,
      `${seed.where} For an online learner the practical advantage is timing: you apply each module at work while you study, so by the time the ${ctx.family.shortName} is awarded you already have ${ctx.specName.toLowerCase()} work to talk about in interviews.`,
    ],
    scopeAreas: seed.scopeAreas.map(([title, detail]) => ({ title, detail })),
    subjects: seed.subjectsUg ? { pg: seed.subjectsPg, ug: seed.subjectsUg } : { pg: seed.subjectsPg },
    roles: seed.roles,
    recruiters: seed.recruiters,
    industries: seed.industries,
    extraFaqs: seed.faqs,
  };
}

export const authoredSpecs: AuthoredSpec[] = seeds.map(toAuthored);

/** First authored record whose patterns match the specialisation slug. */
export function findAuthoredSpec(specSlug: string): AuthoredSpec | undefined {
  return authoredSpecs.find((a) => a.match.some((re) => re.test(specSlug)));
}
