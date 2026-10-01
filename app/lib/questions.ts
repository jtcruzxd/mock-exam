export interface Question {
  id: number;
  question: string;
  choices: { label: string; text: string }[];
  answer: string; // label of the correct choice
}

export const questions: Question[] = [

  // ── PART I · IDENTIFICATION (20 items) ──────────────────────────────────

  {
    id: 1,
    question: "PART I – IDENTIFICATION\n\nThe process of cultivating plants and domesticating animals for food.",
    choices: [
      { label: "a", text: "Agriculture / Domestication" },
      { label: "b", text: "Industrialization" },
      { label: "c", text: "Urbanization" },
      { label: "d", text: "Irrigation" },
    ],
    answer: "a",
  },
  {
    id: 2,
    question: "The \"New Stone Age,\" associated with settled farming communities.",
    choices: [
      { label: "a", text: "Paleolithic Age" },
      { label: "b", text: "Bronze Age" },
      { label: "c", text: "Neolithic Age" },
      { label: "d", text: "Iron Age" },
    ],
    answer: "c",
  },
  {
    id: 3,
    question: "The ancient civilization located between the Tigris and Euphrates Rivers.",
    choices: [
      { label: "a", text: "Egypt" },
      { label: "b", text: "Mesopotamia" },
      { label: "c", text: "Greece" },
      { label: "d", text: "Rome" },
    ],
    answer: "b",
  },
  {
    id: 4,
    question: "The method of supplying water to crops, especially important in ancient Egypt.",
    choices: [
      { label: "a", text: "Crop rotation" },
      { label: "b", text: "Fertilization" },
      { label: "c", text: "Irrigation" },
      { label: "d", text: "Terracing" },
    ],
    answer: "c",
  },
  {
    id: 5,
    question: "The ancient Chinese invention used to determine direction.",
    choices: [
      { label: "a", text: "Compass" },
      { label: "b", text: "Astrolabe" },
      { label: "c", text: "Sextant" },
      { label: "d", text: "Sundial" },
    ],
    answer: "a",
  },
  {
    id: 6,
    question: "The mathematical concept developed in ancient India that is essential to the modern number system.",
    choices: [
      { label: "a", text: "Pi (π)" },
      { label: "b", text: "Algebra" },
      { label: "c", text: "Zero" },
      { label: "d", text: "Calculus" },
    ],
    answer: "c",
  },
  {
    id: 7,
    question: "The Greek philosopher known for systematic observation and classification of living things.",
    choices: [
      { label: "a", text: "Socrates" },
      { label: "b", text: "Plato" },
      { label: "c", text: "Aristotle" },
      { label: "d", text: "Pythagoras" },
    ],
    answer: "c",
  },
  {
    id: 8,
    question: "Medieval religious communities that preserved and copied many classical manuscripts.",
    choices: [
      { label: "a", text: "Universities" },
      { label: "b", text: "Monasteries" },
      { label: "c", text: "Guilds" },
      { label: "d", text: "Cathedrals" },
    ],
    answer: "b",
  },
  {
    id: 9,
    question: "The Renaissance invention that enabled books and ideas to spread more rapidly.",
    choices: [
      { label: "a", text: "The telegraph" },
      { label: "b", text: "The movable-type printing press" },
      { label: "c", text: "The steam engine" },
      { label: "d", text: "The compass" },
    ],
    answer: "b",
  },
  {
    id: 10,
    question: "A systematic process of observing, forming hypotheses, testing, and drawing conclusions.",
    choices: [
      { label: "a", text: "Deductive reasoning" },
      { label: "b", text: "Alchemy" },
      { label: "c", text: "Scientific method" },
      { label: "d", text: "Philosophical inquiry" },
    ],
    answer: "c",
  },
  {
    id: 11,
    question: "The inventor whose improvements made the steam engine more efficient during the Industrial Revolution.",
    choices: [
      { label: "a", text: "Thomas Edison" },
      { label: "b", text: "James Watt" },
      { label: "c", text: "Nikola Tesla" },
      { label: "d", text: "Alexander Graham Bell" },
    ],
    answer: "b",
  },
  {
    id: 12,
    question: "The production arrangement in which workers and machines are concentrated in one workplace.",
    choices: [
      { label: "a", text: "Cottage industry" },
      { label: "b", text: "Guild system" },
      { label: "c", text: "Factory system" },
      { label: "d", text: "Barter system" },
    ],
    answer: "c",
  },
  {
    id: 13,
    question: "The era marked by the widespread use of computers, digital communication, and information networks.",
    choices: [
      { label: "a", text: "Industrial Age" },
      { label: "b", text: "Space Age" },
      { label: "c", text: "Renaissance" },
      { label: "d", text: "Information Age" },
    ],
    answer: "d",
  },
  {
    id: 14,
    question: "The social arrangement in which people perform specialized jobs instead of producing everything they need themselves.",
    choices: [
      { label: "a", text: "Communalism" },
      { label: "b", text: "Division of labor / Specialization" },
      { label: "c", text: "Feudalism" },
      { label: "d", text: "Mercantilism" },
    ],
    answer: "b",
  },
  {
    id: 15,
    question: "The wedge-shaped writing system developed by the Sumerians.",
    choices: [
      { label: "a", text: "Hieroglyphics" },
      { label: "b", text: "Cuneiform" },
      { label: "c", text: "Sanskrit" },
      { label: "d", text: "Ideographs" },
    ],
    answer: "b",
  },
  {
    id: 16,
    question: "The picture-based writing system used in ancient Egypt.",
    choices: [
      { label: "a", text: "Cuneiform" },
      { label: "b", text: "Runes" },
      { label: "c", text: "Hieroglyphics" },
      { label: "d", text: "Logographs" },
    ],
    answer: "c",
  },
  {
    id: 17,
    question: "The Chinese invention that became a widely used material for writing and record-keeping.",
    choices: [
      { label: "a", text: "Silk" },
      { label: "b", text: "Bamboo tablets" },
      { label: "c", text: "Clay tablets" },
      { label: "d", text: "Paper / Papermaking" },
    ],
    answer: "d",
  },
  {
    id: 18,
    question: "The Renaissance intellectual movement that emphasized human dignity, potential, and classical learning.",
    choices: [
      { label: "a", text: "Scholasticism" },
      { label: "b", text: "Humanism" },
      { label: "c", text: "Empiricism" },
      { label: "d", text: "Rationalism" },
    ],
    answer: "b",
  },
  {
    id: 19,
    question: "The study of celestial bodies that helped ancient societies create calendars and predict seasons.",
    choices: [
      { label: "a", text: "Astrology" },
      { label: "b", text: "Geology" },
      { label: "c", text: "Astronomy" },
      { label: "d", text: "Meteorology" },
    ],
    answer: "c",
  },
  {
    id: 20,
    question: "Archaeologists discover a settlement with permanent houses, stored grain, domesticated animals, and specialized crafts. Identify the major historical transformation represented by this evidence.",
    choices: [
      { label: "a", text: "Industrial Revolution" },
      { label: "b", text: "Information Age" },
      { label: "c", text: "Renaissance" },
      { label: "d", text: "Neolithic Revolution / Agricultural Revolution" },
    ],
    answer: "d",
  },

  // ── PART II · MULTIPLE CHOICE (25 items) ────────────────────────────────

  {
    id: 21,
    question: "PART II – MULTIPLE CHOICE\n\nA town adopts movable-type printing and soon sees faster sharing of scientific ideas, religious debates, and political opinions. What is the best explanation for this change?",
    choices: [
      { label: "a", text: "Printing limited knowledge to wealthy families." },
      { label: "b", text: "Printing made written materials easier to reproduce and circulate." },
      { label: "c", text: "Printing ended the need for schools and teachers." },
      { label: "d", text: "Printing was used only for recording taxes." },
    ],
    answer: "b",
  },
  {
    id: 22,
    question: "A manufacturer replaces hand production with steam-powered machines and large factories. This change most directly illustrates the:",
    choices: [
      { label: "a", text: "Neolithic Revolution" },
      { label: "b", text: "Industrial Revolution" },
      { label: "c", text: "Information Age" },
      { label: "d", text: "Renaissance" },
    ],
    answer: "b",
  },
  {
    id: 23,
    question: "A Philippine coffee cooperative uses online platforms to sell abroad and joins virtual training with foreign roasters. Which outcome best shows how globalization can support economic growth?",
    choices: [
      { label: "a", text: "Local producers no longer need skills development." },
      { label: "b", text: "Producers gain wider markets and access to new knowledge." },
      { label: "c", text: "All local businesses become independent of foreign competition." },
      { label: "d", text: "Technology has no effect on trade." },
    ],
    answer: "b",
  },
  {
    id: 24,
    question: "A Filipino researcher adapts an imported water-testing device so that local communities can repair it using affordable parts. This is an example of:",
    choices: [
      { label: "a", text: "Technological isolation" },
      { label: "b", text: "Technology transfer and local adaptation" },
      { label: "c", text: "Consumerism" },
      { label: "d", text: "Enframing" },
    ],
    answer: "b",
  },
  {
    id: 25,
    question: "Which conclusion about colonial contributions to Philippine science and technology is most accurate?",
    choices: [
      { label: "a", text: "Colonial periods had no influence on Philippine institutions." },
      { label: "b", text: "All Philippine technologies were created by colonizers." },
      { label: "c", text: "Colonial rule introduced some technologies and institutions, which Filipinos later adapted to local needs." },
      { label: "d", text: "Colonial technologies immediately removed social inequality." },
    ],
    answer: "c",
  },
  {
    id: 26,
    question: "Agricultural scientists develop salt-tolerant rice, and extension workers train farmers to use it. Farmers later report more stable harvests and incomes. What does this best demonstrate?",
    choices: [
      { label: "a", text: "Locally relevant research can contribute to economic development." },
      { label: "b", text: "Scientific research has no connection to farming." },
      { label: "c", text: "Farmers should never receive technological training." },
      { label: "d", text: "Economic development depends only on imported products." },
    ],
    answer: "a",
  },
  {
    id: 27,
    question: "A hospital needs an affordable device to help premature infants in low-resource settings. Which Filipino innovator is most closely associated with low-cost infant care equipment?",
    choices: [
      { label: "a", text: "Fe del Mundo" },
      { label: "b", text: "Arturo Alcaraz" },
      { label: "c", text: "Gregorio Zara" },
      { label: "d", text: "Ramon Barba" },
    ],
    answer: "a",
  },
  {
    id: 28,
    question: "A community plans to develop electricity from underground heat and steam in a volcanic region. Which Filipino scientist's work is most relevant?",
    choices: [
      { label: "a", text: "Fe del Mundo" },
      { label: "b", text: "Arturo Alcaraz" },
      { label: "c", text: "Agapito Flores" },
      { label: "d", text: "Julian Banzon" },
    ],
    answer: "b",
  },
  {
    id: 29,
    question: "Filipino engineers co-design a low-cost solar dryer with farmers, test it in rural communities, and improve it based on feedback. This approach best shows that national development is supported when technology:",
    choices: [
      { label: "a", text: "Ignores local users' experiences" },
      { label: "b", text: "Responds to local needs through collaboration" },
      { label: "c", text: "Is copied without modification" },
      { label: "d", text: "Is limited to urban consumers" },
    ],
    answer: "b",
  },
  {
    id: 30,
    question: "A museum label states that Agapito Flores invented the fluorescent lamp, but historical records show that fluorescent-lamp patents existed earlier. What is the most responsible action for the museum?",
    choices: [
      { label: "a", text: "Repeat the claim without checking evidence." },
      { label: "b", text: "Remove all references to Filipino inventors." },
      { label: "c", text: "Verify primary sources and present the attribution carefully." },
      { label: "d", text: "Assume every popular story is historically accurate." },
    ],
    answer: "c",
  },
  {
    id: 31,
    question: "A coastal town needs official forecasts on rainfall, typhoons, and climate conditions before ordering evacuations. Which agency should it consult?",
    choices: [
      { label: "a", text: "PAGASA" },
      { label: "b", text: "PHIVOLCS" },
      { label: "c", text: "National Museum" },
      { label: "d", text: "Commission on Elections" },
    ],
    answer: "a",
  },
  {
    id: 32,
    question: "After an earthquake near an active volcano, officials need information about volcanic activity, fault movement, and possible tsunamis. Which agency is most appropriate?",
    choices: [
      { label: "a", text: "PAGASA" },
      { label: "b", text: "PHIVOLCS" },
      { label: "c", text: "Department of Tourism" },
      { label: "d", text: "Department of Agriculture" },
    ],
    answer: "b",
  },
  {
    id: 33,
    question: "A government-employed researcher seeks protection for career development, benefits, and working conditions in public science service. Which law is most relevant?",
    choices: [
      { label: "a", text: "RA 2067" },
      { label: "b", text: "RA 7687" },
      { label: "c", text: "RA 8439" },
      { label: "d", text: "RA 11035" },
    ],
    answer: "c",
  },
  {
    id: 34,
    question: "A financially disadvantaged but academically talented student wants support to pursue a degree in engineering. Which law is most closely associated with this type of S&T scholarship?",
    choices: [
      { label: "a", text: "RA 2067" },
      { label: "b", text: "RA 7687" },
      { label: "c", text: "RA 8439" },
      { label: "d", text: "RA 7394" },
    ],
    answer: "b",
  },
  {
    id: 35,
    question: "A policymaker proposes creating a national body to strengthen organized scientific research and development. Which law historically established the National Science Development Board?",
    choices: [
      { label: "a", text: "RA 2067" },
      { label: "b", text: "RA 7687" },
      { label: "c", text: "RA 8439" },
      { label: "d", text: "RA 11035" },
    ],
    answer: "a",
  },
  {
    id: 36,
    question: "A Filipino materials scientist working overseas is invited to conduct short-term research, mentor local researchers, and share expertise with Philippine institutions. Which DOST program best fits this situation?",
    choices: [
      { label: "a", text: "Balik Scientist Program" },
      { label: "b", text: "Pantawid Pamilya Program" },
      { label: "c", text: "National Greening Program" },
      { label: "d", text: "K to 12 Program" },
    ],
    answer: "a",
  },
  {
    id: 37,
    question: "Which proposed research project is most likely to receive support as a national R&D priority?",
    choices: [
      { label: "a", text: "A project with no identified problem or intended users" },
      { label: "b", text: "A project that addresses a national need, has a sound method, and involves relevant partners" },
      { label: "c", text: "A project designed only to copy an existing product without improvement" },
      { label: "d", text: "A project that refuses to test its results" },
    ],
    answer: "b",
  },
  {
    id: 38,
    question: "Which evidence would best show that an early-warning technology program is effective?",
    choices: [
      { label: "a", text: "The number of posters printed" },
      { label: "b", text: "The color of the warning-device logo" },
      { label: "c", text: "Faster warnings, wider coverage, and improved community response" },
      { label: "d", text: "The number of speeches made during its launch" },
    ],
    answer: "c",
  },
  {
    id: 39,
    question: "A student chooses a career not only for income but also because it allows meaningful service, personal growth, and good character. This choice best reflects Aristotle's idea of:",
    choices: [
      { label: "a", text: "Eudaimonia" },
      { label: "b", text: "Consumerism" },
      { label: "c", text: "Standing-reserve" },
      { label: "d", text: "Genetic enhancement" },
    ],
    answer: "a",
  },
  {
    id: 40,
    question: "Two learners both receive tablets, but only one has internet access, accessible learning materials, and training. Amartya Sen's capability approach would emphasize that:",
    choices: [
      { label: "a", text: "Owning the same device guarantees equal opportunity" },
      { label: "b", text: "Real freedom depends on what people are able to do with available resources" },
      { label: "c", text: "Technology should never be used in education" },
      { label: "d", text: "Income is the only measure of well-being" },
    ],
    answer: "b",
  },
  {
    id: 41,
    question: "Residents jointly create a neighborhood emergency group chat, share verified information, and assist vulnerable neighbors during disasters. This best reflects:",
    choices: [
      { label: "a", text: "Kapwa and bayanihan" },
      { label: "b", text: "Technological determinism" },
      { label: "c", text: "Individual consumerism" },
      { label: "d", text: "Social isolation" },
    ],
    answer: "a",
  },
  {
    id: 42,
    question: "A school wants to know whether a learning app improves students' quality of life. Which evaluation is most appropriate?",
    choices: [
      { label: "a", text: "Measure only the app's number of downloads." },
      { label: "b", text: "Consider learning, stress, relationships, access, and student autonomy." },
      { label: "c", text: "Ask only the app developer." },
      { label: "d", text: "Assume all digital tools improve well-being." },
    ],
    answer: "b",
  },
  {
    id: 43,
    question: "A community provides assistive technology, training, and reliable internet to persons with disabilities. This most clearly expands their:",
    choices: [
      { label: "a", text: "Capabilities" },
      { label: "b", text: "Consumer debts" },
      { label: "c", text: "Social isolation" },
      { label: "d", text: "Technological dependence" },
    ],
    answer: "a",
  },
  {
    id: 44,
    question: "A social-media platform gains revenue by keeping users online as long as possible, even when users report fatigue and reduced face-to-face interaction. What revision would best promote digital well-being?",
    choices: [
      { label: "a", text: "Add more automatic notifications." },
      { label: "b", text: "Remove all user privacy controls." },
      { label: "c", text: "Give users meaningful controls over notifications and screen-time use." },
      { label: "d", text: "Make the platform harder to exit." },
    ],
    answer: "c",
  },
  {
    id: 45,
    question: "A community makerspace teaches young people to repair devices, share tools, and design projects that solve local problems. Which value is most strongly expressed?",
    choices: [
      { label: "a", text: "Kapwa through cooperative technological practice" },
      { label: "b", text: "Consumerism through constant replacement" },
      { label: "c", text: "Isolation from community concerns" },
      { label: "d", text: "Technology as an end in itself" },
    ],
    answer: "a",
  },

  // ── PART III · TRUE OR FALSE (20 items) ─────────────────────────────────

  {
    id: 46,
    question: "PART III – TRUE OR FALSE\n\nA barangay app designed through community consultation and shared responsibility reflects Kapwa and bayanihan.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 47,
    question: "Viewing a forest only in terms of the timber it can supply is an example of enframing.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 48,
    question: "Heidegger believed that technology is merely a neutral tool with no effect on how people understand the world.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 49,
    question: "A school that asks how facial-recognition technology may affect trust and privacy is questioning technology rather than accepting it uncritically.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 50,
    question: "Virtue ethics judges actions only by rules and ignores character.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 51,
    question: "Using digital tools intentionally to strengthen relationships and reduce unnecessary consumption can support meaningful living.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 52,
    question: "More screen time automatically leads to greater well-being.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 53,
    question: "A technology policy that considers human flourishing, virtue, autonomy, community relationships, and environmental effects is a defensible response to technological enframing.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 54,
    question: "Because technology can shape how people see the world, Heidegger's ideas require society to reject every form of technology.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 55,
    question: "If genetic engineering is technically successful, it is automatically ethical even when long-term risks and justice concerns are ignored.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 56,
    question: "An AI hiring system is ethically stronger when it is regularly audited for bias and provides people a way to question decisions.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 57,
    question: "Replacing all human interaction in elder care with robots is automatically ethical if it lowers costs.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 58,
    question: "Ethical evaluation of gene editing should consider safety, informed consent, fairness, and possible effects on future generations.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 59,
    question: "If only wealthy people can access enhancement technologies, concerns about justice and inequality may arise.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 60,
    question: "Posthumanism always rejects human dignity and ethical responsibility.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 61,
    question: "Making an AI system more transparent can improve accountability, although transparency alone may not solve every ethical problem.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 62,
    question: "A highly accurate surveillance system may ignore privacy and consent because good performance is the only ethical standard.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 63,
    question: "Responsible development of robotics should include safety testing, human oversight, and consideration of effects on workers and communities.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 64,
    question: "A cognitive-enhancement technology is automatically ethical as long as adults voluntarily choose to use it.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 65,
    question: "Governments should create adaptable safeguards for emerging technologies by considering benefits, risks, rights, and public participation.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
];
