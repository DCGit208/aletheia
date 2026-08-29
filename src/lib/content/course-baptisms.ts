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
    75,
    `Central principle
Baptismos is ablution: ritual washing. Hebrews 6:2 names baptisms — the plural. The first word under the heading is washing, not a tank.

Key Scripture
Hebrews 6:2.

Cluster
E1. Hebrews 6:2 with Ephesians 5:26.

Read
Textbook Chapter 4, section I.

Teaching
This is Course 3 of Foundation School. One curriculum. The third of the six principles named in Hebrews 6:1-2. Course 1 turned you from dead works. Course 2 named the son. This course baptizes that son. You do not begin at a font. You begin at washing.

The 2015 page printed “doctrine of baptism.” The verse is baptisms. This school will not flatten the plural. A singular heading would already decide what the principle is allowed to be. The graphē did not print that decision.

Hebrews 6:1-2. Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

Ephesians 5:26. That he might sanctify and cleanse it with the washing of water by the word.

Baptismos: ablution — ritual washing of a priest’s hands or of sacred vessels. The leaflet opens the principle with that word. Hold it. A priest’s hands are washed because they serve. Sacred vessels are washed because they hold what is holy. Neither washing invents the priest. Neither washing invents the vessel. The wash names what is done to what already is.

Do not run to the river before you have heard what the word washes. The water in Ephesians 5:26 is by the word. Lesson 3-02 will open the agency. This lesson holds the heading: washing; baptisms, plural. If you treat the heading as a tank-act, you have already lost the first word.

There are seven baptisms in Scripture. Three are essential for believers. You will name the seven in lesson 3-03. Today you are forbidden to flatten the heading. Hebrews 6:2 will not become “baptism” because a page once printed it so. The plural is not decoration. It is the first distinction of the principle.

Course 2 already forbade two gospels. This course will forbid one tank to swallow three stones. The son named in Course 2 is washed by the Word. The Word is Holy Writ. This school pillows in the graphē. Ersatz analogical religiousisms will invent a more convenient baptism. The text will not.

You leave the first principles by laying them, not by skipping them. You do not relaid this principle as a lifestyle of fonts. You hear washing. You keep the plural. Then you are ready for the agency.

The priest’s hands in the leaflet’s gloss are not a prophecy of Course 4. They are the picture of ablution. Sacred vessels are not a prophecy of a tank. They are the picture of what is washed because it is set apart. Baptismos is the heading-word. Baptizō will be opened when the three essential are named. Today you are not yet at dip, overwhelm, bury. You are at washing.

Hebrews 6:1-2 names six. This is the third. You do not skip to hands because washing feels small. You do not skip to Spirit because a meeting taught you to begin there. You hear the plural. You hear ablution. You hear by the word. Then the agency lesson can open without a font already sitting in the chair.

A naturalistic Christian experience conforms to the graphē. Ersatz analogical religiousisms will call any wet act “baptism” and think the principle is finished. This school will not. The 2015 singular heading is a printed compression. The verse remains baptisms. Write the verse until the plural is in your hand, not only in your memory. Spot and wrinkle wait for Ephesians 5:27 in the next lesson. Today the heading is enough: washing; baptisms.

Labour
The Walk — one tight page. Write Hebrews 6:2 by hand. Then write what “baptisms” (plural) forbids you to do to the word baptism. Word drill: baptismos — ablution. Reason the word until you can teach washing without a tank. One page. Same doctrine.

Intensive — three pages on the same cluster. Page 1: write Hebrews 6:1-2 and Ephesians 5:26 in full; reason each clause — principles, baptisms, washing, by the word. Page 2: baptismos as washing of priest’s hands and sacred vessels; why this school will not run to the river first; what the 2015 singular heading must not be allowed to do. Page 3: Course 1 and Course 2 already laid; this course baptizes that son — write what you have been using “baptism” to mean, and strike every use that never heard washing. Same doctrine. Do not invent an eighth baptism to fill a page.

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
    75,
    `Central principle
The washing signifies the agency of the Word at new birth. The water in Ephesians 5:26 is by the word. The Word is the agency.

Key Scripture
Ephesians 5:26; 1 Peter 1:23; John 3:5.

Cluster
E1. Ephesians 5:25-27; 1 Peter 1:23-25; John 3:5.

Read
Textbook Chapter 4, section II.

Teaching
Christ loved the church and gave Himself for it, that He might sanctify and cleanse it with the washing of water by the word. That is the premiere of the three essential baptisms. You do not begin this principle at a river. You begin it where the Word washes.

Ephesians 5:25-27. Husbands, love your wives, even as Christ also loved the church, and gave himself for it; That he might sanctify and cleanse it with the washing of water by the word, That he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish.

1 Peter 1:23-25. Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever. For all flesh is as grass, and all the glory of man as the flower of grass. The grass withereth, and the flower thereof falleth away: But the word of the Lord endureth for ever. And this is the word which by the gospel is preached unto you.

John 3:5. Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.

The water-in-Ephesians-5 is the Word’s washing, not the font as power. Christ loved. Christ gave Himself. Christ sanctifies and cleanses. The instrument named is the washing of water by the word. If you answer “what is doing the washing?” with a tank you have not yet justified from these verses, you have left the cluster.

Born again is not of corruptible seed. Flesh is grass. Glory of man is a flower. The word of the Lord endureth for ever, and this is the word which by the gospel is preached unto you. New birth is by that word. Course 1 received Him. Course 2 credited Him. This lesson names the agency of that birth: the Word.

John 3:5 stands in the same cluster. Born of water and of the Spirit. The leaflet reads the water here with the washing of Ephesians 5:26 and the seed of 1 Peter 1:23. Do not make John 3:5 a second font-gospel. Do not empty the Spirit from the verse to protect a Word-only slogan. The cluster holds both: Word as agency; Spirit as the other breath of the same birth. Lesson 3-11 will open the Spirit as witness. This lesson will not steal that stone. It will also not surrender the Word to a tank.

A glorious church is presented without spot or wrinkle. The wash is unto that presentation. It is not a ceremony you add after you have already decided you are clean. The Word washes. The Word lives. The Word is preached. That is where this principle begins.

Sanctify and cleanse sit in one purpose: that He might present it to Himself. Holy and without blemish. The husband-sentence is the frame; the church-sentence is the doctrine. Christ loved. Christ gave Himself. The washing of water by the word is how that love cleanses. If you lift “water” out of “by the word,” you have a different verse.

Incorruptible seed is not a feeling. It liveth and abideth for ever. All flesh is as grass. The gospel preached unto you is that word. Course 1 already named receive Him. This cluster names what washes the one who receives: the Word of God. John 3:5 will not be surrendered to a tank, and it will not be emptied of the Spirit. Born of water and of the Spirit — held with Ephesians 5:26 and 1 Peter 1:23. The premiere of the three essential begins here, not at a river.

