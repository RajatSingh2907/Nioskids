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
  whatsapp: "https://wa.me/919876543210?text=Hi%20NIOS%20Kids%2C%20I%20want%20learning%20path%20guidance%20for%20a%20student."
};

export const navItems = [
  ["Home", "#home", Sparkles],
  ["About", "#about", BookOpen],
  ["Class Paths", "#programs", Rocket],
  ["Journey", "#journey", Compass],
  ["Gallery", "#gallery", Palette],
  ["Admissions", "#admissions", CalendarCheck],
  ["Contact", "#contact", MapPin]
] as const;

export const stats = [
  ["1-12", "Standards supported"],
  ["2,500+", "Guided learning sessions"],
  ["40+", "Study and activity modules"],
  ["1:1", "Mentor and counselling support"]
];

export const trustBadges = [
  ["NIOS-Aligned", "Flexible academic support mapped from foundation years to secondary and senior secondary goals."],
  ["Student Roadmaps", "Clear milestones, weekly focus areas and next-step guidance for learners and families."],
  ["Balanced Learning", "Creative learning for younger students, structured study rhythm for higher classes."]
];

export const features: [string, string, LucideIcon, string][] = [
  ["NIOS Planning Support", "Students and families get clarity on subjects, pacing, documentation, TMA and exam-readiness.", FileCheck2, "bg-sky/20"],
  ["Flexible Learning Rhythm", "Younger learners and higher-class students can move at a healthy pace with a visible academic roadmap.", CalendarCheck, "bg-sun/25"],
  ["Creative Concept Building", "Stories, experiments, projects and examples make concepts easier to understand and remember.", Brush, "bg-coral/15"],
  ["Mentor-Led Study Support", "Mentors focus on confidence, consistency, doubt clearing and study habits without fear-based pressure.", HeartHandshake, "bg-mint/20"],
  ["Family Trust System", "Progress notes, counselling checkpoints and transparent communication keep learners and parents aligned.", ShieldCheck, "bg-grape/15"],
  ["Future Skills Layer", "Reading, communication, coding basics, problem-solving and independent study skills are woven into the journey.", Code2, "bg-orange/20"]
];

export const journey: [string, string, LucideIcon][] = [
  ["Discover", "Understand the learner's level, interests and NIOS goals.", Trees],
  ["Plan", "Create a subject-wise learning path with parent clarity.", BookOpen],
  ["Practice", "Use weekly routines, worksheets and guided revision.", CheckCircle2],
  ["Create", "Add projects, activities and portfolio-style learning.", Brush],
  ["Review", "Track progress and prepare for assessments calmly.", Star],
  ["Achieve", "Move toward exams, confidence and independent learning.", GraduationCap]
];

export const programs = [
  {
    title: "Classes 1-5",
    age: "Foundation & curiosity",
    gradient: "from-sky to-mint",
    copy: "A gentle program for language, numbers, reading confidence, curiosity and activity-led understanding.",
    outcomes: ["Reading and writing basics", "Number sense and concept play", "Speaking, stories and creativity"],
    parentFit: "Best for younger learners who need confidence with structure."
  },
  {
    title: "Classes 6-8",
    age: "Concept clarity & habits",
    gradient: "from-sun to-coral",
    copy: "A bridge stage for core subjects, study habits, projects and independent learning confidence.",
    outcomes: ["Math and science clarity", "Reading, writing and note habits", "Projects and presentations"],
    parentFit: "Best for middle-school learners building routine and confidence."
  },
  {
    title: "Classes 9-10",
    age: "Secondary preparation",
    gradient: "from-grape to-sky",
    copy: "Focused secondary support with subject planning, revision rhythm, TMA awareness and exam readiness.",
    outcomes: ["Subject-wise study planning", "Practice and revision checkpoints", "Exam and assignment readiness"],
    parentFit: "Best for Class 10 level students who need a clear academic plan."
  },
  {
    title: "Classes 11-12",
    age: "Senior Secondary",
    gradient: "from-mint to-sky",
    copy: "Mature support for senior secondary subjects, practical awareness, TMA planning and future pathways.",
    outcomes: ["Stream and subject clarity", "TMA and practical planning", "Board-ready revision schedule"],
    parentFit: "Best for older students preparing seriously for Class 12 goals."
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
    "Personalized help for students who need additional attention, emotional comfort or alternative learning methods.",
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
  ["Stage-Wise Curriculum", "Lessons are mapped around the learner's class level, pace and academic target.", Puzzle],
  ["Small Batches", "Students receive individual attention without the pressure of a crowded classroom.", UsersRound],
  ["Mentor Support", "Educators use patient, practical methods for diverse learning and exam needs.", HeartHandshake],
  ["Academic + Confidence Growth", "Concept clarity, communication, study habits and confidence are considered together.", Sparkles]
];

export const activities: [string, LucideIcon][] = [
  ["Art", Palette],
  ["Speaking", Mic2],
  ["Coding", Code2],
  ["Reading", BookOpen],
  ["Science", Brain],
  ["Study Projects", Home]
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
    intro: "Helps learners build, explain, experiment and strengthen concepts.",
    strengths: ["Science projects", "Math clarity", "Coding basics"]
  },
  {
    name: "Nia Kapoor",
    role: "NIOS Academic Guide",
    intro: "Keeps older learners organized, calm and exam-ready.",
    strengths: ["NIOS planning", "Revision rhythm", "TMA guidance"]
  }
];

