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
    75,
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

Hebrews 6:1 — “Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God.” Toward God. The object is a Person. Not a system, not a method, not a school, not a mood you have learned to call faith.

Faith essentially defines our state as children of God. Greek pistis: credence. In effect it defines our acceptance — true nature — and espousal: adoption as sons of God. Pistis is not a feeling you work up. It is credence that agrees with what God has done and who you are by that doing. Servant is not the name. Son is the name. Heir follows son.

Galatians 4:5-7 — “To redeem them that were under the law, that we might receive the adoption of sons. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.”

Romans 8:15 — “For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.”

Ephesians 1:5 — “Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will.”

Course 1 turned you from dead works. You do not turn into a vacuum. You turn toward God. That is why the two principles stand in the same verse. A definition of faith that has no object can be worked up in a room. Pistis credits a Person and a state: son, not servant; adoption, not a nickname you earn. You will write “heir” as its own lesson. Hold the order here: toward God, credence, son.

Do not preach Hebrews 11 as a pep talk in the place of this verse. This course will not walk the whole of that chapter. The principle is faith toward God as Hebrews 6:1 names it, opened by the adoption cluster set with pistis.

Toward God is the phrase that will not let faith be a method. A man can work up a feeling and call it faith while the object is a system, a school, a technique, or a room. Pistis is credence. Credence has an object. The object here is God. Course 1 turned you from dead works. You do not turn into a vacuum. You turn toward God. That is why repentance from dead works and faith toward God stand in one verse.

Acceptance, with pistis, is true nature. Espousal is adoption as sons of God. Galatians 4:6 — because ye are sons, God hath sent forth the Spirit of His Son into your hearts, crying, Abba, Father. Romans 8:15 — not the spirit of bondage again to fear, but the Spirit of adoption. Ephesians 1:5 — predestinated unto the adoption of children by Jesus Christ to Himself, according to the good pleasure of His will. Servant is not the name. Son is the name. Heir follows son, and you will write heir later. Hold the order: credence, toward God, son.

This course will not walk Hebrews 11 as a pep talk. The principle is not “heroes of faith” as a mood. The principle is faith toward God as Hebrews 6:1 names it, opened by this adoption cluster. Write what “toward God” does that a definition without an object cannot do. Write what pistis credits that a mood cannot credit.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine. The hours differ. The oracles do not.

The Walk — one page. Write, in your own words, what “toward God” does to the word faith that a definition without an object cannot do. Then write what pistis credits that a mood cannot credit. Quote Hebrews 6:1 and Galatians 4:7.

Intensive — three pages. Page 1 is that tight page. Page 2: write Galatians 4:5-7, Romans 8:15, and Ephesians 1:5 in full. Sit adoption, Abba, no more a servant, son, heir in one stretch. Do not open the heir lesson’s full charge here. Page 3: teach pistis as credence that defines sons, as you would stand behind it before a teacher. Refuse faith as a feeling you manufacture.

Write in your own hand. Quote Hebrews 6:1 and Galatians 4:7. The page is not a journal of feelings.

Distinction
Faith as state and sonship vs faith as a feeling you manufacture.

Charge
Write what you will teach: pistis is credence; it defines our state as children of God; the object is God; servant is not the name. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-02",
    "mod-fs-2-pistis",
    2,
    "Acceptance, espousal, adoption",
    75,
    `Central principle
Because ye are sons, God hath sent forth the Spirit of His Son into your hearts, crying, Abba, Father. No more a servant, but a son; if a son, then an heir of God through Christ.

Key Scripture
Galatians 4:5-7; Romans 8:15; Ephesians 1:5.

Cluster
D1. Galatians 4:4-7; Romans 8:15-17; Ephesians 1:5.

Read
Textbook Chapter 3, section I, the adoption sentences.

Teaching
Galatians 4:4-7 — “But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, To redeem them that were under the law, that we might receive the adoption of sons. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.”

God sent forth His Son to redeem them that were under the law, that we might receive the adoption of sons. Because ye are sons — not because ye climbed — the Spirit of His Son is sent into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son. The “wherefore” is not a suggestion. Servant is refused as the name. Son is the name. If a son, then an heir of God through Christ. You will write “heir” as its own lesson. Hold the order here: son, then heir.

Romans 8:15-17 — “For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father. The Spirit itself beareth witness with our spirit, that we are the children of God: And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.”

Ye have not received the spirit of bondage again to fear, but the Spirit of adoption, whereby we cry, Abba, Father. The Spirit in this cluster is already the cry of sonship. Course 3 will open the witness and the enduement. Do not wait for that course to refuse the name servant.

Ephesians 1:5 — “Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will.” Predestinated unto the adoption of children by Jesus Christ to Himself, according to the good pleasure of His will. Adoption is the Father’s doing. It is not a religious nickname you earn.

Fulness of the time. God sent forth His Son, made of a woman, made under the law, to redeem them that were under the law, that we might receive the adoption of sons. The sending is the Father’s. The redeeming is the Son’s. The receiving is adoption. Because ye are sons — already sons — the Spirit of His Son is sent into your hearts, crying, Abba, Father. The cry is not a technique you learn in order to become a son. The cry is because ye are sons.

“Wherefore thou art no more a servant, but a son.” Wherefore. The name servant is refused. If you keep calling yourself a servant as your standing, you are arguing with Galatians 4:7. If a son, then an heir of God through Christ. The “then” is sonship, not a wage. Romans 8:16-17 will add: the Spirit itself beareth witness with our spirit, that we are the children of God; if children, then heirs; heirs of God, and joint-heirs with Christ. Course 3 will open that witness as its own principle. Do not wait for Course 3 to refuse bondage again to fear.

Ephesians 1:5 is the Father’s will, not your climb: predestinated unto the adoption of children by Jesus Christ to Himself, according to the good pleasure of His will. Adoption is not a religious nickname you earn. Write Galatians 4:7. Write what you must stop calling yourself if son is the name.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write Galatians 4:7. Then write what you must stop calling yourself if son is the name and servant is not.

Intensive — three pages. Page 1 is that tight page. Page 2: write Galatians 4:4-7 and Romans 8:15-17 in full. Sit fulness of time, sent forth, redeem, adoption, Abba, no more a servant, children, heirs, joint-heirs. Keep “heir” named but not exhausted. Page 3: write Ephesians 1:5. Teach adoption as the Father’s doing, as you would stand behind it before a teacher.

Write in your own hand. Quote Galatians 4:7. The name you must stop using must be on the page.

Distinction
Adoption as the Father’s doing vs a religious nickname you earn.

Charge
Write what you will teach: because ye are sons, Abba; no more a servant, but a son; if a son, then an heir; adoption is by Jesus Christ according to His will. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-03",
    "mod-fs-2-pistis",
    3,
    "’Ĕlōhîm — Let us make man",
    75,
    `Central principle
This acceptance is on the basis of our true nature from creation with respect to God. ’Ĕlōhîm said, Let us make man.

Key Scripture
Genesis 1:26.

Cluster
D2. Genesis 1:26-28.

Read
Textbook Chapter 3, section II, the ’ĕlōhîm sentences.

Teaching
This acceptance or approval is on the basis of our true nature from creation with respect to God.

Genesis 1:26 — “And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.”

Hebrew ’ĕlōhîm. This teaching reads it as plural: Trinity. “Let us make” is not a committee of angels inventing a lesser thing. God speaks as God, and man is made in that image, after that likeness. This school will not put a softer sentence in the place of Genesis 1:26.

Let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. Dominion is in the making-verse, not in a later slogan. Man is who he is by how he was designed and by Who designed him. That is the text.