Labour
The Walk — one tight page. Write Ephesians 5:26 with 1 Peter 1:23. Answer: what is doing the washing? Do not answer with a tank you have not yet justified from these verses. Word drill: agency — the Word at new birth.

Intensive — three pages on the same cluster. Page 1: write Ephesians 5:25-27, 1 Peter 1:23-25, and John 3:5 in full; mark every clause that names the Word, the water, the Spirit, the seed, the gospel. Page 2: the premiere of the three essential — why you do not begin at a river; how John 3:5 sits with Ephesians 5:26 without becoming a font-gospel. Page 3: write the sentence you will not say again if the Word is the agency. Same doctrine. Do not invent a third water to fill a page.

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
    75,
    `Central principle
Seven baptisms in Scripture. Three essential for believers. Three agents. Do not add an eighth. Do not pretend there are only three in the Bible.

Key Scripture
Ephesians 4:5; 1 Corinthians 12:13; Matthew 3:11; Matthew 28:19.

Cluster
E1 with owner B2.

Read
Textbook Chapter 4, section III.

Teaching
The leaflet said seven mentioned in the Scriptures for believers, and named only three. The authorized list is seven. We will not invent an eighth. We will not pretend the Bible has only three.

Luke 12:50. But I have a baptism to be baptized with; and how am I straitened till it be accomplished!

1 Corinthians 10:1-2. Moreover, brethren, I would not that ye should be ignorant, how that all our fathers were under the cloud, and all passed through the sea; And were all baptized unto Moses in the cloud and in the sea.

Matthew 3:11. I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire.

John 1:31-33. And I knew him not: but that he should be made manifest to Israel, therefore am I come baptizing with water. And John bare record, saying, I saw the Spirit descending from heaven like a dove, and it abode upon him. And I knew him not: but he that sent me to baptize with water, the same said unto me, Upon whom thou shalt see the Spirit descending, and remaining on him, the same is he which baptizeth with the Holy Ghost.

Matthew 28:19. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.

1 Corinthians 12:13. For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit.

The authorized seven: (1) John’s baptism in water; (2) Christ’s baptism in water; (3) baptism in suffering (Luke 12:50); (4) baptism in the cloud and in the sea (1 Corinthians 10:2); (5) Christian baptism in water; (6) baptism into Christ and into His body; (7) baptism in the Holy Spirit.

Three for believers, in doctrinal order: 6, then 5, then 7. Into Christ at repentance and new birth. Water after one is saved. Spirit — witness of sonship and enduement of power for service. The Spirit may be given before water (Acts 10:44-48) or after it (Acts 1:4-8; 2:1-11; 8:12-21; 19:1-7). Do not make one sequence a law the Acts will not carry.

Acts 10:44-48. While Peter yet spake these words, the Holy Ghost fell on all them which heard the word. And they of the circumcision which believed were astonished, as many as came with Peter, because that on the Gentiles also was poured out the gift of the Holy Ghost. For they heard them speak with tongues, and magnify God. Then answered Peter, Can any man forbid water, that these should not be baptized, which have received the Holy Ghost as well as we? And he commanded them to be baptized in the name of the Lord. Then prayed they him to tarry certain days.

Three agents. The Holy Spirit baptizes into Christ and into His body (1 Corinthians 12:13). Christ baptizes in the Holy Spirit (Matthew 3:11; John 1:31-33). The minister baptizes into water (Matthew 28:19). Do not make one actor do all three. Do not make the minister the baptizer into Christ. Do not make the minister the baptizer in the Spirit. Course 4 will name hands in certain accounts. Hands do not cancel Christ as Spirit-baptizer.

Baptizō (G907) is from baptō (G911): to dip; to overwhelm with suffering; to bury into — regardless of the element. The element does not invent the word. The word names what is done in the element. Water, Spirit, death, cloud and sea — the word is not a tank-word first.

“One baptism” (Ephesians 4:5) is lesson 3-04. It names the baptism that saves the soul. It does not cancel water. It does not cancel the Spirit. Name the three essential. Do not invent the four that fill out the seven as if they were a second gospel for believers.

Labour
The Walk — one tight page. Name the three essential. Write the three agents with their texts. One paragraph: why “one baptism” does not cancel water and Spirit as this school teaches them. Word drill: baptizō from baptō — regardless of the element.

Intensive — three pages on the same cluster. Page 1: write the seven with the texts that carry 3, 4, 6, and 7; do not invent an eighth. Page 2: the three agents in full KJV (1 Corinthians 12:13; Matthew 3:11 with John 1:31-33; Matthew 28:19); who does what. Page 3: Acts 10:44-48 beside Acts 8 and 19 — before water or after it; write the sequence you will not make a law. Same doctrine.

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
    75,
    `Central principle
Baptism into Christ and His body at repentance and new birth is the one baptism. It is the only baptism that saves the soul.

Key Scripture
Ephesians 4:5.

Cluster
E2. Ephesians 4:4-6.

Read
Textbook Chapter 4, section IV.

Teaching
One Lord, one faith, one baptism. This one baptism is into Christ and His body — fellowship of the saints — at repentance and new birth. Only this saves the soul.

Ephesians 4:4-6. There is one body, and one Spirit, even as ye are called in one hope of your calling; One Lord, one faith, one baptism, One God and Father of all, who is above all, and through all, and in you all.

The verse sits in a chain of ones. One body. One Spirit. One hope. One Lord. One faith. One baptism. One God and Father. You do not take “one baptism” out of that chain and make it a tank-slogan. You do not take it out and make it a second-experience slogan. It names the baptism that brings a man into Christ and into the body.

“One baptism” does not cancel water. It does not cancel the Spirit. The other two for believers remain. They are not this one. If you treat the tank as this one, you have not heard Ephesians 4:5. If you treat a second experience as this one, you have not heard it either.

Course 1 received Him. This lesson names that receiving as baptism into Christ. You do not get a second soul-saving baptism later. The soul is not saved twice by two elements. The Spirit will witness the son. Water will figure what is already true. Neither of those is this one.

Fellowship of the saints is in the leaflet’s line: into Christ and His body. 1 Corinthians 12:13 will name the agent in lesson 3-06: by one Spirit into one body. Hold the order. Today the name of the baptism that saves: into Christ. Not into a tank. Not into a meeting. Into Him, and into the body.

Galatians 3:27 will say put on Christ. Romans 6 will bury and raise. Those are the same baptism opened further. They are not water creating what this one already is. Do not drag the font into Ephesians 4:5 to make the ones-chain easier to preach.

A man who has not been baptized into Christ is not a candidate for water as if water could create this one. A man who has been baptized into Christ is not still hunting a soul-saving baptism. He has this one. The other two remain as this school teaches them.

One body and one Spirit stand before one baptism in the chain. You are not baptized into a lonely Christ who has no body. Fellowship of the saints is in the leaflet’s line. One hope of your calling. One Lord. One faith. One God and Father of all, who is above all, and through all, and in you all. The ones-chain is not a slogan-list. It is the location of “one baptism.” Pull baptism out and you can make it a tank or a second blessing. Leave it in the chain and it is into Christ and into His body.

