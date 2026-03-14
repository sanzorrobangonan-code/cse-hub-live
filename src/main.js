import './styles/base.css';
import './styles/components.css';
import './styles/screens.css';
import './styles/desktop.css';

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════
const lessonContent = {
  grammar: {
    title: "Grammar & Correct Usage",
    subject: "Verbal Ability",
    icon: "📝",
    color: "#E0F2FE",
    accent: "#0284C7",
    duration: "8 min",
    quizKey: "grammar",
    content: `
      <div class="chip" style="background:#E0F2FE;color:#0284C7;border-color:#38BDF8;margin-bottom:16px;">📝 Verbal Ability</div>
      <div class="lesson-hero">Grammar & Correct Usage</div>
      <div class="lesson-body">
        Grammar rules guide how we structure sentences in English. In the CSE exam, grammar questions test your knowledge of subject-verb agreement, pronoun usage, modifiers, and word choice.
        <span class="highlight">
          💡 Key concept: The verb must always agree with its <strong>subject</strong> — not with words that come between them.
        </span>
      </div>

      <div class="key-points">
        <div class="key-points-label">✅ Key Rules to Remember</div>
        <div class="key-point">Singular subjects take singular verbs. Plural subjects take plural verbs.</div>
        <div class="key-point">With "neither...nor" / "either...or", the verb agrees with the closest subject.</div>
        <div class="key-point">"Each", "every", "everyone", "nobody" are always singular.</div>
        <div class="key-point">Collective nouns (committee, team, class) take singular verbs in formal English.</div>
        <div class="key-point">Use "fewer" for countable nouns, "less" for uncountable nouns.</div>
        <div class="key-point">Subjunctive mood: use "were" (not "was") after wish, if, as though.</div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 Example 1 — Subject-Verb Agreement</div>
        <div class="example-content">
          ❌ Neither the students nor the teacher <strong>are</strong> present.<br>
          ✓ Neither the students nor the teacher <strong>is</strong> present.<br><br>
          <em>Why? The verb agrees with "teacher" (closest subject = singular).</em>
        </div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 Example 2 — Subjunctive Mood</div>
        <div class="example-content">
          ❌ I wish I <strong>was</strong> taller.<br>
          ✓ I wish I <strong>were</strong> taller.<br><br>
          <em>Why? After "wish", we always use "were" for all persons — this is the subjunctive mood.</em>
        </div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 Example 3 — Fewer vs. Less</div>
        <div class="example-content">
          ❌ There are <strong>less</strong> students today.<br>
          ✓ There are <strong>fewer</strong> students today.<br><br>
          <em>Why? "Students" is countable, so we use "fewer".</em>
        </div>
      </div>

      <div class="lesson-body">
        <strong>Common Traps in the CSE:</strong><br>
        Watch out for "data" (plural), "news" (singular), "scissors" (plural). Also remember: past participle of "go" is "gone", not "went". Never say "could of" — it’s always "could have".
      </div>
    `
  },
  vocabulary: {
    title: "Vocabulary & Word Meaning",
    subject: "Verbal Ability",
    icon: "💬",
    color: "#DCFCE7",
    accent: "#16A34A",
    duration: "10 min",
    quizKey: "vocabulary",
    content: `
      <div class="chip" style="background:#DCFCE7;color:#16A34A;border-color:#22C55E;margin-bottom:16px;">📝 Verbal Ability</div>
      <div class="lesson-hero">Vocabulary & Word Meaning</div>
      <div class="lesson-body">
        The CSE tests your ability to understand and use English words correctly. You'll face questions on synonyms (same meaning), antonyms (opposite meaning), and definitions of advanced vocabulary.
        <span class="highlight">
          💡 Tip: Study roots, prefixes, and suffixes — they help you decode unfamiliar words!
        </span>
      </div>

      <div class="key-points">
        <div class="key-points-label">🔑 High-Frequency CSE Words</div>
        <div class="key-point"><strong>Ebullient</strong> – cheerful and full of energy (opposite: gloomy)</div>
        <div class="key-point"><strong>Mendacious</strong> – lying, dishonest (related: mendacity)</div>
        <div class="key-point"><strong>Laconic</strong> – brief, concise in speech</div>
        <div class="key-point"><strong>Ephemeral</strong> – short-lived, fleeting (opposite: permanent)</div>
        <div class="key-point"><strong>Pragmatic</strong> – practical, sensible (opposite: idealistic)</div>
        <div class="key-point"><strong>Ameliorate</strong> – to improve (synonym: enhance)</div>
        <div class="key-point"><strong>Cogent</strong> – logical, convincing</div>
        <div class="key-point"><strong>Perfidious</strong> – treacherous, disloyal</div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 Synonym vs Antonym Strategy</div>
        <div class="example-content">
          <strong>BENEVOLENT</strong> means kind and generous.<br>
          Synonym → compassionate, generous<br>
          Antonym → <strong>MALEVOLENT</strong> (wishing evil on others)<br><br>
          <em>Tip: "Bene" = good (Latin), "Male" = bad. Knowing roots saves time!</em>
        </div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 Word Roots to Remember</div>
        <div class="example-content">
          • <strong>Loqua/Loqu</strong> = speak → loquacious (talkative)<br>
          • <strong>Greg</strong> = flock → gregarious (sociable)<br>
          • <strong>Pec</strong> = money → impecunious (poor)<br>
          • <strong>Mend</strong> = lie → mendacious (untruthful)<br>
          • <strong>Ephemer</strong> = day → ephemeral (short-lived)
        </div>
      </div>
    `
  },
  constitution: {
    title: "Philippine Constitution 1987",
    subject: "General Information",
    icon: "🏛️",
    color: "#FFE4E6",
    accent: "#DC2626",
    duration: "6 min",
    quizKey: "geninfo",
    content: `
      <div class="chip" style="background:#FFE4E6;color:#DC2626;border-color:#F87171;margin-bottom:16px;">🏛️ General Information</div>
      <div class="lesson-hero">Philippine Constitution 1987</div>
      <div class="lesson-body">
        The 1987 Philippine Constitution is the supreme law of the land. All other laws must conform to it. It was ratified on February 2, 1987 under President Corazon Aquino.
        <span class="highlight">
          💡 Remember: The Constitution has 18 articles. The most tested articles in CSE are Articles II, III, VI, VII, and XIII.
        </span>
      </div>

      <div class="key-points">
        <div class="key-points-label">📋 Key Articles to Know</div>
        <div class="key-point"><strong>Article I</strong> – National Territory</div>
        <div class="key-point"><strong>Article II</strong> – Declaration of Principles and State Policies</div>
        <div class="key-point"><strong>Article III</strong> – Bill of Rights (due process, equal protection, freedoms)</div>
        <div class="key-point"><strong>Article VI</strong> – Legislative Department (Congress: Senate 24 + HR)</div>
        <div class="key-point"><strong>Article VII</strong> – Executive Department (President: 6-year term, no re-election)</div>
        <div class="key-point"><strong>Article VIII</strong> – Judicial Department (Supreme Court)</div>
        <div class="key-point"><strong>Article XIII</strong> – Social Justice and Human Rights (CHR created here)</div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 Most Common CSE Questions</div>
        <div class="example-content">
          Q: What is the term of the President?<br>
          A: <strong>6 years, NOT re-electable</strong><br><br>
          Q: How many Senators are in the Philippines?<br>
          A: <strong>24 Senators</strong> (elected at large, 6-year terms)<br><br>
          Q: Where is the Bill of Rights found?<br>
          A: <strong>Article III</strong>
        </div>
      </div>
    `
  },
  ra6713: {
    title: "R.A. 6713 – Code of Conduct",
    subject: "General Information",
    icon: "⚖️",
    color: "#EDE9FE",
    accent: "#7C3AED",
    duration: "5 min",
    quizKey: "geninfo",
    content: `
      <div class="chip" style="background:#EDE9FE;color:#7C3AED;border-color:#8B5CF6;margin-bottom:16px;">🏛️ General Information</div>
      <div class="lesson-hero">R.A. 6713 – Code of Conduct & Ethical Standards</div>
      <div class="lesson-body">
        Republic Act 6713, the Code of Conduct and Ethical Standards for Public Officials and Employees, was enacted in 1989. It promotes high standards of ethics in public service.
        <span class="highlight">
          💡 Key: SALN must be filed <strong>annually</strong>. Gifts related to official duties are <strong>prohibited</strong>.
        </span>
      </div>

      <div class="key-points">
        <div class="key-points-label">⚖️ 8 Norms of Conduct (Section 4)</div>
        <div class="key-point">Commitment to Public Interest</div>
        <div class="key-point">Professionalism</div>
        <div class="key-point">Justness and Sincerity</div>
        <div class="key-point">Political Neutrality</div>
        <div class="key-point">Responsiveness to the Public</div>
        <div class="key-point">Nationalism and Patriotism</div>
        <div class="key-point">Commitment to Democracy</div>
        <div class="key-point">Simple Living</div>
      </div>

      <div class="example-box">
        <div class="example-label">📌 SALN (Statement of Assets, Liabilities & Net Worth)</div>
        <div class="example-content">
          • Must be filed: <strong>annually</strong><br>
          • Also required: upon assumption of office and expiration of term<br>
          • Covers all assets, liabilities, and business interests<br>
          • Failure to file = administrative offense
        </div>
      </div>
    `
  },
  paragraph: {
    title: "Paragraph Organization",
    subject: "Verbal Ability",
    icon: "📄",
    color: "#FEF9C3",
    accent: "#CA8A04",
    duration: "6 min",
    quizKey: "reading",
    content: `
      <div class="chip" style="background:#FEF9C3;color:#CA8A04;border-color:#FACC15;margin-bottom:16px;">📝 Verbal Ability</div>
      <div class="lesson-hero">Paragraph Organization</div>
      <div class="lesson-body">
        Paragraph organization questions test your ability to arrange sentences in a logical, coherent order. The CSE often asks you to identify: the correct sequence, the best topic sentence, the best concluding sentence, the out-of-place sentence, or the best transition word.
        <span class="highlight">💡 Tip: Look for signal words — First, Then, Next, Finally, However, Therefore, Consequently.</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ 5 Common Question Types</div>
        <div class="key-point"><strong>Sequence:</strong> Arrange numbered sentences in logical or chronological order.</div>
        <div class="key-point"><strong>Topic Sentence:</strong> Find the sentence that introduces the paragraph's main idea.</div>
        <div class="key-point"><strong>Concluding Sentence:</strong> Find the sentence that best ends the paragraph.</div>
        <div class="key-point"><strong>Odd One Out:</strong> Identify the sentence that does NOT belong.</div>
        <div class="key-point"><strong>Transitions:</strong> Choose the best connecting word (However, Therefore, Consequently, Nevertheless).</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Transition Words Guide</div>
        <div class="example-content">
          <strong>Cause & Effect:</strong> Therefore, Consequently, As a result<br>
          <strong>Contrast:</strong> However, Nevertheless, On the other hand<br>
          <strong>Addition:</strong> Furthermore, Moreover, In addition<br>
          <strong>Sequence:</strong> First, Then, Next, Finally<br>
          <strong>Conclusion:</strong> In summary, In conclusion, Overall
        </div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Example — Sequence Question</div>
        <div class="example-content">
          (1) The fire was extinguished.<br>
          (2) Firefighters arrived.<br>
          (3) A fire broke out.<br>
          (4) The alarm sounded.<br><br>
          ✓ <strong>Correct order: 3-4-2-1</strong><br>
          <em>Fire breaks out → alarm sounds → firefighters arrive → fire out.</em>
        </div>
      </div>
    `
  },
  reading: {
    title: "Reading Comprehension",
    subject: "Verbal Ability",
    icon: "📖",
    color: "#FFE4E6",
    accent: "#DC2626",
    duration: "15 min",
    quizKey: "reading",
    content: `
      <div class="chip" style="background:#FFE4E6;color:#DC2626;border-color:#F87171;margin-bottom:16px;">📝 Verbal Ability</div>
      <div class="lesson-hero">Reading Comprehension</div>
      <div class="lesson-body">
        Reading comprehension tests your ability to understand written passages and answer questions about them. In the CSE, passages are typically 2–5 sentences long with 2 questions each.
        <span class="highlight">💡 Strategy: Read the QUESTIONS first, then the passage. Know what to look for!</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ Types of Reading Questions</div>
        <div class="key-point"><strong>Directly stated facts:</strong> The answer is explicitly in the text. Just find it.</div>
        <div class="key-point"><strong>Main idea:</strong> What is the overall message? Avoid answer choices that are too specific.</div>
        <div class="key-point"><strong>Inference:</strong> What can be concluded? Choose what is MOST LIKELY implied.</div>
        <div class="key-point"><strong>Tone/Purpose:</strong> Is it informative, persuasive, concerned, celebratory?</div>
        <div class="key-point"><strong>Vocabulary in context:</strong> What does the underlined word mean in THIS passage?</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Reading Strategy: PORPE Method</div>
        <div class="example-content">
          <strong>P</strong>redict – What is this about?<br>
          <strong>O</strong>rganize – What is the structure?<br>
          <strong>R</strong>ehearse – What are the key facts?<br>
          <strong>P</strong>ractice – Answer the questions<br>
          <strong>E</strong>valuate – Check your answers
        </div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Inference vs. Fact</div>
        <div class="example-content">
          Passage: "The government launched a free vaccination program. Thousands availed on the first day."<br><br>
          <strong>Fact:</strong> A free vaccination program was launched. ✓<br>
          <strong>Inference:</strong> The program was well-received by citizens. ✓ (supported by "thousands availed")<br>
          <strong>NOT valid:</strong> Vaccination was compulsory. ✗ (not stated or implied)
        </div>
      </div>
    `
  },
  basicops: {
    title: "Basic Operations & Fractions",
    subject: "Numerical Ability",
    icon: "➕",
    color: "#DCFCE7",
    accent: "#16A34A",
    duration: "12 min",
    quizKey: "basicops",
    content: `
      <div class="chip" style="background:#DCFCE7;color:#16A34A;border-color:#22C55E;margin-bottom:16px;">🔢 Numerical Ability</div>
      <div class="lesson-hero">Basic Operations & Fractions</div>
      <div class="lesson-body">
        The CSE tests your speed and accuracy with arithmetic: addition, subtraction, multiplication, division, fractions, decimals, percentages, and roots. Learn shortcut techniques to save time!
        <span class="highlight">💡 Key: Memorize multiplication tables up to 12×12. Know your perfect squares: 1 to 20.</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ Quick Reference</div>
        <div class="key-point"><strong>PEMDAS:</strong> Parentheses → Exponents → Multiply/Divide → Add/Subtract</div>
        <div class="key-point"><strong>Fractions:</strong> To add/subtract, find the LCD first. To multiply, just multiply across.</div>
        <div class="key-point"><strong>Percentages:</strong> x% of y = (x/100) × y. "Of" means multiply.</div>
        <div class="key-point"><strong>Perfect squares:</strong> 1,4,9,16,25,36,49,64,81,100,121,144,169,196,225</div>
        <div class="key-point"><strong>GCF & LCM:</strong> GCF = Greatest Common Factor. LCM = Least Common Multiple.</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Percentage Shortcuts</div>
        <div class="example-content">
          To find 15% of 240:<br>
          10% of 240 = 24<br>
          5% of 240 = 12 (half of 10%)<br>
          15% = 24 + 12 = <strong>36</strong> ✓<br><br>
          To find 25% → divide by 4<br>
          To find 33.3% → divide by 3<br>
          To find 50% → divide by 2
        </div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Fraction Operations</div>
        <div class="example-content">
          3/4 + 2/5 → LCD = 20<br>
          = 15/20 + 8/20 = <strong>23/20</strong><br><br>
          7/8 − 1/4 → convert: 1/4 = 2/8<br>
          = 7/8 − 2/8 = <strong>5/8</strong>
        </div>
      </div>
    `
  },
  wordprobs: {
    title: "Word Problems & Applications",
    subject: "Numerical Ability",
    icon: "🧮",
    color: "#E0F2FE",
    accent: "#0284C7",
    duration: "15 min",
    quizKey: "wordprobs",
    content: `
      <div class="chip" style="background:#E0F2FE;color:#0284C7;border-color:#38BDF8;margin-bottom:16px;">🔢 Numerical Ability</div>
      <div class="lesson-hero">Word Problems & Applications</div>
      <div class="lesson-body">
        Word problems apply math to real-life situations. The key is translating words into equations. Common types in the CSE include: ratio & proportion, distance-rate-time, work problems, age problems, and percentage problems.
        <span class="highlight">💡 Tip: Underline key numbers and keywords (total, per, ratio, increased by, discount) before solving.</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ Key Formulas</div>
        <div class="key-point"><strong>Distance:</strong> D = Speed × Time</div>
        <div class="key-point"><strong>Simple Interest:</strong> I = P × R × T</div>
        <div class="key-point"><strong>Work Problems:</strong> Total Work = Rate × Time (combine rates for multiple workers)</div>
        <div class="key-point"><strong>Ratio:</strong> For ratio a:b with total T → each part = T ÷ (a+b)</div>
        <div class="key-point"><strong>Percentage increase:</strong> New = Original × (1 + rate%). To reverse: Original = New ÷ (1 + rate%)</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Work Problem Example</div>
        <div class="example-content">
          5 workers finish in 12 days. How many days for 3 workers?<br><br>
          Total work = 5 × 12 = 60 worker-days<br>
          Days for 3 workers = 60 ÷ 3 = <strong>20 days</strong><br><br>
          <em>More workers = fewer days (inverse proportion)</em>
        </div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Ratio Problem Example</div>
        <div class="example-content">
          Two numbers in ratio 3:5. Their sum is 160.<br>
          Total parts = 3 + 5 = 8<br>
          Each part = 160 ÷ 8 = 20<br>
          Larger number (5 parts) = 5 × 20 = <strong>100</strong>
        </div>
      </div>
    `
  },
  wordassoc: {
    title: "Word Association & Analogies",
    subject: "Analytical Ability",
    icon: "🔗",
    color: "#FEF9C3",
    accent: "#CA8A04",
    duration: "7 min",
    quizKey: "wordassoc",
    content: `
      <div class="chip" style="background:#FEF9C3;color:#CA8A04;border-color:#FACC15;margin-bottom:16px;">🧩 Analytical Ability</div>
      <div class="lesson-hero">Word Association & Analogies</div>
      <div class="lesson-body">
        Analogies test your ability to identify relationships between pairs of words. The format is: "A is to B as C is to ?" — you must find what completes the second pair using the same relationship.
        <span class="highlight">💡 Strategy: State the relationship clearly — "A is used to measure B." Then apply the same logic to the second pair.</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ Common Relationship Types</div>
        <div class="key-point"><strong>Tool : User</strong> — Stethoscope : Doctor :: Gavel : Judge</div>
        <div class="key-point"><strong>Part : Whole</strong> — Chapter : Book :: Scene : Play</div>
        <div class="key-point"><strong>Worker : Workplace</strong> — Surgeon : Hospital :: Teacher : School</div>
        <div class="key-point"><strong>Problem : Solution</strong> — Thirst : Water :: Hunger : Food</div>
        <div class="key-point"><strong>Raw Material : Product</strong> — Flour : Bread :: Clay : Sculpture</div>
        <div class="key-point"><strong>Animal : Group Name</strong> — Fish : School :: Wolves : Pack</div>
        <div class="key-point"><strong>Creator : Creation</strong> — Composer : Symphony :: Author : Novel</div>
        <div class="key-point"><strong>Shape : Sides</strong> — Triangle : 3 :: Pentagon : 5</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 How to Solve Analogies</div>
        <div class="example-content">
          STETHOSCOPE : DOCTOR :: Gavel : ?<br><br>
          Step 1: State the relationship:<br>
          "A stethoscope is the tool used by a doctor."<br><br>
          Step 2: Apply to second pair:<br>
          "A gavel is the tool used by a ___."<br><br>
          Answer: <strong>Judge</strong> ✓
        </div>
      </div>
    `
  },
  logic: {
    title: "Logic & Critical Reasoning",
    subject: "Analytical Ability",
    icon: "🧠",
    color: "#EDE9FE",
    accent: "#7C3AED",
    duration: "8 min",
    quizKey: "logic",
    content: `
      <div class="chip" style="background:#EDE9FE;color:#7C3AED;border-color:#8B5CF6;margin-bottom:16px;">🧩 Analytical Ability</div>
      <div class="lesson-hero">Logic & Critical Reasoning</div>
      <div class="lesson-body">
        Logic questions test syllogisms, conditional statements, and ordering problems. You must determine which conclusions NECESSARILY follow from given premises.
        <span class="highlight">💡 Key Rule: A conclusion must be TRUE based ONLY on the given statements. Don't add outside knowledge!</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ Core Logic Rules</div>
        <div class="key-point"><strong>Syllogism:</strong> If All A→B and All B→C, then All A→C.</div>
        <div class="key-point"><strong>Contrapositive:</strong> "If P then Q" = "If not Q, then not P" (logically equivalent)</div>
        <div class="key-point"><strong>Negation:</strong> Opposite of "All A are B" is "Some A are NOT B"</div>
        <div class="key-point"><strong>Transitive:</strong> If A>B and B>C, then A>C</div>
        <div class="key-point"><strong>Valid vs Sound:</strong> Valid = conclusion follows from premises. Sound = valid + premises are true.</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Conditional Statements</div>
        <div class="example-content">
          Original: "If you study, you will pass."<br><br>
          ✓ <strong>Contrapositive (equivalent):</strong> "If you don’t pass, you didn't study."<br>
          ✗ Converse (NOT equivalent): "If you pass, you studied."<br>
          ✗ Inverse (NOT equivalent): "If you don’t study, you won't pass."<br><br>
          <em>Only the contrapositive is logically equivalent!</em>
        </div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Syllogism Example</div>
        <div class="example-content">
          Premise 1: All mangoes are fruits.<br>
          Premise 2: All fruits are nutritious.<br>
          Conclusion: <strong>All mangoes are nutritious.</strong> ✓<br><br>
          ✗ "All nutritious things are mangoes" — INVALID! (not stated)
        </div>
      </div>
    `
  },
  dataint: {
    title: "Data Interpretation",
    subject: "Analytical Ability",
    icon: "📊",
    color: "#FFE4E6",
    accent: "#DC2626",
    duration: "10 min",
    quizKey: "geninfo",
    content: `
      <div class="chip" style="background:#FFE4E6;color:#DC2626;border-color:#F87171;margin-bottom:16px;">🧩 Analytical Ability</div>
      <div class="lesson-hero">Data Interpretation</div>
      <div class="lesson-body">
        Data interpretation questions present information in charts, tables, bar graphs, pie charts, or line graphs. You must read the data carefully and perform basic calculations to answer questions.
        <span class="highlight">💡 Tip: Read axis labels, legends, and titles FIRST. Never assume — only use what's shown.</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">✅ Chart Types & What to Look For</div>
        <div class="key-point"><strong>Bar Chart:</strong> Compare values. Find highest, lowest, difference, total, average.</div>
        <div class="key-point"><strong>Pie Chart:</strong> Shows percentages of a whole. All slices must total 100%.</div>
        <div class="key-point"><strong>Line Graph:</strong> Shows trends over time. Look for increases, decreases, and dips.</div>
        <div class="key-point"><strong>Table:</strong> Read rows and columns carefully. Average = sum ÷ count. Median = middle value when sorted.</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Common Calculations</div>
        <div class="example-content">
          <strong>Average:</strong> Sum all values ÷ number of values<br>
          <strong>% of total:</strong> (Part ÷ Total) × 100<br>
          <strong>% increase:</strong> (New − Old) ÷ Old × 100<br>
          <strong>Median:</strong> Sort values, take the middle one<br><br>
          Example: Sales = 50,60,45,75,70<br>
          Average = (50+60+45+75+70) ÷ 5 = 300 ÷ 5 = <strong>60</strong>
        </div>
      </div>
    `
  },
  environment: {
    title: "Environment & Human Rights",
    subject: "General Information",
    icon: "🌿",
    color: "#DCFCE7",
    accent: "#16A34A",
    duration: "7 min",
    quizKey: "geninfo",
    content: `
      <div class="chip" style="background:#DCFCE7;color:#16A34A;border-color:#22C55E;margin-bottom:16px;">🏛️ General Information</div>
      <div class="lesson-hero">Environment & Human Rights</div>
      <div class="lesson-body">
        This topic covers key Philippine environmental laws and international human rights instruments. Know the law numbers AND what each one covers!
        <span class="highlight">💡 Memory trick: Air=8749, Water=9275, Waste=9003, Torture=9745. Higher number = newer law!</span>
      </div>
      <div class="key-points">
        <div class="key-points-label">🌿 Key Environmental Laws</div>
        <div class="key-point"><strong>R.A. 8749</strong> – Philippine Clean Air Act (1999)</div>
        <div class="key-point"><strong>R.A. 9003</strong> – Ecological Solid Waste Management Act (2000)</div>
        <div class="key-point"><strong>R.A. 9275</strong> – Philippine Clean Water Act (2004)</div>
        <div class="key-point"><strong>R.A. 8550</strong> – Philippine Fisheries Code (1998)</div>
      </div>
      <div class="key-points">
        <div class="key-points-label">⚖️ Human Rights Laws & Instruments</div>
        <div class="key-point"><strong>UDHR</strong> – Universal Declaration of Human Rights (December 10, 1948)</div>
        <div class="key-point"><strong>R.A. 9745</strong> – Anti-Torture Act of 2009</div>
        <div class="key-point"><strong>Article XIII, 1987 Constitution</strong> – Creates the Commission on Human Rights (CHR)</div>
        <div class="key-point"><strong>E.O. 3 (2001)</strong> – Government peace negotiation framework</div>
        <div class="key-point"><strong>Paris Agreement (2017)</strong> – Philippines ratified; limits global warming below 2°C</div>
      </div>
      <div class="example-box">
        <div class="example-label">📌 Right to a Balanced Ecology</div>
        <div class="example-content">
          Section 16, Article II, 1987 Constitution:<br>
          "The State shall protect and advance the right of the people to a <strong>balanced and healthful ecology</strong> in accord with the rhythm and harmony of nature."<br><br>
          This means <strong>both</strong> the State AND citizens share the duty to protect the environment.
        </div>
      </div>
    `
  }
};