Genesis 1:27-28 remain in the cluster and will be opened as image and likeness in the next lesson. Do not skip 1:26 to make the making safe. Do not hedge “image” until it means only that man can worship from a distance. Who speaks? God — ’ĕlōhîm. What is made? Man. In whose image? Ours — the image of the Speaker. After whose likeness? Ours. What is given in the same breath? Dominion.

You will not write a safer verse in the place of this one. You will not treat “Let us make” as a figure you are free to empty. This teaching reads ’ĕlōhîm as God speaking as God. This school teaches that reading. A lesser maker of a lesser creature is not this verse.

Genesis 1:26 as written will not bear a hedge. And God said. Let us make man. In our image. After our likeness. And let them have dominion — fish, fowl, cattle, all the earth, every creeping thing. Who speaks? ’Ĕlōhîm. This teaching reads the plural as Trinity. “Let us make” is God speaking as God. It is not a committee of angels inventing a lesser thing. What is made? Man. In whose image? Ours. After whose likeness? Ours. What is given in the same breath? Dominion.

Man is who he is by how he was designed and by Who designed him. This acceptance — the acceptance pistis credits — is on the basis of that true nature from creation with respect to God. You will not write a safer verse in the place of this one. You will not empty “image” until it means only that man may worship from far. You will not empty “likeness” until it means only a moral hint. You will not move dominion to a later slogan as if 1:26 had not already said “let them have dominion.”

Genesis 1:27-28 remain and will be opened next. Do not skip 1:26 to make the making safe. Write the verse. Name Who speaks, what is made, and in whose image. This school will not put a softer sentence in the place of Genesis 1:26.

Acceptance or approval, as Chapter 3 opens it, is on the basis of this true nature from creation with respect to God. Pistis credits what ’ĕlōhîm said, not what a safer room would rather He had said. If you flatten “Let us make” into a figure, you have already begun to flatten image, likeness, and dominion. The next lesson will keep 1:26-28 as written and mark the TLB as a gloss. This lesson will not move. Who speaks. What is made. In whose image. Dominion in the same breath.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write Genesis 1:26. Name Who speaks, what is made, and in whose image. Do not write a safer verse in its place.

Intensive — three pages. Page 1 is that tight page. Page 2: write Genesis 1:26-28 in full. Keep the making as written. Do not hedge image, likeness, or dominion. Page 3: teach ’ĕlōhîm — plural, Trinity, God speaking as God — as you would stand behind it before a teacher. Refuse a committee of angels.

Write in your own hand. Quote Genesis 1:26 as written. The page is not a journal of feelings.

Distinction
’Ĕlōhîm as God speaking as God vs a lesser maker of a lesser creature.

Charge
Write what you will teach: ’ĕlōhîm said, Let us make man in our image, after our likeness; dominion is in the same verse; man is who he is by how he was designed and by Who designed him. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-04",
    "mod-fs-2-pistis",
    4,
    "Image and likeness — like his Maker",
    75,
    `Central principle
God created man in His own image. Male and female created He them. Image. Likeness. Dominion.

Key Scripture
Genesis 1:26-28.

Cluster
D2. Genesis 1:26-28 with John 14:12; 1 John 4:17; Psalm 82:6; Romans 8:17; John 17:20-23.

Read
Textbook Chapter 3, section II.

Teaching
Genesis 1:26-28 — “And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them. And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.”

Genesis 1:27 as written: So God created man in his own image, in the image of God created he him; male and female created he them. The Living Bible (TLB) gloss, kept as a gloss beside the KJV: “So God made man like his Maker. Like God did God make man; Man and maid did he make them.” Mark it TLB. Do not preach the gloss as if it were the King James. Do not hide the King James behind the gloss.

Genesis 1:28 — Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion. Image. Likeness. Dominion. That is the text. This school will not put a softer sentence in the place of Genesis 1:26-28.

John 14:12 — “Verily, verily, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father.”

1 John 4:17 — “Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world.”

Romans 8:17 — “And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.”

Teach the cluster as written. Do not empty Genesis to make it safe. Do not detach the later verses from the making. John 14:12 and 1 John 4:17 are held with the making, not against it. Psalm 82:6 and John 17:20-23 sit in this cluster and will be opened in their own lessons. Do not exhaust them here. Do not skip them as if they were not already named.

Genesis 1:27 twice says image: in his own image; in the image of God created he him; male and female created he them. The TLB gloss — marked TLB, not preached as KJV — says: “So God made man like his Maker. Like God did God make man; Man and maid did he make them.” Keep the gloss as a gloss. Do not hide the King James behind it. Do not preach the gloss as if it were the text you must answer from.

Genesis 1:28 is blessing and charge in one breath: be fruitful, multiply, replenish, subdue, have dominion. Image. Likeness. Dominion. Male and female. That is the making as written. What does Genesis 1:26 actually say, and what does it not say? It says Let us make man in our image, after our likeness, and let them have dominion. It does not say a reduced man who is only a worshipper of a distant God. It does not say a later hedge you invented to make the verse safe.

John 14:12 — he that believeth on me, the works that I do shall he do also, and greater works, because I go unto my Father. 1 John 4:17 — as he is, so are we in this world. Hold those with the making, not against it. Romans 8:17 — heirs of God, joint-heirs with Christ — will be opened as heir. Psalm 82:6 and John 17 will have their lessons. Do not detach them. Do not exhaust them here. Teach the cluster as written.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. What does Genesis 1:26 actually say, and what does it not say? Write the verse. Write the TLB as a gloss, marked TLB. Then write one sentence from John 14:12 or 1 John 4:17 that you will hold with the making, not against it.

Intensive — three pages. Page 1 is that tight page. Page 2: write Genesis 1:26-28 in full. Sit image, likeness, male and female, fruitful, multiply, replenish, subdue, dominion. Page 3: write John 14:12, 1 John 4:17, and Romans 8:17. Teach the cluster as written, as you would stand behind it before a teacher. Do not empty Genesis. Do not detach the later verses.

Write in your own hand. Quote Genesis 1:26-28. Mark the TLB as TLB. The page is not a journal of feelings.

Distinction
Image and likeness as the text states them vs a reduced man who is only a worshipper of a distant God.

Charge
Write what you will teach: God created man in His own image; male and female; image, likeness, dominion; TLB is a marked gloss, not the KJV; John 14:12 and 1 John 4:17 are held with the making. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-05",
    "mod-fs-2-pistis",
    5,
    "True nature — partakers",
    75,
    `Central principle
You are not being invited to invent another nature. You are being returned to the one Genesis named, in Christ.

Key Scripture
2 Peter 1:4.

Cluster
D3. 2 Peter 1:3-7.

Read
Textbook Chapter 3, section III.

Teaching
2 Peter 1:3-7 — “According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue: Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust. And beside this, giving all diligence, add to your faith virtue; and to virtue knowledge; And to knowledge temperance; and to temperance patience; and to patience godliness; And to godliness brotherly kindness; and to brotherly kindness charity.”

2 Peter 1:4: Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.

This teaching places this with man’s true nature and with the glory he came short of through sin. Dikaiosynē, later in this course, is equity: impartiality to and conformity with the nature of God — original: back on course. Partaker is not a tourist of divinity. It is the man restored to the nature Genesis named, having escaped the corruption.

You are not being invited to invent another nature. You are being returned to the one Genesis named, in Christ. “Back on course” forces you to stop calling the new creature a new invention God did not make. The making was Genesis 1:26-28. The shortcoming will be Romans 3:23. The partaking is here. The promises are the means the verse names. Escape from the corruption that is in the world through lust is already in the verse. Do not preach partaking as a climb that never escaped.

His divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue. Given. Not earned as a wage. The adding in 1:5-7 is diligence beside what was given, not a second nature you construct. Faith is already in that list as the thing you add to — pistis already credited. Do not turn the list into a ladder that replaces credence.

2 Peter 1:3 is already gift: his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue. Given. Then the promises: exceeding great and precious, that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust. Partaker is by the promises. Escape is already in the verse. You are not being invited to invent another nature. You are being returned to the one Genesis named, in Christ.

Dikaiosynē will later be equity: impartiality to and conformity with the nature of God — original: back on course. “Back on course” forces you to stop calling the new creature a new invention God did not make. The making was Genesis 1:26-28. The shortcoming will be Romans 3:23. The partaking is here. The adding in 1:5-7 begins with faith — pistis already credited — and adds virtue, knowledge, temperance, patience, godliness, brotherly kindness, charity. That adding is diligence beside what was given. It is not a second nature you construct, and it is not a ladder that replaces credence.

Write 2 Peter 1:4. Write what “back on course” forbids you to call a new invention. Partaker is not a tourist of divinity.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write 2 Peter 1:4. Then write what “back on course” forces you to stop calling a new invention.

Intensive — three pages. Page 1 is that tight page. Page 2: write 2 Peter 1:3-7 in full. Sit given, promises, partakers, escaped, and the adding that begins with faith. Page 3: teach partaker of the divine nature versus inventing another nature God did not make, as you would stand behind it before a teacher. Hold Genesis as the nature named.

Write in your own hand. Quote 2 Peter 1:4. The page is not a journal of feelings.

Distinction
Partaker of the divine nature vs inventing another nature God did not make.

Charge
Write what you will teach: partakers of the divine nature by the promises; escaped the corruption; returned to the nature Genesis named, in Christ; not a new invention. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-06",
    "mod-fs-2-pistis",
    6,
    "Psalm 82:6 with John 10:34-35",
    75,
    `Central principle
I have said, Ye are gods; and all of you are children of the most High. The Scripture cannot be broken.

Key Scripture
Psalm 82:6; John 10:34-35.

Cluster
D4 with A1 of the opening. Psalm 82:6-7; John 10:34-36.

Read
Textbook Chapter 3, section II, the psalm and the Lord’s appeal.

Teaching
Jesus answered a charge of blasphemy by the writing.

John 10:34-36 — “Jesus answered them, Is it not written in your law, I said, Ye are gods? If he called them gods, unto whom the word of God came, and the scripture cannot be broken; Say ye of him, whom the Father hath sanctified, and sent into the world, Thou blasphemest; because I said, I am the Son of God?”

Psalm 82:6-7 — “I have said, Ye are gods; and all of you are children of the most High. But ye shall die like men, and fall like one of the princes.”

Psalm 82:7 remains in the psalm. Teach 82:6 with 82:7 and with John 10. Do not detach the verse from the writing. Do not empty the verse to make it safe. The Lord would not let men set His person against the Scripture. Neither will this school.

Course 1 already used John 10:35 as the graphē lesson: the scripture cannot be broken. This lesson will not repeat that lesson as if Psalm 82 had not been cited. The Lord appeals to the writing: I said, Ye are gods. If he called them gods, unto whom the word of God came, and the scripture cannot be broken. The psalm also says they shall die like men, and fall like one of the princes. Both verses stay. A slogan that keeps 82:6 and drops 82:7 is not this cluster. A verse so emptied that the Lord could not have appealed to it is not this cluster.

The psalm addresses those unto whom the word of God came. The Lord uses that writing against the charge that He blasphemed by saying, I am the Son of God. You will write what the cluster forces. You will not write a detached boast. You will not write a safer psalm.

Psalm 82 is a psalm of judgment among the mighty. Verse 6 is not a detached boast. “I have said, Ye are gods; and all of you are children of the most High.” Verse 7 remains: “But ye shall die like men, and fall like one of the princes.” The Lord takes up verse 6 in John 10 against a charge of blasphemy. They said He, being a man, made Himself God. He said: Is it not written in your law, I said, Ye are gods? If he called them gods, unto whom the word of God came, and the scripture cannot be broken — say ye of Him whom the Father sanctified and sent, Thou blasphemest, because I said, I am the Son of God?

Course 1 already taught John 10:35 as graphē: the scripture cannot be broken. This lesson will not drop 82:7 to keep 82:6 as a slogan. This lesson will not empty 82:6 until the Lord could not have appealed to it. Both verses stay. The Lord’s use stays. Write Psalm 82:6-7 and John 10:34-35 as one cluster. Then write what you must not say if you keep both verses and the Lord’s use of them. Do not write a detached boast. Do not write a safer psalm.

The Lord pillows in the writing. Course 1 taught that as graphē. Here the writing He will not let them break is this psalm, including the verse that says they shall die like men. A school that empties 82:6 to make it safe has already decided the Lord should not have appealed to it. A school that detaches 82:6 from 82:7 has already made a slogan. Keep both. Keep His use. Write what you must not say.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write Psalm 82:6-7 and John 10:34-35 as one cluster. Then write what you must not say if you keep both verses and the Lord’s use of them.

Intensive — three pages. Page 1 is that tight page. Page 2: write Psalm 82:6-7 and John 10:34-36 in full. Sit the charge of blasphemy, the appeal, “unto whom the word of God came,” and “die like men.” Page 3: teach the verse as the Lord used it, as you would stand behind it before a teacher. Refuse a slogan detached from the Word. Refuse a verse so emptied that the Lord could not have appealed to it.

Write in your own hand. Quote Psalm 82:6-7 and John 10:34-35. The page is not a journal of feelings.

Distinction
The verse as the Lord used it vs a slogan detached from the Word, or a verse so emptied that the Lord could not have appealed to it.

Charge
Write what you will teach: Psalm 82:6 with 82:7 and John 10; ye are gods, children of the most High; ye shall die like men; the scripture cannot be broken. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-07",
    "mod-fs-2-justified",
    7,
    "Why did Jesus come?",
    75,
    `Central principle
Jesus came because the glory was come short. He did not come to invent a different creature. He came that the man made in the image might be justified freely and set back on course.

Key Scripture
Romans 3:23-24.

Cluster
D5. Romans 3:23-26.

Read
Textbook Chapter 3, section IV.

Teaching
Romans 3:23-26 — “For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God; To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus.”

The glory come short is deviation from true nature. This teaching will not let you answer “Why did Jesus come?” with a slogan that never names that glory. He came because all have sinned. He came because the image-bearer came short. Justification is already in the same breath: freely, by grace, through the redemption that is in Christ Jesus.

He did not come to invent a different creature. He came that the man made in the image might be justified freely and set back on course. Genesis named the nature. 2 Peter 1:4 named the partaking. Romans 3:23 names the shortcoming. You will open 1 Corinthians 11:7 in the next lesson as the glory named here. Hold the question until you can answer it from the cluster. Do not answer with a religious atmosphere you have learned to call glory.

God hath set forth Christ to be a propitiation through faith in His blood, to declare His righteousness; that He might be just, and the justifier of him which believeth in Jesus. The coming is not a mood. It is blood, propitiation, righteousness declared, the Just justifying the one who believes in Jesus. Why did Jesus come? Because the glory was come short. That is answer. Write it from the verse.

Romans 3:21-22 has already set the righteousness of God without the law, witnessed by the law and the prophets; the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe; for there is no difference. Then: all have sinned, and come short of the glory of God. The glory come short is deviation from true nature — the nature Genesis named, the nature 2 Peter 1:4 makes you a partaker of. 1 Corinthians 11:7 will name that glory in the next lesson: man is the image and glory of God. Hold the question until you can put “glory” back on the verse.

