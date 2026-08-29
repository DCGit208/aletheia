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
    75,
    `Central principle
Holy Writ is the imprimatur. This school pillows in the graphē, not in nonliteral religiousisms.

Key Scripture
John 10:35 — the scripture cannot be broken.

Cluster
John 10:34-36 with Psalm 82:6. The Lord appeals to that which is written.

Read
Textbook Chapter 1, sections I–II.

Teaching
Holy Writ is writings or sayings of unchallenged, unquestionable authority. The Lord Jesus answered a charge of blasphemy by appeal to that which was written. He would not let men set His person against the Scripture.

John 10:34-36 — “Jesus answered them, Is it not written in your law, I said, Ye are gods? If he called them gods, unto whom the word of God came, and the scripture cannot be broken; Say ye of him, whom the Father hath sanctified, and sent into the world, Thou blasphemest; because I said, I am the Son of God?”

The writing He cites is Psalm 82:6 — “I have said, Ye are gods; and all of you are children of the most High.” Course 2 will open that psalm with verse 7 and with this same appeal. Here the point is narrower and it will stay narrower: the Lord pillows in the graphē. The school pillows where He pillowed. You do not get a private imprimatur because you are sincere. You do not get a safer Bible because an organization is old.

The 2015 leaflet calls that writing Holy Writ: unchallenged authority, whether for persons, organizations, governments, or nations. Graphē is not a mood that accompanies a meeting. It is the writing. If you will hear from God in this year, you will hear Him where He has spoken.

A naturalistic Christian experience follows the teachings, or manifests the qualities or spirit, of Jesus Christ. It conforms to the unleavened sincerity and truth of the graphē. The other thing — ersatz analogical, nonliteral religiousisms — is a likeness of the faith that will not sit down under the text. A likeness can use the vocabulary. A likeness can fill a room. A likeness will not be judged by the writing. This school will not trade the graphē for that likeness.

This book and this course are the premiere convention for hearing from God and for growth. Growth is two movements, not one slogan: first principles, then maturity — perfection. You do not skip the foundation to appear mature. You do not relaid the foundation every year as a lifestyle and call that growth. Hebrews 6:1 says we do not lay again the foundation once it is laid. We go on.

The cover of the textbook may say Truth · Knowledge · Maturity. That line belongs to the book. The house that holds the book is Aletheia: Truth · Identity · Dominion. Do not confuse the two. This course is the first stone of the first movement. You will not be asked to invent a more convenient Bible.

Sit the charge. John 10:31-33 — “Then the Jews took up stones again to stone him. Jesus answered them, Many good works have I shewed you from my Father; for which of those works do ye stone me? The Jews answered him, saying, For a good work we stone thee not; but for blasphemy; and because that thou, being a man, makest thyself God.” He does not answer with a likeness. He answers with “Is it not written.” Graphē is the court He will stand in.

Imprimatur, as this school uses it, is that unchallenged mark. Persons are under it. Organizations are under it. Governments and nations are under it. You do not outrank the writing by office. You do not outrank it by sincerity. You do not outrank it by a year of enrolment. If a teaching will not sit down under John 10:35, it is religiousism, however Christian the vocabulary.

The premiere convention is first principles, then maturity. Hebrews 5:12 already waits in the next lesson: the first principles of the oracles of God. This book is not a second Bible. It opens what is already written. If you treat the textbook as a more convenient Bible, you have already left the convention. If you treat the graphē as a quarry for mottoes, you have already taken up the likeness.

Write this week as a man under the writing. Name the likeness you have used as if it were Scripture. Name the verse you will continue in. Do not name a verse you will not open.

Labour
This is the page-work. The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine. The hours differ. The oracles do not.

The Year — one page. Quote John 10:34-36 in full. Name what charge the Lord was answering. Name what writing He appealed to (Psalm 82:6). Then write, in your own hand, what “the scripture cannot be broken” forbids you to do to a likeness of the faith.

Intensive — three pages on that same cluster. Page 1 is The Year page. Page 2: sit John 10:34-36 in its chapter — the Jews take up stones; they say He, being a man, maketh Himself God; He answers from the writing. Do not import Course 2’s later use of Psalm 82:7 here. Page 3: teach the premiere convention as you would stand behind it before a teacher: first principles, then maturity; graphē over religiousism; this book as the convention for hearing, not a second Bible.

Write in your own hand. Quote the governing verses in full. Name graphē as this school uses it. Draw the distinction: writing versus religiousism. The page is not a journal of feelings.

Distinction
Scripture is not “religiousism.” The school does not invent a more convenient Bible.

Charge
Write what you will teach: Holy Writ is the imprimatur; the Lord answered blasphemy by the writing; a likeness of the faith will not sit down under the text; growth is first principles, then maturity. Then write the page the Labour named. Name one place you have treated a likeness as if it were the graphē, and the verse you will continue in this week.`,
  ),
  lesson(
    "les-fs-1-02",
    "mod-fs-1-oracles",
    2,
    "Hebrews 5:11–12 — you ought to be teachers",
    75,
    `Central principle
There is a time when you ought to be teachers. Milk after that time is a recession, not a kindness.

Key Scripture
Hebrews 5:11-12.

Cluster
Hebrews 5:11-14; 6:1-3.

Read
Textbook Chapter 1, sections III and X.

Teaching
The writer had hard things to utter concerning the Son. He could not, because they were dull of hearing. The fault was not in the doctrine. The fault was in the ear.

Hebrews 5:11-14 — “Of whom we have many things to say, and hard to be uttered, seeing ye are dull of hearing. For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat. For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.”

Mark the time. They had been under the word long enough that they ought to be teachers. They had become such as need milk. Become is a direction. A people can recede. Milk is not an insult to a newborn. Milk is an indictment to a man who has had years to grow. Strong meat is for those of full age. The first principles are not a lesser gospel. They are the foundation that makes meat possible.

Hebrews 6:1-2 names the six: “Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.” Leaving them does not mean forgetting them. It means they are laid, and you go on to perfection. A man who has never laid them is not “leaving” them. He is skipping them.

Hebrews 6:3 — “And this will we do, if God permit.” After the six are named, we go on to perfection if God permit. That is a short hinge, not a seventh course. The writer does not treat maturity as a human schedule you can force. He treats it as a work we intend, under permission. You may enrol in fifty-two weeks. You cannot enrol God. Walk the year as labour. Ask for permission to go on. Do not call unfinished foundations “perfection.”

This school exists because the oracles have a beginning that must be known, distinguished, reasoned, and taught. If you cannot teach repentance from dead works from the Scriptures, you are not ready to speak as if you were past it.

Hear the “of whom.” Hebrews 5:10 has just named Melchisedec. The hard things concern the Son after that order. The writer is not withholding milk because he is unkind. He is unable to utter meat because the ear is dull. Dullness is not a quiet temperament. It is an ear that has had time and has receded.

“Teach you again” is the indictment. The oracles were already given. They need to be taught again because they were not laid. Milk after years is not patience. It is “become.” A people can move backward while they keep the meetings.

Hebrews 6:1-2 will not let you merge the six. Repentance from dead works is not faith toward God. Baptisms are not hands. Resurrection is not eternal judgment. You do not skip the first stone because you have heard the sixth named. You do not call unfinished foundations “perfection” because you have enrolled for fifty-two weeks.

Hebrews 6:3 remains the hinge: “And this will we do, if God permit.” Permission is not fatalism. It is dependence. You labour. You ask. You do not enrol God. If you cannot yet teach this first principle from the Scriptures, you are still in 5:12 — needing to be taught again — and you will not pretend you have left the principles.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Hebrews 5:12 in your own hand. Reason “ought to be teachers,” “teach you again,” “become,” and “milk” in that one verse. Name the time you have already had under the word. Do not write a general confession.

Intensive — three pages. Page 1 is that tight page. Page 2: write Hebrews 5:11-14 in full, then Hebrews 6:1-3 in full. Show how “leaving” in 6:1 is not forgetting, and how 6:3 is dependence, not a seventh principle. Page 3: teach the cluster as you would stand behind it before a teacher — dull hearing, recession, the six named, if God permit.

Write in your own hand. Quote Hebrews 5:11-14 and 6:1-3 as the Labour named. The page is not a journal of feelings.

Distinction
Leaving the first principles (Hebrews 6:1) is not forgetting them. It is not laying them again once they are laid. A man who never laid them is not leaving them. He is skipping them.

Charge
Write what you will teach: there is a time when a hearer ought to be a teacher; milk after that time is a recession; the six are named; we go on if God permit. Then write the page the Labour named. Where are you still a hearer who must be taught the oracles again?`,
  ),
  lesson(
    "les-fs-1-03",
    "mod-fs-1-oracles",
    3,
    "Apeiros — unskilled in the word of righteousness",
    75,
    `Central principle
Unskill here is inexperience in the word of righteousness, not lack of church activity.

Key Scripture
Hebrews 5:13 — every one that useth milk is unskilful (apeiros) in the word of righteousness.

Cluster
Hebrews 5:12-14.

Read
Textbook Chapter 1, section IV.

Teaching
Hebrews 5:13 — “For every one that useth milk is unskilful in the word of righteousness: for he is a babe.”

Unskilful is Greek apeiros: inexperienced, that is, ignorant — unskilful. The inexperience is not in crowding a meeting. It is in the word of righteousness. The verse will not let you hide unskill behind a calendar of services. A man may be present every week and still be apeiros. An organization may be age-old and still be apeiros.

The leaflet is severe: the absence of reasonability (sound judgment) and the presence of unskilfulness produce aridity and tergiversation among persons, and even among age-old organizations that appear Christianized. What follows is damnable accepted heresies called doctrines. That sentence is not an insult to fill a page. It is a diagnosis of what unskill breeds. Aridity is dryness where there should have been the word. Tergiversation is turning, equivocating, shifting — a people who will not sit down under the text and therefore cannot stay with a doctrine.

That lack of skill is blamed on failure to realize the scholarly impetus of the Scripture and to align accordingly: failure to know the Scriptures, whether in soft copy or hard. Soft copy or hard copy does not matter if there is no labour. The cure is not a louder room. The cure is labour in the word.

Hebrews 5:14 remains in the cluster: “But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.” Full age is not years since enrolment. It is senses exercised by use. Use is labour. You will not become skilful by collecting headings. You become skilful by holding the word of righteousness until you can discern.

The Word is the basis for salvation. If you are unskilled there, you are unskilled at the root. This piece is written so that you may experience productive living, be in control, and experience godliness in all capacities — not by a slogan, but by skill in the word of righteousness.

Hebrews 5:12 has already said they have need that one teach them again which be the first principles of the oracles of God. 5:13 names what that need is: unskilful in the word of righteousness. Apeiros is not “new to the building.” It is inexperience in that word. The word of righteousness is not a topic among topics. It is the word by which a man is aligned, or by which he is left arid.

The leaflet’s chain is severe and it is exact. Absence of sound judgment plus presence of unskilfulness produces aridity and tergiversation. Aridity is a people dry of the oracles while they still speak Christian. Tergiversation is a people who will not stay with a doctrine because they never knew the Scriptures that would have held them. Damnable accepted heresies called doctrines follow that unskill. An age-old organization can wear the name and still be that chain.

Soft copy or hard copy is not the issue. A man with a phone full of Bibles can be apeiros. A man with a worn book and no labour can be apeiros. The scholarly impetus of the Scripture is not a degree. It is knowing what is written and aligning. The cure is labour in the word. The next lessons will name that labour spoudazō and word drill. This lesson will not let you substitute a crowded room for that labour.

Name the hour. Name the text. If you cannot, you are not yet a workman, however present you have been.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Hebrews 5:13. Define apeiros as the source uses it: inexperienced, ignorant, unskilful — in the word of righteousness. Then name your actual study labour this week: the hour and the text. If you cannot name it, you are not yet a workman. Do not name a meeting in the place of labour.

Intensive — three pages. Page 1 is that tight page. Page 2: write Hebrews 5:12-14 in full. Show how “milk,” “unskilful,” “babe,” and “senses exercised” sit in one stretch. Reason why a crowded room can still be apeiros. Page 3: teach what the leaflet blames — failure to know the Scriptures and to align — and what it will not accept as a cure. Write the teaching as you would stand behind it before a teacher.

Write in your own hand. Quote Hebrews 5:13. Define apeiros as the source uses it. The page is not a journal of feelings.

Distinction
Skill is not performance. A crowded room can still be apeiros.

Charge
Write what you will teach: apeiros is unskill in the word of righteousness; the blame is failure to know the Scriptures and to align; the cure is labour, not a louder room. Then write the page the Labour named. Name the hour and the text.`,
  ),
  lesson(
    "les-fs-1-04",
    "mod-fs-1-oracles",
    4,
    "Nēpios — two marks of babes",
    75,
    `Central principle
A babe is dull of hearing and unskilled in the Word, which is the basis for salvation.

Key Scripture
Hebrews 5:11 and 5:13.

Cluster
Hebrews 5:11-14.

Read
Textbook Chapter 1, section V.

Teaching
Hebrews 5:11 — “Of whom we have many things to say, and hard to be uttered, seeing ye are dull of hearing.” Hebrews 5:13 — “For every one that useth milk is unskilful in the word of righteousness: for he is a babe.”

The same verse that names the milk-user unskilful also names him a babe: Greek nēpios — implying negation; figuratively a simple-minded person, an immature Christian: babe, child. Do not take “babe” as a term of endearment in this chapter. It is a diagnosis. A babe may be sincere and still be apeiros. An organization may be old and still be nēpios. Sincerity does not cancel the two marks. Age of an assembly does not cancel the two marks.

Two characteristics of babes, as the source sets them:

1. Dull of hearing (Hebrews 5:11).
2. Unskilled in the Word, which is the basis for salvation.

Hold the two marks as two. Dullness of hearing is the ear that will not take in what is hard to be uttered. Unskill is inexperience in the word of righteousness. A man may hear often and still be dull. A man may quote often and still be unskilled. The writer could not utter the hard things concerning the Son because of the ear, not because the meat was lacking.

Hebrews 5:14 sets the other man: “But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.” Babe versus teacher is not a personality contrast. It is milk versus meat, dullness versus an exercised sense, unskill versus discernment. The Word is the basis for salvation. Unskill there is unskill at the root.

This piece is written so that you may experience productive living, be in control, and experience godliness in all capacities — not by a slogan, but by skill in the word of righteousness. You will not become a teacher by remaining a babe who enjoys being called a babe.

Hold Hebrews 5:11 and 5:13 as the two marks, not as two nicknames. Dull of hearing is the ear that cannot take what is hard to be uttered concerning the Son. Unskilled in the Word is apeiros in the word of righteousness. The Word is the basis for salvation. Unskill there is unskill at the root. You may be sincere in both marks. Sincerity does not cancel them.

Nēpios, as the source uses it, implies negation: a simple-minded person, an immature Christian — babe, child. In other rooms “babe” is affection. In this chapter it is a diagnosis. An organization may be old and still be nēpios. A man may be earnest and still be nēpios. Do not take the word as endearment and then refuse the two marks.

Hebrews 5:14 is the other man in the same stretch: strong meat belongs to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil. Full age is not the date of your first meeting. It is use. Senses exercised. Discernment. Babe versus that man is milk versus meat. You will not become the second by remaining pleased to be called the first.

Name your dullness. Name the place of your unskill. Write the place, not a general confession. The diagnosis is useless if you will not locate it.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write the two marks as the source sets them, each with its verse. Name your dullness of hearing. Name where you are apeiros in the word of righteousness. Do not write a general confession. Write the place.

Intensive — three pages. Page 1 is that tight page. Page 2: write Hebrews 5:11-14 in full. Define nēpios as the source uses it. Show why “babe” is a diagnosis and not an endearment. Page 3: teach babe versus the man of full age whose senses are exercised. Write the teaching as you would stand behind it before a teacher.

Write in your own hand. Quote the two marks with their verses. The page is not a journal of feelings.

Distinction
Babe vs teacher whose senses are exercised to discern both good and evil (Hebrews 5:14).

Charge
Write what you will teach: nēpios is a diagnosis; the two marks are dull of hearing and unskilled in the Word; the Word is the basis for salvation. Then write the page the Labour named. Name the place of your dullness and the place of your unskill.`,
  ),
  lesson(
    "les-fs-1-05",
    "mod-fs-1-oracles",
    5,
    "Spoudazō and 2 Timothy 2:15",
    75,
    `Central principle
Study is labour. Approval here is the approval of a workman who rightly divides the word of truth.

Key Scripture
2 Timothy 2:15.

Cluster
2 Timothy 2:3-15 — suffer as a good soldier; be not ashamed.

Read
Textbook Chapter 1, section VI.

Teaching
2 Timothy 2:15 — “Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.”

The Greek behind that study, as the leaflet uses it, is spoudazō: to use speed, to make effort, be prompt or earnest; do diligence, be diligent, endeavour, labour, study — intellectually. Speed here is not haste that skips context. It is earnestness that will not postpone the labour. You do not “study” by collecting quotations you cannot reason. You study by sitting under the word of truth until you can divide it rightly.

Read the verse in its stretch. 2 Timothy 2:3-4 — “Thou therefore endure hardness, as a good soldier of Jesus Christ. No man that warreth entangleth himself with the affairs of this life; that he may please him who hath chosen him to be a soldier.” 2 Timothy 2:8-9 — “Remember that Jesus Christ of the seed of David was raised from the dead according to my gospel: Wherein I suffer trouble, as an evil doer, even unto bonds; but the word of God is not bound.” 2 Timothy 2:13 — “If we believe not, yet he abideth faithful: he cannot deny himself.” 2 Timothy 2:14 — “Of these things put them in remembrance, charging them before the Lord that they strive not about words to no profit, but to the subverting of the hearers.”

Then 2:15. Approval before God in this verse is the approval of a workman. The work is the word of truth, rightly divided. Shame here is the shame of a workman who cannot divide the word. 2 Timothy 2:16 follows: “But shun profane and vain babblings: for they will increase unto more ungodliness.” Right division is not a hobby of phrases. It is the labour that refuses babbling.

If you will walk this year at three hours a week or at eight, the difference is not a second doctrine. The difference is how much labour you put on the same oracles. The Year and The Intensive are the same teaching. The hours differ. The oracles do not.

2 Timothy 2:15 does not sit in a vacuum of study tips. The man addressed is to endure hardness as a good soldier. He is not to entangle himself with the affairs of this life, that he may please him who hath chosen him to be a soldier. He is to remember Jesus Christ of the seed of David, raised from the dead. The word of God is not bound though the apostle is in bonds. He is to charge them that they strive not about words to no profit, to the subverting of the hearers. Then: study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.

Spoudazō, as the leaflet uses it, is speed, effort, promptness, earnestness; diligence, endeavour, labour, study — intellectually. Speed is earnestness that will not postpone. It is not haste that skips context and calls the skip “faith.” Approval is a workman’s approval. Shame is a workman’s shame — the man who cannot divide the word. Rightly dividing is the work. Profane and vain babblings increase unto more ungodliness (2 Timothy 2:16). Collecting quotations you cannot reason is nearer babbling than labour.

The Year is about three hours a week. Intensive is about eight. Same oracles. Same doctrine. Same 2 Timothy 2:15. The difference is hours on the same work. You will not invent a second teaching for the longer week. You will put more labour on this verse until “approved,” “workman,” and “rightly dividing” can be reasoned without a slogan.

Labour
The Year: write one tight page — a word drill. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Do a word drill on 2 Timothy 2:15 until you can reason “study,” “approved,” “workman,” “ashamed,” and “rightly dividing” without a slogan. Write the verse. Then write six sentences, one for each of those five words and one for the soldier-context that sits before the verse.

Intensive — three pages. Page 1 is that word-drill page. Page 2: write 2 Timothy 2:3-15 as a stretch. Show how the soldier, the bonds, the charge not to strive about words to no profit, and the workman sit together. Page 3: teach spoudazō as the leaflet uses it — speed, effort, promptness, earnestness, diligence, labour, study, intellectually — and teach what speed is not. Write the teaching as you would stand behind it before a teacher.

Write in your own hand. Quote 2 Timothy 2:15. Reason the five words. The page is not a journal of feelings.

Distinction
Study as labour vs study as collecting quotations.

Charge
Write what you will teach: spoudazō is labour; approval is a workman’s approval; right division is the work; The Year and The Intensive share one doctrine. Then write the page the Labour named. Do not submit a list of books you have not opened.`,
  ),
  lesson(
    "les-fs-1-06",
    "mod-fs-1-oracles",
    6,
    "Knowledge: perception, learning, reasoning",
    75,
    `Central principle
Knowledge is a mental result of perception and learning and reasoning. The practice is word exercise, word drill.

Key Scripture
Hebrews 5:14 — senses exercised to discern.

Cluster
Hebrews 5:13-14; 2 Timothy 2:15.

Read
Textbook Chapter 1, section VII.

Teaching
The leaflet defines knowledge as a mental result of perception and learning and reasoning. The practice is named: word exercise, word drill. That is not a seminary extra. It is how this school will ask you to know.

Perception: you see what the text says, not what you wish it said. Learning: you take it in, and you keep it. Reasoning: you can hold a cluster of Scriptures together and draw the distinction the text itself makes.

A man may quote a verse and still be a babe. Quotation without reasoning is not skill. Hebrews 5:13-14 — “For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.” The man of full age has senses exercised by use. Use is the drill. Discernment is the fruit. You do not skip perception and call your opinion reasoning. You do not skip learning and call a memory of a heading knowledge.

2 Timothy 2:15 remains in the cluster: “Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.” Right division is reasoning under the text. The questions this school asks are charges, not decorations. The leaflet itself asks questions. You will answer them from the cluster, not from a remembered heading.

Take Hebrews 5:12 as the drill this lesson will not let you postpone: “For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat.” Perceive it — what it says. Learn it — write it. Reason it — why “ought to be teachers” and “become” belong in one verse. If you can only recite the verse, you have not yet done the drill.

The leaflet will not let knowledge be a pile of headings. Perception sees what the text says. If you see what you wish it said, you have not perceived. Learning takes it in and keeps it. If you heard it and cannot write it, you have not learned it. Reasoning holds a cluster and draws the distinction the text itself makes. If you can only recite one verse and cannot hold it with its neighbours, you have not reasoned.

Hebrews 5:12 is the drill because it contains the indictment and the direction in one sentence. “For the time” names what you have already had. “Ought to be teachers” names what that time required. “Teach you again” names recession. “First principles of the oracles of God” names what must be known. “Become such as have need of milk” names the direction backward. Perceive that order. Learn it by writing it. Reason why “ought” and “become” belong together: a people can have time enough to teach and still become babes.

2 Timothy 2:15 remains: a workman, rightly dividing. Right division is this reasoning under the text. The questions the source asks are charges. You will not decorate a page with them and then refuse to answer. Word exercise, word drill — that is the practice. A man may quote and still be a babe. Do the drill until you can reason Hebrews 5:12, not only recite it.

Labour
The Year: write one tight page — the word drill on Hebrews 5:12. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Hebrews 5:12. Then three short movements on that one verse: perceive (what it says, in order); learn (write it again without looking, then check); reason (why “ought,” “again,” and “become” sit together). Do not add a second verse until that page is done.

Intensive — three pages. Page 1 is that drill on Hebrews 5:12. Page 2: write Hebrews 5:13-14 and 2 Timothy 2:15. Show how perception, learning, and reasoning are the mental result the leaflet names, and how “senses exercised” and “rightly dividing” are the same labour under two addresses. Page 3: teach knowledge versus information collected. Write the teaching as you would stand behind it before a teacher.

Write in your own hand. Perceive, learn, reason — on the page. The page is not a journal of feelings.

Distinction
Knowledge vs information collected.

Charge
Write what you will teach: knowledge is perception, learning, and reasoning; the practice is word drill; quotation without reasoning is not skill. Then write the page the Labour named. Do the drill on Hebrews 5:12 until you can reason it, not only recite it.`,
  ),
  lesson(
    "les-fs-1-07",
    "mod-fs-1-oracles",
    7,
    "John 8:32 — truth makes free",
    75,
    `Central principle
Truth makes free where you continue in His word. This is not a motto for the cover.

Key Scripture
John 8:31-36.

Cluster
John 8:31-36 with Hebrews 5:11-14.

Read
Textbook Chapter 1, section VIII.

Teaching
John 8:31-36 — “Then said Jesus to those Jews which believed on him, If ye continue in my word, then are ye my disciples indeed; And ye shall know the truth, and the truth shall make you free. They answered him, We be Abraham’s seed, and were never in bondage to any man: how sayest thou, Ye shall be made free? Jesus answered them, Verily, verily, I say unto you, Whosoever committeth sin is the servant of sin. And the servant abideth not in the house for ever: but the Son abideth ever. If the Son therefore shall make you free, ye shall be free indeed.”

Read the verse in its place. Freedom here is not a political cry and not a mood. It is the freedom of those who continue in His word and know the truth. The Lord sets that freedom over against being the servant of sin. They claimed Abraham and denied bondage. He named sin as the master. The Son makes free. Continuance in His word is the path He named to knowing the truth.

The opening of this book is therefore not a motto. Truth makes free where the word is continued in. Dull hearing will not get you that freedom. Unskill in the word of righteousness will not get you that freedom. Hebrews 5:11-14 remains in the cluster: they were dull of hearing; they had become such as have need of milk; every one that useth milk is unskilful in the word of righteousness; strong meat belongs to those who by reason of use have their senses exercised. A man who will not continue in the word will not know the truth that makes free. A man who continues only as a babe — quoting, not reasoning — has not yet used the word unto discernment.

You will not treat John 8:32 as a cover line and then refuse John 8:31 and 8:34-36. Disciples indeed are those who continue. Servants of sin are those who commit sin. Free indeed is the Son’s doing. The graphē you opened in lesson 1 is the word you continue in here.

They answered from Abraham and from a claimed freedom: “We be Abraham’s seed, and were never in bondage to any man.” The Lord did not accept the claim. Whosoever committeth sin is the servant of sin. The servant abideth not in the house for ever. The Son abideth ever. If the Son shall make you free, ye shall be free indeed. Freedom in this cluster is the Son’s doing over against that servitude. It is not a cry against Rome. It is not a mood after a song.

“If ye continue in my word, then are ye my disciples indeed; and ye shall know the truth, and the truth shall make you free.” Continuance is the condition He named. Knowledge of the truth is not a motto on the cover. It is the fruit of remaining in His word. Dull hearing (Hebrews 5:11) will not continue. Unskill in the word of righteousness (Hebrews 5:13) will not know. Milk after the time you ought to have been a teacher will not make you free indeed.

The graphē of lesson 1 is the word you continue in here. You do not continue in a likeness. You do not continue in a heading. Name one word of His you will continue in this week, and continue in it. Free from what, in John 8? From being the servant of sin — if the Son make you free, and if you continue in His word. Write that from the cluster, not from a political or emotional cry.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write John 8:31-36 in full. Answer from the cluster: free from what, if you continue in His word? Then name one word of His you will continue in this week. Do not answer with a political or emotional cry.

Intensive — three pages. Page 1 is that tight page. Page 2: hold John 8:31-36 with Hebrews 5:11-14. Show why dull hearing and unskill cannot produce the freedom the Lord named. Page 3: teach the cluster as you would stand behind it before a teacher — continue, know, free; servant of sin; the Son abides; free indeed.

Write in your own hand. Quote John 8:31-36 in full. The page is not a journal of feelings.

Distinction
Freedom from remaining in His word vs a political or emotional cry.

Charge
Write what you will teach: truth makes free where you continue in His word; freedom here is over against the servant of sin; the Son makes free indeed. Then write the page the Labour named. Free from what, in John 8, if you continue in His word?`,
  ),
  lesson(
    "les-fs-1-08",
    "mod-fs-1-metanoia",
    8,
    "Seven words for repent — metanoia vs metamellomai",
    75,
    `Central principle
Metanoia is a real change of mind toward sin and its cause. Metamellomai regrets consequences, not the cause.

Key Scripture
Hebrews 6:1; Matthew 27:3; Luke 13:3; Matthew 3:8.

Cluster
The seven words: nacham (H5162), shuwb (H7725), nocham (H5164), nichuwm (H5150), metanoeō (G3340), metamellomai (G3338), metanoia (G3341).

Read
Textbook Chapter 2, sections I–II.

Teaching
Hebrews 6:1 — “not laying again the foundation of repentance from dead works…” This is the first stone. If this stone is a slogan, the year is a slogan. The leaflet heads this principle: Greek metanoia from nekros ergon.

The authorized list for this school is seven. There is no eighth unless the owner later adds one. The 2015 page said “one of the eight original words.” That was a count on the page. You were not given an eighth. Do not invent one.

1. Hebrew nacham (H5162) — to sigh, breathe strongly, to be sorry (Genesis 6:6; Exodus 13:17; Job 42:6; Jonah 3:10).
2. Hebrew shuwb (H7725) — to turn back (1 Kings 8:47; Ezekiel 14:6).
3. Hebrew nocham (H5164) — regret (Hosea 13:14).
4. Hebrew nichuwm (H5150) — compassion (Hosea 11:8).
5. Greek metanoeō (G3340) — to change the mind for the better morally; to change the attitude toward sin (Luke 13:3).
6. Greek metamellomai (G3338) — to regret consequences of sin, not the cause (Matthew 27:3; 2 Corinthians 7:8).
7. Greek metanoia (G3341) — a real change of mind and attitude toward sin and its cause, not merely the consequences (Matthew 3:8, 11; 9:13; Luke 24:47).

Hold 6 and 7 together until you can teach the difference in your sleep.

Matthew 27:3-5 — “Then Judas, which had betrayed him, when he saw that he was condemned, repented himself, and brought again the thirty pieces of silver to the chief priests and elders, Saying, I have sinned in that I have betrayed the innocent blood. And they said, What is that to us? see thou to that. And he cast down the pieces of silver in the temple, and departed, and went and hanged himself.” He “repented himself” (metamellomai) when he saw the condemnation. He regretted the consequence. He did not come to a new mind over sin and its cause.

Luke 13:3 — “I tell you, Nay: but, except ye repent (metanoeō), ye shall all likewise perish.” That is a change of mind toward sin, not a regret that the tower fell on someone else. Matthew 3:8 — “Bring forth therefore fruits meet for repentance (metanoia).” Metanoia includes reformation: new creature, all things new (2 Corinthians 5:17). It is not a tear without a turn. It specifies compunction for guilt including reformation: regeneration, quickening, recreation. A real change of mind and attitude over sin and the cause.

If you treat Judas’s remorse as if it were metanoia, you have not laid this foundation. You have laid a feeling.

Walk the seven as the source uses them, not as a seminary extra list.

Nacham (H5162): Genesis 6:6 — “And it repented the Lord that he had made man on the earth, and it grieved him at his heart.” Also Exodus 13:17; Job 42:6; Jonah 3:10. To sigh, breathe strongly, to be sorry. Shuwb (H7725): 1 Kings 8:47; Ezekiel 14:6 — to turn back. Nocham (H5164): Hosea 13:14 — regret. Nichuwm (H5150): Hosea 11:8 — compassion. Metanoeō (G3340): Luke 13:3 — change the mind for the better morally; change the attitude toward sin. Metamellomai (G3338): Matthew 27:3; 2 Corinthians 7:8 — regret consequences, not the cause. Metanoia (G3341): Matthew 3:8, 11; 9:13; Luke 24:47 — a real change of mind and attitude toward sin and its cause, not merely the consequences.

Matthew 3:8 — “Bring forth therefore fruits meet for repentance.” Matthew 9:13 — “I am not come to call the righteous, but sinners to repentance.” Luke 24:47 — “And that repentance and remission of sins should be preached in his name among all nations, beginning at Jerusalem.” Metanoia includes reformation because the man in Christ is a new creature: 2 Corinthians 5:17 — old things passed away; all things new. It is not a tear without a turn.

Hold 6 and 7 until you can teach them in your sleep. Judas saw the condemnation and “repented himself.” He brought the silver. He said he had sinned. He hanged himself. That is metamellomai. Luke 13:3 will not let you treat another man’s ruin as your change of mind. Except ye repent, ye shall all likewise perish. If you treat Judas’s remorse as the foundation, you have laid a feeling.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write the seven words with one verse each, as the school lists them. Then write ten lines: where have you treated regret as if it were metanoia? Hold metamellomai and metanoia until the difference can be taught without a slogan.

Intensive — three pages. Page 1 is that tight page. Page 2: write Matthew 27:3-5 and Luke 13:3 and Matthew 3:8 in full. Reason Judas’s metamellomai against metanoeō and metanoia. Do not add an eighth word. Page 3: teach the seven as you would stand behind them before a teacher — each word as the source uses it, then the distinction between 6 and 7.

Write in your own hand. The seven words with verses. Then Judas against Luke 13:3. The page is not a journal of feelings.

Distinction
Metanoia vs metamellomai. Cause vs consequence. Reformation vs remorse only.

Charge
Write what you will teach: the seven words only; metanoia is a change of mind toward sin and its cause; metamellomai regrets consequences, not the cause; Judas is not the foundation. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-09",
    "mod-fs-1-metanoia",
    9,
    "Cause, not consequence — Luke 16:19-31",
    75,
    `Central principle
Hell is a consequence. It is not the definition of repentance.

Key Scripture
Luke 16:19-31; Revelation 20:10-15.

Cluster
Luke 16:19-31 (rich man and Lazarus). Revelation 20:10-15 (lake of fire, book of life, second death).

Read
Textbook Chapter 2, section III.

Teaching
The 2015 PDF printed Matthew 16:19-31 here. That print was an error. This school teaches Luke 16:19-31. Do not teach Matthew 16 as that narrative.

Luke 16:19-31 — “There was a certain rich man, which was clothed in purple and fine linen, and fared sumptuously every day: And there was a certain beggar named Lazarus, which was laid at his gate, full of sores, And desiring to be fed with the crumbs which fell from the rich man’s table: moreover the dogs came and licked his sores. And it came to pass, that the beggar died, and was carried by the angels into Abraham’s bosom: the rich man also died, and was buried; And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom. And he cried and said, Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue; for I am tormented in this flame. But Abraham said, Son, remember that thou in thy lifetime receivedst thy good things, and likewise Lazarus evil things: but now he is comforted, and thou art tormented. And beside all this, between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence. Then he said, I pray thee therefore, father, that thou wouldest send him to my father’s house: For I have five brethren; that he may testify unto them, lest they also come into this place of torment. Abraham saith unto him, They have Moses and the prophets; let them hear them. And he said, Nay, father Abraham: but if one went unto them from the dead, they will repent. And he said unto him, If they hear not Moses and the prophets, neither will they be persuaded, though one rose from the dead.”

That narrative is the consequence. The rich man in torment lift up his eyes. A great gulf is fixed. He asks for water. He asks that Lazarus be sent to his five brethren. Abraham refuses: they have Moses and the prophets. If they hear not Moses and the prophets, neither will they be persuaded though one rose from the dead. Fear of that place is not yet a change of mind over sin and its cause. A man may fear that fire and still love the cause of his death.

Revelation 20:10-15 — “And the devil that deceived them was cast into the lake of fire and brimstone, where the beast and the false prophet are, and shall be tormented day and night for ever and ever. And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them. And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works. And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works. And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire.”

That is the end of the consequence. Chapter 7 will open eternal judgment at length. Do not turn this lesson into that chapter. Here the point is narrower: if your “repentance” is only the wish not to go there, you have not yet changed your mind over sin and its cause.

Abraham’s refusal is the point this lesson will not let you skip. The rich man wants a messenger from the dead. Abraham will not send one. They have Moses and the prophets. If they hear not Moses and the prophets, neither will they be persuaded though one rose from the dead. The living were already under the writing. A sign from torment will not do what the graphē was given to do. Fear of that flame, in the mouth of a man who still wants water and still wants a warning for his brothers, is not yet a change of mind over sin and its cause.

You may fear Hell and love the cause of your death. That fear can fill a testimony and leave the old man unnamed. That fear can fill a prayer and leave outward sin unlisted. Course 6 will open the lake, the book of life, and the prisons. Here you will not turn Luke 16 into that chapter. Here you will say: Hell is a consequence. Metanoia is toward sin and its cause. The 2015 print of Matthew 16:19-31 was an error. Matthew 16 is not this narrative. Luke 16:19-31 is.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Luke 16:27-31 in your own words after you have written the stretch. What did Abraham refuse? Then answer: where have you treated Hell-avoidance as if it were metanoia?

Intensive — three pages. Page 1 is that tight page. Page 2: write Luke 16:19-31 in full. Keep the print error named: not Matthew 16. Sit the rich man, the gulf, Moses and the prophets, and the refusal. Page 3: write Revelation 20:10-15 in full. Teach consequence versus cause. Do not open Chapter 7’s prisons here. Write the teaching as you would stand behind it before a teacher.

Write in your own hand. Quote Luke 16 as named. Abraham’s refusal must be on the page. The page is not a journal of feelings.

Distinction
Repentance over sin and its cause vs Hell-avoidance.

Charge
Write what you will teach: Hell is a consequence; the narrative is Luke 16:19-31, not Matthew 16; Moses and the prophets were already enough for the living; fear of the lake is not yet metanoia. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-10",
    "mod-fs-1-metanoia",
    10,
    "Nekros ergon — dead works",
    75,
    `Central principle
Dead works are the works of the old man and the old nature. The conscience is later purged from them by blood (Hebrews 9:14).

Key Scripture
Hebrews 6:1; Ephesians 2:1; Ephesians 4:22; Romans 6:23.

Cluster
Nekros ergon / nekra erga; 2 Corinthians 5:17; Ephesians 2:1-2.

Read
Textbook Chapter 2, section I and the opening of IV.

Teaching
Hebrews 6:1 names the first stone: repentance from dead works. The phrase is Hebrews’ own phrase. You will hear it again in Hebrews 9:14, when the blood of Christ purges the conscience from dead works to serve the living God. Do not empty “dead works” into “things I did that felt empty.” The leaflet will not let you.

Nekros ergon — dead works — are the works of the old man: the spirit and nature of the devil (Ephesians 4:22); old things (2 Corinthians 5:17); the old nature (Ephesians 2:1). Ephesians 2:1-2 — “And you hath he quickened, who were dead in trespasses and sins; Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience.” Trespasses, as the source glosses Ephesians 2:1, are deviation from moral equity, and sins. The wages thereof is death (Romans 6:23).

Ephesians 4:22 — “That ye put off concerning the former conversation the old man, which is corrupt according to the deceitful lusts.” 2 Corinthians 5:17 — “Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.” Dead works are the works of that old nature — the spirit and nature of the devil, and the sins that issue. They are not a boredom you renamed. A work can be crowded, admired, and still be dead if it is of the old man.

By implication the word metanoia also carries reversal of another’s decision. Do not flatten that into a technique. Keep it where the source puts it: repentance is not less than a change of mind. The change is toward sin and its cause. The works that belong to the old man are the works you repent from. The next two lessons will split the two old things. This lesson will not let you call a dull religious habit “dead” while you keep the old nature unnamed.

Hebrews 9:14 will later say: “How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?” Keep that verse as the destination of this phrase. Do not empty dead works now so that blood later has nothing to purge. Dead works are the works of the old man and the old nature. They issue in death (Romans 6:23). They are the conversation you put off (Ephesians 4:22). They are the walk according to the course of this world, according to the prince of the power of the air (Ephesians 2:2).

A work that bored you is not therefore a dead work. A work that filled a room is not therefore a living work. The test is the man — old or new — and the nature that produced it. If any man be in Christ, he is a new creature; old things are passed away. The two old things will be split in the next lessons. This lesson names the pile they belong to: nekros ergon, the works you repent from. Do not call a dull habit “dead” while the old nature goes unnamed. Do not call the old nature a theory while the works go unrepented.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Hebrews 6:1, Ephesians 2:1-2, and 2 Corinthians 5:17. Define dead works as the source defines them. Then name one work you have called “dead” because it bored you, and one the Scripture would call a dead work because it is of the old man. Do not confuse them.

Intensive — three pages. Page 1 is that tight page. Page 2: write Ephesians 4:22 and Romans 6:23 with the verses already on page 1. Show the line from old man to dead works to wages. Page 3: teach nekros ergon as you would stand behind it before a teacher, and show why Hebrews 9:14 will later name blood as the purge — without turning this lesson into the blood lesson.

Write in your own hand. Quote Hebrews 6:1 and Ephesians 2:1-2. The page is not a journal of feelings.

Distinction
Dead works vs the service of the living God after the conscience is purged (Hebrews 9:14).

Charge
Write what you will teach: dead works are the works of the old man and the old nature; they are not a boredom you renamed; the conscience is purged from them by blood. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-11",
    "mod-fs-1-metanoia",
    11,
    "Old thing 1 — the old man",
    75,
    `Central principle
The old man is nothing more nor less than the spirit and nature of the devil working in men of disobedience.

Key Scripture
Ephesians 4:22; John 8:44; Ephesians 2:2; 1 John 3:8-9; 5:18; 2 Corinthians 4:4.

Cluster
The old-man file in Textbook Chapter 2, section IV.

Read
That section, old thing 1 only.

Teaching
2 Corinthians 5:17 — “Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.” Repentance from dead works delineates two kinds of “old things” deceased — passed away. This lesson is old thing 1 only. Do not merge it with the list of acts.

Old thing 1. The spirit, nature, and power of sin — the old man: nothing more nor less than the spirit and nature of the devil working in men of disobedience.

Ephesians 4:22 — “That ye put off concerning the former conversation the old man, which is corrupt according to the deceitful lusts.”

John 8:44 — “Ye are of your father the devil, and the lusts of your father ye will do. He was a murderer from the beginning, and abode not in the truth, because there is no truth in him. When he speaketh a lie, he speaketh of his own: for he is a liar, and the father of it.”

Ephesians 2:2 — “Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience.”

2 Corinthians 4:4 — “In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them.”

1 John 3:8-9 — “He that committeth sin is of the devil; for the devil sinneth from the beginning. For this purpose the Son of God was manifested, that he might destroy the works of the devil. Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.”

1 John 5:18 — “We know that whosoever is born of God sinneth not; but he that is begotten of God keepeth himself, and that wicked one toucheth him not.”

Do not soften this cluster. Do not turn it into a personality type. Do not reduce the old man to a bad habit. The source will not let you. The old man is the spirit and nature of the devil in the disobedient. Put off the old man. Ye are of your father the devil. The spirit now worketh in the children of disobedience. The god of this world hath blinded minds. He that committeth sin is of the devil. Whosoever is born of God doth not commit sin; the wicked one toucheth him not.

You cannot hide the old man behind a list of acts. The next lesson will open the acts. Both must pass. They are not one pile.

Put the cluster in order and keep it severe. Ye are of your father the devil, and the lusts of your father ye will do. He was a murderer from the beginning, and abode not in the truth. The spirit that now worketh in the children of disobedience is the prince of the power of the air. The god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them. He that committeth sin is of the devil; for the devil sinneth from the beginning. For this purpose the Son of God was manifested, that he might destroy the works of the devil. Whosoever is born of God doth not commit sin; his seed remaineth in him. He that is begotten of God keepeth himself, and that wicked one toucheth him not.

The old man is corrupt according to the deceitful lusts. Put him off. He is nothing more nor less than the spirit and nature of the devil working in men of disobedience. A bad habit can be broken and the old man remain. A personality can be managed and the old man remain. This school will not let you teach John 8:44, Ephesians 2:2, and 1 John 3:8-9 as a temperament file. In Christ this old thing is passed away. Outward sin is the other old thing. Both must pass. They are not one pile.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Teach John 8:44, Ephesians 2:2, and 1 John 3:8-9 as one cluster without calling the old man “a bad habit.” Write the three verses. Write the teaching.

Intensive — three pages. Page 1 is that tight page. Page 2: add Ephesians 4:22, 2 Corinthians 4:4, and 1 John 5:18 in full. Keep old thing 1 as old thing 1. Do not walk Galatians 5 here. Page 3: teach the old man as you would stand behind it before a teacher — spirit and nature of the devil in the disobedient; put off; born of God; the wicked one toucheth him not.

Write in your own hand. Quote the three verses of the tight cluster in full. The page is not a journal of feelings.

Distinction
Old man vs outward sin. Both must pass. They are not one pile.

Charge
Write what you will teach: the old man is the spirit and nature of the devil working in men of disobedience; the cluster is John 8:44, Ephesians 2:2, 1 John 3:8-9, and the rest of this file; it is not a habit. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-12",
    "mod-fs-1-metanoia",
    12,
    "Old thing 2 — outward sin",
    75,
    `Central principle
Outward sin is the second old thing. It has its own Scripture file. It is not another name for the old man.

Key Scripture
Galatians 5:19-21; 1 John 3:4; James 1:13-15; Mark 7:20-23; Romans 1:18-32; Romans 4:15.

Cluster
Textbook Chapter 2, section IV, old thing 2.

Read
That section only. Do not skip the lists.

Teaching
Old thing 2 is outward sin. You cannot hide the acts behind a theory of nature. You cannot hide the old man behind a list of acts. Both must pass. In Christ they are passed away.

Galatians 5:19-21 — “Now the works of the flesh are manifest, which are these; Adultery, fornication, uncleanness, lasciviousness, Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies, Envyings, murders, drunkenness, revellings, and such like: of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God.”

1 John 3:4 — “Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.” Romans 4:15 — “Because the law worketh wrath: for where no law is, there is no transgression.”

James 1:13-15 — “Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man: But every man is tempted, when he is drawn away of his own lust, and enticed. Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death.”

Mark 7:20-23 — “And he said, That which cometh out of the man, that defileth the man. For from within, out of the heart of men, proceed evil thoughts, adulteries, fornications, murders, Thefts, covetousness, wickedness, deceit, lasciviousness, an evil eye, blasphemy, pride, foolishness: All these evil things come from within, and defile the man.”

Romans 1:18 — “For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness.” The catalogue that follows through Romans 1:32 is not a curiosity. It is outward sin named. Walk it in the Labour. Do not skip the lists because they are long.

Sin is the transgression of the law. Lust conceives, brings forth sin, sin finished brings death. What proceeds from the heart defiles the man. The works of the flesh are manifest. The wrath of God is revealed against ungodliness. These two old things are not one pile labelled “sin” so that you can hide the old man behind a list of acts, or hide the acts behind a theory of nature.

Walk Romans 1:18-32. Do not skip it because it is long. “For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness.” They knew God and glorified him not as God. Their foolish heart was darkened. God gave them up. The catalogue names uncleanness, vile affections, a reprobate mind, unrighteousness, fornication, wickedness, covetousness, maliciousness, envy, murder, debate, deceit, malignity, whisperers, backbiters, haters of God, despiteful, proud, boasters, inventors of evil things, disobedient to parents, without understanding, covenantbreakers, without natural affection, implacable, unmerciful. Who knowing the judgment of God, that they which commit such things are worthy of death, not only do the same, but have pleasure in them that do them.

That is outward sin named. Galatians 5:19-21 is outward sin named. Mark 7:20-23 is what proceeds from the heart and defiles. 1 John 3:4 is the definition: sin is the transgression of the law. James 1:13-15 is the conception: lust, sin, death. You cannot hide these acts behind a theory of the old man. You cannot hide the old man behind these acts. Write the lists without calling them “the old man.” Then state what must pass besides the list.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Walk Galatians 5:19-21 and Mark 7:20-23 without calling them “the old man.” Write both lists. Then state what must pass besides the list — old thing 1, already taught.

Intensive — three pages. Page 1 is that tight page. Page 2: write 1 John 3:4, Romans 4:15, and James 1:13-15 in full. Show transgression, lust conceiving, sin finished, death. Page 3: write Romans 1:18-32 in full. Teach outward sin as you would stand behind it before a teacher. Keep the two old things as two.

Write in your own hand. The lists must be on the page. The page is not a journal of feelings.

Distinction
Two old things, not one confession.

Charge
Write what you will teach: outward sin is the second old thing; it has its own file; the lists must be walked; both old things must pass. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-13",
    "mod-fs-1-metanoia",
    13,
    "Romans 6:23 — the wages",
    75,
    `Central principle
The wages of sin is death. Sin is the cause of all death and depravity. Salvation from sin is the salvation you need.

Key Scripture
Romans 6:23 in Romans 6:16-23.

Cluster
Romans 6:16-23; 2 Corinthians 5:17.

Read
Textbook Chapter 2, section V.

Teaching
Romans 6:16-23 — “Know ye not, that to whom ye yield yourselves servants to obey, his servants ye are to whom ye obey; whether of sin unto death, or of obedience unto righteousness? But God be thanked, that ye were the servants of sin, but ye have obeyed from the heart that form of doctrine which was delivered you. Being then made free from sin, ye became the servants of righteousness. I speak after the manner of men because of the infirmity of your flesh: for as ye have yielded your members servants to uncleanness and to iniquity unto iniquity; even so now yield your members servants to righteousness unto holiness. For when ye were the servants of sin, ye were free from righteousness. What fruit had ye then in those things whereof ye are now ashamed? for the end of those things is death. But now being made free from sin, and become servants to God, ye have your fruit unto holiness, and the end everlasting life. For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.”

Read the verse in Romans 6. You were the servants of sin. You are to be the servants of righteousness. Death is the wage of the old things. Eternal life is the gift of God through Jesus Christ our Lord. Wage versus gift. Cause versus consequence. Do not build a repentance that wants to keep the cause and escape the wage.

The leaflet repeats the line: salvation from sin is exclusively the only salvation you need, sin being the cause of all death and depravity. Death in this book is not only the stopping of breath. Chapter 7 will open three kinds of death. Here it is enough to refuse a shallow “death,” and to refuse a repentance that wants the gift while it keeps the service of sin.

2 Corinthians 5:17 remains in the cluster: if any man be in Christ, he is a new creature; old things are passed away; all things are become new. The wage belongs to the old things. The gift belongs to the man in Christ. You do not collect the gift as a wage you earned. You do not treat the wage as a mood you can talk down.

Yield is the verb Romans 6 will not let you skip. To whom ye yield yourselves servants to obey, his servants ye are. Sin unto death. Obedience unto righteousness. Ye were the servants of sin. Ye have obeyed from the heart that form of doctrine which was delivered you. Being then made free from sin, ye became the servants of righteousness. When ye were the servants of sin, ye were free from righteousness. The end of those things is death. Now, made free from sin and become servants to God, ye have your fruit unto holiness, and the end everlasting life.

Wage versus gift is not a slogan for a card. The wage is earned by the service of sin. The gift is eternal life through Jesus Christ our Lord. You do not earn the gift. You do not talk the wage down into a metaphor so shallow that Course 6 will have nothing to open. Three kinds of death wait for that course. Here you refuse a repentance that wants to keep the cause — sin, the old things — and escape the wage. Salvation from sin is exclusively the only salvation you need, sin being the cause of all death and depravity. What other “salvation” have you put in that place? Name it and put it down.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Romans 6:23, then write the verse that names the gift. Then answer: what other “salvation” have you put in the place of salvation from sin?

Intensive — three pages. Page 1 is that tight page. Page 2: write Romans 6:16-23 in full. Show servants of sin, servants of righteousness, fruit unto death, fruit unto holiness, wage, gift. Page 3: teach wage versus gift and cause versus consequence as you would stand behind them before a teacher. Name that three kinds of death wait for Course 6. Do not open that course here.

Write in your own hand. Quote Romans 6:23 and the gift clause. The page is not a journal of feelings.

Distinction
Wage vs gift. Cause vs consequence.

Charge
Write what you will teach: the wages of sin is death; eternal life is the gift through Jesus Christ our Lord; salvation from sin is the salvation you need; do not keep the cause and hunt the gift. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-14",
    "mod-fs-1-christ",
    14,
    "Christ the only way — Hebrews 9:14",
    75,
    `Central principle
The only way out of sin unto true repentance is Christ Jesus. His blood purges the conscience from dead works.

Key Scripture
Hebrews 9:14; Ephesians 2:1-5; 2 Corinthians 5:17.

Cluster
Hebrews 9:11-14; Ephesians 2:1-5.

Read
Textbook Chapter 2, section VI, through 2 Corinthians 5:17.

Teaching
Hebrews 9:11-14 — “But Christ being come an high priest of good things to come, by a greater and more perfect tabernacle, not made with hands, that is to say, not of this building; Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us. For if the blood of bulls and of goats, and the ashes of an heifer sprinkling the unclean, sanctifieth to the purifying of the flesh: How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?”

The phrase “dead works” is Hebrews’ own phrase. The conscience is purged from them by the blood of Christ, who through the eternal Spirit offered Himself without spot to God, to serve the living God. Self-reformation without that blood is still a dead work. You do not purge your own conscience by a new schedule. The high priest entered by His own blood, once, having obtained eternal redemption.

Ephesians 2:1-5 — “And you hath he quickened, who were dead in trespasses and sins; Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience: Among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind; and were by nature the children of wrath, even as others. But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)”

You were dead in trespasses and sins. God quickened you together with Christ. 2 Corinthians 5:17 — “Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.” The new creature is in Christ. The two old things pass in Him. The conscience is purged by blood, not by a likeness of reformation that never came to the altar.

The comparison in Hebrews 9 is blood for blood. The blood of bulls and of goats, and the ashes of an heifer, sanctified to the purifying of the flesh. How much more the blood of Christ. He offered Himself without spot to God through the eternal Spirit. He entered in once into the holy place by His own blood, having obtained eternal redemption. The conscience is purged from dead works — Hebrews’ own phrase — to serve the living God. Self-reformation that never comes to that blood is still a dead work. A new schedule that never comes to that blood is still a dead work.

Ephesians 2 will not let you start as a man who was only tired. You were dead in trespasses and sins. You walked according to the course of this world, according to the prince of the power of the air. You were by nature the children of wrath. But God, who is rich in mercy, for His great love wherewith He loved us, even when we were dead in sins, hath quickened us together with Christ — by grace ye are saved. The only way out of sin unto true repentance is Christ Jesus. The new creature is in Him. Answer from Hebrews 9:14 in a paragraph a babe could follow: how does blood purge the conscience from dead works? Do not answer with a rite. Do not answer with a course.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Answer from Hebrews 9:14 in a paragraph a babe could follow: how does blood purge the conscience from dead works? Write the verse. Write the paragraph.

Intensive — three pages. Page 1 is that tight page. Page 2: write Hebrews 9:11-14 in full. Sit “his own blood,” “once,” “eternal redemption,” and “dead works” in one stretch. Page 3: write Ephesians 2:1-5 and 2 Corinthians 5:17. Teach Christ the way versus self-reformation as you would stand behind it before a teacher.

Write in your own hand. Quote Hebrews 9:14. The paragraph a babe could follow must be on the page.

Distinction
Christ the way vs self-reformation as the way.

Charge
Write what you will teach: the only way out of sin unto true repentance is Christ Jesus; His blood purges the conscience from dead works; self-reformation without that blood is still a dead work. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-15",
    "mod-fs-1-christ",
    15,
    "No other name — Acts 4:12",
    75,
    `Central principle
There is none other name under heaven given among men whereby we must be saved.

Key Scripture
Acts 4:10-12.

Cluster
Acts 4:8-12; 2 Corinthians 5:17.

Read
Textbook Chapter 2, section VI, Acts 4:12.

Teaching
Peter, filled with the Holy Ghost, answers rulers about a man made whole.

Acts 4:8-12 — “Then Peter, filled with the Holy Ghost, said unto them, Ye rulers of the people, and elders of Israel, If we this day be examined of the good deed done to the impotent man, by what means he is made whole; Be it known unto you all, and to all the people of Israel, that by the name of Jesus Christ of Nazareth, whom ye crucified, whom God raised from the dead, even by him doth this man stand here before you whole. This is the stone which was set at nought of you builders, which is become the head of the corner. Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.”

The stone rejected, Jesus Christ of Nazareth, crucified, whom God raised. Neither is there salvation in any other. No second saviour. No rite in the place of His name. Water is a sign after one is saved. It is not this stone. Course 3 will open water as figure. You will not put the font in Acts 4:12.

2 Corinthians 5:17 remains in the cluster: if any man be in Christ, he is a new creature. The name that saves is the name you receive. The new creature is in Him, not in a second name, not in a sign that follows, not in an enrolment. There is none other name under heaven given among men. “Given among men” will not let you keep a private saviour for a private people. “Must be saved” will not let you treat the name as one option among rites.

Acts 4:7 is the examination: “By what power, or by what name, have ye done this?” Peter does not offer a second name. Jesus Christ of Nazareth, whom ye crucified, whom God raised from the dead — by Him this man stands whole. This is the stone set at nought of you builders, which is become the head of the corner. Psalm 118:22 sits under that sentence. The rejected stone is not a rite. It is this Jesus.

“Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.” Under heaven. Given among men. Must be saved. No private saviour for a private people. No second saviour beside the stone. Water will be taught in Course 3 as a sign after one is saved. It is not this stone. A confession that puts another name — a church, a tank, a man, a method — in the place of this name is a sentence you will not say again. Write Acts 4:12. Write the sentence you will not say. The new creature is in Christ, not in the sign that follows.

Peter is standing before rulers and elders. The man made whole is standing there. The name that made him whole is the name whereby we must be saved. You will not divide those two uses of the name — one for a body, one for the soul — as if Acts 4:12 were a smaller word than Acts 4:10. The stone set at nought is become the head of the corner. There is none other. Course 3 will open water as figure after one is saved. This stone is not the font. This stone is Jesus Christ of Nazareth, crucified, whom God raised.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Write Acts 4:12. Then write one sentence you will not say again if it puts another name in that place. Name the stone. Name what the font is not.

Intensive — three pages. Page 1 is that tight page. Page 2: write Acts 4:8-12 in full. Sit the examination, the name, the crucifixion, the resurrection, the stone, and “none other.” Page 3: teach the name that saves versus signs that follow, as you would stand behind it before a teacher. Keep water for Course 3. Do not open that course here.

Write in your own hand. Quote Acts 4:12. The sentence you will not say must be on the page.

Distinction
The name that saves vs signs that follow.

Charge
Write what you will teach: none other name under heaven; Jesus Christ of Nazareth, crucified, whom God raised; water is a sign after one is saved, not this stone. Then write the page the Labour named.`,
  ),
  lesson(
    "les-fs-1-16",
    "mod-fs-1-christ",
    16,
    "Receive Him — John 1:12; Romans 10:8-9",
    75,
    `Central principle
As many as received Him, to them gave He power to become the sons of God. Confess the Lord Jesus; believe God raised Him; thou shalt be saved.

Key Scripture
John 1:12-13; Romans 10:8-10.

Cluster
John 1:11-13; Romans 10:6-10.

Read
Textbook Chapter 2, section VII.

Teaching
John 1:11-13 — “He came unto his own, and his own received him not. But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name: Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.”

Romans 10:6-10 — “But the righteousness which is of faith speaketh on this wise, Say not in thine heart, Who shall ascend into heaven? (that is, to bring Christ down from above:) Or, Who shall descend into the deep? (that is, to bring up Christ again from the dead.) But what saith it? The word is nigh thee, even in thy mouth, and in thy heart: that is, the word of faith, which we preach; That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.”

Born not of blood, nor of the will of the flesh, nor of the will of man, but of God. The word is nigh thee, in thy mouth and in thy heart — the word of faith. With the heart man believeth unto righteousness; with the mouth confession is made unto salvation. Sonship language begins here. Course 2 will open the heir. Course 3 will open the Spirit’s witness. You do not wait for those courses to receive Him.

The leaflet’s charge stands: Receive Him today. Receiving Him is not enrolling in a course. A course can sit around an unreceived Christ and call the sitting growth. John 1:11 will not let you hide in a people who did not receive Him. John 1:12 will not let you postpone the receiving. Romans 10:9 will not let you invent a confession the text does not ask. Confess the Lord Jesus. Believe in thine heart that God hath raised Him from the dead. Thou shalt be saved.

John 1:1-4 has already named the Word: in the beginning, with God, was God; all things were made by Him; in Him was life, and the life was the light of men. He came unto His own. His own received Him not. Reception is not a mood about a course. It is receiving Him. To them that received Him He gave power to become the sons of God, even to them that believe on His name. Born not of blood, nor of the will of the flesh, nor of the will of man, but of God. Lineage will not do it. Appetite will not do it. Another man’s will will not do it.

Romans 10:6-7 forbids a hunt that would bring Christ down or bring Him up from the dead, as if the word were far. The word is nigh thee, in thy mouth and in thy heart — the word of faith. Confess with thy mouth the Lord Jesus. Believe in thine heart that God hath raised Him from the dead. Thou shalt be saved. With the heart man believeth unto righteousness; with the mouth confession is made unto salvation. That is the confession the text asks. Sonship language begins here. Course 2 will open the heir. Course 3 will open the Spirit’s witness. You do not wait. Have you received Him? Write the confession. If you have, write John 1:12-13 without a slogan. The leaflet’s charge stands: Receive Him today.

Labour
The Year: write one tight page. Intensive: write three pages on the same cluster. Same doctrine.

The Year — one page. Have you received Him? Write the confession Romans 10:9 actually asks. If you have, write what “power to become the sons of God” means from John 1:12-13, not from a slogan. If you have not, write the confession and do not hide in the course.

Intensive — three pages. Page 1 is that tight page. Page 2: write John 1:11-13 in full. Reason “received him not,” “received him,” “power to become,” “believe on his name,” and “born… of God.” Page 3: write Romans 10:6-10 in full. Teach receiving Him versus enrolling in a course, as you would stand behind it before a teacher.

Write in your own hand. Quote John 1:12-13 and Romans 10:9. The page is not a journal of feelings.

Distinction
Receiving Him vs enrolling in a course.

Charge
Write what you will teach: as many as received Him, to them gave He power to become the sons of God; born of God, not of blood or will; confess the Lord Jesus; believe God raised Him. Then write the page the Labour named. The leaflet’s charge stands: Receive Him today.`,
  ),
  lesson(
    "les-fs-1-17",
    "mod-fs-1-christ",
    17,
    "Charge and examination of the principle",
    90,
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

Hebrews 6:1 — “Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works…” 2 Corinthians 5:17 — “Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.” Hebrews 9:14 — the blood of Christ purges the conscience from dead works to serve the living God. Acts 4:12 — none other name under heaven. John 1:12 — as many as received Him. Romans 10:9 — confess the Lord Jesus; believe God raised Him; thou shalt be saved.

You should now be able to teach, from Scripture:

1. Graphē over religiousism. John 10:34-36; the scripture cannot be broken.
2. Babe vs teacher; apeiros; nēpios; two marks — dull of hearing; unskilled in the Word.
3. Spoudazō as labour. 2 Timothy 2:15. Knowledge as perception, learning, reasoning.
4. The seven words; metanoia vs metamellomai. Judas regretted the consequence. Metanoia is a change of mind toward sin and its cause.
5. Cause vs consequence. Luke 16:19-31, not Matthew 16. Revelation 20:10-15 as the end of the consequence.
6. Two old things: the old man (spirit and nature of the devil in the disobedient); outward sin (its own lists). Both must pass.
7. Wages and the only salvation you need. Romans 6:23. Salvation from sin.
8. Christ the only way; no other name; receive Him.

This chapter will not treat Hell-avoidance as metanoia. It will not treat Judas’s regret as the foundation. It will not merge the old man and outward sin into one vague confession. It will not offer another name. It will not tell you that a course enrolment is the new creature.

The new creature is in Christ. The foundation is laid when a man has changed his mind over sin and its cause, and has received the One whose blood purges the conscience from dead works. Directed reading: The Power of Salvation, when that volume is in your hand — assigned sections only. It is a companion, not a seventh course, and not a substitute for this chapter.

Then you are ready to be taught faith toward God — not as a feeling, but as the state of sons.

Chapter 2, sections VIII–IX, will not do five things, and this examination will not do them either. It will not treat Hell-avoidance as metanoia. It will not treat Judas’s regret as the foundation. It will not merge the old man and outward sin into one vague confession. It will not offer another name. It will not tell you that a course enrolment is the new creature.

Write the eight as teaching, not as headings you remember. Graphē: John 10:34-36. Babe and teacher: Hebrews 5:11-14; apeiros; nēpios; two marks. Spoudazō: 2 Timothy 2:15; knowledge as perception, learning, reasoning. Seven words; metanoia versus metamellomai; Matthew 27:3 against Luke 13:3 and Matthew 3:8. Cause versus consequence: Luke 16:19-31, not Matthew 16; Revelation 20:10-15 limited. Two old things, each with its file. Romans 6:16-23: wage and gift; salvation from sin. Christ the only way: Hebrews 9:14; Acts 4:12; John 1:12; Romans 10:9.

The Power of Salvation, when that volume is in your hand, is directed reading — assigned sections only. It is a companion, not a seventh course, and not a substitute for this chapter. Completion of activities is not mastery. Write the principle as you would teach it to a babe, then as you would stand behind it before a teacher. The first stone is laid when a man has changed his mind over sin and its cause, and has received the One whose blood purges the conscience from dead works.

Labour
The Year: write one tight page on each of the eight — eight tight paragraphs if you must keep it to one sitting, but the eight must be written. Intensive: write the full page on each of the eight. Same doctrine. The hours differ. The eight do not.

The Year — eight tight paragraphs, one for each head above, each paragraph quoting the governing verse and stating the distinction. Then one further paragraph: the principle as you would teach it to a babe.

Intensive — eight full pages, one for each head, then a ninth page: the principle as you would teach it to a babe, and as you would stand behind it before a teacher. Do not submit a feeling in the place of the cluster. Do not treat The Power of Salvation as this course.

Write in your own hand. The eight must be teaching, not headings. The page is not a journal of feelings.

Distinction
Completion of activities vs mastery. A certificate later will ask more than a click.

Charge
Write the principle as you would teach it to a babe, then as you would stand behind it before a teacher. Name the two old things. Name the difference between metanoia and metamellomai. Name Luke 16:19-31 as the Hell narrative. Name the confession Romans 10:9 actually asks. Do not submit a feeling in the place of the cluster. The Labour named the eight you must write. Write them.`,
  ),
];