// Sample quiz questions per topic
// ============================================================
// SUPABASE CONFIGURATION — replace with your project credentials
// ============================================================
const allLessons = [
  { key: 'grammar', title: 'Grammar & Correct Usage', icon: '📝', bg: '#E0F2FE', subject: 'verbal', items: 20, time: '~8 min' },
  { key: 'vocabulary', title: 'Vocabulary & Word Meaning', icon: '💬', bg: '#DCFCE7', subject: 'verbal', items: 20, time: '~10 min' },
  { key: 'paragraph', title: 'Paragraph Organization', icon: '📄', bg: '#FEF9C3', subject: 'verbal', items: 10, time: '~6 min' },
  { key: 'reading', title: 'Reading Comprehension', icon: '📖', bg: '#FFE4E6', subject: 'verbal', items: 20, time: '~15 min' },
  { key: 'basicops', title: 'Basic Operations & Fractions', icon: '➕', bg: '#DCFCE7', subject: 'numerical', items: 25, time: '~12 min' },
  { key: 'wordprobs', title: 'Word Problems & Applications', icon: '🧮', bg: '#E0F2FE', subject: 'numerical', items: 25, time: '~15 min' },
  { key: 'wordassoc', title: 'Word Association & Analogies', icon: '🔗', bg: '#FEF9C3', subject: 'analytical', items: 10, time: '~7 min' },
  { key: 'logic', title: 'Logic & Critical Reasoning', icon: '🧠', bg: '#EDE9FE', subject: 'analytical', items: 10, time: '~8 min' },
  { key: 'dataint', title: 'Data Interpretation', icon: '📊', bg: '#FFE4E6', subject: 'analytical', items: 10, time: '~10 min' },
  { key: 'constitution', title: 'Philippine Constitution 1987', icon: '🏛️', bg: '#FFE4E6', subject: 'geninfo', items: 5, time: '~6 min' },
  { key: 'ra6713', title: 'R.A. 6713 – Code of Conduct', icon: '⚖️', bg: '#EDE9FE', subject: 'geninfo', items: 5, time: '~5 min' },
  { key: 'environment', title: 'Environment & Human Rights', icon: '🌿', bg: '#DCFCE7', subject: 'geninfo', items: 10, time: '~7 min' },
];

const subjectSections = [
  { id: 'verbal', label: '📝 Verbal Ability' },
  { id: 'numerical', label: '🔢 Numerical Ability' },
  { id: 'analytical', label: '🧩 Analytical Ability' },
  { id: 'geninfo', label: '🏛️ General Information' },
];

const QUIZ_TOPICS = [
  {
    section: '📝 Verbal Ability', sectionKey: 'verbal',
    topics: [
      { key: 'grammar', title: 'Grammar & Correct Usage', icon: '📝', color: 'var(--blue-lt)', accent: 'var(--blue-dk)' },
      { key: 'vocabulary', title: 'Vocabulary & Word Meaning', icon: '💬', color: 'var(--blue-lt)', accent: 'var(--blue-dk)' },
      { key: 'reading', title: 'Reading Comprehension', icon: '📖', color: 'var(--blue-lt)', accent: 'var(--blue-dk)' },
    ]
  },
  {
    section: '🔢 Numerical Ability', sectionKey: 'numerical',
    topics: [
      { key: 'basicops', title: 'Basic Operations & Fractions', icon: '➕', color: 'var(--green-lt)', accent: 'var(--green-dk)' },
      { key: 'wordprobs', title: 'Word Problems', icon: '🧮', color: 'var(--green-lt)', accent: 'var(--green-dk)' },
    ]
  },
  {
    section: '🧩 Analytical Ability', sectionKey: 'analytical',
    topics: [
      { key: 'logic', title: 'Logic & Critical Reasoning', icon: '🧠', color: 'var(--yellow-lt)', accent: 'var(--yellow-dk)' },
      { key: 'wordassoc', title: 'Word Association & Analogies', icon: '🔗', color: 'var(--yellow-lt)', accent: 'var(--yellow-dk)' },
    ]
  },
  {
    section: '📋 Clerical Ability', sectionKey: 'clerical',
    topics: [
      { key: 'clerical', title: 'Clerical Operations', icon: '📋', color: 'var(--purple-lt)', accent: 'var(--purple-dk)' },
    ]
  },
  {
    section: '🏛️ General Information', sectionKey: 'geninfo',
    topics: [
      { key: 'geninfo', title: 'Philippine Laws & Constitution', icon: '🏛️', color: 'var(--orange-lt)', accent: 'var(--orange-dk)' },
    ]
  },
];

// ── Render quiz cards with live scores ────────────────────────

const TOPIC_SUBJECT_MAP = {
  grammar: 'Verbal Ability', vocabulary: 'Verbal Ability', reading: 'Verbal Ability',
  basicops: 'Numerical Ability', wordprobs: 'Numerical Ability',
  logic: 'Analytical Ability', wordassoc: 'Analytical Ability',
  clerical: 'Clerical Ability', geninfo: 'General Information'
};

// Maps app topic keys → exact "topic" column values in the Supabase questions table.
// Add more entries here as you update each subject in the DB.
const TOPIC_DB_VALUES_MAP = {
  grammar:    ['Error Recognition', 'Idiomatic Expressions', 'Sentence Completion', 'Sentence Completion (Filipino)'],
  vocabulary: ['Vocabulary - Word Meaning'],
  reading:    ['Reading Comprehension', 'Reading Comprehension (Filipino)', 'Paragraph Organization', 'Paragraph Organization (Filipino)'],
  // Numerical, Analytical, Clerical, GenInfo — add DB topic values here once set in the DB
  // basicops:  ['...'],
  // wordprobs: ['...'],
  // logic:     ['...'],
  // wordassoc: ['...'],
  // clerical:  ['...'],
  // geninfo:   ['...'],
};

const LESSON_QUIZ_MAP = {
  grammar: 'grammar', vocabulary: 'vocabulary', paragraph: 'vocabulary',
  reading: 'reading', basicops: 'basicops', wordprobs: 'wordprobs',
  wordassoc: 'wordassoc', logic: 'logic', dataint: 'logic',
  constitution: 'geninfo', ra6713: 'geninfo', environment: 'geninfo'
};

// Daily subject rotation: Sun=0 … Sat=6
const DAILY_ROTATION = ['verbal', 'numerical', 'analytical', 'geninfo', 'clerical', 'verbal', 'numerical'];
const DAILY_SUBJECT_LABEL = {
  verbal: 'Verbal Ability', numerical: 'Numerical Ability', analytical: 'Analytical Ability',
  geninfo: 'General Information', clerical: 'Clerical Ability'
};

// Mini CSE: ordered per official CSE exam
// Order: Verbal → Numerical → General Info → Analytical(Pro)/Clerical(SubPro)
const MINI_CSE_ORDER_PRO = [
  { subject: 'Verbal Ability', count: 12 },
  { subject: 'Numerical Ability', count: 12 },
  { subject: 'General Information', count: 6 },
  { subject: 'Analytical Ability', count: 15 },
];
const MINI_CSE_ORDER_SUBPRO = [
  { subject: 'Verbal Ability', count: 12 },
  { subject: 'Numerical Ability', count: 12 },
  { subject: 'General Information', count: 6 },
  { subject: 'Clerical Ability', count: 15 },
];

// Mock Test configurations per exam type
const MOCK_TEST_CONFIG = {
  professional: { items: 150, timeMinutes: 190, label: 'Professional' },
  subpro: { items: 145, timeMinutes: 160, label: 'SubProfessional' }
};

// Mock Test subject distribution — ordered per official CSE exam
const MOCK_ORDER_PRO = [
  { subject: 'Verbal Ability', count: 40 },
  { subject: 'Numerical Ability', count: 40 },
  { subject: 'General Information', count: 20 },
  { subject: 'Analytical Ability', count: 50 },
];
const MOCK_ORDER_SUBPRO = [
  { subject: 'Verbal Ability', count: 40 },
  { subject: 'Numerical Ability', count: 30 },
  { subject: 'General Information', count: 25 },
  { subject: 'Clerical Ability', count: 50 },
];

const SUBJECT_META = [
  { key: 'verbal', label: 'Verbal Ability', icon: '📝', color: 'var(--blue-lt)', text: 'var(--blue-dk)', topics: ['grammar', 'vocabulary', 'reading'] },
  { key: 'numerical', label: 'Numerical Ability', icon: '🔢', color: 'var(--green-lt)', text: 'var(--green-dk)', topics: ['basicops', 'wordprobs'] },
  { key: 'analytical', label: 'Analytical Ability', icon: '🧩', color: 'var(--yellow-lt)', text: 'var(--yellow-dk)', topics: ['logic', 'wordassoc'] },
  { key: 'clerical', label: 'Clerical Ability', icon: '📋', color: 'var(--purple-lt)', text: 'var(--purple-dk)', topics: ['clerical'], subproOnly: true },
  { key: 'geninfo', label: 'General Information', icon: '🏛️', color: 'var(--orange-lt)', text: 'var(--orange-dk)', topics: ['geninfo'] },
];

// Returns subjects relevant to the current exam type
// Clerical Ability is Sub-Professional only
function getActiveSubjectMeta() {
  const isPro = getUserExamType() === 'professional';
  return SUBJECT_META.filter(s => !(s.subproOnly && isPro));
}

// ═══════════════════════════════════════════════════════════════
// SUPABASE + HELPERS
// ═══════════════════════════════════════════════════════════════
const SUPABASE_URL = 'https://jlicpqvlmwjhsvqxiktn.supabase.co';   // ← your Supabase project URL
const SUPABASE_ANON = 'sb_publishable_itlfyz8mYoMnMDtXUJVyUg_gDFhTlpl';                       // ← your Supabase anon/public key

const _sb = (typeof supabase !== 'undefined')
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON)
  : null;

// ── Subject → required question counts for the 150-item Mock Exam ──

// ── Map a Supabase row to the internal question format ──
function mapRow(row) {
  // Build choices — include choice_e only if it has a value
  const choices = [row.choice_a, row.choice_b, row.choice_c, row.choice_d];
  if (row.choice_e && row.choice_e.trim() !== '') choices.push(row.choice_e);

  // correct_answer is stored as 'A', 'B', 'C', 'D', or 'E'
  const answerMap = { A: 0, B: 1, C: 2, D: 3, E: 4 };
  const ansIdx = answerMap[String(row.correct_answer || 'A').toUpperCase().trim()] ?? 0;

  return {
    id: row.id,
    subject: row.subject || '',
    topic: row.topic || '',
    question: row.question || '',
    choices: choices,
    correct: ansIdx,
    explanation: row.explanation || '',
  };
}

// ── Fisher-Yates shuffle ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Shuffle choices for a question & remap correct index ──
function shuffleChoices(q) {
  const indices = q.choices.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const newChoices = indices.map(i => q.choices[i]);
  const newCorrect = indices.indexOf(q.correct);
  q.choices = newChoices;
  q.correct = newCorrect;
  return q;
}