Why did Jesus come? Because that glory was come short. He did not come to invent a different creature. He came that the image-bearer might be justified freely by His grace through the redemption that is in Christ Jesus. God set Him forth a propitiation through faith in His blood, to declare His righteousness, that He might be just, and the justifier of him which believeth in Jesus. Answer in terms of glory and true nature, not a slogan, not a religious atmosphere you have learned to call glory. Write Romans 3:23-24 and reason it.

All have sinned. There is no difference. The image-bearer came short. Justification is already in the same sentence as the shortcoming: freely, by grace, through the redemption that is in Christ Jesus. Do not answer “Why did Jesus come?” with a sentence that never names that glory and never names that free justification. He came because the glory was come short. He came that the man made in the image might be set back on course. The next lesson will put 1 Corinthians 11:7 on that glory. Hold the question until the clause can sit with Romans 3:23.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Why did Jesus come? Answer in terms of glory and true nature, not a slogan. Write Romans 3:23-24 and reason it.

Intensive — three pages. Page 1 is that tight page. Page 2: write Romans 3:23-26 in full. Sit all have sinned, come short, justified freely, grace, redemption, propitiation, faith in His blood, just and justifier. Page 3: teach why He came, as you would stand behind it before a teacher. Glory as true nature, not as a religious atmosphere. Hold 1 Corinthians 11:7 for the next lesson; name that it is coming.

Write in your own hand. Quote Romans 3:23-24. Answer why He came from the cluster.

Distinction
Glory as true nature vs glory as a religious atmosphere.

Charge
Write what you will teach: Jesus came because the glory was come short; He did not come to invent a different creature; justified freely by grace through the redemption that is in Christ Jesus. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-08",
    "mod-fs-2-justified",
    8,
    "Man the image and glory of God",
    75,
    `Central principle
Man is the image and glory of God. That is the glory Romans 3:23 says was come short.

Key Scripture
1 Corinthians 11:7.

Cluster
D6 with D5. 1 Corinthians 11:7; Romans 3:23-24.

Read
Textbook Chapter 3, section IV, the glory clause.

Teaching
1 Corinthians 11:7 — “For a man indeed ought not to cover his head, forasmuch as he is the image and glory of God: but the woman is the glory of the man.”

This teaching sets that clause as the glory named in Romans 3:23 — “For all have sinned, and come short of the glory of God.” Man “is the image and glory of God.” The glory come short is not a lost mood. It is deviation from the image and glory the text names.

The immediate context of the chapter is headship and covering in the assembly. Do not skip the verse because its chapter is contested. This school teaches the clause. You are not being asked to reopen every dispute in 1 Corinthians 11. You are being asked to hear the identity clause: he is the image and glory of God.

Romans 3:23-24 remains in the cluster: all have sinned, and come short of the glory of God; being justified freely by his grace through the redemption that is in Christ Jesus. The glory named in 3:23 is the glory 11:7 names. Jesus came because that glory was come short. He came that the man made in the image might be justified freely and set back on course.

Do not answer “what glory was come short?” with a word you cannot put back on the verse. If you cannot put “glory” back on 1 Corinthians 11:7 and Romans 3:23 together, you have not yet answered. Image and glory. Come short. Justified freely. That is the stretch.

1 Corinthians 11:3-7 is headship in the assembly: the head of every man is Christ; the head of the woman is the man; the head of Christ is God. A man praying or prophesying with his head covered dishonoureth his head. A man indeed ought not to cover his head, forasmuch as he is the image and glory of God. This school teaches that clause as the glory Romans 3:23 says was come short. You are not assigned every dispute in the chapter. You are assigned the identity: he is the image and glory of God.

What glory was come short? The image and glory of God that man is. Not a lost mood. Not a religious atmosphere. Deviation from that identity. Romans 3:24 is already in the same breath: being justified freely by his grace through the redemption that is in Christ Jesus. Jesus came because that glory was come short, that the man made in the image might be justified freely and set back on course. Write 1 Corinthians 11:7 with Romans 3:23 as one paragraph. If you cannot put “glory” back on both verses, you have not answered.

The chapter is contested in many rooms. This school will not skip the clause because of that. Man is the image and glory of God. That is the glory come short. That is why Jesus came — not to invent a different creature, but that this man might be justified freely and set back on course. Do not answer with a word you cannot put back on 11:7 and 3:23 together. Image and glory. Come short. Justified freely. Write the paragraph.

Avoiding the verse because the chapter is argued is not this school. Teaching the identity clause is. Man is the image and glory of God. That glory was come short. Jesus came because of that shortcoming. Hold the clause with Romans 3:23-24 until you can teach both as one stretch.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write 1 Corinthians 11:7 with Romans 3:23 as one paragraph. What glory was come short? Do not answer with a word you cannot put back on the verse.

Intensive — three pages. Page 1 is that tight page. Page 2: write 1 Corinthians 11:7 and Romans 3:23-24 in full. Sit the clause in its chapter without skipping it, and sit the clause as the glory Romans names. Page 3: teach the identity clause, as you would stand behind it before a teacher. Refuse avoiding the verse because the chapter is argued.

Write in your own hand. Quote 1 Corinthians 11:7 with Romans 3:23. The page is not a journal of feelings.

Distinction
The identity clause vs avoiding the verse because the chapter is argued.

Charge
Write what you will teach: man is the image and glory of God; that is the glory Romans 3:23 says was come short; the clause is taught, not skipped. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-09",
    "mod-fs-2-justified",
    9,
    "Dikaioō — justified freely",
    75,
    `Central principle
Has man been justified? Yes. And freely. Dikaioō: render just or innocent, free from evil or guilt.

Key Scripture
Romans 3:24-26.

Cluster
D5. Romans 3:23-26.

Read
Textbook Chapter 3, section V.

Teaching
Has man been justified? Yes. And freely.

Romans 3:23-26 — “For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God; To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus.”

Justified: Greek dikaioō — render just or innocent, free from evil or guilt. A derivative of dikaiosynē: righteousness, justification. Being justified freely by his grace through the redemption that is in Christ Jesus. God hath set forth Christ to be a propitiation through faith in His blood, to declare His righteousness; that He might be just, and the justifier of him which believeth in Jesus.

Freely. By grace. Through redemption. Do not preach a justification you must finish by labour. Labour belongs to study (Chapter 1). Innocence before God is free in Christ. You will open apolutrōsis as ransom in full in its own lesson. Hold “through the redemption” here as the means already in the verse. You will open dikaiosynē as equity in its own lesson. Hold “righteousness” here as what God declares, as the Just who justifies.

Has man been justified? Yes. And freely. That answer will not let you add a remainder you must complete. That answer will not let you treat “freely” as a slogan and then charge a price. The justifier is just. He does not declare righteous by a fiction that has no Christ under it. He justifies the one who believes in Jesus.

Dikaioō: render just or innocent, free from evil or guilt. It is a derivative of dikaiosynē — righteousness, justification — which the next lesson will open as equity. Here the question is own: Has man been justified? Yes. And freely. Being justified freely by his grace through the redemption that is in Christ Jesus. Freely is not a slogan you chant while you add a remainder. Freely is the manner of the rendering.

God hath set forth Christ to be a propitiation through faith in His blood, to declare His righteousness for the remission of sins that are past, through the forbearance of God; to declare at this time His righteousness: that He might be just, and the justifier of him which believeth in Jesus. The justifier is just. He does not declare righteous by a fiction that has no Christ under it. He justifies the one who believes in Jesus. Labour belongs to study (Chapter 1). Innocence before God is free in Christ. Apolutrōsis will be named ransom in full in its own lesson. Hold “through the redemption” here. Write the answer: yes, and freely. Write what you must stop adding to “freely.”

