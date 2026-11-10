// Real Metricmind photos. Static imports: Next.js resizes them and adds blur placeholders.
import type { StaticImageData } from "next/image";

import aWhiteboard from "@/assets/images/academy-image-eight.jpeg";
import aClassBack from "@/assets/images/academy-image-eighteen.jpeg";
import aStudentsSmile from "@/assets/images/academy-image-eleven.jpeg";
import aInstructorsLaptop from "@/assets/images/academy-image-fifteen.jpeg";
import aCapHelping from "@/assets/images/academy-image-five.jpeg";
import aHandRaised from "@/assets/images/academy-image-four.jpeg";
import aTeamHelping from "@/assets/images/academy-image-fourteen.jpeg";
import aDeskPortrait from "@/assets/images/academy-image-nine.jpeg";
import aKidsLaptop from "@/assets/images/academy-image-nineteen.jpeg";
import aGreenWall from "@/assets/images/academy-image-seven.jpeg";
import aWindowHelp from "@/assets/images/academy-image-six.jpeg";
import aOneOnOne from "@/assets/images/academy-image-sixteen.jpeg";
import aLogoScreen from "@/assets/images/academy-image-thirteen.jpeg";
import aCoursePoster from "@/assets/images/academy-image-three.jpeg";
import aMentorBack from "@/assets/images/academy-image-tweenty-eight.jpeg";
import aTeamStreet from "@/assets/images/academy-image-tweenty-five.jpeg";
import aTeamTalk from "@/assets/images/academy-image-tweenty-four.jpeg";
import aStudentBoard from "@/assets/images/academy-image-tweenty-one.jpeg";
import aCohort from "@/assets/images/academy-image-tweenty-seven.jpeg";
import aStorefront from "@/assets/images/academy-image-tweenty-three.jpeg";
import aKidsDemo from "@/assets/images/academy-image-tweenty-two.jpeg";
import aDeskSmile from "@/assets/images/academy-image-twelve.jpeg";
import aLecture from "@/assets/images/academy-image-two.jpeg";

import bDocuments from "@/assets/images/business-image-five.jpeg";
import bCacFlyer from "@/assets/images/business-image-four.jpeg";
import bConsult from "@/assets/images/business-image-one.jpeg";
import bAgentFlyer from "@/assets/images/business-image-six.jpeg";
import bDeskWork from "@/assets/images/business-image-three.jpeg";
import bThinking from "@/assets/images/business-image-two.jpeg";
import scumlCert from "@/assets/images/SCUML.jpg";

export type Photo = { src: StaticImageData; alt: string };

const p = (src: StaticImageData, alt: string): Photo => ({ src, alt });

export const photos = {
  // Academy / training
  whiteboard: p(aWhiteboard, "Instructor teaching at the whiteboard in a Metricmind class"),
  classBack: p(aClassBack, "Students in Metricmind shirts working at computers"),
  studentsSmile: p(aStudentsSmile, "Smiling students at their computers in the training room"),
  instructorsLaptop: p(aInstructorsLaptop, "Two instructors demonstrating on a laptop to a student"),
  capHelping: p(aCapHelping, "Instructor guiding a student through a lesson on screen"),
  handRaised: p(aHandRaised, "Student raising a hand to ask the instructor a question"),
  teamHelping: p(aTeamHelping, "Metricmind instructors helping students at their workstations"),
  deskPortrait: p(aDeskPortrait, "Learner smiling at a desktop computer"),
  kidsLaptop: p(aKidsLaptop, "Instructor showing a laptop to young learners"),
  greenWall: p(aGreenWall, "Instructor helping two learners at a computer"),
  windowHelp: p(aWindowHelp, "Instructor leaning in to help students by the window"),
  oneOnOne: p(aOneOnOne, "Hands-on, one-on-one guidance from an instructor"),
  logoScreen: p(aLogoScreen, "Instructor reviewing a student's work on screen"),
  coursePoster: p(aCoursePoster, "Instructor beside the Metricmind course outline poster"),
  mentorBack: p(aMentorBack, "Mentor helping a student in a Metricmind Concepts shirt"),
  teamStreet: p(aTeamStreet, "The Metricmind Concepts team standing together outside"),
  teamTalk: p(aTeamTalk, "Metricmind team members talking outside the office"),
  studentBoard: p(aStudentBoard, "Student writing on the whiteboard during class"),
  cohort: p(aCohort, "A cohort of smiling Metricmind students"),
  storefront: p(aStorefront, "Metricmind Concepts Computer Training Institute storefront with the team on the balcony"),
  kidsDemo: p(aKidsDemo, "Young learners watching a laptop demonstration"),
  deskSmile: p(aDeskSmile, "Smiling learner working at a desktop computer"),
  lecture: p(aLecture, "Instructor explaining a concept to the class"),

  // Business support
  documents: p(bDocuments, "Laptop and registration documents on a desk"),
  cacFlyer: p(bCacFlyer, "Metricmind CAC registration services flyer"),
  consult: p(bConsult, "Metricmind consultant taking notes during a business consultation"),
  agentFlyer: p(bAgentFlyer, "Metricmind CAC and TIN accredited agent flyer"),
  deskWork: p(bDeskWork, "Consultant working at a computer in the Metricmind office"),
  thinking: p(bThinking, "Consultant reviewing a client's request at the computer"),

  // Credentials
  scuml: p(scumlCert, "SCUML (EFCC) certificate of registration for Metricmind Digital Concepts Ltd, RN SC 011500823"),
};

/** Registration details shown alongside the certificates */
export const credentials = {
  cac: { label: "CAC registered", number: "RC 9193173", entity: "Metricmind Digital Concepts Ltd", incorporated: "9 January 2026" },
  scuml: { label: "SCUML registered (EFCC)", number: "RN SC 011500823", entity: "Metricmind Digital Concepts Ltd", issued: "3 November 2026" },
};

/** Classroom gallery for reels and carousels (no near-duplicate shots side by side) */
export const academyGallery: Photo[] = [
  photos.whiteboard,
  photos.studentsSmile,
  photos.instructorsLaptop,
  photos.kidsLaptop,
  photos.studentBoard,
  photos.mentorBack,
  photos.greenWall,
  photos.lecture,
  photos.cohort,
  photos.windowHelp,
  photos.kidsDemo,
  photos.teamHelping,
];

export const businessGallery: Photo[] = [photos.consult, photos.documents, photos.deskWork, photos.thinking];
