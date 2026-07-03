import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Brain,
  Brush,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Compass,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Home,
  Lightbulb,
  MapPin,
  Mic2,
  Palette,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  ClipboardCheck,
  Trees,
  UsersRound
} from "lucide-react";

export const siteContact = {
  phone: "+91 98765 43210",
  secondaryPhone: "+91 91234 56780",
  email: "hello@nioskids.example",
  location: "Online support with local counselling slots",
  hours: "Mon-Sat, 10:00 AM - 6:00 PM",
  whatsapp: "https://wa.me/919876543210?text=Hi%20NIOS%20Kids%2C%20I%20want%20parent%20counselling%20for%20my%20child."
};

export const navItems = [
  ["Home", "#home", Sparkles],
  ["About", "#about", BookOpen],
  ["Programs", "#programs", Rocket],
  ["Journey", "#journey", Compass],
  ["Gallery", "#gallery", Palette],
  ["Admissions", "#admissions", CalendarCheck],
  ["Contact", "#contact", MapPin]
] as const;

export const stats = [
  ["2,500+", "Guided learning sessions"],
  ["98%", "Parent clarity rating"],
  ["40+", "Activity-based modules"],
  ["1:1", "Counselling and mentoring"]
];

export const trustBadges = [
  ["NIOS-Aligned", "Flexible academic support mapped to open-schooling needs."],
  ["Parent Updates", "Clear milestones, weekly focus areas and next-step guidance."],
  ["Child-Centered", "Playful lessons that reduce pressure and build confidence."]
];

export const features: [string, string, LucideIcon, string][] = [
  ["NIOS Planning Support", "We help parents understand subjects, pacing, documentation and exam-readiness without confusion.", FileCheck2, "bg-sky/20"],
  ["Flexible Learning Rhythm", "Children can move at a healthy pace while still following a visible academic roadmap.", CalendarCheck, "bg-sun/25"],
  ["Creative Concept Building", "Stories, art, experiments and projects make textbook concepts easier to remember.", Brush, "bg-coral/15"],
  ["Friendly Mentors", "Teachers focus on confidence, consistency and emotional comfort, not fear-based pressure.", HeartHandshake, "bg-mint/20"],
  ["Parent Trust System", "Progress notes, counselling checkpoints and transparent communication keep families informed.", ShieldCheck, "bg-grape/15"],
  ["Future Skills Layer", "Reading, communication, coding basics and problem-solving are woven into the learning journey.", Code2, "bg-orange/20"]
];

export const journey: [string, string, LucideIcon][] = [
  ["Discover", "Understand the child's level, interests and NIOS goals.", Trees],
  ["Plan", "Create a subject-wise learning path with parent clarity.", BookOpen],
  ["Practice", "Use weekly routines, worksheets and guided revision.", CheckCircle2],
  ["Create", "Add projects, activities and portfolio-style learning.", Brush],
  ["Review", "Track progress and prepare for assessments calmly.", Star],
  ["Achieve", "Move toward exams, confidence and independent learning.", GraduationCap]
];

export const programs = [
  {
    title: "Foundation Explorers",
    age: "Ages 4-7",
    gradient: "from-sky to-mint",
    copy: "A gentle early-learning program for language, numbers, stories, motor skills and creative confidence.",
    outcomes: ["Phonics and early reading", "Number sense through games", "Art, stories and speaking confidence"],
    parentFit: "Best for families who want a joyful start before formal academic pressure."
  },
  {
    title: "Primary Pathfinders",
    age: "Ages 8-11",
    gradient: "from-sun to-coral",
    copy: "A project-rich bridge between core academics and curiosity-led learning for growing children.",
    outcomes: ["Reading and writing routines", "Math and science concept clarity", "Weekly projects and presentations"],
    parentFit: "Best for children who need structure without losing creativity."
  },
  {
    title: "NIOS Achievers",
    age: "Ages 12-16",
    gradient: "from-grape to-sky",
    copy: "Focused NIOS support with subject planning, revision rhythm, mentoring and exam-oriented clarity.",
    outcomes: ["Subject selection guidance", "Exam-readiness checkpoints", "Study habits and portfolio skills"],
    parentFit: "Best for families choosing flexible schooling with serious academic goals."
  }
];