Course 2 already defined faith as pistis toward God. One faith in this chain is not a second faith. One baptism is not a second soul-saving. The minister’s water remains commanded after one is saved. The Spirit remains witness and enduement. Neither is this one. Write that until you can teach it to a babe without flattening the other two, and without promoting them into this one.

Ephesians 4:4-6 is the full cluster, not 4:5 alone. One body. One Spirit. One hope of your calling. One Lord. One faith. One baptism. One God and Father of all. The baptism that saves the soul sits among those ones. Fellowship of the saints is not a later club. It is this one: into Christ and into His body at repentance and new birth. You do not get a second soul-saving baptism later.

Labour
The Walk — one tight page. Write Ephesians 4:5. Then write, in one paragraph, why water is still commanded and why it is not this one. Word drill: one baptism — into Christ and His body; the only one that saves the soul.

Intensive — three pages on the same cluster. Page 1: write Ephesians 4:4-6 in full; reason each “one” and why baptism is in that chain. Page 2: what “one baptism” does not cancel — water after one is saved; Spirit as witness and enduement. Page 3: Course 1 received Him; this lesson names that receiving — write what you will stop calling a soul-saving baptism. Same doctrine.

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
    75,
    `Central principle
Baptized into Christ is put on Christ. Baptizō: to make whelmed — fully wet; overpowered; submerged.

Key Scripture
Galatians 3:27.

Cluster
E2. Galatians 3:26-27.

Read
Textbook Chapter 4, section V.

Teaching
For as many of you as have been baptized into Christ have put on Christ. You do not put Him on as a garment you take off at the door. You are whelmed into Him.

Galatians 3:26-27. For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.

Baptizō as the leaflet uses it: to make whelmed (fully wet); overpowered / overwhelmed; submerged / drowned. From baptō: to dip. The word is not a sprinkle-slogan and it is not a tank-slogan first. It names being made whelmed — regardless of the element. Here the element is Christ. You are baptized into Him. You have put Him on.

This is baptism 1. It happens at repentance and new birth. It is not the minister’s act in water. The next lesson will bury and raise this same baptism from Romans 6. Lesson 3-10 will hold 3:26 with 3:27 in one paragraph so that faith is not thrown away and putting-on is not thrown away. Today hold 3:27 as the leaflet prints it: baptized into Christ; put on Christ.

A damp confession that never puts Him on is not this baptism. A man may wet a body and leave the old man dressed. That is not whelmed into Christ. Course 1 named the old man. Course 2 named the son. This lesson names the putting-on. The old man is not given a Christian coat. The man is submerged into Christ.

Children of God by faith in Christ Jesus stands in the verse before. Do not read 3:27 as if 3:26 were not there. Do not read 3:26 as if 3:27 added a font as saviour. They are one life. Faith that never puts Him on is not the faith of this cluster. A baptism that is no longer by faith is not this baptism.

As many of you — the verse does not offer a class of believers who were baptized into Christ and did not put Him on. The putting-on is the baptism. If you have been baptized into Christ, you have put Him on. That is the text. Teach it. Do not invent a third state in which a man is in Christ and still wearing the old man as his name.

Fully wet. Overpowered. Overwhelmed. Submerged. Drowned. Those are the leaflet’s glosses on baptizō. They are not poetry for a choir. They forbid a baptism that only dampens a confession. Baptō is to dip. The root does not decide the element. The element here is Christ. Lesson 3-03 already said: regardless of the element. Water will have its day as figure. Suffering had its day in Luke 12:50. Cloud and sea had theirs. This lesson’s element is Him.

Put on Christ is not a Sunday garment. You do not take Him off at the door of the week. Whelmed into Him is the name of baptism 1 at repentance and new birth. Course 1 received Him. This verse names that receiving as putting-on. Romans 6 will bury the old man with this same baptism. Do not wait for the tank to decide whether 3:27 has happened. The minister is not the agent of this one.

Galatians 3:26 stands in the same breath: children of God by faith in Christ Jesus. Lesson 3-10 will lock the two verses so neither is orphaned. Today 3:27 must not be read as a font-saviour, and it must not be read as a damp confession. Baptizō from baptō: dip; whelmed; submerged into Christ. The old man Course 1 named is not given a Christian coat. The man is put into Him.

Labour
The Walk — one tight page. Write Galatians 3:27. What does “put on Christ” force you to stop calling a baptism that leaves the old man dressed? Word drill: baptizō — whelmed; from baptō — to dip.

Intensive — three pages on the same cluster. Page 1: write Galatians 3:26-27 in full; reason “children by faith” and “baptized into Christ” as one life. Page 2: baptizō as the leaflet uses it — fully wet, overpowered, submerged — into Christ, not first into a tank. Page 3: write the confession you will not call this baptism if the old man is still the garment. Same doctrine.

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
    75,
    `Central principle
Baptized into His death; buried; walk in newness; old man crucified; by one Spirit into one body. The agent of this baptism is the Spirit.

Key Scripture
Romans 6:3-7; Colossians 2:12; 1 Corinthians 12:13.

Cluster
E2.

Read
Textbook Chapter 4, section VI.

Teaching
So many of us as were baptized into Jesus Christ were baptized into His death. Buried with Him by baptism into death. Planted in the likeness of His death and of His resurrection. Old man crucified with Him. He that is dead is freed from sin. The agent of this baptism is the Spirit. Water will later figure what this baptism already is. Water does not create it.

Romans 6:3-7. Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life. For if we have been planted together in the likeness of his death, we shall be also in the likeness of his resurrection: Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin. For he that is dead is freed from sin.

Colossians 2:12. Buried with him in baptism, wherein also ye are risen with him through the faith of the operation of God, who hath raised him from the dead.

1 Corinthians 12:13. For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit.

Who is the agent? One Spirit. What is the body? One body — Jews or Gentiles, bond or free. What happens to the old man? He is crucified with Him. Course 1 named that old man: the spirit and nature of the devil working in the disobedient. He is not improved in a tank. He is crucified with Christ in this baptism.

Buried. Raised. Walk in newness. Planted together. The operation is of God, who hath raised Him from the dead. Faith of that operation. You are risen with Him. This is baptism into Christ opened as death, burial, and resurrection. It is not a rehearsal you perform in water in order to make it true. Water will symbolize what is already elucidated here.

Do not make Romans 6 a water-manual that has forgotten 1 Corinthians 12:13. Do not make 1 Corinthians 12:13 a body-slogan that has forgotten the old man crucified. The cluster is one baptism: into Jesus Christ, into His death, into one body, by one Spirit. The minister is not the agent of this one. Christ is not here named as the baptizer into His own body. The Spirit baptizes into Christ and into His body.

Henceforth we should not serve sin. He that is dead is freed from sin. That is not a mood. It is the fruit of this burial. A man who treats water as the creator of this death has asked the figure to do the object’s work. Lesson 3-07 will name the figure. This lesson names the object.

