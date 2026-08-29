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
    courseId: "course-fs-repentance",
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [bookId],
    body,
  };
}

export const repentanceModules = [
  {
    id: "mod-fs-1-oracles",
    courseId: "course-fs-repentance" as const,
    number: 1,
    title: "The oracles",
    description: "Graphē, babes, labour, the six named. Textbook Chapter 1.",
  },
  {
    id: "mod-fs-1-metanoia",
    courseId: "course-fs-repentance" as const,
    number: 2,
    title: "Metanoia and the two old things",
    description: "Cause, not consequence. Textbook Chapter 2.",
  },
  {
    id: "mod-fs-1-christ",
    courseId: "course-fs-repentance" as const,
    number: 3,
    title: "Christ the way",
    description: "Blood, new creature, receive Him. Textbook Chapter 2.",
  },
];

export const repentanceLessons: Lesson[] = [
  lesson(
    "les-fs-1-01",
    "mod-fs-1-oracles",
    1,
    "The graphē and the premiere convention",
    50,
    `Central principle
Holy Writ is the imprimatur. This school pillows in the graphē, not in nonliteral religiousisms.

Key Scripture
John 10:35 — the scripture cannot be broken.

Cluster
John 10:34-36 with Psalm 82:6. The Lord appeals to that which is written.

Read
Textbook Chapter 1, sections I–II.

Teaching
Jesus answered a charge of blasphemy by the writing. He would not let men set His person against the Scripture. The 2015 leaflet calls that writing Holy Writ: unchallenged authority, whether for persons, organizations, governments, or nations.

A naturalistic Christian experience follows the teachings, or manifests the qualities or spirit, of Jesus Christ. It conforms to the unleavened sincerity and truth of the graphē. The other thing — ersatz analogical religiousisms — will not sit down under the text.

This book and this course are the premiere convention for hearing from God and for growth: first principles, then maturity (perfection). You do not skip the foundation. You do not relaid it as a lifestyle.

Distinction
Scripture is not “religiousism.” The school does not invent a more convenient Bible.

Charge
Write one page: where have you treated a likeness of the faith as if it were the graphē? What verse will you continue in this week?`,
  ),
  lesson(
    "les-fs-1-02",
    "mod-fs-1-oracles",
    2,
    "Hebrews 5:11–12 — you ought to be teachers",
    50,
    `Central principle
There is a time when you ought to be teachers. Milk after that time is a recession, not a kindness.

Key Scripture
Hebrews 5:11-12.

Cluster
Hebrews 5:11-14; 6:1-3.

Read
Textbook Chapter 1, sections III and X.

Teaching
The writer had hard things to utter concerning the Son. He could not, because they were dull of hearing. For the time, they ought to be teachers. They had become such as have need of milk, and not of strong meat.

Milk is food for a newborn. It is an indictment to a man who has had years under the word. The first principles are not a lesser gospel. They are the foundation that makes meat possible.

Hebrews 6:3 — “And this will we do, if God permit.” After the six are named, we go on to perfection if God permit. That is a short hinge, not a seventh course. You may enrol in fifty-two weeks. You cannot enrol God.

Distinction
Leaving the first principles (Hebrews 6:1) is not forgetting them. It is not laying them again once they are laid. A man who never laid them is not leaving them. He is skipping them.

Charge
Where are you still a hearer who must be taught the oracles again? Name the time you have already had. Write Hebrews 5:12 in your own hand and reason it, not only recite it.`,
  ),
  lesson(
    "les-fs-1-03",
    "mod-fs-1-oracles",
    3,
    "Apeiros — unskilled in the word of righteousness",
    45,
    `Central principle
Unskill here is inexperience in the word of righteousness, not lack of church activity.

Key Scripture
Hebrews 5:13 — every one that useth milk is unskilful (apeiros) in the word of righteousness.

Cluster
Hebrews 5:12-14.

Read
Textbook Chapter 1, section IV.

Teaching
Apeiros: inexperienced, ignorant, unskilful. The leaflet is severe: absence of sound judgment and presence of unskilfulness produce aridity and tergiversation, even in age-old organizations that appear Christianized. What follows is damnable accepted heresies called doctrines.

The blame is failure to know the Scriptures and to align. Soft copy or hard copy does not matter if there is no labour.

Distinction
Skill is not performance. A crowded room can still be apeiros.

Charge
What is your actual study labour this week? Name the hour and the text. If you cannot name it, you are not yet a workman.`,
  ),
  lesson(
    "les-fs-1-04",
    "mod-fs-1-oracles",
    4,
    "Nēpios — two marks of babes",
    45,
    `Central principle
A babe is dull of hearing and unskilled in the Word, which is the basis for salvation.

Key Scripture
Hebrews 5:11 and 5:13.

Cluster
Hebrews 5:11-14.

Read
Textbook Chapter 1, section V.

Teaching
Nēpios: simple-minded, immature Christian, babe, child. Two marks, as the source sets them: (1) dull of hearing; (2) unskilled in the Word.

Do not take “babe” as endearment in this chapter. It is a diagnosis. A person may be sincere and still be nēpios. An organization may be old and still be nēpios.

The Word is the basis for salvation. Unskill there is unskill at the root.

Distinction
Babe vs teacher whose senses are exercised to discern both good and evil (Hebrews 5:14).

Charge
Name your dullness of hearing. Name where you are apeiros in the word of righteousness. Do not write a general confession. Write the place.`,
  ),
  lesson(
    "les-fs-1-05",
    "mod-fs-1-oracles",
    5,
    "Spoudazō and 2 Timothy 2:15",
    45,
    `Central principle
Study is labour. Approval here is the approval of a workman who rightly divides the word of truth.

Key Scripture
2 Timothy 2:15.

Cluster
2 Timothy 2:3-15 — suffer as a good soldier; be not ashamed.

Read
Textbook Chapter 1, section VI.

Teaching
Spoudazō, as the leaflet uses it: speed, effort, promptness, earnestness; diligence, endeavour, labour, study — intellectually. Speed is not haste that skips context. It is earnestness that will not postpone the work.

Academic Year and Intensive are the same teaching. The difference is hours on the same oracles.

Distinction
Study as labour vs study as collecting quotations.

Charge
Do a word drill on 2 Timothy 2:15 until you can reason “approved,” “workman,” and “rightly dividing” without a slogan. Write six sentences.`,
  ),
  lesson(
    "les-fs-1-06",
    "mod-fs-1-oracles",
    6,
    "Knowledge: perception, learning, reasoning",
    40,
    `Central principle
Knowledge is a mental result of perception and learning and reasoning. The practice is word exercise, word drill.

Key Scripture
Hebrews 5:14 — senses exercised to discern.

Cluster
Hebrews 5:13-14; 2 Timothy 2:15.

Read
Textbook Chapter 1, section VII.

Teaching
Perception: you see what the text says. Learning: you take it in and keep it. Reasoning: you hold a cluster and draw the distinction the text makes.

A man may quote a verse and still be a babe. The questions this school asks are charges, not decorations.

Distinction
Knowledge vs information collected.

Charge
Take Hebrews 5:12. Perceive it (what it says). Learn it (write it). Reason it (why “ought to be teachers” and “become” belong in one verse).`,
  ),
  lesson(
    "les-fs-1-07",
    "mod-fs-1-oracles",
    7,
    "John 8:32 — truth makes free",
    40,
    `Central principle
Truth makes free where you continue in His word. This is not a motto for the cover.

Key Scripture
John 8:31-36.

Cluster
John 8:31-36 with Hebrews 5:11-14.

Read
Textbook Chapter 1, section VIII.

Teaching
“If ye continue in my word, then are ye my disciples indeed; and ye shall know the truth, and the truth shall make you free.” Freedom here is over against being the servant of sin (John 8:34-36).

Dull hearing will not get you that freedom. Unskill in the word of righteousness will not get you that freedom.

Distinction
Freedom from remaining in His word vs a political or emotional cry.

Charge
Free from what, in John 8, if you continue in His word? Write the answer from the cluster, then name one word of His you will continue in this week.`,
  ),
  lesson(
    "les-fs-1-08",
    "mod-fs-1-metanoia",
    8,
    "Seven words for repent — metanoia vs metamellomai",
    55,
    `Central principle
Metanoia is a real change of mind toward sin and its cause. Metamellomai regrets consequences, not the cause.

Key Scripture
Hebrews 6:1; Matthew 27:3; Luke 13:3; Matthew 3:8.

Cluster
The seven words: nacham (H5162), shuwb (H7725), nocham (H5164), nichuwm (H5150), metanoeō (G3340), metamellomai (G3338), metanoia (G3341).

Read
Textbook Chapter 2, sections I–II.

Teaching
The school list is these seven. There is no eighth unless the owner later adds one.

Judas “repented himself” (metamellomai) when he saw the condemnation (Matthew 27:3). He regretted the consequence. He did not come to a new mind over sin and its cause.

Metanoia includes reformation: new creature, all things new (2 Corinthians 5:17). It is not a tear without a turn.

Distinction
Metanoia vs metamellomai. Cause vs consequence. Reformation vs remorse only.

Charge
Write the seven words with one verse each. Then write ten lines: where have you treated regret as if it were metanoia?`,
  ),
  lesson(
    "les-fs-1-09",
    "mod-fs-1-metanoia",
    9,
    "Cause, not consequence — Luke 16:19-31",
    55,
    `Central principle
Hell is a consequence. It is not the definition of repentance.

Key Scripture
Luke 16:19-31; Revelation 20:10-15.

Cluster
Luke 16:19-31 (rich man and Lazarus). Revelation 20:10-15 (lake of fire, book of life, second death).

Read
Textbook Chapter 2, section III.

Teaching
The 2015 PDF printed Matthew 16:19-31 here. That print was an error. This school teaches Luke 16:19-31.

The rich man in torment is the consequence. A great gulf is fixed. Moses and the prophets were already enough for the living. Fear of that place is not yet a change of mind over sin and its cause.

Revelation 20:10-15 is the end of the consequence. Chapter 7 will open it as eternal judgment. Do not turn this lesson into that chapter.

Distinction
Repentance over sin and its cause vs Hell-avoidance.

Charge
Where have you treated Hell-avoidance as if it were metanoia? Write Luke 16:27-31 in your own words. What did Abraham refuse?`,
  ),
  lesson(
    "les-fs-1-10",
    "mod-fs-1-metanoia",
    10,
    "Nekros ergon — dead works",
    45,
    `Central principle
Dead works are the works of the old man and the old nature. The conscience is later purged from them by blood (Hebrews 9:14).

Key Scripture
Hebrews 6:1; Ephesians 2:1; Ephesians 4:22; Romans 6:23.

Cluster
Nekros ergon / nekra erga; 2 Corinthians 5:17; Ephesians 2:1-2.

Read
Textbook Chapter 2, section I and the opening of IV.

Teaching
Trespasses, as the source glosses Ephesians 2:1, are deviation from moral equity, and sins. The wages is death.

Dead works are not “things I did that felt empty.” They are the works of the old nature — the spirit and nature of the devil, and the sins that issue.

Distinction
Dead works vs the service of the living God after the conscience is purged (Hebrews 9:14).

Charge
Name one work you have called “dead” because it bored you, and one the Scripture would call a dead work because it is of the old man. Do not confuse them.`,
  ),
  lesson(
    "les-fs-1-11",
    "mod-fs-1-metanoia",
    11,
    "Old thing 1 — the old man",
    55,
    `Central principle
The old man is nothing more nor less than the spirit and nature of the devil working in men of disobedience.

Key Scripture
Ephesians 4:22; John 8:44; Ephesians 2:2; 1 John 3:8-9; 5:18; 2 Corinthians 4:4.

Cluster
The old-man file in Textbook Chapter 2, section IV.

Read
That section, old thing 1 only.

Teaching
Put off the old man, which is corrupt according to the deceitful lusts. Ye are of your father the devil. The spirit now worketh in the children of disobedience. The god of this world hath blinded minds. He that committeth sin is of the devil. Whosoever is born of God doth not commit sin; the wicked one toucheth him not.

Do not soften this cluster. Do not turn it into a personality type.

Distinction
Old man vs outward sin. Both must pass. They are not one pile.

Charge
Can you teach John 8:44, Ephesians 2:2, and 1 John 3:8-9 as one cluster without calling the old man “a bad habit”? Write the teaching in one page.`,
  ),
  lesson(
    "les-fs-1-12",
    "mod-fs-1-metanoia",
    12,
    "Old thing 2 — outward sin",
    50,
    `Central principle
Outward sin is the second old thing. It has its own Scripture file. It is not another name for the old man.

Key Scripture
Galatians 5:19-21; 1 John 3:4; James 1:13-15; Mark 7:20-23; Romans 1:18-32; Romans 4:15.

Cluster
Textbook Chapter 2, section IV, old thing 2.

Read
That section only. Do not skip the lists.

Teaching
Sin is the transgression of the law. Lust conceives, brings forth sin, sin finished brings death. What proceeds from the heart defiles the man. The works of the flesh are manifest. The wrath of God is revealed against ungodliness.

You cannot hide the old man behind a list of acts. You cannot hide the acts behind a theory of nature.

Distinction
Two old things, not one confession.

Charge
Walk Galatians 5:19-21 and Mark 7:20-23 without calling them “the old man.” Then state what must pass besides the list.`,
  ),
  lesson(
    "les-fs-1-13",
    "mod-fs-1-metanoia",
    13,
    "Romans 6:23 — the wages",
    40,
    `Central principle
The wages of sin is death. Sin is the cause of all death and depravity. Salvation from sin is the salvation you need.

Key Scripture
Romans 6:23 in Romans 6:16-23.

Cluster
Romans 6:16-23; 2 Corinthians 5:17.

Read
Textbook Chapter 2, section V.

Teaching
You were servants of sin. You are to be servants of righteousness. Death is the wage. Eternal life is the gift of God through Jesus Christ our Lord.

Do not build a repentance that wants to keep the cause and escape the wage. Three kinds of death wait for Course 6. Here, refuse a shallow “death.”

Distinction
Wage vs gift. Cause vs consequence.

Charge
What other “salvation” have you put in the place of salvation from sin? Write Romans 6:23, then write the verse that names the gift.`,
  ),
  lesson(
    "les-fs-1-14",
    "mod-fs-1-christ",
    14,
    "Christ the only way — Hebrews 9:14",
    55,
    `Central principle
The only way out of sin unto true repentance is Christ Jesus. His blood purges the conscience from dead works.

Key Scripture
Hebrews 9:14; Ephesians 2:1-5; 2 Corinthians 5:17.

Cluster
Hebrews 9:11-14; Ephesians 2:1-5.

Read
Textbook Chapter 2, section VI, through 2 Corinthians 5:17.

Teaching
The phrase “dead works” is Hebrews’ own phrase. The conscience is purged from them by the blood of Christ, who through the eternal Spirit offered Himself without spot to God, to serve the living God.

You were dead in trespasses and sins. God quickened you together with Christ. If any man be in Christ, he is a new creature.

Self-reformation without that blood is still a dead work.

Distinction
Christ the way vs self-reformation as the way.

Charge
How does blood purge the conscience from dead works? Answer from Hebrews 9:14 in a paragraph a babe could follow.`,
  ),
  lesson(
    "les-fs-1-15",
    "mod-fs-1-christ",
    15,
    "No other name — Acts 4:12",
    40,
    `Central principle
There is none other name under heaven given among men whereby we must be saved.

Key Scripture
Acts 4:10-12.

Cluster
Acts 4:8-12; 2 Corinthians 5:17.

Read
Textbook Chapter 2, section VI, Acts 4:12.

Teaching
Peter before rulers: the stone rejected, Jesus Christ of Nazareth, crucified, whom God raised. Neither is there salvation in any other.

No second saviour. No rite in the place of His name. Water is a sign after one is saved. It is not this stone.

Distinction
The name that saves vs signs that follow.

Charge
Write Acts 4:12. Then write one sentence you will not say again if it puts another name in that place.`,
  ),
  lesson(
    "les-fs-1-16",
    "mod-fs-1-christ",
    16,
    "Receive Him — John 1:12; Romans 10:8-9",
    50,
    `Central principle
As many as received Him, to them gave He power to become the sons of God. Confess the Lord Jesus; believe God raised Him; thou shalt be saved.

Key Scripture
John 1:12-13; Romans 10:8-10.

Cluster
John 1:11-13; Romans 10:6-10.

Read
Textbook Chapter 2, section VII.

Teaching
Born not of blood, nor of the will of the flesh, nor of the will of man, but of God. The word is nigh thee, in thy mouth and in thy heart — the word of faith. With the heart man believeth unto righteousness; with the mouth confession is made unto salvation.

Sonship language begins here. Course 2 will open the heir. Course 3 will open the Spirit’s witness. You do not wait for those courses to receive Him.

The leaflet’s charge stands: Receive Him today.

Distinction
Receiving Him vs enrolling in a course.

Charge
Have you received Him? Write the confession Romans 10:9 actually asks. If you have, write what “power to become the sons of God” means from John 1:12-13, not from a slogan.`,
  ),
  lesson(
    "les-fs-1-17",
    "mod-fs-1-christ",
    17,
    "Charge and examination of the principle",
    70,
    `Central principle
The first stone is laid when a man has changed his mind over sin and its cause, and has received the One whose blood purges the conscience from dead works.

Key Scripture
Hebrews 6:1; 2 Corinthians 5:17; Hebrews 9:14; Acts 4:12; John 1:12; Romans 10:9.

Cluster
All of Course 1. Textbook Chapters 1–2.

Read
Chapter 2, sections VIII–IX. Directed reading: The Power of Salvation, when that volume is in your hand — assigned sections only, not a second course.

Teaching
This lesson is the examination of the principle, not a new doctrine.

You should now be able to teach, from Scripture:

1. Graphē over religiousism.
2. Babe vs teacher; apeiros; nēpios; two marks.
3. Spoudazō as labour.
4. The seven words; metanoia vs metamellomai.
5. Cause vs consequence (Luke 16:19-31; Revelation 20:10-15).
6. Two old things.
7. Wages and the only salvation you need.
8. Christ the only way; no other name; receive Him.

Intensive: write the full page on each of the eight. Academic Year: write the eight as eight tight paragraphs. Same doctrine.

Distinction
Completion of activities vs mastery. A certificate later will ask more than a click.

Charge
Write the principle as you would teach it to a babe, then as you would stand behind it before a teacher. Name the two old things. Name the difference between metanoia and metamellomai. Do not submit a feeling in the place of the cluster.`,
  ),
];