Has man been justified? Yes. And freely. That is answer, not a mood you work up. Dikaioō is render just or innocent, free from evil or guilt. You do not complete that rendering by religious work. You study as labour. You do not pay the rest of a price Christ finished. The justifier is just, and He is the justifier of him which believeth in Jesus. Stop adding to “freely.”

Write Romans 3:24-26. Name dikaioō as render just or innocent. Name freely, grace, redemption, propitiation, blood, just and justifier. If you add a remainder, you have not heard the answer.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Has man been justified? Write the answer: yes, and freely. Then write what you must stop adding to “freely.”

Intensive — three pages. Page 1 is that tight page. Page 2: write Romans 3:23-26 in full. Define dikaioō: render just or innocent, free from evil or guilt. Page 3: teach freely, by grace, through redemption, as you would stand behind it before a teacher. Labour belongs to study. Innocence before God is free in Christ.

Write in your own hand. Quote Romans 3:24-26. The source’s answer must be on the page.

Distinction
Justification as God’s free rendering vs a righteousness you complete by religious work.

Charge
Write what you will teach: has man been justified? Yes, and freely; dikaioō is render just or innocent; freely, by grace, through the redemption that is in Christ Jesus. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-10",
    "mod-fs-2-justified",
    10,
    "Dikaiosynē — equity; back on course",
    75,
    `Central principle
Dikaiosynē is equity: impartiality to and conformity with the nature of God. Original: back on course.

Key Scripture
Romans 3:21-26 with 2 Peter 1:4.

Cluster
D3 and D5.

Read
Textbook Chapter 3, sections III and V, the equity sentences.

Teaching
Romans 3:21-26 — “But now the righteousness of God without the law is manifested, being witnessed by the law and the prophets; Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference: For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God; To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus.”

Dikaiosynē is equity: impartiality to and conformity with the nature of God. Original: back on course. Righteousness here is not a costume. It is conformity with the nature of God — the nature 2 Peter 1:4 named, the nature Genesis named.

2 Peter 1:4 — “Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.”

Back on course. That is original. You are not being offered a new species. You are being set on the line from which sin turned you. The justifier is just. He does not declare righteous by a fiction that has no nature under it. He justifies the one who believes in Jesus, and the righteousness is conformity with His nature.

What course? The course Genesis named: image, likeness, dominion — true nature with respect to God. Whose nature? The nature of God, of which 2 Peter 1:4 makes you a partaker by the promises, having escaped the corruption. Equity is impartiality to that nature and conformity with it. A score you display is not this word. A costume you wear on a good day is not this word.

Romans 3:21-22 names the righteousness of God without the law, witnessed by the law and the prophets; by faith of Jesus Christ unto all and upon all them that believe; no difference. That righteousness is dikaiosynē. original is equity: impartiality to and conformity with the nature of God. Original: back on course. Not a costume. Not a score you display. Conformity with the nature 2 Peter 1:4 named — partakers of the divine nature, having escaped the corruption that is in the world through lust — the nature Genesis named.

You are not being offered a new species. You are being set on the line from which sin turned you. The course is image, likeness, dominion — true nature with respect to God. The nature is God’s. The justifier is just: He does not declare righteous by a fiction that has no nature under it. He justifies the one who believes in Jesus, and the righteousness is conformity with His nature. Write what “back on course” means from dikaiosynē and 2 Peter 1:4 together. What course? Whose nature? Do not answer with a display.

Equity is impartiality to the nature of God and conformity with it. A costume is not impartiality. A score is not conformity. The righteousness of God is manifested without the law, witnessed by the law and the prophets, by faith of Jesus Christ unto all and upon all them that believe. Back on course is original for that conformity: returned to the line Genesis named, in Christ, having escaped the corruption. Write the two questions from the verses.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write what “back on course” means from dikaiosynē and 2 Peter 1:4 together. What course? Whose nature?

Intensive — three pages. Page 1 is that tight page. Page 2: write Romans 3:21-26 in full. Sit righteousness of God without the law, by faith of Jesus Christ, unto all and upon all that believe, declared, just and justifier. Page 3: write 2 Peter 1:4 again with the equity sentences. Teach dikaiosynē as conformity with God’s nature, as you would stand behind it before a teacher.

Write in your own hand. What course, whose nature — on the page, from the verses.

Distinction
Equity as conformity with God’s nature vs righteousness as a score you display.

Charge
Write what you will teach: dikaiosynē is equity — impartiality to and conformity with the nature of God; original: back on course; not a costume; not a new species. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-11",
    "mod-fs-2-justified",
    11,
    "Apolutrōsis — ransom in full",
    75,
    `Central principle
There is no unpaid remainder on that ransom. Apolutrōsis: redemption; ransom in full.

Key Scripture
Romans 3:24.

Cluster
D5. Romans 3:24-26.

Read
Textbook Chapter 3, section V, the ransom sentences.

Teaching
Romans 3:24-26 — “Being justified freely by his grace through the redemption that is in Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God; To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus.”

Justified freely by His grace through the redemption that is in Christ Jesus. Greek apolutrōsis — ransom in full. Has man been justified? Yes. And freely. Through a ransom that is not partial.

You cannot add a second payment and still call it this redemption. You cannot treat the blood as a deposit you must finish. Course 1 already laid Hebrews 9:14: the blood of Christ, who through the eternal Spirit offered Himself without spot to God, purges the conscience from dead works to serve the living God. This lesson names the ransom as full. Hold both.

There is no unpaid remainder on that ransom. Do not preach a justification you must finish by labour. Labour belongs to study (Chapter 1). Innocence before God is free in Christ. The propitiation is through faith in His blood. The righteousness declared is His. The justifier is just. A remainder you invent is not humility. It is a second price.

Shew apolutrōsis in Romans 3:24. The word is in the verse as redemption. The gloss is ransom in full. Write the verse. Write the gloss . Then stop adding.

Apolutrōsis in Romans 3:24 is the redemption that is in Christ Jesus. The gloss is ransom in full. Full will not bear a second payment. Full will not bear treating the blood as a deposit you must finish. Justified freely by His grace through that redemption. God set forth Christ a propitiation through faith in His blood. The righteousness declared is His. The justifier is just.

Hebrews 9:12-14 already sits from Course 1: by His own blood He entered in once, having obtained eternal redemption; the blood of Christ purges the conscience from dead works to serve the living God. Once. Eternal redemption. Ransom in full. There is no unpaid remainder. Do not preach a justification you must finish by labour. Labour belongs to study. Innocence before God is free in Christ. A remainder you invent is not humility. It is a second price. Show apolutrōsis in Romans 3:24. Write the verse. Write one sentence you will not say again if the ransom is in full.

Ransom in full means there is no unpaid remainder. You cannot add a second payment and still call it this redemption. You cannot treat the blood as a deposit. Course 1 laid Hebrews 9:14: the blood of Christ purges the conscience from dead works. This lesson names that ransom as full. Hold both. Labour belongs to study, not to finishing the price. Innocence before God is free in Christ. Write the sentence you will not say again.

Through the redemption that is in Christ Jesus — that is where apolutrōsis sits. Ransom in full. Propitiation through faith in His blood. No unpaid remainder. A second price, however religious, is not this verse. Hold Hebrews 9:14 with Romans 3:24: the blood purges; the ransom is full. Do not preach a justification you must finish. Has man been justified? Yes. And freely. Through a ransom that is not partial.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Show apolutrōsis in Romans 3:24. Write the verse. Then write one sentence you will not say again if the ransom is in full.