Know ye not — Paul treats this as knowledge a believer should already have. Baptized into Jesus Christ. Baptized into His death. Therefore buried with Him by baptism into death. The purpose clause is walk in newness of life, as Christ was raised by the glory of the Father. Planted together in the likeness of His death — then also of His resurrection. Knowing this: old man crucified; body of sin destroyed; henceforth not serve sin.

Through the faith of the operation of God — Colossians will not let you make the burial a human technique. God raised Him. You are risen with Him through faith of that operation. Drink into one Spirit. One body. The agent named is the Spirit. Keep the agents from lesson 3-03. The minister waits for water. Christ waits as baptizer in the Spirit. Here the Spirit baptizes into Christ and into His body.

Labour
The Walk — one tight page. Write Romans 6:3-4 and 1 Corinthians 12:13. Who is the agent? What is the body? What happens to the old man? Word drill: buried / raised / one Spirit / one body.

Intensive — three pages on the same cluster. Page 1: write Romans 6:3-7, Colossians 2:12, and 1 Corinthians 12:13 in full; mark death, burial, resurrection, old man, Spirit, body. Page 2: the agent of baptism 1 is the Spirit — write why the minister is not this agent. Page 3: water will figure this; water does not create it — write the sentence you will not say about a tank and Romans 6. Same doctrine.

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
    75,
    `Central principle
Water baptizō is after one is saved. It symbolizes the death, burial, and resurrection already elucidated in baptism 1. A sign points. It is not the object.

Key Scripture
Matthew 28:19 with 1 Peter 3:21.

Cluster
E3.

Read
Textbook Chapter 4, section VII.

Teaching
The agent is the minister. The minister baptizes a person who has already been baptized into Christ. Do not refuse the sign because it is not the object. Do not worship the sign as if it were the object.

Matthew 28:19. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.

1 Peter 3:21. The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ.

The leaflet’s order is not a suggestion: water after one is saved. A man who has not been baptized into Christ is not a candidate for this figure as if the figure could create the object. Teach all nations — then baptize. The minister’s act follows the receiving Course 1 named and the putting-on Course 3 has already named.

Water baptizō symbolizes the death, burial, and resurrection of Christ already elucidated in baptism 1. Romans 6 was not waiting for a tank to become true. Colossians 2:12 was not an empty phrase until a minister acted. The figure points to that location. A sign points you to a location of the object. It is not the object. If you refuse the sign because it is not the object, you have treated the command as optional decoration. If you worship the sign as if it were the object, you have treated the minister as the saviour.

Matthew 28:19 is the minister’s commission for this baptism. He baptizes into water. He does not baptize into Christ. He does not baptize in the Holy Spirit. Those agents were named in lesson 3-03. Keep the agents. The name of the Father, and of the Son, and of the Holy Ghost is the name into which the nations are baptized in water. That name does not turn the tank into baptism 1.

Lesson 3-08 will ask the source question: is it the water that saves us, or the thing that it is a figure of? This lesson only sets the order and the kind: after one is saved; a figure; the minister the agent. Significant only for those who have received Christ. A man who has not received Him has no object for this sign to point to.

Go ye therefore, and teach all nations, baptizing them. Teach, then baptize. The order in the commission agrees with the leaflet’s order: water after one is saved. A sign points you to a location of the object of the subject represented by the sign. Death, burial, and resurrection already elucidated in baptism 1 — that is the location. The tank does not become the death. The minister does not become the Spirit. The saved man answers with a good conscience toward God; the next lesson will open that clause. Today refuse two errors equally: refusing the sign, and worshipping the sign.

Water baptizō is baptism 2 of the three essential. It is not baptism 1. It is not baptism 3. The agent is the minister (Matthew 28:19). The person in the water has already been baptized into Christ by the Spirit. If you ask this figure to save the soul, you have not heard lesson 3-04. If you refuse the figure because it does not save the soul, you have not heard the commission. Significant only for those who have received Christ. A man who has not received Him has no object for this sign to point to.

Labour
The Walk — one tight page. Write what the water figures, and what it must not be asked to do. Name the agent of this baptism. Word drill: sign / object; after one is saved.

Intensive — three pages on the same cluster. Page 1: write Matthew 28:19 and 1 Peter 3:21 in full; mark figure, conscience, resurrection, the minister’s commission. Page 2: after one is saved — write why a man not yet baptized into Christ is not a candidate as if the figure could create the object. Page 3: two refusals — do not refuse the sign; do not worship the sign — write the practice you will put down. Same doctrine.

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
    75,
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

1 Peter 3:20-21. Which sometime were disobedient, when once the longsuffering of God waited in the days of Noah, while the ark was a preparing, wherein few, that is, eight souls were saved by water. The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ.

Eight souls saved by water in Noah’s day. The like figure. The verse itself refuses the filth of the flesh as the saving. Not the putting away of the filth of the flesh. The answer of a good conscience toward God. By the resurrection of Jesus Christ.

The source asks: is it the water that saves us, or the thing that it is a figure or symbol of? Answer from the verse. Do not invent a third option in which the water becomes a second saviour. Do not invent a fourth in which the figure is nothing.

Faith in the death, burial, and resurrection of Christ saves the soul, not the sign. That is the leaflet’s answer. 1 Peter 3:21 will not let you preach the tank as a second Christ. It will also not let you preach the figure as an empty gesture you may skip as if the resurrection asked for no answer of conscience.

Saved by water in Noah’s day is the type. Eight souls. The ark. The water. The like figure. Baptism now saves — and the verse immediately tells you how it does not save, and how it does. Not filth of the flesh. Answer of a good conscience. By the resurrection. If you stop at “baptism doth also now save us” and never read the parenthesis, you have not heard the verse. If you read only the parenthesis and throw away the figure, you have not heard it either.

Lesson 3-09 will set the cross, not water, as power. Lesson 3-10 will hold Galatians 3:26 with 3:27. This lesson answers the question the leaflet printed. Is it the water that saves us, or the thing that it is a figure of? The thing it figures. Faith in the death, burial, and resurrection of Christ. The water remains the figure after one is saved.

Longsuffering waited in the days of Noah while the ark was a preparing. Few — eight souls — were saved by water. The like figure. Baptism doth also now save us — and the verse will not let that clause stand alone. Not the putting away of the filth of the flesh. The answer of a good conscience toward God. By the resurrection of Jesus Christ. If you preach the water as a second saviour, you have contradicted the parenthesis. If you preach the figure as nothing, you have contradicted “doth also now save us” as the verse explains it.

A good conscience toward God is not a mood at a tank. It is the answer that belongs to those who have already been baptized into Christ. The resurrection is the power named in the verse. Course 5 will open resurrection as its own principle. This lesson will not steal that stone. It will also not let 1 Peter 3:21 be used as if the tank raised Christ.

Is it the water that saves us, or the thing that it is a figure or symbol of? The leaflet asks. The verse answers. Faith in the death, burial, and resurrection of Christ saves the soul, not the sign. Eight souls. The ark. The like figure. Write the verse. Write the answer. Do not invent a third option. Do not invent a fourth.

Labour
The Walk — one tight page. Write 1 Peter 3:21. Answer the question from the verse: is it the water that saves us, or the thing that it is a figure of? Word drill: like figure / filth of the flesh / good conscience / resurrection.

Intensive — three pages on the same cluster. Page 1: write 1 Peter 3:20-21 in full; reason Noah, eight souls, like figure, the parenthesis, by the resurrection. Page 2: answer the source question; refuse the third option (water as second saviour) and the fourth (figure as nothing). Page 3: write the sentence you will not preach if the verse has spoken. Same doctrine.

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
    75,
    `Central principle
