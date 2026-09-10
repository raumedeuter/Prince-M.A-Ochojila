import { ChapterNavDesktop, ChapterNavMobile } from '../components/ChapterNav.jsx'

const chapters = [
  { id: 'early-life', label: 'Early Life' },
  { id: 'education', label: 'Education' },
  { id: 'career', label: 'Career' },
  { id: 'politics', label: 'Political Career' },
  { id: 'family', label: 'Family' },
  { id: 'pastime', label: 'Pastime' },
  { id: 'community', label: 'Community' },
  { id: 'faith', label: 'Faith' },
  { id: 'farewell', label: 'Farewell' },
]

// Shared scroll-margin so anchored sections clear the sticky headers
const sectionClass = 'scroll-mt-32 lg:scroll-mt-28 pt-4 pb-14'

function Quote({ children }) {
  return (
    <blockquote className="border-l-2 border-oxblood pl-5 my-6 font-display italic text-lg text-ink/80">
      {children}
    </blockquote>
  )
}

export default function Biography() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* ---------- Header ---------- */}
      <div className="pt-14 pb-10 text-center border-b border-ink/10">
        <p className="text-sm tracking-wide text-oxblood mb-3">Biography</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          A Life of Service
        </h1>
        <p className="text-ink/60 mt-3">
          Prince Michael Adakole Ochojila (JP) &middot; 1945 &ndash; 2024
        </p>
      </div>

      <img
        src="/images/IMG-20240707-WA0085.jpg"
        alt="Prince Michael Adakole Ochojila"
        className="w-full max-w-md mx-auto rounded-sm my-10"
      />

      <ChapterNavMobile chapters={chapters} />

      <div className="flex gap-12">
        <ChapterNavDesktop chapters={chapters} />

        <div className="min-w-0 flex-1 max-w-2xl">
          <section id="early-life" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              Early Life
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              Prince Michael Adakole Ochojila (JP) passed on to glory on
              Saturday, the 15th of June 2024. A gem in the eyes of many and
              a foundation for many successes. In his lifetime, he affected
              a lot of people in several ways, and the result of his impact
              will last for a very long time.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              Papa was born October 20, 1945 in Ai-Oga, a small rural
              community which is part of the village of Oglewu, in Ohimini
              Local Government Area of Benue State, located a few
              kilometres from Otukpo town. His father, Chief Ochojila Ajaga,
              was the Oglewu community Chief who spent forty-five (45)
              years on the throne before his death on March 15, 1992. His
              mother, Onyechi Ochojila, was from Anmeji Okpiko, Ohimini
              Local Government Area; she died in 1998. He started life
              under humble circumstances. Most people were relatively poor,
              so he wasn't any worse off than his peers in the rural
              community that was his home.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              He was the third of seven children, and the third son out of
              five boys. He was a bright young boy who, in his own words,
              was very handsome, lovable, level headed, very obedient and
              always available to help out with chores whenever required.
              These attributes endeared him to many, especially his late
              cousin Mr. Odumu Ebegonye, who took him in and trained him in
              the fundamentals and whom he referred to as{' '}
              <em>"Okpanim"</em>, meaning <em>"my master."</em>
            </p>
            <p className="text-ink/75 leading-relaxed">
              In his good-naturedness, the first thing he did when he found
              his feet was to emulate his master by also bringing in his
              son, Mr. Oloche Ebegonye, to be under his tutelage.
            </p>
          </section>

          <section id="education" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              Education
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              The young Adakole attended St. Mary's Catholic Primary
              School, Otukpo in 1954&ndash;1957 and completed his primary
              school education at St. Francis Catholic Primary School,
              Otukpo in 1959. During his primary school days, he excelled
              in his academic activities, coming top three in his class,
              while also performing outstandingly in extracurricular
              activities &mdash; football, music (band), net-making, and
              gardening &mdash; even holding a position of responsibility
              as a gardener.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              He was committed to working hard and sponsoring himself to
              any level of education, so passionate was he about acquiring
              knowledge. He proceeded to Commonwealth College of Commerce,
              Jos in 1959&ndash;1960. Thereafter, he attended Medical
              Auxiliaries Training School, Kaduna, where he completed a
              course of instruction in 1961&ndash;1963 and obtained his
              certification as Dispensary Attendant. He went further to
              the Institute of Health, ABU, Zaria in 1967 to 1968.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              With hard work and doggedness, he proceeded to the University
              of Calabar, where he was awarded a Diploma certificate in
              Community Health in 1980&ndash;1982. His quest for
              self-development also led him to a certificate in Management
              and Supervision at the Institute for Health Policy Studies,
              University of California, San Francisco, USA, in 1990. He
              also attended a series of workshops and seminars on Health
              Management, Leadership and Effective Supervision organized by
              the Nigerian Institute of Management. He fully funded all of
              his subsequent academic endeavours after his primary school
              education.
            </p>
            <p className="text-ink/75 leading-relaxed">
              Papa was an avid reader who kept abreast with both domestic
              and international issues, and would often surprise you with
              the most recent information on current events. A collector
              of books, newspapers and magazines, he used his living room
              as his personal library, stocking different editions of the
              popular NewsWatch magazines and his favourite newspapers
              &mdash; a reading culture he imbibed in his children.
            </p>
          </section>

          <section id="career" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              Career in Jobs
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              After obtaining the requisite knowledge and skills from
              Medical Auxiliaries Training School, Kaduna, through
              self-sponsorship, the young Adakole was prepared to take on
              life's challenges. He received an offer for his first job,
              most likely in Benue State, on April 1, 1963.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              With additional qualifications, his career progressed, and
              his fervour for serving his country led him to different
              locations in Benue State, including Obagaji in Agatu Local
              Government Area, Ugbokpo, Apa Local Government Area, Adikpo,
              Kwande Local Government Area, Otukpo Local Government Area
              and Ogbadibo Local Government Area. There, he held different
              positions including Primary Health Care Worker, Head of
              Department for Health and Social Welfare, and Chief
              Community Health Officer and Administration.
            </p>
            <Quote>
              The Agatu people, who greatly regarded and believed in Papa,
              gave him the title "Likita," which translates to "Doctor,"
              in recognition of his job expertise, commitment, and
              duty-driven dedication.
            </Quote>
            <p className="text-ink/75 leading-relaxed mb-4">
              Papa voluntarily retired from the service of Benue State
              Unified Local Government Service as Chief Community Health
              Officer on GL14, on February 28, 1997, from Ogbadibo Local
              Government Area, his final posting.
            </p>
            <p className="text-ink/75 leading-relaxed">
              Upon his retirement, Papa was appointed member, Caretaker
              Committee, Ohimini Local Government Council on October 22,
              1998, and was assigned supervisor for Health and Human
              Services &mdash; a position he held for a tenure of three (3)
              years.
            </p>
          </section>

          <section id="politics" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              Political Career
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              Papa was retired but not tired. Following his retirement and
              the completion of his three-year tenure as Caretaker, Ohimini
              Local Government Council, Papa ventured into politics with a
              great zeal and passion. He was intelligent, articulate,
              charismatic, ambitious, driven, and determined &mdash; a
              great communicator who could efficiently connect with people
              from all walks of life. A natural-born leader, people drew
              their charisma and strength of character from him. And when
              the going got tough, he was the one who kept everyone calm
              and focused.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              He had a well-earned political history. Having worked in
              almost all 23 local government areas of Benue State, he had
              a lot of political goodwill to his credit during his early
              political career when the PDP was the ruling party, before
              he later joined the APC. In his quest to take government to
              the grassroots, he contested for the office of Local
              Government Chairman, but fate did not align with that plan.
              Nevertheless, he became a strong political kingmaker to
              reckon with, and his contributions toward taking his party
              to greater heights were a huge success.
            </p>
            <p className="text-ink/75 leading-relaxed">
              One of his close childhood friends, His Excellency Chief
              Stephen Lawani &mdash; a seasoned politician who was also
              the former Deputy Governor of Benue State, and who upholds
              fairness and integrity &mdash; admired the late Prince
              Adakole for his political astuteness and integrity, and grew
              closer to him. As a result, the late Prince saw Chief Lawani
              as a powerful political mentor. The good relationship
              between the two served as a springboard for the inclusion of
              numerous other politicians who collaborated as a team in
              projecting and influencing political goodwill to various
              local government areas in Benue State.
            </p>
          </section>

          <section id="family" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">Family</h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              In 1966, Papa left bachelorhood for good and married his
              sweetheart, our late mother Hadizatu Martha Ochojila (n&eacute;e
              Alhassan). Papa kept his teenage wife temporarily with his
              late Aunt, Mama Carew, who gave her basic training in home
              management, cooking, cleaning and other household chores
              &mdash; training that truly moulded her &mdash; while he went
              seeking livelihood in far and near locations.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              The couple lost their first child in 1967 and were
              subsequently blessed with seven children. Papa was a family
              man to the core, sacrificing personal comfort most times for
              the growth of his family. Due to his unwavering commitment to
              education, Papa ensured that all his children acquired
              quality education; if he had lost the opportunity of rising
              to the peak academically, his children would not suffer the
              same fate.
            </p>

            <img
              src="/images/gallery 18.jpg"
              alt="Family celebration"
              className="w-full max-w-sm mx-auto rounded-sm my-8"
            />

            <p className="text-ink/75 leading-relaxed mb-4">
              To his children, he was an available father &mdash; there for
              them in everything, including personally assessing their
              school work and double-checking examination results to
              ensure they were performing as expected. He was also a strict
              disciplinarian, never failing to correct his children when
              they veered off the right path, while instilling in them
              tenets instrumental to their growth as useful citizens.
              Unlike the prevalent nature of fathers, he did not force them
              to pursue any discipline just because he wanted it &mdash;
              instead, he gave his children the freewill to make their own
              choices, trusting God that their upbringing would direct them
              in the right path. He lived long enough to witness his
              children acquire Bachelor's degrees at some of the best
              Federal Universities in the country, trained in different
              disciplines across their various endeavours.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              To his late wife, our dear mother, he was a backbone and
              moral support. Even though, like every human, he erred once
              in a while, he always ensured he settled any differences they
              had in due time. He never drove her out nor considered
              leaving the marriage when they had misunderstandings &mdash;
              instead, he showed love and brought an aura of peace into the
              marriage. They supported each other for the growth of the
              family, and he created an environment where both were
              shareholders in the family's growth and the proper
              upbringing of the children.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              He was always very proud of his children and would fondly
              speak of them to everyone he knew &mdash; one of his greatest
              joys in life. Happily blessed with four sons-in-law and four
              daughters-in-law, Papa had an admirable father-son and
              father-daughter relationship with them. Due to his
              kind-heartedness, he made significant contributions toward
              educating many others &mdash; his younger siblings, cousins,
              nephews, nieces, in-laws and relatives &mdash; who had equal
              opportunity as his children. They all lived with him and his
              family, and back then it was difficult to distinguish between
              his biological children and the other children he raised.
            </p>
            <p className="text-ink/75 leading-relaxed mb-4">
              In addition to his immediate family, Papa cared very much for
              his larger family and stayed in touch with them through
              visits and phone calls throughout his lifetime &mdash; among
              them Mr. Nicholas Ochojila, Mama Titi Ebegonye, and Mama
              Ramatu Obekpa (Elias Ikoyi Obekpa's wife, former Ochi'Idoma),
              to mention but a few.
            </p>
            <p className="text-ink/75 leading-relaxed">
              Papa was known as one of the world's most tranquil beings. He
              bore no one any grudge and was held in high esteem by those
              who knew him. As an advocate of peace, many sought his
              counsel in dispute settlements in his community. He had the
              profound gift of listening carefully to each and all, and his
              efforts were focused on fostering a culture of peace,
              advocating for it, and re-establishing societal cohesiveness
              and confidence.
            </p>
          </section>

          <section id="pastime" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              His Favourite Pastime
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              As previously mentioned, Papa was exceptional in
              extracurricular activities during his school days. This was
              demonstrated when, in his lifetime, his compound became an
              arena for table tennis for both young and old. He was a
              table tennis enthusiast who liked to take on extreme
              challenges, playing the game with amazing skill and
              dexterity &mdash; a game he taught his children, who also
              became experts, both male and female. This game earned one
              of his daughters, Mrs Onyeche Egbodo, a trophy and a gold
              medal in a competitive outing during her secondary school
              days.
            </p>
            <p className="text-ink/75 leading-relaxed">
              Papa had a full-fledged table tennis board in his compound,
              which made him so popular in his neighbourhood in the '80s.
              His house, No. 3 Onitsha Street, Otukpo, became the hub for
              table tennis lovers who trooped in daily for a contest, while
              people watched with keen interest into the evenings, till
              night. He also had a great interest in the Ayo game
              (<em>"Iche"</em>), known as the "game of the intellectual"
              because it requires a lot of mathematical skill. Papa's
              talent in Ayo was unmatched and beyond compare &mdash; a game
              he played daily, and one he played until 7:00pm, a day
              before he passed.
            </p>
          </section>

          <section id="community" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              Community Development
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              As a community leader for a period of ten years, Papa was a
              pillar of strength, a towering source of support. He
              selflessly contributed to his community through his
              involvement in public projects, such as:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-ink/75 mb-4">
              <li>Construction of culverts at Ai-Gaji and Alaglanu.</li>
              <li>Primary Health Care at Ai-Oga, Oglewu.</li>
              <li>
                Rebuilding and renovation of the Primary School building at
                Ai-Oga, Oglewu.
              </li>
              <li>Joint effort in rural electrification of Ai-Oga, Oglewu.</li>
            </ol>
            <p className="text-ink/75 leading-relaxed">
              His generosity knew no bounds, cutting across Ohimini Local
              Government Area and beyond. In his own little way, he ensured
              that many were gainfully employed &mdash; his contributions
              toward empowering people are too numerous to list.
            </p>
          </section>

          <section id="faith" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              Commitment to the Things of God
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              In fulfilling his religious obligation, and as a devout
              Christian, Prince Michael Adakole Ochojila (JP) performed the
              holy pilgrimage to Israel in 1985, and was consequently
              bestowed the title Jerusalem Pilgrim &mdash; JP.
            </p>

            <img
              src="/images/gallery 22.jpg"
              alt="On pilgrimage in Jerusalem"
              className="w-full max-w-sm mx-auto rounded-sm my-8"
            />

            <p className="text-ink/75 leading-relaxed">
              In his later years, he was actively involved in church
              activities. He was an active member of the Catholic Men
              Organisation (CMO) in his community at St. Mary's Catholic
              Church, Otukpo, and often volunteered for causes the Church
              needed services for, both in cash and in kind. Papa was the
              CMO President from 2015&ndash;2019. He enjoyed the company of
              friends in the community, where he was respected as an
              elder, and never failed to lead by example whenever needed.
            </p>
          </section>

          <section id="farewell" className={sectionClass}>
            <h2 className="font-display text-2xl text-ink mb-4">
              That Sad Moment
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              Alas! April 2, 2021 remained a black day in Papa's lifetime.
              His light went out. His one and only beloved wife, whom he
              adored, late Martha Hadizatu Ochojila (n&eacute;e Alhassan),
              passed away. She was his friend, his sister, his companion,
              his confidante, his partner and his wife &mdash; his jewel of
              inestimable value, his "Chief of Staff." Her demise left a
              gaping hole in his heart.
            </p>
            <Quote>
              Many men have a wonderful wife, but no one has ever had a
              better one than I. She had a heart of gold, faithful,
              efficient, loyal and true. My wife is a loss that nothing can
              replace.
            </Quote>
            <p className="text-ink/75 leading-relaxed mb-8">
              And Papa's life was never the same without her.
            </p>

            <div className="text-center py-10 border-y border-ink/10">
              <p className="font-display text-xl text-ink/90 italic leading-relaxed max-w-lg mx-auto">
                Dear Papa, you were a husband, father, brother, uncle and
                friend to many, before death plucked you from our midst.
                Even though we are saddened by losing you, we take solace
                in the word of God which says:
              </p>
              <p className="font-display text-xl text-oxblood italic mt-4">
                "I am the resurrection and the life. The one who believes
                in me will live even if he dies." &mdash; John 11:25
              </p>
              <p className="text-ink/60 mt-6 text-sm">
                And we believe that you are living and resting at the
                bosom of our Lord and Saviour, Jesus Christ.
              </p>
            </div>

            <div className="flex justify-center gap-10 md:gap-16 mt-10 text-center">
              <div>
                <p className="font-display text-3xl text-oxblood">10</p>
                <p className="text-xs text-ink/50 mt-1">Children</p>
              </div>
              <div>
                <p className="font-display text-3xl text-oxblood">16</p>
                <p className="text-xs text-ink/50 mt-1">Grandchildren</p>
              </div>
              <div>
                <p className="font-display text-3xl text-oxblood">2</p>
                <p className="text-xs text-ink/50 mt-1">Brothers</p>
              </div>
              <div>
                <p className="font-display text-3xl text-oxblood">2</p>
                <p className="text-xs text-ink/50 mt-1">Sisters</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