// ── Group dependent questions (passages/tables) and shuffle groups ──
function groupAndShuffle(questions) {
  // Sort by ID first to ensure consecutive questions are adjacent
  const sorted = [...questions].sort((a, b) => (a.id || 0) - (b.id || 0));
  const groups = [];
  const used = new Set();

  const passageIndicators = [
    'refer to the', 'based on the', 'following passage', 'following table',
    'following paragraph', 'read the', 'given the', 'according to the passage',
    'the passage', 'the table above', 'the table below', 'the chart',
    'the graph', 'the figure', 'the data', 'paragraph above', 'paragraph below',
    'the following text', 'the text above', 'read the following', 'items'
  ];

  for (let i = 0; i < sorted.length; i++) {
    if (used.has(i)) continue;
    const q = sorted[i];
    const qText = (q.question || '').trim();
    const lowerQ = qText.toLowerCase();
    const group = [i];
    used.add(i);

    const isPassageBased = passageIndicators.some(p => lowerQ.includes(p));
    // Also detect long questions that might be passage stems
    const isLongStem = qText.length > 150;

    if (isPassageBased || isLongStem) {
      // Build prefix for matching: use first 50 chars or first sentence
      const prefix = qText.substring(0, Math.min(50, qText.length));

      for (let j = i + 1; j < sorted.length; j++) {
        if (used.has(j)) continue;
        const other = sorted[j];
        const otherText = (other.question || '').trim();
        const otherLower = otherText.toLowerCase();
        const idDiff = Math.abs((other.id || 0) - (q.id || 0));

        // Group if: same prefix, OR consecutive IDs (within 5) and both are passage-based
        const samePrefix = otherText.startsWith(prefix);
        const bothPassage = isPassageBased && passageIndicators.some(p => otherLower.includes(p));
        const closeIds = idDiff <= 5;

        if (samePrefix || (closeIds && bothPassage)) {
          group.push(j);
          used.add(j);
        }
      }
    }
    groups.push(group);
  }

  // Shuffle groups, keep questions within a group in their original order
  const shuffledGroups = shuffle(groups);
  const result = [];
  for (const group of shuffledGroups) {
    for (const idx of group) {
      result.push(sorted[idx]);
    }
  }
  return result;
}

// ── Pick n random items, but keep groups intact ──
function pickRandomGrouped(questions, n) {
  // First group the questions
  const sorted = [...questions].sort((a, b) => (a.id || 0) - (b.id || 0));
  const passageIndicators = [
    'refer to the', 'based on the', 'following passage', 'following table',
    'following paragraph', 'read the', 'given the', 'according to the passage',
    'the passage', 'the table above', 'the table below', 'the chart',
    'the graph', 'the figure', 'the data', 'paragraph above', 'paragraph below',
    'the following text', 'the text above', 'read the following', 'items'
  ];
  const groups = [];
  const used = new Set();

  for (let i = 0; i < sorted.length; i++) {
    if (used.has(i)) continue;
    const q = sorted[i];
    const qText = (q.question || '').trim();
    const lowerQ = qText.toLowerCase();
    const group = [sorted[i]];
    used.add(i);

    const isPassageBased = passageIndicators.some(p => lowerQ.includes(p));
    const isLongStem = qText.length > 150;

    if (isPassageBased || isLongStem) {
      const prefix = qText.substring(0, Math.min(50, qText.length));
      for (let j = i + 1; j < sorted.length; j++) {
        if (used.has(j)) continue;
        const other = sorted[j];
        const otherText = (other.question || '').trim();
        const otherLower = otherText.toLowerCase();
        const idDiff = Math.abs((other.id || 0) - (q.id || 0));
        const samePrefix = otherText.startsWith(prefix);
        const bothPassage = isPassageBased && passageIndicators.some(p => otherLower.includes(p));
        if (samePrefix || (idDiff <= 5 && bothPassage)) {
          group.push(sorted[j]);
          used.add(j);
        }
      }
    }
    groups.push(group);
  }

  // Pick random groups until we have at least n items
  const shuffled = shuffle(groups);
  const result = [];
  for (const group of shuffled) {
    if (result.length >= n) break;
    result.push(...group);
  }
  return result;
}

// ── Pick n random items from arr ──
function pickRandom(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

// ── Fetch questions for one subject from Supabase ──
async function fetchBySubject(subject) {
  if (!_sb) throw new Error('Supabase client not initialised — check your URL and key.');
  const examLevel = getExamLevelForDB();
  const { data, error } = await _sb
    .from('questions')
    .select('id,subject,topic,question,choice_a,choice_b,choice_c,choice_d,choice_e,correct_answer,explanation')
    .eq('subject', subject)
    .or(`exam_level.ilike.${examLevel},exam_level.ilike.both,exam_level.is.null`);
  if (error) throw new Error(`Supabase error (${subject}): ${error.message}`);
  return (data || []).map(mapRow);
}

// ── Build the 150-question mock exam dataset ──
// Questions are grouped by subject IN FIXED ORDER:
//   Q1–40   Verbal Ability
//   Q41–80  Numerical Ability
//   Q81–110 Analytical Ability
//   Q111–130 Clerical Ability
//   Q131–150 General Information

// ── Fetch questions for a short topic quiz ──
//    topicMap maps quiz keys → Supabase subject names


// ── Stub: quizQuestions kept for fallback; actual data is Supabase ──
// quizQuestions — local fallback data removed.
// All questions are now fetched live from Supabase.
// The startTopicQuiz() function handles fallback gracefully.
async function fetchTopicQuestions(topic, count = 10) {
  const subject = TOPIC_SUBJECT_MAP[topic] || 'Verbal Ability';
  const examLevel = getExamLevelForDB();
  const dbTopics = TOPIC_DB_VALUES_MAP[topic];

  // If DB topic values are defined, query directly by topic (most precise)
  if (dbTopics?.length && _sb) {
    try {
      const { data, error } = await _sb
        .from('questions')
        .select('id,subject,topic,question,choice_a,choice_b,choice_c,choice_d,choice_e,correct_answer,explanation')
        .eq('subject', subject)
        .or(`exam_level.ilike.${examLevel},exam_level.ilike.both,exam_level.is.null`)
        .in('topic', dbTopics);
      if (!error && data?.length) return pickRandom(data.map(mapRow), count);
    } catch (e) { /* fall through to subject-level fetch */ }
  }

  // Fallback: fetch all questions for the subject (exam_level filtered)
  const rows = await fetchBySubject(subject);
  return pickRandom(rows, count);
}

async function buildMiniCSE() {
  const examType = getUserExamType();
  const order = examType === 'professional' ? MINI_CSE_ORDER_PRO : MINI_CSE_ORDER_SUBPRO;
  const all = [];
  for (const { subject, count } of order) {
    const rows = await fetchBySubject(subject);
    const picked = pickRandom(rows, count);
    // Keep each subject's questions in their original ID order
    picked.sort((a, b) => (a.id || 0) - (b.id || 0));
    picked.forEach(q => all.push({ ...q, subject }));
  }
  return all; // Already in correct order
}

async function buildMockTest(examType) {
  const order = examType === 'professional' ? MOCK_ORDER_PRO : MOCK_ORDER_SUBPRO;
  const all = [];
  for (const { subject, count } of order) {
    const rows = await fetchBySubject(subject);
    const picked = pickRandom(rows, count);
    picked.sort((a, b) => (a.id || 0) - (b.id || 0));
    picked.forEach(q => all.push({ ...q, subject }));
  }
  return all; // Already in correct order
}

// ═══════════════════════════════════════════════════════════════
// LOCAL STORAGE
// ═══════════════════════════════════════════════════════════════
function getStats() {
  try {
    return JSON.parse(localStorage.getItem('cse_stats') || 'null') || {
      totalAnswered: 0,
      totalCorrect: 0,
      studiedDates: [],   // ISO date strings "2026-03-01"
      lessonProgress: {}  // { grammar: 0-100 }
    };
  } catch (e) {
    return { totalAnswered: 0, totalCorrect: 0, studiedDates: [], lessonProgress: {} };
  }
}

function saveStats(stats) {
  try { localStorage.setItem('cse_stats', JSON.stringify(stats)); } catch (e) { }
}

// ── Per-topic quiz score storage (localStorage key: cse_quiz_scores) ──
// Shape: { [topic]: { correct, total, pct, attempts, lastAt } }
function getQuizScores() {
  try { return JSON.parse(localStorage.getItem('cse_quiz_scores') || '{}'); }
  catch (e) { return {}; }
}
function saveQuizScores(scores) {
  try { localStorage.setItem('cse_quiz_scores', JSON.stringify(scores)); } catch (e) { }
}

// ── Topic icon helper ──
function getTopicIcon(topicName, subjectKey) {
  const n = topicName.toLowerCase();
  if (n.includes('error') || n.includes('grammar') || n.includes('sentence completion')) return '📝';
  if (n.includes('vocab') || n.includes('word meaning') || n.includes('idiomatic')) return '💬';
  if (n.includes('reading') || n.includes('comprehension')) return '📖';
  if (n.includes('paragraph') || n.includes('organization')) return '📄';
  if (n.includes('basic') || n.includes('fraction') || n.includes('arithmetic')) return '➕';
  if (n.includes('word problem') || n.includes('application')) return '🧮';
  if (n.includes('logic') || n.includes('reasoning') || n.includes('critical')) return '🧠';
  if (n.includes('analogy') || n.includes('association')) return '🔗';
  if (n.includes('data') || n.includes('interpretation')) return '📊';
  if (n.includes('constitution') || n.includes('philippine')) return '🏛️';
  if (n.includes('conduct') || n.includes('6713')) return '⚖️';
  if (n.includes('environment') || n.includes('rights')) return '🌿';
  if (n.includes('clerical') || n.includes('filing') || n.includes('coding') || n.includes('checking')) return '🗂️';
  const defaults = { verbal: '📝', numerical: '🔢', analytical: '🧩', geninfo: '🏛️', clerical: '🗂️' };
  return defaults[subjectKey] || '📚';
}

// Load distinct topics per subject from the DB (respects exam_level)
async function loadAllSubjectTopics() {
  if (!_sb) return;
  try {
    const examLevel = getExamLevelForDB();
    const { data, error } = await _sb
      .from('questions')
      .select('subject, topic')
      .or(`exam_level.ilike.${examLevel},exam_level.ilike.both,exam_level.is.null`)
      .not('topic', 'is', null)
      .neq('topic', '');
    if (error || !data?.length) return;
    const map = {};
    data.forEach(row => {
      if (!row.subject || !row.topic) return;
      if (!map[row.subject]) map[row.subject] = new Set();
      map[row.subject].add(row.topic);
    });
    Object.keys(map).forEach(s => { _subjectTopics[s] = [...map[s]].sort(); });
  } catch (e) { console.warn('loadAllSubjectTopics error:', e); }
}

// Start a quiz for a specific DB topic value
async function startQuizForDBTopic(dbTopic, subjectLabel) {
  showLoading('Loading questions…');
  try {
    const examLevel = getExamLevelForDB();
    const { data, error } = await _sb
      .from('questions')
      .select('id,subject,topic,question,choice_a,choice_b,choice_c,choice_d,choice_e,correct_answer,explanation')
      .eq('subject', subjectLabel)
      .or(`exam_level.ilike.${examLevel},exam_level.ilike.both`)
      .eq('topic', dbTopic);
    hideLoading();
    if (error || !data?.length) { showToast('No questions found for this topic'); return; }
    beginQuiz(pickRandom(data.map(mapRow), Math.min(5, data.length)), dbTopic, dbTopic);
  } catch (e) { hideLoading(); showToast('Could not load questions'); }
}

// ── Exam type helpers ──
function getUserExamType() {
  // Check user metadata first, then localStorage fallback
  if (currentUser && currentUser.user_metadata && currentUser.user_metadata.exam_type) {
    return currentUser.user_metadata.exam_type;
  }
  return localStorage.getItem('cse_exam_type') || 'subpro';
}
// Maps internal exam type key → database exam_level value
// DB stores "Sub-Professional" and "Professional" (with hyphen and capital letters)
function getExamLevelForDB() {
  return getUserExamType() === 'professional' ? 'Professional' : 'Sub-Professional';
}

function setUserExamType(type) {
  localStorage.setItem('cse_exam_type', type);
  // Update in-memory user object immediately so getUserExamType() reflects the change
  if (currentUser) {
    if (!currentUser.user_metadata) currentUser.user_metadata = {};
    currentUser.user_metadata.exam_type = type;
  }
  // Also persist to Supabase metadata (async, best-effort)
  if (_sb) {
    _sb.auth.updateUser({ data: { exam_type: type } }).catch(() => { });
  }
}

// Save result locally AND to Supabase if logged in

// ── Load best scores from Supabase and merge with localStorage ──
function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('cse_bookmarks') || '{}'); }
  catch (e) { return {}; }
}
function saveBookmarks(b) {
  try { localStorage.setItem('cse_bookmarks', JSON.stringify(b)); } catch (e) { }
}

// ── Quiz history cache (from Supabase) ──
let _quizHistoryCache = [];
let _attemptHistoryCache = [];
let _topicAttemptCounts = {}; // { dbTopicValue: numberOfDistinctAttemptsThatIncludedThatTopic }
let _subjectTopics = {}; // { 'Verbal Ability': ['Error Recognition', 'Vocabulary - Word Meaning', ...] }
let _answeredQuestionIds = new Set(); // all unique question IDs the user has ever answered
let _answeredQuestionsCache = []; // full question rows for Cards tab (exam-level filtered)
let _historySortField = 'date';
let _historySortAsc = false;
let _historyFilter = 'all'; // 'all' | 'quiz' | 'mock' | 'mini'
let _mockHistoryFilter = 'all'; // 'all' | 'mock' | 'mini'

async function fetchQuizHistory() {
  if (!_sb) return [];
  try {
    const { data: { session } } = await _sb.auth.getSession();
    if (!session?.user) return [];
    const { data, error } = await _sb
      .from('quiz_scores')
      .select('id,topic,correct,total,score_pct,attempted_at')
      .eq('user_id', session.user.id)
      .order('attempted_at', { ascending: false })
      .limit(100);
    if (error) { console.warn('History fetch error:', error.message); return []; }
    return data || [];
  } catch (e) { return []; }
}

// ═══════════════════════════════════════════════════════════════
// COMPUTED

// ═══════════════════════════════════════════════════════════════
// STREAK HELPERS
// ═══════════════════════════════════════════════════════════════
const PH_TZ = 'Asia/Manila';
function getLocalDateStr(date) {
  return (date || new Date()).toLocaleDateString('en-CA', { timeZone: PH_TZ });
}

function computeStreak(studiedDates = []) {
  if (!studiedDates.length) return 0;
  const now = Date.now();
  const today = new Date(now).toLocaleDateString('en-CA', { timeZone: PH_TZ });
  const yest = new Date(now - 86400000).toLocaleDateString('en-CA', { timeZone: PH_TZ });
  // Filter out future dates (can happen when a quiz is done just past midnight PH but
  // the home was rendered slightly earlier) and deduplicate, then sort descending.
  const unique = [...new Set(studiedDates.map(d => d.slice(0, 10)))]
    .filter(d => d <= today)
    .sort()
    .reverse();
  if (!unique.length) return 0;
  if (unique[0] !== today && unique[0] !== yest) return 0;
  let streak = 1;
  for (let i = 1; i < unique.length; i++) {
    const diff = (new Date(unique[i - 1]) - new Date(unique[i])) / 86400000;
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

function buildWeekDots(studiedDates = []) {
  const studied = new Set(studiedDates.map(d => d.slice(0, 10)));
  const now = Date.now();
  const todayStr = new Date(now).toLocaleDateString('en-CA', { timeZone: PH_TZ });
  const wdFmt = new Intl.DateTimeFormat('en-US', { timeZone: PH_TZ, weekday: 'short' });
  let html = '';
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now - i * 86400000);
    const iso = d.toLocaleDateString('en-CA', { timeZone: PH_TZ });
    const done = studied.has(iso);
    const isToday = iso === todayStr;
    const dayLabel = wdFmt.format(d).slice(0, 2);
    html += `<div class="week-dot-col">
      <div class="week-dot-label">${dayLabel}</div>
      <div class="week-dot ${done ? 'done' : ''} ${isToday ? 'today' : ''}"></div>
    </div>`;
  }
  return html;
}

// ═══════════════════════════════════════════════════════════════
// PREPAREDNESS
// ═══════════════════════════════════════════════════════════════
function getTopicPreparedness(topicKeyOrDBValue) {
  // Direct DB topic value lookup
  if (_topicAttemptCounts[topicKeyOrDBValue] !== undefined) {
    return Math.min(100, Math.round((_topicAttemptCounts[topicKeyOrDBValue] / 10) * 100));
  }
  // App key: aggregate across all mapped DB topic values
  const dbValues = TOPIC_DB_VALUES_MAP[topicKeyOrDBValue];
  if (dbValues?.length) {
    const total = dbValues.reduce((s, v) => s + (_topicAttemptCounts[v] || 0), 0);
    return Math.min(100, Math.round((total / (10 * dbValues.length)) * 100));
  }
  return 0;
}

function getSubjectPreparedness(subjectKey) {
  const meta = SUBJECT_META.find(s => s.key === subjectKey);
  if (!meta) return 0;
  const dbTopics = _subjectTopics[meta.label];
  if (dbTopics?.length) {
    const pcts = dbTopics.map(t => {
      const c = _topicAttemptCounts[t] || 0;
      return Math.min(100, Math.round((c / 10) * 100));
    });
    return Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length);
  }
  const pcts = meta.topics.map(t => getTopicPreparedness(t));
  return Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length);
}