The preaching of the cross, not water baptism, is God’s power to save. Christ sent Paul not to baptize, but to preach the gospel.

Key Scripture
1 Corinthians 1:17-18, 24.

Cluster
E4. 1 Corinthians 1:17-24.

Read
Textbook Chapter 4, section IX.

Teaching
Christ sent me not to baptize, but to preach the gospel: not with wisdom of words, lest the cross of Christ should be made of none effect. The preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God. Unto them which are called, Christ the power of God, and the wisdom of God.

1 Corinthians 1:17-24. For Christ sent me not to baptize, but to preach the gospel: not with wisdom of words, lest the cross of Christ should be made of none effect. For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God. For it is written, I will destroy the wisdom of the wise, and will bring to nothing the understanding of the prudent. Where is the wise? where is the scribe? where is the disputer of this world? hath not God made foolish the wisdom of this world? For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the foolishness of preaching to save them that believe. For the Jews require a sign, and the Greeks seek after wisdom: But we preach Christ crucified, unto the Jews a stumblingblock, and unto the Greeks foolishness; But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God.

Water baptism does not save the soul from sin. It is a symbol significant only for those who have received Christ. Paul was not sent to make the tank the mission. He was sent to preach the gospel. If the tank is the mission, the cross is made of none effect in the preaching, whatever water you still use.

The power is the preaching of the cross — unto us which are saved. The power is Christ — unto them which are called. Jews require a sign. Greeks seek wisdom. We preach Christ crucified. Water is not that preaching. Water follows those who have received Him. Do not invert the order to gather a crowd that has never heard the cross.

Wisdom of words can make the cross of none effect as surely as a tank-mission can. This school will not trade the graphē for a cleverer sentence. It will also not trade the cross for a wetter one. Foolishness of preaching. Them that believe. That is how it pleased God to save.

Lesson 3-07 kept the sign. This lesson keeps the power. Both stand. The minister still baptizes after one is saved. Paul still says he was not sent to baptize but to preach. Those are not two religions. One man can preach the cross and baptize the saved without making water the power. What you must not say again is that water is the power of God to save.

I will destroy the wisdom of the wise. Where is the scribe? Where is the disputer of this world? The world by wisdom knew not God. It pleased God by the foolishness of preaching to save them that believe. Jews require a sign — do not give them the tank as that sign. Greeks seek wisdom — do not give them a cleverer baptism. We preach Christ crucified. Stumblingblock. Foolishness. Unto the called: Christ the power of God, and the wisdom of God. Water baptism is a symbol significant only for those who have received Christ. The mission is the gospel.

Lest the cross of Christ should be made of none effect — that is why Paul was not sent to baptize as his mission. The tank may still follow the saved. The tank may not become the power. Unto us which are saved the preaching of the cross is the power of God. Keep the sign. Keep the power. Do not invert them.

Labour
The Walk — one tight page. Write 1 Corinthians 1:17-18. Then write one sentence you will not say again if the cross is the power and water is the sign. Word drill: not to baptize / preach the gospel / cross / power of God.

Intensive — three pages on the same cluster. Page 1: write 1 Corinthians 1:17-24 in full; mark sent, baptize, gospel, cross, foolishness, saved, called, Christ the power. Page 2: why a tank-mission makes the cross of none effect; why refusing the sign is not this text’s charge. Page 3: write the mission-sentence you will keep and the mission-sentence you will bury. Same doctrine.

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
    75,
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

Galatians 3:26-27. For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.

The leaflet’s definitive line: faith in Christ Jesus saves the soul, not water baptism. 3:26 is the verse it prints for that line. 3:27 is baptism into Christ, not the font as the saviour. Hold both verses in one paragraph a babe can follow.

If you read 3:26 and throw away 3:27, you have faith with no putting-on. If you read 3:27 and throw away 3:26, you have a baptism that is no longer by faith. They are one life. Course 2 already forbade two gospels. Do not make two here.

Children of God — that is the name Course 2 taught. By faith in Christ Jesus — pistis toward God, credence, not a mood. Baptized into Christ — baptism 1, the one baptism that saves the soul. Put on Christ — whelmed; not a coat at the door. The font is not in this paragraph as the saviour. The font remains the figure after one is saved. 1 Corinthians 1:17-24 has already named the cross as power. 1 Peter 3:21 has already asked the question. This lesson locks the two Galatians verses so that neither faith nor putting-on is orphaned.

Ye are all. As many of you as. The “all” of 3:26 and the “as many” of 3:27 are not two classes — the faith-children over here, the baptized-into-Christ over there. The leaflet reads them as one life. Teach them as one paragraph. A babe can follow a paragraph. A babe cannot follow a system that uses 3:27 to cancel 3:26, or 3:26 to cancel 3:27.

What you must not let 3:27 mean if 3:26 is true: that water is the saviour of the soul. What you must not let 3:26 mean if 3:27 is true: that faith is a bare credit that never puts Him on. Write the paragraph. Then write the refusal.

Definitively, faith in Christ Jesus saves the soul, not water baptism. That is the leaflet’s line, and 3:26 is the verse it prints for that line. 1 Corinthians 1:17-24 has already named the cross as power. 1 Peter 3:21 has already refused the filth of the flesh as the saving. This lesson is the lock: children by faith; baptized into Christ; put on Christ. One paragraph. One life.

Course 2 forbade two gospels. Faith without putting-on is not this cluster. 3:27 as a font that saves is not this cluster. Ye are all the children of God by faith in Christ Jesus — that name is not earned at a tank. As many of you as have been baptized into Christ have put on Christ — that putting-on is not optional decoration on a faith that never received Him. Hold both. A babe can follow if you will not split them.

E4 with E2: the cross is power; children by faith; baptized into Christ. The font is not the saviour of 3:27. The figure remains after one is saved. Write one paragraph a babe can follow. Then write what you must not let 3:27 mean if 3:26 is true. Then write what you must not let 3:26 mean if 3:27 is true.

Labour
The Walk — one tight page. Hold Galatians 3:26 and 3:27 in one paragraph a babe can follow. Then write what you must not let 3:27 mean if 3:26 is true. Word drill: children by faith / baptized into Christ / put on Christ — one life.

