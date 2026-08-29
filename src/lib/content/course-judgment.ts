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
    courseId: "course-fs-judgment",
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [bookId],
    body,
  };
}

export const judgmentModules = [
  {
    id: "mod-fs-6-book",
    courseId: "course-fs-judgment" as const,
    number: 1,
    title: "Punishment and the book",
    description: "Eternal punishment, the book of life, names blotted, death as cutting off. Textbook Chapter 7, I–IV.",
  },
  {
    id: "mod-fs-6-deaths",
    courseId: "course-fs-judgment" as const,
    number: 2,
    title: "Three deaths",
    description: "Physical, spiritual, second. Soul and spirit immortal; bodies rise. Textbook Chapter 7, V–VIII.",
  },
  {
    id: "mod-fs-6-prisons",
    courseId: "course-fs-judgment" as const,
    number: 3,
    title: "Five prisons and year charge",
    description: "Tartarus, Paradise, hell, abyss, lake of fire. Week 52 examination of the year. Textbook Chapter 7, IX–XV.",
  },
];

export const judgmentLessons: Lesson[] = [
  lesson(
    "les-fs-6-01",
    "mod-fs-6-book",
    1,
    "Eternal punishment — Matthew 25:46; Revelation 14; Isaiah 66",
    75,
    `Central principle
Eternal punishment is duration. It is not a metaphor the school thins into a slogan. The righteous go into life eternal. The cursed go into everlasting punishment.

Key Scripture
Matthew 25:46; Revelation 14:9-11; Revelation 20:11-15; Isaiah 66:22-24.

Cluster
J1.

Read
Textbook Chapter 7, section I.

Teaching
This is Course 6 of Foundation School. One curriculum. The sixth of the six principles. Hebrews 6:2 names eternal judgment in the same breath as baptisms, hands, and resurrection. This course closes the foundation. It is not laid to produce fear as a product. It is laid so that a people will not treat judgment as a rumour.

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

Matthew 25:41. Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels.

Matthew 25:46. And these shall go away into everlasting punishment: but the righteous into life eternal.

Revelation 14:9-11. And the third angel followed them, saying with a loud voice, If any man worship the beast and his image, and receive his mark in his forehead, or in his hand, The same shall drink of the wine of the wrath of God, which is poured out without mixture into the cup of his indignation; and he shall be tormented with fire and brimstone in the presence of the holy angels, and in the presence of the Lamb: And the smoke of their torment ascendeth up for ever and ever: and they have no rest day nor night, who worship the beast and his image, and whosoever receiveth the mark of his name.

Isaiah 66:22-24. For as the new heavens and the new earth, which I will make, shall remain before me, saith the LORD, so shall your seed and your name remain. And it shall come to pass, that from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith the LORD. And they shall go forth, and look upon the carcases of the men that have transgressed against me: for their worm shall not die, neither shall their fire be quenched; and they shall be an abhorring unto all flesh.

Revelation 20:15. And whosoever was not found written in the book of life was cast into the lake of fire.

The leaflet translates Matthew 25:46 as eternal punishment. Everlasting punishment sits in the same sentence as life eternal. Do not keep one forever and thin the other. The fire is prepared for the devil and his angels. Men who go there go into what was prepared for them that rebelled first. Smoke of torment ascendeth up for ever and ever. No rest day nor night. Worm shall not die. Fire shall not be quenched.

This is not annihilation as the leaflet’s forever. A man who preaches that the wicked cease so that punishment can stop has left J1. Course 1 already named Hell as consequence, not the definition of metanoia. Luke 16:19-31 is that narrative, not Matthew 16. Do not steal the rich man into this lesson to flatten the file. Today J1: duration. The lake and the book will have their own lessons. The prisons will have theirs.

The 2015 page printed no required companion under this principle. This school names none. Completing this chapter does not wait on a book the leaflet did not name. Companions are not a seventh course. Course 6 has no required companion.

Leaving the first principles is not forgetting them. Resurrection was Course 5: two kinds, two material issues, five companies. Judgment is not a seventh chronology. It sits on that map. After the Millennium the rest of the dead stand. The book is opened. Whosoever was not found written is cast into the lake. That sentence is J2. Hold it. Do not exhaust it here.

Everlasting fire. Everlasting punishment. Life eternal. For ever and ever. Worm shall not die. Fire not quenched. Write those as duration. If you submit a metaphor in the place of the verses, you have left J1. The principle is among the six. It closes the foundation. It does not invent a seventh doctrine to make the year feel finished.

Labour
Academic Year — one tight page. Write Matthew 25:46. What does “everlasting” force you to say that a metaphor will not let you say? Word drill: eternal punishment / life eternal / for ever and ever / worm shall not die.

Intensive — three pages on the same cluster. Page 1: write Matthew 25:41, 46; Revelation 14:9-11; and Isaiah 66:22-24 in full. Page 2: duration — not annihilation; not a slogan that keeps life eternal and thins punishment. Page 3: no required companion; Luke 16 is not Matthew 16 and is not this lesson’s file. Same doctrine.

Distinction
Eternal duration vs annihilation, or a metaphor that keeps one forever and thins the other.

Charge
Write Matthew 25:46. What does “everlasting” force you to say that a metaphor will not let you say?`,
  ),
  lesson(
    "les-fs-6-02",
    "mod-fs-6-book",
    2,
    "Book of life; no respecter of persons",
    75,
    `Central principle
Whosoever was not found written in the book of life was cast into the lake of fire. God is no respecter of persons. Status does not exempt.

Key Scripture
Revelation 20:15; Acts 10:34.

Cluster
J2. Revelation 20:14-15 with Acts 10:34-35.

Read
Textbook Chapter 7, section II.

Teaching
This is the second death. Death and hell are cast into the lake of fire. The books are opened. Another book is opened, which is the book of life. The dead are judged out of those things which were written in the books, according to their works. Then the sentence the leaflet will not let you soften: whosoever.

Revelation 20:11-15. And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them. And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works. And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works. And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire.

Acts 10:34-35. Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him.

Whom does “whosoever” refuse to exempt? The small and the great. Every man. The man who had a name in a meeting. The man who had a title. The man who treated enrolment as if it were the book. No respecter of persons is not a slogan for courtesy. It is why the book is opened after the Millennium and why hell delivers up the dead. Status does not write a name. Status does not keep a name.

This judgment sits after the Millennium. Course 5 already placed it: the rest of the dead lived not again until the thousand years were finished. Hell — sheol-hades — delivers up the wicked. Reunion with bodies. Great white throne. Book of life. Lake of fire. Do not move this throne into the present age to make the file neater. Do not treat the book as a slogan that nothing can be lost. Names blotted is the next lesson. Today: whosoever, no respecter, second death.

Death and hell were cast into the lake of fire. This is the second death. The lake is not this lesson’s whole prison file. Lesson 14 will lock gehenna. Lesson 12 will keep hell until the Millennium’s end. Today the book and the throne. Small and great stand. The books were opened. Another book — the book of life. Judged according to their works. Whosoever was not found written was cast in.

Peter’s sentence is in this cluster so you will not invent a respected class. Of a truth I perceive that God is no respecter of persons. In every nation he that feareth Him, and worketh righteousness, is accepted with Him. The throne will not ask for your caste. It will ask whether the name is found written. A man who preaches exemption by office has left J2. A man who preaches exemption by nation has left J2. A man who preaches exemption by the years he sat in a course has left J2.

The sea gave up the dead. Death and hell delivered up the dead which were in them. Every man judged according to his works. Then the other book. Whosoever was not found written was cast into the lake of fire. Works are in the books. The name is in the book of life. Do not preach works as if they write the name. Do not preach the name as if the books of works were never opened. Small and great stand. Earth and heaven fled. No place for them. That is the throne after the thousand years, not a weekly scare.

Course 1 named this lake as the end of the consequence, not the definition of metanoia. Hold that. Do not turn this lesson into Hell-avoidance as repentance. The book is real. The throne is after the Millennium. Whosoever refuses to exempt. Write Revelation 20:15 beside Acts 10:34. Whom does “whosoever” refuse to exempt? Name the class you have been treating as already safe. If the class is “already written and cannot be blotted,” wait for J3. Today the sentence is whosoever. No respecter. Second death.

Labour
Academic Year — one tight page. Write Revelation 20:15 and Acts 10:34. Whom does “whosoever” refuse to exempt? Word drill: book of life / no respecter of persons / small and great / second death.

Intensive — three pages on the same cluster. Page 1: write Revelation 20:11-15 and Acts 10:34-35 in full; mark throne, books, book of life, works, death and hell, second death, whosoever. Page 2: after the Millennium — hell emptied; bodies; no respected class. Page 3: not a slogan that nothing can be lost; not Course 1’s metanoia replaced by fear of the throne. Same doctrine.

Distinction
The book as opened after the Millennium vs a slogan of unconditional listing, or a class the throne will respect.

Charge
Write Revelation 20:15 and Acts 10:34. Whom does “whosoever” refuse to exempt?`,
  ),
  lesson(
    "les-fs-6-03",
    "mod-fs-6-book",
    3,
    "Names blotted — Exodus 32; Psalm 69; Revelation 3:5",
    75,
    `Central principle
God blots the names of sinners out of His book. The Psalmist predicted it of Judas. Christ warned of it for all who refuse to be born again. The book of life is not a slogan of unconditional listing.

Key Scripture
Exodus 32:32-33; Psalm 69:20-28; John 3:36; Revelation 3:5; Revelation 22:18-19.

Cluster
J3.

Read
Textbook Chapter 7, section III.

Teaching
Moses offers himself. The LORD will not take the offer in the place of the sinner. Whosoever hath sinned against Me, him will I blot out of My book. Psalm 69 asks that they be blotted out of the book of the living — the leaflet files that stretch as predicted of Judas. He that overcometh: I will not blot out his name. He that taketh away from the words of this prophecy: God shall take away his part out of the book of life.

Exodus 32:32-33. Yet now, if thou wilt forgive their sin--; and if not, blot me, I pray thee, out of thy book which thou hast written. And the LORD said unto Moses, Whosoever hath sinned against me, him will I blot out of my book.

Psalm 69:20-28. Reproach hath broken my heart; and I am full of heaviness: and I looked for some to take pity, but there was none; and for comforters, but I found none. They gave me also gall for my meat; and in my thirst they gave me vinegar to drink. Let their table become a snare before them: and that which should have been for their welfare, let it become a trap. Let their eyes be darkened, that they see not; and make their loins continually to shake. Pour out thine indignation upon them, and let thy wrathful anger take hold of them. Let their habitation be desolate; and let none dwell in their tents. For they persecute him whom thou hast smitten; and they talk to the grief of those whom thou hast wounded. Add iniquity unto their iniquity: and let them not come into thy righteousness. Let them be blotted out of the book of the living, and not be written with the righteous.

John 3:36. He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him.

Revelation 3:5. He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels.

Revelation 22:18-19. For I testify unto every man that heareth the words of the prophecy of this book, If any man shall add unto these things, God shall add unto him the plagues that are written in this book: And if any man shall take away from the words of the book of this prophecy, God shall take away his part out of the book of life, and out of the holy city, and from the things which are written in this book.

Teach Exodus 32:32-33, Psalm 69, and Revelation 3:5 as one file. Moses cannot trade his name for theirs. The LORD blots the one who has sinned against Him. Psalm 69: gall, vinegar, habitation desolate — predicted of Judas in this school. Revelation 3:5 is the other side of the same book: I will not blot out his name. John 3:36 stands in the file as the warning for all who refuse to be born again: he that believeth not the Son shall not see life; the wrath of God abideth on him. Revelation 22:18-19 adds the words of this prophecy: take away, and God shall take away his part out of the book of life.

Do not treat the book as a list that cannot lose a name. Do not treat blotting as a mood. The verses name blot, book, living, overcome, part taken away. Judas is in the file so that you will not say no name can be lost. Overcome is in the file so that you will not say every name must be lost. Refuse new birth and you have been warned. Course 1 already charged receive Him. This lesson will not become a second repentance course. It will hold the book as a book from which names can be blotted.

Whosoever hath sinned against Me, him will I blot out of My book. Let them be blotted out of the book of the living, and not be written with the righteous. I will not blot out his name out of the book of life. God shall take away his part out of the book of life. That is J3. One file. Not two religions — one of safety-slogans and one of terror-slogans. The same book. Names written. Names blotted. Names not blotted. Parts taken away.

Labour
Academic Year — one tight page. Teach Exodus 32:32-33, Psalm 69:28, and Revelation 3:5 as one file. Who is blotted? Who is not? Why is Judas in the cluster? Word drill: blot / book of the living / I will not blot / take away his part.

Intensive — three pages on the same cluster. Page 1: write Exodus 32:32-33, Psalm 69:20-28, John 3:36, Revelation 3:5, and Revelation 22:18-19 in full. Page 2: one file — Moses refused as substitute; Judas predicted; overcome not blotted; refuse new birth; take away the words. Page 3: not a slogan of unconditional listing; not a second Course 1. Same doctrine.

Distinction
A book from which names can be blotted vs a slogan that nothing can be lost.

Charge
Teach Exodus 32:32-33, Psalm 69, and Revelation 3:5 as one file. Who is blotted? Who is not? Why is Judas in the cluster?`,
  ),
  lesson(
    "les-fs-6-04",
    "mod-fs-6-book",
    4,
    "Death as cutting off from Genesis 1:26-28",
    75,
    `Central principle
Dead in the Bible predominantly, if not definitely, means man’s separation or cutting off from realizing God’s purpose — Genesis 1:26-28 as written — for which he was created. Death is not only “stopped breathing.”

Key Scripture
Genesis 1:26-28.

Cluster
J4. Genesis 1:26-28 as the purpose death cuts off.

Read
Textbook Chapter 7, section IV.

Teaching
Define death without using only “stopped breathing.” The making is the purpose. Cutting off from that purpose is what this school means by dead. Three kinds will be named in the next lessons. Today the definition that keeps them from collapsing into slang.

Genesis 1:26-28. And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them. And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.

Teach Genesis 1:26-28 as written. Man is who he is by design and by Who designed him. Image. Likeness. Dominion. Male and female. Fruitful. Multiply. Replenish. Subdue. Have dominion. This school will not put a softer sentence in the place of the making. The Living Bible (TLB) gloss, kept as a gloss beside the KJV: “So God made man like his Maker. Like God did God make man; Man and maid did he make them.” Mark it TLB. Do not preach the gloss as if it were the King James. Do not hide the King James behind the gloss.

Course 2 already opened this cluster with John 14:12; 1 John 4:17; Psalm 82:6; Romans 8:17; John 17:20-23. Do not exhaust those verses here as if this were a second faith course. Hold them as already named.

John 14:12. Verily, verily, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father.

1 John 4:17. Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world.

Romans 8:17. And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.

The making is the purpose. Glory come short is deviation from this nature. The heir is made after this image. Boldness in the day of judgment sits on as He is, so are we — not on a reduced man. Death, in this chapter, is cutting off from realizing that purpose. Psalm 82:6 and John 17 remain named; do not steal their lessons.

A man whose body still breathes may already be cut off. A man whose body has stopped may still be a soul and spirit that has not ceased. Lesson 5 will say physical death is inner man separated from the body. Lesson 6 will say spiritual death is man separated from God because of sin. Lesson 7 will say the second death is eternal separation in the lake of fire. Lesson 8 will say soul and spirit are immortal; bodies rise from the dust. Today you will not use “dead” as one slang that swallows all four.

What does Genesis 1:26 actually say, and what does it not say? It says Let us make man in our image, after our likeness, and let them have dominion. It does not say a reduced man who is only a worshipper of a distant God. It does not say death is only the stop of breath. If you define dead by the lungs alone, you have nothing left for a widow who liveth in pleasure, or for a man told to let the dead bury their dead, or for the lake that is the second death.

Write the making as written. Write death as cutting off from that purpose. Do not hedge image until the purpose is too small to be cut off from. Do not invent a seventh nature to die from. The purpose is Genesis 1:26-28. Dead is cut off from realizing it.

Labour
Academic Year — one tight page. Define death without using only “stopped breathing.” Write Genesis 1:26-28 as written. Word drill: image / likeness / dominion / cutting off / purpose.

Intensive — three pages on the same cluster. Page 1: write Genesis 1:26-28 in full; mark image, likeness, male and female, fruitful, multiply, replenish, subdue, dominion. Mark the TLB as TLB. Page 2: death as cutting off from that purpose — not lungs only; not a hedged man. Page 3: name the three deaths you will not collapse into one slang; do not steal Lessons 5–8. Same doctrine.

Distinction
Death as cutting off from Genesis 1:26-28 purpose vs “dead” as a single slang for stopped breath.

Charge
Define death without using only “stopped breathing.” Write Genesis 1:26-28 as written. What purpose is a man cut off from?`,
  ),
  lesson(
    "les-fs-6-05",
    "mod-fs-6-deaths",
    5,
    "Physical death — James 2:26",
    75,
    `Central principle
Physical death is separation of the inner man from the outer man: soul and spirit from the body. James 2:26 is the text. It is not the second death. It is not spiritual death.

Key Scripture
James 2:26.

Cluster
J4. Physical death.

Read
Textbook Chapter 7, section V.

Teaching
For as the body without the spirit is dead, so faith without works is dead also. The comparison stands on a fact this school will not trade away: a body without the spirit is dead. Inner man separated from the body. That is physical death. The soul and spirit do not become nothing when they leave. Lesson 8 will lock immortality. Today the separation.

James 2:26. For as the body without the spirit is dead, so faith without works is dead also.

The body without the spirit is dead. That is the first kind. Do not collapse it into spiritual death. A man can be spiritually dead while his body still has the spirit in it — Lesson 6 will take 1 Timothy 5:6: she that liveth in pleasure is dead while she liveth. Do not collapse it into the second death. The lake is not James 2:26. Revelation 20:14 will have its own lesson.

Course 5 already taught that material resurrection is of the body. John 5:28-29: all that are in the graves shall hear His voice. The graves hold bodies. Dust will give them up. Physical death is why there is a grave. The grave is not a prison of the underworld. Lesson 9 will refuse that flatten. The body goes to dust. The inner man goes where the five prisons and heaven require. Do not send the soul into the grave and call it this verse.

Faith without works is dead also — James is teaching faith. This school will not turn Course 6 into a second James lecture. The leaflet uses the verse for the fact of the body. Body without the spirit is dead. Write that sentence. Write what is separated from what. Inner man — soul and spirit — from the outer man, the body. That is physical death.

Do not say the man has ceased because the body lies still. Do not say the body is the person so that resurrection of the body has nothing to raise. Course 5’s two kinds remain: spiritual resurrection is new birth in this life; material resurrection is the body. Physical death is the event that leaves a body for that later raising. It is not new birth. It is not the lake. A corpse in a cemetery is not proof the inner man is in that hole. A corpse in a cemetery is proof the spirit is not in that body.

Write James 2:26. What is separated from what? The body without the spirit is dead. Soul and spirit from the body. One kind. Not three kinds stacked in one word. Give this text for physical death when Q40 asks for one text each. Do not give Revelation 20:14 here. Do not give Matthew 8:22 here. James 2:26. If Q40 is answered with one pile called death, you have not given three texts. You have given slang.

The grave is where the body is. The underworld is not the grave. Heaven is not the grave. Tartarus is not the grave. Hell of the rich man is not the grave. The abyss is not the grave. Gehenna is not the grave. If you bury the whole man in the grave because James said the body without the spirit is dead, you have inverted the verse. The verse names a body that has lost the spirit. The spirit is why the body is called dead. Keep the separation. Dust will hear a voice later. The inner man is not waiting as dust. Lesson 8 will say that. Today: physical death. Inner from outer. James 2:26.

Faith without works is dead also is James’s comparison. This course takes the fact the comparison stands on. Do not turn Foundation School week 46 into a second justification debate. The body without the spirit is dead. That sentence is enough for the kind. Keep it enough. Do not add a doctrine of soul-sleep to fill the hour. Soul-sleep would kill Lesson 8 before it is taught. The inner man separates. The body lies. That is physical death.

Labour
Academic Year — one tight page. Write James 2:26. What is separated from what? Give this as the text for physical death. Word drill: body without the spirit / inner man / outer man / not the grave of the soul.

Intensive — three pages on the same cluster. Page 1: write James 2:26 in full; mark body, spirit, dead. Page 2: physical death only — not 1 Timothy 5:6, not Revelation 20:14; the grave holds a body, not a prison. Page 3: write the flatten you will refuse when someone says the whole man is the corpse. Same doctrine.

Distinction
Physical death as inner man from the body vs one slang “dead” that swallows spiritual death and the lake.

Charge
Write James 2:26. What is separated from what? Why is this not the second death?`,
  ),
  lesson(
    "les-fs-6-06",
    "mod-fs-6-deaths",
    6,
    "Spiritual death — Matthew 8:22; Colossians 2:14; 1 Timothy 5:6",
    75,
    `Central principle
Spiritual death is separation of man from God because of sin. A man may be dead while he liveth. Let the dead bury their dead. Quickening is not this death; it is the answer to it.

Key Scripture
Matthew 8:22; Colossians 2:14; 1 Timothy 5:6.

Cluster
J4. Spiritual death.

Read
Textbook Chapter 7, section VI.

Teaching
Follow Me; and let the dead bury their dead. She that liveth in pleasure is dead while she liveth. You, being dead in your sins, hath He quickened; blotting out the handwriting of ordinances. Three texts. One kind. Spiritual death. Man separated from God because of sin. The body may still breathe. The grave may still be ahead. The lake may still be future. This death is now if a man is cut off from God.

Matthew 8:22. But Jesus said unto him, Follow me; and let the dead bury their dead.

Colossians 2:13-15. And you, being dead in your sins and the uncircumcision of your flesh, hath he quickened together with him, having forgiven you all trespasses; Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross; And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.

1 Timothy 5:6. But she that liveth in pleasure is dead while she liveth.

The leaflet lists Colossians 2:14 under spiritual death. The stretch is 2:13-15. Dead in sins; quickened together with Him; blotting out the handwriting; nailing it to His cross; spoiling principalities. Course 5 already used Ephesians 2:1-6 for spiritual resurrection — quickened from death in trespasses. This lesson is the death that resurrection answers. Do not flatten the two courses. Do not invent a fourth death to sit between them.

Let the dead bury their dead. Some who bury have bodies that walk. They are the dead who bury. Follow Me is spoken to a man who would delay. Spiritual death is not a metaphor for sadness. It is separation from God because of sin. She that liveth in pleasure is dead while she liveth. Breath is not life with God. Pleasure is not proof she is not dead.

Course 1 named the wages of sin as death, and two old things that must pass. Course 1’s spiritual death in Ephesians 2 sits under this same kind. Ephesians 2:1 — and you hath He quickened, who were dead in trespasses and sins. Same kind. Do not reopen the whole old-man file here. Name the cause: sin. Name the separation: from God. Name the three texts. Give one of them when Q40 asks. Do not give James 2:26 as if physical death were this. Do not give Revelation 20:14 as if the lake were this.

Blotting out in Colossians 2:14 is the handwriting of ordinances — not the book of life. Do not steal Lesson 3’s blot into this verse to make one blot-religion. The book blots names of sinners. The cross blots the handwriting that was against us, which was contrary to us, and took it out of the way, nailing it to His cross. Two sentences. Two files. Spoiled principalities and powers; made a shew of them openly; triumphing over them in it. That triumph is not Tartarus emptied. It is not the lake. It is the cross answering spiritual death.

Quickened together with Him is the answer to being dead in sins. That quickening is this life only. Hebrews 9:27 and Revelation 22:11 already locked that window in Course 5. After death, this spiritual death is not cured by a later new birth. A man who waits to die hoping to be born then has not heard forfeiture. Follow Me is now. Dead while she liveth is now. Quickened is now. The second death is not this lesson’s cure and not this lesson’s name.

Write the three texts. What is a man separated from? God. Because of what? Sin. Can he be dead while he liveth? Yes — 1 Timothy 5:6. Can the dead bury the dead? Yes — Matthew 8:22. What does Colossians 2:14 force you to say that the other two do not say? The handwriting blotted; nailing it to His cross; you who were dead in sins quickened. Three texts. One kind. Not physical. Not the second death.

Labour
Academic Year — one tight page. Write Matthew 8:22, Colossians 2:14, and 1 Timothy 5:6. What is a man separated from, and because of what? Word drill: dead while she liveth / let the dead bury / dead in your sins / quickened.

Intensive — three pages on the same cluster. Page 1: write Matthew 8:22, Colossians 2:13-15, and 1 Timothy 5:6 in full. Page 2: spiritual death only — not James 2:26, not the lake; blot of ordinances is not blot of the book. Page 3: Course 5’s quickening answers this death in this life only; write the flatten you will refuse. Same doctrine.

Distinction
Spiritual death as separation from God because of sin vs physical death, or the lake, or one slang “dead.”

Charge
Write Matthew 8:22, Colossians 2:14, and 1 Timothy 5:6. What is a man separated from, and because of what? Can he be dead while he liveth?`,
  ),
  lesson(
    "les-fs-6-07",
    "mod-fs-6-deaths",
    7,
    "Second death — Revelation 20:14 and parallels",
    75,
    `Central principle
The second death is the second and eternal separation from God in the lake of fire. It is not physical death. It is not spiritual death in this life. Those who have part in the first resurrection: the second death hath no power.

Key Scripture
Revelation 20:14; Revelation 2:11; Revelation 20:6; Revelation 21:8.

Cluster
J4. Second death.

Read
Textbook Chapter 7, section VII.

Teaching
Death and hell were cast into the lake of fire. This is the second death. He that overcometh shall not be hurt of the second death. On such as have part in the first resurrection the second death hath no power. The lake which burneth with fire and brimstone — that is the second death. Four addresses. One kind. Eternal separation from God in the lake of fire.

Revelation 20:14. And death and hell were cast into the lake of fire. This is the second death.

Revelation 2:11. He that hath an ear, let him hear what the Spirit saith unto the churches; He that overcometh shall not be hurt of the second death.

Revelation 20:6. Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.

Revelation 21:8. But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.

Give Revelation 20:14 when Q40 asks for one text for the second death. Keep the parallels in the file. 2:11 — not hurt. 20:6 — no power on the first resurrection. 21:8 — the lake is the second death, and the catalogue is named. Do not collapse this into James 2:26. A body without the spirit is not the lake. Do not collapse this into 1 Timothy 5:6. Dead while she liveth is not yet the second death.

Course 5 placed the first resurrection before the Millennium and the rest of the dead after it. Second death hath no power on those who have part in the first. Blessed and holy is he that hath part in the first resurrection. They shall be priests of God and of Christ, and shall reign with Him a thousand years. The five companies are not this lesson. They are why “no power” has a people. Company 1 already. Company 2 at His coming — not the advent. Companies 3–5 in the tribulation. First resurrection ends with the two witnesses. Those who have part: second death hath no power. The rest of the dead lived not again until the thousand years were finished. Then this death is named.

The lake as prison is Lesson 14. Today the name: second death. Second. Eternal. Separation from God. In the lake of fire. He that overcometh shall not be hurt of the second death. Overcome in 2:11 sits beside 20:6. Do not invent a third way to escape that the verses did not name. Do not preach that the second death is a hard decade after which a man is released. Eternal separation. Lake of fire and brimstone.

Death and hell were cast into the lake. Hell here is sheol-hades emptying — Lesson 12. The second death is what that emptying ends in. Do not make hell and the lake one room because this verse names both. Death and hell are cast in. This is the second death. The first death was not this. Physical death already happened. Spiritual death already stood. This is the second. A man who died physically is not thereby in the second death. A man dead in sins while he liveth is not thereby already in the lake. Keep the count. Three.

The fearful, unbelieving, abominable, murderers, whoremongers, sorcerers, idolaters, all liars — their part in the lake. Which is the second death. Overcome: not hurt. First resurrection: no power. Write the four texts. Do not invent a fourth death. Do not preach the second death as a metaphor for a hard season. Eternal separation in the lake is the leaflet’s sentence.

This principle closes the three kinds. Physical — James 2:26. Spiritual — Matthew 8:22; Colossians 2:14; 1 Timothy 5:6. Second — Revelation 20:14 and parallels. Keep them three. If you have one word “dead” for all three, you have left J4. Lesson 8 will add what does not die: soul and spirit. Bodies rise. The second death still receives bodies after the judgment. Lesson 14 will lock that. Today: the name and the four texts.

Labour
Academic Year — one tight page. Write Revelation 20:14, 2:11, 20:6, and 21:8. Why is this death called second? Who is not hurt of it? Word drill: second death / lake of fire / no power / not hurt.

Intensive — three pages on the same cluster. Page 1: write the four texts in full. Page 2: not physical, not spiritual-in-this-life; hell cast in is not hell as the lake. Page 3: first resurrection — no power; write the collapse you will refuse. Same doctrine.

Distinction
Second death as eternal separation in the lake vs physical death, spiritual death now, or hell still holding the wicked.

Charge
Write Revelation 20:14 and one parallel. Why is this death called second? Give one text each for the three kinds without collapsing them.`,
  ),
  lesson(
    "les-fs-6-08",
    "mod-fs-6-deaths",
    8,
    "Soul and spirit immortal; bodies rise",
    75,
    `Central principle
The soul and spirit of man is immortal. All Scriptures on resurrection of the dead, without exception, refer to bodies which die and will be resurrected from dust again. What is raised from the dust is the body.

Key Scripture
Daniel 12:2; John 5:28-29; 1 Corinthians 15:20-23, 42-44; 1 Thessalonians 4:13-17; Revelation 20:4-6, 11-15.

Cluster
J4. Immortal soul and spirit; resurrection of bodies.

Read
Textbook Chapter 7, section VIII.

Teaching
Soul and spirit do not die. Resurrection texts concern bodies. If you preach resurrection as a spirit-event, you have left this school. If you preach that the inner man ceases when the body falls, you have left this school. What then is raised from the dust? The body.

Daniel 12:2. And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.

John 5:28-29. Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice, And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.

1 Corinthians 15:20-23. But now is Christ risen from the dead, and become the firstfruits of them that slept. For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive. But every man in his own order: Christ the firstfruits; afterward they that are Christ’s at his coming.

1 Corinthians 15:42-44. So also is the resurrection of the dead. It is sown in corruption; it is raised in incorruption: It is sown in dishonour; it is raised in glory: it is sown in weakness; it is raised in power: It is sown a natural body; it is raised a spiritual body. There is a natural body, and there is a spiritual body.

1 Thessalonians 4:16-17. For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.

Sleep in the dust. Graves. Sown a natural body; raised a spiritual body — still a body, not a spirit in the place of a body. Dead in Christ shall rise first. Two material issues: life before the Millennium; damnation after. Course 5 already timed them by Revelation 20:4-6 and 20:11-15. Do not teach Revelation chapter 10 as that raising. 1 Corinthians 15:19 stays with bodily hope, not as the proof that new birth is only in this life. That window remains Hebrews 9:27 and Revelation 22:11.

The inner man is not the thing that turns to dust. James 2:26 already separated spirit from body. Dust is the body’s sleep. Awake from the dust is the body’s rising. Everlasting life and shame and everlasting contempt are the two issues. All in the graves hear. Good — life. Evil — damnation. Christ the firstfruits of them that slept. Order. Company 2 is in 15:23 and in 1 Thessalonians 4: the dead in Christ shall rise first; we which are alive and remain shall be caught up together with them; so shall we ever be with the Lord. Do not merge rapture 2 with the second advent here. This lesson is immortality of soul and spirit, and bodies from the dust. The shout, the voice of the archangel, the trump of God — those raise bodies, not souls that had ceased.

Do not say the spiritual body is a spirit. There is a natural body, and there is a spiritual body. Raised. Incorruption. Glory. Power. The person does not wait in the dust as a dead soul. The body waits in the dust. The righteous now go to heaven at death — Lesson 11. The wicked go to hell until the Millennium’s end — Lesson 12. Then bodies. Then the lake for those not in the book. Keep the inner man immortal. Keep the resurrection bodily.

Write Daniel 12:2. What sleeps in the dust? What awakes? What then is raised from the dust? The body. Not the soul. Not the spirit. All resurrection Scriptures, without exception, refer to bodies. That is the leaflet’s sentence. Hold it. Do not invent a resurrection of spirits to make the grave feel fuller.

Labour
Academic Year — one tight page. What then is raised from the dust? Write Daniel 12:2 and John 5:28-29. Word drill: immortal / dust / graves / natural body / spiritual body.

Intensive — three pages on the same cluster. Page 1: write Daniel 12:2, John 5:28-29, 1 Corinthians 15:20-23 and 42-44, and 1 Thessalonians 4:16-17 in full. Page 2: soul and spirit immortal; body from the dust; spiritual body is still a body. Page 3: two issues timed by Revelation 20, not chapter 10; 15:19 stays with bodily hope. Same doctrine.

Distinction
Immortal soul and spirit with bodies raised from dust vs resurrection-as-spirit, or a soul that dies with the breath.

Charge
What then is raised from the dust? Write Daniel 12:2. Why do resurrection texts not speak of a soul that ceased?`,
  ),
  lesson(
    "les-fs-6-09",
    "mod-fs-6-prisons",
    9,
    "Five prisons are not the grave",
    75,
    `Central principle
There are five distinct prisons in the underworld of the departed. Not one is the same as the grave. The grave holds a body. The prisons are not that hole.

Key Scripture
The five files: 2 Peter 2:4; Luke 16:19-31 with Luke 23:43; Revelation 20:13; Luke 8:31; Revelation 20:14-15.

Cluster
J5–J9. Overview.

Read
Textbook Chapter 7, section IX.

Teaching
Name them before you open them. Tartarus. Paradise. Hell — sheol-hades. The abyss — Abaddon. The lake of fire — gehenna. Five. Not one room called Hell. Not the grave. If you have been using one word for all five and for the tomb, put that word down. This lesson is the file, not the five sermons. Lessons 10–14 will keep each prison itself.

The grave is where the body is without the spirit. James 2:26 already said so. Dust. Sleep in the dust. The underworld is not that dust. Do not bury angels in a cemetery and call it Tartarus. Do not bury Lazarus in a tomb and call it Paradise. Do not bury the rich man in a grave and call it hell. Do not bury Legion’s fear in a hole in the ground and call it the deep. Do not bury the lake in a graveyard and call it gehenna.

Tartarus: fallen angels who sinned before the flood. No humans. No demons. 2 Peter 2:4 — God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment. The Greek the leaflet names is tartarōsas. Not a cemetery.

Paradise: once the righteous at death; now empty of the righteous; they go to heaven at death since the ascension. Luke 23:43 — To day shalt thou be with Me in paradise. Ephesians 4:8 — when He ascended up on high, He led captivity captive. Then is not now.

Hell: torment of sheol-hades for the wicked until the end of the Millennium; then emptied into the lake. Luke 16:23 — in hell he lift up his eyes, being in torments. Revelation 20:13 — death and hell delivered up the dead which were in them. Until, then emptied.

Abyss: demons and some angelic beings; Satan bound there a thousand years. Luke 8:31 — they besought Him that He would not command them to go out into the deep. Revelation 20:3 — cast him into the bottomless pit a thousand years. Revelation 9:11 — Abaddon, Apollyon.

Lake of fire: final, eternal; gehenna G1067; body and soul after judgment; the other prisons empty into it; alive. Revelation 19:20 — cast alive into a lake of fire. Revelation 20:14 — death and hell were cast into the lake of fire. This is the second death.

Luke 16 is the rich man in hell, Lazarus in Abraham’s bosom. That narrative is Luke 16:19-31, not Matthew 16. Course 1 already corrected the print. Do not teach Matthew 16 as that story. Do not make the rich man’s hell the lake. Do not make Abraham’s bosom the present destination of the righteous. Overview today. Each itself in Lessons 10–14.

The Millennium sits on this file. Satan is in the abyss for the thousand years. The wicked remain in hell until that end. Then hell delivers up the dead. Bodies from the dust. Great white throne. Book of life. Lake of fire. Tartarus holds its angels until their judgment. Paradise is already empty of the righteous. Five prisons. One chronology. Not a seventh course. Not one room. Not the grave. If your map has the righteous still in Paradise, you have not heard now empty. If your map has the wicked already in the lake, you have not heard until the Millennium’s end. If your map has men in Tartarus, you have not heard no humans.

Write the five with one sentence each: who is there, who is not, and why the grave is not that prison. If you added a sixth prison, strike it. If you merged two, name the merge and put it down. The leaflet said five distinct prisons; not one is the same as the grave. That is the overview. Q42 will ask the full file at the year charge. Today you learn the five names without a sixth and without a tomb. The grave is dust. The prisons are not dust.

Labour
Academic Year — one tight page. Write the five with one sentence each: who is there, who is not, why not the grave. Word drill: five / not the grave / not one room / underworld.

Intensive — three pages on the same cluster. Page 1: write the five names with the key text for each as this lesson listed them. Page 2: the grave versus each prison — body in dust; inner man not in the tomb. Page 3: strike a sixth; strike a merge; Luke 16 is not Matthew 16. Same doctrine.

Distinction
Five prisons, none identical with the grave, vs one room called Hell, or the underworld as a cemetery.

Charge
Write the five. For each: who is there, who is not, and why that prison is not the grave. No sixth.`,
  ),
  lesson(
    "les-fs-6-10",
    "mod-fs-6-prisons",
    10,
    "Tartarus — angels before the flood",
    75,
    `Central principle
Tartarus is a special prison for fallen angels who sinned before the flood. No human beings. No demons. It is not the grave. It is not the hell of men.

Key Scripture
1 Peter 3:19; 2 Peter 2:4; Jude 6-7.

Cluster
J5.

Read
Textbook Chapter 7, section X.

Teaching
Christ preached unto the spirits in prison, which sometime were disobedient when the longsuffering of God waited in the days of Noah. God spared not the angels that sinned, but cast them down to hell — tartarōsas — delivered into chains of darkness, reserved unto judgment. Angels which kept not their first estate, reserved in everlasting chains under darkness unto the judgment of the great day; as Sodom.

1 Peter 3:18-20. For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God, being put to death in the flesh, but quickened by the Spirit: By which also he went and preached unto the spirits in prison; Which sometime were disobedient, when once the longsuffering of God waited in the days of Noah, while the ark was a preparing, wherein few, that is, eight souls were saved by water.

2 Peter 2:4. For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment.

Jude 6-7. And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day. Even as Sodom and Gomorrha, and the cities about them in like manner, giving themselves over to fornication, and going after strange flesh, are set forth for an example, suffering the vengeance of eternal fire.

Who is there? Fallen angels who sinned before the flood. Who is not? Humans. Demons. The wicked dead of Luke 16. The righteous. Satan in his Millennium binding — that is the abyss, Lesson 13. The KJV of 2 Peter 2:4 says hell. The Greek the leaflet names is tartarōsas. This school will teach Tartarus as that prison. It will not dump men into a word because the English printed hell.

Spirits in prison. Days of Noah. Longsuffering waited. Eight souls saved by water. The prison is timed from that disobedience. Chains of darkness. Reserved unto judgment. First estate not kept. Own habitation left. Everlasting chains under darkness unto the judgment of the great day. Sodom is set forth as example of eternal fire — not as humans in Tartarus. Do not put the men of Sodom into Tartarus to fill a page. The angels are in Tartarus. Sodom suffers as the example Jude named.

No humans. No demons. Write that twice. A sermon that sends a man to Tartarus has left J5. A sermon that sends Legion to Tartarus has left J5. Legion feared the deep — the abyss. Men who die without Christ go to hell until the Millennium’s end. Angels before the flood: Tartarus. Keep the file. The eight souls in the ark are not the inmates. Few, that is, eight souls were saved by water. The spirits in prison are those who were disobedient when the longsuffering of God waited in the days of Noah, while the ark was a preparing. Prison. Days of Noah. Angels that sinned. Not Noah. Not Ham. Not the men who drowned.

From the flood unto the judgment of those angels. They are reserved. Delivered into chains of darkness, to be reserved unto judgment. Everlasting chains under darkness unto the judgment of the great day. They are not the lake yet. Lesson 14 will say Tartarus empties into gehenna. The owner file: all the wicked in Tartarus, the abyss, and Sheol/Hades will be put into gehenna. Do not make Tartarus the lake today. Do not make it the grave. Angels are not buried in dust. Bodies of men rise from dust. These are spirits in prison. Christ preached unto the spirits in prison — put to death in the flesh, quickened by the Spirit. Teach the three texts. Stop. No tenth prison. No human in this one. No demon in this one. Reserved unto judgment — not yet the lake, not ever the grave.

Labour
Academic Year — one tight page. Write 2 Peter 2:4 and Jude 6. Who is there? Who is not? Why is the English “hell” not the hell of Luke 16? Word drill: tartarōsas / spirits in prison / days of Noah / no humans / no demons.

Intensive — three pages on the same cluster. Page 1: write 1 Peter 3:18-20, 2 Peter 2:4, and Jude 6-7 in full. Page 2: angels before the flood — chains, reserved, first estate; Sodom is example, not inmates. Page 3: not the grave, not men’s hell, not the abyss, not the lake yet. Same doctrine.

Distinction
Tartarus as pre-flood fallen angels only vs the hell of men, the abyss of demons, or a grave.

Charge
Write 2 Peter 2:4 and Jude 6. Who is in Tartarus? Who is not? Why are there no humans and no demons here?`,
  ),
  lesson(
    "les-fs-6-11",
    "mod-fs-6-prisons",
    11,
    "Paradise — now empty; the righteous go to heaven",
    75,
    `Central principle
Paradise held the righteous at death until Christ. It is now empty of the righteous. They go to heaven at death since He led captivity captive and ascended. There is not another Foundation School teaching.

Key Scripture
Luke 16:19-31; Luke 23:43; Ephesians 4:8-10; Hebrews 2:14-15.

Cluster
J6.

Read
Textbook Chapter 7, section XI.

Teaching
Lazarus was carried by the angels into Abraham’s bosom. The thief heard: To day shalt thou be with Me in paradise. That was the abode of the righteous at physical death, held captive by Satan against their will, until Christ conquered death, hell, and the grave. Now empty. The righteous go to heaven at death. He led captivity captive. He descended first into the lower parts of the earth. He delivered them who through fear of death were all their lifetime subject to bondage.

Luke 16:19-31. There was a certain rich man, which was clothed in purple and fine linen, and fared sumptuously every day: And there was a certain beggar named Lazarus, which was laid at his gate, full of sores, And desiring to be fed with the crumbs which fell from the rich man’s table: moreover the dogs came and licked his sores. And it came to pass, that the beggar died, and was carried by the angels into Abraham’s bosom: the rich man also died, and was buried; And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom. And he cried and said, Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue; for I am tormented in this flame. But Abraham said, Son, remember that thou in thy lifetime receivedst thy good things, and likewise Lazarus evil things: but now he is comforted, and thou art tormented. And beside all this, between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence. Then he said, I pray thee therefore, father, that thou wouldest send him to my father’s house: For I have five brethren; that he may testify unto them, lest they also come into this place of torment. Abraham saith unto him, They have Moses and the prophets; let them hear them. And he said, Nay, father Abraham: but if one went unto them from the dead, they will repent. And he said unto him, If they hear not Moses and the prophets, neither will they be persuaded though one rose from the dead.

The 2015 PDF printed Matthew 16:19-31. That print was an error. This school teaches Luke 16:19-31. Do not teach Matthew 16 as that narrative.

Luke 23:43. And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.

Ephesians 4:8-10. Wherefore he saith, When he ascended up on high, he led captivity captive, and gave gifts unto men. (Now that he ascended, what is it but that he also descended first into the lower parts of the earth? He that descended is the same also that ascended up far above all heavens, that he might fill all things.)

Hebrews 2:14-15. Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same; that through death he might destroy him that had the power of death, that is, the devil; And deliver them who through fear of death were all their lifetime subject to bondage.

Where do the righteous go at death now, and why? To heaven. Because Paradise is empty of the righteous since Christ captured the captives and took them to heaven when He ascended. Abraham’s bosom was then. To day in paradise was then. Now the righteous are not held in that compartment. 2 Corinthians 5:8 already sat in Course 5’s company 2 file: absent from the body, present with the Lord. Do not reopen a second school that keeps the righteous in Abraham’s bosom after the ascension. Owner C5 is locked.

The rich man in hell is Lesson 12. The gulf fixed is in the account so you will not cross the two compartments. Lazarus comforted; the rich man tormented. Today Paradise. Once the righteous. Now empty of them. Not the grave. Lazarus was carried; the rich man was buried — the burial is the body; the bosom is not the tomb. Not Tartarus. Not the abyss. Not the lake.

Write Luke 23:43 beside Ephesians 4:8. Then write now. Now empty. Heaven at death. Held against their will until He conquered. Delivered from the fear of death. Captivity captive. That is J6. There is not another Foundation School teaching.

Labour
Academic Year — one tight page. Where do the righteous go at death now, and why? Write Luke 23:43 and Ephesians 4:8. Name the print: Luke 16, not Matthew 16. Word drill: now empty / captivity captive / heaven at death / Abraham’s bosom then.

Intensive — three pages on the same cluster. Page 1: write Luke 16:19-31, Luke 23:43, Ephesians 4:8-10, and Hebrews 2:14-15 in full. Page 2: then and now — held; conquered; empty; heaven. Page 3: not Matthew 16; not the present bosom; not the grave. Same doctrine.

Distinction
Paradise now empty, righteous to heaven at death, vs a present Abraham’s bosom, or Matthew 16 as the narrative.

Charge
Where do the righteous go at death now, and why, according to this school? Write Luke 16 as Luke, not Matthew.`,
  ),
  lesson(
    "les-fs-6-12",
    "mod-fs-6-prisons",
    12,
    "Hell / sheol-hades until the Millennium’s end",
    75,
    `Central principle
Hell is the torment compartment of sheol-hades. The unsaved have always gone there and will go there until the end of the Millennium. Then hell delivers up the dead. Reunion with immortal bodies. The lake. Hell is not the lake yet. Hell is not the grave.

Key Scripture
Luke 16:22-26; Revelation 20:11-15.

Cluster
J7.

Read
Textbook Chapter 7, section XII.

Teaching
The rich man died and was buried. In hell he lift up his eyes, being in torments. He seeth Abraham afar off. A great gulf is fixed. That is hell as this school teaches the rich man: Luke 16, not Matthew 16. He is not in Tartarus. He is not in the abyss. He is not yet in the lake. He is a wicked soul in sheol-hades.

Luke 16:22-26. And it came to pass, that the beggar died, and was carried by the angels into Abraham’s bosom: the rich man also died, and was buried; And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom. And he cried and said, Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue; for I am tormented in this flame. But Abraham said, Son, remember that thou in thy lifetime receivedst thy good things, and likewise Lazarus evil things: but now he is comforted, and thou art tormented. And beside all this, between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence.

Revelation 20:12-14. And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works. And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works. And death and hell were cast into the lake of fire. This is the second death.

Until the end of the Millennium. That is the leaflet’s until. Not born again — they have always gone there and will always go until that end. Then they are brought out, reunited with resurrected immortal bodies, and cast into the lake of fire for eternity. Revelation 20:13: death and hell delivered up the dead which were in them. Hell empties. The lake receives. Do not make the rich man’s flame the lake of Revelation 20. The flame is hell now. The lake is after the throne.

Who is there? Wicked souls. The unsaved. Those not born again. Who is not? The righteous — they are not held in Paradise now, and they are not in this torment. Fallen angels of Tartarus are not this compartment. Demons of the abyss are not this compartment. The body in the grave is not this compartment. The rich man was buried; in hell he lift up his eyes. Burial is the body. Hell is the inner man in torment. He asked for water for his tongue. He asked for Lazarus to be sent to five brethren. Abraham refused: they have Moses and the prophets. If they hear not Moses and the prophets, neither will they be persuaded though one rose from the dead. That refusal is still Luke 16. This lesson will not turn it into Course 1 again, and will not skip it as if hell had no voice.

Course 1 used this narrative as consequence, not metanoia. Hold that. Do not preach Hell-avoidance as Course 1 again. Course 5 placed the rest of the dead after the thousand years. Hold that. Do not raise the wicked before the Millennium to empty hell early. Rapture 2 is not this emptying. The second advent is not this emptying. The beast and false prophet go alive into the lake at the advent — that is gehenna beginning to receive, not hell emptying. The Millennium ends. Satan’s little season. Then hell delivers. Reunion with resurrected immortal bodies. Then the book. Then the lake. Until that end, the unsaved go here. Always have. Will always, until then.

Write Luke 16:23 beside Revelation 20:13. In hell he lift up his eyes. Death and hell delivered up the dead. Until the Millennium’s end. Then bodies. Then the lake. Not Tartarus. Not the abyss. Not gehenna yet. Not the grave. Sheol-hades. Torment. Gulf fixed. That is J7.

Labour
Academic Year — one tight page. Write Luke 16:23 and Revelation 20:13. Who is in hell? Until when? What happens when it empties? Word drill: sheol-hades / lift up his eyes / until the Millennium’s end / delivered up.

Intensive — three pages on the same cluster. Page 1: write Luke 16:22-31 and Revelation 20:11-15 in full; Luke, not Matthew. Page 2: wicked until the Millennium’s end; not the lake yet; not the grave. Page 3: not Tartarus, not the abyss; not an early raising of the wicked. Same doctrine.

Distinction
Hell / sheol-hades until the Millennium’s end vs the lake of fire, the grave, or one room for all the dead.

Charge
Write Luke 16:23 and Revelation 20:13. Who is in hell, who is not, until when, and where do they go when hell delivers them up?`,
  ),
  lesson(
    "les-fs-6-13",
    "mod-fs-6-prisons",
    13,
    "Abyss / Abaddon — Luke 8:31; Revelation 9; Revelation 20:3",
    75,
    `Central principle
The abyss is the abode of demons and some angelic beings. Abaddon is destruction. Satan is bound there a thousand years. It is not the grave. It is not Tartarus. It is not men’s hell.

Key Scripture
Luke 8:31; Revelation 9:1-3, 11; Revelation 20:3. Also Romans 10:7; Revelation 17:8; Revelation 20:1-10; Psalm 88:11.

Cluster
J8.

Read
Textbook Chapter 7, section XIII.

Teaching
The owner’s abyss file is Luke 8:31, Revelation 9, and Revelation 20:3. The leaflet also has Romans 10:7, Revelation 17:8, Revelation 20:1-10, and Psalm 88:11. Beast from the pit in the two-witnesses account is Revelation 11:7. Revelation 11:17 is the elders giving thanks. This school will not reopen 11:7 versus 11:17. Teach both verses as what they are. Do not ask the question again.

Luke 8:31. And they besought him that he would not command them to go out into the deep.

Romans 10:7. Or, Who shall descend into the deep? (that is, to bring up Christ again from the dead.)

Revelation 9:1-3. And the fifth angel sounded, and I saw a star fall from heaven unto the earth: and to him was given the key of the bottomless pit. And he opened the bottomless pit; and there arose a smoke out of the pit, as the smoke of a great furnace; and the sun and the air were darkened by reason of the smoke of the pit. And there came out of the smoke locusts upon the earth: and unto them was given power, as the scorpions of the earth have power.

Revelation 9:11. And they had a king over them, which is the angel of the bottomless pit, whose name in the Hebrew tongue is Abaddon, but in the Greek tongue hath his name Apollyon.

Revelation 11:7. And when they shall have finished their testimony, the beast that ascendeth out of the bottomless pit shall make war against them, and shall overcome them, and kill them.

Revelation 11:17. Saying, We give thee thanks, O Lord God Almighty, which art, and wast, and art to come; because thou hast taken to thee thy great power, and hast reigned.

Revelation 17:8. The beast that thou sawest was, and is not; and shall ascend out of the bottomless pit, and go into perdition: and they that dwell on the earth shall wonder, whose names were not written in the book of life from the foundation of the world, when they behold the beast that was, and is not, and yet is.

Revelation 20:1-3. And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand. And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years, And cast him into the bottomless pit, and shut him up, and set a seal upon him, that he should deceive the nations no more, till the thousand years should be fulfilled: and after that he must be loosed a little season.

Psalm 88:11. Shall thy lovingkindness be declared in the grave? or thy faithfulness in destruction?

Legion besought Him not to command them to go out into the deep — abyssos. That is why demons are in this file and not in Tartarus. Tartarus is angels before the flood. The deep is what Legion feared. Romans 10:7 uses the same deep of bringing Christ up from the dead — read it; do not make it a second prison. Key of the bottomless pit. Smoke. Locusts. Their king Abaddon, Apollyon. Abaddon is destruction — Psalm 88:11. The grave is in that verse beside destruction so you will not merge them. Faithfulness in destruction is not a cemetery slogan.

The beast that ascendeth out of the bottomless pit makes war against the two witnesses — Revelation 11:7. Company 5 in Course 5. Revelation 11:17 is not that ascent. The elders speak. He has taken His great power and has reigned. Keep 11:7 as the beast from the pit. Keep 11:17 as the elders. Stop.

Revelation 20:1-3 is the Millennium lock: Satan bound in the bottomless pit a thousand years. Then loosed a little season. Then the lake — 20:10. The abyss is not the lake. Satan’s prison in the thousand years is not Tartarus and not sheol-hades of men. Who is there? Demons. Some angelic beings. Satan for the thousand years. Who is not? The righteous. Wicked men in hell. Pre-flood angels in Tartarus. Bodies in graves.

Labour
Academic Year — one tight page. Write Luke 8:31, Revelation 9:11, and Revelation 20:3. Who is in the abyss? Who is not? What is Revelation 11:7, and what is 11:17? Word drill: deep / Abaddon / bottomless pit / bound a thousand years.

Intensive — three pages on the same cluster. Page 1: write Luke 8:31, Romans 10:7, Revelation 9:1-3, 11, 11:7, 11:17, 17:8, 20:1-3, and Psalm 88:11 in full. Page 2: demons and some angels; Satan in the Millennium; Abaddon as destruction, not the grave. Page 3: 11:7 beast and two witnesses; 11:17 elders; do not reopen the number. Same doctrine.

Distinction
Abyss / Abaddon as demons, some angels, and Satan bound, vs Tartarus, men’s hell, the grave, or Revelation 11:17 as the beast.

Charge
Write Luke 8:31, Revelation 9:11, and Revelation 20:3. Who is there, who is not, and what relation has this prison to the Millennium? Name 11:7 and 11:17 without merging them.`,
  ),
  lesson(
    "les-fs-6-14",
    "mod-fs-6-prisons",
    14,
    "Lake of fire / gehenna — G1067",
    75,
    `Central principle
Gehenna (G1067) is the place of future and eternal torment. It is the lake of fire. It is not the grave. Body and soul go there after the judgment. The other prisons empty into it. People are put in alive. Eternal.

Key Scripture
Luke 12:5; Matthew 10:28; Matthew 25:41, 46; Revelation 19:20; Revelation 20:10-15; Revelation 21:8.

Cluster
J9.

Read
Textbook Chapter 7, section XIV.

Teaching
Greek gehenna, G1067, found twelve times, always rendered hell. Same as the lake of fire — five times: Revelation 19:20; 20:10-15; 21:8. Not the grave. God only has power to put into gehenna. Body and soul. After He hath killed. After the judgment. Only the wicked. Tartarus, the abyss, and sheol-hades will be put into it. Fire never quenched. Alive.

Luke 12:5. But I will forewarn you whom ye shall fear: Fear him, which after he hath killed hath power to cast into hell; yea, I say unto you, Fear him.

Matthew 10:28. And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell.

Matthew 25:41. Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels.

Matthew 25:46. And these shall go away into everlasting punishment: but the righteous into life eternal.

Revelation 19:20. And the beast was taken, and with him the false prophet that wrought miracles before him, with which he deceived them that had received the mark of the beast, and them that worshipped his image. These both were cast alive into a lake of fire burning with brimstone.

Revelation 20:10. And the devil that deceived them was cast into the lake of fire and brimstone, where the beast and the false prophet are, and shall be tormented day and night for ever and ever.

Revelation 20:14-15. And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire.

Revelation 21:8. But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.

Not the grave. Them which kill the body cannot cast into gehenna. After He hath killed — then power to cast in. Bodies are not put there until the judgment — Revelation 20:11-15. Body and soul — Matthew 10:28; Luke 12:5. Prepared for the devil and his angels. Beast and false prophet cast alive at the second advent — Revelation 19:20 — before the rest of the wicked after the throne. Devil cast in after the little season. Tormented day and night for ever and ever. People put in alive.

Isaiah 66:22-24 already sat in J1: worm shall not die; fire not quenched. Revelation 14:9-11: smoke of torment; no rest day nor night. Mark 9:43-48 repeats the worm and the unquenched fire. Weeping, wailing, gnashing of teeth — Matthew 8:12; 13:42, 50; 24:51. Degrees of punishment — Revelation 20:13; Matthew 23:14-15. Only certain people are in danger of it — Matthew 5:22; 23:15, 33. Victory over sin is the escape — Matthew 5:29-30; 18:9; Revelation 21:8. People can repent and escape — Matthew 3:2-8; 23:33. James 3:6: the tongue setteth on fire the course of nature; it is set on fire of hell. Psalm 9:17: the wicked shall be turned into hell. Eternal fire, damnation, punishment, judgment, contempt — Matthew 25:41, 46; Mark 3:29; 9:43-48; Hebrews 6:2; Jude 7; Daniel 12:2.

The owner file is locked. Do not reopen it as a debate. Do not make gehenna the grave. Do not make it sheol-hades of the rich man as if the lake had already begun for him. Other prisons empty into it. Eternal. Alive. Body and soul. After judgment. Final hell of fallen angels, demons, and wicked men. Revelation 22:15: without are dogs, and sorcerers, and whoremongers, and murderers, and idolaters, and whosoever loveth and maketh a lie.

This is not a seventh prison. This is the fifth. Write G1067. Write not the grave. Write body and soul. Write after the judgment. Write the others empty into it. Write eternal. Write alive — Revelation 19:20. That is J9.

Labour
Academic Year — one tight page. Write Luke 12:5, Matthew 10:28, and Revelation 19:20. Why is gehenna not the grave? What goes there, and when? Word drill: G1067 / not the grave / body and soul / alive / other prisons empty into it.

Intensive — three pages on the same cluster. Page 1: write Luke 12:5, Matthew 10:28, Matthew 25:41, 46, Revelation 19:20, 20:10, 20:14-15, and 21:8 in full. Page 2: owner lock — not grave; body and soul; after judgment; alive; eternal; Tartarus, abyss, sheol-hades into it. Page 3: not the rich man’s hell as already the lake; not a sixth prison. Same doctrine.

Distinction
Lake of fire / gehenna as final, eternal, after judgment, vs the grave, sheol-hades now, or a metaphor that ends.

Charge
Write Luke 12:5, Matthew 10:28, and Revelation 19:20. Why is gehenna not the grave? What goes there, when, and from which prisons?`,
  ),
  lesson(
    "les-fs-6-15",
    "mod-fs-6-prisons",
    15,
    "Charge — who is where; examination of the year",
    90,
    `Central principle
Week 52 is the final integration of the year. Six principles. The chronology map. The five prisons. This lesson is the examination, not a seventh doctrine. Course 6 has no required companion.

Key Scripture
Hebrews 6:1-2; Revelation 20:11-15; Genesis 1:26-28.

Cluster
All of Course 6. Textbook Chapter 7. Q37–Q43. The year: Courses 1–6 with the chronology map.

Read
Chapter 7, section XV. No required companion. The leaflet named none.

Teaching
This lesson is the examination of the principle and of the year, not a new doctrine. Completing activities is not mastery. Written charges, the course examination, and this week-52 final are the v1 spine. There is not a seventh course hiding in a longer Saturday.

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

You should now be able to teach, from Scripture, the six as laid:

1. Repentance from dead works. Metanoia over sin and its cause, not Hell-avoidance. Luke 16:19-31, not Matthew 16. Two old things. Christ the way. Receive Him.
2. Faith toward God. Pistis as the state of children. Genesis 1:26-28 as written. Free justification. Heir.
3. The doctrine of baptisms. Three essential among seven. Into Christ saves the soul. Water is the figure after. Spirit is witness of the son. Christ remains Spirit-baptizer.
4. Laying on of hands. Nine occasions. Resultant. No tenth. No required companion.
5. Resurrection of the dead. Spiritual now, this life only. Material: bodies. Two issues, a thousand years apart. Five companies. Rapture 2 is not the second advent. Tribulation is seven years after rapture 2. Second advent is Christ with the saints after tribulation, ushering the Millennium.
6. Eternal judgment. Eternal punishment. Book of life. Three deaths. Immortal soul and spirit; bodies from the dust. Five prisons, none the grave.

The chronology is not a seventh principle. It is the map Courses 5 and 6 sit on. Company 1 past. Rapture 2 — they that are Christ’s at His coming — before the seven years. Tribulation. Companies 3–5 in that stretch; first resurrection ends with the two witnesses. Second advent with the saints. Millennium: first-resurrection saints rule; Satan bound in the abyss. After the Millennium: the wicked raised; hell delivers up; great white throne; book of life; lake of fire.

Q37: Whom does “whosoever” refuse to exempt? Small and great. Every man. No respecter of persons — Acts 10:34 with Revelation 20:15. Status does not write a name.

Q38: Teach Exodus 32:32-33, Psalm 69, and Revelation 3:5 as one file. God blots names of sinners. Predicted of Judas. I will not blot out his name. John 3:36 and Revelation 22:18-19 remain in that file. The book is not a slogan of unconditional listing.

Q39: Define death without using only “stopped breathing.” Dead is cutting off from realizing Genesis 1:26-28 as written — image, likeness, dominion.

Q40: Three kinds. Physical — James 2:26. Spiritual — Matthew 8:22; Colossians 2:14; 1 Timothy 5:6. Second — Revelation 20:14 and parallels. Do not collapse them.

Q41: What then is raised from the dust? The body. Soul and spirit are immortal. Daniel 12:2; John 5:28-29; 1 Corinthians 15.

Q42: Five prisons; not one is the grave. Tartarus — pre-flood fallen angels; no humans, no demons. Paradise — now empty; righteous to heaven at death. Hell / sheol-hades — wicked until the Millennium’s end; then emptied. Abyss / Abaddon — demons, some angels; Satan bound a thousand years; 11:7 is the beast and the two witnesses, 11:17 is the elders. Lake of fire / gehenna G1067 — not the grave; body and soul; after judgment; others empty into it; eternal; alive (Revelation 19:20).

Q43: Where do the righteous go at death now, and why? Heaven. Paradise is empty of the righteous since He led captivity captive and ascended. Luke 16 is Luke, not Matthew.

Revelation 20:11-15. And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them. And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works. And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works. And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire.

Genesis 1:26-28. And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them. And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.

Do not submit a feeling in the place of the cluster. Do not submit a seventh doctrine. Do not invent a companion the leaflet did not name. Do not teach Matthew 16 as the rich man. Do not teach Revelation chapter 10 as the two resurrections. Do not reopen 11:7 versus 11:17. Do not make the five prisons the grave. Do not make rapture 2 the second advent. Leaving the first principles is not forgetting them. It is not laying them again once they are laid. Go on unto perfection if God permit. The foundation is six. Week 52 recites them. It does not add a seventh.

Labour
Academic Year — write the six principles as six tight paragraphs, then the chronology in one, then the five prisons in five sentences, then Q37–Q43 from the cluster. Same doctrine. Word drill: six / not a seventh / five prisons / who is where / week 52.

Intensive — write the six as six full pages, the chronology as one page, the five prisons as five pages, then the seven charges. Same cluster. Same doctrine. Do not invent a seventh-principle page. On the charge pages: whosoever; the blot file; death without lungs only; three deaths; dust is the body; who is where; heaven now. No companion. Same doctrine.

Distinction
Week-52 integration of the year vs a seventh doctrine, or completion of activities treated as mastery.

Charge
Answer Q37–Q43 from the cluster. Recite the six principles, the chronology map, and the five prisons. Who is where? Do not submit a seventh. Do not submit a companion the leaflet did not name. Do not submit a feeling in the place of the file.`,
  ),
];