function getRecommendation() {
  const daySubject = DAILY_ROTATION[new Date().getDay()];
  const todayLessons = allLessons.filter(l => l.subject === daySubject);
  const candidateLessons = todayLessons.length ? todayLessons : allLessons;

  let weakest = null, weakestPct = 101, unstarted = null;
  candidateLessons.forEach(lesson => {
    const qKey = LESSON_QUIZ_MAP[lesson.key];
    const pct = getTopicPreparedness(qKey);
    const dbVals = TOPIC_DB_VALUES_MAP[qKey];
    const hasAttempts = dbVals?.length
      ? dbVals.some(v => (_topicAttemptCounts[v] || 0) > 0)
      : (_topicAttemptCounts[qKey] || 0) > 0;
    if (!hasAttempts) { if (!unstarted) unstarted = lesson; }
    else {
      if (pct < weakestPct) { weakestPct = pct; weakest = { lesson, pct }; }
    }
  });
  if (weakest && weakestPct < 80) return { lesson: weakest.lesson, pct: weakestPct, type: 'weak', daySubject };
  if (unstarted) return { lesson: unstarted, pct: 0, type: 'new', daySubject };
  if (weakest) return { lesson: weakest.lesson, pct: weakestPct, type: 'perfect', daySubject };
  return null;
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════
let currentScreen = 'home';
let _prevScreen = 'home';

function goTo(screen) {
  _prevScreen = currentScreen;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('screen-' + screen);
  if (el) { el.classList.add('active'); currentScreen = screen; }
  const nav = document.getElementById('nav-' + screen);
  if (nav) nav.classList.add('active');
  const sidebarNav = document.getElementById('sidebar-nav-' + screen);
  if (sidebarNav) sidebarNav.classList.add('active');
  const hideNav = ['quiz-q', 'quiz-result', 'attempt-detail'];
  document.getElementById('bottom-nav').style.display = hideNav.includes(screen) ? 'none' : 'flex';
  if (screen === 'home') renderHome();
  if (screen === 'quiz-home') renderQuizHome();
  if (screen === 'cards') renderCardsScreen();
  if (screen === 'mock') renderMockScreen();
  if (screen === 'profile') renderProfile();
  // Reset scroll on the active screen's scroll area
  if (el) {
    const sa = el.querySelector('.scroll-area');
    if (sa) sa.scrollTop = 0;
  }
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════════════════════
// HOME SCREEN
// ═══════════════════════════════════════════════════════════════
function renderHome() {
  const stats = getStats();
  const streak = computeStreak(stats.studiedDates);

  // Greeting — use PH timezone
  const phHour = parseInt(new Date().toLocaleString('en-US', { timeZone: PH_TZ, hour: 'numeric', hour12: false }));
  const greet = phHour < 12 ? 'Good morning' : phHour < 17 ? 'Good afternoon' : 'Good evening';
  const greetEl = document.querySelector('.home-greeting');
  if (greetEl) greetEl.textContent = greet + ',';

  const dateEl = document.getElementById('home-date');
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString('en-PH', { timeZone: PH_TZ, weekday: 'long', month: 'long', day: 'numeric' });

  // Streak count
  const sc = document.getElementById('streak-count');
  if (sc) sc.textContent = streak;

  // Streak message
  const sb = document.getElementById('streak-best');
  if (sb) {
    if (streak === 0) sb.textContent = 'Start your streak today! 💪';
    else if (streak < 3) sb.textContent = 'Great start! Keep going! 🌟';
    else if (streak < 7) sb.textContent = '7-day goal in sight! 🔥';
    else if (streak < 14) sb.textContent = 'On fire! You\'re incredible! 🏆';
    else sb.textContent = streak + ' days strong! Legend! 🎓';
  }

  // Streak badge
  const badge = document.getElementById('streak-badge');
  if (badge) {
    if (streak === 0) badge.textContent = '🌱 Beginner';
    else if (streak < 3) badge.textContent = '📖 Learner';
    else if (streak < 7) badge.textContent = '⚡ Dedicated';
    else if (streak < 14) badge.textContent = '🔥 On Fire';
    else if (streak < 30) badge.textContent = '🏅 Champion';
    else badge.textContent = '🎓 Legend';
  }

  // 7-day dot row
  const weekRow = document.getElementById('streak-week-row');
  if (weekRow) weekRow.innerHTML = buildWeekDots(stats.studiedDates);

  // Recommendation
  const rec = getRecommendation();
  const recTopic = document.getElementById('rec-topic');
  const recWhy = document.getElementById('rec-why');
  const recCard = document.getElementById('rec-card');
  const recLabel = document.getElementById('rec-label');
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daySubject = DAILY_ROTATION[new Date().getDay()];
  const daySubjectLabel = DAILY_SUBJECT_LABEL[daySubject] || 'Mixed';
  if (recLabel) recLabel.textContent = `${dayNames[new Date().getDay()]}'s Focus · ${daySubjectLabel}`;
  if (rec && recTopic) {
    recTopic.textContent = rec.lesson.icon + ' ' + rec.lesson.title;
    if (rec.type === 'new') recWhy.textContent = "You haven't tried this yet — start now! 🚀";
    else if (rec.type === 'weak') recWhy.textContent = `Your best score is ${rec.pct}% — let's push higher! 💪`;
    else recWhy.textContent = 'Keep that perfect score! 🏆';
    if (recCard) recCard.onclick = goToRecommendation;
  } else if (recTopic) {
    recTopic.textContent = "🎉 You've covered everything!";
    recWhy.textContent = 'Amazing — try a Mini CSE now!';
    if (recCard) recCard.onclick = () => goTo('quiz-home');
  }

  renderStudyMap();
  renderQuizHistory();
  // Defer chart render so canvas has layout dimensions
  requestAnimationFrame(renderScoreChart);

  // ── Sidebar population ──────────────────────────────────
  const sidebarStreakCount = document.getElementById('sidebar-streak-count');
  if (sidebarStreakCount) sidebarStreakCount.textContent = streak;

  const sidebarBadge = document.getElementById('sidebar-streak-badge');
  if (sidebarBadge) {
    if (streak === 0) sidebarBadge.textContent = '🌱 Beginner';
    else if (streak < 3) sidebarBadge.textContent = '📖 Learner';
    else if (streak < 7) sidebarBadge.textContent = '⚡ Dedicated';
    else if (streak < 14) sidebarBadge.textContent = '🔥 On Fire';
    else if (streak < 30) sidebarBadge.textContent = '🏅 Champion';
    else sidebarBadge.textContent = '🎓 Legend';
  }

  // Slim header (mobile collapsed state)
  const slimStreak = document.getElementById('header-slim-streak');
  if (slimStreak) slimStreak.textContent = streak;
  const nameEl2 = document.getElementById('home-name');
  const slimName = document.getElementById('header-slim-name');
  if (slimName && nameEl2) slimName.textContent = 'Hi, ' + (nameEl2.textContent.split(' ')[0] || nameEl2.textContent);

  // Home mini-avatar: show photo if available, else show initials
  const homeAv = document.getElementById('home-avatar');
  if (homeAv) {
    if (_userAvatarUrl) {
      applyAvatarToUI(_userAvatarUrl);
    } else if (currentUser) {
      const ini = (currentUser.user_metadata?.full_name || currentUser.email || 'R')
        .split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      homeAv.textContent = ini;
      homeAv.style.backgroundImage = '';
    }
  }
  // Sidebar recommendation
  const sidebarRecTopic = document.getElementById('sidebar-rec-topic');
  const sidebarRecWhy = document.getElementById('sidebar-rec-why');
  const sidebarRecLabel = document.getElementById('sidebar-rec-label');
  const sidebarRecCard = document.getElementById('sidebar-rec-card');
  const rec2 = getRecommendation();
  const dayNames2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daySubject2 = DAILY_ROTATION[new Date().getDay()];
  const daySubjectLabel2 = DAILY_SUBJECT_LABEL[daySubject2] || 'Mixed';
  if (sidebarRecLabel) sidebarRecLabel.textContent = `${dayNames2[new Date().getDay()]}'s Focus · ${daySubjectLabel2}`;
  if (rec2 && sidebarRecTopic) {
    sidebarRecTopic.textContent = rec2.lesson.icon + ' ' + rec2.lesson.title;
    if (rec2.type === 'new') sidebarRecWhy.textContent = "Haven't tried this — start now! 🚀";
    else if (rec2.type === 'weak') sidebarRecWhy.textContent = `Best score: ${rec2.pct}% — push higher! 💪`;
    else sidebarRecWhy.textContent = 'Keep that perfect score! 🏆';
    if (sidebarRecCard) sidebarRecCard.onclick = goToRecommendation;
  } else if (sidebarRecTopic) {
    sidebarRecTopic.textContent = "🎉 Everything covered!";
    sidebarRecWhy.textContent = 'Try a Mock Test now!';
    if (sidebarRecCard) sidebarRecCard.onclick = () => goTo('mock');
  }

  renderSidebarStudyMap();
}

function renderSidebarStudyMap() {
  const body = document.getElementById('sidebar-map-body');
  if (!body) return;
  let html = '';
  getActiveSubjectMeta().forEach(subj => {
    const pct = getSubjectPreparedness(subj.key);
    const color = pct >= 80 ? '#16a34a' : pct >= 50 ? '#0d9488' : pct >= 30 ? '#d97706' : pct > 0 ? '#dc2626' : '#d0d5ef';
    html += `<div class="sidebar-map-row">
      <div class="sidebar-map-row-top">
        <span class="sidebar-map-subj-name">${subj.icon} ${subj.label.split(' ')[0]}</span>
        <span class="sidebar-map-pct" style="color:${color}">${pct}%</span>
      </div>
      <div class="sidebar-map-bar">
        <div class="sidebar-map-bar-fill" style="width:${pct}%;background:${color};"></div>
      </div>
    </div>`;
  });
  body.innerHTML = html;
}

function renderStudyMap() {
  const body = document.getElementById('study-map-body');
  if (!body) return;

  let html = '';
  getActiveSubjectMeta().forEach(subj => {
    const subjPct = getSubjectPreparedness(subj.key);
    const barColor = subjPct >= 80 ? '#16a34a' : subjPct >= 50 ? '#0d9488' : subjPct >= 30 ? '#d97706' : subjPct > 0 ? '#dc2626' : '#e5e7eb';

    // Encouraging label
    let readyLabel, readyColor;
    if (subjPct >= 80) { readyLabel = '✅ Ready!'; readyColor = '#16a34a'; }
    else if (subjPct >= 50) { readyLabel = '📈 Getting there'; readyColor = '#0d9488'; }
    else if (subjPct >= 20) { readyLabel = '🌱 Building up'; readyColor = '#d97706'; }
    else if (subjPct > 0) { readyLabel = '🚀 Just started'; readyColor = '#dc2626'; }
    else { readyLabel = '✨ Ready to begin'; readyColor = '#6b7280'; }

    html += `
    <div class="map-subject-block">
      <div class="map-subject-header" onclick="toggleMapSubject('${subj.key}')">
        <div class="map-subject-left">
          <span class="map-subj-icon">${subj.icon}</span>
          <span class="map-subj-name">${subj.label}</span>
        </div>
        <div class="map-subject-right">
          <span style="font-size:11px;color:${readyColor};font-weight:700;">${readyLabel}</span>
          <span class="map-subj-pct">${subjPct}%</span>
          <span class="map-chevron" id="map-chev-${subj.key}">▾</span>
        </div>
      </div>
      <div class="map-subj-bar">
        <div class="map-subj-bar-fill" style="width:${subjPct}%;background:${barColor};"></div>
      </div>
      <div class="map-topics-list" id="map-topics-${subj.key}">`;

    const dbTopics = _subjectTopics[subj.label] || [];
    const topicsToRender = dbTopics.length
      ? dbTopics.map(dbTopic => ({ dbTopic, label: dbTopic, isDB: true }))
      : subj.topics.map(topicKey => {
          const lesson = allLessons.find(l => LESSON_QUIZ_MAP[l.key] === topicKey && l.subject === subj.key)
            || allLessons.find(l => l.key === topicKey);
          return { dbTopic: null, topicKey, label: lesson?.title || topicKey, icon: lesson?.icon || '📚', isDB: false };
        });

    topicsToRender.forEach(t => {
      const pct = t.isDB
        ? Math.min(100, Math.round(((_topicAttemptCounts[t.dbTopic] || 0) / 10) * 100))
        : getTopicPreparedness(t.topicKey);
      const attempts = t.isDB
        ? (_topicAttemptCounts[t.dbTopic] || 0)
        : (_topicAttemptCounts[t.topicKey] || 0);
      const icon = t.isDB ? getTopicIcon(t.dbTopic, subj.key) : (t.icon || '📚');
      const safeDbTopic = (t.dbTopic || '').replace(/'/g, "\\'");
      const safeSubjLabel = subj.label.replace(/'/g, "\\'");
      const onclickAttr = t.isDB
        ? `startQuizForDBTopic('${safeDbTopic}','${safeSubjLabel}')`
        : `startQuizForTopic('${t.topicKey}')`;

      let statusIcon, statusColor, statusText;
      if (pct >= 80) { statusIcon = '🏆'; statusColor = '#16a34a'; statusText = pct + '% — Excellent!'; }
      else if (pct >= 60) { statusIcon = '✅'; statusColor = '#0d9488'; statusText = pct + '% — Good'; }
      else if (pct >= 40) { statusIcon = '📈'; statusColor = '#d97706'; statusText = pct + '% — Keep going'; }
      else if (pct > 0) { statusIcon = '🌱'; statusColor = '#dc2626'; statusText = pct + '% — Needs practice'; }
      else { statusIcon = '✨'; statusColor = '#6b7280'; statusText = 'Not started yet'; }

      html += `
        <div class="map-topic-row" onclick="${onclickAttr}">
          <div class="map-topic-icon">${icon}</div>
          <div class="map-topic-info">
            <div class="map-topic-name">${t.label}</div>
            <div class="map-topic-meta">${attempts > 0 ? attempts + ' attempt' + (attempts > 1 ? 's' : '') : 'Start your first quiz!'}</div>
          </div>
          <div class="map-topic-right">
            <div style="font-size:11px;color:${statusColor};font-weight:700;text-align:right;">${statusText}</div>
            <div class="map-topic-bar"><div style="width:${pct}%;background:${statusColor};height:100%;border-radius:4px;transition:width 0.5s;"></div></div>
          </div>
          <div style="font-size:16px;margin-left:8px;">${statusIcon}</div>
        </div>`;
    });

    html += `</div></div>`;
  });

  body.innerHTML = html;

  // Auto-expand first subject that has progress, or the first one
  const firstExpanded = SUBJECT_META.find(s => getSubjectPreparedness(s.key) > 0) || SUBJECT_META[0];
  expandMapSubject(firstExpanded.key);
}

let expandedSubjects = new Set();
function toggleMapSubject(key) {
  if (expandedSubjects.has(key)) {
    collapseMapSubject(key);
  } else {
    expandMapSubject(key);
  }
}
function expandMapSubject(key) {
  expandedSubjects.add(key);
  const el = document.getElementById('map-topics-' + key);
  const ch = document.getElementById('map-chev-' + key);
  if (el) el.style.display = 'block';
  if (ch) ch.textContent = '▴';
}
function collapseMapSubject(key) {
  expandedSubjects.delete(key);
  const el = document.getElementById('map-topics-' + key);
  const ch = document.getElementById('map-chev-' + key);
  if (el) el.style.display = 'none';
  if (ch) ch.textContent = '▾';
}

function renderScoreHistory() {
  const el = document.getElementById('score-history-list');
  if (!el) return;
  const scores = getQuizScores();
  const entries = Object.entries(scores)
    .filter(([, s]) => s.attempts > 0)
    .sort(([, a], [, b]) => new Date(b.lastAt || 0) - new Date(a.lastAt || 0))
    .slice(0, 6);

  if (!entries.length) {
    el.innerHTML = '<div class="card" style="text-align:center;color:var(--ink-lt);font-size:13px;padding:24px;">No quizzes yet. Start one below! 👇</div>';
    return;
  }

  el.innerHTML = entries.map(([topic, s]) => {
    const lesson = allLessons.find(l => LESSON_QUIZ_MAP[l.key] === topic);
    const pct = s.bestPct ?? s.pct ?? 0;
    const barColor = pct >= 80 ? 'var(--green)' : pct >= 60 ? 'var(--teal)' : pct >= 40 ? 'var(--yellow)' : 'var(--red)';
    const medal = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : pct >= 40 ? '📈' : '💪';
    return `<div class="score-history-card" onclick="startQuizForTopic('${topic}')">
      <div class="shc-left">
        <div class="shc-icon">${lesson?.icon || '📝'}</div>
        <div>
          <div class="shc-title">${lesson?.title || topic}</div>
          <div class="shc-meta">${s.attempts} attempt${s.attempts > 1 ? 's' : ''} · Best score</div>
        </div>
      </div>
      <div class="shc-right">
        <div class="shc-pct" style="color:${barColor}">${medal} ${pct}%</div>
        <div class="shc-bar"><div style="width:${pct}%;background:${barColor};height:4px;border-radius:4px;"></div></div>
      </div>
    </div>`;
  }).join('');
}

function goToRecommendation() {
  const rec = getRecommendation();
  if (rec) startQuizForTopic(LESSON_QUIZ_MAP[rec.lesson.key]);
  else goTo('quiz-home');
}

// ═══════════════════════════════════════════════════════════════
// DAILY QUIZ SCREEN
// ═══════════════════════════════════════════════════════════════
async function refreshUserData() {
  if (!_sb || !currentUser) { showToast('Please log in first'); return; }
  const btn = document.getElementById('refresh-btn');
  if (btn) { btn.classList.add('spinning'); btn.disabled = true; }
  try {
    _attemptHistoryCache = await loadQuizHistory();
    // Replace studiedDates from DB (source of truth) — never merge stale local dates.
    // Only count attempts that have a real attempted_at (completed quizzes).
    const stats = getStats();
    stats.studiedDates = [...new Set(
      _attemptHistoryCache
        .filter(a => a.attempted_at)
        .map(a => getLocalDateStr(parseAttemptedAt(a.attempted_at)))
    )];
    saveStats(stats);
    await Promise.all([loadAllSubjectTopics(), loadTopicAttemptCounts()]);
    await loadAnsweredQuestions();
    renderHome();
    renderQuizHistory();
    renderProfile();
    renderMockScreen();
    showToast('Data refreshed ✓');
  } catch (e) {
    showToast('Refresh failed');
  } finally {
    if (btn) { btn.classList.remove('spinning'); btn.disabled = false; }
  }
}

function toggleQuizSubject(key) {
  const list = document.getElementById('quiz-topics-' + key);
  const chevron = document.getElementById('quiz-chevron-' + key);
  if (!list) return;
  const isOpen = list.style.display !== 'none';
  list.style.display = isOpen ? 'none' : 'block';
  if (chevron) chevron.textContent = isOpen ? '▶' : '▼';
}

function renderStudyMapFlat() {
  const body = document.getElementById('study-map-body-quiz');
  if (!body) return;
  let html = '';
  getActiveSubjectMeta().forEach(subj => {
    const subjPct = getSubjectPreparedness(subj.key);
    const barColor = subjPct >= 80 ? '#16a34a' : subjPct >= 50 ? '#0d9488' : subjPct >= 30 ? '#d97706' : subjPct > 0 ? '#dc2626' : '#e5e7eb';
    html += `<div class="map-subject-block">
      <div class="map-subject-header" onclick="toggleQuizSubject('${subj.key}')">
        <div class="map-subject-left">
          <span class="map-subj-icon">${subj.icon}</span>
          <span class="map-subj-name">${subj.label}</span>
        </div>
        <div class="map-subject-right">
          <span class="map-subj-pct">${subjPct}%</span>
          <span class="map-chevron" id="quiz-chevron-${subj.key}" style="margin-left:8px;">▶</span>
        </div>
      </div>
      <div class="map-subj-bar"><div class="map-subj-bar-fill" style="width:${subjPct}%;background:${barColor};"></div></div>
      <div class="map-topics-list" id="quiz-topics-${subj.key}" style="display:none;">`;

    const dbTopics = _subjectTopics[subj.label] || [];
    const topicsToRender = dbTopics.length
      ? dbTopics.map(dbTopic => ({ dbTopic, label: dbTopic, isDB: true }))
      : subj.topics.map(topicKey => {
          const lesson = allLessons.find(l => l.key === topicKey);
          return { dbTopic: null, topicKey, label: lesson?.title || topicKey, icon: lesson?.icon || '📚', isDB: false };
        });

    topicsToRender.forEach(t => {
      const pct = t.isDB
        ? Math.min(100, Math.round(((_topicAttemptCounts[t.dbTopic] || 0) / 10) * 100))
        : getTopicPreparedness(t.topicKey);
      const attempts = t.isDB ? (_topicAttemptCounts[t.dbTopic] || 0) : 0;
      const icon = t.isDB ? getTopicIcon(t.dbTopic, subj.key) : (t.icon || '📚');
      const safeDbTopic = (t.dbTopic || '').replace(/'/g, "\\'");
      const safeSubjLabel = subj.label.replace(/'/g, "\\'");
      const onclick = t.isDB
        ? `startQuizForDBTopic('${safeDbTopic}','${safeSubjLabel}')`
        : `startQuizForTopic('${t.topicKey}')`;

      let statusColor, statusText;
      if (pct >= 80) { statusColor = '#16a34a'; statusText = pct + '% — Excellent!'; }
      else if (pct >= 60) { statusColor = '#0d9488'; statusText = pct + '% — Good'; }
      else if (pct >= 40) { statusColor = '#d97706'; statusText = pct + '% — Keep going'; }
      else if (pct > 0) { statusColor = '#dc2626'; statusText = pct + '% — Needs practice'; }
      else { statusColor = '#6b7280'; statusText = 'Not started yet'; }

      html += `<div class="map-topic-row" onclick="${onclick}">
        <div class="map-topic-icon">${icon}</div>
        <div class="map-topic-info">
          <div class="map-topic-name">${t.label}</div>
          <div class="map-topic-meta">${attempts > 0 ? attempts + ' attempt' + (attempts > 1 ? 's' : '') : 'Tap to start quiz'}</div>
        </div>
        <div class="map-topic-right">
          <div style="font-size:11px;color:${statusColor};font-weight:700;text-align:right;">${statusText}</div>
          <div class="map-topic-bar"><div style="width:${pct}%;background:${statusColor};height:100%;border-radius:4px;transition:width 0.5s;"></div></div>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });
  body.innerHTML = html;
}

function renderQuizHome() {
  renderStudyMapFlat();
  renderQuizTabHistory();
}

function renderSubjectGrid() {
  const el = document.getElementById('subject-grid');
  if (!el) return;

  el.innerHTML = SUBJECT_META.map(subj => {
    const pct = getSubjectPreparedness(subj.key);
    const barW = pct + '%';
    const barCol = pct >= 80 ? '#16a34a' : pct >= 50 ? '#0d9488' : pct >= 20 ? '#d97706' : '#e5e7eb';
    const scores = getQuizScores();
    const totalAttempts = subj.topics.reduce((a, t) => a + (scores[t]?.attempts || 0), 0);

    return `<div class="subject-card" onclick="startSubjectQuiz('${subj.key}')">
      <div class="subj-card-top">
        <div class="subj-card-icon" style="background:${subj.color}">${subj.icon}</div>
        <div class="subj-card-info">
          <div class="subj-card-name">${subj.label}</div>
          <div class="subj-card-meta">${subj.topics.length} topic${subj.topics.length > 1 ? 's' : ''} · ${totalAttempts} quiz${totalAttempts !== 1 ? 'zes' : ''} taken</div>
        </div>
        <div class="subj-card-pct" style="color:${pct > 0 ? barCol : 'var(--ink-lt)'}">${pct > 0 ? pct + '%' : 'Start!'}</div>
      </div>
      <div class="subj-prog-bar"><div style="width:${barW};background:${barCol};height:100%;border-radius:4px;transition:width 0.5s;"></div></div>
      <div class="subj-card-topics">
        ${subj.topics.map(t => {
      const tp = getTopicPreparedness(t);
      const tc = tp >= 80 ? '#16a34a' : tp >= 50 ? '#0d9488' : tp > 0 ? '#d97706' : '#d1d5db';
      return `<span class="subj-topic-pill" style="background:${tc}20;color:${tc};border:1px solid ${tc}40;">${allLessons.find(l => l.key === t)?.icon || '📚'
        } ${tp > 0 ? tp + '%' : '·'}</span>`;
    }).join('')}
      </div>
    </div>`;
  }).join('');
}

function renderMiniCSECard() {
  const el = document.getElementById('mini-cse-card');
  const badge = document.getElementById('mini-cse-badge');
  if (!el || !badge) return;

  el.className = 'mini-cse-card unlocked';
  badge.innerHTML = '🔓 Ready! Tap to start →';
}

async function startSubjectQuiz(subjectKey) {
  const subj = SUBJECT_META.find(s => s.key === subjectKey);
  if (!subj) return;
  showLoading('Loading ' + subj.label + ' questions…');
  try {
    const rows = await fetchBySubject(subj.label);
    const qs = shuffle(rows).slice(0, 5);
    hideLoading();
    if (!qs.length) { showToast('No questions found for this subject'); return; }
    beginQuiz(qs, subj.label, subjectKey);
  } catch (e) { hideLoading(); showToast('Could not load questions'); }
}

async function startQuizForTopic(topicKey) {
  showLoading('Loading questions…');
  try {
    const rows = await fetchTopicQuestions(topicKey, 5);
    hideLoading();
    if (!rows.length) { showToast('No questions found'); return; }
    beginQuiz(rows, topicKey, topicKey);
  } catch (e) { hideLoading(); showToast('Could not load questions'); }
}

async function startRandomQuiz() {
  showLoading('Loading random mix…');
  try {
    let allQ = [];
    for (const subj of getActiveSubjectMeta()) {
      const rows = await fetchBySubject(subj.label);
      allQ = allQ.concat(rows);
    }
    const qs = pickRandomGrouped(allQ, 10);
    hideLoading();
    if (!qs.length) { showToast('No questions found'); return; }
    beginQuiz(qs, 'Random Mix', null);
  } catch (e) { hideLoading(); showToast('Could not load questions'); }
}

async function handleMiniCSE() {
  showLoading('Building your Mini Civil Service Exam…');
  try {
    const qs = await buildMiniCSE();
    hideLoading();
    if (!qs.length) { showToast('Could not build exam'); return; }
    beginQuiz(qs, 'Mini Civil Service Exam', 'mini-cse');
  } catch (e) { hideLoading(); showToast('Could not load exam'); }
}

function renderMockTestCard() {
  // No-op: mock test card was moved to the dedicated Mock tab
}

function renderMockScreen() {
  const examType = getUserExamType();
  const cfg = MOCK_TEST_CONFIG[examType] || MOCK_TEST_CONFIG.subpro;
  const hrs = Math.floor(cfg.timeMinutes / 60);
  const mins = cfg.timeMinutes % 60;

  // Update header subtitle to reflect current exam type + config
  const subEl = document.getElementById('mock-screen-sub');
  if (subEl) subEl.textContent = `${cfg.label} · ${cfg.items} items · ${hrs}h ${mins}m`;

  // Render exam info card with stats and start button
  const infoEl = document.getElementById('mock-exam-info');
  if (infoEl) {
    infoEl.innerHTML = `
      <div class="mock-info-card">
        <div class="mock-info-row">
          <div class="mock-info-item">
            <div class="mock-info-num">${cfg.items}</div>
            <div class="mock-info-lbl">Questions</div>
          </div>
          <div class="mock-info-item">
            <div class="mock-info-num">${hrs}h ${mins}m</div>
            <div class="mock-info-lbl">Time Limit</div>
          </div>
          <div class="mock-info-item">
            <div class="mock-info-num">80%</div>
            <div class="mock-info-lbl">Passing Score</div>
          </div>
        </div>
        <button class="mock-start-btn" onclick="startMockTest()">Start Mock Test →</button>
      </div>`;
  }

  renderMiniCSECard();
  renderMockHistory();
}

async function startMockTest() {
  const examType = getUserExamType();
  const cfg = MOCK_TEST_CONFIG[examType] || MOCK_TEST_CONFIG.subpro;
  showLoading(`Building ${cfg.label} Mock Test (${cfg.items} items)…`);
  try {
    const qs = await buildMockTest(examType);
    hideLoading();
    if (!qs.length) { showToast('Could not build mock test'); return; }
    beginQuiz(qs, `Mock Test — ${cfg.label}`, 'mock-test', cfg.timeMinutes);
  } catch (e) { hideLoading(); showToast('Could not load mock test'); }
}

// ═══════════════════════════════════════════════════════════════
// QUIZ ENGINE
// ═══════════════════════════════════════════════════════════════
let currentQuiz = null;
let quizStartTime = null;
let quizTimerInterval = null;
let quizTimeLimitMs = 0;
let _currentAttemptId = null;

async function beginQuiz(questions, label, topicKey, timeLimitMinutes = 0) {
  const isTest = topicKey === 'mock-test' || topicKey === 'mini-cse';
  // For Mock Test and Mini CSE, keep questions in order (like the real exam)
  // For regular quizzes, shuffle
  if (!isTest) {
    // Shuffle questions AND choices for regular quizzes
    questions = shuffle(questions);
    questions.forEach(shuffleChoices);
  } else {
    // For tests, just shuffle the choices (not the question order)
    questions.forEach(shuffleChoices);
  }
  currentQuiz = { questions, label, topicKey, idx: 0, answers: new Array(questions.length).fill(null), answered: false, timeLimitMinutes };
  quizStartTime = Date.now();
  quizTimeLimitMs = timeLimitMinutes * 60 * 1000;

  // Create a quiz_attempts record and store its ID for answer tracking
  _currentAttemptId = await startQuizAttempt(label || topicKey || 'Quiz', questions.length);
  currentQuiz.attemptId = _currentAttemptId;

  // Setup timer if there's a time limit
  clearInterval(quizTimerInterval);
  const timerEl = document.getElementById('quiz-timer');
  if (timeLimitMinutes > 0 && timerEl) {
    timerEl.style.display = 'block';
    quizTimerInterval = setInterval(() => {
      const elapsed = Date.now() - quizStartTime;
      const remaining = quizTimeLimitMs - elapsed;
      if (remaining <= 0) {
        clearInterval(quizTimerInterval);
        timerEl.textContent = '\u23f1 00:00';
        timerEl.style.color = 'var(--red)';
        showToast('\u23f0 Time\'s up!');
        finishQuiz();
        return;
      }
      const totalSec = Math.ceil(remaining / 1000);
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      timerEl.textContent = h > 0
        ? `\u23f1 ${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
        : `\u23f1 ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      timerEl.style.color = remaining < 300000 ? 'var(--red)' : '';
    }, 1000);
  } else if (timerEl) {
    timerEl.style.display = 'none';
  }

  // Show/hide navigator strip for tests
  const navStrip = document.getElementById('quiz-nav-strip');
  if (navStrip) {
    navStrip.style.display = isTest ? 'flex' : 'none';
  }

  goTo('quiz-q');
  renderQuizQ();
}

function renderQuizQ() {
  if (!currentQuiz) return;
  const { questions, idx, topicKey, answers } = currentQuiz;
  const q = questions[idx];
  const total = questions.length;
  const isTest = topicKey === 'mock-test' || topicKey === 'mini-cse';

  document.getElementById('q-progress-label').textContent = `Question ${idx + 1} of ${total}`;
  document.getElementById('q-prog-fill').style.width = ((idx + 1) / total * 100) + '%';
  document.getElementById('q-subject-tag').textContent = q.subject || currentQuiz.label;
  document.getElementById('q-text').textContent = q.question;
  document.getElementById('q-explanation').style.display = 'none';
  document.getElementById('quiz-next-bar').style.display = 'none';

  const letters = ['A', 'B', 'C', 'D', 'E'];
  document.getElementById('q-choices').innerHTML = q.choices.map((c, i) =>
    `<button class="choice-btn" onclick="selectAnswer(${i})"><span class="choice-letter">${letters[i]}</span><span class="choice-text">${c}</span></button>`
  ).join('');

  // If already answered, show feedback
  const existingAnswer = answers[idx];
  if (existingAnswer !== null && existingAnswer !== undefined) {
    currentQuiz.answered = true;
    document.querySelectorAll('.choice-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === existingAnswer.correct) btn.classList.add('correct');
      if (i === existingAnswer.chosen && existingAnswer.chosen !== existingAnswer.correct) btn.classList.add('wrong');
    });
    if (q.explanation) {
      document.getElementById('q-expl-text').textContent = q.explanation;
      document.getElementById('q-explanation').style.display = 'block';
    }
    document.getElementById('quiz-next-bar').style.display = 'flex';
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) {
      nextBtn.textContent = currentQuiz.idx >= currentQuiz.questions.length - 1 ? 'See Results 🎉' : 'Next →';
    }
  } else {
    currentQuiz.answered = false;
  }

  updateBookmarkBtn(q);

  // Render navigator for tests
  if (isTest) renderNavStrip();
}

function renderNavStrip() {
  const strip = document.getElementById('quiz-nav-strip');
  if (!strip || !currentQuiz) return;
  const { questions, idx, answers } = currentQuiz;

  // Build subject sections for jump tabs
  const sections = [];
  let lastSubj = '';
  questions.forEach((q, i) => {
    const subj = q.subject || '';
    if (subj !== lastSubj) {
      sections.push({ subject: subj, startIdx: i });
      lastSubj = subj;
    }
  });

  // Build the subject jump tabs
  let html = '<div class="quiz-nav-subjects">';
  sections.forEach(sec => {
    const isCurrent = idx >= sec.startIdx && (sections.indexOf(sec) === sections.length - 1 || idx < sections[sections.indexOf(sec) + 1].startIdx);
    const shortName = sec.subject.replace(' Ability', '').replace(' Information', ' Info');
    html += `<button class="quiz-nav-subj-btn${isCurrent ? ' active' : ''}" onclick="jumpToQuestion(${sec.startIdx})">${shortName}</button>`;
  });
  html += '</div>';

  // Build question number dots
  html += '<div class="quiz-nav-dots">';
  html += questions.map((_, i) => {
    let cls = 'quiz-nav-dot';
    if (i === idx) cls += ' current';
    else if (answers[i] !== null && answers[i] !== undefined) {
      cls += ' answered';
      if (answers[i].chosen !== answers[i].correct) cls += ' wrong-dot';
    }
    return `<button class="${cls}" onclick="jumpToQuestion(${i})">${i + 1}</button>`;
  }).join('');
  html += '</div>';

  strip.innerHTML = html;

  // Auto-scroll dots to current question
  const dotsRow = strip.querySelector('.quiz-nav-dots');
  if (dotsRow) {
    const currentDot = dotsRow.children[idx];
    if (currentDot) currentDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function jumpToQuestion(index) {
  if (!currentQuiz || index < 0 || index >= currentQuiz.questions.length) return;
  currentQuiz.idx = index;
  currentQuiz.answered = false;
  renderQuizQ();
  document.getElementById('quiz-q-scroll').scrollTop = 0;
}

function selectAnswer(choiceIdx) {
  if (currentQuiz.answered) return;
  currentQuiz.answered = true;
  const q = currentQuiz.questions[currentQuiz.idx];
  const correct = q.correct;
  currentQuiz.answers[currentQuiz.idx] = { chosen: choiceIdx, correct };

  // Persist this answer to Supabase
  const letters = ['A', 'B', 'C', 'D', 'E'];
  recordAnswer(_currentAttemptId, q.id, letters[choiceIdx], choiceIdx === correct);

  document.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    if (i === choiceIdx && choiceIdx !== correct) btn.classList.add('wrong');
  });

  if (q.explanation) {
    document.getElementById('q-expl-text').textContent = q.explanation;
    document.getElementById('q-explanation').style.display = 'block';
  }
  document.getElementById('quiz-next-bar').style.display = 'flex';
  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.textContent = currentQuiz.idx >= currentQuiz.questions.length - 1 ? 'See Results 🎉' : 'Next →';
  }

  // Update navigator dot
  const isTest = currentQuiz.topicKey === 'mock-test' || currentQuiz.topicKey === 'mini-cse';
  if (isTest) renderNavStrip();
}

function quizNext() {
  if (!currentQuiz) return;
  if (currentQuiz.idx < currentQuiz.questions.length - 1) {
    currentQuiz.idx++;
    renderQuizQ();
    document.getElementById('quiz-q-scroll').scrollTop = 0;
  } else {
    finishQuiz();
  }
}

async function finishQuiz() {
  const { questions, answers, label, topicKey } = currentQuiz;
  // Filter only answered questions for scoring
  const answeredList = answers.filter(a => a !== null && a !== undefined);
  const correct = answeredList.filter(a => a.chosen === a.correct).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const elapsed = Math.round((Date.now() - quizStartTime) / 1000);

  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : pct >= 40 ? '💪' : '📚';
  const message = pct >= 80 ? "Excellent! You're ready!" : pct >= 60 ? 'Great work, keep it up!' : pct >= 40 ? 'Good effort! Practice more.' : "Don't give up — keep trying!";

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-score').textContent = pct + '%';
  document.getElementById('res-label').textContent = `${correct} of ${total} correct`;
  document.getElementById('res-message').textContent = message;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = total - correct;
  document.getElementById('res-time').textContent = elapsed >= 60 ? Math.floor(elapsed / 60) + 'm ' + (elapsed % 60) + 's' : elapsed + 's';

  // Review list
  const letters = ['A', 'B', 'C', 'D', 'E'];
  document.getElementById('res-review').innerHTML = '<div class="section-title" style="margin-top:16px;">📋 Review</div>' +
    questions.map((q, i) => {
      const a = answers[i] || {};
      const ok = a.chosen === a.correct;
      const wasSkipped = a === null || a === undefined || a.chosen === undefined;
      return `<div class="review-item ${wasSkipped ? 'wrong' : ok ? 'correct' : 'wrong'}">
        <div class="review-q">${i + 1}. ${q.question}</div>
        <div class="review-ans">${wasSkipped ? '⏸️ Skipped' : ok ? '✅' : '❌'} ${letters[q.correct]}. ${q.choices[q.correct]}</div>
        ${q.explanation ? `<div class="review-expl">${q.explanation}</div>` : ''}
      </div>`;
    }).join('');

  goTo('quiz-result');

  // Update the quiz_attempts row with the final score
  await finishQuizAttempt(_currentAttemptId, correct);

  // Save stats — record ALL quiz types to Supabase
  await recordQuizResult(correct, total, topicKey, label);

  // Record study date using local timezone
  const stats = getStats();
  const today = getLocalDateStr();
  if (!stats.studiedDates.includes(today)) {
    stats.studiedDates.push(today);
  }
  stats.totalAnswered = (stats.totalAnswered || 0) + answeredList.length;
  stats.totalCorrect = (stats.totalCorrect || 0) + correct;
  saveStats(stats);

  // Invalidate the answered-questions cache so the Cards tab reflects new answers
  _answeredQuestionsCache = [];
  flashState.cards = [];
}

function retryQuiz() {
  if (!currentQuiz) { goTo('quiz-home'); return; }
  currentQuiz.idx = 0;
  currentQuiz.answers = new Array(currentQuiz.questions.length).fill(null);
  currentQuiz.answered = false;
  // Reshuffle choices for each question
  currentQuiz.questions.forEach(shuffleChoices);
  quizStartTime = Date.now();
  // Restart timer if timed
  clearInterval(quizTimerInterval);
  if (currentQuiz.timeLimitMinutes > 0) {
    beginQuiz(currentQuiz.questions, currentQuiz.label, currentQuiz.topicKey, currentQuiz.timeLimitMinutes);
    return;
  }
  goTo('quiz-q');
  renderQuizQ();
}

async function generateNewQuiz() {
  if (!currentQuiz) { goTo('quiz-home'); return; }
  const { topicKey, label, timeLimitMinutes } = currentQuiz;

  // If it's a mock test, regenerate mock test
  if (topicKey === 'mock-test') {
    await startMockTest();
    return;
  }
  // If it's a mini CSE, regenerate mini CSE
  if (topicKey === 'mini-cse') {
    await handleMiniCSE();
    return;
  }
  // If it's a random mix (topicKey is null and label is 'Random Mix')
  if (!topicKey && label === 'Random Mix') {
    await startRandomQuiz();
    return;
  }
  // If it's a subject quiz, check if it matches a subject key
  const subjMatch = SUBJECT_META.find(s => s.key === topicKey);
  if (subjMatch) {
    await startSubjectQuiz(subjMatch.key);
    return;
  }
  // Otherwise, try to reload as a topic quiz
  if (topicKey) {
    await startQuizForTopic(topicKey);
    return;
  }
  // Fallback: go back to quiz home
  goTo('quiz-home');
}

function exitQuizResult() {
  clearInterval(quizTimerInterval);
  goTo('quiz-home');
  refreshUserData();
}

function confirmExitQuiz() {
  showModal('Exit Quiz?', 'Your progress in this quiz will be lost.',
    [{ label: 'Keep Going', cls: 'secondary', action: hideModal },
    { label: 'Exit', cls: 'danger', action: () => { hideModal(); clearInterval(quizTimerInterval); goTo('quiz-home'); } }]);
}

// ═══════════════════════════════════════════════════════════════
// BOOKMARKS (during quiz)
// ═══════════════════════════════════════════════════════════════
function updateBookmarkBtn(q) {
  const btn = document.getElementById('bm-btn');
  if (!btn || !q) return;
  const bms = getBookmarks();
  btn.textContent = bms[q.id] ? '⭐' : '☆';
  btn.style.color = bms[q.id] ? '#f59e0b' : '';
}

function toggleBookmark() {
  if (!currentQuiz) return;
  const q = currentQuiz.questions[currentQuiz.idx];
  const bms = getBookmarks();
  if (bms[q.id]) {
    delete bms[q.id];
    showToast('Removed from Saved');
  } else {
    bms[q.id] = {
      id: q.id, question: q.question, choices: q.choices, correct: q.correct,
      explanation: q.explanation || '', subject: q.subject || currentQuiz.label,
      topic: currentQuiz.topicKey, savedAt: new Date().toISOString()
    };
    showToast('⭐ Saved to Bookmarks!');
  }
  saveBookmarks(bms);
  updateBookmarkBtn(q);
}

// ═══════════════════════════════════════════════════════════════
// FLASHCARD SCREEN
// ═══════════════════════════════════════════════════════════════
let flashState = { cards: [], idx: 0, flipped: false, subject: null };

function renderCardsScreen() {
  // Cards are sourced from the user's own answered questions (not the full DB)
  if (!_answeredQuestionsCache.length) {
    document.getElementById('cards-filter').innerHTML = '';
    document.getElementById('flashcard-area').innerHTML = `
      <div class="fc-empty">
        <div class="fc-empty-icon">🃏</div>
        <div class="fc-empty-title">No cards yet</div>
        <div class="fc-empty-sub">Complete a quiz or mock test — every question you answer will appear here for review</div>
      </div>`;
    return;
  }
  renderCardsFilter();
  if (!flashState.cards.length) {
    document.getElementById('flashcard-area').innerHTML = `
      <div class="fc-empty">
        <div class="fc-empty-icon">🃏</div>
        <div class="fc-empty-title">Pick a subject above</div>
        <div class="fc-empty-sub">Tap any chip to start reviewing</div>
      </div>`;
  } else {
    renderFlashcard();
  }
}

function renderCardsFilter() {
  const el = document.getElementById('cards-filter');
  if (!el) return;
  // Only show subjects that actually have answered questions
  const answeredSubjects = new Set(_answeredQuestionsCache.map(q => q.subject));
  const chips = [
    { key: 'all', label: '🎲 Mix All' },
    ...SUBJECT_META
      .filter(s => answeredSubjects.has(s.label))
      .map(s => ({ key: s.key, label: s.icon + ' ' + s.label.split(' ')[0] }))
  ];
  el.innerHTML = chips.map(c => `
    <button class="cards-filter-btn ${flashState.subject === c.key ? 'active' : ''}"
            onclick="loadFlashcards('${c.key}')">${c.label}</button>`
  ).join('');
}

function loadFlashcards(subjectKey) {
  flashState.subject = subjectKey;
  renderCardsFilter();
  let cards = [];
  if (subjectKey === 'all') {
    cards = [..._answeredQuestionsCache];
  } else {
    const subj = SUBJECT_META.find(s => s.key === subjectKey);
    cards = _answeredQuestionsCache.filter(q => q.subject === subj?.label);
  }
  if (!cards.length) {
    showToast('No answered questions for this subject yet');
    return;
  }
  flashState.cards = shuffle(cards);
  flashState.idx = 0;
  flashState.flipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const area = document.getElementById('flashcard-area');
  if (!area) return;
  const { cards, idx, flipped } = flashState;
  if (!cards.length) {
    area.innerHTML = `<div class="fc-empty"><div class="fc-empty-icon">🃏</div><div class="fc-empty-title">Choose a subject above</div></div>`;
    return;
  }

  const q = cards[idx];
  const letters = ['A', 'B', 'C', 'D'];
  const correctText = q.choices?.[q.correct] || '';

  area.innerHTML = `
    <div class="fc-counter">Card ${idx + 1} of ${cards.length}</div>
    <div class="fc-scene" onclick="flipCard()">
      <div class="fc-card ${flipped ? 'flipped' : ''}" id="fc-card">
        <div class="fc-front">
          <div class="fc-subject-tag">${q.subject || 'Review'}</div>
          <div class="fc-question">${q.question}</div>
          <div class="fc-tap-hint">👆 Tap to reveal answer</div>
        </div>
        <div class="fc-back">
          <div class="fc-answer-label">✅ Correct Answer</div>
          <div class="fc-answer">${correctText}</div>
          ${q.explanation ? `<div class="fc-expl">${q.explanation}</div>` : ''}
          <div class="fc-tap-hint" style="color:rgba(255,255,255,0.7);">👆 Tap to see question</div>
        </div>
      </div>
    </div>
    <div class="fc-nav-row">
      <button class="fc-nav-btn" onclick="event.stopPropagation();prevCard()" ${idx === 0 ? 'disabled' : ''}>‹ Prev</button>
      <button class="fc-flip-btn" onclick="event.stopPropagation();flipCard()">
        ${flipped ? '🔄 Question' : '💡 Answer'}
      </button>
      <button class="fc-nav-btn" onclick="event.stopPropagation();nextCard()" ${idx === cards.length - 1 ? 'disabled' : ''}>Next ›</button>
    </div>`;
}

function flipCard() { flashState.flipped = !flashState.flipped; renderFlashcard(); }
function nextCard() { if (flashState.idx < flashState.cards.length - 1) { flashState.idx++; flashState.flipped = false; renderFlashcard(); } }
function prevCard() { if (flashState.idx > 0) { flashState.idx--; flashState.flipped = false; renderFlashcard(); } }

// ═══════════════════════════════════════════════════════════════
// BOOKMARK SCREEN
// ═══════════════════════════════════════════════════════════════
let bmFilter = 'all';

function renderBookmarks() {
  renderBmFilter();
  renderBmList();
}

function renderBmFilter() {
  const el = document.getElementById('bm-filter');
  if (!el) return;
  const bms = getBookmarks();
  const subjects = ['all', ...new Set(Object.values(bms).map(b => b.subject))];
  el.innerHTML = subjects.map(s =>
    `<button class="bm-filter-btn ${bmFilter === s ? 'active' : ''}" onclick="setBmFilter('${s}')">${s === 'all' ? '⭐ All' : s}</button>`
  ).join('');
}

function setBmFilter(s) { bmFilter = s; renderBookmarks(); }

function renderBmList() {
  const el = document.getElementById('bm-list');
  const cnt = document.getElementById('bm-count');
  if (!el) return;

  const bms = getBookmarks();
  const items = Object.values(bms)
    .filter(b => bmFilter === 'all' || b.subject === bmFilter)
    .sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));

  if (cnt) cnt.textContent = Object.keys(bms).length + ' saved';

  if (!items.length) {
    el.innerHTML = `<div class="empty-state">
      <div class="empty-icon">☆</div>
      <div class="empty-title">No saved questions yet</div>
      <div class="empty-sub">Tap the ☆ button during a quiz to save questions here</div>
    </div>`;
    return;
  }

  const letters = ['A', 'B', 'C', 'D'];
  el.innerHTML = items.map(b => `
    <div class="bm-item">
      <div class="bm-item-header">
        <span class="bm-subject-badge">${b.subject}</span>
        <button class="bm-remove-btn" onclick="removeBookmark('${b.id}')">✕</button>
      </div>
      <div class="bm-question">${b.question}</div>
      <div class="bm-answer">✅ ${letters[b.correct]}. ${b.choices?.[b.correct] || ''}</div>
      ${b.explanation ? `<div class="bm-expl">${b.explanation}</div>` : ''}
    </div>`
  ).join('');
}

function removeBookmark(id) {
  const bms = getBookmarks();
  delete bms[id];
  saveBookmarks(bms);
  showToast('Removed from Saved');
  renderBookmarks();
}

// ═══════════════════════════════════════════════════════════════
// PROFILE SCREEN
// ═══════════════════════════════════════════════════════════════
let currentUser = null;
let _userAvatarUrl = null; // cached public URL of the user's avatar

// ── Apply avatar photo to all UI spots (home mini-avatar, sidebar, profile) ──
function applyAvatarToUI(url) {
  // Profile: show <img>, hide initials
  const img = document.getElementById('prof-avatar-img');
  const initials = document.getElementById('prof-avatar-initials');
  if (img && initials) {
    img.src = url;
    img.style.display = 'block';
    initials.style.display = 'none';
  }
  // Home mini-avatar
  const homeAv = document.getElementById('home-avatar');
  if (homeAv) {
    homeAv.style.backgroundImage = `url('${url}')`;
    homeAv.style.backgroundSize = 'cover';
    homeAv.style.backgroundPosition = 'center';
    homeAv.textContent = '';
  }
}

// ── Load avatar from profiles table and display it ──
async function loadUserAvatar() {
  if (!_sb || !currentUser) return;
  try {
    const { data, error } = await _sb
      .from('profiles')
      .select('avatar_url')
      .eq('id', currentUser.id)
      .single();
    if (error || !data?.avatar_url) return;
    const { data: urlData } = _sb.storage.from('avatars').getPublicUrl(data.avatar_url);
    if (urlData?.publicUrl) {
      // Add cache-buster so the browser always fetches the latest image
      _userAvatarUrl = urlData.publicUrl + '?t=' + Date.now();
      applyAvatarToUI(_userAvatarUrl);
    }
  } catch (e) { }
}

// ── Compress image using Canvas API before upload ──
function compressImage(file, maxDimension = 400, quality = 0.75) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxDimension / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      canvas.toBlob(blob => resolve(blob || file), 'image/jpeg', quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

// ── Upload selected file to Supabase Storage ──
async function uploadAvatar(file) {
  if (!_sb || !currentUser) return;
  const allowed = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowed.includes(file.type)) {
    showToast('Only JPG, PNG, or WebP images allowed');
    return;
  }
  showToast('Processing photo…');
  // Compress to max 400×400 JPEG at 75% quality before uploading
  const compressed = await compressImage(file, 400, 0.75);
  try {
    const path = `${currentUser.id}/avatar.png`;
    const { error: uploadErr } = await _sb.storage
      .from('avatars')
      .upload(path, compressed, { upsert: true, contentType: 'image/jpeg' });
    if (uploadErr) throw uploadErr;
    // Update profiles table so the URL persists across sessions
    await _sb.from('profiles').upsert({ id: currentUser.id, avatar_url: path }, { onConflict: 'id' });
    // Get public URL and show immediately
    const { data: urlData } = _sb.storage.from('avatars').getPublicUrl(path);
    if (urlData?.publicUrl) {
      _userAvatarUrl = urlData.publicUrl + '?t=' + Date.now();
      applyAvatarToUI(_userAvatarUrl);
    }
    showToast('Profile photo updated ✓');
  } catch (e) {
    showToast('Upload failed: ' + (e?.message || 'Please try again'));
  }
}

// ── Trigger the hidden file input ──
function triggerAvatarUpload() {
  document.getElementById('avatar-file-input')?.click();
}

// ── Called by the hidden file input's onchange ──
async function handleAvatarFileSelect(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  await uploadAvatar(file);
  event.target.value = ''; // reset so same file can be re-selected
}

function renderProfile() {
  const stats = getStats();
  const scores = getQuizScores();
  const streak = computeStreak(stats.studiedDates);
  const attempts = Object.values(scores).reduce((s, v) => s + (v.attempts || 0), 0);
  const covered = Object.values(scores).filter(s => s.attempts > 0).length;
  const avgPct = covered > 0
    ? Math.round(Object.values(scores).filter(s => s.attempts > 0).reduce((s, v) => s + (v.bestPct ?? v.pct ?? 0), 0) / covered)
    : 0;
  const bestPct = covered > 0
    ? Math.max(...Object.values(scores).filter(s => s.attempts > 0).map(s => s.bestPct ?? s.pct ?? 0))
    : 0;

  if (currentUser) {
    document.getElementById('prof-name').textContent = currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Reviewer';
    document.getElementById('prof-email').textContent = currentUser.email || '';
    const since = new Date(currentUser.created_at).toLocaleDateString('en-PH', { year: 'numeric', month: 'long' });
    document.getElementById('prof-since').textContent = 'Member since ' + since;
    const initials = (currentUser.user_metadata?.full_name || currentUser.email || 'R').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const initialsEl = document.getElementById('prof-avatar-initials');
    if (initialsEl) initialsEl.textContent = initials;
    // If we already have a cached avatar URL, show photo; otherwise show initials
    if (_userAvatarUrl) {
      applyAvatarToUI(_userAvatarUrl);
    }
  }

  // Stats grid
  document.getElementById('profile-stats').innerHTML = [
    { num: streak + '🔥', lbl: 'Day Streak' },
    { num: attempts, lbl: 'Quizzes Taken' },
    { num: avgPct + '%', lbl: 'Avg Best Score' },
    { num: bestPct + '%', lbl: 'Best Score Ever' },
  ].map(s => `<div class="profile-stat-card">
    <div class="profile-stat-num">${s.num}</div>
    <div class="profile-stat-lbl">${s.lbl}</div>
  </div>`).join('');

  // Subject progress overview
  const progEl = document.getElementById('profile-progress-overview');
  if (progEl) {
    progEl.innerHTML = getActiveSubjectMeta().map(subj => {
      const pct = getSubjectPreparedness(subj.key);
      const col = pct >= 80 ? '#16a34a' : pct >= 50 ? '#0d9488' : pct >= 20 ? '#d97706' : '#e5e7eb';
      return `<div class="prof-subj-row">
        <div class="prof-subj-left">${subj.icon} ${subj.label}</div>
        <div class="prof-subj-bar"><div style="width:${pct}%;background:${col};height:100%;border-radius:4px;transition:width 0.5s;"></div></div>
        <div class="prof-subj-pct" style="color:${pct > 0 ? col : 'var(--ink-lt)'}">${pct}%</div>
      </div>`;
    }).join('');
  }

  // Dark mode toggle state
  const dt = document.getElementById('dark-toggle');
  if (dt) dt.classList.toggle('on', darkMode);

  // Exam type toggle state
  const examType = getUserExamType();
  const etLabel = document.getElementById('exam-type-label');
  if (etLabel) etLabel.textContent = MOCK_TEST_CONFIG[examType]?.label || 'SubProfessional';
  const etToggle = document.getElementById('exam-type-toggle');
  if (etToggle) etToggle.classList.toggle('on', examType === 'professional');
}

function showPremiumModal() {
  showModal('⭐ CSE Ready Premium',
    'Unlock all subjects, unlimited daily quizzes, detailed analytics, and priority question updates.',
    [{ label: 'Maybe Later', cls: 'secondary', action: hideModal },
    { label: 'Upgrade Now ⭐', cls: 'primary', action: () => { hideModal(); showToast('Coming soon! 🚀'); } }]);
}

function showAbout() {
  showModal('CSE Ready – Civil Service Exam Reviewer PH',
    'Version 5.0\n\nThe most complete Civil Service Exam reviewer online. 5000+ questions, mock tests, quizzes, and flashcards for easy review with detailed explanations.\n\nBe exam-ready. Be CSE Ready.',
    [{ label: 'OK', cls: 'primary', action: hideModal }]);
}

let darkMode = false;
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  const dt = document.getElementById('dark-toggle');
  if (dt) dt.classList.toggle('on', darkMode);
  localStorage.setItem('cse_dark', darkMode ? '1' : '0');
  requestAnimationFrame(renderScoreChart);
}

function toggleExamType() {
  const current = getUserExamType();
  const newType = current === 'subpro' ? 'professional' : 'subpro';
  setUserExamType(newType);
  renderProfile();
  renderStudyMap();
  renderSidebarStudyMap();
  if (currentScreen === 'mock') renderMockScreen();
  if (currentScreen === 'quiz-home') renderQuizHome();
  showToast(`Exam type set to ${MOCK_TEST_CONFIG[newType].label}`);
}

function confirmLogout() {
  showModal('Sign Out', 'Are you sure you want to sign out?',
    [{ label: 'Cancel', cls: 'secondary', action: hideModal },
    {
      label: 'Sign Out', cls: 'danger', action: async () => {
        hideModal();
        if (_sb) await _sb.auth.signOut();
        // Clear user-specific local data so the next login starts clean
        localStorage.removeItem('cse_last_user_id');
        localStorage.removeItem('cse_stats');
        localStorage.removeItem('cse_quiz_scores');
        window.location.href = '/index.html';
      }
    }]);
}

// ═══════════════════════════════════════════════════════════════
// QUIZ RESULT SAVE
// ═══════════════════════════════════════════════════════════════
async function recordQuizResult(correct, total, topic, label) {
  const pct = Math.round((correct / total) * 100);
  // Save to localStorage for topic quizzes
  if (topic && topic !== 'mini-cse' && topic !== 'mock-test') {
    const scores = getQuizScores();
    const prev = scores[topic] || { correct: 0, total: 0, pct: 0, bestPct: 0, attempts: 0 };
    scores[topic] = {
      correct, total, pct,
      bestPct: Math.max(prev.bestPct || 0, pct),
      attempts: (prev.attempts || 0) + 1,
      lastAt: new Date().toISOString()
    };
    saveQuizScores(scores);
  }
  // Save ALL quiz types to Supabase
  if (_sb) {
    try {
      const { data: { session } } = await _sb.auth.getSession();
      if (session?.user) {
        const topicLabel = topic === 'mock-test' ? (label || 'Mock Test')
          : topic === 'mini-cse' ? 'Mini Civil Service Exam'
            : topic;
        await _sb.from('quiz_scores').insert({
          user_id: session.user.id,
          topic: topicLabel,
          correct,
          total,
          score_pct: pct
        });
      }
    } catch (e) { }
  }
}

// ═══════════════════════════════════════════════════════════════
// ATTEMPT TRACKING
// ═══════════════════════════════════════════════════════════════

// Create a new quiz_attempts row and return its UUID
async function startQuizAttempt(examType, totalQuestions) {
  if (!_sb) return null;
  try {
    const { data: { session } } = await _sb.auth.getSession();
    if (!session?.user) return null;
    const { data, error } = await _sb
      .from('quiz_attempts')
      .insert({ user_id: session.user.id, exam_type: examType, total_questions: totalQuestions, score: 0 })
      .select('id')
      .single();
    if (error) { console.warn('startQuizAttempt error:', error.message); return null; }
    return data?.id || null;
  } catch (e) { return null; }
}

// Insert one row into quiz_answers for every question the user answers
async function recordAnswer(attemptId, questionId, selectedAnswer, isCorrect) {
  if (!_sb || !attemptId || !questionId) return;
  try {
    await _sb.from('quiz_answers').insert({
      attempt_id: attemptId,
      question_id: questionId,
      selected_answer: selectedAnswer,
      is_correct: isCorrect,
    });
  } catch (e) { /* silent — never block the user */ }
}

// Update the attempt row with the final number of correct answers
async function finishQuizAttempt(attemptId, score) {
  if (!_sb || !attemptId) return;
  try {
    // Write attempted_at at quiz COMPLETION with explicit UTC 'Z' suffix.
    // Fixes: (1) time was quiz-start not quiz-end, (2) columns stored as TIMESTAMP WITHOUT TIME ZONE
    // return strings with no timezone suffix, causing browsers to parse as local time, then
    // toLocale* with timeZone:'Asia/Manila' adds a second shift — producing wrong times.
    await _sb.from('quiz_attempts').update({ score, attempted_at: new Date().toISOString() }).eq('id', attemptId);
  } catch (e) { }
}

// Safe timestamp parser — ensures UTC interpretation regardless of Supabase column type.
// TIMESTAMPTZ → returns "...+00:00" (correct). TIMESTAMP WITHOUT TZ → returns "..." (no suffix).
// Without 'Z', browsers parse as LOCAL time; toLocale* then double-shifts the timezone.
function parseAttemptedAt(ts) {
  if (!ts) return null;
  const s = String(ts);
  return new Date(/[Z+\-]\d{2}:?\d{2}$/.test(s) ? s : s + 'Z');
}

// Fetch all quiz_attempts for the logged-in user, newest first
async function loadQuizHistory() {
  if (!_sb) return [];
  try {
    const { data: { session } } = await _sb.auth.getSession();
    if (!session?.user) return [];
    const { data, error } = await _sb
      .from('quiz_attempts')
      .select('id,exam_type,total_questions,score,attempted_at')
      .eq('user_id', session.user.id)
      .order('attempted_at', { ascending: false })
      .limit(50);
    if (error) { console.warn('loadQuizHistory error:', error.message); return []; }
    return data || [];
  } catch (e) { return []; }
}

// Count distinct quiz attempts per topic by joining quiz_answers → questions.topic
async function loadTopicAttemptCounts() {
  if (!_sb || !_attemptHistoryCache.length) return;
  try {
    const attemptIds = _attemptHistoryCache.map(a => a.id);

    // Step 1: all quiz_answers for user's attempts
    const { data: answers, error: aErr } = await _sb
      .from('quiz_answers')
      .select('attempt_id, question_id')
      .in('attempt_id', attemptIds);
    if (aErr || !answers?.length) return;

    // Step 2: topics for each unique question
    const qIds = [...new Set(answers.map(a => a.question_id))];
    const { data: qRows, error: qErr } = await _sb
      .from('questions')
      .select('id, topic')
      .in('id', qIds);
    if (qErr || !qRows?.length) return;

    // Step 3: map question id → raw DB topic value
    const qTopicMap = {};
    qRows.forEach(q => { if (q.topic) qTopicMap[q.id] = q.topic; });

    // Step 4: count distinct attempt IDs per raw DB topic value
    const sets = {};
    answers.forEach(a => {
      const dbTopic = qTopicMap[a.question_id];
      if (!dbTopic) return;
      if (!sets[dbTopic]) sets[dbTopic] = new Set();
      sets[dbTopic].add(a.attempt_id);
    });

    _topicAttemptCounts = {};
    Object.keys(sets).forEach(k => { _topicAttemptCounts[k] = sets[k].size; });

    // Stash unique question IDs so loadAnsweredQuestions() can reuse them
    _answeredQuestionIds = new Set(answers.map(a => a.question_id));
  } catch (e) { console.warn('loadTopicAttemptCounts error:', e); }
}

// Fetch full question data for every question the user has answered,
// filtered by their current exam level so the wrong exam's items never appear.
async function loadAnsweredQuestions() {
  if (!_sb || !_answeredQuestionIds.size) {
    _answeredQuestionsCache = [];
    return;
  }
  try {
    const examLevel = getExamLevelForDB();
    const ids = [..._answeredQuestionIds];
    const { data: qRows, error } = await _sb
      .from('questions')
      .select('id,subject,topic,question,choice_a,choice_b,choice_c,choice_d,choice_e,correct_answer,explanation,exam_level')
      .in('id', ids)
      .or(`exam_level.ilike.${examLevel},exam_level.ilike.both`);
    if (error) { console.warn('loadAnsweredQuestions error:', error.message); _answeredQuestionsCache = []; return; }
    _answeredQuestionsCache = (qRows || []).map(mapRow);
  } catch (e) { console.warn('loadAnsweredQuestions error:', e); _answeredQuestionsCache = []; }
}

// Fetch all quiz_answers for one attempt, then join questions manually.
// Uses two queries to avoid requiring a FK constraint in Supabase.
async function loadAttemptDetails(attemptId) {
  if (!_sb || !attemptId) return [];
  try {
    // Step 1 — get every answer row for this attempt
    const { data: answerRows, error: aErr } = await _sb
      .from('quiz_answers')
      .select('id, question_id, selected_answer, is_correct')
      .eq('attempt_id', attemptId)
      .order('id', { ascending: true });
    if (aErr) { console.warn('loadAttemptDetails (answers):', aErr.message); return []; }
    if (!answerRows || !answerRows.length) return [];

    // Step 2 — fetch the matching question rows
    const qIds = [...new Set(answerRows.map(a => a.question_id))];
    const { data: qRows, error: qErr } = await _sb
      .from('questions')
      .select('id, subject, question, choice_a, choice_b, choice_c, choice_d, correct_answer, explanation')
      .in('id', qIds);
    if (qErr) { console.warn('loadAttemptDetails (questions):', qErr.message); }

    // Step 3 — merge by question_id
    const qMap = {};
    (qRows || []).forEach(q => { qMap[q.id] = q; });
    return answerRows.map(a => ({ ...a, question: qMap[a.question_id] || null }));
  } catch (e) { console.warn('loadAttemptDetails error:', e); return []; }
}

// Navigate to the detail screen for a specific attempt
async function openAttemptDetail(attemptId, examType, score, total, attemptedAt) {
  examType = decodeURIComponent(examType || '');
  attemptedAt = decodeURIComponent(attemptedAt || '');
  showLoading('Loading quiz review…');
  const answers = await loadAttemptDetails(attemptId);
  hideLoading();
  renderAttemptDetail({ attemptId, examType, score: Number(score), total: Number(total), attemptedAt }, answers);
  goTo('attempt-detail');
}

// Render the detail screen content
function renderAttemptDetail(attempt, answers) {
  const titleEl = document.getElementById('detail-title');
  const metaEl = document.getElementById('detail-meta');
  const listEl = document.getElementById('detail-list');
  if (!titleEl || !listEl) return;

  const pct = attempt.total > 0 ? Math.round((attempt.score / attempt.total) * 100) : 0;
  const d = parseAttemptedAt(attempt.attemptedAt);
  const dateStr = d ? d.toLocaleDateString('en-PH', { timeZone: PH_TZ, month: 'long', day: 'numeric', year: 'numeric' }) : '';
  const timeStr = d ? d.toLocaleTimeString('en-PH', { timeZone: PH_TZ, hour: '2-digit', minute: '2-digit' }) : '';

  const displayName = getTopicDisplayName(attempt.examType) || attempt.examType || 'Quiz Review';
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : pct >= 40 ? '💪' : '📚';
  const scoreColor = pct >= 70 ? 'var(--green-dk)' : pct >= 40 ? 'var(--yellow-dk)' : 'var(--red-dk)';

  titleEl.textContent = displayName;
  if (metaEl) metaEl.innerHTML =
    `<span style="color:${scoreColor};font-weight:800;">${emoji} ${pct}% &nbsp;·&nbsp; ${attempt.score}/${attempt.total} correct</span>` +
    (dateStr ? `<span style="color:var(--ink-lt);">&nbsp;·&nbsp;${dateStr}${timeStr ? ', ' + timeStr : ''}</span>` : '');

  if (!answers.length) {
    listEl.innerHTML = '<div style="text-align:center;color:var(--ink-lt);padding:40px 20px;font-size:13px;font-weight:700;">No answer data found for this attempt.</div>';
    return;
  }

  // choice_a/b/c/d are the actual column names in the questions table
  const choiceMap = { A: 'choice_a', B: 'choice_b', C: 'choice_c', D: 'choice_d' };

  listEl.innerHTML = '<div style="padding:8px 16px 0;"><div class="section-title">📋 Question Review</div></div>' +
    answers.map((row, i) => {
      const q = row.question;
      if (!q) return `<div class="review-item wrong" style="margin:8px 16px;"><div class="review-q">${i + 1}. (Question data unavailable)</div></div>`;

      const correctKey = choiceMap[(q.correct_answer || 'A').toUpperCase().trim()];
      const correctText = q[correctKey] || q.correct_answer || '';
      const selectedKey = choiceMap[(row.selected_answer || '').toUpperCase().trim()];
      const selectedText = q[selectedKey] || row.selected_answer || '—';
      const ok = row.is_correct;

      return `<div class="review-item ${ok ? 'correct' : 'wrong'}" style="margin:8px 16px;">
        ${q.subject ? `<div class="quiz-subject-tag" style="margin-bottom:6px;font-size:10px;">${q.subject}</div>` : ''}
        <div class="review-q">${i + 1}. ${q.question}</div>
        <div class="review-ans" style="margin-top:6px;color:${ok ? 'var(--green-dk)' : 'var(--red-dk)'};">
          ${ok ? '✅' : '❌'} Your answer: <strong>${row.selected_answer}. ${selectedText}</strong>
        </div>
        ${!ok ? `<div class="review-ans" style="color:var(--green-dk);margin-top:4px;">
          ✔ Correct answer: <strong>${q.correct_answer}. ${correctText}</strong>
        </div>` : ''}
        ${q.explanation ? `<div class="review-expl">${q.explanation}</div>` : ''}
      </div>`;
    }).join('');
}

// Navigate back to the previous screen
function goBack() { goTo(_prevScreen || 'home'); }

// ── Quiz History rendering ──
function getTopicDisplayName(topic) {
  const map = {
    'grammar': 'Grammar & Usage',
    'vocabulary': 'Vocabulary',
    'reading': 'Reading Comprehension',
    'basicops': 'Basic Math',
    'wordprobs': 'Word Problems',
    'logic': 'Logic & Patterns',
    'wordassoc': 'Word Association',
    'clerical': 'Clerical Ability',
    'geninfo': 'General Information',
    'mini-cse': 'Mini Civil Service Exam',
    'mock-test': 'Mock Test',
    'Mock Test \u2014 Professional': 'Mock Test (Pro)',
    'Mock Test \u2014 SubProfessional': 'Mock Test (SubPro)',
    'Mini Civil Service Exam': 'Mini CSE',
  };
  return map[topic] || topic;
}

function getTopicSubject(topic) {
  const t = (topic || '').toLowerCase();
  if (['grammar', 'vocabulary', 'reading', 'verbal'].some(k => t.includes(k))) return 'Verbal Ability';
  if (['basicops', 'wordprobs', 'math', 'numerical'].some(k => t.includes(k))) return 'Numerical Ability';
  if (['logic', 'wordassoc', 'analytical'].some(k => t.includes(k))) return 'Analytical Ability';
  if (t.includes('clerical')) return 'Clerical Ability';
  if (t.includes('geninfo') || t.includes('general')) return 'General Information';
  if (t.includes('mock')) return 'Mock Test';
  if (t.includes('mini') || t.includes('cse')) return 'Mini CSE';
  if (t.includes('random')) return 'Mixed Subjects';
  return 'Quiz';
}

function getSubjectIcon(topic) {
  const t = (topic || '').toLowerCase();
  if (['grammar', 'vocabulary', 'reading', 'verbal'].some(k => t.includes(k))) return '📝';
  if (['basicops', 'wordprobs', 'math', 'numerical'].some(k => t.includes(k))) return '🔢';
  if (['logic', 'wordassoc', 'analytical'].some(k => t.includes(k))) return '🧩';
  if (t.includes('clerical')) return '📋';
  if (t.includes('geninfo') || t.includes('general')) return '🏛️';
  if (t.includes('mock')) return '📋';
  if (t.includes('mini') || t.includes('cse')) return '🎯';
  if (t.includes('random')) return '🎲';
  return '📚';
}

// Returns 'mock' | 'mini' | 'quiz' for any exam_type value stored in the DB.
// DB stores the label string (e.g. 'Mock Test — Professional', 'Mini Civil Service Exam')
// OR the key string ('mock-test', 'mini-cse') depending on code version.
function getExamCategory(examType) {
  const t = (examType || '').toLowerCase();
  if (examType === 'mock-test' || t.startsWith('mock test') || t.includes('mock test')) return 'mock';
  if (examType === 'mini-cse' || examType === 'Mini Civil Service Exam' || t === 'mini civil service exam') return 'mini';
  return 'quiz';
}

function getFilteredAttempts() {
  switch (_historyFilter) {
    case 'mock':  return _attemptHistoryCache.filter(a => getExamCategory(a.exam_type) === 'mock');
    case 'mini':  return _attemptHistoryCache.filter(a => getExamCategory(a.exam_type) === 'mini');
    case 'quiz':  return _attemptHistoryCache.filter(a => getExamCategory(a.exam_type) === 'quiz');
    default:      return [..._attemptHistoryCache];
  }
}

function setHistoryFilter(filter) {
  _historyFilter = filter;
  // Update pill button styles
  document.querySelectorAll('.history-filter-btn').forEach(btn => {
    const active = btn.dataset.filter === filter;
    btn.style.cssText = active
      ? 'padding:5px 14px;border-radius:999px;border:none;font-size:11px;font-weight:800;cursor:pointer;background:var(--primary);color:#fff;'
      : 'padding:5px 14px;border-radius:999px;border:1.5px solid var(--primary);font-size:11px;font-weight:700;cursor:pointer;background:transparent;color:var(--primary);';
  });
  // Update subtitle
  const sub = document.getElementById('score-chart-sub');
  const labels = { all: 'All activity · last 20', quiz: 'Regular quizzes · last 20', mock: 'Mock tests · last 20', mini: 'Mini mock · last 20' };
  if (sub) sub.textContent = (labels[filter] || 'Last 20') + ' · CSE passing line at 80%';
  renderScoreChart();
  renderQuizHistory();
}

function renderScoreChart() {
  const canvas = document.getElementById('score-chart');
  if (!canvas) return;

  // Use last 20 attempts filtered by current filter, sorted oldest→newest
  const items = getFilteredAttempts()
    .sort((a, b) => parseAttemptedAt(a.attempted_at) - parseAttemptedAt(b.attempted_at))
    .slice(-20);

  // Readiness badge: average of last 10 scores
  const last10 = items.slice(-10);
  const readinessPct = last10.length
    ? Math.round(last10.reduce((s, a) => s + (a.total_questions > 0 ? (a.score / a.total_questions) * 100 : 0), 0) / last10.length)
    : null;

  const badge = document.getElementById('readiness-badge');
  if (badge) {
    if (readinessPct === null) {
      badge.textContent = 'No data yet';
      badge.style.cssText = 'font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;background:#f3f4f6;color:#6b7280;';
    } else if (readinessPct >= 80) {
      badge.textContent = '🏆 CSE Ready ' + readinessPct + '%';
      badge.style.cssText = 'font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;background:#dcfce7;color:#16a34a;';
    } else if (readinessPct >= 70) {
      badge.textContent = '✅ Near Ready ' + readinessPct + '%';
      badge.style.cssText = 'font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;background:#FEF3C7;color:#D97706;';
    } else {
      badge.textContent = '📚 Keep Studying ' + readinessPct + '%';
      badge.style.cssText = 'font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;background:#FEE2E2;color:#B91C1C;';
    }
  }

  // Resize canvas to actual display width
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || canvas.parentElement.offsetWidth || 300;
  const H = 140;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const PAD = { top: 12, right: 12, bottom: 28, left: 32 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const isDark = document.body.classList.contains('dark');
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,30,0.07)';
  const labelColor = isDark ? 'rgba(255,255,255,0.45)' : '#8B8CA8';
  const lineColor = isDark ? '#4a8fef' : '#2B4ACB';
  const passColor = isDark ? '#22d3a0' : '#16A34A';
  const dotFill = isDark ? '#4a8fef' : '#2B4ACB';
  const dotStroke = isDark ? '#111e3a' : '#fff';

  ctx.clearRect(0, 0, W, H);

  // Y-axis grid lines at 0, 25, 50, 70, 75, 100
  const yTicks = [0, 25, 50, 75, 100];
  ctx.font = '9px Nunito, sans-serif';
  ctx.textAlign = 'right';
  yTicks.forEach(tick => {
    const y = PAD.top + chartH - (tick / 100) * chartH;
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + chartW, y); ctx.stroke();
    ctx.fillStyle = labelColor;
    ctx.fillText(tick + '%', PAD.left - 4, y + 3.5);
  });

  // CSE passing line at 80%
  const passY = PAD.top + chartH - (80 / 100) * chartH;
  ctx.strokeStyle = passColor;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 4]);
  ctx.beginPath(); ctx.moveTo(PAD.left, passY); ctx.lineTo(PAD.left + chartW, passY); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = passColor;
  ctx.font = 'bold 9px Nunito, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('CSE 80%', PAD.left + 4, passY - 3);

  if (!items.length) {
    ctx.fillStyle = labelColor;
    ctx.textAlign = 'center';
    ctx.font = '12px Nunito, sans-serif';
    ctx.fillText('Take a quiz to see your trend', PAD.left + chartW / 2, PAD.top + chartH / 2 + 4);
    return;
  }

  // Compute x positions
  const pts = items.map((a, i) => {
    const pct = a.total_questions > 0 ? (a.score / a.total_questions) * 100 : 0;
    const x = items.length === 1
      ? PAD.left + chartW / 2
      : PAD.left + (i / (items.length - 1)) * chartW;
    const y = PAD.top + chartH - (Math.min(pct, 100) / 100) * chartH;
    return { x, y, pct };
  });

  // Fill gradient under line
  const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + chartH);
  grad.addColorStop(0, isDark ? 'rgba(74,143,239,0.25)' : 'rgba(43,74,203,0.15)');
  grad.addColorStop(1, isDark ? 'rgba(74,143,239,0)' : 'rgba(43,74,203,0)');
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, PAD.top + chartH);
  ctx.lineTo(pts[0].x, PAD.top + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Score line
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // Dots
  pts.forEach(p => {
    const dotColor = p.pct >= 80 ? passColor : (isDark ? '#f87171' : '#DC2626');
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
    ctx.strokeStyle = dotStroke;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // X-axis labels: first and last date
  if (items.length >= 2) {
    const fmt = d => parseAttemptedAt(d).toLocaleDateString('en-PH', { timeZone: PH_TZ, month: 'short', day: 'numeric' });
    ctx.fillStyle = labelColor;
    ctx.font = '9px Nunito, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(fmt(items[0].attempted_at), PAD.left, H - 4);
    ctx.textAlign = 'right';
    ctx.fillText(fmt(items[items.length - 1].attempted_at), PAD.left + chartW, H - 4);
  }

  // Legend
  const legend = document.getElementById('score-chart-legend');
  if (legend) {
    legend.innerHTML = `
      <span style="display:flex;align-items:center;gap:4px;font-size:10px;font-weight:700;color:${labelColor}">
        <span style="width:10px;height:10px;border-radius:50%;background:${lineColor};display:inline-block;"></span>Quiz Score
      </span>
      <span style="display:flex;align-items:center;gap:4px;font-size:10px;font-weight:700;color:${passColor}">
        <span style="width:14px;height:2px;border-top:2px dashed ${passColor};display:inline-block;"></span>CSE Pass Line
      </span>
      <span style="display:flex;align-items:center;gap:4px;font-size:10px;font-weight:700;color:${isDark ? '#f87171' : '#DC2626'}">
        <span style="width:10px;height:10px;border-radius:50%;background:${isDark ? '#f87171' : '#DC2626'};display:inline-block;"></span>Below Pass
      </span>`;
  }
}

function renderQuizHistory() {
  const list = document.getElementById('quiz-history-list');
  if (!list) return;

  let items = getFilteredAttempts();
  if (!items.length) {
    const emptyMsgs = { all: 'No history yet. Start a quiz!', quiz: 'No quizzes yet.', mock: 'No mock tests yet.', mini: 'No mini mock tests yet.' };
    list.innerHTML = `<div class="card" style="text-align:center;color:var(--ink-lt);font-size:13px;padding:24px;">${emptyMsgs[_historyFilter] || 'No history yet.'}</div>`;
    return;
  }

  // Sort
  if (_historySortField === 'date') {
    items.sort((a, b) => parseAttemptedAt(b.attempted_at) - parseAttemptedAt(a.attempted_at));
  } else if (_historySortField === 'score') {
    items.sort((a, b) => {
      const pctA = a.total_questions > 0 ? a.score / a.total_questions : 0;
      const pctB = b.total_questions > 0 ? b.score / b.total_questions : 0;
      return pctB - pctA;
    });
  }
  if (_historySortAsc) items.reverse();

  list.innerHTML = items.map(h => {
    const pct = h.total_questions > 0 ? Math.round((h.score / h.total_questions) * 100) : 0;
    const scoreClass = pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
    const scoreEmoji = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : pct >= 40 ? '📈' : '💪';
    const name = getTopicDisplayName(h.exam_type) || h.exam_type || 'Quiz';
    const subj = getTopicSubject(h.exam_type);
    const icon = getSubjectIcon(h.exam_type);
    const d = parseAttemptedAt(h.attempted_at);
    const dateStr = d ? d.toLocaleDateString('en-PH', { timeZone: PH_TZ, month: 'short', day: 'numeric', year: 'numeric' }) : '';
    const timeStr = d ? d.toLocaleTimeString('en-PH', { timeZone: PH_TZ, hour: '2-digit', minute: '2-digit' }) : '';
    const enc = encodeURIComponent;
    // Type badge
    const cat = getExamCategory(h.exam_type);
    const typeBadge = cat === 'mock'
      ? `<span style="font-size:9px;font-weight:800;padding:2px 6px;border-radius:999px;background:#FEE2E2;color:#B91C1C;letter-spacing:.3px;">MOCK TEST</span>`
      : cat === 'mini'
        ? `<span style="font-size:9px;font-weight:800;padding:2px 6px;border-radius:999px;background:#FEF3C7;color:#D97706;letter-spacing:.3px;">MINI MOCK</span>`
        : `<span style="font-size:9px;font-weight:800;padding:2px 6px;border-radius:999px;background:#E8EEFF;color:#2B4ACB;letter-spacing:.3px;">QUIZ</span>`;
    return `<div class="history-card score-${scoreClass}" style="position:relative;">
      <div title="Delete this record"
        onclick="event.stopPropagation();deleteAttempt('${h.id}')"
        style="position:absolute;top:8px;right:8px;z-index:2;width:22px;height:22px;border-radius:50%;background:rgba(185,28,28,0.1);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;color:#B91C1C;font-weight:900;line-height:1;">×</div>
      <div class="history-card-inner" onclick="openAttemptDetail('${h.id}','${enc(h.exam_type || '')}',${h.score},${h.total_questions},'${enc(h.attempted_at || '')}')" style="display:flex;align-items:center;gap:10px;width:100%;padding-right:28px;cursor:pointer;">
        <div class="history-score-badge ${scoreClass}" style="flex-direction:column;gap:1px;">
          <div style="font-size:14px;line-height:1;">${scoreEmoji}</div>
          <div style="font-size:13px;font-weight:900;">${pct}%</div>
        </div>
        <div class="history-info">
          <div class="history-topic" style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">${icon} ${name} ${typeBadge}</div>
          <div class="history-meta">${h.score}/${h.total_questions} correct &nbsp;·&nbsp; ${subj}</div>
          <div class="history-meta" style="margin-top:1px;">${dateStr}${timeStr ? ' · ' + timeStr : ''}</div>
        </div>
      </div>
    </div>`;
  }).join('');
  renderQuizTabHistory();
}

function renderQuizTabHistory() {
  const list = document.getElementById('quiz-tab-history-list');
  if (!list) return;
  // Quiz tab always shows regular quizzes only (mock/mini have their own tab)
  let items = _attemptHistoryCache.filter(a => getExamCategory(a.exam_type) === 'quiz');
  if (!items.length) {
    list.innerHTML = '<div class="card" style="text-align:center;color:var(--ink-lt);font-size:13px;padding:24px;">No quizzes yet. Start one!</div>';
    return;
  }
  items.sort((a, b) => parseAttemptedAt(b.attempted_at) - parseAttemptedAt(a.attempted_at));
  list.innerHTML = items.map(h => {
    const pct = h.total_questions > 0 ? Math.round((h.score / h.total_questions) * 100) : 0;
    const scoreClass = pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
    const scoreEmoji = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : pct >= 40 ? '📈' : '💪';
    const name = getTopicDisplayName(h.exam_type) || h.exam_type || 'Quiz';
    const subj = getTopicSubject(h.exam_type);
    const icon = getSubjectIcon(h.exam_type);
    const d = parseAttemptedAt(h.attempted_at);
    const dateStr = d ? d.toLocaleDateString('en-PH', { timeZone: PH_TZ, month: 'short', day: 'numeric', year: 'numeric' }) : '';
    const timeStr = d ? d.toLocaleTimeString('en-PH', { timeZone: PH_TZ, hour: '2-digit', minute: '2-digit' }) : '';
    const enc = encodeURIComponent;
    return `<div class="history-card score-${scoreClass}" style="position:relative;">
      <div title="Delete this record"
        onclick="event.stopPropagation();deleteAttempt('${h.id}')"
        style="position:absolute;top:8px;right:8px;z-index:2;width:22px;height:22px;border-radius:50%;background:rgba(185,28,28,0.1);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;color:#B91C1C;font-weight:900;line-height:1;">×</div>
      <div class="history-card-inner" onclick="openAttemptDetail('${h.id}','${enc(h.exam_type || '')}',${h.score},${h.total_questions},'${enc(h.attempted_at || '')}')" style="display:flex;align-items:center;gap:10px;width:100%;padding-right:28px;cursor:pointer;">
        <div class="history-score-badge ${scoreClass}" style="flex-direction:column;gap:1px;">
          <div style="font-size:14px;line-height:1;">${scoreEmoji}</div>
          <div style="font-size:13px;font-weight:900;">${pct}%</div>
        </div>
        <div class="history-info">
          <div class="history-topic">${icon} ${name}</div>
          <div class="history-meta">${h.score}/${h.total_questions} correct &nbsp;·&nbsp; ${subj}</div>
          <div class="history-meta" style="margin-top:1px;">${dateStr}${timeStr ? ' · ' + timeStr : ''}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

async function deleteAttempt(id) {
  if (!_sb) return;
  showModal(
    '🗑️ Delete Record',
    'This will permanently delete this attempt and all its answers. This cannot be undone.',
    [
      { label: 'Cancel', cls: 'secondary', action: hideModal },
      {
        label: 'Delete', cls: 'danger', action: async () => {
          hideModal();
          showLoading('Deleting…');
          try {
            // Delete related answers first (avoids FK constraint issues)
            await _sb.from('quiz_answers').delete().eq('attempt_id', id);
            const { error } = await _sb.from('quiz_attempts').delete().eq('id', id);
            hideLoading();
            if (error) { showToast('Delete failed: ' + error.message); return; }
            _attemptHistoryCache = _attemptHistoryCache.filter(a => a.id !== id);
            renderQuizHistory();
            renderMockHistory();
            requestAnimationFrame(renderScoreChart);
            showToast('Record deleted.');
          } catch (e) { hideLoading(); showToast('Delete failed.'); }
        }
      }
    ]
  );
}

function setMockHistoryFilter(filter) {
  _mockHistoryFilter = filter;
  document.querySelectorAll('.mock-filter-btn').forEach(btn => {
    const active = btn.dataset.filter === filter;
    btn.style.cssText = active
      ? 'padding:5px 14px;border-radius:999px;border:none;font-size:11px;font-weight:800;cursor:pointer;background:var(--primary);color:#fff;'
      : 'padding:5px 14px;border-radius:999px;border:1.5px solid var(--primary);font-size:11px;font-weight:700;cursor:pointer;background:transparent;color:var(--primary);';
  });
  renderMockHistory();
}

function renderMockHistory() {
  const histEl = document.getElementById('mock-history-list');
  if (!histEl) return;

  let items;
  if (_mockHistoryFilter === 'mock') {
    items = _attemptHistoryCache.filter(a => getExamCategory(a.exam_type) === 'mock');
  } else if (_mockHistoryFilter === 'mini') {
    items = _attemptHistoryCache.filter(a => getExamCategory(a.exam_type) === 'mini');
  } else {
    items = _attemptHistoryCache.filter(a => {
      const cat = getExamCategory(a.exam_type);
      return cat === 'mock' || cat === 'mini';
    });
  }

  items = [...items].sort((a, b) => parseAttemptedAt(b.attempted_at) - parseAttemptedAt(a.attempted_at));

  if (!items.length) {
    const msgs = { all: 'No mock or mini mock attempts yet.', mock: 'No mock tests yet.', mini: 'No mini mock tests yet.' };
    histEl.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📋</div>
      <div class="empty-title">${msgs[_mockHistoryFilter] || 'No attempts yet.'}</div>
      <div class="empty-sub">Complete a mock or mini mock test to see your history here</div>
    </div>`;
    return;
  }

  histEl.innerHTML = items.map(h => {
    const cat = getExamCategory(h.exam_type);
    const pct = h.total_questions > 0 ? Math.round((h.score / h.total_questions) * 100) : 0;
    const scoreClass = pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
    const scoreEmoji = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : pct >= 40 ? '📈' : '💪';
    const name = getTopicDisplayName(h.exam_type) || h.exam_type || 'Mock Test';
    const d = parseAttemptedAt(h.attempted_at);
    const dateStr = d ? d.toLocaleDateString('en-PH', { timeZone: PH_TZ, month: 'short', day: 'numeric', year: 'numeric' }) : '';
    const timeStr = d ? d.toLocaleTimeString('en-PH', { timeZone: PH_TZ, hour: '2-digit', minute: '2-digit' }) : '';
    const enc = encodeURIComponent;
    const resultLabel = pct >= 80 ? '✅ Passed' : '❌ Keep practicing';
    const typeBadge = cat === 'mock'
      ? `<span style="font-size:9px;font-weight:800;padding:2px 6px;border-radius:999px;background:#FEE2E2;color:#B91C1C;letter-spacing:.3px;">MOCK TEST</span>`
      : `<span style="font-size:9px;font-weight:800;padding:2px 6px;border-radius:999px;background:#FEF3C7;color:#D97706;letter-spacing:.3px;">MINI MOCK</span>`;
    return `<div class="history-card score-${scoreClass}" style="position:relative;">
      <div title="Delete this record"
        onclick="event.stopPropagation();deleteAttempt('${h.id}')"
        style="position:absolute;top:8px;right:8px;z-index:2;width:22px;height:22px;border-radius:50%;background:rgba(185,28,28,0.1);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;color:#B91C1C;font-weight:900;line-height:1;">×</div>
      <div class="history-card-inner" onclick="openAttemptDetail('${h.id}','${enc(h.exam_type || '')}',${h.score},${h.total_questions},'${enc(h.attempted_at || '')}')" style="display:flex;align-items:center;gap:10px;width:100%;padding-right:28px;cursor:pointer;">
        <div class="history-score-badge ${scoreClass}" style="flex-direction:column;gap:1px;">
          <div style="font-size:14px;line-height:1;">${scoreEmoji}</div>
          <div style="font-size:13px;font-weight:900;">${pct}%</div>
        </div>
        <div class="history-info">
          <div class="history-topic" style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">${cat === 'mock' ? '📋' : '🎯'} ${name} ${typeBadge}</div>
          <div class="history-meta">${h.score}/${h.total_questions} correct &nbsp;·&nbsp; ${resultLabel}</div>
          <div class="history-meta" style="margin-top:1px;">${dateStr}${timeStr ? ' · ' + timeStr : ''}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function sortHistory(field) {
  if (_historySortField === field) {
    _historySortAsc = !_historySortAsc;
  } else {
    _historySortField = field;
    _historySortAsc = false;
  }
  // Update button states
  document.querySelectorAll('.history-sort-btn').forEach(btn => {
    btn.classList.remove('active', 'asc', 'desc');
  });
  const activeBtn = document.getElementById(`sort-${field}-btn`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.classList.add(_historySortAsc ? 'asc' : 'desc');
  }
  renderQuizHistory();
}

// ═══════════════════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════════════════
function showLoading(text = 'Loading…') {
  const el = document.getElementById('loading-overlay');
  document.getElementById('loading-text').textContent = text;
  el.classList.add('show');
}
function hideLoading() { document.getElementById('loading-overlay').classList.remove('show'); }

let _toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

function showModal(title, body, actions) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  document.getElementById('modal-actions').innerHTML = actions.map((a, i) =>
    `<button class="modal-btn ${a.cls}" id="modal-btn-${i}">${a.label}</button>`
  ).join('');
  actions.forEach((a, i) => { document.getElementById('modal-btn-' + i).onclick = a.action; });
  document.getElementById('modal-overlay').classList.add('show');
}
function hideModal() { document.getElementById('modal-overlay').classList.remove('show'); }

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
async function initApp() {
  if (localStorage.getItem('cse_dark') === '1') toggleDarkMode();
  renderHome();
  if (!_sb) return;
  try {
    const { data: { session } } = await _sb.auth.getSession();
    if (!session?.user) {
      window.location.replace('index.html');
      return;
    }
    if (session?.user) {
      currentUser = session.user;
      const uid = session.user.id;

      // Detect user switch — clear all user-specific local data if different user
      const lastUid = localStorage.getItem('cse_last_user_id');
      if (lastUid && lastUid !== uid) {
        localStorage.removeItem('cse_stats');
        localStorage.removeItem('cse_quiz_scores');
      }
      localStorage.setItem('cse_last_user_id', uid);

      const name = session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Reviewer';
      document.getElementById('home-name').textContent = name;
      renderProfile();
      loadUserAvatar(); // load avatar photo from Supabase storage (non-blocking)
      _attemptHistoryCache = await loadQuizHistory();
      // Sync studied dates from Supabase attempt history — always REPLACE so streak
      // reflects only THIS user's actual activity, not any previous user's local data.
      const stats = getStats();
      const dbDates = _attemptHistoryCache.map(a =>
        getLocalDateStr(parseAttemptedAt(a.attempted_at))
      );
      // Deduplicate and replace (DB is source of truth for logged-in users)
      stats.studiedDates = [...new Set(dbDates)];
      saveStats(stats);
      // Load topics, attempt counts, and answered questions for Cards tab
      await Promise.all([loadAllSubjectTopics(), loadTopicAttemptCounts()]);
      await loadAnsweredQuestions();
      renderHome();
      renderQuizHistory();
      renderMockScreen();
    }
    _sb.auth.onAuthStateChange((_ev, sess) => {
      if (sess?.user) {
        currentUser = sess.user;
        const name = sess.user.user_metadata?.full_name || sess.user.email?.split('@')[0] || 'Reviewer';
        document.getElementById('home-name').textContent = name;
      }
    });
  } catch (e) { }
}

goTo('home');
initApp();

// ═══════════════════════════════════════════════════════════════
// MOBILE: COLLAPSING HOME HEADER ON SCROLL
// ═══════════════════════════════════════════════════════════════
(function initHomeScrollCollapse() {
  const homeScreen = document.getElementById('screen-home');
  if (!homeScreen) return;
  const scrollArea = homeScreen.querySelector('.scroll-area');
  const header = document.getElementById('home-header');
  if (!scrollArea || !header) return;
  scrollArea.addEventListener('scroll', () => {
    if (scrollArea.scrollTop > 80) {
      header.classList.add('header-collapsed');
    } else {
      header.classList.remove('header-collapsed');
    }
  }, { passive: true });
})();

// ═══════════════════════════════════════════════════════════════
// EXPOSE TO HTML onclick
// ═══════════════════════════════════════════════════════════════
Object.assign(window, {
  goTo, goToRecommendation,
  toggleMapSubject, expandMapSubject, collapseMapSubject,
  toggleQuizSubject,
  startSubjectQuiz, startQuizForTopic, startQuizForDBTopic, startRandomQuiz, handleMiniCSE, startMockTest,
  selectAnswer, quizNext, retryQuiz, generateNewQuiz, exitQuizResult, confirmExitQuiz, toggleBookmark,
  jumpToQuestion, sortHistory, renderScoreChart, setHistoryFilter, deleteAttempt,
  setMockHistoryFilter, renderMockHistory,
  loadFlashcards, flipCard, nextCard, prevCard,
  setBmFilter, removeBookmark,
  showPremiumModal, showAbout, toggleDarkMode, toggleExamType, confirmLogout,
  hideModal, showModal,
  openAttemptDetail, goBack, startQuizForDBTopic, refreshUserData,
  triggerAvatarUpload, handleAvatarFileSelect,
});