Intensive — three pages on the same cluster. Page 1: write Galatians 3:26-27 and 1 Corinthians 1:17-18; show the definitive line and the putting-on in one file. Page 2: the two errors — faith with no putting-on; baptism no longer by faith — write both as sentences you will not preach. Page 3: one paragraph a babe can follow, then the refusal of water as the saviour of 3:27. Same doctrine. Do not make two gospels to fill a page.

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
    75,
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

Galatians 4:6-7. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.

Matthew 3:11. I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire.

The Holy Spirit witnesses (informant) a Father–Son relationship (ensuant) as a consequence of sonship. Heir of God. Not slaves. This witness stays. With it this school also teaches the enduement of power for service — not instead of the witness. Christ is the agent (Matthew 3:11; John 1:31-33). The sequence with water is not one locked order: before water (Acts 10:44-48) or after it (Acts 1:4-8; 2:1-11; 8:12-21; 19:1-7).

Prerequisite: becoming God’s son. Course 1 and Course 2 are not optional prefaces. The Spirit is not sent into a man who has not been made a son. Because ye are sons — the sending follows the sonship. He does not invent the son. He cries Abba because you are a son. A second blessing that replaces baptism into Christ is not this teaching. A Spirit given without new birth is not this teaching.

Informant and ensuant are the leaflet’s words. The Spirit witnesses; the Father–Son relationship ensues as consequence of sonship. Heir of God through Christ. Course 2 already asked who is heir and what heir means. This lesson will not reopen that as a new gospel. It will not let you seek the Spirit as if He could skip the son.

Enduement of power for service is taught with the witness, not instead of it. Acts will show power, tongues, prophecy, boldness. Galatians 4:6-7 will still be the witness of sonship. Hold both. Christ baptizes in the Holy Spirit. Course 4 will show hands in Samaria, on Saul, at Ephesus. Those accounts do not cancel the agent named here.

Because ye are sons — the cause sits first. God hath sent forth the Spirit of His Son into your hearts. Crying, Abba, Father. No more a servant, but a son. If a son, then an heir of God through Christ. The Spirit does not create a hireling and then promote him. He cries Abba because you are a son. Hereditary witness — the leaflet’s word — is not a second nature you buy. It is the witness that belongs to the son Course 2 named.

Acts 10:44-48 already forbade a locked order: the Holy Ghost fell while Peter yet spake; then water was not forbidden. Acts 8 and 19 will show after water. Do not make one sequence a law. Do not make the witness a replacement for baptism into Christ. Do not make enduement a replacement for the witness. Prerequisite: new birth. Who is the Spirit sent into? Sons.

John 1:31-33 already named the agent: the same is He which baptizeth with the Holy Ghost. Course 4 will show hands in certain accounts. Hands do not cancel that agent. The Spirit is not sent into a man who has not been made a son. Course 1 and Course 2 are not optional prefaces. Because ye are sons — then the sending. Abba. Heir. Not a servant.

Labour
The Walk — one tight page. Who is the Spirit sent into, according to Galatians 4:6? Write the verse. Then write what “prerequisite” forbids you to seek as if it could skip the son. Word drill: informant / ensuant / Abba / heir / not a servant.

Intensive — three pages on the same cluster. Page 1: write Galatians 4:6-7 and Matthew 3:11 in full; mark because ye are sons, sent, crying Abba, no more a servant, heir, Christ the baptizer. Page 2: witness and enduement — with, not instead; before water or after it, with Acts 10:44-48 named. Page 3: prerequisite new birth — write the hunt you will stop if the Spirit is not sent into a man who is not a son. Same doctrine.

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
    75,
    `Central principle
Rivers of living water. The Spirit not by measure unto you. Hold John 3:34 in its sentence, and hold the source’s use.

Key Scripture
John 7:38-39; John 3:34.

Cluster
E5.

Read
Textbook Chapter 4, section XII.

Teaching
He that believeth on Me, as the scripture hath said, out of his belly shall flow rivers of living water. This spake He of the Spirit. John 3:34 — God giveth not the Spirit by measure unto Him. The verse, in its own sentence, is unto Him — Christ. The leaflet applies “the measure Christ experienced” and says: the Spirit not by measure unto you.

John 7:38-39. He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water. (But this spake he of the Spirit, which they that believe on him should receive: for the Holy Ghost was not yet given; because that Jesus was not yet glorified.)

John 3:34. For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him.

Hold the verse. Hold the source’s use. Do not empty John 3:34 to protect a stingy second-blessing slogan. Do not invent a measure the source refuses. Do not invent a title the verse does not grant. The sentence is unto Him. The leaflet’s application is unto you: the measure Christ experienced; the Spirit not by measure unto you.

Rivers, not a cup you earn at a second altar. They that believe on Him should receive. The Holy Ghost was not yet given, because Jesus was not yet glorified. The giving follows His glorifying. The rivers follow believing. Prerequisite remains: becoming God’s son. Without measure is not a Spirit poured on a man who has not been made a son. It is the opposite of a stingy slogan that ignores the sonship-prerequisite and the source’s line.

He whom God hath sent speaketh the words of God. The Christ of John 3:34 is the speaker of God’s words, and the Spirit is not given to Him by measure. This school will not pretend the verse was first written about you. It will also not refuse the leaflet’s application once the verse has been held. Unto Him in the sentence. Unto you in the source’s use. Both. Not a swap that erases the sentence. Not a caution that erases the source.

Lesson 3-13 will open fullness: complete in Him; the measure of the stature of the fullness of Christ. This lesson only forbids measure-talk that the cluster will not carry. Rivers. Not by measure. Believeth. Should receive.

Out of his belly shall flow rivers of living water. As the scripture hath said. They that believe on Him should receive. Not yet given because Jesus was not yet glorified. The giving is not a stingy second blessing that ignores the son. It is rivers. The measure Christ experienced — the leaflet’s phrase — is how the source carries “not by measure unto you.” Do not invent a title John 3:34 does not grant. Do not empty the verse to protect a slogan that rations the Spirit to those who climb a second altar. Hold the sentence. Hold the source’s use.

Unto Him — Christ — in the sentence of John 3:34. For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him. The leaflet applies that measure unto you. Both must be held. Prerequisite remains new birth. Rivers follow believing. Fullness waits in the next lesson. This lesson forbids measure-talk the cluster will not carry.

Do not empty John 3:34 to protect a stingy second-blessing slogan. Do not invent a measure the source refuses. Do not invent a title the verse does not grant. They that believe on Him should receive. The Holy Ghost was not yet given, because that Jesus was not yet glorified. Rivers. Not a cup. Not by measure unto you — after the sentence has been held as unto Him.

Labour
The Walk — one tight page. Write John 7:38-39 and John 3:34. Then write what “not by measure unto you” forces, without inventing a title the verse does not grant. Word drill: unto Him in the sentence; unto you in the source’s use.

Intensive — three pages on the same cluster. Page 1: write John 7:38-39 and John 3:34 in full; mark believeth, belly, rivers, Spirit, not yet given, glorified, unto him. Page 2: hold the verse as unto Him; hold the leaflet’s application as the measure Christ experienced — not by measure unto you. Page 3: refuse the stingy second-blessing slogan and refuse a title the verse does not grant. Same doctrine.

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
    75,
    `Central principle