export const learningPathways: [string, string, string, LucideIcon, string[]][] = [
  [
    "OBE - Open Basic Education",
    "Std. III to VIII",
    "A bridge program for children who need foundational learning, flexible pacing and confidence before higher academic stages.",
    BookOpen,
    ["Foundational literacy and numeracy", "Activity-led concept building", "Readiness for secondary learning"]
  ],
  [
    "Secondary Support",
    "Std. IX to X",
    "Structured support for learners preparing for secondary-level academic expectations through NIOS-aligned planning.",
    GraduationCap,
    ["Subject planning guidance", "Regular practice rhythm", "TMA and exam preparation awareness"]
  ],
  [
    "Senior Secondary Support",
    "Std. XI to XII",
    "Guidance for older learners who need clarity, mentoring and steady academic planning for senior secondary goals.",
    FileCheck2,
    ["Stream and subject clarity", "Revision and assessment checkpoints", "Future pathway counselling"]
  ],
  [
    "Remedial & Counselling",
    "Learning support",
    "Personalized help for children who need additional attention, emotional comfort or alternative learning methods.",
    HeartHandshake,
    ["One-on-one support", "Small-batch learning", "Confidence and habit building"]
  ],
  [
    "Psychological & Educational Assessment",
    "Parent clarity",
    "Assessment-informed guidance to understand how a child learns and what kind of support may help.",
    Brain,
    ["Learning profile discussion", "Strength and need mapping", "Parent guidance conversation"]
  ],
  [
    "Parent & Teacher Workshops",
    "Support ecosystem",
    "Workshops that help adults understand learning differences, child-friendly teaching and practical home support.",
    UsersRound,
    ["Learning difficulty awareness", "Hands-on teaching strategies", "Home support routines"]
  ]
];

export const parentTrustReasons: [string, string, LucideIcon][] = [
  ["Child-Friendly Curriculum", "Lessons are mapped around the child's current level, pace and emotional comfort.", Puzzle],
  ["Small Batches", "Children receive individual attention without the pressure of a crowded classroom.", UsersRound],
  ["Sensitised Mentors", "Educators use patient, creative methods for diverse learning needs.", HeartHandshake],
  ["Holistic Development", "Language, cognition, sensory-motor, personality and social confidence are considered together.", Sparkles]
];

export const activities: [string, LucideIcon][] = [
  ["Art", Palette],
  ["Music", Mic2],
  ["Coding", Code2],
  ["Reading", BookOpen],
  ["Science", Brain],
  ["Home Projects", Home]
];

export const teachers = [
  {
    name: "Maya Sharma",
    role: "Early Learning Mentor",
    intro: "Turns phonics, numbers and stories into warm daily wins.",
    strengths: ["Phonics", "Story learning", "Confidence building"]
  },
  {
    name: "Arjun Mehta",
    role: "Project & STEM Coach",
    intro: "Helps children learn by building, explaining and experimenting.",
    strengths: ["Science projects", "Math clarity", "Coding basics"]
  },
  {
    name: "Nia Kapoor",
    role: "NIOS Academic Guide",
    intro: "Keeps older learners organized, calm and exam-ready.",
    strengths: ["NIOS planning", "Revision rhythm", "Parent counselling"]
  }
];

export const testimonials = [
  {
    quote: "We were confused about flexible schooling. The counselling made the NIOS path feel clear and doable.",
    parent: "Parent of Aarav, 13",
    result: "Built a 6-month study plan"
  },
  {
    quote: "My daughter stopped seeing study time as punishment. The activities gave her confidence to speak and create.",
    parent: "Parent of Kiara, 8",
    result: "Improved reading routine"
  },
  {
    quote: "The weekly updates helped us know exactly what to support at home. That clarity mattered most.",
    parent: "Parent of Ishan, 15",
    result: "Exam preparation stabilized"
  }
];

export const galleryItems = [
  {
    title: "Story Time Circle",
    category: "Reading",
    caption: "Guided reading, speaking prompts and vocabulary games.",
    color: "from-sky/55 to-mint/50",
    age: "Ages 6-9",
    proof: "Reading fluency",
    outcome: "Children practice expression, recall and vocabulary through guided story prompts."
  },
  {
    title: "Science Quest",
    category: "Science",
    caption: "Observation-led activities that make concepts visible.",
    color: "from-sun/60 to-coral/45",
    age: "Ages 9-13",
    proof: "Concept clarity",
    outcome: "Learners observe, record and explain simple experiments in their own words."
  },
  {
    title: "Art Studio",
    category: "Creative",
    caption: "Creative expression connected to language and confidence.",
    color: "from-coral/45 to-grape/40",
    age: "Ages 4-10",
    proof: "Creative confidence",
    outcome: "Art tasks become speaking, storytelling and fine-motor confidence builders."
  },
  {
    title: "Project Day",
    category: "Projects",
    caption: "Children explain, build and present what they learned.",
    color: "from-mint/55 to-sky/45",
    age: "Ages 8-16",
    proof: "Presentation skill",
    outcome: "Project demos help parents see understanding, effort and independent thinking."
  },
  {
    title: "Coding Puzzle",
    category: "STEM",
    caption: "Logic games and early coding patterns for future skills.",
    color: "from-grape/45 to-sky/50",
    age: "Ages 10-16",
    proof: "Problem solving",
    outcome: "Puzzle-based coding builds sequencing, debugging and patient thinking."
  },
  {
    title: "Parent Review",
    category: "Parents",
    caption: "Progress conversations that make next steps clear.",
    color: "from-orange/45 to-sun/55",
    age: "Parents",
    proof: "Progress clarity",
    outcome: "Families get a simple picture of current progress, gaps and next actions."
  }
];