Intensive — three pages. Page 1 is that tight page. Page 2: write Romans 3:24-26 in full. Sit freely, grace, redemption, propitiation, blood, just and justifier. Page 3: hold Hebrews 9:14 with this ransom. Teach ransom in full versus a redemption that still leaves you to complete the price, as you would stand behind it before a teacher.

Write in your own hand. Quote Romans 3:24. The sentence you will not say must be on the page.

Distinction
Ransom in full vs a redemption that still leaves you to complete the price.

Charge
Write what you will teach: apolutrōsis is redemption, ransom in full; justified freely through that redemption; no unpaid remainder; labour belongs to study, not to finishing the price. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-12",
    "mod-fs-2-justified",
    12,
    "You are the dikaiosynē of God now",
    75,
    `Central principle
So right now, you are the dikaiosynē of God in Christ. Present tense. Not an aspiration you visit on a good day.

Key Scripture
2 Corinthians 5:21.

Cluster
D7. 2 Corinthians 5:21 with Romans 3:24.

Read
Textbook Chapter 3, section VI.

Teaching
2 Corinthians 5:21 — “For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.”

present tense stands: so right now, you are the dikaiosynē of God in Christ. This is not an aspiration you visit on a good day. It is the state pistis credits. Course 1 laid the new creature — 2 Corinthians 5:17: if any man be in Christ, he is a new creature; old things are passed away; behold, all things are become new. This lesson names the righteousness of that creature.

He hath made him to be sin for us, who knew no sin. The One who knew no sin was made sin for us. The purpose clause is not a wish: that we might be made the righteousness of God in him. In Him. Not beside Him on a good day. Not after you have finished a remainder. Romans 3:24 remains in the cluster: being justified freely by his grace through the redemption that is in Christ Jesus. Freely. Now. In Christ.

Pistis credits this state. It does not wait for a mood to confirm it. The next lesson will ask, according to Hebrews 1:8, what that makes you. Do not invent the answer here. Hold the verse until you can reason from the cluster. “Right now” forbids you to say about yourself, if you are in Him, that you are still only hoping to become what 5:21 says you were made.

2 Corinthians 5:17-21 is one movement. If any man be in Christ, he is a new creature; old things are passed away; all things are become new. All things are of God, who hath reconciled us to Himself by Jesus Christ. He hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him. The new creature and the righteousness of God in Him are not two gospels. Course 1 laid the creature. This lesson names the righteousness of that creature.

present tense stands: so right now, you are the dikaiosynē of God in Christ. Not an aspiration you visit on a good day. Not a costume you wear when the mood confirms it. Pistis credits this state. Romans 3:24 remains: justified freely through the redemption that is in Christ Jesus. “Right now” forbids you to say, if you are in Him, that you are still only hoping to become what 5:21 says you were made. The next lesson will ask, according to Hebrews 1:8, what that makes you. Do not invent the answer here. Write 5:21. Write what “right now” forbids.

He knew no sin. He was made sin for us. That we might be made the righteousness of God in Him. In Him — not beside Him on a good day, not after a remainder, not when a mood confirms it. present tense will not let you visit this as an aspiration. Pistis credits it now. The next lesson will ask what Hebrews 1:8 makes of that. Hold 5:21 until you can reason. Do not invent a title here.

Present tense is stand. So right now, you are the dikaiosynē of God in Christ. A future costume is not this verse. A good-day visit is not this verse. The new creature Course 1 laid is the man of whom 5:21 speaks. Write what “right now” forbids you to say if you are in Him.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write 2 Corinthians 5:21. Then write what “right now” forbids you to say about yourself if you are in Him.

Intensive — three pages. Page 1 is that tight page. Page 2: write 2 Corinthians 5:17 and 5:21 together. Sit new creature and righteousness of God in Him. Add Romans 3:24. Page 3: teach present righteousness in Christ versus righteousness as a future costume, as you would stand behind it before a teacher. Do not invent the Hebrews 1:8 title here. Name that the next lesson will ask the question.

Write in your own hand. Quote 2 Corinthians 5:21. What “right now” forbids must be on the page.

Distinction
Present righteousness in Christ vs righteousness as a future costume.

Charge
Write what you will teach: he was made sin for us, who knew no sin; that we might be made the righteousness of God in him; right now, you are the dikaiosynē of God in Christ. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-13",
    "mod-fs-2-heir",
    13,
    "Hebrews 1:8 — what does that make you?",
    75,
    `Central principle
After 2 Corinthians 5:21, the question is: according to Hebrews 1:8, what does that make you? It does not print the answer. Reason from the cluster. Do not invent a title.

Key Scripture
Hebrews 1:8; Hebrews 1:3.

Cluster
D8. Hebrews 1:1-8 with 2 Corinthians 5:21.

Read
Textbook Chapter 3, section VII.

Teaching
Hebrews 1:1-8 — “God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high; Being made so much better than the angels, as he hath by inheritance obtained a more excellent name than they. For unto which of the angels said he at any time, Thou art my Son, this day have I begotten thee? And again, I will be to him a Father, and he shall be to me a Son? And again, when he bringeth in the firstbegotten into the world, he saith, And let all the angels of God worship him. And of the angels he saith, Who maketh his angels spirits, and his ministers a flame of fire. But unto the Son he saith, Thy throne, O God, is for ever and ever: a sceptre of righteousness is the sceptre of thy kingdom.”

Hebrews 1:3 — the Son is the brightness of His glory and the express image of His person. Hebrews 1:8 — But unto the Son he saith, Thy throne, O God, is for ever and ever: a sceptre of righteousness is the sceptre of thy kingdom.

2 Corinthians 5:21 — you are the dikaiosynē of God in Christ. The Son is the express image. The Father addresses the Son as God. The sceptre is righteousness. The Son is appointed heir of all things.

After 2 Corinthians 5:21, the question is: according to Hebrews 1:8, what does that make you? The cluster does not print a title. This school will not invent one. You will write what the cluster forces. You will not write what a slogan wants. Reason: you are the righteousness of God in Him; the sceptre of His kingdom is righteousness; the Father speaks to the Son as God; the Son is the express image. Write only what those lines force. Do not print a name the cluster does not grant.

Hebrews 1 will not let you start at verse 8 as a slogan. God hath spoken by His Son, whom He hath appointed heir of all things, by whom He made the worlds. The Son is the brightness of His glory and the express image of His person; He purged our sins by Himself; He sat down on the right hand of the Majesty on high. Unto the Son He saith, Thy throne, O God, is for ever and ever: a sceptre of righteousness is the sceptre of thy kingdom.

You are the dikaiosynē of God in Christ (2 Corinthians 5:21). The sceptre of that kingdom is righteousness. The Father addresses the Son as God. The Son is the express image. The Son is heir of all things. The question is what that makes you. The cluster does not print a title. This school will not invent a title the cluster does not grant. Reason from those lines. Write only what they force. Do not print a name the cluster does not grant. Do not write what a slogan wants. The distinction is reasoning from the cluster versus inventing a name.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. You’re the dikaiosynē of God in Christ. According to Hebrews 1:8, what does that make you? Write the cluster. Write only what the cluster forces.

Intensive — three pages. Page 1 is that tight page. Page 2: write Hebrews 1:1-8 in full and 2 Corinthians 5:21. Sit spoken by His Son, heir of all things, brightness, express image, purged our sins, Thy throne O God, sceptre of righteousness. Page 3: reason from the cluster as you would stand behind it before a teacher. Do not invent a title. Name what you refused to invent.

Write in your own hand. Write only what the cluster forces. The page is not a journal of feelings.

Distinction
Reasoning from the cluster vs inventing a name this teaching never printed.