All fullness dwells in Him. Ye are complete in Him. Unto the measure of the stature of the fullness of Christ.

Key Scripture
Colossians 1:19; Colossians 2:9-10; Ephesians 4:13.

Cluster
E5. Colossians 1:19; 2:9-10; 1 Corinthians 1:24; 12:27; Galatians 2:20; 2 Corinthians 2:14-16; Ephesians 4:13.

Read
Textbook Chapter 4, section XIII.

Teaching
It pleased the Father that in Him should all fullness dwell. In Him dwelleth all the fullness of the Godhead bodily. Ye are complete in Him. Fullness is not a slogan for a meeting. It is the son, whelmed, witnessing, complete.

Colossians 1:19. For it pleased the Father that in him should all fulness dwell.

Colossians 2:9-10. For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him, which is the head of all principality and power.

1 Corinthians 1:24. But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God.

1 Corinthians 12:27. Now ye are the body of Christ, and members in particular.

Galatians 2:20. I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.

2 Corinthians 2:14-16. Now thanks be unto God, which always causeth us to triumph in Christ, and maketh manifest the savour of his knowledge by us in every place. For we are unto God a sweet savour of Christ, in them that are saved, and in them that perish: To the one we are the savour of death unto death; and to the other the savour of life unto life. And who is sufficient for these things?

Ephesians 4:13. Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ.

What is already true in Him: all fullness dwells; fullness of the Godhead bodily; ye are complete in Him; ye are the body of Christ; Christ liveth in me; Christ the power and the wisdom of God. What you are still coming unto: the unity of the faith, the knowledge of the Son of God, a perfect man, the measure of the stature of the fullness of Christ. Hold both. Do not chase a fullness as if He were empty. Do not pretend Ephesians 4:13 has already been finished because Colossians 2:10 is true.

The savour of Christ — to one death, to one life. Triumph in Christ. Manifest the savour of His knowledge. This is not a meeting-cry. It is the son in the world as the leaflet clusters him under fullness. Crucified with Christ is baptism 1 still speaking. Complete in Him is not a second saviour. It is the same Christ.

Without measure and fullness sit together. Lesson 3-12 forbade stingy measure-talk. This lesson forbids emptiness-talk. You are complete in Him. You are still coming unto the measure of the stature of His fullness. A babe can hold both if you will not flatten one to save a slogan.

It pleased the Father. All fullness dwells in Him. Godhead bodily. Head of all principality and power. Ye are complete in Him — not complete in a meeting, not complete in a second slogan. Members in particular. I live; yet not I; Christ liveth in me; the life I now live in the flesh I live by the faith of the Son of God. Always causeth us to triumph in Christ. Savour of His knowledge in every place. To the one, death; to the other, life. Who is sufficient for these things?

Till we all come — unity of the faith, knowledge of the Son of God, a perfect man. That “till” does not undo “ye are complete in Him.” It names what the body is still coming unto. Fullness is the son, whelmed, witnessing, complete. Not a slogan for a meeting.

Labour
The Walk — one tight page. Write Colossians 2:9-10 and Ephesians 4:13. What is already true in Him, and what are you still coming unto? Hold both. Word drill: fullness / complete / stature / body / Christ liveth in me.

Intensive — three pages on the same cluster. Page 1: write the full E5 fullness file in KJV as printed above. Page 2: already true in Him — complete, body, crucified, savour, power and wisdom. Page 3: still coming unto — unity, knowledge, perfect man, measure of the stature; write the chase you will stop if He is not empty. Same doctrine.

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
    75,
    `Central principle
Not slaves. Not timidity. God hath not given us the spirit of fear, but of power, and of love, and of a sound mind. It is not possible for you to fear. You are the fear and dread.

Key Scripture
Galatians 4:6-7; 2 Timothy 1:7; Genesis 9:2; Deuteronomy 11:25.

Cluster
E6. Also Romans 8:17; Genesis 1:26-28; Psalm 139:14.

Read
Textbook Chapter 4, section XIV.

Teaching
Because ye are sons… no more a servant, but a son; if a son, then an heir of God through Christ. God hath not given us the spirit of fear; but of power, and of love, and of a sound mind. You rather are the fear and dread of the world: thieves and all wickedness alike, demons and Satan inclusive.

Galatians 4:6-7. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.

2 Timothy 1:7. For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.

Genesis 9:2. And the fear of you and the dread of you shall be upon every beast of the earth, and upon every fowl of the air, upon all that moveth upon the earth, and upon all the fishes of the sea; into your hand are they delivered.

Deuteronomy 11:25. There shall no man be able to stand before you: for the LORD your God shall lay the fear of you and the dread of you upon all the land that ye shall tread upon, as he hath said unto you.

Romans 8:17. And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.

Genesis 1:26-28. And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them. And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.

Psalm 139:14. I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.

Heir. Image. Fearfully and wonderfully made. This school will not soften that charge for babes. We do not teach James 2:9 as this cluster. The printed citation was an error. Fear and dread are Genesis 9:2 and Deuteronomy 11:25. Further reading when the volume is in your hand: Why We’re Beyond — its own book, not Fearfully Made.

Do not turn the charge into swagger without the cluster. Power, and love, and a sound mind stand in the same breath. A man who swaggers without Abba, without heir, without image, without 2 Timothy 1:7, has not heard the charge. A man who softens the charge into timidity God did not give has not heard it either. It is not possible for you to fear — as the leaflet states it. You are the fear and dread.

The LORD your God shall lay the fear of you and the dread of you. Into your hand are they delivered. Dominion was spoken in Genesis 1:26-28. Course 2 already forbade a safer verse in the place of that making. This lesson will not put a safer verse in the place of Genesis 9:2 and Deuteronomy 11:25.

Labour
The Walk — one tight page. Teach 2 Timothy 1:7 with Genesis 9:2 and Deuteronomy 11:25. Write the three texts. Do not submit swagger, and do not submit a softer sentence the owner forbade. Word drill: not slaves / not the spirit of fear / you are the fear and dread.

Intensive — three pages on the same cluster. Page 1: write the full E6 file in KJV as printed above. Page 2: heir, image, fearfully made — with Galatians 4:6-7 and Romans 8:17; Why We’re Beyond is its own book, not Fearfully Made; James 2:9 is not this cluster. Page 3: power, love, and a sound mind in the same breath as the fear and dread — write the swagger you will refuse and the softening you will refuse. Same doctrine. Do not soften. Do not swagger without the cluster.

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
    75,
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

John 16:13-15. Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come. He shall glorify me: for he shall receive of mine, and shall shew it unto you. All things that the Father hath are mine: therefore said I, that he shall take of mine, and shall shew it unto you.

Genesis 1:26-28. And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them. And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.

Anangellō: to announce in detail — declare, rehearse, report, show, speak, tell. Mine: the express image of God, announced unto you — express image and likeness of Me (Genesis 1:26-28). The Spirit does not invent another image. He shews what Course 2 already named. He glorifies the Son. He does not speak of Himself.

A private revelation that never returns to Genesis 1:26-28 is not this shewing. The Spirit of truth guides into all truth. Whatsoever He shall hear, that shall He speak. He will shew you things to come. He shall glorify Me. He shall receive of Mine. All things the Father hath are Mine; therefore He takes of Mine and shews it. The leaflet ties Mine to the express image and likeness. Write the likeness from the words. Do not invent a title the cluster does not grant.

Further reading when the volume is in your hand: Spirit Witness — its own book, not a volume of Presence of Sons 1–4. If a catalogue once set the titles near each other, that proximity is bibliographic, not a series assignment. Completing this course does not require finishing every page of the library. Directed sections when the volumes are in your hand.

Course 2 taught image and likeness as written. This lesson will not hedge that making. The Spirit announces it in detail. He rehearses it. He reports it. He shews it. Man made in the image, after the likeness, given dominion — that is Mine as this school ties John 16 to Genesis 1. The Spirit glorifies the Son who is the image; He shews you that you were made after that likeness. He does not speak of Himself as a rival image.

Whatsoever He shall hear, that shall He speak. Things to come. All things the Father hath are Mine; therefore He takes of Mine and shews it. The leaflet’s anangellō is not a private language. Declare. Rehearse. Report. Show. Speak. Tell. In detail. If what you call “the Spirit shewed me” never returns to image, likeness, and dominion, it is not this Mine. Let us make man. So God created. Male and female. Blessed them. Be fruitful. Multiply. Replenish. Subdue. Have dominion. Write the likeness from those words. Do not invent a safer verse.

Labour
The Walk — one tight page. What is “Mine” in John 16:14-15 as this school ties it to Genesis 1:26-28? Write both. Write the likeness from the words. Word drill: anangellō — announce in detail; declare, rehearse, report, show, speak, tell.

Intensive — three pages on the same cluster. Page 1: write John 16:13-15 and Genesis 1:26-28 in full; mark guide, not of Himself, glorify, Mine, shew, image, likeness, dominion. Page 2: anangellō as the leaflet uses it; Mine as express image — not a private revelation that never returns to Genesis 1:26-28. Page 3: Spirit Witness is its own book, not Presence of Sons; write what you will not let a catalogue proximity become. Same doctrine.

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
    90,
    `Central principle
