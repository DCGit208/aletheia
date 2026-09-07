import type { Lesson } from "@/lib/data/types";

const bookId = "book-principles-doctrine-christ";

function lesson(
  id: string,
  moduleId: string,
  number: number,
  title: string,
  durationMinutes: number,
  body: string,
): Lesson {
  return {
    id,
    courseId: "course-fs-hands",
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [bookId],
    body,
  };
}

export const handsModules = [
  {
    id: "mod-fs-4-when",
    courseId: "course-fs-hands" as const,
    number: 1,
    title: "When? — and the first occasions",
    description: "Resultant, not the foundation. Blessing men, offerings, ordaining. Textbook Chapter 5, I–IV.",
  },
  {
    id: "mod-fs-4-acts",
    courseId: "course-fs-hands" as const,
    number: 2,
    title: "Spirit, children, healing, miracles",
    description: "Deuteronomy 34; Matthew 19; Mark and Acts. Textbook Chapter 5, V–VIII.",
  },
  {
    id: "mod-fs-4-file",
    courseId: "course-fs-hands" as const,
    number: 3,
    title: "Gifts, the nine, the charge",
    description: "Imparting gifts and Spirit baptism. No tenth. Resultant practice. Textbook Chapter 5, IX–XII.",
  },
];

export const handsLessons: Lesson[] = [
  lesson(
    "les-fs-4-01",
    "mod-fs-4-when",
    1,
    "Resultant, not the foundation",
    75,
    `Central principle
Laying on of hands is among the first principles. It is viable only as you actualize the more grounding things. It plays a more resultant role, not substantively to the believer.

Key Scripture
Hebrews 6:2 — and of laying on of hands.

Read
Textbook Chapter 5, section I.

Teaching
This is Course 4 of Foundation School. One curriculum. The fourth of the six principles. When? Nine occasions. This lesson is not yet the nine. This lesson is why “when?” comes after Courses 1–3.

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

Hands do not invent the son. Hands do not replace metanoia. Hands do not replace pistis. Hands do not replace baptism into Christ, water as figure, or the Spirit as witness. A man who has not laid those stones and then treats hands as if they were the house has not heard “when?”

The principle is among the first principles. Hebrews 6:2 names it in the same breath as baptisms, resurrection, and eternal judgment. The same verse is cited again under imparting gifts. The principle is real. The role is not the house. Do not skip the nine because they are resultant. Do not make the nine a substitute for the three stones already laid.

Course 3 named three essential baptisms. Into Christ saves the soul. Water is the figure after one is saved. The Spirit is witness of sonship and enduement; Christ is the baptizer in the Spirit. This course will show hands in certain accounts of Spirit baptism. Those accounts do not cancel Christ as Spirit-baptizer. They do not make hands the foundation. They are the ninth occasion, after “when?” has been heard.

This school names no required companion here. Directed reading later, if a volume is assigned. Completing this chapter does not wait on a book this school does not name. Companions are not a seventh course. Course 4 has no required companion.

Viable only as you actualize the more grounding fundaments — repentance from dead works, faith toward God, the doctrine of baptisms. Resultant, not substantively to the believer. A practice you have been using to replace those stones is not this principle. Name it in the charge and put it down. The nine will still be nine. They will not become the house.

Leaving the first principles is not forgetting them. It is not laying them again once they are laid. A man who never laid repentance, faith, and baptisms is not leaving them when he runs to hands. He is skipping them. Hebrews 6:1-2 will not let you treat the fourth name as the first house.

The six are named in order. Repentance from dead works. Faith toward God. The doctrine of baptisms. Then laying on of hands. Then resurrection. Then eternal judgment. “When?” answers after the first three are actualized. The principle is real. The role is resultant, not substantively to the believer. Do not skip the nine because they are resultant. Do not make the nine the house.

When? is the question. The answer is nine occasions, each its own text, only as viable as you actualize the more grounding things. This lesson will not preview Genesis 48 as if blessing men were the definition of the principle. It will not preview Acts 8 as if Spirit baptism by hands were the definition. It will hold “when?” until the three stones are named as already necessary. Course 4 has no required companion. Do not invent a required companion to make the course feel like Courses 1–3.

Labour
The Walk — one tight page. Which earlier principle must already be laid before you treat hands as if they were the foundation? Name the three that stand before this one. Write what you have been using hands to replace. Word drill: resultant / not the foundation / when?

Intensive — three pages on the same Scripture set. Page 1: write Hebrews 6:1-2 in full; reason the order — repentance, faith, baptisms, then hands. Page 2: what hands do not replace — metanoia, pistis, into Christ, water as figure, Spirit as witness; Christ remains Spirit-baptizer. Page 3: no required companion; write the practice you will not treat as the house. Same doctrine. Do not invent a tenth occasion to fill a page.

Distinction
Resultant practice vs foundation. The principle is real. The role is not the house.

Charge
Which earlier principle must already be laid before you treat hands as if they were the foundation? Name the three that stand before this one. Write what you have been using hands to replace.`,
  ),
  lesson(
    "les-fs-4-02",
    "mod-fs-4-when",
    2,
    "Blessing men — Genesis 48:14",
    75,
    `Central principle
Israel laid his hands on Ephraim and Manasseh and blessed Joseph’s sons. The first occasion is blessing men.

Key Scripture
Genesis 48:14.

Read
Textbook Chapter 5, section II.

Teaching
Israel stretched out his right hand, and laid it upon Ephraim’s head, who was the younger, and his left hand upon Manasseh’s head, guiding his hands wittingly; for Manasseh was the firstborn. The blessing is spoken. The hands are laid. Joseph objects. Israel will not uncross them.

Genesis 48:8-20. And Israel beheld Joseph’s sons, and said, Who are these? And Joseph said unto his father, They are my sons, whom God hath given me in this place. And he said, Bring them, I pray thee, unto me, and I will bless them. Now the eyes of Israel were dim for age, so that he could not see. And he brought them near unto him; and he kissed them, and embraced them. And Israel said unto Joseph, I had not thought to see thy face: and, lo, God hath shewed me also thy seed. And Joseph brought them out from between his knees, and he bowed himself with his face to the earth. And Joseph took them both, Ephraim in his right hand toward Israel’s left hand, and Manasseh in his left hand toward Israel’s right hand, and brought them near unto him. And Israel stretched out his right hand, and laid it upon Ephraim’s head, who was the younger, and his left hand upon Manasseh’s head, guiding his hands wittingly; for Manasseh was the firstborn. And he blessed Joseph, and said, God, before whom my fathers Abraham and Isaac did walk, the God which fed me all my life long unto this day, The Angel which redeemed me from all evil, bless the lads; and let my name be named on them, and the name of my fathers Abraham and Isaac; and let them grow into a multitude in the midst of the earth. And when Joseph saw that his father laid his right hand upon the head of Ephraim, it displeased him: and he held up his father’s hand, to remove it from Ephraim’s head unto Manasseh’s head. And Joseph said unto his father, Not so, my father: for this is the firstborn; put thy right hand upon his head. And his father refused, and said, I know it, my son, I know it: he also shall become a people, and he also shall be great: but truly his younger brother shall be greater than he, and his seed shall become a multitude of nations. And he blessed them that day, saying, In thee shall Israel bless, saying, God make thee as Ephraim and as Manasseh: and he set Ephraim before Manasseh.

Who lays hands? Israel. On whom? Ephraim and Manasseh — Joseph’s sons. What is spoken? The blessing of the God of Abraham and Isaac; the Angel which redeemed him; name and multitude. The hands are guided wittingly. The younger receives the right hand. Joseph would uncross them. Israel will not.

This is blessing men — not a technique you copy without the God who spoke to the patriarch. Do not turn the crossed hands into a tenth system. The occasion is the first in the teaching because this school names it first. It is not ordaining. It is not healing. It is not imparting Spirit baptism. Blessing men remains blessing men.

Eyes dim for age. He kissed them and embraced them. He blessed Joseph and the lads. I know it, my son, I know it. The account will not be reduced to a gesture-manual. The God who fed him all his life long is in the mouth of the blessing. If you submit a method in the place of the account, you have left this lesson's Scripture.

Who are these? My sons, whom God hath given me in this place. Bring them, and I will bless them. God hath shewed me also thy seed. Joseph bows. Joseph arranges Ephraim toward Israel’s left and Manasseh toward his right. Israel crosses them wittingly. The Angel which redeemed me from all evil, bless the lads. Let my name be named on them. Grow into a multitude. Joseph displeased; he would remove the right hand. Not so, my father. Israel refused. The younger shall be greater. He set Ephraim before Manasseh. That is the teaching for this lesson. Not a tenth system. Not Course 1. Blessing men.

Labour
The Walk — one tight page. Write Genesis 48:14. Who lays hands? On whom? What is spoken? Do not submit a method in the place of the account. Word drill: blessing men / guided wittingly / the younger and the right hand.

Intensive — three pages on the same Scripture set. Page 1: write Genesis 48:8-20 in full; mark who, whom, the blessing spoken, the objection, the refusal. Page 2: blessing men as the account stands — not ordaining, not healing, not a tenth system from the crossed hands. Page 3: write the method you will not submit in the place of this account. Same doctrine.

Distinction
Blessing men as the account stands vs a ritual you invent from the gesture.

Charge
Write Genesis 48:14. Who lays hands? On whom? What is spoken? Do not submit a method in the place of the account.`,
  ),
  lesson(
    "les-fs-4-03",
    "mod-fs-4-when",
    3,
    "Offerings — Numbers 8:10",
    75,
    `Central principle
The children of Israel put their hands upon the Levites. The Levites are offered before the Lord. This is making offerings.

Key Scripture
Numbers 8:10.

Read
Textbook Chapter 5, section III.

Teaching
Thou shalt bring the Levites before the LORD: and the children of Israel shall put their hands upon the Levites. The hands serve the offering God commanded. Identification and presentation. They do not invent a priesthood, and they do not replace the grounding principles with a ceremony.

Numbers 8:5-15. And the LORD spake unto Moses, saying, Take the Levites from among the children of Israel, and cleanse them. And thus shalt thou do unto them, to cleanse them: Sprinkle water of purifying upon them, and let them shave all their flesh, and let them wash their clothes, and so make themselves clean. Then let them take a young bullock with his meat offering, even fine flour mingled with oil, and another young bullock shalt thou take for a sin offering. And thou shalt bring the Levites before the tabernacle of the congregation: and thou shalt gather the whole assembly of the children of Israel together: And thou shalt bring the Levites before the LORD: and the children of Israel shall put their hands upon the Levites: And Aaron shall offer the Levites before the LORD for an offering of the children of Israel, that they may execute the service of the LORD. And the Levites shall lay their hands upon the heads of the bullocks: and thou shalt offer the one for a sin offering, and the other for a burnt offering, unto the LORD, to make an atonement for the Levites. And thou shalt set the Levites before Aaron, and before his sons, and offer them for an offering unto the LORD. Thus shalt thou separate the Levites from among the children of Israel: and the Levites shall be mine. And after that shall the Levites go in to do the service of the tabernacle of the congregation: and thou shalt cleanse them, and offer them for an offering.

What is being offered? The Levites. Before whom? The LORD. Who put their hands upon them? The children of Israel — the whole assembly gathered. Aaron offers the Levites for an offering of the children of Israel, that they may execute the service of the LORD. The Levites then lay their hands upon the bullocks. Separation: the Levites shall be mine.

This is making offerings — identification and presentation — not a private ritual invented in a meeting. The hands here serve the offering God commanded. They do not invent a priesthood. Moses is told; the LORD speaks; the assembly is gathered; the tabernacle is the place. A meeting that invents hands-as-offering without this command has left this lesson's Scripture.

Do not flatten this occasion into blessing men. Genesis 48 was patriarch and lads and a spoken blessing. Numbers 8 is congregation, Levites, offering, service. Each occasion remains itself. Do not make this a substitute for baptism into Christ. The Levites are offered after they are cleansed as the LORD said. The grounding stones are not this ceremony.

The LORD spake unto Moses. Take the Levites from among the children of Israel, and cleanse them. Water of purifying, shave, wash, bullock, meat offering, sin offering. Whole assembly gathered before the tabernacle. Hands of the children of Israel upon the Levites. Aaron offers them that they may execute the service of the LORD. Levites’ hands on the bullocks. Separate them; they shall be mine. After that they go in to do the service. That is making offerings. A private ritual in a meeting that never heard this command is not this lesson. Hands here identify and present what God named. They do not invent a priesthood the LORD did not speak.

What is being offered? The Levites. Before whom? The LORD. The children of Israel put their hands upon them. That is the teaching for this lesson. Not blessing men. Not ordaining Joshua. Not a ceremony that replaces baptism into Christ. Each occasion remains itself.

Labour
The Walk — one tight page. Write Numbers 8:10. What is being offered, and before whom? What must you not let this occasion become? Word drill: offerings / identification / presentation / before the LORD.

Intensive — three pages on the same Scripture set. Page 1: write Numbers 8:5-15 in full; mark cleanse, assembly, hands on the Levites, Aaron’s offering, bullocks, mine. Page 2: making offerings as commanded — not a private ritual; not a priesthood invented by hands. Page 3: write what you will not let this occasion become in a meeting. Same doctrine.

Distinction
Hands on the offered vs a private ritual invented in a meeting.

Charge
Write Numbers 8:10. What is being offered, and before whom? What must you not let this occasion become?`,
  ),
  lesson(
    "les-fs-4-04",
    "mod-fs-4-when",
    4,
    "Ordaining — Numbers 27:18, 23",
    75,
    `Central principle
Joshua is already a man in whom is the spirit. Moses lays his hand and gives him a charge. Ordaining does not create the Spirit in the man.

Key Scripture
Numbers 27:18, 23.

Read
Textbook Chapter 5, section IV.

Teaching
The LORD said unto Moses, Take thee Joshua the son of Nun, a man in whom is the spirit, and lay thine hand upon him. He laid his hands upon him, and gave him a charge, as the LORD commanded by the hand of Moses. The Spirit is already named in the man before the hand. The charge is given as the LORD commanded. Before the priest. Before all the congregation.

Numbers 27:15-23. And Moses spake unto the LORD, saying, Let the LORD, the God of the spirits of all flesh, set a man over the congregation, Which may go out before them, and which may go in before them, and which may lead them out, and which may bring them in; that the congregation of the LORD be not as sheep which have no shepherd. And the LORD said unto Moses, Take thee Joshua the son of Nun, a man in whom is the spirit, and lay thine hand upon him; And set him before Eleazar the priest, and before all the congregation; and give him a charge in their sight. And thou shalt put some of thine honour upon him, that all the congregation of the children of Israel may be obedient. And he shall stand before Eleazar the priest, who shall ask counsel for him after the judgment of Urim before the LORD: at his word shall they go out, and at his word they shall come in, both he, and all the children of Israel with him, even all the congregation. And Moses did as the LORD commanded him: and he took Joshua, and set him before Eleazar the priest, and before all the congregation: And he laid his hands upon him, and gave him a charge, as the LORD commanded by the hand of Moses.

What is already true of Joshua before the hand? He is a man in whom is the spirit. What does the hand do? It is laid; a charge is given in their sight; some of Moses’ honour is put upon him; the congregation may be obedient. Moses did as the LORD commanded. The text will not let you make ordination a substitute for the Spirit already in the man.

Do not flatten this into Deuteronomy 34:9. That verse is the next occasion: imparting Spirit — Joshua full of the spirit of wisdom, for Moses had laid his hands upon him. Hold both. Do not invent a tenth occasion to sit between them. In this lesson: ordaining. A man in whom is the spirit. Charge. Before Eleazar. Before all the congregation. Sheep who have a shepherd.

The LORD, the God of the spirits of all flesh, sets the man. Moses asks. The LORD names Joshua. The hand follows the naming. If you treat hands as the creator of what God has not put in, you have left Numbers 27:18. Course 3 already taught that the Spirit is not sent into a man who has not been made a son. This occasion will not become a back door around that prerequisite.

That the congregation be not as sheep which have no shepherd. Go out, go in, lead out, bring in. Set him before Eleazar the priest, and before all the congregation; give him a charge in their sight. Put some of thine honour upon him, that all the congregation may be obedient. Urim before the LORD. At his word shall they go out and come in. Moses did as the LORD commanded. He took Joshua. He laid his hands. He gave him a charge. Ordaining here is charge, not creation of the Spirit. Deuteronomy 34:9 will say what it will say. Do not steal that verse into this lesson to flatten the teaching.

Labour
The Walk — one tight page. Write Numbers 27:18 and 27:23. What is already true of Joshua before the hand? What does the hand do? Word drill: a man in whom is the spirit / charge / as the LORD commanded.

Intensive — three pages on the same Scripture set. Page 1: write Numbers 27:15-23 in full; mark the request, the naming, the spirit already in the man, Eleazar, congregation, honour, charge. Page 2: ordaining does not create the Spirit — write the substitute you will refuse. Page 3: hold Numbers 27 beside Deuteronomy 34 without flattening; do not invent a tenth to explain them. Same doctrine.

Distinction
Charge laid on a man in whom is the spirit vs hands creating what God has not put in.

Charge
Write Numbers 27:18 and 27:23. What is already true of Joshua before the hand? What does the hand do?`,
  ),
  lesson(
    "les-fs-4-05",
    "mod-fs-4-acts",
    5,
    "Imparting the Spirit — Deuteronomy 34:9",
    75,
    `Central principle
Joshua was full of the spirit of wisdom; for Moses had laid his hands upon him. The occasion is imparting Spirit.

Key Scripture
Deuteronomy 34:9.

Read
Textbook Chapter 5, section V.

Teaching
Joshua the son of Nun was full of the spirit of wisdom; for Moses had laid his hands upon him: and the children of Israel hearkened unto him, and did as the LORD commanded Moses.

Deuteronomy 34:9. And Joshua the son of Nun was full of the spirit of wisdom; for Moses had laid his hands upon him: and the children of Israel hearkened unto him, and did as the LORD commanded Moses.

Numbers 27:18. And the LORD said unto Moses, Take thee Joshua the son of Nun, a man in whom is the spirit, and lay thine hand upon him.

Numbers 27:23. And he laid his hands upon him, and gave him a charge, as the LORD commanded by the hand of Moses.

Hold this next to Numbers 27. Joshua was a man in whom is the spirit before the charge; he is full of the spirit of wisdom after the hands. Do not flatten the two texts into one slogan. Do not invent a tenth occasion to explain them. Numbers 27 remains ordaining. Deuteronomy 34 remains imparting Spirit. The same Joshua. Two verses. Two things said.

What does Deuteronomy 34:9 force you to say that Numbers 27:18 does not say? He was full of the spirit of wisdom; for Moses had laid his hands upon him. Israel hearkened. They did as the LORD commanded Moses. What does Numbers 27:18 force you to say that Deuteronomy 34:9 does not say? He was already a man in whom is the spirit before the hand. The charge is given in their sight. Some of Moses’ honour is put upon him.

The fruit of the occasion is not a feeling in Moses. It is a people who hear the man charged. Hearkened. Did as the LORD commanded Moses. If you measure this occasion by a sensation in the one who laid hands, you have left the verse.

This is not Christian baptism in the Spirit as Course 3 named it — Christ the baptizer; witness of sonship; prerequisite new birth. This is the fourth occasion in the hands teaching: imparting Spirit, as Deuteronomy 34:9 states it. Course 3 is not cancelled. A tenth “bridge” occasion is not required to keep both courses. Teach the verse. Teach it beside Numbers 27. Stop.

Full of the spirit of wisdom — for Moses had laid his hands upon him. The “for” is in the verse. This school will not delete it to protect these passages, and will not delete these passages to protect the “for.” Already a man in whom is the spirit. Then full of the spirit of wisdom, for the hands. Two sentences. One Joshua. Israel hearkened unto him, and did as the LORD commanded Moses. The fruit is a hearing people, not a sensation in the one who laid hands.

Do not invent a tenth occasion named “the gap between spirit and wisdom.” Do not collapse both verses into “ordination equals Spirit.” Course 3’s agent remains Christ for baptism in the Holy Spirit. This occasion remains Deuteronomy 34:9. When? After the grounding things. Hands do not become the house because this verse used “for.”

Write Deuteronomy 34:9 beside Numbers 27:18. What does each force you to say that the other does not say? Already a man in whom is the spirit. Then full of the spirit of wisdom, for Moses had laid his hands. Israel hearkened. The fruit is not a feeling in Moses. Two texts. No tenth between them. No flatten.

Numbers 27 remains ordaining: charge, Eleazar, congregation, honour, as the LORD commanded. Deuteronomy 34 remains imparting Spirit: full of the spirit of wisdom, for the hands. Same Joshua. Do not steal either verse into the other lesson. Course 3 is not cancelled. Christ remains the baptizer in the Holy Spirit. This is the fourth occasion in the hands teaching, as the verse states it.

Labour
The Walk — one tight page. Write Deuteronomy 34:9 beside Numbers 27:18. What does each verse force you to say that the other does not say? Word drill: full of the spirit of wisdom / for Moses had laid his hands / hearkened.

Intensive — three pages on the same Scripture set. Page 1: write Deuteronomy 34:9 and Numbers 27:18, 23 in full; two columns — already true / after the hands. Page 2: do not flatten; do not invent a tenth; Israel hearkened is the fruit, not a feeling in Moses. Page 3: this occasion does not cancel Course 3 — Christ remains Spirit-baptizer. Same doctrine.

Distinction
Imparting Spirit as the verse states it vs collapsing Deuteronomy 34 into Numbers 27, or inventing a tenth to sit between them.

Charge
Write Deuteronomy 34:9 beside Numbers 27:18. What does each verse force you to say that the other does not say?`,
  ),
  lesson(
    "les-fs-4-06",
    "mod-fs-4-acts",
    6,
    "Blessing children — Matthew 19:13-15",
    75,
    `Central principle
He laid His hands on the children. The disciples rebuked the bringing. The Lord would not.

Key Scripture
Matthew 19:13-15.

Read
Textbook Chapter 5, section VI.

Teaching
Then were there brought unto Him little children, that He should put His hands on them, and pray: and the disciples rebuked them. But Jesus said, Suffer little children, and forbid them not, to come unto Me: for of such is the kingdom of heaven. And He laid His hands on them, and departed thence.

Matthew 19:13-15. Then were there brought unto him little children, that he should put his hands on them, and pray: and the disciples rebuked them. But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven. And he laid his hands on them, and departed thence.

Matthew 19:15 is the printed verse. The account is 13-15. He laid His hands on them. The disciples rebuked the bringing. The Lord would not. This is blessing children — not a dedication invented to replace new birth, and not a small thing you skip because the children are small.

What did the disciples do? They rebuked them that brought the children. What did the Lord do? He said suffer and forbid them not; of such is the kingdom of heaven; He laid His hands on them; He departed. What must you not let this occasion replace? Course 1. Receive Him. New birth. A rite that pretends to be repentance and faith for a child is not this lesson. Blessing children is blessing children.

He should put His hands on them, and pray. The bringing had a request: hands and prayer. The rebuke met that request. The Lord met the children. Of such is the kingdom of heaven is His sentence, not a slogan you paste on a ceremony He did not invent. He laid His hands on them. Then He departed thence. The account is short. Do not lengthen it with a system.

Do not flatten this into healing. Mark 6 and Mark 16 and Acts 5 are another occasion. Do not flatten this into blessing men. Genesis 48 is patriarch and Joseph’s sons. Little children brought to Jesus is these passages. Each occasion remains itself. Nine. No tenth.

Suffer little children, and forbid them not, to come unto Me. The disciples’ rebuke is in the text so that you will not repeat it and call it order. Of such is the kingdom of heaven. He laid His hands on them. He departed thence. 19:15 is printed; the account you teach is 13-15. Hands and pray was the bringing’s request. The Lord met it without inventing a dedication that replaces new birth.

Course 1 remains receive Him. A child is not saved by this occasion as if it were baptism into Christ. A child is not too small for the Lord to lay hands on. Skip this because they are small and you have taken the disciples’ part. Invent a rite that pretends to be repentance and faith and you have left this lesson's Scripture for a tenth. Blessing children as the Lord did. That is the occasion.

The disciples rebuked the bringing. The Lord said suffer, forbid them not, of such is the kingdom of heaven. He laid His hands on them. He departed. Matthew 19:13-15 is these passages, not 19:15 alone. Not healing. Not blessing men. Not Course 1. this occasion remains blessing children.

He should put His hands on them, and pray. That was the bringing. The rebuke met the bringing. The Lord met the children. Of such is the kingdom of heaven is His sentence, not a slogan pasted on a dedication He did not invent. Do not skip this because the children are small. Do not replace new birth with this occasion. Blessing children as the Lord did. Nine. No tenth.

Labour
The Walk — one tight page. Write Matthew 19:13-15. What did the disciples do? What did the Lord do? What must you not let this occasion replace? Word drill: suffer / forbid them not / laid His hands / of such is the kingdom.

Intensive — three pages on the same Scripture set. Page 1: write Matthew 19:13-15 in full; mark brought, hands, pray, rebuked, suffer, forbid not, kingdom, laid, departed. Page 2: blessing children — not Course 1 for a child; not a small thing skipped because they are small. Page 3: not healing, not blessing men — write the flatten you will refuse. Same doctrine.

Distinction
Blessing children as the Lord did vs a rite that pretends to be Course 1 for a child.

Charge
Write Matthew 19:13-15. What did the disciples do? What did the Lord do? What must you not let this occasion replace?`,
  ),
  lesson(
    "les-fs-4-07",
    "mod-fs-4-acts",
    7,
    "Healing — Mark 6:2, 5; 16:18; Acts 5:12",
    75,
    `Central principle
Mighty works by His hands. He laid His hands on a few sick and healed them. They shall lay hands on the sick. By the hands of the apostles many signs.

Key Scripture
Mark 6:2, 5; Mark 16:18; Acts 5:12.

Read
Textbook Chapter 5, section VII.

Teaching
Nazareth: many were astonished that such mighty works were wrought by His hands. He could there do no mighty work, save that He laid His hands upon a few sick folk, and healed them. The risen Lord’s word: they shall lay hands on the sick, and they shall recover. Acts 5:12 — by the hands of the apostles were many signs and wonders wrought among the people.

Mark 6:2. And when the sabbath day was come, he began to teach in the synagogue: and many hearing him were astonished, saying, From whence hath this man these things? and what wisdom is this which is given unto him, that even such mighty works are wrought by his hands?

Mark 6:5. And he could there do no mighty work, save that he laid his hands upon a few sick folk, and healed them.

Mark 16:18. They shall take up serpents; and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.

Acts 5:12. And by the hands of the apostles were many signs and wonders wrought among the people; (and they were all with one accord in Solomon’s porch.

Four texts. One occasion. Healing the sick. What unbelief did in Nazareth: He could there do no mighty work — save that He laid His hands upon a few sick folk, and healed them. The hands still did that. Astonishment at wisdom and mighty works by His hands sits in the same town that would not receive a mighty work beyond those few. Teach both sentences. Do not preach only the limit. Do not preach only the few as if Mark 6:2 had not named mighty works by His hands.

The risen Lord includes laying hands on the sick among the signs that follow them that believe. They shall recover. The apostles’ hands wrought many signs and wonders among the people. Solomon’s porch. One accord. This is not a substitute for repentance, faith, or baptism into Christ. It is an occasion in the teaching. Teach the texts. Do not invent a tenth healing system beside them.

A healing brand that no longer needs the verses has left this lesson's Scripture. Four references. One sentence each in The Walk charge. The occasion is healing — not miracles as Acts 19:11 will name them, not blessing children, not imparting gifts. Mark 16:18 has more in the verse than hands on the sick. This text is filed under healing. Keep it there. Do not build a tenth category from the rest of the verse.

He began to teach in the synagogue. Many hearing Him were astonished. From whence hath this man these things? What wisdom is this which is given unto Him, that even such mighty works are wrought by His hands? Then the limit: He could there do no mighty work, save the few sick healed by His hands. Unbelief in Nazareth did not erase the hands; it limited what it would receive. The risen word still says they shall recover. The apostles still wrought signs and wonders by their hands among the people.

This is not a substitute for repentance, faith, or baptism into Christ. A man healed who has not been baptized into Christ has not laid the third stone. Resultant. Teach the four texts. No tenth healing system. No brand that no longer needs Mark 6:2, 6:5, 16:18, and Acts 5:12.

Write the four references with one sentence each. What unbelief did in Nazareth: no mighty work, save a few sick healed by His hands. What the hands still did: those few were healed. Mighty works by His hands were still the astonishment of Mark 6:2. They shall recover. Signs and wonders by the apostles’ hands. One occasion. Not Acts 19:11.

Labour
The Walk — one tight page. Write the four references with one sentence each. Then write what unbelief did in Nazareth, and what the hands still did. Word drill: mighty works by His hands / a few sick / they shall recover / signs and wonders.

Intensive — three pages on the same Scripture set. Page 1: write Mark 6:2, Mark 6:5, Mark 16:18, and Acts 5:12 in full. Page 2: Nazareth — astonishment, no mighty work, save the few healed; the risen word; the apostles’ hands. Page 3: not a substitute for Courses 1–3; no tenth healing system; not Acts 19:11. Same doctrine.

Distinction
The four texts as one occasion vs a healing brand that no longer needs the verses.

Charge
Write the four references with one sentence each. Then write what unbelief did in Nazareth, and what the hands still did.`,
  ),
  lesson(
    "les-fs-4-08",
    "mod-fs-4-acts",
    8,
    "Miracles — Acts 19:11",
    75,
    `Central principle
God wrought special miracles by the hands of Paul. God wrought. By the hands.

Key Scripture
Acts 19:11.

Read
Textbook Chapter 5, section VIII.

Teaching
God wrought special miracles by the hands of Paul. The next verse tells of cloths from his body. The occasion this school names is performing miracles — Acts 19:11. Do not make Paul the source. Do not make the cloth a tenth occasion.

Acts 19:11-12. And God wrought special miracles by the hands of Paul: So that from his body were brought unto the sick handkerchiefs or aprons, and the diseases departed from them, and the evil spirits went out of them.

Who wrought? God. By whose hands? Paul’s. What tenth will you refuse to add from verse 12? A cloth-system. Handkerchiefs or aprons from his body; diseases departed; evil spirits went out. Verse 12 is in these passages so you will read what followed. The teaching says miracles, Acts 19:11. God wrought. By the hands. The cloth is not a tenth occasion. The man is not the source.

Special miracles. The text uses the word. This school will not invent a tenth category to explain “special.” It will also not pretend verse 11 can be taught if God is removed from the subject. God wrought. Paul is the hands. The sick and the possessed meet what God wrought. If you preach Paul as the fountain, you have inverted the verse. If you preach a cloth-ministry as a tenth category, you have left this teaching’s nine.

This is not the healing lesson. Healing the sick has its four texts. This is performing miracles, Acts 19:11. The sick appear in verse 12; the occasion remains the one this school names. Do not flatten healing and miracles to make the teaching neater. Do not skip verse 12 to protect verse 11. Read both. File one occasion.

Course 1–3 remain the house. Miracles do not invent the son. They do not replace metanoia. They do not replace baptism into Christ. Resultant. When? After the grounding things are actualized. A miracle-practice treated as the foundation is not this principle.

From his body were brought unto the sick handkerchiefs or aprons. Diseases departed. Evil spirits went out. Verse 12 is read. Verse 12 is not filed as a tenth occasion. This teaching named performing miracles — Acts 19:11. God wrought special miracles by the hands of Paul. Subject: God. Instrument: the hands of Paul. Occasion: miracles. Not a cloth-religion. Not Paul as fountain.

The healing lesson already took healing’s four texts. This lesson takes Acts 19:11. The sick in verse 12 do not merge the two occasions. Do not skip verse 12 to make verse 11 tidier. Do not preach verse 12 as if the teaching had ten names. God wrought. By the hands. That is the sentence you can teach without a tenth and without making the man the source.

Who wrought? God. By whose hands? Paul’s. What tenth will you refuse from verse 12? A cloth-system. Handkerchiefs or aprons, diseases departed, evil spirits went out — read it; do not treat it as occasion ten. Special miracles: the text’s word, not a tenth category. Paul is not the fountain. Course 1–3 remain the house. Miracles do not invent the son. They do not replace metanoia. They do not replace baptism into Christ. When? After the grounding things. A miracle-practice treated as the foundation is not this principle. The teaching says miracles, Acts 19:11. Keep the sentence. Refuse the tenth.

Acts 19:11-12 is these passages so verse 12 is read. The occasion this school names is performing miracles — by the hands. God wrought remains the subject if you teach both verses. A cloth-ministry filed as a tenth has left this lesson's Scripture. A Paul-as-source sermon has inverted the verse. Write Acts 19:11. Who wrought? By whose hands? What tenth will you refuse?

Labour
The Walk — one tight page. Write Acts 19:11. Who wrought? By whose hands? What tenth will you refuse to add from verse 12? Word drill: God wrought / by the hands of Paul / special miracles.

Intensive — three pages on the same Scripture set. Page 1: write Acts 19:11-12 in full; mark God, wrought, special miracles, hands, Paul, cloths, diseases, spirits. Page 2: Paul is not the source; the cloth is not a tenth. Page 3: these passages is not this lesson; write the flatten you will refuse and the foundation you will not make of miracles. Same doctrine.

Distinction
God wrought by the hands vs the man as the source, or a cloth-system beside the teaching.

Charge
Write Acts 19:11. Who wrought? By whose hands? What tenth will you refuse to add from verse 12?`,
  ),
  lesson(
    "les-fs-4-09",
    "mod-fs-4-file",
    9,
    "Imparting gifts — 1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2",
    75,
    `Central principle
The gift given by prophecy with the laying on of the hands of the presbytery. Stir up the gift by the putting on of Paul’s hands. Hebrews 6:2 names the principle and is cited again here.

Key Scripture
1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2.

Read
Textbook Chapter 5, section IX.

Teaching
Neglect not the gift that is in thee, which was given thee by prophecy, with the laying on of the hands of the presbytery. Stir up the gift of God, which is in thee by the putting on of my hands. Hebrews 6:2 names laying on of hands among the first principles. This teaching cites that same verse again under this occasion. The principle and the gift-occasion are not two religions. One teaching.

1 Timothy 4:14. Neglect not the gift that is in thee, which was given thee by prophecy, with the laying on of the hands of the presbytery.

2 Timothy 1:6. Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands.

Hebrews 6:2. Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

The gift is not to be neglected. It is to be stirred. Hands of the presbytery. Hands of Paul. Prophecy with the laying on. What is not to be neglected? The gift that is in thee. What is to be stirred? The gift of God, which is in thee by the putting on of my hands. Why is Hebrews 6:2 in these passages twice? Because this school names the principle among the six and cites the same verse again under imparting gifts. The principle is real. This occasion is one of the nine. Not two religions.

Do not treat a gift as if it were the foundation. Do not treat the foundation as if it forbade gifts. A man who has made a gift the house has not heard Course 4’s “when?” A man who has used Hebrews 6:1-2 to forbid the gift the verses name has not heard these passages. Neglect not. Stir up. The gift is in thee. Given by prophecy with the presbytery’s hands. In thee by Paul’s hands.

Timothy is not a tenth system. Two letters. Two sentences. One occasion: imparting gifts. The presbytery in one verse; Paul in the other. Prophecy with the laying on. Remembrance to stir up. This school will not invent a third gift-text to make a nicer triangle. It will not drop Hebrews 6:2 from these passages because it already appeared in the intro.

The gift that is in thee. Given thee by prophecy, with the laying on of the hands of the presbytery. The gift of God, which is in thee by the putting on of my hands. I put thee in remembrance that thou stir up. Neglect not. Two warnings, one occasion. Hebrews 6:2 names laying on of hands among the first principles and is cited again here so that the gift-occasion is not a second religion beside the principle.

Do not treat a gift as the foundation. Do not treat the foundation as if it forbade gifts. When? After Courses 1–3. A neglected gift is still not the house. A stirred gift is still not baptism into Christ. Resultant practice. One teaching.

What is not to be neglected? The gift that is in thee. What is to be stirred? The gift of God, which is in thee by the putting on of my hands. Why is Hebrews 6:2 here twice? The principle is among the six, and the same verse is cited again under this occasion. Presbytery. Paul. Prophecy with the laying on. Remembrance. Not two religions. Not a tenth gift-text. Not a new foundation.

1 Timothy 4:14 and 2 Timothy 1:6 are two sentences of one occasion: imparting gifts. The gift is in thee. Given by prophecy with the presbytery’s hands. In thee by Paul’s hands. Stir up. Neglect not. Hebrews 6:2 in these passages is not a second religion beside the intro. When? After the grounding things. A gift treated as the house has not heard “when?” A foundation that forbids this gift has not heard these passages.

Labour
The Walk — one tight page. Write 1 Timothy 4:14 and 2 Timothy 1:6. What is not to be neglected? What is to be stirred? Why is Hebrews 6:2 in these passages twice? Word drill: neglect not / stir up / presbytery / putting on of my hands.

Intensive — three pages on the same Scripture set. Page 1: write 1 Timothy 4:14, 2 Timothy 1:6, and Hebrews 6:2 in full. Page 2: gift with hands — prophecy, presbytery, Paul’s hands; not two religions. Page 3: not a new foundation; not a foundation that forbids the gift — write both refusals. Same doctrine.

Distinction
Gift with hands vs gift as a new foundation, or a foundation that has no room for the gift the verses name.

Charge
Write 1 Timothy 4:14 and 2 Timothy 1:6. What is not to be neglected? What is to be stirred? Why is Hebrews 6:2 in these passages twice?`,
  ),
  lesson(
    "les-fs-4-10",
    "mod-fs-4-file",
    10,
    "Imparting Spirit baptism — Acts 8:17-24; 9:17; 19:6",
    75,
    `Central principle
They laid hands; they received the Holy Ghost. Ananias on Saul. Paul at Ephesus. Simon’s money is in the account so you will not make this a market.

Key Scripture
Acts 8:17-24; Acts 9:17; Acts 19:6.

Read
Textbook Chapter 5, section X.

Teaching
Then laid they their hands on them, and they received the Holy Ghost. Simon offered money. Peter said the gift of God cannot be purchased. Teach the hands. Do not skip the rebuke.

Acts 8:17-24. Then laid they their hands on them, and they received the Holy Ghost. And when Simon saw that through laying on of the apostles’ hands the Holy Ghost was given, he offered them money, Saying, Give me also this power, that on whomsoever I lay hands, he may receive the Holy Ghost. But Peter said unto him, Thy money perish with thee, because thou hast thought that the gift of God may be purchased with money. Thou hast neither part nor lot in this matter: for thy heart is not right in the sight of God. Repent therefore of this thy wickedness, and pray God, if perhaps the thought of thine heart may be forgiven thee. For I perceive that thou art in the gall of bitterness, and in the bond of iniquity. Then answered Simon, and said, Pray ye to the Lord for me, that none of these things which ye have spoken come upon me.

Acts 9:17. And Ananias went his way, and entered into the house; and putting his hands on him said, Brother Saul, the Lord, even Jesus, that appeared unto thee in the way as thou camest, hath sent me, that thou mightest receive thy sight, and be filled with the Holy Ghost.

Acts 19:6. And when Paul had laid his hands upon them, the Holy Ghost came on them; and they spake with tongues, and prophesied.

Course 3 already taught that Christ baptizes in the Spirit, and that the Spirit may be given before water or after it. This occasion is imparting Spirit baptism by hands in these accounts. It does not cancel the agent Course 3 named. It does not make hands the foundation. It is the ninth in the teaching.

What does Simon want to buy? The power that on whomsoever he lays hands, he may receive the Holy Ghost. What must you refuse if the gift of God cannot be purchased? A market. Money perish with thee. Neither part nor lot. Heart not right. Repent of this wickedness. Gall of bitterness. Bond of iniquity. Simon is in the ninth account so that you will not make the ninth a market. Teach the hands. Do not skip the rebuke.

Ananias: Brother Saul — the Lord Jesus sent me, that thou mightest receive thy sight, and be filled with the Holy Ghost. Hands on Saul. Sight and filling. Paul at Ephesus: laid his hands; the Holy Ghost came on them; they spake with tongues, and prophesied. Three accounts. One occasion. Not a tenth. Not a substitute for new birth. Not Christ cancelled as baptizer.

Through laying on of the apostles’ hands the Holy Ghost was given — that is what Simon saw. He offered money for the power. Peter’s sentences are part of these passages: money perish with thee; thought the gift of God may be purchased; neither part nor lot; heart not right; repent of this wickedness; gall of bitterness; bond of iniquity. Teach the hands. Do not skip the rebuke.

Course 3: Christ baptizes in the Holy Spirit; Spirit before water or after it; prerequisite new birth. This ninth occasion is imparting Spirit baptism by hands in these accounts. It does not cancel that agent. It does not make hands the foundation. Samaria, Saul, Ephesus — one teaching, not three extra occasions.

What does Simon want to buy? The power that on whomsoever he lays hands, he may receive the Holy Ghost. Refuse the market. The gift of God cannot be purchased. Ananias was sent by the Lord Jesus. Paul laid hands at Ephesus; they spake with tongues and prophesied. Teach the hands. Do not skip the rebuke. Do not cancel Christ as Spirit-baptizer.

Labour
The Walk — one tight page. Write Acts 8:17-20, 9:17, and 19:6. What does Simon want to buy? What must you refuse if the gift of God cannot be purchased? Word drill: received the Holy Ghost / money perish / filled / tongues and prophesied.

Intensive — three pages on the same Scripture set. Page 1: write Acts 8:17-24, 9:17, and 19:6 in full. Page 2: Simon refused — part, lot, heart, repent, gall, bond; the gift cannot be purchased. Page 3: Christ remains Spirit-baptizer; hands are the ninth occasion, not the foundation, not a tenth. Same doctrine.

Distinction
The ninth occasion vs buying the gift, or making hands the agent in place of Christ.

Charge
Write Acts 8:17-20, 9:17, and 19:6. What does Simon want to buy? What must you refuse if the gift of God cannot be purchased?`,
  ),
  lesson(
    "les-fs-4-11",
    "mod-fs-4-file",
    11,
    "The nine as one teaching — no invented tenth",
    75,
    `Central principle
Nine occasions. Each its own text. No tenth. Blessing children is not healing. Ordaining is not buying the gift.

Key Scripture
Hebrews 6:2 with the nine texts.

Read
Textbook Chapter 5, section XI.

Teaching
Write them until you can teach them without a tenth. All these attest a record across Holy Scripture. Each occasion remains itself.

Genesis 48:14. And Israel stretched out his right hand, and laid it upon Ephraim’s head, who was the younger, and his left hand upon Manasseh’s head, guiding his hands wittingly; for Manasseh was the firstborn.

Numbers 8:10. And thou shalt bring the Levites before the LORD: and the children of Israel shall put their hands upon the Levites.

Numbers 27:18. And the LORD said unto Moses, Take thee Joshua the son of Nun, a man in whom is the spirit, and lay thine hand upon him.

Numbers 27:23. And he laid his hands upon him, and gave him a charge, as the LORD commanded by the hand of Moses.

Deuteronomy 34:9. And Joshua the son of Nun was full of the spirit of wisdom; for Moses had laid his hands upon him: and the children of Israel hearkened unto him, and did as the LORD commanded Moses.

Matthew 19:13-15. Then were there brought unto him little children, that he should put his hands on them, and pray: and the disciples rebuked them. But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven. And he laid his hands on them, and departed thence.

Mark 6:2. And when the sabbath day was come, he began to teach in the synagogue: and many hearing him were astonished, saying, From whence hath this man these things? and what wisdom is this which is given unto him, that even such mighty works are wrought by his hands?

Mark 6:5. And he could there do no mighty work, save that he laid his hands upon a few sick folk, and healed them.

Mark 16:18. They shall take up serpents; and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.

Acts 5:12. And by the hands of the apostles were many signs and wonders wrought among the people.

Acts 19:11. And God wrought special miracles by the hands of Paul.

1 Timothy 4:14. Neglect not the gift that is in thee, which was given thee by prophecy, with the laying on of the hands of the presbytery.

2 Timothy 1:6. Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands.

Hebrews 6:2. Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

Acts 8:17. Then laid they their hands on them, and they received the Holy Ghost.

Acts 9:17. And Ananias went his way, and entered into the house; and putting his hands on him said, Brother Saul, the Lord, even Jesus, that appeared unto thee in the way as thou camest, hath sent me, that thou mightest receive thy sight, and be filled with the Holy Ghost.

Acts 19:6. And when Paul had laid his hands upon them, the Holy Ghost came on them; and they spake with tongues, and prophesied.

1. Blessing men — Genesis 48:14. 2. Making offerings — Numbers 8:10. 3. Ordaining — Numbers 27:18, 23. 4. Imparting Spirit — Deuteronomy 34:9. 5. Blessing children — Matthew 19:13-15. 6. Healing the sick — Mark 6:2, 5; 16:18; Acts 5:12. 7. Performing miracles — Acts 19:11. 8. Imparting gifts — 1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2. 9. Imparting Spirit baptism — Acts 8:17-24; 9:17; 19:6.

If you added a tenth, strike it and name why it is not among the nine. Cloth is not a tenth. A crossed-hands technique is not a tenth. A healing brand is not a tenth. Buying the gift is refused in the ninth, not added as a tenth. One vague “hands” practice is not the teaching.

Labour
The Walk — one tight page. Write the nine with their texts from memory. No tenth. If you added one, strike it and name why it is not among the nine. Word drill: nine / each its own text / no tenth.

Intensive — three pages on the same Scripture set. Page 1: write the nine names with the key verses in full as printed above. Page 2: one flatten you refuse for each pair you have been merging (children/healing; ordaining/Deuteronomy 34; miracles/cloth). Page 3: strike every tenth; write why this school does not name it. Same doctrine.

Distinction
Nine as one teaching vs one vague “hands” practice, or a tenth invented to make the teaching neater.

Charge
Write the nine with their texts from memory. No tenth. If you added one, strike it and name why it is not among the nine.`,
  ),
  lesson(
    "les-fs-4-12",
    "mod-fs-4-file",
    12,
    "Charge — resultant practice",
    90,
    `Central principle
When? After the more grounding things are actualized. Hands remain among the first principles. They do not become the house.

Key Scripture
Hebrews 6:1-2.

Read
Chapter 5, section XII.

Teaching
This lesson is the examination of the principle, not a new doctrine. When? After the more grounding things are actualized.

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

You should now be able to teach, from Scripture:

1. Resultant, not the foundation. Viable after Courses 1–3. Hands do not invent the son, replace metanoia, replace pistis, or replace the three baptisms.
2. Blessing men — Genesis 48:14. Israel; Ephraim and Manasseh; the blessing spoken; hands guided wittingly.
3. Offerings — Numbers 8:10. Levites offered before the LORD; the congregation’s hands; identification and presentation.
4. Ordaining — Numbers 27:18, 23. A man in whom is the spirit; charge as the LORD commanded; before the priest and the congregation.
5. Imparting Spirit — Deuteronomy 34:9. Full of the spirit of wisdom, for Moses had laid his hands. Held beside Numbers 27, not flattened.
6. Blessing children — Matthew 19:13-15. The disciples rebuked; the Lord would not; not Course 1 for a child.
7. Healing — Mark 6:2, 5; 16:18; Acts 5:12. Nazareth limited; a few still healed; they shall recover; apostles’ hands.
8. Miracles — Acts 19:11. God wrought. By the hands of Paul. Cloth is not a tenth.
9. Imparting gifts — 1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2 twice in the teaching. Neglect not. Stir up.
10. Imparting Spirit baptism — Acts 8:17-24 (Simon refused); 9:17; 19:6. Does not cancel Christ as Spirit-baptizer.
11. Nine. No tenth. No required companion this school does not name.

Which earlier principle must already be laid before you treat hands as if they were the foundation? All three that stand before this one in Hebrews 6:1-2. A man who has not turned from dead works, who has not faith toward God, who has not been baptized into Christ, is not ready to make hands the house.

Name one practice you will not treat as a foundation. If the practice is one of these nine, keep it resultant. If it is a tenth you invented, put it down. The next principle is resurrection of the dead. Two kinds: spiritual and material.

Question 26: write the nine with their texts. No tenth. Question 27: which earlier principle must already be laid before you treat hands as if they were the foundation? All three that stand before this one — repentance from dead works, faith toward God, the doctrine of baptisms. Question 28: name one practice you will not treat as a foundation. Do not submit a feeling in the place of the teaching.

Deuteronomy 34:9 remains beside Numbers 27:18, 23 — not flattened. Acts 19:11 remains God wrought; cloth is not a tenth. Acts 8:17-24 remains Simon refused. Hebrews 6:2 remains twice: the principle among the six, and again under imparting gifts. No required companion. Christ remains Spirit-baptizer. Hands remain among the first principles. They do not become the house.

Write the nine with their texts. Blessing men. Offerings. Ordaining. Imparting Spirit. Blessing children. Healing. Miracles. Imparting gifts. Imparting Spirit baptism. Each its own text. No tenth. If the practice is one of these nine, keep it resultant. If it is a tenth you invented, put it down. Do not submit a feeling in the place of the teaching. The next principle is resurrection of the dead — two kinds, spiritual and material. This examination is not that chapter.

Which earlier principle must already be laid? All three that stand before this one in Hebrews 6:1-2. A man who has not turned from dead works, who has not faith toward God, who has not been baptized into Christ, is not ready to make hands the house. Name one practice you will not treat as a foundation. Completing activities is not mastery. The teaching is nine. No required companion.

Labour
The Walk — write the nine as nine tight paragraphs, then the three charges (Question 26–Question 28). Same doctrine. Word drill: resultant / nine / no tenth / when?

Intensive — write the nine as nine full pages, then the three charges. Use the same passages. Same doctrine. Do not invent a tenth page that is a tenth occasion. On the charge pages: the three stones already laid; one practice you will not treat as a foundation; Simon refused; God wrought; no companion this school does not name. Same doctrine.

Distinction
Completion of activities vs mastery. Resultant practice vs a new foundation made of hands.

Charge
Write the nine with their texts. Which earlier principle must already be laid before you treat hands as if they were the foundation? Name one practice you will not treat as a foundation. Do not submit a tenth. Do not submit a feeling in the place of the teaching.`,
  ),
];