Charge
Write what you will teach: the question is asked; the answer is not printed; you reason from Hebrews 1:1-8 with 2 Corinthians 5:21; you do not invent a title. Then write the page the Labour named. Write only what the cluster forces.`,
  ),
  lesson(
    "les-fs-2-14",
    "mod-fs-2-heir",
    14,
    "Who is heir? What is an heir?",
    75,
    `Central principle
If a son, then an heir of God through Christ. An heir is the one to whom the father’s estate belongs by sonship — not a hired man hoping for a wage.

Key Scripture
Galatians 4:5-7; Romans 8:17.

Cluster
D1 again. Galatians 4:4-7; Romans 8:15-17.

Read
Textbook Chapter 3, section VIII.

Teaching
This teaching asks: Who is heir of God? What is the meaning of “heir”?

Galatians 4:4-7 — “But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, To redeem them that were under the law, that we might receive the adoption of sons. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.”

Who is heir of God? The son. Galatians 4:7 — if a son, then an heir of God through Christ. What is the meaning of “heir”? An heir is not a hired man hoping for a wage. An heir is the one to whom the father’s estate belongs by sonship.

Romans 8:15-17 — “For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father. The Spirit itself beareth witness with our spirit, that we are the children of God: And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.”

Heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together. Do not make heir a metaphor for “someone who likes church.” Answer from the adoption cluster.

The owner’s charge on the heir stays with the image: heir (Romans 8:17), made after the image (Genesis 1:26-28), fearfully made (Psalm 139:14). Do not soften sonship into a polite nickname. Servant was refused as the name. Hireling is not the heir. The estate belongs by sonship. You do not collect it as a wage for religious work.

Who is heir of God? The son. Galatians 4:7 — if a son, then an heir of God through Christ. Not if a hireling. Not if a man who likes church. Not if a man who collected a wage of religious work. An heir is the one to whom the father’s estate belongs by sonship. Romans 8:17 — heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together. Suffering with Him is in the verse. It is not a wage that purchases the estate. The estate belongs because you are a son.

The owner’s charge stays with the image: heir (Romans 8:17), made after the image (Genesis 1:26-28), fearfully made (Psalm 139:14 — “I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well”). Do not soften sonship into a polite nickname. Servant was refused. Hireling is not the heir. Write Galatians 4:7 and Romans 8:17. Write what you must stop treating as a wage. Answer both questions from the adoption cluster: who is heir, and what heir means.

If children, then heirs. If a son, then an heir of God through Christ. Joint-heirs with Christ. The father’s estate belongs by sonship. A hired man hopes for a wage. You will not treat sonship as a polite nickname and then work as a hireling for what already belongs to the son. Psalm 139:14 stays with the image: fearfully and wonderfully made. Genesis 1:26-28 stays: made after the image. Do not soften the heir.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Who is heir of God? What is the meaning of heir? Write Galatians 4:7 and Romans 8:17. Then write what you must stop treating as a wage.

Intensive — three pages. Page 1 is that tight page. Page 2: write Galatians 4:4-7 and Romans 8:15-17 in full. Sit son, heir, joint-heirs, suffer with him, glorified together. Page 3: hold Romans 8:17 with Genesis 1:26-28 and Psalm 139:14 as the owner’s charge. Teach heir by sonship versus hireling by performance, as you would stand behind it before a teacher.

Write in your own hand. Both questions answered from the cluster. The page is not a journal of feelings.

Distinction
Heir by sonship vs hireling by performance.

Charge
Write what you will teach: who is heir of God? the son; what is an heir? the one to whom the father’s estate belongs by sonship, not a hired man hoping for a wage. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-15",
    "mod-fs-2-heir",
    15,
    "Liken John 17:20-23",
    75,
    `Central principle
Liken the prayer of oneness. The measure in the text is “as thou, Father, art in me, and I in thee.” Do not reduce it to an organizational merger.

Key Scripture
John 17:20-23.

Cluster
D9. John 17:20-23 with Genesis 1:26-28.

Read
Textbook Chapter 3, section IX.

Teaching
John 17:20-23 — “Neither pray I for these alone, but for them also which shall believe on me through their word; That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me. And the glory which thou gavest me I have given them; that they may be one, even as we are one: I in them, and thou in me, that they may be made perfect in one; and that the world may know that thou hast sent me, and hast loved them, as thou hast loved me.”

This teaching asks: How would you liken the prayer of oneness with the Father by Jesus in John 17:20-23? Liken. Do not reduce it to an organizational merger. Do not empty it into a feeling of togetherness. The measure in the text is “as thou, Father, art in me, and I in thee.” Glory given. I in them. Thou in me. Made perfect in one. That the world may believe. That the world may know. Loved them, as thou hast loved me.

Write the likeness from the words. Neither pray I for these alone — the prayer is for them also which shall believe on Him through their word. That they all may be one — as the Father in the Son and the Son in the Father. The glory which thou gavest me I have given them. I in them, and thou in me. Made perfect in one.

Genesis 1:26-28 remains in the cluster: man made in the image, after the likeness, given dominion. Do not detach the prayer from the making, and do not flatten the prayer into the making so that “one” means only a species. The measure is the Father and the Son. Course 3 will open the Spirit who shews “Mine.” Do not wait for that course to refuse a cheap oneness.

Liken from the words, in order. Neither pray I for these alone — not the eleven only. For them also which shall believe on me through their word — you are in that clause if you have believed through that word. That they all may be one — as thou, Father, art in me, and I in thee — that they also may be one in us. The measure is the Father in the Son and the Son in the Father. That the world may believe that thou hast sent me. The glory which thou gavest me I have given them; that they may be one, even as we are one. I in them, and thou in me, that they may be made perfect in one. That the world may know that thou hast sent me, and hast loved them, as thou hast loved me.

A unity-event is not that measure. A merger of organizations is not that measure. A feeling of togetherness is not that measure. Glory given, I in them, thou in me, perfect in one — that is the likeness you will write. Genesis 1:26-28 remains: image, likeness, dominion. Do not detach the prayer from the making. Do not flatten “one” into a species so that the Father and the Son are no longer the measure. Course 3 will open the Spirit who shews “Mine.” Refuse a cheap oneness now.

Liken. This teaching asks that verb. You will write the likeness from “as thou, Father, art in me, and I in thee,” from glory given, from I in them and thou in me, from made perfect in one, from loved them as thou hast loved me. You will not submit a unity slogan. You will not submit a merger. The world is to believe and to know that the Father sent the Son. That is in the prayer. Keep it in the likeness.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. How would you liken the prayer of oneness in John 17:20-23? Write the likeness from the words. Do not submit a unity slogan.

Intensive — three pages. Page 1 is that tight page. Page 2: write John 17:20-23 in full. Sit “these alone,” “them also,” “as thou, Father,” “glory… I have given,” “I in them,” “thou in me,” “perfect in one,” “loved them, as.” Page 3: hold the prayer with Genesis 1:26-28. Teach oneness as the Father and the Son are one, as you would stand behind it before a teacher. Refuse a unity-event. Refuse a merger of organizations.

Write in your own hand. The likeness from the words, not a unity slogan.

Distinction
Oneness as the Father and the Son are one vs a unity-event or a merger of organizations.

Charge
Write what you will teach: liken John 17:20-23 from the words; the measure is as the Father in the Son and the Son in the Father; glory given; I in them; thou in me; made perfect in one. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-16",
    "mod-fs-2-heir",
    16,
    "The image in the face of Jesus Christ",
    75,
    `Central principle
Christ is the image of God. The glory of God is known in His face. Faith toward God is credence of this light — not a leap into the dark.

Key Scripture
2 Corinthians 4:4 and 4:6.

Cluster
D10. 2 Corinthians 4:3-6.

Read
Textbook Chapter 3, section X.