The third stone is laid when a man can name the three essential baptisms, keep “one baptism” as the only one that saves the soul, keep water as the figure after salvation, and keep the Spirit as witness of the son — without measure, not a slave.

Key Scripture
Hebrews 6:2; Ephesians 4:5; 1 Peter 3:21; Galatians 3:26-27; Galatians 4:6-7; John 16:13-14.

Cluster
All of Course 3. Textbook Chapter 4.

Read
Chapter 4, section XVI. Directed reading when the volumes are in your hand — assigned sections only, not a second course: Spirit Witness; Why We’re Beyond.

Teaching
This lesson is the examination of the principle, not a new doctrine. The cluster of the year on this stone is the texts already opened. Write them again.

Hebrews 6:2. Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.

Ephesians 4:5. One Lord, one faith, one baptism.

1 Peter 3:21. The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ.

Galatians 3:26-27. For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.

Galatians 4:6-7. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father. Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.

John 16:13-14. Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come. He shall glorify me: for he shall receive of mine, and shall shew it unto you.

You should now be able to teach, from Scripture:

1. Baptismos as washing; Hebrews 6:2 as baptisms — the plural. The Word as agency of new birth (Ephesians 5:26; 1 Peter 1:23; John 3:5).
2. Seven in Scripture; three for believers, in order: into Christ, water after, Spirit. Three agents. Baptizō from baptō, regardless of the element.
3. Into Christ — one baptism; the only one that saves the soul. Whelmed; put on Christ; Romans 6; Colossians 2; 1 Corinthians 12:13. The Spirit the agent of this one.
4. Water after one is saved — sign, not object. 1 Peter 3:21 — is it the water, or what it figures? The cross, not water, is power (1 Corinthians 1:17-24). Galatians 3:26 with 3:27 in one paragraph.
5. Spirit as witness of sonship; prerequisite new birth; enduement with the witness, not instead of it. Before water or after it. Christ the agent.
6. Without measure; unto Him in the sentence; unto you in the source’s use. Fullness; complete in Him; still coming unto the stature.
7. Not slaves; power, love, sound mind; you are the fear and dread (Genesis 9:2; Deuteronomy 11:25). Not James 2:9. Anangellō; Mine; Genesis 1:26-28.

Companions are not a seventh course. Spirit Witness is not a volume of Presence of Sons. Why We’re Beyond is not Fearfully Made. The next principle is laying on of hands. It is resultant. It is not a substitute for these three stones. It does not cancel Christ as Spirit-baptizer.

Q20–Q25 are the examination spine. Name the three essential; do not invent the four; why “one baptism” does not cancel water and Spirit. Is it the water that saves, or what it figures — 1 Peter 3:21 with 1 Corinthians 1:17-18. Hold Galatians 3:26 with 3:27. Who is the Spirit sent into (Galatians 4:6)? Teach 2 Timothy 1:7 with Genesis 9:2 and Deuteronomy 11:25 — not James 2:9, not swagger without the cluster, not a softer sentence. What is Mine — John 16:14-15 with Genesis 1:26-28. Do not submit a feeling in the place of the cluster.

Baptizō from baptō remains: dip; overwhelm with suffering; bury into — regardless of the element. Three agents remain: Spirit into Christ; Christ in the Spirit; minister in water. Unto Him in John 3:34’s sentence; the Spirit not by measure unto you in the source’s use. Directed sections of the companions when the volumes are in your hand. Completing this course does not require finishing every page of the library.

Labour
The Walk — thirteen tight paragraphs: one on each of the thirteen heads named in the thin charge of this course, using the verses above. Same doctrine. Not thirteen new teachings. Then answer Q20–Q25 from the cluster, not from a heading.

Intensive — a full page on each of the thirteen heads. Same cluster. Same doctrine. Do not invent a fourteenth baptism to fill the hours. Then write the examination answers from the Charge without a feeling in the place of the cluster. Page the three agents and the seven; page the 1 Peter 3:21 question; page Genesis 9:2 with Deuteronomy 11:25. Same doctrine.

Distinction
Completion of activities vs mastery. Directed companion sections vs treating those books as this course.

Charge
Name the three essential. Why does “one baptism” not cancel water and Spirit? Is it the water that saves, or what it figures? Hold Galatians 3:26 with 3:27. Who is the Spirit sent into? Teach 2 Timothy 1:7 with Genesis 9:2 and Deuteronomy 11:25. What is Mine? Do not submit a feeling in the place of the cluster.`,
  ),
];
