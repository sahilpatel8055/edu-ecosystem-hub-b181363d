export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** Mega-menu columns. Data-driven so a CMS can extend it without code changes. */
  columns?: NavColumn[];
  featured?: { title: string; description: string; href: string; cta: string };
}

export const primaryNav: NavItem[] = [
  {
    label: "Courses",
    href: "/courses",
    columns: [
      {
        heading: "Postgraduate",
        links: [
          { label: "Online MBA", href: "/courses/online-mba" },
          { label: "Online MCA", href: "/courses/online-mca" },
          { label: "Online M.Com", href: "/courses/online-mcom" },
        ],
      },
      {
        heading: "Undergraduate",
        links: [
          { label: "Online BBA", href: "/courses/online-bba" },
          { label: "Online BCA", href: "/courses/online-bca" },
          { label: "Online B.Com", href: "/courses/online-bcom" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { label: "All courses", href: "/courses" },
          { label: "Admissions", href: "/admissions" },
          { label: "Scholarships", href: "/scholarships" },
        ],
      },
    ],
    featured: {
      title: "Programme finder",
      description: "Match a course to your budget, eligibility and career goal.",
      href: "/tools",
      cta: "Open finder",
    },
  },
  {
    label: "Universities",
    href: "/universities",
    columns: [
      {
        heading: "By mode",
        links: [
          { label: "Online universities", href: "/universities", description: "UGC-entitled online degrees" },
          { label: "Distance universities", href: "/universities", description: "DEB approved programmes" },
          { label: "Hybrid programmes", href: "/universities" },
        ],
      },
      {
        heading: "Popular",
        links: [
          { label: "LPU Online", href: "/universities/lpu-online" },
          { label: "Amity Online", href: "/universities/amity-online" },
          { label: "DU SOL", href: "/universities/du-sol" },
          { label: "Manipal Online", href: "/universities/manipal-online" },
        ],
      },
      {
        heading: "Research",
        links: [
          { label: "Rankings", href: "/rankings" },
          { label: "Reviews", href: "/reviews" },
          { label: "Admissions", href: "/admissions" },
        ],
      },
    ],
    featured: {
      title: "University finder",
      description: "Shortlist UGC-approved universities by fee, mode and specialisation.",
      href: "/tools",
      cta: "Open finder",
    },
  },
  {
    label: "Compare",
    href: "/compare",
    columns: [
      {
        heading: "Top comparisons",
        links: [
          { label: "LPU Online vs Amity Online", href: "/compare/lpu-online-vs-amity-online" },
          { label: "DU SOL vs IGNOU", href: "/compare/du-sol-vs-ignou" },
          { label: "Online MBA vs Distance MBA", href: "/compare/online-mba-vs-distance-mba" },
        ],
      },
      {
        heading: "Compare by",
        links: [
          { label: "Fees", href: "/compare" },
          { label: "Accreditation", href: "/compare" },
          { label: "Placement support", href: "/compare" },
        ],
      },
    ],
  },
  {
    label: "Specialisations",
    href: "/categories",
    columns: [
      {
        heading: "In demand",
        links: [
          { label: "Data science & analytics", href: "/courses/online-mba" },
          { label: "Finance", href: "/courses/online-mba" },
          { label: "Marketing", href: "/courses/online-mba" },
        ],
      },
      {
        heading: "Browse",
        links: [
          { label: "All specialisations", href: "/categories" },
          { label: "Tags", href: "/tags" },
          { label: "Career guides", href: "/career" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/blogs",
    columns: [
      {
        heading: "Read",
        links: [
          { label: "Blogs", href: "/blogs" },
          { label: "News", href: "/news" },
          { label: "Reviews", href: "/reviews" },
        ],
      },
      {
        heading: "Guidance",
        links: [
          { label: "Scholarships", href: "/scholarships" },
          { label: "Career guides", href: "/career" },
          { label: "Student tools", href: "/tools" },
        ],
      },
      {
        heading: "About us",
        links: [
          { label: "Authors", href: "/authors" },
          { label: "About AVEDU", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

/** Flat mobile menu — one tap per destination, no nesting required. */
export const mobileNav: NavLink[] = [
  { label: "Courses", href: "/courses" },
  { label: "Universities", href: "/universities" },
  { label: "Compare", href: "/compare" },
  { label: "Specialisations", href: "/categories" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Blogs", href: "/blogs" },
  { label: "News", href: "/news" },
  { label: "Tools", href: "/tools" },
];

export const footerNav: NavColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Universities", href: "/universities" },
      { label: "Courses", href: "/courses" },
      { label: "Comparisons", href: "/compare" },
      { label: "Rankings", href: "/rankings" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    heading: "Guidance",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Career guides", href: "/career" },
      { label: "Student tools", href: "/tools" },
    ],
  },
  {
    heading: "Knowledge",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "News", href: "/news" },
      { label: "Categories", href: "/categories" },
      { label: "Tags", href: "/tags" },
      { label: "Authors", href: "/authors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms & conditions", href: "/terms-and-conditions" },
    ],
  },
];

export const ecosystemLinks: NavLink[] = [
  { label: "AVEDU", href: "https://avedu.in/", description: "Main counselling platform" },
  { label: "DU SOL", href: "https://dusol.avedu.in/", description: "DU SOL admissions" },
  { label: "LPU Online", href: "https://lpuonline.avedu.in/", description: "LPU Online admissions" },
  { label: "Amity Online", href: "https://amityonline.avedu.in/", description: "Amity Online admissions" },
];