Teaching
2 Corinthians 4:3-6 — “But if our gospel be hid, it is hid to them that are lost: In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them. For we preach not ourselves, but Christ Jesus the Lord; and ourselves your servants for Jesus’ sake. For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.”

Christ is the image of God. The glory of God is known in His face. The same God who said “Let there be light” has shined in our hearts. The god of this world blinds minds so that this light will not shine. That blindness is not a small inconvenience. It is the old opposition to the image.

Course 1 already used 2 Corinthians 4:4 in the old-man file: the god of this world hath blinded the minds of them which believe not. This lesson will not treat that blindness as a new doctrine. It will treat it as the opposition to the light of the glorious gospel of Christ, who is the image of God. If the gospel be hid, it is hid to them that are lost. We preach not ourselves, but Christ Jesus the Lord.

Faith toward God is credence of this light, this image, this sonship, this free justification. It is not a leap into the dark. It is not a leap into an unseen of your own invention. God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ. Pistis credits that shining. The face is Christ’s. The image is His. The glory is known there.

If our gospel be hid, it is hid to them that are lost. The god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them. Course 1 used 2 Corinthians 4:4 in the old-man file. This lesson treats the same blindness as opposition to the image. We preach not ourselves, but Christ Jesus the Lord; and ourselves your servants for Jesus’ sake. The shining is not a leap into an unseen you invented. God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.

Christ is the image of God. The glory of God is known in His face. Faith toward God is credence of this light, this image, this sonship, this free justification. Pistis credits that shining. What is the god of this world opposing when he blinds minds? That light. What does pistis credit when the light shines? This gospel, this image, this face. Write 4:4 and 4:6. Do not write a leap into the dark.

The same God who said “Let there be light” has shined in our hearts. The face is Jesus Christ’s. The image is His. The gospel hid is hid to them that are lost. Blindness here is not a small inconvenience. It is the old opposition to the image Course 1 named in the old-man file. Faith toward God is credence of this light — sonship, free justification, the image in His face — not a leap into an unseen of your own invention.

Labour
The Walk: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Walk — one page. Write 2 Corinthians 4:4 and 4:6. Then write what the god of this world is opposing when he blinds minds — and what pistis credits when the light shines.

Intensive — three pages. Page 1 is that tight page. Page 2: write 2 Corinthians 4:3-6 in full. Sit hid, lost, blinded, light of the glorious gospel, image of God, preach not ourselves, commanded the light, shined in our hearts, face of Jesus Christ. Page 3: teach faith toward God as credence of this light, as you would stand behind it before a teacher. Refuse a leap into an unseen of your own invention.

Write in your own hand. Quote 2 Corinthians 4:4 and 4:6. The page is not a journal of feelings.

Distinction
The glory known in Christ’s face vs a leap into an unseen of your own invention.

Charge
Write what you will teach: Christ is the image of God; the glory of God is known in His face; the god of this world blinds minds lest that light shine; pistis is credence of this light, not a leap into the dark. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-2-17",
    "mod-fs-2-heir",
    17,
    "Charge and examination of the principle",
    90,
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

Hebrews 6:1 — “and of faith toward God.” Galatians 4:5-7 — adoption of sons; Abba; no more a servant, but a son; if a son, then an heir of God through Christ. Genesis 1:26-28 — as written: image, likeness, dominion; male and female; TLB marked as a gloss. Romans 3:23-24 — all have sinned, and come short of the glory of God; being justified freely. 2 Corinthians 5:21 — made the righteousness of God in Him. John 17:20-23 — one as the Father and the Son are one.

You should now be able to teach, from Scripture:

1. Pistis as credence that defines sons — not a mood.
2. Adoption: no more servant, but a son; Abba.
3. ’Ĕlōhîm; Genesis 1:26-28 as written; image, likeness, dominion. TLB marked.
4. Partakers of the divine nature; back on course.
5. Psalm 82:6 with 82:7 and John 10.
6. Why Jesus came: glory / true nature come short. 1 Corinthians 11:7 as the glory named.
7. Dikaioō freely; dikaiosynē as equity; apolutrōsis in full.
8. You are the righteousness of God now.
9. Hebrews 1:8 reasoned from the cluster, not an invented title.
10. Who is heir, and what heir means.
11. John 17:20-23 likened from the words.
12. The image in the face of Jesus Christ.

Companions are not a seventh course. Completing this course does not require finishing every page of the library. Directed sections when the volumes are in your hand: The Doctrine of Man (already in the house); Why Men Die; True Nature of God; Who’s Jesus to You? True Nature of God: if you know God’s nature, then you are as Him, unlimited, because you are made in His image (Genesis 1:26). That sentence does not reopen Genesis as a hedge. What does Genesis 1:26 actually say, and what does it not say? Answer from the verse as written.

The next principle is the doctrine of baptisms. The son this course named is baptized into Christ, then in water as a sign, then in the Spirit as witness.

own questions are the examination. Why did Jesus come? Glory / true nature come short — Romans 3:23-24 with 1 Corinthians 11:7. Has man been justified? Yes, and freely — dikaioō; apolutrōsis in full. Who is heir of God? The son. What is the meaning of heir? The one to whom the father’s estate belongs by sonship, not a hired man hoping for a wage. How would you liken John 17:20-23? From the words; as the Father in the Son and the Son in the Father. What does Genesis 1:26 actually say, and what does it not say? As written; no hedge. According to Hebrews 1:8, what does 2 Corinthians 5:21 make you? Reason from the cluster. Do not invent a title.

Companions are directed, not whole books as this course: The Doctrine of Man (already in the house); Why Men Die; True Nature of God; Who’s Jesus to You? True Nature of God will say: if you know God’s nature, then you are as Him, unlimited, because you are made in His image (Genesis 1:26). That sentence does not reopen Genesis as a hedge. Assigned sections when the volumes are in your hand. Completing this course does not require finishing every page of the library.

Write the twelve. The Walk: twelve tight paragraphs. Intensive: twelve full pages. Same doctrine. Then the principle as you would teach it to a babe, and as you would stand behind it before a teacher. The second stone is laid when a man credits sonship, image, free justification, and the heir — toward God, not toward a system. The next principle is baptisms: the son this course named is baptized into Christ, then in water as a sign, then in the Spirit as witness.

Labour
The Walk: write the twelve as twelve tight paragraphs. Intensive: write the full page on each of the twelve. Same doctrine. The hours differ. The twelve do not.

The Walk — twelve tight paragraphs, one for each head above, each paragraph quoting the governing verse and stating the distinction. Then answer own questions in a thirteenth short movement: Why did Jesus come? Has man been justified? Who is heir? What does heir mean? How do you liken John 17:20-23? What does Genesis 1:26 actually say, and what does it not say?

Intensive — twelve full pages, one for each head, then a thirteenth page: the principle as you would teach it to a babe, and as you would stand behind it before a teacher, answering those same questions from the cluster. Do not submit a feeling in the place of the cluster. Do not treat the companion volumes as this course.

Write in your own hand. The twelve must be teaching, not headings. questions must be answered from the cluster.

Distinction
Completion of activities vs mastery. A certificate later will ask more than a click. Directed companion sections vs treating those books as this course.

Charge
Write the principle as you would teach it to a babe, then as you would stand behind it before a teacher. Answer: Why did Jesus come? Has man been justified? Who is heir? What does heir mean? How do you liken John 17:20-23? What does Genesis 1:26 actually say, and what does it not say? According to Hebrews 1:8, what does 2 Corinthians 5:21 make you — reasoned, no invented title? Do not submit a feeling in the place of the cluster. The Labour named the twelve you must write. Write them.`,
  ),
];