export const mapPoints = [
  ["Counselling", "Parent goal mapping and NIOS-fit discussion", "18%", "34%"],
  ["Live Learning", "Online mentor-led classes and activity sessions", "58%", "28%"],
  ["Home Practice", "Worksheets, projects and parent-supported routines", "38%", "68%"],
  ["Review", "Milestone updates and exam-readiness checkpoints", "76%", "62%"]
] as [string, string, string, string][];

export const admissions = [
  ["Connect", "Share your child's age, current learning level and parent goals.", UsersRound],
  ["Counselling", "Get clarity on NIOS fit, program stage, subjects and support needs.", HeartHandshake],
  ["Learning Plan", "Receive a simple roadmap with weekly rhythm and milestones.", Lightbulb],
  ["Start Learning", "Begin classes, activities, progress updates and mentor check-ins.", Rocket]
] as [string, string, LucideIcon][];

export const parentProof = [
  "No pressure-heavy coaching language",
  "Clear NIOS support for parents",
  "Creative learning for children",
  "Structured progress checkpoints"
];

export const faqs = [
  ["Is this only for NIOS students?", "The platform is designed around NIOS-aligned support, but it also helps children who need flexible, creative academic guidance before or alongside open schooling."],
  ["Do you help with NIOS subject planning?", "Yes. Counselling includes subject-fit discussion, learning rhythm, exam-readiness checkpoints and parent guidance. Official registration rules should always be confirmed through NIOS channels."],
  ["Do parents get progress updates?", "Yes. Parents get milestone updates, weekly focus areas and practical next steps so they know how to support learning at home."],
  ["Are activities age appropriate?", "Programs are grouped by learning stage, and activities simplify or deepen based on the child's age, confidence and academic readiness."],
  ["Is this a replacement for official NIOS?", "No. This is a learning-support and mentoring platform. Official enrolment, eligibility, exam rules and certification remain with NIOS."]
];

export const niosInfoHighlights = [
  ["OBE", "Open Basic Education for foundational learners, commonly mapped around Std. III to VIII readiness."],
  ["Secondary", "Class 10 level support for subject planning, study rhythm, assignments and exam preparation."],
  ["Senior Secondary", "Class 12 level guidance for subject clarity, revision planning and future pathway counselling."],
  ["Support Role", "We provide learning support, counselling and mentoring. Official rules and certification remain with NIOS."]
];

export const niosInfoCards: [string, string, LucideIcon, string[]][] = [
  [
    "What is OBE?",
    "OBE means Open Basic Education. It supports learners who need foundational academic readiness before secondary-level study.",
    BookOpen,
    ["Useful for flexible foundational learning", "Focuses on literacy, numeracy and confidence", "Often helpful for children who need a gentler bridge"]
  ],
  [
    "What is Secondary?",
    "Secondary refers to Class 10 level academic preparation. Families usually need subject clarity, practice rhythm and exam-readiness support.",
    GraduationCap,
    ["Class 10 level learning support", "Subject planning and study routine", "Practice, revision and progress tracking"]
  ],
  [
    "What is Senior Secondary?",
    "Senior Secondary refers to Class 12 level academic preparation with deeper subject focus and future pathway planning.",
    FileCheck2,
    ["Class 12 level mentoring", "Stream and subject guidance", "Revision checkpoints and future planning"]
  ],
  [
    "Documents Parents Usually Prepare",
    "Exact requirements should be verified with official NIOS instructions, but families generally prepare identity, age and education records.",
    ClipboardList,
    ["Birth/age proof", "Address and identity proof", "Previous education records when applicable", "Recent photographs and parent details"]
  ],
  [
    "TMA Support",
    "Tutor Marked Assignments can feel confusing for families. We help children understand, plan and complete assignment-style learning work.",
    ClipboardCheck,
    ["Assignment planning guidance", "Topic understanding and drafting support", "Submission timeline reminders"]
  ],
  [
    "Practical & Exam Readiness",
    "For subjects that involve practicals or structured exams, families need early planning and calm revision support.",
    CalendarCheck,
    ["Practical-readiness awareness", "Revision schedule support", "Previous question practice habits"]
  ],
  [
    "Is the NIOS Certificate Valid?",
    "NIOS is a recognized open schooling board. Parents should always verify the latest recognition, eligibility and admission details from official NIOS sources.",
    ShieldCheck,
    ["Recognized open schooling pathway", "Useful for flexible learners", "Official confirmation should come from NIOS"]
  ],
  [
    "Are We Official NIOS?",
    "We are positioned as a learning-support and mentoring platform, not a replacement for official NIOS. Official registration, eligibility and certification remain with NIOS.",
    HeartHandshake,
    ["Learning support and counselling", "Parent guidance and mentoring", "Official rules remain with NIOS"]
  ]
];

export const niosInfoSteps = [
  ["Understand", "We discuss your child's current level, learning needs and family goals."],
  ["Plan", "We map the right stage: OBE, Secondary, Senior Secondary or remedial support."],
  ["Support", "Children receive guided learning, practice routines, activities and review checkpoints."],
  ["Review", "Parents get clarity on progress, next steps and exam-readiness milestones."]
];
