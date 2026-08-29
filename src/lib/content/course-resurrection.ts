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
    courseId: "course-fs-resurrection",
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [bookId],
    body,
  };
}

export const resurrectionModules = [
  {
    id: "mod-fs-5-kinds",
    courseId: "course-fs-resurrection" as const,
    number: 1,
    title: "Two kinds and this life",
    description: "Spiritual and material. New birth now; this life only; the body and two issues. Textbook Chapter 6, I–VI.",
  },
  {
    id: "mod-fs-5-map",
    courseId: "course-fs-resurrection" as const,
    number: 2,
    title: "Chronology, facts, firstfruits",
    description: "The leaflet spine; rapture 2 is not the advent; facts-file; temporary vs permanent. Textbook Chapter 6, VII–XII.",
  },
  {
    id: "mod-fs-5-companies",
    courseId: "course-fs-resurrection" as const,
    number: 3,
    title: "Five companies and charge",
    description: "Christ and the many saints through the two witnesses. Charge Q29–Q36. Textbook Chapter 6, XIII–XVIII.",
  },
];

export const resurrectionLessons: Lesson[] = [
  lesson(
    "les-fs-5-01",
    "mod-fs-5-kinds",
    1,
    "Two kinds — spiritual and material",
    75,
    `Central principle
There are two main kinds of resurrection: spiritual and material. Spiritual is the new birth. Material is the body. Do not flatten them into one slogan.

Key Scripture
Hebrews 6:2; Ephesians 2:1-6; John 5:28-29.

Cluster
G1, G4.

Read
Textbook Chapter 6, section I.

Teaching
This is Course 5 of Foundation School. One curriculum. The fifth of the six principles. Hebrews 6:2 names resurrection of the dead after laying on of hands. Course 4 left you at the fourth stone. This course opens the fifth: two kinds, not one heading you can recite without a distinction.

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

The leaflet’s first sentence under the heading is the file: two main kinds — spiritual and material. Spiritual resurrection is the new birth: being quickened from dead in trespasses and sins. Material resurrection is the resurrection of the body, not spirit. If you treat the heading as only a grave, you have already lost G1. If you treat the heading as only a conversion, you have already lost G4.

Ephesians 2:1-6. And you hath he quickened, who were dead in trespasses and sins; Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience: Among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind; and were by nature the children of wrath, even as others. But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;) And hath raised us up together, and made us sit together in heavenly places in Christ Jesus:

John 5:28-29. Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice, And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.

G1 is now. Dead in trespasses. Quickened together with Christ. Raised up together. Sit in heavenly places. That is spiritual resurrection. It is not the graves of John 5:28-29. Course 1 already named you dead in trespasses and sins. Course 2 named the son. Course 3 baptized that son into Christ. This lesson will not relaid those stones. It will name what they already were: a resurrection, spiritual, in this life.

G4 is the graves. All that are in the graves shall hear His voice and come forth. Two issues: life and damnation. The body comes forth. Not the spirit as if the person were a ghost waiting to be invented. Lesson 5-05 will hold John 5. Lesson 5-06 will time the two issues by a thousand years. Today you will not steal those lessons. Today you will refuse one slogan that swallows both kinds.

Do not postpone new birth past death and call it resurrection. That offer is refused in G3. Do not raise the wicked before the Millennium and call it the first resurrection. That flatten is refused when Revelation 20 is opened. Do not flatten five companies into one rapture. Those companies are not this lesson. This lesson is two kinds.

Leaving the first principles is not forgetting them. A man who never received the new birth is not leaving spiritual resurrection when he talks about graves. He is skipping the first kind. Hebrews 6:2 will not let you treat the fifth name as only a future hour.

Two main kinds. Spiritual: Ephesians 2:1-6. Material: John 5:28-29. Write both. Teach both. Do not merge them to make the file neater. The later chronology will hang on this distinction. If you lose two kinds here, you will flatten every company later.

The leaflet’s words are two main kinds of resurrection: Spiritual and Material. Spiritual resurrection is the new birth: being quickened (revived) from dead in trespasses and sins, renewed in the glorious likeness of God. Material resurrection is the resurrection of the body, not spirit. Hold both sentences. A teacher who can name five companies and cannot name two kinds has inverted the file. A student who can recite John 5 and has never been quickened has the second kind in his mouth and not the first in his life. Course 5 begins here, or it does not begin.

Labour
Academic Year — one tight page. Write the two kinds with one governing text each. What does spiritual raise, and when? What does material raise? Word drill: two kinds / quickened / graves / not one slogan.

Intensive — three pages on the same cluster. Page 1: write Hebrews 6:1-2, Ephesians 2:1-6, and John 5:28-29 in full; mark two kinds. Page 2: spiritual is new birth now — not the graves. Page 3: material is the body — not a second conversion; write the flatten you will refuse. Same doctrine.

Distinction
Spiritual resurrection vs material resurrection. Two kinds, not one heading.

Charge
Write the two kinds with one governing text each. What does spiritual raise, and when? What does material raise? Do not submit one slogan.`,
  ),
  lesson(
    "les-fs-5-02",
    "mod-fs-5-kinds",
    2,
    "Spiritual resurrection — Ephesians 2:1-6",
    75,
    `Central principle
Spiritual resurrection is the new birth: quickened from death in trespasses and sins. It is now. It is not the bodily raising.

Key Scripture
Ephesians 2:1-6.

Cluster
G1.

Read
Textbook Chapter 6, section II.

Teaching
You hath He quickened, who were dead in trespasses and sins. Even when we were dead in sins, hath quickened us together with Christ — by grace ye are saved. Raised us up together. Made us sit together in heavenly places in Christ Jesus.

Ephesians 2:1-6. And you hath he quickened, who were dead in trespasses and sins; Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience: Among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind; and were by nature the children of wrath, even as others. But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;) And hath raised us up together, and made us sit together in heavenly places in Christ Jesus:

What was the state? Dead in trespasses and sins. Walked according to the course of this world. Prince of the power of the air. Spirit that now worketh in the children of disobedience. Conversation in the lusts of the flesh. Children of wrath, even as others. Course 1 already taught this death as the old man’s life. This lesson names the same death as the thing spiritual resurrection raises you from.

What did God do? Rich in mercy. Great love. Quickened us together with Christ. Raised us up together. Made us sit together in heavenly places in Christ Jesus. By grace ye are saved. The verbs are past for the man who has received Him. This is not a rehearsal you wait to perform in a grave. This is G1.

This is not John 5:28-29. The graves are G4. All that are in the graves shall hear and come forth — that hour is coming. Ephesians 2 uses raised and sit of those who were dead in sins. If you steal the graves into this paragraph, you have flattened two kinds. If you steal this paragraph into a funeral and call it the only resurrection, you have lost the body.

John 5:25 already says the hour is coming, and now is, when the dead shall hear the voice of the Son of God, and they that hear shall live. Hold that sentence beside Ephesians 2. A present hearing. A present living. Lesson 5-05 will keep 5:28-29 as the graves. Today G1 remains G1.

Together with Christ. Raised up together. Sit together. The location named is heavenly places in Christ Jesus. That is not a proof that your body has already put on immortality. 1 Corinthians 15 will later prove the body. Course 3 already planted you in the likeness of His death and of His resurrection. Baptism into Christ is not cancelled. Spiritual resurrection is that life named as resurrection.

Do not offer this after death. Lesson 5-04 will lock the window: this life only. Hebrews 9:27. Revelation 22:11. Do not use 1 Corinthians 15:19 as that lock. 15:19 is bodily hope. Do not invent a second new birth in the grave. Dead in trespasses is a state you leave when you are quickened, or you leave this life still in it.

John 5:25. Verily, verily, I say unto you, The hour is coming, and now is, when the dead shall hear the voice of the Son of God: and they that hear shall live.

Write Ephesians 2:1-6. Mark dead, quickened, together with Christ, raised, sit, grace. What was raised? The man who was dead in sins. When? Now — in this life. What is not this text? The graves coming forth. G1 is spiritual resurrection. Keep it.

By grace ye are saved sits in the same breath as quickened together with Christ. Do not treat grace as a later feeling and quickened as a later grave. The man who walks according to the course of this world, according to the prince of the power of the air, is dead until God quickens him. Children of wrath, even as others — then mercy, love, quickened, raised, sit. That is the new birth named as resurrection. It is not Company 2. It is not the firstfruits of 1 Corinthians 15:20 as if your conversion were Christ’s empty tomb. Christ rose bodily. You were dead in sins and were quickened. Two kinds. Today teach the second sentence as G1.

Labour
Academic Year — one tight page. Write Ephesians 2:1-6. What was the state? What did God do? Why is this not John 5:28-29? Word drill: dead in trespasses / quickened / together with Christ / heavenly places.

Intensive — three pages on the same cluster. Page 1: write Ephesians 2:1-6 in full; mark every verb of death and of life. Page 2: this is new birth now — not the graves, not a future conversion. Page 3: write the sentence you will not preach if G1 has spoken; hold 5:25 as present hearing without stealing 5:28-29. Same doctrine.

Distinction
Spiritual resurrection now vs the bodily raising of the graves.

Charge
Write Ephesians 2:1-6. What was the state? What did God do? Why is this not John 5:28-29?`,
  ),
  lesson(
    "les-fs-5-03",
    "mod-fs-5-kinds",
    3,
    "Renewed in likeness — Ephesians 4:21-24; Colossians 3:10; 1 John 3:9",
    75,
    `Central principle
Spiritual resurrection renews you in the glorious likeness of God. New man after God. Renewed in knowledge after the image. Born of God doth not commit sin.

Key Scripture
Ephesians 4:21-24; Colossians 3:10; 1 John 3:9.

Cluster
G2.

Read
Textbook Chapter 6, section III.

Teaching
The leaflet joins quickened (G1) to renewed in the glorious likeness of God. Three texts. One cluster. This is still spiritual resurrection. This is still this life. Course 2 already named image and likeness. This lesson will not invent a second nature. It will show that the new birth restores likeness as the leaflet files it.

Ephesians 4:21-24. If so be that ye have heard him, and have been taught by him, as the truth is in Jesus: That ye put off concerning the former conversation the old man, which is corrupt according to the deceitful lusts; And be renewed in the spirit of your mind; And that ye put on the new man, which after God is created in righteousness and true holiness.

Colossians 3:10. And have put on the new man, which is renewed in knowledge after the image of him that created him:

1 John 3:9. Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.

Heard Him. Taught by Him. The truth is in Jesus. Put off the old man — former conversation, corrupt according to the deceitful lusts. Renewed in the spirit of your mind. Put on the new man, which after God is created in righteousness and true holiness. Colossians: have put on the new man, renewed in knowledge after the image of Him that created him. 1 John: born of God; His seed remaineth; he cannot sin, because he is born of God.

G2 is likeness restored in new birth. After God. After the image of Him that created him. Course 2 taught Genesis 1:26-28 as written. This cluster will not hedge that image into a metaphor you never have to put on. The new man is created. The new man is put on. The new man is renewed in knowledge after the image.

1 John 3:9 is in G2 so you will not treat spiritual resurrection as a mood that leaves the old man in office. Born of God doth not commit sin. His seed remaineth. Course 1 already distinguished old man from outward sin. This verse is not a dare to pretend you have no body. It is the leaflet’s mark that new birth is a nature, not a slogan.

This is not G4. Graves do not put on the new man. This is not Company 2. They that are Christ’s at His coming will put on immortality. Today the new man is created after God in this life. Do not steal 1 Corinthians 15:53 into this lesson to flatten spiritual and material. Do not postpone likeness until a grave opens.

Put off. Be renewed. Put on. Have put on. Born of God. Three texts. One kind: spiritual. If you heard Him and were taught by Him, the truth is in Jesus is not an ornament. The former conversation is named so you will put it off. The new man is named so you will put it on. Renewed in the spirit of your mind. Renewed in knowledge after the image.

Genesis 1:26. And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.

Write the three texts. What is put off? The old man, corrupt according to the deceitful lusts. What is put on? The new man after God, created in righteousness and true holiness; renewed in knowledge after the image. What does 1 John 3:9 force you to say of the man born of God? He doth not commit sin; the seed remaineth; he cannot sin, because he is born of God. That is G2. Not the graves. Not a seventh nature Course 2 did not name.

Course 2 taught image and likeness as written. G2 files the same likeness as what spiritual resurrection restores: new man after God; renewed in knowledge after the image of Him that created him. Do not treat 1 John 3:9 as a dare you answer with a slogan and then live as the old man. His seed remaineth in him. Put off the former conversation. Put on the new man. This cluster is still only in this life. A grave will not put the new man on a man who died in the old one.

Labour
Academic Year — one tight page. Write Ephesians 4:21-24, Colossians 3:10, and 1 John 3:9. What is put off? What is put on? What does born of God force you to say? Word drill: new man / after God / after the image / His seed remaineth.

Intensive — three pages on the same cluster. Page 1: write the three texts in full; mark old man, renewed, new man, image, born of God. Page 2: likeness restored in new birth — tie to Course 2 without inventing a second nature. Page 3: this is still this life; not the graves; not immortality stolen from 1 Corinthians 15. Same doctrine.

Distinction
Likeness restored in new birth vs a mood, or a bodily raising treated as if it were the new man.

Charge
Write Ephesians 4:21-24, Colossians 3:10, and 1 John 3:9. What is put off? What is put on? What does born of God force you to say?`,
  ),
  lesson(
    "les-fs-5-04",
    "mod-fs-5-kinds",
    4,
    "This life only",
    75,
    `Central principle
Spiritual resurrection takes place only in this life. When you leave this life, the possibility of new birth has passed, and is forfeited if you are not yet born again. The lock is Hebrews 9:27 and Revelation 22:11.

Key Scripture
Hebrews 9:27; Revelation 22:11.

Cluster
G3.

Read
Textbook Chapter 6, section IV.

Teaching
It is appointed unto men once to die, but after this the judgment. He that is unjust, let him be unjust still; he which is filthy, let him be filthy still; he that is righteous, let him be righteous still; he that is holy, let him be holy still. That is the forfeiture cluster as a unit. Two verses. One window: this life.

Hebrews 9:27. And as it is appointed unto men once to die, but after this the judgment:

Revelation 22:11. He that is unjust, let him be unjust still: and he which is filthy, let him be filthy still: and he that is righteous, let him be righteous still: and he that is holy, let him be holy still.

Once to die. After this the judgment. Not after this another offer of new birth. Not after this a second quickening from trespasses for the man who refused G1. The appointment is death. What follows the appointment is judgment. Spiritual resurrection is not waiting on the other side of that appointment for a man still dead in sins.

Unjust still. Filthy still. Righteous still. Holy still. Revelation 22:11 will not let you preach a change of kind after the window closes. The unjust does not become born of God by dying. The filthy does not put on the new man in the grave. The righteous remains righteous. The holy remains holy. States hold. New birth is not postponed past death.

Do not use 1 Corinthians 15:19 as this proof-text. If in this life only we have hope in Christ, we are of all men most miserable. Paul is proving bodily resurrection. 15:12-19: if the dead rise not, Christ is not raised; preaching and faith are vain; the dead in Christ are perished. Therefore a hope limited to this present life — no raised body, no future — would make us most miserable. He is not defining new birth. He is not locking the G3 window. 15:19 belongs in the facts-file (H1) as bodily hope. This school will not make 15:19 mean the opposite of Paul’s argument.

Do not use Ecclesiastes 11:1 for this claim. The leaflet printed it in a parenthesis. The owner locked the cluster: Hebrews 9:27 and Revelation 22:11 only. Cast thy bread upon the waters is not the forfeiture text. Do not restore it to fill a page. Do not invent a third lock.

Course 1 already refused Hell-avoidance as if it were metanoia. This lesson refuses a later metanoia after death as if death were a second pulpit. Luke 16 will sit in Course 6 as consequence and gulf. Today G3 is enough: appointed to die; after this the judgment; unjust still; holy still.

When you leave this life, or world, all possibilities of new birth salvation or spiritual resurrection have passed, and are forfeited if you are not yet born again. That is the leaflet’s sentence, carried now by these two verses. A man who plans to be quickened after he dies has not heard G3. A teacher who offers him that plan has left the cluster.

Write Hebrews 9:27 and Revelation 22:11. Why can new birth not be postponed past death? Once to die; after this the judgment. Unjust still; holy still. What two texts will you refuse as this lock? 1 Corinthians 15:19 — bodily hope, not new-birth timing. Ecclesiastes 11:1 — not in this cluster. G3 is a unit. Keep it a unit.

1 Corinthians 15:19. If in this life only we have hope in Christ, we are of all men most miserable.

Read it here only to refuse it as G3. Paul has just said: if the dead rise not, Christ is not raised; preaching vain; faith vain; ye are yet in your sins; they which are fallen asleep in Christ are perished. Miserable is the man whose hope never includes a raised body. That is H1. It is the opposite of “new birth is only available in this life.” Do not invert him. Do not restore the dropped print to make G3 look like the leaflet’s parenthesis. Two verses lock the window. After this the judgment. Still. No new birth after death.

Labour
Academic Year — one tight page. Write Hebrews 9:27 and Revelation 22:11. Why can new birth not be postponed past death? Name the two texts that are not this lock. Word drill: once to die / after this the judgment / still / forfeited.

Intensive — three pages on the same cluster. Page 1: write Hebrews 9:27 and Revelation 22:11 in full; reason appointment, judgment, still. Page 2: 1 Corinthians 15:19 is bodily hope — write Paul’s argument in 15:12-19 so you will not steal 15:19 into G3. Page 3: no Ecclesiastes 11:1; write the offer of new birth after death you will refuse. Same doctrine.

Distinction
This-life window (Hebrews 9:27; Revelation 22:11) vs 1 Corinthians 15:19 as bodily hope, or any offer of new birth after death.

Charge
Write Hebrews 9:27 and Revelation 22:11. Why can new birth not be postponed past death? Do not submit 1 Corinthians 15:19 or Ecclesiastes 11:1 as this lock.`,
  ),
  lesson(
    "les-fs-5-05",
    "mod-fs-5-kinds",
    5,
    "Material resurrection — John 5:28-29",
    75,
    `Central principle
Material resurrection is the resurrection of the body, not spirit. All that are in the graves shall hear His voice and come forth — to the resurrection of life, or to the resurrection of damnation.

Key Scripture
John 5:28-29.

Cluster
G4.

Read
Textbook Chapter 6, section V.

Teaching
Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear His voice, and shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.

John 5:25. Verily, verily, I say unto you, The hour is coming, and now is, when the dead shall hear the voice of the Son of God: and they that hear shall live.

John 5:28-29. Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice, And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.

Two hours in one discourse. 5:25: coming, and now is — the dead hear and live. That hearing sits beside G1. 5:28-29: the hour is coming — all that are in the graves. Marvel not. Come forth. Two destinies. This lesson is G4: the graves, the body, two issues. Do not flatten 5:25 and 5:28 into one hour so that spiritual and material become one slogan.

Who comes forth? All that are in the graves. Not some. All hear His voice. They shall come forth. To what two resurrections? Life. Damnation. They that have done good. They that have done evil. The leaflet names these the resurrection of the body, not spirit. Soul and spirit are immortal; Course 6 will labour that. Resurrection language here is bodily. Graves. Come forth.

Material is not a second new birth. The man already quickened in Ephesians 2 still has a body that will come forth. The man who refused G1 still has a body that will come forth. Both kinds can be true of one history: spiritual now, material later — or material only, unto damnation, if new birth was forfeited. Do not preach the graves as a second chance to be born again. G3 already closed that window.

The two issues are not timed in this verse. John 5 names life and damnation. Lesson 5-06 will place a thousand years between them from Revelation 20:4-6 and 20:11-15, with Daniel 12. Today do not raise the wicked before the Millennium to make one general rising look tidier. Today do not invent a third issue. Two. Life. Damnation.

Marvel not at this. The discourse has already said the Son quickens whom He will. The graves will not refuse His voice. All that are in the graves shall hear. Come forth is not a metaphor for a memorial service. It is the body. They that have done good, unto the resurrection of life. They that have done evil, unto the resurrection of damnation.

John 5:21. For as the Father raiseth up the dead, and quickeneth them; even so the Son quickeneth whom he will.

Write John 5:28-29. Who comes forth? All that are in the graves. To what two resurrections? Life and damnation. What is raised? The body, not spirit. What hour is not this verse? 5:25 — coming and now is. G4 remains the graves. Hold 5:25 without stealing G1’s whole file, and without erasing G4.

The Father raiseth up the dead and quickeneth them. The Son quickeneth whom He will. Marvel not — the hour is coming when all that are in the graves shall hear His voice. The leaflet’s sentence is material resurrection: the resurrection of the body, not spirit. Do not preach a spirit-resurrection of the body, as if come forth meant a ghost. Do not preach a second new birth in the dust. They that have done good, unto the resurrection of life — first issue, before the Millennium, when Revelation 20 is opened. They that have done evil, unto the resurrection of damnation — second issue, after the thousand years. John 5 names the two. It does not clock the thousand years. Lesson 5-06 will. Today who comes forth? All. To what two? Life and damnation. What is raised? The body.

Labour
Academic Year — one tight page. Write John 5:28-29. Who comes forth? To what two resurrections? Why is 5:25 not this verse? Word drill: graves / come forth / life / damnation / body not spirit.

Intensive — three pages on the same cluster. Page 1: write John 5:25 and 5:28-29 in full; two columns — now is / the graves. Page 2: material is the body; all come forth; two destinies, not a second new birth. Page 3: do not time the thousand years here; do not raise the wicked early; write the flatten you will refuse. Same doctrine.

Distinction
The graves (body, two issues) vs the present hearing of 5:25, or a spirit-resurrection of the body.

Charge
Write John 5:28-29. Who comes forth? To what two resurrections? Do not submit 5:25 as if it were the graves.`,
  ),
  lesson(
    "les-fs-5-06",
    "mod-fs-5-kinds",
    6,
    "Two issues; a thousand years — Revelation 20:4-6",
    75,
    `Central principle
Two material issues, a thousand years apart. The righteous to life before the Millennium. The wicked to damnation after it. Revelation 20 carries the timing. Revelation 10 is not the resurrection chapter.

Key Scripture
Revelation 20:4-6; Revelation 20:11-15; Daniel 12:2-3; John 5:28-29.

Cluster
G5.

Read
Textbook Chapter 6, section VI.

Teaching
They lived and reigned with Christ a thousand years. The rest of the dead lived not again until the thousand years were finished. This is the first resurrection. After the thousand years: a great white throne; the dead judged; death and hell delivered up the dead; whosoever was not found written in the book of life was cast into the lake of fire.

Revelation 20:4-6. And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years. But the rest of the dead lived not again until the thousand years were finished. This is the first resurrection. Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.

Revelation 20:11-15. And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them. And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works. And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works. And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire.

Daniel 12:2-3. And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt. And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever.

John 5:28-29 already named life and damnation. Daniel 12 names sleep in the dust, awake, everlasting life, shame and everlasting contempt; they that be wise shall shine. Revelation 20:4-6 times the first resurrection before a thousand years of reign. Revelation 20:11-15 times the rest of the dead after those years, at the great white throne, unto the lake of fire. That is the doctrine of two bodily resurrections a thousand years apart.

Do not teach Revelation chapter 10 as the resurrection passage. The leaflet printed a compressed range. Chapter 10 has eleven verses: seven thunders sealed; a little book; an angel swears that there should be time no longer; thou must prophesy again. Revelation 10:11-15 does not exist. This school teaches Revelation 20:4-6 and 20:11-15. Chapter 10 remains thunders and the little book.

The rest of the dead lived not again until the thousand years were finished. Do not raise the wicked before the Millennium. Do not make one general rising that erases the thousand years. Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power. They shall be priests of God and of Christ, and shall reign with Him a thousand years. All without Christ are raised together after the Millennium, judged, and cast into the lake of fire forever. Who is not in the first resurrection? The rest of the dead — all out of Christ.

The five companies will later fill the first resurrection. Do not flatten those five into this lesson as if Revelation 20 named only one rapture. Today G5 is two issues and a thousand years. The Millennium will be defined in the next lesson from the leaflet’s own sentence. Place both issues on the map: life before; damnation after.

Labour
Academic Year — one tight page. Write Revelation 20:4-6 and 20:11-15. Place both issues on the chronology: who, when, destiny. Why is Revelation 10 not this chapter? Word drill: first resurrection / rest of the dead / thousand years / great white throne.

Intensive — three pages on the same cluster. Page 1: write Revelation 20:4-6, 20:11-15, Daniel 12:2-3, and John 5:28-29 in full. Page 2: two issues, a thousand years — do not raise the wicked early; do not teach chapter 10 as the resurrection passage. Page 3: who is not in the first resurrection; write the general-rising flatten you will refuse. Same doctrine.

Distinction
Two material resurrections a thousand years apart vs one general rising, or Revelation 10 treated as the timing chapter.

Charge
Write Revelation 20:4-6 and 20:11-15. Place both issues on the chronology. Who is not in the first resurrection?`,
  ),
  lesson(
    "les-fs-5-07",
    "mod-fs-5-map",
    7,
    "The Millennium defined",
    75,
    `Central principle
The Millennium is the one thousand years period after the tribulation. The tribulation is 7 years after rapture 2. Rapture 2 is not the second advent. The second advent — coming of Christ with the saints — is after tribulation, ushering the Millennium.

Key Scripture
Revelation 20:4-6 with Revelation 6–19 as the leaflet names the span.

Cluster
Chronology. The leaflet spine.

Read
Textbook Chapter 6, section VII.

Teaching
Quote the spine until you can teach it without collapsing any clause:

The Millennium is the one thousand years period after the tribulation: the tribulation is 7 years after rapture 2, and rapture 2 is not Second Advent; 2nd advent (coming of Christ with the saints) is after Tribulation, ushering the Millennium: Rev. 6–19.

That sentence is the leaflet’s own clarifying line. This school will not replace it with another eschatological school. This school will not ask only “rapture or tribulation first?” as if that were the map.

Revelation 20:4-6. And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years. But the rest of the dead lived not again until the thousand years were finished. This is the first resurrection. Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.

Millennium: one thousand years. After the tribulation. They lived and reigned with Christ a thousand years. Priests of God and of Christ. The rest of the dead wait. The thousand years are not the last judgment. The great white throne is after. Course 6 will open that throne. Today the spine must stand.

Tribulation: seven years after rapture 2. Revelation 6–19 is the source’s range for that span and for the advent that closes it. Do not start the tribulation before Company 2. Do not start the Millennium at rapture 2. Rapture 2 is not the second advent. Lesson 5-08 will labour that distinction. Lesson 5-09 will open Revelation 19:11-21. Today name the order: rapture 2, then seven years, then advent with the saints, then the thousand years.

Rapture 2 is they that are Christ’s at His coming — receive you unto Myself; escape; changed in a moment. Second advent is coming of Christ with the saints, after tribulation, ushering the Millennium. If you make those one event, Company 4 has nowhere to be saved and return. If you flatten five companies into “the rapture,” the spine has no numbered 2 to sit after.

Do not raise the wicked in this thousand years. They lived not again until the thousand years were finished. Do not offer new birth after death to fill the tribulation with a second gospel of postponement. Spiritual resurrection remains this life only. The Millennium is not a seventh course. It is the period the fifth principle must name so the two issues and the five companies have a map.

Write the spine from memory. What is the Millennium? One thousand years after the tribulation. When is the tribulation? Seven years after rapture 2. What is rapture 2 not? The second advent. What does the advent do? Comes with the saints after tribulation and ushers the Millennium. Rev. 6–19. Keep every clause.

Parse the spine as four clauses, not one blur. (1) The Millennium is the one thousand years period after the tribulation. (2) The tribulation is 7 years after rapture 2. (3) Rapture 2 is not Second Advent. (4) 2nd advent — coming of Christ with the saints — is after Tribulation, ushering the Millennium: Rev. 6–19. Drop a clause and the five companies lose their map. Number a single “the rapture” and clause 3 has nothing to deny. Make advent equal rapture 2 and clause 4 is a repeat. Start the thousand years at the escape and clause 1 is false. This lesson quotes the leaflet’s own sentence so later lessons hang on it, not on another school.

Labour
Academic Year — one tight page. Write the leaflet spine in full. Then write four short answers: Millennium; tribulation’s seven years; rapture 2 is not; advent ushers. Word drill: after the tribulation / 7 years after rapture 2 / not Second Advent / with the saints.

Intensive — three pages on the same cluster. Page 1: write the spine and Revelation 20:4-6 in full; mark thousand years, rest of the dead, first resurrection. Page 2: order — rapture 2, seven years, advent with the saints, Millennium; refuse “rapture or tribulation first?” as the only question. Page 3: the Millennium is not the last judgment and not a seventh course; write the collapse you will refuse. Same doctrine.

Distinction
The leaflet spine as a system vs one slogan that erases rapture 2, or treats the thousand years as the last judgment.

Charge
Write the leaflet spine in full. What is the Millennium? When is the tribulation? What is rapture 2 not?`,
  ),
  lesson(
    "les-fs-5-08",
    "mod-fs-5-map",
    8,
    "Rapture 2 is not the second advent",
    75,
    `Central principle
They that are Christ’s at His coming is rapture 2. It is not the second advent. He receives you unto Himself and you escape. The advent is later: He comes with the saints after the tribulation.

Key Scripture
1 Corinthians 15:23, 51-54; John 14:1-3; Luke 21:34-36; 2 Corinthians 5:1-8.

Cluster
H4, H8.

Read
Textbook Chapter 6, section VIII.

Teaching
Every man in his own order: Christ the firstfruits; afterward they that are Christ’s at His coming. We shall not all sleep. We shall all be changed. I will come again, and receive you unto Myself. Watch and pray that ye may be accounted worthy to escape all these things, and to stand before the Son of man. Absent from the body, present with the Lord. That file is Company 2 / rapture 2. It is not Revelation 19.

1 Corinthians 15:23. But every man in his own order: Christ the firstfruits; afterward they that are Christ's at his coming.

1 Corinthians 15:51-54. Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed, In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed. For this corruptible must put on incorruption, and this mortal must put on immortality. So when this corruptible shall have put on incorruption, and this mortal shall have put on immortality, then shall be brought to pass the saying that is written, Death is swallowed up in victory.

John 14:1-3. Let not your heart be troubled: ye believe in God, believe also in me. In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.

Luke 21:34-36. And take heed to yourselves, lest at any time your hearts be overcharged with surfeiting, and drunkenness, and cares of this life, and so that day come upon you unawares. For as a snare shall it come on all them that dwell on the face of the whole earth. Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things that shall come to pass, and to stand before the Son of man.

2 Corinthians 5:1-8. For we know that if our earthly house of this tabernacle were dissolved, we have a building of God, an house not made with hands, eternal in the heavens. For in this we groan, earnestly desiring to be clothed upon with our house which is from heaven: If so be that being clothed we shall not be found naked. For we that are in this tabernacle do groan, being burdened: not for that we would be unclothed, but clothed upon, that mortality might be swallowed up of life. Now he that hath wrought us for the selfsame thing is God, who also hath given unto us the earnest of the Spirit. Therefore we are always confident, knowing that, whilst we are at home in the body, we are absent from the Lord: (For we walk by faith, not by sight:) We are confident, I say, and willing rather to be absent from the body, and to be present with the Lord.

Receive you unto Myself. Escape all these things. Changed in a moment. Dead raised incorruptible. That is before the tribulation. The tribulation is seven years after this. The second advent is coming of Christ with the saints, after tribulation, ushering the Millennium. Heaven opened. White horse. Armies in heaven follow. KING OF KINGS. Lesson 5-09 will quote Revelation 19:11-21. Today refuse the merge.

If rapture 2 were the advent, Company 4 could not be saved after rapture 2 and still return with Him. If the advent were rapture 2, “with the saints” and “receive you unto Myself” would be one sentence. The leaflet numbered a 2 so you would not say “the rapture” as if five companies were one event. Company 1 is already past. Companies 3–5 are in the tribulation. Advent is H8, after.

State the difference from the source’s own sentence: rapture 2 is not Second Advent; 2nd advent (coming of Christ with the saints) is after Tribulation. Write H4 beside H8 until you cannot preach them as one coming. Do not flatten five into one. Do not start the Millennium at the escape. Do not raise the wicked at rapture 2.

Labour
Academic Year — one tight page. State the difference from the leaflet’s own sentence. Write John 14:3 and Luke 21:36 beside “with the saints.” Word drill: receive you unto Myself / escape / at His coming / not Second Advent.

Intensive — three pages on the same cluster. Page 1: write 1 Corinthians 15:23, 51-54; John 14:1-3; Luke 21:34-36; 2 Corinthians 5:1-8 in full. Page 2: rapture 2 before tribulation — receive, escape, changed; not Revelation 19. Page 3: write the merge you will refuse; why Company 4 requires the distinction. Same doctrine.

Distinction
Rapture 2 (receive / escape / at His coming) vs second advent (with the saints after tribulation).

Charge
State the difference from the source’s own sentence. Do not make advent equal rapture 2.`,
  ),
  lesson(
    "les-fs-5-09",
    "mod-fs-5-map",
    9,
    "Second advent with the saints; ushers the Millennium",
    75,
    `Central principle
The second advent is the coming of Christ with the saints after the tribulation. Heaven opened. The armies follow. This coming ushers the Millennium. It is not rapture 2.

Key Scripture
Revelation 19:11-21.

Cluster
H8.

Read
Textbook Chapter 6, section IX.

Teaching
I saw heaven opened, and behold a white horse. He that sat upon him was called Faithful and True. The armies which were in heaven followed Him upon white horses, clothed in fine linen, white and clean. KING OF KINGS, AND LORD OF LORDS. The beast and the false prophet are cast alive into a lake of fire burning with brimstone. The remnant are slain. That is the advent the leaflet names. It ushers the thousand years. It does not receive the church as John 14 receives.

Revelation 19:11-21. And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war. His eyes were as a flame of fire, and on his head were many crowns; and he had a name written, that no man knew, but he himself. And he was clothed with a vesture dipped in blood: and his name is called The Word of God. And the armies which were in heaven followed him upon white horses, clothed in fine linen, white and clean. And out of his mouth goeth a sharp sword, that with it he should smite the nations: and he shall rule them with a rod of iron: and he treadeth the winepress of the fierceness and wrath of Almighty God. And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS. And I saw an angel standing in the sun; and he cried with a loud voice, saying to all the fowls that fly in the midst of heaven, Come and gather yourselves together unto the supper of the great God; That ye may eat the flesh of kings, and the flesh of captains, and the flesh of mighty men, and the flesh of horses, and of them that sit on them, and the flesh of all men, both free and bond, both small and great. And I saw the beast, and the kings of the earth, and their armies, gathered together to make war against him that sat on the horse, and against his army. And the beast was taken, and with him the false prophet that wrought miracles before him, with which he deceived them that had received the mark of the beast, and them that worshipped his image. These both were cast alive into a lake of fire burning with brimstone. And the remnant were slain with the sword of him that sat upon the horse, which sword proceeded out of his mouth: and all the fowls were filled with their flesh.

With the saints. The armies which were in heaven followed Him. Company 4 exists so that tribulation saints are in time to come back with Christ for the Millennium. Company 2 was already received before the seven years. If you preach 19:11 as rapture 2, you have inverted the spine. If you preach rapture 2 as this war, you have no escape in Luke 21:36.

This coming is after tribulation. Revelation 6–19 is the span. Seals, trumpets, vials, Babylon — then heaven opened. The Millennium follows: they lived and reigned with Christ a thousand years. The advent ushers that reign. It is not the great white throne. It is not the raising of the rest of the dead. The wicked are not raised here to begin the thousand years. Beast and false prophet go alive to the lake. The rest of the dead wait until the thousand years are finished.

Revelation 19:11-21 is not itself the raising of the dead. The leaflet files it as advent with the saints. Company 5 will end the first resurrection in Revelation 11:7-12, still inside the tribulation file. Do not steal the two witnesses into this lesson. Do not steal the 144,000. Teach the white horse. Teach the armies. Teach KING OF KINGS. Teach what this coming is not.

Write Revelation 19:11-21. Who comes? Faithful and True, the Word of God. With whom? The armies in heaven. After what? Tribulation. Unto what? The Millennium. What is this not? Rapture 2. Receive you unto Myself remains John 14. Escape remains Luke 21. With the saints remains this chapter.

Labour
Academic Year — one tight page. Write Revelation 19:11-16. Who comes, with whom, after what, unto what? What is this not? Word drill: heaven opened / armies which were in heaven / with the saints / ushering the Millennium.

Intensive — three pages on the same cluster. Page 1: write Revelation 19:11-21 in full; mark horse, Word, armies, KING OF KINGS, beast, false prophet, remnant. Page 2: after tribulation, ushers the Millennium — not rapture 2, not the great white throne. Page 3: Company 4 returns here; write why the merge with H4 destroys the map. Same doctrine.

Distinction
Advent with the saints after tribulation vs rapture 2, or this war treated as the raising of the rest of the dead.

Charge
Write Revelation 19:11-16. Who comes, with whom, after what, unto what? What is this not?`,
  ),
  lesson(
    "les-fs-5-10",
    "mod-fs-5-map",
    10,
    "Facts-file — Job 19; Isaiah 26; Psalm 16:10; John 20–21; Romans; 1 Corinthians 15",
    75,
    `Central principle
Resurrection has a facts-file, not one proof text. Redeemer. Flesh. Holy One. Handle Me. Declared Son. Firstfruits. 1 Corinthians 15:19 sits here as bodily hope.

Key Scripture
Job 19:25-27; Isaiah 26:14, 19; Psalm 16:10; John 20–21; Romans 1:4; 6:5; 1 Corinthians 15:12-23.

Cluster
H1.

Read
Textbook Chapter 6, section X.

Teaching
The leaflet lists facts about the resurrection: Job 19:25-27, Isaiah 26:14-19, Psalm 16:10, John 20–21, 1 Peter 1:3, 3:21, Romans 1:4, 6:5, 1 Corinthians 15. Teach them as a file. Do not pick one verse and call the file finished.

Job 19:25-27. For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth: And though after my skin worms destroy this body, yet in my flesh shall I see God: Whom I shall see for myself, and mine eyes shall behold, and not another; though my reins be consumed within me.

Isaiah 26:14. They are dead, they shall not live; they are deceased, they shall not rise: therefore hast thou visited and destroyed them, and made all their memory to perish.

Isaiah 26:19. Thy dead men shall live, together with my dead body shall they arise. Awake and sing, ye that dwell in dust: for thy dew is as the dew of herbs, and the earth shall cast out the dead.

Psalm 16:10. For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.

Acts 2:27, 31. Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption. He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption.

Romans 1:4. And declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead:

Romans 6:5. For if we have been planted together in the likeness of his death, we shall be also in the likeness of his resurrection:

1 Peter 1:3. Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,

1 Corinthians 15:12-19. Now if Christ be preached that he rose from the dead, how say some among you that there is no resurrection of the dead? But if there be no resurrection of the dead, then is Christ not risen: And if Christ be not risen, then is our preaching vain, and your faith is also vain. Yea, and we are found false witnesses of God; because we have testified of God that he raised up Christ: whom he raised not up, if so be that the dead rise not. For if the dead rise not, then is not Christ raised: And if Christ be not raised, your faith is vain; ye are yet in your sins. Then they also which are fallen asleep in Christ are perished. If in this life only we have hope in Christ, we are of all men most miserable.

1 Corinthians 15:20-23. But now is Christ risen from the dead, and become the firstfruits of them that slept. For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive. But every man in his own order: Christ the firstfruits; afterward they that are Christ's at his coming.

John 20:27. Then saith he to Thomas, Reach hither thy finger, and behold my hands; and reach hither thy hand, and thrust it into my side: and be not faithless, but believing.

John 21:12-13. Jesus saith unto them, Come and dine. And none of the disciples durst ask him, Who art thou? knowing that it was the Lord. Jesus then cometh, and taketh bread, and giveth them, and fish likewise.

Redeemer liveth. In my flesh shall I see God. Thy dead men shall live; together with my dead body shall they arise. Isaiah 26:14 is in the file: they are dead, they shall not live — the source’s facts include both 14 and 19. Psalm 16:10: soul not left in hell; Holy One not seeing corruption — Peter files it as Christ’s resurrection. John 20–21: handle; dine; flesh and bone as the appearances force. Lively hope by the resurrection. Declared Son of God with power by the resurrection. Planted in the likeness of His death, also of His resurrection. 1 Peter 3:21 remains Course 3’s figure by the resurrection of Jesus Christ; it is listed here as a fact, not as a second tank-gospel.

15:19 stays in this file. If there is no resurrection of the dead, Christ is not raised; faith is vain; the asleep are perished; a hope limited to this life only would make us most miserable. That is bodily hope. It is not G3. Do not carry it back to lesson 5-04 as the new-birth lock.

A facts-file, not one proof text. Write Job, Isaiah, Psalm 16, the appearances, Romans, 1 Corinthians 15:12-23. Ground of hope. Do not flatten the file into a slogan.

Labour
Academic Year — one tight page. Write Job 19:25-27, Psalm 16:10, and 1 Corinthians 15:19-23. Why does 15:19 belong here and not in G3? Word drill: in my flesh / Holy One / handle Me / firstfruits / bodily hope.

Intensive — three pages on the same cluster. Page 1: write Job 19:25-27, Isaiah 26:14, 26:19, Psalm 16:10, Acts 2:27, 31, Romans 1:4, 6:5, 1 Peter 1:3, and 1 Corinthians 15:12-23 in full. Page 2: John 20:27 and 21:12-13 — bodily appearances; 15:19 as bodily hope, not G3. Page 3: the file is many texts; write the one-verse flatten you will refuse. Same doctrine.

Distinction
A facts-file vs one proof text, or 15:19 used to time new birth.

Charge
Write Job 19:25-27, Psalm 16:10, and 1 Corinthians 15:19-23. Why does 15:19 belong here and not in G3?`,
  ),
  lesson(
    "les-fs-5-11",
    "mod-fs-5-map",
    11,
    "Temporary vs permanent; Christ the firstfruits",
    75,
    `Central principle
Temporary raising is not the immortal body. The maid arose; she would die again. Christ is the firstfruits of all permanent resurrections. Matthew 9:25 is not 1 Corinthians 15:20-23.

Key Scripture
Matthew 9:25; 1 Corinthians 15:1-23.

Cluster
H2.

Read
Textbook Chapter 6, section XI.

Teaching
When the people were put forth, He went in, and took her by the hand, and the maid arose. That is temporary. Raised to life in this age; the body would die again. Permanent: raised to immortality to live forever in their bodies. Christ the firstfruits of all permanent resurrections. Then they that are Christ’s at His coming — in His order, not as if Jairus’s house were that order.

Matthew 9:25. But when the people were put forth, he went in, and took her by the hand, and the maid arose.

1 Corinthians 15:1-8. Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand; By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain. For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures: And that he was seen of Cephas, then of the twelve: After that, he was seen of above five hundred brethren at once; of whom the greater part remain unto this present, but some are fallen asleep. After that, he was seen of James; then of all the apostles. And last of all he was seen of me also, as of one born out of due time.

1 Corinthians 15:20-23. But now is Christ risen from the dead, and become the firstfruits of them that slept. For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive. But every man in his own order: Christ the firstfruits; afterward they that are Christ's at his coming.

Why is Matthew 9:25 not the same as 1 Corinthians 15:20-23? The maid arose — a body lived again, not yet immortality. Christ is risen and become the firstfruits of them that slept. Firstfruits names the beginning of the permanent harvest. His order follows: afterward they that are Christ’s at His coming. Jairus’s daughter is not Company 2. She is not Company 1. Temporary raisings are examples in the leaflet’s file. They are not the five raptures.

Christ died for our sins. He was buried. He rose the third day. He was seen. That gospel is the ground of permanent resurrection. If you treat every raising in the Gospels as firstfruits, you have two firstfruits and no temporary file. If you treat firstfruits as if Christ were only another maid, you have lost 15:20.

Matthew 27:52-53 belongs to permanent and to Company 1. Many bodies of the saints which slept arose after His resurrection. The next lesson will teach those saints as now in heaven with their bodies. Today name them as permanent, not as Jairus. Do not steal the C4 sentence to finish this page. Do not leave firstfruits untaught to save it for Company 1.

Temporary vs permanent is not a sixth company. Do not mix Lazarus, the widow’s son, or the maid into the five raptures. The five are the first material resurrection’s companies. Temporary raisings die again. Permanent bodies live forever. Christ the firstfruits of all permanent resurrections.

Write Matthew 9:25 beside 1 Corinthians 15:20-23. Why are they not the same? Took her by the hand; the maid arose — temporary. Christ the firstfruits; afterward they that are Christ’s at His coming — permanent order. Every man in his own order. Do not flatten.

The leaflet’s examples of resurrection are Temporary (Matthew 9:25) and Permanent: raised to immortality to live forever in their bodies, Christ the first fruits of all permanent resurrections (1 Corinthians 15:1-23) and the many saints right now in heaven with their bodies after His resurrection (Matthew 27:52-53). H2 holds the contrast. Q35 will ask why the maid is not 15:20-23. Answer from the cluster: she arose; she is not firstfruits of them that slept; she is not afterward they that are Christ’s at His coming. Do not mix temporary raisings into the five companies. The five are permanent first-resurrection companies. Christ died, was buried, rose the third day, was seen — that gospel is the permanent ground.

Labour
Academic Year — one tight page. Write Matthew 9:25 and 1 Corinthians 15:20-23. Why is the maid not the firstfruits harvest? Word drill: the maid arose / firstfruits / them that slept / own order / temporary vs permanent.

Intensive — three pages on the same cluster. Page 1: write Matthew 9:25 and 1 Corinthians 15:1-8, 20-23 in full. Page 2: temporary raising ≠ immortal body; do not file Gospel raisings as companies. Page 3: Christ firstfruits of all permanent resurrections; preview Matthew 27 as permanent without finishing Company 1. Same doctrine.

Distinction
Temporary raising vs permanent / immortal body. Matthew 9:25 is not 1 Corinthians 15:20-23.

Charge
Write Matthew 9:25 and 1 Corinthians 15:20-23. Why is Matthew 9:25 not the same as 1 Corinthians 15:20-23?`,
  ),
  lesson(
    "les-fs-5-12",
    "mod-fs-5-map",
    12,
    "Matthew 27:52-53 — saints now in heaven with bodies",
    75,
    `Central principle
Many bodies of the saints which slept arose after His resurrection, went into the holy city, and appeared unto many. Those saints are right now in heaven with their bodies. There is not another Foundation School teaching.

Key Scripture
Matthew 27:52-53.

Cluster
H2, H3.

Read
Textbook Chapter 6, section XII.

Teaching
The graves were opened; and many bodies of the saints which slept arose, and came out of the graves after His resurrection, and went into the holy city, and appeared unto many. The leaflet files this under permanent resurrection and under Company 1. Teach it as the leaflet states. Those saints are right now in heaven with their bodies. There is not another Foundation School teaching.

Matthew 27:50-53. Jesus, when he had cried again with a loud voice, yielded up the ghost. And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent; And the graves were opened; and many bodies of the saints which slept arose, And came out of the graves after his resurrection, and went into the holy city, and appeared unto many.

1 Corinthians 15:20. But now is Christ risen from the dead, and become the firstfruits of them that slept.

Ephesians 4:8-10. Wherefore he saith, When he ascended up on high, he led captivity captive, and gave gifts unto men. (Now that he ascended, what is it but that he also descended first into the lower parts of the earth? He that descended is the same also that ascended up far above all heavens, that he might fill all things.)

Bodies. Many bodies of the saints which slept arose. Not spirits as if the grave had released ghosts. Came out after His resurrection. Went into the holy city. Appeared unto many. The appearances were bodily enough to be seen. The leaflet’s next sentence is the school’s sentence: the many saints right now in heaven with their bodies after His resurrection.

Do not file this as Matthew 9:25. The maid arose and would die again. These saints arose after His resurrection as permanent firstfruits company, not as a temporary sign that later re-enters the dust. Do not postpone them into Company 2. They that are Christ’s at His coming are afterward in His order. These already came out after His resurrection. Company 1 begins the first resurrection. Lesson 5-13 will name the company. Today lock the location and the body: now in heaven, with bodies.

Led captivity captive. He descended first into the lower parts of the earth. He ascended. Course 6 will say Paradise is now empty of the righteous. This lesson will not steal that prison file. It will not invent another destination for these bodies. Heaven with their bodies is what the leaflet said. Teach it. Do not hedge it into a memorial. Do not send them back to dust to protect a theory this school does not teach.

Yielded up the ghost. Veil rent. Earth quake. Rocks rent. Graves opened. Bodies arose. After His resurrection they came out, went into the holy city, appeared unto many. Right now in heaven with their bodies. Write Matthew 27:52-53. What arose? Bodies. When? After His resurrection. Where are they now, as this school teaches? In heaven, with their bodies. That is C4. There is not another Foundation School teaching.

The leaflet’s own words: the many saints right now in heaven with their bodies after His resurrection (Matthew 27:52-53). Teach as the leaflet states. Do not say they later died again. Do not say they wait in dust for Company 2. Do not say they are spirits without bodies. Many bodies of the saints which slept arose. Came out of the graves after His resurrection. Went into the holy city. Appeared unto many. Now in heaven with their bodies. Firstfruits company has already begun. Lesson 5-13 will name Company 1 as Christ and these saints. Today the location and the body are the charge. If another school sends them back to the grave, that school is not this one.

Appeared unto many is written so you will not call the rising a private vision. Bodies were seen in the holy city after His resurrection. Right now in heaven with their bodies is the leaflet’s present tense. Permanent, not temporary. C4 is locked. There is not another Foundation School teaching.

Labour
Academic Year — one tight page. Write Matthew 27:52-53. What arose? When? Where are they now, as the leaflet states? Word drill: many bodies / after his resurrection / holy city / now in heaven with their bodies.

Intensive — three pages on the same cluster. Page 1: write Matthew 27:50-53, 1 Corinthians 15:20, and Ephesians 4:8-10 in full. Page 2: permanent, not Jairus; now in heaven with bodies — not Company 2. Page 3: write the hedge you will refuse; there is not another Foundation School teaching. Same doctrine.

Distinction
Saints now in heaven with bodies vs a temporary raising, or bodies returned to dust to protect another school.

Charge
Write Matthew 27:52-53. What arose? When? Where are they now, as the leaflet states?`,
  ),
  lesson(
    "les-fs-5-13",
    "mod-fs-5-companies",
    13,
    "Company 1 — Christ and the many saints",
    75,
    `Central principle
Company 1 is Christ and the many saints resurrected after Him. The first resurrection begins here. It is past. It is not rapture 2.

Key Scripture
1 Corinthians 15:20, 23; Matthew 27:52-53; Ephesians 4:8-10.

Cluster
H3.

Read
Textbook Chapter 6, section XIII.

Teaching
There are five raptures in the first resurrection. Do not flatten five into one. Company 1 is the first: Christ and the many saints resurrected after Him. Christ the firstfruits of them that slept. Afterward they that are Christ’s at His coming is Company 2, not this company. The many saints of Matthew 27 already arose after His resurrection. The first resurrection begins in the past.

1 Corinthians 15:20. But now is Christ risen from the dead, and become the firstfruits of them that slept.

1 Corinthians 15:23. But every man in his own order: Christ the firstfruits; afterward they that are Christ's at his coming.

Matthew 27:52-53. And the graves were opened; and many bodies of the saints which slept arose, And came out of the graves after his resurrection, and went into the holy city, and appeared unto many.

Ephesians 4:8-10. Wherefore he saith, When he ascended up on high, he led captivity captive, and gave gifts unto men. (Now that he ascended, what is it but that he also descended first into the lower parts of the earth? He that descended is the same also that ascended up far above all heavens, that he might fill all things.)

Who? Christ, and the many saints. When? His resurrection, and after His resurrection those bodies came out. Where are those saints now? In heaven with their bodies — lesson 5-12 locked it. What begins? The first resurrection. What has not yet happened? They that are Christ’s at His coming. What must you not do? Call this “the rapture” as if Companies 2–5 were already this hour.

Own order. Christ the firstfruits. Afterward — later — they that are Christ’s at His coming. The afterward is not a second title for Matthew 27. If you merge 15:23’s afterward into Company 1, you have no rapture 2. If you merge Company 1 into rapture 2, the first resurrection has no past beginning. Five companies. One first resurrection. It begins with Christ. It will end with the two witnesses. Today only the beginning.

Led captivity captive. Descended first. Ascended. Gifts unto men. The descent and ascent sit in this cluster because the leaflet printed them with Company 1. Do not turn the parenthesis into a sixth company. Do not empty Paradise here as if this were Course 6. Hold the three texts. Christ risen. Many bodies. Captivity captive.

The first resurrection is not one day with one slogan. Company 1 is past. Company 2 is future, before tribulation. Companies 3–5 are in the tribulation. The wicked are not in this company. Do not raise them before the Millennium to keep Company 1 company. Blessed and holy is he that hath part in the first resurrection — that part begins here and is not finished here.

Write the three texts. Name Company 1: who, when, texts. What begins? The first resurrection. What is this not? Rapture 2. What flatten will you refuse? Five into one. Advent as this beginning. Wicked raised with these saints.

The leaflet: there are 5 raptures in the first resurrection: 1. Christ and the Many saints resurrected after Him (1 Corinthians 15:20, 23; Matthew 27:52-53; Ephesians 4:8-10). That is the whole of this lesson’s company. Number 1 is not numbers 2 through 5. The first resurrection begins with Christ’s resurrection and those many bodies. It does not begin at John 14. It does not begin at Revelation 19. It does not include the rest of the dead. All who have part in the first resurrection would rule with Christ from the Millennium — Company 1 already has part. The rule is from the thousand years; the beginning of the first resurrection is already past. Recite who, when, texts until you cannot say “the rapture” as if this hour were the only hour.

Christ the firstfruits; the many saints after Him; now in heaven with their bodies. That is Company 1, past. Afterward remains afterward. The two witnesses remain the end. Do not raise the wicked here. Do not offer new birth after death to swell this company.

Labour
Academic Year — one tight page. Name Company 1: who, when, and the texts. What begins here? What is this not? Word drill: firstfruits / many saints / first resurrection begins / own order / past.

Intensive — three pages on the same cluster. Page 1: write 1 Corinthians 15:20, 23; Matthew 27:52-53; Ephesians 4:8-10 in full. Page 2: the first resurrection begins — past; not rapture 2; not five flattened. Page 3: write the merge you will refuse; the wicked are not this company. Same doctrine.

Distinction
Company 1 (past beginning) vs rapture 2, or one rapture that swallows the five.

Charge
Name Company 1: who, when, and the texts. What begins here? What is this not?`,
  ),
  lesson(
    "les-fs-5-14",
    "mod-fs-5-companies",
    14,
    "Company 2 — they that are Christ’s at His coming",
    75,
    `Central principle
Company 2 is they that are Christ’s at His coming. This is rapture 2. Before the tribulation. Not the second advent. Not Company 1.

Key Scripture
1 Corinthians 15:23, 51-54; John 14:1-3; Luke 21:34-36; 2 Corinthians 5:1-8.

Cluster
H4.

Read
Textbook Chapter 6, section XIV.

Teaching
Afterward they that are Christ’s at His coming. We shall not all sleep. We shall all be changed. I will come again, and receive you unto Myself. Accounted worthy to escape all these things, and to stand before the Son of man. Absent from the body, present with the Lord. The leaflet names this company 2. It is rapture 2. Tribulation is seven years after this.

1 Corinthians 15:23. But every man in his own order: Christ the firstfruits; afterward they that are Christ's at his coming.

1 Corinthians 15:51-54. Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed, In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed. For this corruptible must put on incorruption, and this mortal must put on immortality. So when this corruptible shall have put on incorruption, and this mortal shall have put on immortality, then shall be brought to pass the saying that is written, Death is swallowed up in victory.

John 14:1-3. Let not your heart be troubled: ye believe in God, believe also in me. In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.

Luke 21:34-36. And take heed to yourselves, lest at any time your hearts be overcharged with surfeiting, and drunkenness, and cares of this life, and so that day come upon you unawares. For as a snare shall it come on all them that dwell on the face of the whole earth. Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things that shall come to pass, and to stand before the Son of man.

2 Corinthians 5:1-8. For we know that if our earthly house of this tabernacle were dissolved, we have a building of God, an house not made with hands, eternal in the heavens. For in this we groan, earnestly desiring to be clothed upon with our house which is from heaven: If so be that being clothed we shall not be found naked. For we that are in this tabernacle do groan, being burdened: not for that we would be unclothed, but clothed upon, that mortality might be swallowed up of life. Now he that hath wrought us for the selfsame thing is God, who also hath given unto us the earnest of the Spirit. Therefore we are always confident, knowing that, whilst we are at home in the body, we are absent from the Lord: (For we walk by faith, not by sight:) We are confident, I say, and willing rather to be absent from the body, and to be present with the Lord.

Who? They that are Christ’s at His coming — living changed, dead raised incorruptible. When? Before the tribulation; the tribulation is seven years after rapture 2. Texts: 1 Corinthians 15:23, 51-54; John 14:1-3; Luke 21:34-36; 2 Corinthians 5:1-8. What is this not? Second advent. Company 1. The 144,000. The tribulation multitude. The two witnesses.

Receive you unto Myself is not armies following on white horses. Escape is not smiting the nations with a sword. Moment, twinkling, last trump is not Revelation 19. Lesson 5-08 already forbade the merge. This lesson files the same texts as a company so you will not say “the rapture” as if the first resurrection had only this hour.

Company 1 already began the first resurrection. Company 2 continues it. It does not end it. Companies 3–5 still belong to the first resurrection in the tribulation. If you end the first resurrection at rapture 2, the 144,000 and the multitude and the witnesses have no first-resurrection place. If you start the Millennium here, the advent cannot usher it.

Do not offer new birth after this coming to the man who died without G1. The window remains this life. Do not raise the wicked at this trump. The rest of the dead lived not again until the thousand years were finished. This mortal must put on immortality — of those that are Christ’s.

Write the company: who, when, texts. State again: rapture 2 is not second advent. Do not merge 2 and the advent. Do not flatten five into this one coming.

Labour
Academic Year — one tight page. Name Company 2: who, when, texts. Why is this not the advent, and not Company 1? Word drill: at His coming / rapture 2 / receive / escape / not the advent.

Intensive — three pages on the same cluster. Page 1: write the four H4 passages in full. Page 2: before tribulation; seven years after this the tribulation; not Revelation 19. Page 3: five remain five; write the flatten that ends the first resurrection here. Same doctrine.

Distinction
Company 2 / rapture 2 vs second advent, Company 1, or “the rapture” as the whole first resurrection.

Charge
Name Company 2: who, when, and the texts. Do not merge 2 and the advent.`,
  ),
  lesson(
    "les-fs-5-15",
    "mod-fs-5-companies",
    15,
    "Company 3 — the 144,000",
    75,
    `Central principle
Company 3 is the 144,000 Jews, sealed from the tribes of Israel, saved in the first half of the tribulation. The text is Revelation 7:1-8, not 7:18. Still the first resurrection. Not rapture 2.

Key Scripture
Revelation 7:1-8.

Cluster
H5.

Read
Textbook Chapter 6, section XV.

Teaching
I heard the number of them which were sealed: an hundred and forty and four thousand of all the tribes of the children of Israel. Twelve thousand from each tribe named. Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads. The leaflet printed Revelation 7:18. Chapter 7 ends at verse 17. This school teaches 7:1-8. 7:9-17 is the great multitude — Company 4’s file. Do not steal it today.

Revelation 7:1-8. And after these things I saw four angels standing on the four corners of the earth, holding the four winds of the earth, that the wind should not blow on the earth, nor on the sea, nor on any tree. And I saw another angel ascending from the east, having the seal of the living God: and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea, Saying, Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads. And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel. Of the tribe of Juda were sealed twelve thousand. Of the tribe of Reuben were sealed twelve thousand. Of the tribe of Gad were sealed twelve thousand. Of the tribe of Aser were sealed twelve thousand. Of the tribe of Nepthalim were sealed twelve thousand. Of the tribe of Manasses were sealed twelve thousand. Of the tribe of Simeon were sealed twelve thousand. Of the tribe of Levi were sealed twelve thousand. Of the tribe of Issachar were sealed twelve thousand. Of the tribe of Zabulon were sealed twelve thousand. Of the tribe of Joseph were sealed twelve thousand. Of the tribe of Benjamin were sealed twelve thousand.

Who? 144,000 Jews, servants sealed, twelve thousand from each tribe named. When? First half of the tribulation — after rapture 2, inside the seven years, not at the advent. Texts: Revelation 7:1-8. What is this not? Company 2. The multitude of 7:9-17. The two witnesses. A Gentile church renamed Israel to flatten the file.

Still first resurrection. Blessed and holy is he that hath part. Do not invent a second first resurrection for Israel. Do not push these 144,000 into rapture 2 so that tribulation has no sealed servants. Do not wait to seal them at Revelation 19. First half. Four winds held. Seal first. Then the hurt.

Revelation 7:18 does not exist. If you cite it, you have followed a bad print. 7:1-8 is the sealing and the tribes. 7:9-17: a great multitude which no man could number, of all nations, stood before the throne — that multitude is not this company. Lesson 5-16 will take tribulation saints after rapture 2 from Revelation 6:1–19:21. Today keep 7:1-8.

Five remain five. Company 3 does not swallow 4. Company 3 does not become “the rapture.” The wicked are not sealed here unto life as if this were the rest of the dead. New birth in the tribulation is still in this life for those living then. It is not offered to the man who already died without Christ.

Write Revelation 7:1-8. Name Company 3: who, when, texts. Why not 7:18? Why not 7:9-17? Why not rapture 2?

The leaflet printed the 144,000 Jews, saved in the first half of the Tribulation (Rev. 7:18). Owner lock: that print is 7:1-8. This school will not cite a verse that is not in the chapter. Four angels, four winds, seal of the living God, servants in their foreheads, 144,000 of all the tribes of the children of Israel — Juda, Reuben, Gad, Aser, Nepthalim, Manasses, Simeon, Levi, Issachar, Zabulon, Joseph, Benjamin — twelve thousand each. First half. After rapture 2. Not the advent. Still first resurrection. Do not rename the tribes a Gentile slogan to flatten Company 3 into Company 2. Do not take 7:9’s multitude as if it were this seal.

Labour
Academic Year — one tight page. Write the number, the tribes, and the time. Why is the address 7:1-8 and not 7:18? Word drill: 144,000 / sealed / first half / tribes of Israel / not 7:18.

Intensive — three pages on the same cluster. Page 1: write Revelation 7:1-8 in full; mark winds, seal, number, each tribe. Page 2: first half of tribulation; still first resurrection; not rapture 2; not 7:9-17. Page 3: the print 7:18 is refused; write the flatten you will not teach. Same doctrine.

Distinction
144,000 (7:1-8, first half) vs the multitude (7:9-17), rapture 2, or a verse that does not exist.

Charge
Name Company 3: who, when, and Revelation 7:1-8. Do not cite 7:18. Do not steal 7:9-17.`,
  ),
  lesson(
    "les-fs-5-16",
    "mod-fs-5-companies",
    16,
    "Company 4 — the tribulation multitude",
    75,
    `Central principle
Company 4 is the great multitude of tribulation saints after rapture 2. They are saved in time to come back with Christ for the Millennium. This is why the advent is with the saints, and why rapture 2 is not that advent.

Key Scripture
Revelation 6:1–19:21; Revelation 19:11-21.

Cluster
H6.

Read
Textbook Chapter 6, section XVI.

Teaching
The great multitude of tribulation saints after rapture 2. Revelation 6:1–19:21. All in time to come back with Christ for the Millennium. Revelation 19:11-21. If there is no Company 4, “with the saints” has only Company 1 and 2, and the seven years have no redeemed who return. If Company 4 is rapture 2, they cannot be after rapture 2. The leaflet numbered them 4 so you would keep the after.

Revelation 7:9-10, 13-14. After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb, clothed with white robes, and palms in their hands; And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb. And one of the elders answered, saying unto me, What are these which are arrayed in white robes? and whence came they? And I said unto him, Sir, thou knowest. And he said to me, These are they which came out of great tribulation, and have washed their robes, and made them white in the blood of the Lamb.

Revelation 19:11, 14, 19-21. And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war. And the armies which were in heaven followed him upon white horses, clothed in fine linen, white and clean. And I saw the beast, and the kings of the earth, and their armies, gathered together to make war against him that sat on the horse, and against his army. And the beast was taken, and with him the false prophet that wrought miracles before him, with which he deceived them that had received the mark of the beast, and them that worshipped his image. These both were cast alive into a lake of fire burning with brimstone. And the remnant were slain with the sword of him that sat upon the horse, which sword proceeded out of his mouth: and all the fowls were filled with their flesh.

Who? Tribulation saints — a great multitude after rapture 2; they came out of great tribulation; white robes in the blood of the Lamb. When? During the tribulation, after Company 2, in time to return at the advent. Texts: Revelation 6:1–19:21; 19:11-21. What is this not? The 144,000 of 7:1-8. Rapture 2. The two witnesses. The rest of the dead after the Millennium.

Came out of great tribulation. Washed their robes. Made them white in the blood of the Lamb. This is still first resurrection. They are not the wicked reserved for the great white throne. They return with Christ. Armies in heaven followed Him. Fine linen, white and clean. Company 4 makes “with the saints” possible as the leaflet built it.

Do not flatten 4 into 3. Sealed Israel is 7:1-8. The innumerable multitude is not twelve times twelve thousand. Do not flatten 4 into 2. After rapture 2 means after. Do not raise the unsaved in this company to fill a number. Do not offer new birth to those already dead without Christ so that Company 4 becomes a post-mortem harvest.

Seals, trumpets, vials, Babylon — the span is 6:1–19:21. This lesson will not narrate every seal as if the company were a commentary series. It will keep the multitude and the return. Heaven opened. White horse. They follow. The Millennium is ushered. Company 5 still has not ended the first resurrection. Do not end it at this return.

Write Company 4: who, when, texts. Why must they be after rapture 2? Why must they return with Christ? What flatten merges them into 2, 3, or 5?

The leaflet: the great multitude of tribulation saints after rapture 2 (Revelation 6:1–19:21) all in time to come back with Christ for the Millennium (Revelation 19:11-21). After this I beheld a great multitude which no man could number. These are they which came out of great tribulation. Heaven opened; the armies which were in heaven followed Him. Company 4 is why H8 can say with the saints without making H4 the advent. Keep 4 after 2. Keep 4 distinct from 3. Keep 4 this side of the two witnesses’ end. The first resurrection is still open until Company 5.

Labour
Academic Year — one tight page. Name Company 4: who, when, texts. Why does “with the saints” require this company after rapture 2? Word drill: after rapture 2 / great tribulation / come back with Christ / not the 144,000.

Intensive — three pages on the same cluster. Page 1: write Revelation 7:9-10, 13-14 and 19:11, 14, 19-21 in full. Page 2: after rapture 2, in time to return; still first resurrection. Page 3: not Company 2, 3, or 5; write the flatten you will refuse. Same doctrine.

Distinction
Tribulation multitude after rapture 2 who return at the advent vs rapture 2 itself, the 144,000, or the wicked after the Millennium.

Charge
Name Company 4: who, when, and the texts. Why must they be after rapture 2 and in time to return with Christ?`,
  ),
  lesson(
    "les-fs-5-17",
    "mod-fs-5-companies",
    17,
    "Company 5 — the two witnesses",
    75,
    `Central principle
Company 5 is the rapture of the two witnesses. A great voice: Come up hither. They ascend in a cloud. This ends the first resurrection which began with the resurrection of Christ.

Key Scripture
Revelation 11:7-12.

Cluster
H7.

Read
Textbook Chapter 6, section XVII.

Teaching
When they shall have finished their testimony, the beast that ascendeth out of the bottomless pit shall make war against them, and shall overcome them, and kill them. After three days and an half the Spirit of life from God entered into them, and they stood upon their feet. A great voice from heaven: Come up hither. They ascended up to heaven in a cloud. The first resurrection which began with Christ ends here. Not at rapture 2. Not at the advent.

Revelation 11:7-12. And when they shall have finished their testimony, the beast that ascendeth out of the bottomless pit shall make war against them, and shall overcome them, and kill them. And their dead bodies shall lie in the street of the great city, which spiritually is called Sodom and Egypt, where also our Lord was crucified. And they of the people and kindreds and tongues and nations shall see their dead bodies three days and an half, and shall not suffer their dead bodies to be put in graves. And they that dwell upon the earth shall rejoice over them, and make merry, and shall send gifts one to another; because these two prophets tormented them that dwelt on the earth. And after three days and an half the Spirit of life from God entered into them, and they stood upon their feet; and great fear fell upon them which saw them. And they heard a great voice from heaven saying unto them, Come up hither. And they ascended up to heaven in a cloud; and their enemies beheld them.

Who? The two witnesses — two prophets. When? Late tribulation, after they finish their testimony; the beast kills them; three days and an half; then Come up hither. Texts: Revelation 11:7-12. What ends? The first resurrection that began with Company 1. What is this not? Rapture 2. The 144,000. The multitude. The second advent. A sixth company invented to follow them.

Finished their testimony. Beast from the bottomless pit. Dead bodies in the street. Three days and an half. Spirit of life entered. Stood upon their feet. Come up hither. Ascended in a cloud. Enemies beheld them. That is Company 5. Permanent enough to end the first resurrection’s companies. Not Matthew 9:25. They are not a maid who will die again as the first resurrection’s close.

If you end the first resurrection at Company 2, this ascent has no file. If you flatten five into one rapture, Come up hither is only a repeat. If you make the advent equal rapture 2, you still have this later voice in chapter 11. Keep the end where the leaflet put the end. Company 1 began. Company 5 ends. The advent with the saints still ushers the Millennium after the tribulation’s close. The rest of the dead still wait a thousand years.

Do not raise the wicked with these two. Do not offer new birth to the merry earth-dwellers after they die in their rejoicing. Come up hither is spoken to the witnesses. The first resurrection’s blessed and holy companies are complete when this company is caught up. The resurrection of damnation remains after the Millennium.

Write Revelation 11:7-12. Name Company 5: who, when, texts. What began with Christ and ends here? What flatten will you refuse — five into one, advent as rapture 2, this ascent as Jairus?

The leaflet: Rapture of the Two witnesses, ending the first resurrection which began with the resurrection of Christ (Revelation 11:7-12). Began — Company 1. Ends — Company 5. The beast that ascendeth out of the bottomless pit kills them after they finish their testimony. Three days and an half their dead bodies lie. Spirit of life from God entered into them. They stood upon their feet. Come up hither. They ascended up to heaven in a cloud. Late tribulation. Not John 14. Not Matthew 9:25. Not the rest of the dead. When this company is caught up, the first resurrection’s five are complete. The advent with the saints still follows the tribulation’s close. The thousand years still follow the advent. The wicked still wait.

Labour
Academic Year — one tight page. Write Revelation 11:7-12. Name Company 5: who, when. What ends here that began with Christ? Word drill: two witnesses / Come up hither / three days and an half / first resurrection ends.

Intensive — three pages on the same cluster. Page 1: write Revelation 11:7-12 in full; mark testimony, beast, bodies, Spirit of life, Come up hither, cloud. Page 2: ends the first resurrection — not rapture 2, not the advent. Page 3: five remain five; write the flatten you will refuse. Same doctrine.

Distinction
Two witnesses ending the first resurrection vs rapture 2, a temporary raising, or one rapture that has no end after its beginning.

Charge
Write Revelation 11:7-12. Name Company 5: who, when, texts. What ends here that began with Christ?`,
  ),
  lesson(
    "les-fs-5-18",
    "mod-fs-5-companies",
    18,
    "Charge — chronology and the five",
    90,
    `Central principle
This lesson is the examination of the principle, not a new doctrine. Two kinds. This life only. Two issues. Five companies. Rapture 2 is not the advent. Companion *Millennium* is directed reading, not a seventh course.

Key Scripture
Hebrews 6:1-2 with the leaflet spine.

Cluster
All of Course 5. Textbook Chapter 6. Q29–Q36.

Read
Chapter 6, section XVIII. Directed: *Millennium* — named sections as assigned, not a seventh course.

Teaching
This lesson is the examination of the principle, not a new doctrine. You should now be able to teach, from Scripture:

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

The leaflet spine. The Millennium is the one thousand years period after the tribulation: the tribulation is 7 years after rapture 2, and rapture 2 is not Second Advent; 2nd advent (coming of Christ with the saints) is after Tribulation, ushering the Millennium: Rev. 6–19.

1. Two main kinds. Spiritual: new birth, Ephesians 2:1-6. Material: the body, John 5:28-29. Do not flatten them.
2. Renewed in likeness — Ephesians 4:21-24; Colossians 3:10; 1 John 3:9. Still this life.
3. Only in this life. Hebrews 9:27; Revelation 22:11. Forfeited if not born again. 1 Corinthians 15:19 is bodily hope, not this lock. No Ecclesiastes 11:1.
4. All in the graves come forth — life or damnation. Body, not spirit.
5. A thousand years between the two issues. Revelation 20:4-6 and 20:11-15. Daniel 12. Not Revelation 10 as the resurrection chapter. Do not raise the wicked before the Millennium.
6. The spine. Millennium after tribulation. Tribulation seven years after rapture 2. Rapture 2 is not the second advent. Advent with the saints ushers the thousand years.
7. Facts-file. Job 19; Isaiah 26; Psalm 16:10; John 20–21; Romans; 1 Corinthians 15. 15:19 stays here.
8. Temporary vs permanent. Matthew 9:25 is not 1 Corinthians 15:20-23. Christ the firstfruits of all permanent resurrections.
9. Matthew 27:52-53 saints now in heaven with their bodies. There is not another Foundation School teaching.
10. Five raptures in the first resurrection. Company 1: Christ and the many saints — begins. Company 2: they that are Christ’s at His coming — rapture 2. Company 3: 144,000, Revelation 7:1-8, first half. Company 4: multitude after rapture 2, return with Christ. Company 5: two witnesses, Revelation 11:7-12 — ends. Do not flatten five into one. Do not make advent equal rapture 2.
11. All without Christ raised after the Millennium, judged, lake of fire. Who is not in the first resurrection? The rest of the dead.

Q29: two main kinds — separate spiritual from material in one page a babe can follow. Q30: why can new birth not be postponed past death? Use the forfeiture cluster as a unit — Hebrews 9:27 and Revelation 22:11 only. Q31: John 5:28-29 — who comes forth? To what two resurrections? Q32: a thousand years between the two — place both issues on the chronology map. Q33: rapture 2 is not second advent — state the difference from the source’s own sentence. Q34: five raptures in the first resurrection — name who, when, and the texts; do not merge 2 and the advent. Q35: temporary vs permanent — why is Matthew 9:25 not the same as 1 Corinthians 15:20-23? Q36: all without Christ raised after the Millennium — who is not in the first resurrection?

Companion *Millennium* is directed, not a seventh course. The leaflet printed FTH RD AV. MILLENNIUM. This school assigns named sections when they are assigned. Completing Course 5 does not wait on finishing that whole volume, and that volume does not become a seventh principle. Companions are not a seventh course. Thinking Eternity is back-list, not Year-1. The next principle is eternal judgment. This examination is not that chapter.

Recite the map: Company 1 past; Company 2 before tribulation; seven years; Companies 3–5 in tribulation; advent with the saints; Millennium; rest of the dead after. Write it until you cannot flatten it.

Do not flatten five into one rapture. Do not make advent equal rapture 2. Do not raise the wicked before the Millennium. Do not offer new birth after death. Completing activities is not mastery. The file is two kinds, two issues, five companies, the spine.

Labour
Academic Year — write Q29–Q36 as eight tight paragraphs, then the spine from memory. Same doctrine. Word drill: two kinds / this life only / thousand years / five companies / not the advent.

Intensive — three pages on the same cluster, then the eight charges. Page 1: two kinds, G3 lock, John 5, Revelation 20 — not chapter 10. Page 2: the spine; rapture 2 is not the advent; facts-file; temporary vs permanent; Matthew 27 now in heaven with bodies. Page 3: five companies — who, when, texts; who is not in the first resurrection; *Millennium* directed, not a seventh course. Same doctrine. Do not invent a seventh company to fill a page.

Distinction
Completion of activities vs mastery. Directed companion vs a seventh course. Five companies vs one rapture.

Charge
Separate spiritual from material (Q29). Why can new birth not be postponed (Q30)? Who comes forth, to what two (Q31)? Place both issues (Q32). State rapture 2 is not the advent (Q33). Name the five — who, when, texts (Q34). Why is Matthew 9:25 not 1 Corinthians 15:20-23 (Q35)? Who is not in the first resurrection (Q36)? Write the spine. Do not flatten five. Do not submit a seventh course.`,
  ),
];
