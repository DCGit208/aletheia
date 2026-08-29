import type { Lesson } from "@/lib/data/types";

const bookId = "book-principles-doctrine-christ";
const doctrineOfMan = "book-doctrine-of-man";

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
    courseId: "course-fs-faith",
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [bookId, doctrineOfMan],
    body,
  };
}

export const faithModules = [
  {
    id: "mod-fs-2-pistis",
    courseId: "course-fs-faith" as const,
    number: 1,
    title: "Pistis and the image",
    description: "Credence, adoption, ’ĕlōhîm, image and likeness. Textbook Chapter 3, I–III.",
  },
  {
    id: "mod-fs-2-justified",
    courseId: "course-fs-faith" as const,
    number: 2,
    title: "Justified freely",
    description: "Glory come short, dikaioō, dikaiosynē, ransom in full. Textbook Chapter 3, IV–VI.",
  },
  {
    id: "mod-fs-2-heir",
    courseId: "course-fs-faith" as const,
    number: 3,
    title: "Heir and oneness",
    description: "Hebrews 1:8, the heir, John 17, the face of Christ. Textbook Chapter 3, VII–XI.",
  },
];

export const faithLessons: Lesson[] = [
  lesson(
    "les-fs-2-01",
    "mod-fs-2-pistis",
    1,
    "Pistis — credence that defines sons",
    50,
    `Central principle
Faith essentially defines our state as children of God. Greek pistis: credence. It is not a feeling you work up.

Key Scripture
Hebrews 6:1 — and of faith toward God.

Cluster
D1. Hebrews 6:1 with Galatians 4:5-7; Romans 8:15; Ephesians 1:5.

Read
Textbook Chapter 3, section I.

Teaching
This is Course 2 of Foundation School. One curriculum. The second of the six principles.

Toward God. The object is a Person. Not a system, not a method, not a school, not a mood you have learned to call faith.

Pistis is credence. In effect it defines our acceptance — true nature — and espousal: adoption as sons of God. Servant is not the name. Son is the name. Heir follows son.

Course 1 turned you from dead works. You do not turn into a vacuum. You turn toward God. That is why the two principles stand in the same verse.

Distinction
Faith as state and sonship vs faith as a feeling you manufacture.

Charge
Write, in your own words, what “toward God” does to the word faith that a definition without an object cannot do. Then write what pistis credits that a mood cannot credit.`,
  ),
  lesson(
    "les-fs-2-02",
    "mod-fs-2-pistis",
    2,
    "Acceptance, espousal, adoption",
    50,
    `Central principle
Because ye are sons, God hath sent forth the Spirit of His Son into your hearts, crying, Abba, Father. No more a servant, but a son; if a son, then an heir of God through Christ.

Key Scripture
Galatians 4:5-7; Romans 8:15; Ephesians 1:5.

Cluster
D1. Galatians 4:4-7; Romans 8:15-17; Ephesians 1:5.

Read
Textbook Chapter 3, section I, the adoption sentences.

Teaching
God sent forth His Son to redeem them that were under the law, that we might receive the adoption of sons. Predestinated unto the adoption of children by Jesus Christ to Himself, according to the good pleasure of His will.

Ye have not received the spirit of bondage again to fear, but the Spirit of adoption, whereby we cry, Abba, Father.

The Spirit in this cluster is already the cry of sonship. Course 3 will open the witness and the enduement. Do not wait for that course to refuse the name servant.

If children, then heirs: heirs of God, and joint-heirs with Christ. You will write “heir” as its own lesson. Hold the order here: son, then heir.

Distinction
Adoption as the Father’s doing vs a religious nickname you earn.

Charge
Write Galatians 4:7. Then write what you must stop calling yourself if son is the name and servant is not.`,
  ),
  lesson(
    "les-fs-2-03",
    "mod-fs-2-pistis",
    3,
    "’Ĕlōhîm — Let us make man",
    50,
    `Central principle
This acceptance is on the basis of our true nature from creation with respect to God. ’Ĕlōhîm said, Let us make man.

Key Scripture
Genesis 1:26.

Cluster
D2. Genesis 1:26-28.

Read
Textbook Chapter 3, section II, the ’ĕlōhîm sentences.

Teaching
Hebrew ’ĕlōhîm. The leaflet reads it as plural: Trinity. “Let us make” is not a committee of angels inventing a lesser thing. God speaks as God, and man is made in that image, after that likeness.

Let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.

Man is who he is by how he was designed and by Who designed him. That is the text. This school will not put a softer sentence in the place of Genesis 1:26.

Distinction
’Ĕlōhîm as God speaking as God vs a lesser maker of a lesser creature.

Charge
Write Genesis 1:26. Name Who speaks, what is made, and in whose image. Do not write a safer verse in its place.`,
  ),
  lesson(
    "les-fs-2-04",
    "mod-fs-2-pistis",
    4,
    "Image and likeness — like his Maker",
    50,
    `Central principle
God created man in His own image. Male and female created He them. Image. Likeness. Dominion.

Key Scripture
Genesis 1:26-28.

Cluster
D2. Genesis 1:26-28 with John 14:12; 1 John 4:17; Psalm 82:6; Romans 8:17; John 17:20-23.

Read
Textbook Chapter 3, section II.

Teaching
Genesis 1:27 — So God created man in his own image, in the image of God created he him; male and female created he them.

The Living Bible (TLB) gloss, kept as a gloss beside the KJV: “So God made man like his Maker. Like God did God make man; Man and maid did he make them.”

Genesis 1:28 — Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion.

John 14:12 — He that believeth on me, the works that I do shall he do also; and greater works than these shall he do, because I go unto my Father.

1 John 4:17 — as he is, so are we in this world.

Romans 8:17 — heirs of God, joint-heirs with Christ.

Teach the cluster as written. Do not empty Genesis to make it safe. Do not detach the later verses from the making.

Distinction
Image and likeness as the text states them vs a reduced man who is only a worshipper of a distant God.

Charge
What does Genesis 1:26 actually say, and what does it not say? Write the verse. Write the TLB as a gloss, marked TLB. Then write one sentence from John 14:12 or 1 John 4:17 that you will hold with the making, not against it.`,
  ),
  lesson(
    "les-fs-2-05",
    "mod-fs-2-pistis",
    5,
    "True nature — partakers",
    45,
    `Central principle
You are not being invited to invent another nature. You are being returned to the one Genesis named, in Christ.

Key Scripture
2 Peter 1:4.

Cluster
D3. 2 Peter 1:3-7.

Read
Textbook Chapter 3, section III.

Teaching
Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.

The leaflet places this with man’s true nature and with the glory he came short of through sin. Dikaiosynē, later in this course, is equity: impartiality to and conformity with the nature of God — original: back on course.

Partaker is not a tourist of divinity. It is the man restored to the nature Genesis named, having escaped the corruption.

Distinction
Partaker of the divine nature vs inventing another nature God did not make.

Charge
Write 2 Peter 1:4. Then write what “back on course” forces you to stop calling a new invention.`,
  ),
  lesson(
    "les-fs-2-06",
    "mod-fs-2-pistis",
    6,
    "Psalm 82:6 with John 10:34-35",
    50,
    `Central principle
I have said, Ye are gods; and all of you are children of the most High. The Scripture cannot be broken.

Key Scripture
Psalm 82:6; John 10:34-35.

Cluster
D4 with A1 of the opening. Psalm 82:6-7; John 10:34-36.

Read
Textbook Chapter 3, section II, the psalm and the Lord’s appeal.

Teaching
Jesus answered a charge of blasphemy by the writing: Is it not written in your law, I said, Ye are gods? If he called them gods, unto whom the word of God came, and the scripture cannot be broken.

Psalm 82:7 remains in the psalm: But ye shall die like men, and fall like one of the princes.

Teach 82:6 with 82:7 and with John 10. Do not detach the verse from the writing. Do not empty the verse to make it safe. The Lord would not let men set His person against the Scripture. Neither will this school.

Distinction
The verse as the Lord used it vs a slogan detached from the Word, or a verse so emptied that the Lord could not have appealed to it.

Charge
Write Psalm 82:6-7 and John 10:34-35 as one cluster. Then write what you must not say if you keep both verses and the Lord’s use of them.`,
  ),
  lesson(
    "les-fs-2-07",
    "mod-fs-2-justified",
    7,
    "Why did Jesus come?",
    50,
    `Central principle
Jesus came because the glory was come short. He did not come to invent a different creature. He came that the man made in the image might be justified freely and set back on course.

Key Scripture
Romans 3:23-24.

Cluster
D5. Romans 3:23-26.

Read
Textbook Chapter 3, section IV.

Teaching
For all have sinned, and come short of the glory of God; being justified freely by his grace through the redemption that is in Christ Jesus.

The glory come short is deviation from true nature. The leaflet will not let you answer “Why did Jesus come?” with a slogan that never names that glory.

He came because all have sinned. He came because the image-bearer came short. Justification is already in the same breath: freely, by grace, through the redemption that is in Christ Jesus.

You will open 1 Corinthians 11:7 in the next lesson as the glory named here. Hold the question until you can answer it from the cluster.

Distinction
Glory as true nature vs glory as a religious atmosphere.

Charge
Why did Jesus come? Answer in terms of glory and true nature, not a slogan. Write Romans 3:23-24 and reason it.`,
  ),
  lesson(
    "les-fs-2-08",
    "mod-fs-2-justified",
    8,
    "Man the image and glory of God",
    45,
    `Central principle
Man is the image and glory of God. That is the glory Romans 3:23 says was come short.

Key Scripture
1 Corinthians 11:7.

Cluster
D6 with D5. 1 Corinthians 11:7; Romans 3:23-24.

Read
Textbook Chapter 3, section IV, the glory clause.

Teaching
1 Corinthians 11:7 — man “is the image and glory of God.” The leaflet sets that clause as the glory named in Romans 3:23.

The immediate context of the chapter is headship and covering in the assembly. Do not skip the verse because its chapter is contested. The leaflet cites the clause. This school teaches the clause.

The glory come short is not a lost mood. It is deviation from the image and glory the text names.

Distinction
The identity clause the leaflet uses vs avoiding the verse because the chapter is argued.

Charge
Write 1 Corinthians 11:7 with Romans 3:23 as one paragraph. What glory was come short? Do not answer with a word you cannot put back on the verse.`,
  ),
  lesson(
    "les-fs-2-09",
    "mod-fs-2-justified",
    9,
    "Dikaioō — justified freely",
    50,
    `Central principle
Has man been justified? Yes. And freely. Dikaioō: render just or innocent, free from evil or guilt.

Key Scripture
Romans 3:24-26.

Cluster
D5. Romans 3:23-26.

Read
Textbook Chapter 3, section V.

Teaching
Justified: Greek dikaioō — render just or innocent. A derivative of dikaiosynē: righteousness, justification.

Being justified freely by his grace through the redemption that is in Christ Jesus. God hath set forth Christ to be a propitiation through faith in His blood, to declare His righteousness; that He might be just, and the justifier of him which believeth in Jesus.

Freely. By grace. Through redemption. The source answers the question. Do not preach a justification you must finish by labour. Labour belongs to study (Chapter 1). Innocence before God is free in Christ.

Distinction
Justification as God’s free rendering vs a righteousness you complete by religious work.

Charge
Has man been justified? Write the source’s answer. Then write what you must stop adding to “freely.”`,
  ),
  lesson(
    "les-fs-2-10",
    "mod-fs-2-justified",
    10,
    "Dikaiosynē — equity; back on course",
    45,
    `Central principle
Dikaiosynē is equity: impartiality to and conformity with the nature of God. Original: back on course.

Key Scripture
Romans 3:21-26 with 2 Peter 1:4.

Cluster
D3 and D5.

Read
Textbook Chapter 3, sections III and V, the equity sentences.

Teaching
Righteousness here is not a costume. It is conformity with the nature of God — the nature 2 Peter 1:4 named, the nature Genesis named.

Back on course. That is the leaflet’s original. You are not being offered a new species. You are being set on the line from which sin turned you.

The justifier is just. He does not declare righteous by a fiction that has no nature under it. He justifies the one who believes in Jesus, and the righteousness is conformity with His nature.

Distinction
Equity as conformity with God’s nature vs righteousness as a score you display.

Charge
Write what “back on course” means from dikaiosynē and 2 Peter 1:4 together. What course? Whose nature?`,
  ),
  lesson(
    "les-fs-2-11",
    "mod-fs-2-justified",
    11,
    "Apolutrōsis — ransom in full",
    50,
    `Central principle
There is no unpaid remainder on that ransom. Apolutrōsis: redemption; ransom in full.

Key Scripture
Romans 3:24.

Cluster
D5. Romans 3:24-26.

Read
Textbook Chapter 3, section V, the ransom sentences.

Teaching
Justified freely by His grace through the redemption that is in Christ Jesus. Greek apolutrōsis — ransom in full.

Has man been justified? The source answers: Yes. And freely. Through a ransom that is not partial.

You cannot add a second payment and still call it this redemption. You cannot treat the blood as a deposit you must finish.

Course 1 already laid Hebrews 9:14: the blood of Christ purges the conscience from dead works. This lesson names the ransom as full. Hold both.

Distinction
Ransom in full vs a redemption that still leaves you to complete the price.

Charge
Show apolutrōsis in Romans 3:24. Write the verse. Then write one sentence you will not say again if the ransom is in full.`,
  ),
  lesson(
    "les-fs-2-12",
    "mod-fs-2-justified",
    12,
    "You are the dikaiosynē of God now",
    50,
    `Central principle
So right now, you are the dikaiosynē of God in Christ. Present tense. Not an aspiration you visit on a good day.

Key Scripture
2 Corinthians 5:21.

Cluster
D7. 2 Corinthians 5:21 with Romans 3:24.

Read
Textbook Chapter 3, section VI.

Teaching
For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.

Course 1 laid the new creature. This lesson names the righteousness of that creature.

The leaflet’s present tense stands. Pistis credits this state. It does not wait for a mood to confirm it.

The next lesson will ask, according to Hebrews 1:8, what that makes you. Do not invent the answer here. Hold the verse until you can reason from the cluster.

Distinction
Present righteousness in Christ vs righteousness as a future costume.

Charge
Write 2 Corinthians 5:21. Then write what “right now” forbids you to say about yourself if you are in Him.`,
  ),
  lesson(
    "les-fs-2-13",
    "mod-fs-2-heir",
    13,
    "Hebrews 1:8 — what does that make you?",
    55,
    `Central principle
The source asks, after 2 Corinthians 5:21: according to Hebrews 1:8, what does that make you? It does not print the answer. Reason from the cluster. Do not invent a title.

Key Scripture
Hebrews 1:8; Hebrews 1:3.

Cluster
D8. Hebrews 1:1-8 with 2 Corinthians 5:21.

Read
Textbook Chapter 3, section VII.

Teaching
But unto the Son he saith, Thy throne, O God, is for ever and ever: a sceptre of righteousness is the sceptre of thy kingdom.

The Son is the brightness of His glory and the express image of His person.

You are the dikaiosynē of God in Christ. The Son is the express image. The Father addresses the Son as God. The sceptre is righteousness.

This school will not invent a title the source does not grant. You will write what the cluster forces. You will not write what a slogan wants.

Distinction
Reasoning from the cluster vs inventing a name the leaflet never printed.

Charge
You’re the dikaiosynē of God in Christ. According to Hebrews 1:8, what does that make you? Write the cluster. Write only what the cluster forces.`,
  ),
  lesson(
    "les-fs-2-14",
    "mod-fs-2-heir",
    14,
    "Who is heir? What is an heir?",
    50,
    `Central principle
If a son, then an heir of God through Christ. An heir is the one to whom the father’s estate belongs by sonship — not a hired man hoping for a wage.

Key Scripture
Galatians 4:5-7; Romans 8:17.

Cluster
D1 again. Galatians 4:4-7; Romans 8:15-17.

Read
Textbook Chapter 3, section VIII.

Teaching
Who is heir of God? The son. Galatians 4:7 — if a son, then an heir of God through Christ.

What is the meaning of “heir”? An heir is not a hired man hoping for a wage. An heir is the one to whom the father’s estate belongs by sonship. Romans 8:17: heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.

Do not make heir a metaphor for “someone who likes church.” Answer from the adoption cluster.

The owner’s charge on the heir stays with the image: heir (Romans 8:17), made after the image (Genesis 1:26-28), fearfully made (Psalm 139:14). Do not soften sonship into a polite nickname.

Distinction
Heir by sonship vs hireling by performance.

Charge
Who is heir of God? What is the meaning of heir? Write Galatians 4:7 and Romans 8:17. Then write what you must stop treating as a wage.`,
  ),
  lesson(
    "les-fs-2-15",
    "mod-fs-2-heir",
    15,
    "Liken John 17:20-23",
    55,
    `Central principle
Liken the prayer of oneness. The measure in the text is “as thou, Father, art in me, and I in thee.” Do not reduce it to an organizational merger.

Key Scripture
John 17:20-23.

Cluster
D9. John 17:20-23 with Genesis 1:26-28.

Read
Textbook Chapter 3, section IX.

Teaching
Neither pray I for these alone, but for them also which shall believe on me through their word; that they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me.

The glory which thou gavest me I have given them; that they may be one, even as we are one: I in them, and thou in me, that they may be made perfect in one; that the world may know that thou hast sent me, and hast loved them, as thou hast loved me.

Liken. Do not empty it into a feeling of togetherness. Glory given. I in them. Thou in me. Made perfect in one.

Course 3 will open the Spirit who shews “Mine.” Do not wait for that course to refuse a cheap oneness.

Distinction
Oneness as the Father and the Son are one vs a unity-event or a merger of organizations.

Charge
How would you liken the prayer of oneness in John 17:20-23? Write the likeness from the words. Do not submit a unity slogan.`,
  ),
  lesson(
    "les-fs-2-16",
    "mod-fs-2-heir",
    16,
    "The image in the face of Jesus Christ",
    50,
    `Central principle
Christ is the image of God. The glory of God is known in His face. Faith toward God is credence of this light — not a leap into the dark.

Key Scripture
2 Corinthians 4:4 and 4:6.

Cluster
D10. 2 Corinthians 4:3-6.

Read
Textbook Chapter 3, section X.

Teaching
The god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them.

God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.

The same God who said “Let there be light” has shined in our hearts. The god of this world blinds minds so that this light will not shine. That blindness is not a small inconvenience. It is the old opposition to the image.

Faith toward God is credence of this light, this image, this sonship, this free justification.

Distinction
The glory known in Christ’s face vs a leap into an unseen of your own invention.

Charge
Write 2 Corinthians 4:4 and 4:6. Then write what the god of this world is opposing when he blinds minds — and what pistis credits when the light shines.`,
  ),
  lesson(
    "les-fs-2-17",
    "mod-fs-2-heir",
    17,
    "Charge and examination of the principle",
    70,
    `Central principle
The second stone is laid when a man credits sonship, image, free justification, and the heir — toward God, not toward a system.

Key Scripture
Hebrews 6:1; Galatians 4:5-7; Genesis 1:26-28; Romans 3:23-24; 2 Corinthians 5:21; John 17:20-23.

Cluster
All of Course 2. Textbook Chapter 3.

Read
Chapter 3, section XI. Directed reading when the volumes are in your hand — assigned sections only, not a second course: The Doctrine of Man (already in the house); Why Men Die; True Nature of God; Who’s Jesus to You?

Teaching
This lesson is the examination of the principle, not a new doctrine.

You should now be able to teach, from Scripture:

1. Pistis as credence that defines sons — not a mood.
2. Adoption: no more servant, but a son; Abba.
3. ’Ĕlōhîm; Genesis 1:26-28 as written; image, likeness, dominion.
4. Partakers of the divine nature; back on course.
5. Psalm 82:6 with 82:7 and John 10.
6. Why Jesus came: glory / true nature come short.
7. Dikaioō freely; dikaiosynē as equity; apolutrōsis in full.
8. You are the righteousness of God now.
9. Hebrews 1:8 reasoned from the cluster, not a invented title.
10. Who is heir, and what heir means.
11. John 17:20-23 likened from the words.
12. The image in the face of Jesus Christ.

Companions are not a seventh course. Completing this course does not require finishing every page of the library.

The next principle is the doctrine of baptisms. The son this course named is baptized into Christ, then in water as a sign, then in the Spirit as witness.

Intensive: write the full page on each of the twelve. Academic Year: write the twelve as twelve tight paragraphs. Same doctrine.

Distinction
Completion of activities vs mastery. A certificate later will ask more than a click. Directed companion sections vs treating those books as this course.

Charge
Write the principle as you would teach it to a babe, then as you would stand behind it before a teacher. Answer: Why did Jesus come? Has man been justified? Who is heir? What does heir mean? How do you liken John 17:20-23? What does Genesis 1:26 actually say, and what does it not say? Do not submit a feeling in the place of the cluster.`,
  ),
];
