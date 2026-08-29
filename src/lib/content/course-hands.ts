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
    50,
    `Central principle
Laying on of hands is among the first principles. It is viable only as you actualize the more grounding things. It plays a more resultant role, not substantively to the believer.

Key Scripture
Hebrews 6:2 — and of laying on of hands.

Cluster
F intro. Hebrews 6:1-2.

Read
Textbook Chapter 5, section I.

Teaching
This is Course 4 of Foundation School. One curriculum. The fourth of the six principles.

When?

The leaflet answers with nine occasions. This lesson is not yet the nine. This lesson is why “when?” comes after Courses 1–3.

Hands do not invent the son.
Hands do not replace metanoia.
Hands do not replace pistis.
Hands do not replace baptism into Christ, water as figure, or the Spirit as witness.

A man who has not laid those stones and then treats hands as if they were the house has not heard “when?”

The 2015 page printed a further-reading mark with no title. This school names no required companion here.

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
    45,
    `Central principle
Israel laid his hands on Ephraim and Manasseh and blessed Joseph’s sons. The first occasion is blessing men.

Key Scripture
Genesis 48:14.

Cluster
F1. Genesis 48:8-20.

Read
Textbook Chapter 5, section II.

Teaching
Israel stretched out his right hand, and laid it upon Ephraim’s head, who was the younger, and his left hand upon Manasseh’s head, guiding his hands wittingly; for Manasseh was the firstborn.

The blessing is spoken. The hands are laid. Joseph objects. Israel will not uncross them.

This is blessing men — not a technique you copy without the God who spoke to the patriarch. Do not turn the crossed hands into a tenth system.

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
    45,
    `Central principle
The children of Israel put their hands upon the Levites. The Levites are offered before the Lord. This is making offerings.

Key Scripture
Numbers 8:10.

Cluster
F2. Numbers 8:5-15.

Read
Textbook Chapter 5, section III.

Teaching
Thou shalt bring the Levites before the LORD: and the children of Israel shall put their hands upon the Levites.

The hands serve the offering God commanded. Identification and presentation. They do not invent a priesthood, and they do not replace the grounding principles with a ceremony.

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
    45,
    `Central principle
Joshua is already a man in whom is the spirit. Moses lays his hand and gives him a charge. Ordaining does not create the Spirit in the man.

Key Scripture
Numbers 27:18, 23.

Cluster
F3. Numbers 27:15-23.

Read
Textbook Chapter 5, section IV.

Teaching
The LORD said unto Moses, Take thee Joshua the son of Nun, a man in whom is the spirit, and lay thine hand upon him.

He laid his hands upon him, and gave him a charge, as the LORD commanded by the hand of Moses.

The Spirit is already named in the man before the hand. The charge is given as the LORD commanded. Before the priest. Before all the congregation.

Do not make ordination a substitute for the Spirit already in the man. The text will not let you.

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
    45,
    `Central principle
Joshua was full of the spirit of wisdom; for Moses had laid his hands upon him. The occasion is imparting Spirit.

Key Scripture
Deuteronomy 34:9.

Cluster
F4. Deuteronomy 34:9 with Numbers 27:18, 23.

Read
Textbook Chapter 5, section V.

Teaching
Joshua the son of Nun was full of the spirit of wisdom; for Moses had laid his hands upon him: and the children of Israel hearkened unto him, and did as the LORD commanded Moses.

Hold this next to Numbers 27. Joshua was a man in whom is the spirit before the charge; he is full of the spirit of wisdom after the hands. Do not flatten the two texts into one slogan. Do not invent a tenth occasion to explain them.

Israel hearkened. The fruit is not a feeling in Moses. It is a people who hear the man charged.

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
    45,
    `Central principle
He laid His hands on the children. The disciples rebuked the bringing. The Lord would not.

Key Scripture
Matthew 19:13-15.

Cluster
F5.

Read
Textbook Chapter 5, section VI.

Teaching
Then were there brought unto Him little children, that He should put His hands on them, and pray: and the disciples rebuked them. But Jesus said, Suffer little children, and forbid them not, to come unto Me: for of such is the kingdom of heaven. And He laid His hands on them, and departed thence.

The leaflet printed Matthew 19:15. The account is 13-15.

This is blessing children — not a dedication invented to replace new birth, and not a small thing you skip because the children are small.

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
    50,
    `Central principle
Mighty works by His hands. He laid His hands on a few sick and healed them. They shall lay hands on the sick. By the hands of the apostles many signs.

Key Scripture
Mark 6:2, 5; Mark 16:18; Acts 5:12.

Cluster
F6.

Read
Textbook Chapter 5, section VII.

Teaching
Nazareth: many were astonished that such mighty works were wrought by His hands. He could there do no mighty work, save that He laid His hands upon a few sick folk, and healed them.

The risen Lord’s word: they shall lay hands on the sick, and they shall recover.

Acts 5:12 — by the hands of the apostles were many signs and wonders wrought among the people.

This is not a substitute for repentance, faith, or baptism into Christ. It is an occasion in the file. Teach the texts. Do not invent a tenth healing system beside them.

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
    45,
    `Central principle
God wrought special miracles by the hands of Paul. God wrought. By the hands.

Key Scripture
Acts 19:11.

Cluster
F7. Acts 19:11-12.

Read
Textbook Chapter 5, section VIII.

Teaching
God wrought special miracles by the hands of Paul.

The next verse tells of cloths from his body. The occasion the leaflet names is performing miracles — Acts 19:11. Do not make Paul the source. Do not make the cloth a tenth occasion.

Distinction
God wrought by the hands vs the man as the source, or a cloth-system beside the file.