export const testimonials = [
  {
    quote: "We were confused about flexible schooling. The counselling made the NIOS path feel clear and doable.",
    parent: "Parent of Aarav, 13",
    result: "Class 8 learner built a 6-month study plan"
  },
  {
    quote: "My daughter stopped seeing study time as punishment. The activities gave her confidence to speak and create.",
    parent: "Parent of Kiara, 8",
    result: "Class 4 learner improved reading confidence"
  },
  {
    quote: "The weekly updates and revision rhythm helped us prepare calmly instead of studying randomly.",
    parent: "Parent of Ishan, 15",
    result: "Class 10 student created a weekly revision plan"
  },
  {
    quote: "TMA planning and subject guidance made Class 12 feel manageable with flexible schooling.",
    parent: "Senior secondary learner",
    result: "Class 12 learner got TMA and practical guidance"
  }
];

export const galleryItems = [
  {
    title: "Reading & Foundation",
    category: "Classes 1-5",
    caption: "Guided reading, speaking prompts and vocabulary games.",
    color: "from-sky/55 to-mint/50",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children reading and learning together in a warm classroom setting",
    age: "Ages 6-9",
    proof: "Reading fluency",
    outcome: "Younger learners practice expression, recall and vocabulary through guided prompts."
  },
  {
    title: "Science Quest",
    category: "Science",
    caption: "Observation-led activities that make concepts visible.",
    color: "from-sun/60 to-coral/45",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students working with a teacher during a hands-on classroom activity",
    age: "Ages 9-13",
    proof: "Concept clarity",
    outcome: "Learners observe, record and explain simple experiments in their own words."
  },
  {
    title: "Art Studio",
    category: "Creative",
    caption: "Creative expression connected to language and confidence.",
    color: "from-coral/45 to-grape/40",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children creating artwork and learning through play",
    age: "Ages 4-10",
    proof: "Creative confidence",
    outcome: "Art tasks become speaking, storytelling and fine-motor confidence builders."
  },
  {
    title: "Project & Presentation Day",
    category: "Classes 6-8",
    caption: "Students explain, build and present what they learned.",
    color: "from-mint/55 to-sky/45",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students collaborating on classroom learning work",
    age: "Ages 8-16",
    proof: "Presentation skill",
    outcome: "Project demos help parents see understanding, effort and independent thinking."
  },
  {
    title: "Digital Study Skills",
    category: "Classes 9-12",
    caption: "Logic, research, planning and digital learning for older students.",
    color: "from-grape/45 to-sky/50",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student using a laptop for guided digital learning",
    age: "Ages 10-16",
    proof: "Problem solving",
    outcome: "Digital learning builds research habits, sequencing, problem solving and patient thinking."
  },
  {
    title: "Parent Review",
    category: "Parents",
    caption: "Progress conversations that make next steps clear.",
    color: "from-orange/45 to-sun/55",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Teacher and family discussing progress in a classroom environment",
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
  ["Connect", "Share the student's class, current learning level and academic goals.", UsersRound],
  ["Counselling", "Get clarity on NIOS fit, program stage, subjects and support needs.", HeartHandshake],
  ["Learning Plan", "Receive a simple roadmap with weekly rhythm and milestones.", Lightbulb],
  ["Start Learning", "Begin classes, activities, progress updates and mentor check-ins.", Rocket]
] as [string, string, LucideIcon][];

export const parentProof = [
  "No pressure-heavy coaching language",
  "Clear NIOS support for students and parents",
  "Creative learning for juniors",
  "Exam planning for higher classes",
  "Structured progress checkpoints"
];

export const faqs = [
  ["Is this only for NIOS students?", "The platform is designed around NIOS-aligned support, but it also helps learners who need flexible academic guidance before or alongside open schooling."],
  ["Do you help with NIOS subject planning?", "Yes. Counselling includes subject-fit discussion, learning rhythm, exam-readiness checkpoints and parent guidance. Official registration rules should always be confirmed through NIOS channels."],
  ["Do parents get progress updates?", "Yes. Parents get milestone updates, weekly focus areas and practical next steps so they know how to support learning at home."],
  ["Are activities age appropriate?", "Programs are grouped by learning stage, and activities simplify or deepen based on the student's class, confidence and academic readiness."],
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
    "Tutor Marked Assignments can feel confusing for families. We help students understand, plan and complete assignment-style learning work.",
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
  ["Understand", "We discuss the student's current level, learning needs and family goals."],
  ["Plan", "We map the right stage: OBE, Secondary, Senior Secondary or remedial support."],
  ["Support", "Students receive guided learning, practice routines, activities and review checkpoints."],
  ["Review", "Parents get clarity on progress, next steps and exam-readiness milestones."]
];
