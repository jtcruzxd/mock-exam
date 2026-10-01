export interface Question {
  id: number;
  question: string;
  choices: { label: string; text: string }[];
  answer: string; // label of the correct choice
}

export const questions: Question[] = [

  // ── PART I · IDENTIFICATION (25 items) ──────────────────────────────────

  {
    id: 1,
    question: "PART I – IDENTIFICATION\n\nThe process of cultivating plants and domesticating animals for food.",
    choices: [
      { label: "a", text: "Agriculture / Domestication" },
      { label: "b", text: "Industrialization" },
      { label: "c", text: "Irrigation" },
      { label: "d", text: "Urbanization" },
    ],
    answer: "a",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    question: "The historical period dated c. 3000 BCE–500 CE, known for early foundations in writing, mathematics, astronomy, and engineering.",
    choices: [
      { label: "a", text: "Ancient Age" },
      { label: "b", text: "Middle Ages" },
      { label: "c", text: "Renaissance" },
      { label: "d", text: "Industrial Age" },
    ],
    answer: "a",
  },
  {
    id: 7,
    question: "The clay record-keeping object from ancient Mesopotamia that bears wedge-shaped writing.",
    choices: [
      { label: "a", text: "Papyrus scroll" },
      { label: "b", text: "Cuneiform tablet" },
      { label: "c", text: "Hieroglyphic stone" },
      { label: "d", text: "Wax codex" },
    ],
    answer: "b",
  },
  {
    id: 8,
    question: "The astronomical instrument widely used in the medieval Islamic world.",
    choices: [
      { label: "a", text: "Telescope" },
      { label: "b", text: "Sextant" },
      { label: "c", text: "Astrolabe" },
      { label: "d", text: "Compass" },
    ],
    answer: "c",
  },
  {
    id: 9,
    question: "The country where paper originated before it spread westward.",
    choices: [
      { label: "a", text: "Egypt" },
      { label: "b", text: "India" },
      { label: "c", text: "China" },
      { label: "d", text: "Persia" },
    ],
    answer: "c",
  },
  {
    id: 10,
    question: "The country where movable metal type was used before the fifteenth century, earlier than Gutenberg.",
    choices: [
      { label: "a", text: "Japan" },
      { label: "b", text: "Korea" },
      { label: "c", text: "China" },
      { label: "d", text: "Persia" },
    ],
    answer: "b",
  },
  {
    id: 11,
    question: "The city where the Gutenberg Bible was produced around 1454–1455.",
    choices: [
      { label: "a", text: "Rome" },
      { label: "b", text: "Paris" },
      { label: "c", text: "London" },
      { label: "d", text: "Mainz" },
    ],
    answer: "d",
  },
  {
    id: 12,
    question: "The astronomer who proposed a Sun-centered model during the Scientific Revolution.",
    choices: [
      { label: "a", text: "Galileo Galilei" },
      { label: "b", text: "Johannes Kepler" },
      { label: "c", text: "Nicolaus Copernicus" },
      { label: "d", text: "Isaac Newton" },
    ],
    answer: "c",
  },
  {
    id: 13,
    question: "According to STS, these often influence which technologies are developed and how knowledge is used, as shown by ancient irrigation and farming.",
    choices: [
      { label: "a", text: "Individual preferences" },
      { label: "b", text: "Social needs" },
      { label: "c", text: "Random chance" },
      { label: "d", text: "Religious beliefs only" },
    ],
    answer: "b",
  },
  {
    id: 14,
    question: "The 18th–19th century process that connected machines, energy, factories, and transportation, and raised issues of labor, inequality, and environmental effects.",
    choices: [
      { label: "a", text: "Digitalization" },
      { label: "b", text: "Globalization" },
      { label: "c", text: "Industrialization" },
      { label: "d", text: "Urbanization" },
    ],
    answer: "c",
  },
  {
    id: 15,
    question: "The period c. 500–1500 CE when scholars preserved, translated, criticized, and expanded earlier works.",
    choices: [
      { label: "a", text: "Ancient Age" },
      { label: "b", text: "Renaissance" },
      { label: "c", text: "Middle Ages / Medieval period" },
      { label: "d", text: "Enlightenment" },
    ],
    answer: "c",
  },
  {
    id: 16,
    question: "The executive department of the Philippine government that coordinates science and technology projects and formulates S&T policies.",
    choices: [
      { label: "a", text: "Department of Education (DepEd)" },
      { label: "b", text: "Department of Trade and Industry (DTI)" },
      { label: "c", text: "Department of Science and Technology (DOST)" },
      { label: "d", text: "Department of Health (DOH)" },
    ],
    answer: "c",
  },
  {
    id: 17,
    question: "The large warships built by pre-colonial Filipinos.",
    choices: [
      { label: "a", text: "Balangay" },
      { label: "b", text: "Parao" },
      { label: "c", text: "Caracoa" },
      { label: "d", text: "Bangka" },
    ],
    answer: "c",
  },
  {
    id: 18,
    question: "By the 10th century A.D., pre-colonial Filipinos were already weaving cotton and smelting this metal.",
    choices: [
      { label: "a", text: "Gold" },
      { label: "b", text: "Iron" },
      { label: "c", text: "Bronze" },
      { label: "d", text: "Copper" },
    ],
    answer: "b",
  },
  {
    id: 19,
    question: "The type of pre-colonial communities that developed more sophisticated technology because of their access to trade and maritime activities.",
    choices: [
      { label: "a", text: "Mountain communities" },
      { label: "b", text: "Forest communities" },
      { label: "c", text: "Coastal communities" },
      { label: "d", text: "River communities" },
    ],
    answer: "c",
  },
  {
    id: 20,
    question: "Because pre-colonial Filipinos did not develop a written literary tradition, much of their history is reconstructed through these findings and early visitors' accounts.",
    choices: [
      { label: "a", text: "Oral traditions" },
      { label: "b", text: "Archaeological findings" },
      { label: "c", text: "Colonial records" },
      { label: "d", text: "Religious texts" },
    ],
    answer: "b",
  },
  {
    id: 21,
    question: "The groups that mainly established schools in the Philippines during the Spanish period.",
    choices: [
      { label: "a", text: "Spanish military officers" },
      { label: "b", text: "Religious orders" },
      { label: "c", text: "Filipino intellectuals" },
      { label: "d", text: "American missionaries" },
    ],
    answer: "b",
  },
  {
    id: 22,
    question: "Along with pharmacy, the field on which Spanish-era scientific research mainly focused, especially the study of infectious diseases.",
    choices: [
      { label: "a", text: "Engineering" },
      { label: "b", text: "Astronomy" },
      { label: "c", text: "Medicine" },
      { label: "d", text: "Agriculture" },
    ],
    answer: "c",
  },
  {
    id: 23,
    question: "The factor of S&T development shown by higher education being available mainly to the elite during the Spanish period.",
    choices: [
      { label: "a", text: "Technological innovation" },
      { label: "b", text: "Religious influence" },
      { label: "c", text: "Economic and educational policies" },
      { label: "d", text: "Foreign investment" },
    ],
    answer: "c",
  },
  {
    id: 24,
    question: "Together with stones and tiles, the construction material introduced by the Spaniards through new building techniques.",
    choices: [
      { label: "a", text: "Concrete" },
      { label: "b", text: "Steel" },
      { label: "c", text: "Bricks" },
      { label: "d", text: "Glass" },
    ],
    answer: "c",
  },
  {
    id: 25,
    question: "Aside from social and economic progress, science and technology are closely connected to a country's political sovereignty and this.",
    choices: [
      { label: "a", text: "Cultural preservation" },
      { label: "b", text: "Military expansion" },
      { label: "c", text: "Economic self-reliance" },
      { label: "d", text: "Foreign aid" },
    ],
    answer: "c",
  },

  // ── PART II · MULTIPLE CHOICE (25 items) ────────────────────────────────

  {
    id: 26,
    question: "PART II – MULTIPLE CHOICE\n\nA Philippine coffee cooperative uses online platforms to sell abroad and joins virtual training with foreign roasters. Which outcome best shows how globalization can support economic growth?",
    choices: [
      { label: "a", text: "Local producers no longer need skills development." },
      { label: "b", text: "Producers gain wider markets and access to new knowledge." },
      { label: "c", text: "All local businesses become independent of foreign competition." },
      { label: "d", text: "Technology has no effect on trade." },
    ],
    answer: "b",
  },
  {
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
    question: "A community makerspace teaches young people to repair devices, share tools, and design projects that solve local problems. Which value is most strongly expressed?",
    choices: [
      { label: "a", text: "Kapwa through cooperative technological practice" },
      { label: "b", text: "Consumerism through constant replacement" },
      { label: "c", text: "Isolation from community concerns" },
      { label: "d", text: "Technology as an end in itself" },
    ],
    answer: "a",
  },
  {
    id: 41,
    question: "What is an intellectual revolution?",
    choices: [
      { label: "a", text: "A war fought over new inventions" },
      { label: "b", text: "A period where paradigm shifts occurred and widely accepted scientific beliefs were challenged" },
      { label: "c", text: "A period when schools were first built" },
      { label: "d", text: "A movement that rejected all forms of science" },
    ],
    answer: "b",
  },
  {
    id: 42,
    question: "Whose geocentric model did Nicolaus Copernicus challenge?",
    choices: [
      { label: "a", text: "Galileo" },
      { label: "b", text: "Kepler" },
      { label: "c", text: "Newton" },
      { label: "d", text: "Ptolemy" },
    ],
    answer: "d",
  },
  {
    id: 43,
    question: "What confirmed and refined the Copernican model?",
    choices: [
      { label: "a", text: "Galileo's telescope observations and Kepler's elliptical orbits" },
      { label: "b", text: "Darwin's theory of evolution" },
      { label: "c", text: "Freud's psychoanalysis" },
      { label: "d", text: "Gutenberg's printing press" },
    ],
    answer: "a",
  },
  {
    id: 44,
    question: "In what book did Charles Darwin introduce the theory of evolution?",
    choices: [
      { label: "a", text: "The Interpretation of Dreams" },
      { label: "b", text: "Principia Mathematica" },
      { label: "c", text: "On the Origin of Species" },
      { label: "d", text: "The Forty-Two-Line Bible" },
    ],
    answer: "c",
  },
  {
    id: 45,
    question: "Physical similarities that evolved independently in different organisms because they lived in similar environments are called:",
    choices: [
      { label: "a", text: "Homologous structures" },
      { label: "b", text: "Analogous structures" },
      { label: "c", text: "Molecular structures" },
      { label: "d", text: "Geographic structures" },
    ],
    answer: "b",
  },
  {
    id: 46,
    question: "In Freud's theory of personality, which element operates as a moral conscience?",
    choices: [
      { label: "a", text: "Id" },
      { label: "b", text: "Ego" },
      { label: "c", text: "Superego" },
      { label: "d", text: "Unconscious" },
    ],
    answer: "c",
  },
  {
    id: 47,
    question: "Around what time did the Digital / Information Age begin?",
    choices: [
      { label: "a", text: "1970s" },
      { label: "b", text: "1800s" },
      { label: "c", text: "1920s" },
      { label: "d", text: "2010s" },
    ],
    answer: "a",
  },
  {
    id: 48,
    question: "Who created the World Wide Web at CERN?",
    choices: [
      { label: "a", text: "Bill Gates" },
      { label: "b", text: "Steve Jobs" },
      { label: "c", text: "Vinton Cerf" },
      { label: "d", text: "Tim Berners-Lee" },
    ],
    answer: "d",
  },
  {
    id: 49,
    question: "Who sent the first email in 1971?",
    choices: [
      { label: "a", text: "Manny Fernandez" },
      { label: "b", text: "Ray Tomlinson" },
      { label: "c", text: "Larry Page" },
      { label: "d", text: "Andy Grove" },
    ],
    answer: "b",
  },
  {
    id: 50,
    question: "Who are the creators of Google?",
    choices: [
      { label: "a", text: "Larry Page and Sergey Brin" },
      { label: "b", text: "Vinton Cerf and Robert Kahn" },
      { label: "c", text: "Steve Jobs and Bill Gates" },
      { label: "d", text: "Tim Berners-Lee and Ray Tomlinson" },
    ],
    answer: "a",
  },

  // ── PART III · TRUE OR FALSE (15 items) ─────────────────────────────────

  {
    id: 51,
    question: "PART III – TRUE OR FALSE\n\nA barangay app designed through community consultation and shared responsibility reflects Kapwa and bayanihan.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 52,
    question: "Viewing a forest only in terms of the timber it can supply is an example of enframing.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 53,
    question: "Heidegger believed that technology is merely a neutral tool with no effect on how people understand the world.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 54,
    question: "A school that asks how facial-recognition technology may affect trust and privacy is questioning technology rather than accepting it uncritically.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 55,
    question: "Virtue ethics judges actions only by rules and ignores character.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 56,
    question: "A technology policy that considers human flourishing, virtue, autonomy, community relationships, and environmental effects is a defensible response to technological enframing.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 57,
    question: "Because technology can shape how people see the world, Heidegger's ideas require society to reject every form of technology.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 58,
    question: "If genetic engineering is technically successful, it is automatically ethical even when long-term risks and justice concerns are ignored.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 59,
    question: "An AI hiring system is ethically stronger when it is regularly audited for bias and provides people a way to question decisions.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 60,
    question: "Ethical evaluation of gene editing should consider safety, informed consent, fairness, and possible effects on future generations.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 61,
    question: "If only wealthy people can access enhancement technologies, concerns about justice and inequality may arise.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 62,
    question: "Posthumanism always rejects human dignity and ethical responsibility.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "b",
  },
  {
    id: 63,
    question: "Making an AI system more transparent can improve accountability, although transparency alone may not solve every ethical problem.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
  },
  {
    id: 64,
    question: "Responsible development of robotics should include safety testing, human oversight, and consideration of effects on workers and communities.",
    choices: [
      { label: "a", text: "True" },
      { label: "b", text: "False" },
    ],
    answer: "a",
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