Charge
Write Acts 19:11. Who wrought? By whose hands? What tenth will you refuse to add from verse 12?`,
  ),
  lesson(
    "les-fs-4-09",
    "mod-fs-4-file",
    9,
    "Imparting gifts — 1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2",
    50,
    `Central principle
The gift given by prophecy with the laying on of the hands of the presbytery. Stir up the gift by the putting on of Paul’s hands. Hebrews 6:2 names the principle and is cited again here.

Key Scripture
1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2.

Cluster
F8.

Read
Textbook Chapter 5, section IX.

Teaching
Neglect not the gift that is in thee, which was given thee by prophecy, with the laying on of the hands of the presbytery.

Stir up the gift of God, which is in thee by the putting on of my hands.

Hebrews 6:2 names laying on of hands among the first principles. The leaflet cites that same verse again under this occasion. The principle and the gift-occasion are not two religions. One file.

The gift is not to be neglected. It is to be stirred.

Do not treat a gift as if it were the foundation. Do not treat the foundation as if it forbade gifts.

Distinction
Gift with hands vs gift as a new foundation, or a foundation that has no room for the gift the verses name.

Charge
Write 1 Timothy 4:14 and 2 Timothy 1:6. What is not to be neglected? What is to be stirred? Why is Hebrews 6:2 in this cluster twice?`,
  ),
  lesson(
    "les-fs-4-10",
    "mod-fs-4-file",
    10,
    "Imparting Spirit baptism — Acts 8:17-24; 9:17; 19:6",
    55,
    `Central principle
They laid hands; they received the Holy Ghost. Ananias on Saul. Paul at Ephesus. Simon’s money is in the account so you will not make this a market.

Key Scripture
Acts 8:17-24; Acts 9:17; Acts 19:6.

Cluster
F9.

Read
Textbook Chapter 5, section X.

Teaching
Then laid they their hands on them, and they received the Holy Ghost. Simon offered money. Peter said the gift of God cannot be purchased. Teach the hands. Do not skip the rebuke.

Ananias putting his hands on Saul: that thou mightest receive thy sight, and be filled with the Holy Ghost.

When Paul had laid his hands upon them, the Holy Ghost came on them; and they spake with tongues, and prophesied.

Course 3 already taught that Christ baptizes in the Spirit, and that the Spirit may be given before water or after it. This occasion is imparting Spirit baptism by hands in these accounts. It does not cancel the agent Course 3 named. It does not make hands the foundation.

Distinction
The ninth occasion vs buying the gift, or making hands the agent in place of Christ.

Charge
Write Acts 8:17-20, 9:17, and 19:6. What does Simon want to buy? What must you refuse if the gift of God cannot be purchased?`,
  ),
  lesson(
    "les-fs-4-11",
    "mod-fs-4-file",
    11,
    "The nine as one file — no invented tenth",
    50,
    `Central principle
Nine occasions. Each its own text. No tenth. Blessing children is not healing. Ordaining is not buying the gift.

Key Scripture
Hebrews 6:2 with the nine texts.

Cluster
F1–F9.

Read
Textbook Chapter 5, section XI.

Teaching
Write them until you can teach them without a tenth:

1. Blessing men — Genesis 48:14.
2. Making offerings — Numbers 8:10.
3. Ordaining — Numbers 27:18, 23.
4. Imparting Spirit — Deuteronomy 34:9.
5. Blessing children — Matthew 19:13-15.
6. Healing the sick — Mark 6:2, 5; 16:18; Acts 5:12.
7. Performing miracles — Acts 19:11.
8. Imparting gifts — 1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2.
9. Imparting Spirit baptism — Acts 8:17-24; 9:17; 19:6.

All these attest a record across Holy Scripture. Each occasion remains itself.

Distinction
Nine as one file vs one vague “hands” practice, or a tenth invented to make the file neater.

Charge
Write the nine with their texts from memory. No tenth. If you added one, strike it and name why it is not in the leaflet.`,
  ),
  lesson(
    "les-fs-4-12",
    "mod-fs-4-file",
    12,
    "Charge — resultant practice",
    60,
    `Central principle
When? After the more grounding things are actualized. Hands remain among the first principles. They do not become the house.

Key Scripture
Hebrews 6:1-2.

Cluster
All of Course 4. Textbook Chapter 5. Q26–Q28.

Read
Chapter 5, section XII.

Teaching
This lesson is the examination of the principle, not a new doctrine.

You should now be able to teach, from Scripture:

1. Resultant, not the foundation. Viable after Courses 1–3.
2. Blessing men — Genesis 48:14.
3. Offerings — Numbers 8:10.
4. Ordaining — Numbers 27:18, 23. The Spirit already in the man.
5. Imparting Spirit — Deuteronomy 34:9. Held beside Numbers 27, not flattened.
6. Blessing children — Matthew 19:13-15.
7. Healing — Mark 6:2, 5; 16:18; Acts 5:12.
8. Miracles — Acts 19:11. God wrought.
9. Imparting gifts — 1 Timothy 4:14; 2 Timothy 1:6; Hebrews 6:2 twice in the file.
10. Imparting Spirit baptism — Acts 8:17-24 (Simon refused); 9:17; 19:6.
11. Nine. No tenth. No required companion the leaflet did not name.

The next principle is resurrection of the dead. Two kinds: spiritual and material.

Intensive: write the nine as nine full pages, then the three charges. Academic Year: write the nine as nine tight paragraphs, then the three charges. Same doctrine.

Distinction
Completion of activities vs mastery. Resultant practice vs a new foundation made of hands.

Charge
Write the nine with their texts. Which earlier principle must already be laid before you treat hands as if they were the foundation? Name one practice you will not treat as a foundation. Do not submit a tenth. Do not submit a feeling in the place of the file.`,
  ),
];
