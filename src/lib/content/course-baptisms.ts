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
    courseId: "course-fs-baptisms",
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [bookId],
    body,
  };
}

export const baptismsModules = [
  {
    id: "mod-fs-3-one",
    courseId: "course-fs-baptisms" as const,
    number: 1,
    title: "Washing, the seven, and into Christ",
    description: "Baptismos, the Word, seven in Scripture, one baptism that saves. Textbook Chapter 4, I–VI.",
  },
  {
    id: "mod-fs-3-water",
    courseId: "course-fs-baptisms" as const,
    number: 2,
    title: "Water as figure",
    description: "After one is saved. Sign, not object. The cross is power. Textbook Chapter 4, VII–X.",
  },
  {
    id: "mod-fs-3-spirit",
    courseId: "course-fs-baptisms" as const,
    number: 3,
    title: "Spirit as witness",
    description: "Sonship, without measure, not slaves, Mine. Textbook Chapter 4, XI–XVI.",
  },
];

export const baptismsLessons: Lesson[] = [
  lesson(
    "les-fs-3-01",
    "mod-fs-3-one",
    1,
    "Baptismos — washing; ablution",
    45,
    `Central principle
Baptismos is ablution: ritual washing. Hebrews 6:2 names baptisms — the plural. The first word under the heading is washing, not a tank.

Key Scripture
Hebrews 6:2.

Cluster
E1. Hebrews 6:2 with Ephesians 5:26.

Read
Textbook Chapter 4, section I.

Teaching
This is Course 3 of Foundation School. One curriculum. The third of the six principles.

The 2015 page printed “doctrine of baptism.” The verse is baptisms. This school will not flatten the plural.

Baptismos: ablution — ritual washing of a priest’s hands or of sacred vessels. Do not run to the river before you have heard what the word washes.

Course 2 named the son. This course baptizes that son. You do not begin at a font. You begin at washing.

Distinction
Washing as the Word’s ablution vs washing as a tank you have not yet defined.

Charge
Write Hebrews 6:2. Then write what “baptisms” (plural) forbids you to do to the word baptism.`,
  ),
  lesson(
    "les-fs-3-02",
    "mod-fs-3-one",
    2,
    "Agency of the Word",
    50,
    `Central principle
The washing signifies the agency of the Word at new birth. The water in Ephesians 5:26 is by the word. The Word is the agency.

Key Scripture
Ephesians 5:26; 1 Peter 1:23; John 3:5.

Cluster
E1. Ephesians 5:25-27; 1 Peter 1:23-25; John 3:5.

Read
Textbook Chapter 4, section II.

Teaching
Christ loved the church and gave Himself for it, that He might sanctify and cleanse it with the washing of water by the word.

Born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever.

Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.

This is the premiere of the three essential baptisms. You do not begin this principle at a river. You begin it where the Word washes.

The water-in-Ephesians-5 is the Word’s washing, not the font as power.

Distinction
The Word as agency of new birth vs the font as the power of new birth.

Charge
Write Ephesians 5:26 with 1 Peter 1:23. What is doing the washing? Do not answer with a tank you have not yet justified from these verses.`,
  ),
  lesson(
    "les-fs-3-03",
    "mod-fs-3-one",
    3,
    "Seven in Scripture; three for believers; three agents",
    55,
    `Central principle
Seven baptisms in Scripture. Three essential for believers. Three agents. Do not add an eighth. Do not pretend there are only three in the Bible.

Key Scripture
Ephesians 4:5; 1 Corinthians 12:13; Matthew 3:11; Matthew 28:19.

Cluster
E1 with owner B2.

Read
Textbook Chapter 4, section III.

Teaching
The authorized list is seven:

1. John’s baptism in water.
2. Christ’s baptism in water.
3. Baptism in suffering (Luke 12:50).
4. Baptism in the cloud and in the sea (1 Corinthians 10:2).
5. Christian baptism in water.
6. Baptism into Christ and into His body.
7. Baptism in the Holy Spirit.

Three for believers, in doctrinal order: 6, then 5, then 7. Into Christ at new birth. Water after one is saved. Spirit — witness of sonship and enduement of power. The Spirit may be before water (Acts 10:44-48) or after it (Acts 1:4-8; 2:1-11; 8:12-21; 19:1-7).

Agents:
The Holy Spirit baptizes into Christ and into His body (1 Corinthians 12:13).
Christ baptizes in the Holy Spirit (Matthew 3:11; John 1:31-33).
The minister baptizes into water (Matthew 28:19).

Baptizō (G907) from baptō (G911): to dip; to overwhelm with suffering; to bury into — regardless of the element.

Distinction
Seven in Scripture vs three for believers. Three agents vs one actor doing all three.

Charge
Name the three essential. Do not invent the four. Why does “one baptism” not cancel water and Spirit as this school teaches them? Write the three agents with their texts.`,
  ),
  lesson(
    "les-fs-3-04",
    "mod-fs-3-one",
    4,
    "Into Christ — the one baptism that saves",
    50,
    `Central principle
Baptism into Christ and His body at repentance and new birth is the one baptism. It is the only baptism that saves the soul.

Key Scripture
Ephesians 4:5.

Cluster
E2. Ephesians 4:4-6.

Read
Textbook Chapter 4, section IV.

Teaching
One Lord, one faith, one baptism.

This one baptism is into Christ and His body — fellowship of the saints — at repentance and new birth. Only this saves the soul.

“One baptism” does not cancel water. It does not cancel the Spirit. It names the baptism that brings a man into Christ and into the body.

If you treat the tank as this one, you have not heard Ephesians 4:5. If you treat a second experience as this one, you have not heard it either.

Course 1 received Him. This lesson names that receiving as baptism into Christ. You do not get a second soul-saving baptism later.

Distinction
The baptism that saves the soul vs water and Spirit, which remain and do not save the soul.

Charge
Write Ephesians 4:5. Then write, in one paragraph, why water is still commanded and why it is not this one.`,
  ),
  lesson(
    "les-fs-3-05",
    "mod-fs-3-one",
    5,
    "Baptizō — whelmed; put on Christ",
    50,
    `Central principle
Baptized into Christ is put on Christ. Baptizō: to make whelmed — fully wet; overpowered; submerged.

Key Scripture
Galatians 3:27.

Cluster
E2. Galatians 3:26-27.

Read
Textbook Chapter 4, section V.

Teaching
For as many of you as have been baptized into Christ have put on Christ.

Baptizō as the leaflet uses it: to make whelmed (fully wet); overpowered / overwhelmed; submerged / drowned. From baptō: to dip.

You do not put Him on as a garment you take off at the door. You are whelmed into Him.

This is baptism 1. It happens at repentance and new birth. It is not the minister’s act in water. The next lesson will bury and raise this same baptism from Romans 6.

Distinction
Whelmed into Christ vs a damp confession that never puts Him on.

Charge
Write Galatians 3:27. What does “put on Christ” force you to stop calling a baptism that leaves the old man dressed?`,
  ),
  lesson(
    "les-fs-3-06",
    "mod-fs-3-one",
    6,
    "Buried, raised, one body",
    50,
    `Central principle
Baptized into His death; buried; walk in newness; old man crucified; by one Spirit into one body. The agent of this baptism is the Spirit.

Key Scripture
Romans 6:3-7; Colossians 2:12; 1 Corinthians 12:13.

Cluster
E2.

Read
Textbook Chapter 4, section VI.

Teaching
So many of us as were baptized into Jesus Christ were baptized into His death. Buried with Him by baptism into death. Planted in the likeness of His death and of His resurrection. Old man crucified with Him. He that is dead is freed from sin.

Buried with Him in baptism, risen with Him through the faith of the operation of God.

By one Spirit are we all baptized into one body, whether Jews or Gentiles, bond or free; made to drink into one Spirit.

Water will later figure what this baptism already is. Water does not create it. The old man Course 1 named is crucified with Him here.

Distinction
Burial into Christ by the Spirit vs burial in a tank that has not yet been called a figure.

Charge
Write Romans 6:3-4 and 1 Corinthians 12:13. Who is the agent? What is the body? What happens to the old man?`,
  ),
  lesson(
    "les-fs-3-07",
    "mod-fs-3-water",
    7,
    "Water baptizō after one is saved",
    45,
    `Central principle
Water baptizō is after one is saved. It symbolizes the death, burial, and resurrection already elucidated in baptism 1. A sign points. It is not the object.

Key Scripture
Matthew 28:19 with 1 Peter 3:21.

Cluster
E3.

Read
Textbook Chapter 4, section VII.

Teaching
The agent is the minister. The minister baptizes a person who has already been baptized into Christ.

Do not refuse the sign because it is not the object.
Do not worship the sign as if it were the object.

The leaflet’s order is not a suggestion: water after one is saved. A man who has not been baptized into Christ is not a candidate for this figure as if the figure could create the object.

Distinction
Sign vs object. After salvation vs water as the saving act.

Charge
Write what the water figures, and what it must not be asked to do. Name the agent of this baptism.`,
  ),
  lesson(
    "les-fs-3-08",
    "mod-fs-3-water",
    8,
    "Is it the water that saves?",
    50,
    `Central principle
Faith in the death, burial, and resurrection of Christ saves the soul, not the sign.

Key Scripture
1 Peter 3:21.

Cluster
E3. 1 Peter 3:20-21.

Read
Textbook Chapter 4, section VIII.

Teaching
The like figure whereunto even baptism doth also now save us — not the putting away of the filth of the flesh, but the answer of a good conscience toward God — by the resurrection of Jesus Christ.

Eight souls saved by water in Noah’s day. The like figure. The verse itself refuses the filth of the flesh as the saving.

The source asks: is it the water that saves us, or the thing that it is a figure or symbol of?

Answer from the verse. Do not invent a third option in which the water becomes a second saviour. Do not invent a fourth in which the figure is nothing.

Distinction
The figure that answers with a good conscience vs the water as a second saviour.

Charge
Is it the water that saves us, or the thing that it is a figure of? Answer from 1 Peter 3:21. Write the verse. Write the answer.`,
  ),
  lesson(
    "les-fs-3-09",
    "mod-fs-3-water",
    9,
    "The cross, not water, is power",
    50,
    `Central principle
The preaching of the cross, not water baptism, is God’s power to save. Christ sent Paul not to baptize, but to preach the gospel.

Key Scripture
1 Corinthians 1:17-18, 24.

Cluster
E4. 1 Corinthians 1:17-24.

Read
Textbook Chapter 4, section IX.

Teaching
Christ sent me not to baptize, but to preach the gospel: not with wisdom of words, lest the cross of Christ should be made of none effect.

The preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.

Unto them which are called, Christ the power of God, and the wisdom of God.

Water baptism does not save the soul from sin. It is a symbol significant only for those who have received Christ.

Paul was not sent to make the tank the mission.

Distinction
The cross as power vs water as power.

Charge
Write 1 Corinthians 1:17-18. Then write one sentence you will not say again if the cross is the power and water is the sign.`,
  ),
  lesson(
    "les-fs-3-10",
    "mod-fs-3-water",
    10,
    "Galatians 3:26 with 3:27",
    50,
    `Central principle
Children of God by faith in Christ Jesus. Baptized into Christ, put on Christ. Hold both verses in one paragraph.

Key Scripture
Galatians 3:26-27.

Cluster
E4 with E2.

Read
Textbook Chapter 4, section X.

Teaching
For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.

The leaflet’s definitive line: faith in Christ Jesus saves the soul, not water baptism. 3:26 is the verse it prints for that line. 3:27 is baptism into Christ, not the font as the saviour.

If you read 3:26 and throw away 3:27, you have faith with no putting-on.
If you read 3:27 and throw away 3:26, you have a baptism that is no longer by faith.

They are one life. Course 2 already forbade two gospels. Do not make two here.

Distinction
Faith that saves and baptism into Christ vs water as the saviour of 3:27.

Charge
Hold Galatians 3:26 and 3:27 in one paragraph a babe can follow. Then write what you must not let 3:27 mean if 3:26 is true.`,
  ),
  lesson(
    "les-fs-3-11",
    "mod-fs-3-spirit",
    11,
    "Spirit baptism — witness of sonship",
    50,
    `Central principle
Baptism in the Holy Spirit is the hereditary witness of sonship. Prerequisite: new birth. The Spirit does not invent the son. He cries Abba because you are a son.

Key Scripture
Galatians 4:6-7.

Cluster
E5 and E6. Galatians 4:6-7.

Read
Textbook Chapter 4, section XI.

Teaching
Because ye are sons, God hath sent forth the Spirit of His Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.

The Holy Spirit witnesses (informant) a Father–Son relationship (ensuant) as a consequence of sonship. Heir of God. Not slaves.

This witness stays. With it this school also teaches the enduement of power for service — not instead of the witness. Christ is the agent (Matthew 3:11; John 1:31-33). The sequence with water is not one locked order: before water (Acts 10:44-48) or after it.

Prerequisite: becoming God’s son. Course 1 and Course 2 are not optional prefaces. The Spirit is not sent into a man who has not been made a son.

Distinction
Witness of sonship (and enduement with it) vs a second blessing that replaces baptism into Christ, or a Spirit given without new birth.

Charge
Who is the Spirit sent into, according to Galatians 4:6? Write the verse. Then write what “prerequisite” forbids you to seek as if it could skip the son.`,
  ),
  lesson(
    "les-fs-3-12",
    "mod-fs-3-spirit",
    12,
    "Without measure",
    50,
    `Central principle
Rivers of living water. The Spirit not by measure unto you. Hold John 3:34 in its sentence, and hold the source’s use.

Key Scripture
John 7:38-39; John 3:34.

Cluster
E5.

Read
Textbook Chapter 4, section XII.

Teaching
He that believeth on Me, as the scripture hath said, out of his belly shall flow rivers of living water. This spake He of the Spirit.

John 3:34 — God giveth not the Spirit by measure unto Him. The verse, in its own sentence, is unto Him — Christ. The leaflet applies “the measure Christ experienced” and says: the Spirit not by measure unto you.

Hold the verse. Hold the source’s use. Do not empty John 3:34 to protect a stingy second-blessing slogan. Do not invent a measure the source refuses.

Distinction
Without measure / fullness vs a stingy “second blessing” that ignores the sonship-prerequisite and the source’s line.

Charge
Write John 7:38-39 and John 3:34. Then write what “not by measure unto you” forces, without inventing a title the verse does not grant.`,
  ),
  lesson(
    "les-fs-3-13",
    "mod-fs-3-spirit",
    13,
    "Fullness — complete in Him",
    50,
    `Central principle
All fullness dwells in Him. Ye are complete in Him. Unto the measure of the stature of the fullness of Christ.

Key Scripture
Colossians 1:19; Colossians 2:9-10; Ephesians 4:13.

Cluster
E5. Colossians 1:19; 2:9-10; 1 Corinthians 1:24; 12:27; Galatians 2:20; 2 Corinthians 2:14-16; Ephesians 4:13.

Read
Textbook Chapter 4, section XIII.

Teaching
It pleased the Father that in Him should all fullness dwell. In Him dwelleth all the fullness of the Godhead bodily. Ye are complete in Him.

Ye are the body of Christ, and members in particular. I am crucified with Christ; Christ liveth in me. The savour of Christ — to one death, to one life.

Till we all come unto a perfect man, unto the measure of the stature of the fullness of Christ.

Christ the power of God and the wisdom of God. Fullness is not a slogan for a meeting. It is the son, whelmed, witnessing, complete.

Distinction
Complete in Him vs a fullness you chase as if He were empty.

Charge
Write Colossians 2:9-10 and Ephesians 4:13. What is already true in Him, and what are you still coming unto? Hold both.`,
  ),
  lesson(
    "les-fs-3-14",
    "mod-fs-3-spirit",
    14,
    "Not slaves — you are the fear and dread",
    55,
    `Central principle
Not slaves. Not timidity. God hath not given us the spirit of fear, but of power, and of love, and of a sound mind. It is not possible for you to fear. You are the fear and dread.

Key Scripture
Galatians 4:6-7; 2 Timothy 1:7; Genesis 9:2; Deuteronomy 11:25.

Cluster
E6. Also Romans 8:17; Genesis 1:26-28; Psalm 139:14.

Read
Textbook Chapter 4, section XIV.

Teaching
Because ye are sons… no more a servant, but a son; if a son, then an heir of God through Christ.

God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.

The fear of you and the dread of you shall be upon every beast of the earth… into your hand are they delivered (Genesis 9:2).

There shall no man be able to stand before you: for the LORD your God shall lay the fear of you and the dread of you upon all the land that ye shall tread upon (Deuteronomy 11:25).

Heir. Image. Fearfully and wonderfully made (Psalm 139:14).

This school will not soften that charge for babes. We do not teach James 2:9 as this cluster. Further reading when the volume is in your hand: Why We’re Beyond — its own book, not Fearfully Made.

Do not turn the charge into swagger without the cluster. Power, love, and a sound mind stand in the same breath.

Distinction
Son (Abba, heir, informant Spirit) vs slave (timidity). You are the fear and dread vs a spirit of fear God did not give.

Charge
Teach 2 Timothy 1:7 with Genesis 9:2 and Deuteronomy 11:25. Write the three texts. Do not submit swagger, and do not submit a softer sentence the owner forbade.`,
  ),
  lesson(
    "les-fs-3-15",
    "mod-fs-3-spirit",
    15,
    "Anangellō — He shall shew you Mine",
    55,
    `Central principle
The Spirit of truth guides into all truth. He shall receive of Mine and shew it unto you. Mine is the express image — Genesis 1:26-28.

Key Scripture
John 16:13-15; Genesis 1:26-28.

Cluster
E7.

Read
Textbook Chapter 4, section XV.

Teaching
When He, the Spirit of truth, is come, He will guide you into all truth: for He shall not speak of Himself. He shall glorify Me: for He shall receive of Mine, and shall shew it unto you. All things that the Father hath are Mine.

Anangellō: to announce in detail — declare, rehearse, report, show, speak, tell.

Mine: the express image of God, announced unto you — express image and likeness of Me (Genesis 1:26-28).

The Spirit does not invent another image. He shews what Course 2 already named. He glorifies the Son. He does not speak of Himself.

Further reading when the volume is in your hand: Spirit Witness — its own book, not a volume of Presence of Sons 1–4.

Distinction
Mine as the image announced vs a private revelation that never returns to Genesis 1:26-28.

Charge
What is “Mine” in John 16:14-15 as this school ties it to Genesis 1:26-28? Write both. Write the likeness from the words.`,
  ),
  lesson(
    "les-fs-3-16",
    "mod-fs-3-spirit",
    16,
    "Charge and examination of the principle",
    70,
    `Central principle
The third stone is laid when a man can name the three essential baptisms, keep “one baptism” as the only one that saves the soul, keep water as the figure after salvation, and keep the Spirit as witness of the son — without measure, not a slave.

Key Scripture
Hebrews 6:2; Ephesians 4:5; 1 Peter 3:21; Galatians 3:26-27; Galatians 4:6-7; John 16:13-14.

Cluster
All of Course 3. Textbook Chapter 4.

Read
Chapter 4, section XVI. Directed reading when the volumes are in your hand — assigned sections only, not a second course: Spirit Witness; Why We’re Beyond.

Teaching
This lesson is the examination of the principle, not a new doctrine.

You should now be able to teach, from Scripture:

1. Baptismos as washing; Hebrews 6:2 as baptisms.
2. The Word as agency of new birth (Ephesians 5:26; 1 Peter 1:23; John 3:5).
3. Seven in Scripture; three for believers; three agents; baptizō from baptō.
4. Into Christ — one baptism; the only one that saves the soul.
5. Whelmed; put on Christ; Romans 6; Colossians 2; 1 Corinthians 12:13.
6. Water after one is saved — sign, not object.
7. 1 Peter 3:21 — is it the water, or what it figures?
8. The cross, not water, is power (1 Corinthians 1:17-24).
9. Galatians 3:26 with 3:27 in one paragraph.
10. Spirit as witness of sonship; prerequisite new birth; enduement with the witness, not instead of it.
11. Without measure; fullness; complete in Him.
12. Not slaves; power, love, sound mind; you are the fear and dread (Genesis 9:2; Deuteronomy 11:25).
13. Anangellō; Mine; Genesis 1:26-28.

Companions are not a seventh course. Spirit Witness is not a volume of Presence of Sons. Why We’re Beyond is not Fearfully Made.

The next principle is laying on of hands. It is resultant. It is not a substitute for these three stones.

Intensive: write the full page on each of the thirteen. Academic Year: write the thirteen as thirteen tight paragraphs. Same doctrine.

Distinction
Completion of activities vs mastery. Directed companion sections vs treating those books as this course.

Charge
Name the three essential. Why does “one baptism” not cancel water and Spirit? Is it the water that saves, or what it figures? Hold Galatians 3:26 with 3:27. Who is the Spirit sent into? Teach 2 Timothy 1:7 with Genesis 9:2 and Deuteronomy 11:25. What is Mine? Do not submit a feeling in the place of the cluster.`,
  ),
];
