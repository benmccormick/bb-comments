(function() {
    //Quick cheat to prefill comments with a random famous quote

    var quotes;

    $(document).on('keydown', function(e) {
        //ctrl + d will fill with a famous quote
        if(e.ctrlKey && e.which === 68) {
            var quote = _.sample(quotes);
            $('#comment-content').val(quote.quote);
            $('#comment-author').val(quote.author);
        }

    });


    quotes = [
        {
            "quote": "The way something looks is the last thing we figure out.",
            "author": "Alexander Isley"
        },
        {
            "quote": "Always bear in mind that your own resolution to succeed is more important than any one thing.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "Force is all-conquering, but its victories are short-lived.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "You can fool some of the people all of the time, and all of the people some of the time, but you can not fool all of the people all of the time.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "A fanatic is one who can't change his mind and won't change the subject.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "All great things are simple, and many can be expressed in single words: freedom, justice, honor, duty, mercy, hope.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Although prepared for martyrdom, I preferred that it be postponed.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "An appeaser is one who feeds a crocodile, hoping it will eat him last.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Broadly speaking, the short words are the best, and the old words best of all.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "From now on, ending a sentence with a preposition is something up with which I will not put.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "He has all the virtues I dislike and none of the vices I admire.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "History will be kind to me for I intend to write it.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "However beautiful the strategy, you should occasionally look at the results.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "I have always felt that a politician is to be judged by the animosities he excites among his opponents.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "I like pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "It has been said that democracy is the worst form of government except all the others that have been tried.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "It is a mistake to try to look too far ahead. The chain of destiny can only be grasped one link at a time.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "It's not enough that we do our best; sometimes we have to do what's required.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing ever happened.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Never hold discussions with the monkey when the organ grinder is in the room.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Personally I'm always ready to learn, although I do not always like being taught.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Success is the ability to go from one failure to another with no loss of enthusiasm.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "The price of greatness is responsibility.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "There are a terrible lot of lies going around the world, and the worst of it is half of them are true.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "We make a living by what we get, we make a life by what we give.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "When I am abroad, I always make it a rule never to criticize or attack the government of my own country. I make up for lost time when I come home.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "When the eagles are silent, the parrots begin to jabber.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "A banker is a fellow who lends you his umbrella when the sun is shining, but wants it back the minute it begins to rain.",
            "author": "Mark Twain"
        },
        {
            "quote": "A man cannot be comfortable without his own approval.",
            "author": "Mark Twain"
        },
        {
            "quote": "Always acknowledge a fault. This will throw those in authority off their guard and give you an opportunity to commit more.",
            "author": "Mark Twain"
        },
        {
            "quote": "Always do right. This will gratify some people and astonish the rest.",
            "author": "Mark Twain"
        },
        {
            "quote": "An Englishman is a person who does things because they have been done before. An American is a person who does things because they haven't been done before.",
            "author": "Mark Twain"
        },
        {
            "quote": "Barring that natural expression of villainy which we all have, the man looked honest enough.",
            "author": "Mark Twain"
        },
        {
            "quote": "Be careful about reading health books. You may die of a misprint.",
            "author": "Mark Twain"
        },
        {
            "quote": "By trying we can easily learn to endure adversity - another man's I mean.",
            "author": "Mark Twain"
        },
        {
            "quote": "Clothes make the man. Naked people have little or no influence on society.",
            "author": "Mark Twain"
        },
        {
            "quote": "Courage is resistance to fear, mastery of fear - not absence of fear.",
            "author": "Mark Twain"
        },
        {
            "quote": "Do something every day that you don't want to do; this is the golden rule for acquiring the habit of doing your duty without pain.",
            "author": "Mark Twain"
        },
        {
            "quote": "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",
            "author": "Mark Twain"
        },
        {
            "quote": "Don't part with your illusions. When they are gone you may still exist, but you have ceased to live.",
            "author": "Mark Twain"
        },
        {
            "quote": "Education: that which reveals to the wise, and conceals from the stupid, the vast limits of their knowledge.",
            "author": "Mark Twain"
        },
        {
            "quote": "Facts are stubborn things, but statistics are more pliable.",
            "author": "Mark Twain"
        },
        {
            "quote": "Fiction is obliged to stick to possibilities. Truth isn't.",
            "author": "Mark Twain"
        },
        {
            "quote": "Get your facts first, and then you can distort them as much as you please.",
            "author": "Mark Twain"
        },
        {
            "quote": "Grief can take care of itself, but to get the full value of a joy you must have somebody to divide it with.",
            "author": "Mark Twain"
        },
        {
            "quote": "Habit is habit and not to be flung out of the window by any man, but coaxed downstairs a step at a time.",
            "author": "Mark Twain"
        },
        {
            "quote": "Honesty is the best policy - when there is money in it.",
            "author": "Mark Twain"
        },
        {
            "quote": "Humor is the great thing, the saving thing. The minute it crops up, all our irritations and resentments slip away and a sunny spirit takes their place.",
            "author": "Mark Twain"
        },
        {
            "quote": "I am opposed to millionaires, but it would be dangerous to offer me the position.",
            "author": "Mark Twain"
        },
        {
            "quote": "I didn't attend the funeral, but I sent a nice letter saying that I approved of it.",
            "author": "Mark Twain"
        },
        {
            "quote": "I don't give a damn for a man that can only spell a word one way.",
            "author": "Mark Twain"
        },
        {
            "quote": "I have a higher and grander standard of principle than George Washington. He could not lie; I can, but I won't.",
            "author": "Mark Twain"
        },
        {
            "quote": "I have been through some terrible things in my life, some of which actually happened.",
            "author": "Mark Twain"
        },
        {
            "quote": "I have never let my schooling interfere with my education.",
            "author": "Mark Twain"
        },
        {
            "quote": "I have never taken any exercise except sleeping and resting.",
            "author": "Mark Twain"
        },
        {
            "quote": "I thoroughly disapprove of duels. If a man should challenge me, I would take him kindly and forgivingly by the hand and lead him to a quiet place and kill him.",
            "author": "Mark Twain"
        },
        {
            "quote": "What you said hurt me very much. I cried all the way to the bank.",
            "author": "Liberace"
        },
        {
            "quote": "Sometimes I need what only you can provide - your absence.",
            "author": "Ashleigh Brilliant"
        },
        {
            "quote": "My play was a complete success. The audience was a failure.",
            "author": "Ashleigh Brilliant"
        },
        {
            "quote": "If you don't like my opinion of you, you can always improve.",
            "author": "Ashleigh Brilliant"
        },
        {
            "quote": "We've been through so much together, and most of it was your fault.",
            "author": "Ashleigh Brilliant"
        },
        {
            "quote": "He's a nice guy, but he played too much football with his helmet off.",
            "author": "Lyndon B. Johnson"
        },
        {
            "quote": "Why are we honoring this man? Have we run out of human beings?",
            "author": "Milton Berle"
        },
        {
            "quote": "I don't care to belong to a club that accepts people like me as members.",
            "author": "Groucho Marx"
        },
        {
            "quote": "I'll bet your father spent the first year of your life throwing rocks at the stork.",
            "author": "Irving Brecher"
        },
        {
            "quote": "When a writer becomes a reader of his or her own work, a lot can go wrong. It's like do-it-yourself dentistry.",
            "author": "William Collins"
        },
        {
            "quote": "You're a good example of why some animals eat their young.",
            "author": "Jim Samuels"
        },
        {
            "quote": "You look into his eyes, and you get the feeling someone else is driving.",
            "author": "David Letterman"
        },
        {
            "quote": "You've got the brain of a four-year-old boy, and I bet he was glad to get rid of it.",
            "author": "Groucho Marx"
        },
        {
            "quote": "You're a parasite for sore eyes.",
            "author": "Gregory Ratoff"
        },
        {
            "quote": "Pushing forty? She's hanging on for dear life.",
            "author": "Ivy Compton-Burnett"
        },
        {
            "quote": "I feel so miserable without you; it's almost like having you here.",
            "author": "Stephen Bishop"
        },
        {
            "quote": "I married your mother because I wanted children; imagine my disappointment when you came along.",
            "author": "Groucho Marx"
        },
        {
            "quote": "I have never killed a man, but I have read many obituaries with great pleasure.",
            "author": "Clarence Darrow"
        },
        {
            "quote": "I like long walks, especially when they are taken by people who annoy me.",
            "author": "Fred Allen"
        },
        {
            "quote": "I thought men like that shot themselves.",
            "author": "King George V"
        },
        {
            "quote": "Remember men, we're fighting for this woman's honor; which is probably more than she ever did.",
            "author": "Groucho Marx"
        },
        {
            "quote": "He's completely unspoiled by failure.",
            "author": "Noel Coward"
        },
        {
            "quote": "He's liked, but he's not well liked.",
            "author": "Arthur Miller"
        },
        {
            "quote": "I can't believe that out of 100,000 sperm, you were the quickest.",
            "author": "Steven Pearl"
        },
        {
            "quote": "Every time I look at you I get a fierce desire to be lonesome.",
            "author": "Oscar Levant"
        },
        {
            "quote": "Fine words! I wonder where you stole them.",
            "author": "Jonathan Swift"
        },
        {
            "quote": "Some cause happiness wherever they go; others whenever they go.",
            "author": "Oscar Wilde"
        },
        {
            "quote": "He was one of the nicest old ladies I ever met.",
            "author": "William Faulkner"
        },
        {
            "quote": "He was so crooked; you could have used his spine for a safety-pin.",
            "author": "Dorothy L. Sayers"
        },
        {
            "quote": "He was so narrow-minded he could see through a keyhole with both eyes.",
            "author": "Molly Ivins"
        },
        {
            "quote": "He is a fine friend. He stabs you in the front.",
            "author": "Leonard Louis Levinson"
        },
        {
            "quote": "He is a self-made man and worships his creator.",
            "author": "John Bright"
        },
        {
            "quote": "He is not only dull himself; he is the cause of dullness in others.",
            "author": "Samuel Johnson"
        },
        {
            "quote": "I support and oppose many things, but not strongly enough to pick up a pen.",
            "author": "Bender"
        },
        {
            "quote": "Not so neutral now, are you, Sweden? ",
            "author": "Bender"
        },
        {
            "quote": "Hey. What kind of party is this? There's no booze and only one hooker.",
            "author": "Bender"
        },
        {
            "quote": "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.",
            "author": "Lana Turner"
        },
        {
            "quote": "A two-year-old is kind of like having a blender, but you don't have a top for it.",
            "author": "Jerry Seinfeld"
        },
        {
            "quote": "A word to the wise ain't necessary - it's the stupid ones that need the advice.",
            "author": "Bill Cosby"
        },
        {
            "quote": "All right everyone, line up alphabetically according to your height.",
            "author": "Casey Stengel"
        },
        {
            "quote": "Always end the name of your child with a vowel, so that when you yell the name will carry.",
            "author": "Bill Cosby"
        },
        {
            "quote": "As a child my family's menu consisted of two choices: take it or leave it.",
            "author": "Buddy Hackett"
        },
        {
            "quote": "Because of their size, parents may be difficult to discipline properly.",
            "author": "P. J. O'Rourke"
        },
        {
            "quote": "Behind every great man is a woman rolling her eyes.",
            "author": "Jim Carrey"
        },
        {
            "quote": "A government that robs Peter to pay Paul can always depend on the support of Paul.",
            "author": "George Bernard Shaw "
        },
        {
            "quote": "Between two evils, I always pick the one I never tried before.",
            "author": "Mae West"
        },
        {
            "quote": "Drawing on my fine command of the English language, I said nothing. ",
            "author": "Robert Benchley"
        },
        {
            "quote": "Food, love, career, and mothers, the four major guilt groups. ",
            "author": "Cathy Guisewite "
        },
        {
            "quote": "Happiness is having a large, loving, caring, close-knit family in another city.",
            "author": "George Burns"
        },
        {
            "quote": "He taught me housekeeping; when I divorce I keep the house.",
            "author": "Zsa Zsa Gabor"
        },
        {
            "quote": "Housework can't kill you, but why take a chance?",
            "author": "Phyllis Diller"
        },
        {
            "quote": "How many people here have telekenetic powers? Raise my hand.",
            "author": "Emo Philips"
        },
        {
            "quote": "I always wanted to be somebody, but now I realize I should have been more specific.",
            "author": "Lily Tomlin"
        },
        {
            "quote": "I am the literary equivalent of a Big Mac and Fries.",
            "author": "Stephen King"
        },
        {
            "quote": "I bought some batteries, but they weren't included.",
            "author": "Steven Wright"
        },
        {
            "quote": "I cook with wine, sometimes I even add it to the food.",
            "author": "W. C. Fields"
        },
        {
            "quote": "I distrust camels, and anyone else who can go a week without a drink.",
            "author": "Joe E. Lewis"
        },
        {
            "quote": "I was born in very sorry circumstances. Both of my parents were very sorry.",
            "author": "Norman Wisdom"
        },
        {
            "quote": "I washed a sock. Then I put it in the dryer. When I took it out, it was gone.",
            "author": "Rod Schmidt"
        },
        {
            "quote": "I've never been married, but I tell people I'm divorced so they won't think something's wrong with me.",
            "author": "Elayne Boosler"
        },
        {
            "quote": "Miami Beach is where neon goes to die.",
            "author": "Lenny Bruce"
        },
        {
            "quote": "Money won't buy happiness, but it will pay the salaries of a large research staff to study the problem.",
            "author": "Bill Vaughan"
        },
        {
            "quote": "If two wrongs don't make a right, try three. ",
            "author": "Laurence J. Peter"
        },
        {
            "quote": "It all started when my dog began getting free roll over minutes.",
            "author": "Jay London"
        },
        {
            "quote": "It is a scientific fact that your body will not absorb cholesterol if you take it from another person's plate.",
            "author": "Dave Barry"
        },
        {
            "quote": "It is easy for me to love myself, but for ladies to do it is another question altogether.",
            "author": "Johnny Vegas"
        },
        {
            "quote": "My Father had a profound influence on me. He was a lunatic.",
            "author": "Spike Milligan"
        },
        {
            "quote": "My theory is that all of Scottish cuisine is based on a dare.",
            "author": "Mike Myers"
        },
        {
            "quote": "Recession is when a neighbor loses his job. Depression is when you lose yours.",
            "author": "Ronald Reagan"
        },
        {
            "quote": "The only time a woman really succeeds in changing a man is when he is a baby.",
            "author": "Natalie Wood"
        },
        {
            "quote": "The reason there are two senators for each state is so that one can be the designated driver.",
            "author": "Jay Leno"
        },
        {
            "quote": "There's no better feeling in the world than a warm pizza box on your lap.",
            "author": "Kevin James"
        },
        {
            "quote": "There are only three things women need in life: food, water, and compliments.",
            "author": "Chris Rock"
        },
        {
            "quote": "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
            "author": "Albert Einstein"
        },
        {
            "quote": "When I go to a bar, I don't go looking for a girl who knows the capital of Maine.",
            "author": "David Brenner"
        },
        {
            "quote": "An intelligent man is sometimes forced to be drunk to spend time with his fools.",
            "author": "Ernest Hemingway"
        },
        {
            "quote": "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
            "author": "Ernest Hemingway"
        },
        {
            "quote": "It's not hard to make decisions when you know what your values are.",
            "author": "Roy Disney"
        },
        {
            "quote": "All that is necessary for the triumph of evil is that good men do nothing.",
            "author": "Edmund Burke"
        },
        {
            "quote": "A smile is the shortest distance between two people.",
            "author": "Victor Borge"
        },
        {
            "quote": "At the touch of love, everyone becomes a poet.",
            "author": "Plato"
        },
        {
            "quote": "This has always been a motto of mine: Attempt the impossible in order to improve your work.",
            "author": "Bette Davis"
        },
        {
            "quote": "Life is really simple, but we insist on making it complicated.",
            "author": "Confucius"
        },
        {
            "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            "author": "Aristotle"
        },
        {
            "quote": "Nothing can bring you peace but yourself.",
            "author": "Ralph Waldo Emerson"
        },
        {
            "quote": "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
            "author": "Siddhartha Buddha"
        },
        {
            "quote": "I cannot pretend to feel impartial about colours. I rejoice with the brilliant ones and am genuinely sorry for the poor browns.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "I've had a wonderful evening - but this wasn't it.",
            "author": "Groucho Marx"
        },
        {
            "quote": "She looked as if she had been poured into her clothes and had forgotten to say &quot;when&quot;.",
            "author": "P.G. Wodehouse"
        },
        {
            "quote": "Nancy Astor: &quot;If you were my husband, Winston, I should flavour your coffee with poison&quot;",
            "author": "Winston Churchill: &quot;If I were your husband, madam, I should drink it.&quot;"
        },
        {
            "quote": "Her face was her chaperone.",
            "author": "Rupert Hughes"
        },
        {
            "quote": "I hope they notice the mistletoe tied to my coattails as I leave town.",
            "author": "Abe Lemons"
        },
        {
            "quote": "I am returning this otherwise good typing paper to you because someone has printed gibberish all over it and put your name at the top.",
            "author": "English professor, Ohio University"
        },
        {
            "quote": "The problem with the gene pool is that there's no lifeguard.",
            "author": "David Gerrold"
        },
        {
            "quote": "She has the answer to everything and the solution to nothing.",
            "author": "Oscar Levant"
        },
        {
            "quote": "The only gracious way to accept an insult is to ignore it; if you can't ignore it, top it; if you can't top it, laugh at it; if you can't laugh at it, it's probably deserved.",
            "author": "J. Russel Lynes"
        },
        {
            "quote": "Thanks to the Interstate Highway System, it is now possible to travel from coast to coast without seeing anything.",
            "author": "Charles Kuralt"
        },
        {
            "quote": "The fastest way to a man's heart is through his chest.",
            "author": "Roseanne Arnold"
        },
        {
            "quote": "The secret of staying young is to live honestly, eat slowly, and lie about your age.",
            "author": "Lucille Ball"
        },
        {
            "quote": "Have no fear of perfection - you'll never reach it.",
            "author": "Salvador Dali"
        },
        {
            "quote": "If it were not for Thomas Edison, we would all be watching television in the dark.",
            "author": "Michael Landon"
        },
        {
            "quote": "Ability is nothing without opportunity.",
            "author": "Napoleon Bonaparte"
        },
        {
            "quote": "Basically my wife was immature. I'd be at home in the bath and she'd come in and sink my boats. ",
            "author": "Woody Allen"
        },
        {
            "quote": "I married beneath me - all women do.",
            "author": "Nancy Astor"
        },
        {
            "quote": "The penalty for success is to be bored by the people who used to snub you. ",
            "author": "Nancy Astor"
        },
        {
            "quote": "Michael Scott: &quot;What is the most inspiring thing I ever said to you?&quot; ",
            "author": "Dwight Schrute: &quot;Don't be an idiot. Changed my life.&quot;"
        },
        {
            "quote": "Never offend people with style when you can offend them with substance.",
            "author": "Sam Brown"
        },
        {
            "quote": "If I owned Hell and Texas, I would rent out Texas and live in Hell.",
            "author": "Philip Henry Sheridan"
        },
        {
            "quote": "The American has no language. He has dialect, slang, provincialism, accent and so forth.",
            "author": "Rudyard Kipling"
        },
        {
            "quote": "A woman's guess is much more accurate than a man's certainty. ",
            "author": "Rudyard Kipling"
        },
        {
            "quote": "I have struck a city - a real city - and they call it Chicago... I urgently desire never to see it again. It is inhabited by savages.",
            "author": "Rudyard Kipling"
        },
        {
            "quote": "Words are, of course, the most powerful drug used by mankind. ",
            "author": "Rudyard Kipling"
        },
        {
            "quote": "Don't be so humble - you are not that great.",
            "author": "Golda Meir"
        },
        {
            "quote": "If a man does his best, what else is there?",
            "author": "General George S. Patton"
        },
        {
            "quote": "A lie gets halfway around the world before the truth has a chance to get its pants on.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "Give me a museum and I'll fill it.",
            "author": "Pablo Picasso"
        },
        {
            "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
            "author": "Yogi Berra"
        },
        {
            "quote": "I find that the harder I work, the more luck I seem to have.",
            "author": "Thomas Jefferson"
        },
        {
            "quote": "Each problem that I solved became a rule which served afterwards to solve other problems.",
            "author": "Rene Descartes"
        },
        {
            "quote": "Whether you think that you can, or that you can't, you are usually right.",
            "author": "Henry Ford"
        },
        {
            "quote": "Do, or do not. There is no &quot;try&quot;",
            "author": "Yoda"
        },
        {
            "quote": "The only way to get rid of a temptation is to yield to it.",
            "author": "Oscar Wilde"
        },
        {
            "quote": "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
            "author": "Martin Luther King Jr."
        },
        {
            "quote": "A man can't ride your back unless it's bent. ",
            "author": "Martin Luther King Jr."
        },
        {
            "quote": "A nation or civilization that continues to produce soft-minded men purchases its own spiritual death on the installment plan.",
            "author": "Martin Luther King Jr."
        },
        {
            "quote": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
            "author": "Martin Luther King Jr."
        },
        {
            "quote": "I have decided to stick with love. Hate is too great a burden to bear.",
            "author": "Martin Luther King, Jr."
        },
        {
            "quote": "Faith is taking the first step even when you don't see the whole staircase. ",
            "author": "Martin Luther King, Jr."
        },
        {
            "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
            "author": "Edsgar Dijkstra"
        },
        {
            "quote": "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.",
            "author": "Plato"
        },
        {
            "quote": "Never interrupt your enemy when he is making a mistake.",
            "author": "Napoleon Bonaparte"
        },
        {
            "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
            "author": "George Washington Carver"
        },
        {
            "quote": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "Thomas Edison"
        },
        {
            "quote": "Maybe this world is another planet's Hell.",
            "author": "Aldous Huxley"
        },
        {
            "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
            "author": "Sherlock Holmes"
        },
        {
            "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
            "author": "Ambrose Bierce"
        },
        {
            "quote": "Speak when you are angry and you will make the best speech you will ever regret.",
            "author": "Ambrose Bierce"
        },
        {
            "quote": "Be nice to people on your way up because you meet them on your way down.",
            "author": "Jimmy Durante"
        },
        {
            "quote": "The true measure of a man is how he treats someone who can do him absolutely no good.",
            "author": "Samuel Johnson"
        },
        {
            "quote": "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
            "author": "Albert Einstein"
        },
        {
            "quote": "All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed. Third, it is accepted as being self-evident.",
            "author": "Arthur Schopenhauer"
        },
        {
            "quote": "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
            "author": "Isaac Asimov"
        },
        {
            "quote": "There's a limit to how many times you can read how great you are and what an inspiration you are, but I'm not there yet.",
            "author": "Randy Pausch"
        },
        {
            "quote": "It is much more comfortable to be mad and know it, than to be sane and have one's doubts.",
            "author": "G. B. Burgin"
        },
        {
            "quote": "The nice thing about being a celebrity is that if you bore people they think it's their fault.",
            "author": "Henry Kissinger"
        },
        {
            "quote": "If everything seems under control, you're just not going fast enough.",
            "author": "Mario Andretti"
        },
        {
            "quote": "Obstacles are those frightful things you see when you take your eyes off your goal.",
            "author": "Henry Ford"
        },
        {
            "quote": "Whoever fights monsters should see to it that in the process he does not become a monster.",
            "author": "Friedrich Nietzsche"
        },
        {
            "quote": "Where are we going, and why am I in this handbasket?",
            "author": "Bumper Sticker"
        },
        {
            "quote": "While we are postponing, life speeds by.",
            "author": "Seneca"
        },
        {
            "quote": "I'm going to make him an offer he can't refuse.",
            "author": "Don Vito Corleone (The Godfather)"
        },
        {
            "quote": "Tragedy is when I cut my finger. Comedy is when you walk into an open sewer and die.",
            "author": "Mel Brooks"
        },
        {
            "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            "author": "Maya Angelou"
        },
        {
            "quote": "Any man who is under 30, and is not a liberal, has no heart; and any man who is over 30, and is not a conservative, has no brains.",
            "author": "Sir Winston Churchill"
        },
        {
            "quote": "We all agree that your theory is crazy, but is it crazy enough?",
            "author": "Niels Bohr"
        },
        {
            "quote": "I would have made a good Pope.",
            "author": "Richard M. Nixon"
        },
        {
            "quote": "A woman knows the face of the man she loves as a sailor knows the open sea. ",
            "author": "Honore de Balzac"
        },
        {
            "quote": "After coming into contact with a religious man I always feel I must wash my hands. ",
            "author": "Friedrich Nietzsche"
        },
        {
            "quote": "History repeats itself, first as tragedy, second as farce. ",
            "author": "Karl Marx"
        },
        {
            "quote": "Be truthful, nature only sides with truth.",
            "author": "Adolf Loos"
        },
        {
            "quote": "Children's talent to endure stems from their ignorance of alternatives. ",
            "author": "Maya Angelou"
        },
        {
            "quote": "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass. ",
            "author": "Maya Angelou"
        },
        {
            "quote": "A creative man is motivated by the desire to achieve, not by the desire to beat others. ",
            "author": "Ayn Rand"
        },
        {
            "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice. ",
            "author": "Wayne Dyer"
        },
        {
            "quote": "Crave for a thing, you will get it. Renounce the craving, the object will follow you by itself.",
            "author": "Swami Sivananda"
        },
        {
            "quote": "Always desire to learn something useful.",
            "author": "Sophocles"
        },
        {
            "quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
            "author": "Thomas Jefferson"
        },
        {
            "quote": "Even if you fall on your face, you're still moving forward.",
            "author": "Victor Kiam"
        },
        {
            "quote": "Expect problems and eat them for breakfast.",
            "author": "Alfred A. Montapert"
        },
        {
            "quote": "Eighty percent of success is showing up.",
            "author": "Woody Allen"
        },
        {
            "quote": "I respect faith, but doubt is what gets you an education.",
            "author": "Wilson Mizner"
        },
        {
            "quote": "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
            "author": "Daniel J. Boorstin"
        },
        {
            "quote": "Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress.",
            "author": "Alfred A. Montapert"
        },
        {
            "quote": "I don't know the key to success, but the key to failure is trying to please everybody.",
            "author": "Bill Cosby"
        },
        {
            "quote": "Tomorrow is often the busiest day of the week.",
            "author": "Spanish Proverb"
        },
        {
            "quote": "Be yourself; everyone else is already taken.",
            "author": "Oscar Wilde"
        },
        {
            "quote": "There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem.",
            "author": "Harold Stephens"
        },
        {
            "quote": "It is easier to fight for one's principles than to live up to them.",
            "author": "Alfred Adler"
        },
        {
            "quote": "I hear: I forget.  I see: I remember. I do: I understand.",
            "author": "Chinese Proverb"
        },
        {
            "quote": "Discipline is just choosing between what you want now and what you want most.",
            "author": "Unknown"
        },
        {
            "quote": "The very best thing you can do for the whole world is to make the most of yourself.",
            "author": "Wallace Wattles"
        },
        {
            "quote": "Good judgment comes from experience, and experience comes from bad judgment.",
            "author": "Barry LePatner"
        },
        {
            "quote": "When I do good, I feel good; when I do bad, I feel bad, and that is my religion.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "Success consists of going from failure to failure without loss of enthusiasm.",
            "author": "Winston Churchill"
        },
        {
            "quote": "If it weren't for my lawyer, I'd still be in prison. It went a lot faster with two people digging.",
            "author": "Joe Martin"
        },
        {
            "quote": "Acquaintance, n.: A person whom we know well enough to borrow from, but not well enough to lend to.",
            "author": "Ambrose Bierce"
        },
        {
            "quote": "The difference between death and taxes is death doesn't get worse every time Congress meets.",
            "author": "Will Rogers"
        },
        {
            "quote": "You know you're getting old when you stop to tie your shoelaces and wonder what else you could do while you're down there.",
            "author": "George Burns"
        },
        {
            "quote": "Time flies like an arrow; fruit flies like a banana.",
            "author": "Groucho Marx"
        },
        {
            "quote": "Somewhere on this globe, every ten seconds, there is a woman giving birth to a child. She must be found and stopped.",
            "author": "Sam Levenson"
        },
        {
            "quote": "Quidquid latine dictum sit, altum sonatur (Whatever is said in Latin sounds profound).",
            "author": "Unknown"
        },
        {
            "quote": "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
            "author": "Calvin Trillin"
        },
        {
            "quote": "The tooth fairy teaches children that they can sell body parts for money.",
            "author": "David Richerby"
        },
        {
            "quote": "My friends tell me I have an intimacy problem. But they don't really know me.",
            "author": "Garry Shandling"
        },
        {
            "quote": "I don't deserve this award, but I have arthritis and I don't deserve that either.",
            "author": "Jack Benny"
        },
        {
            "quote": "If God wanted us to fly, He would have given us tickets.",
            "author": "Mel Brooks"
        },
        {
            "quote": "If I only had a little humility, I'd be perfect.",
            "author": "Ted Turner"
        },
        {
            "quote": "When I read about the evils of drinking, I gave up reading.",
            "author": "Henny Youngman"
        },
        {
            "quote": "The secret of life is honesty and fair dealing. If you can fake that, you've got it made.",
            "author": "Groucho Marx"
        },
        {
            "quote": "Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.",
            "author": "Franklin P. Jones"
        },
        {
            "quote": "Education is what remains after one has forgotten what one has learned in school.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Millions long for immortality who do not know what to do with themselves on a rainy Sunday afternoon.",
            "author": "Susan Erz"
        },
        {
            "quote": "Computers are useless. They can only give you answers.",
            "author": "Pablo Picasso"
        },
        {
            "quote": "A genius! For 37 years I've practised fourteen hours a day, and now they call me a genius!",
            "author": "Pablo Sarasate"
        },
        {
            "quote": "There is nobody so irritating as somebody with less intelligence and more sense than we have.",
            "author": "Don Herold"
        },
        {
            "quote": "The bad news is time flies. The good news is you're the pilot.",
            "author": "Michael Althsuler"
        },
        {
            "quote": "The little I know I owe to my ignorance.",
            "author": "Orville Mars"
        },
        {
            "quote": "The reasonable man adapts himself to the world; the unreasonable one persists to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
            "author": "George Bernard Shaw"
        },
        {
            "quote": "In God we trust; all others bring data.",
            "author": "Dr. W. Edwards Deming"
        },
        {
            "quote": "The difference between the right word and the almost right word is the difference between lightning and a lightning bug.",
            "author": "Mark Twain"
        },
        {
            "quote": "Never argue with a fool, onlookers may not be able to tell the difference.",
            "author": "Mark Twain"
        },
        {
            "quote": "My definition of a free society is a society where it is safe to be unpopular.",
            "author": "Adlai E. Stevenson Jr."
        },
        {
            "quote": "Simple, clear purpose and principles give rise to complex and intelligent behavior. Complex rules and regulations give rise to simple and stupid behavior.",
            "author": "Dee Hock"
        },
        {
            "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
            "author": "Albert Einstein"
        },
        {
            "quote": "In preparing for battle I have always found that plans are useless, but planning is indispensable.",
            "author": "Dwight D. Eisenhower"
        },
        {
            "quote": "The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.",
            "author": "Niels Bohr"
        },
        {
            "quote": "Before you go and criticize the younger generation, just remember who raised them.",
            "author": "Unknown"
        },
        {
            "quote": "Talent hits a target no one else can hit; Genius hits a target no one else can see.",
            "author": "Arthur Schopenhauer"
        },
        {
            "quote": "It is amazing what you can accomplish if you do not care who gets the credit.",
            "author": "Harry Truman"
        },
        {
            "quote": "A conclusion is the place where you got tired thinking.",
            "author": "Martin H. Fischer"
        },
        {
            "quote": "You can do anything, but not everything.",
            "author": "David Allen"
        },
        {
            "quote": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
            "author": "Antoine de Saint-Exupéry"
        },
        {
            "quote": "The richest man is not he who has the most, but he who needs the least.",
            "author": "Unknown"
        },
        {
            "quote": "You miss 100 percent of the shots you never take.",
            "author": "Wayne Gretzky"
        },
        {
            "quote": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
            "author": "Ambrose Redmoon"
        },
        {
            "quote": "You must be the change you wish to see in the world.",
            "author": "Gandhi"
        },
        {
            "quote": "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
            "author": "A. A. Milne"
        },
        {
            "quote": "To the man who only has a hammer, everything he encounters begins to look like a nail.",
            "author": "Abraham Maslow"
        },
        {
            "quote": "We are what we repeatedly do; excellence, then, is not an act but a habit.",
            "author": "Aristotle"
        },
        {
            "quote": "A wise man gets more use from his enemies than a fool from his friends.",
            "author": "Baltasar Gracian"
        },
        {
            "quote": "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
            "author": "Basho"
        },
        {
            "quote": "Watch your thoughts; they become words.  Watch your words; they become actions.  Watch your actions; they become habits.  Watch your habits; they become character.  Watch your character; it becomes your destiny.",
            "author": "Lao-Tze"
        },
        {
            "quote": "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.",
            "author": "Georg Christoph Lichtenberg"
        },
        {
            "quote": "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",
            "author": "John Ruskin"
        },
        {
            "quote": "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.",
            "author": "Marcel Proust"
        },
        {
            "quote": "Work like you don't need money, love like you've never been hurt, and dance like no one's watching",
            "author": "Unknown"
        },
        {
            "quote": "Try a thing you haven't done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.",
            "author": "Virgil Garnett Thomson"
        },
        {
            "quote": "Even if you're on the right track, you'll get run over if you just sit there.",
            "author": "Will Rogers"
        },
        {
            "quote": "People often say that motivation doesn't last. Well, neither does bathing  that's why we recommend it daily.",
            "author": "Zig Ziglar"
        },
        {
            "quote": "Before I got married I had six theories about bringing up children; now I have six children and no theories.",
            "author": "John Wilmot"
        },
        {
            "quote": "What the world needs is more geniuses with humility, there are so few of us left.",
            "author": "Oscar Levant"
        },
        {
            "quote": "Always forgive your enemies; nothing annoys them so much.",
            "author": "Oscar Wilde"
        },
        {
            "quote": "I've gone into hundreds of [fortune-teller's parlors], and have been told thousands of things, but nobody ever told me I was a policewoman getting ready to arrest her.",
            "author": "New York City detective"
        },
        {
            "quote": "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
            "author": "Norm Crosby"
        },
        {
            "quote": "Those who believe in telekinetics, raise my hand.",
            "author": "Kurt Vonnegut"
        },
        {
            "quote": "Just the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.",
            "author": "Carl Sagan"
        },
        {
            "quote": "My pessimism extends to the point of even suspecting the sincerity of the pessimists.",
            "author": "Jean Rostand"
        },
        {
            "quote": "I quit therapy because my analyst was trying to help me behind my back.",
            "author": "Richard Lewis"
        },
        {
            "quote": "We've heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.",
            "author": "Robert Wilensky"
        },
        {
            "quote": "If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?",
            "author": "Scott Adams"
        },
        {
            "quote": "If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.",
            "author": "Unknown"
        },
        {
            "quote": "When I was a boy I was told that anybody could become President. Now I'm beginning to believe it.",
            "author": "Clarence Darrow"
        },
        {
            "quote": "Laughing at our mistakes can lengthen our own life. Laughing at someone else's can shorten it.",
            "author": "Cullen Hightower"
        },
        {
            "quote": "There are many who dare not kill themselves for fear of what the neighbors will say.",
            "author": "Cyril Connolly"
        },
        {
            "quote": "There's so much comedy on television. Does that cause comedy in the streets?",
            "author": "Dick Cavett"
        },
        {
            "quote": "All men are frauds. The only difference between them is that some admit it. I myself deny it.",
            "author": "H. L. Mencken"
        },
        {
            "quote": "I don't mind what Congress does, as long as they don't do it in the streets and frighten the horses.",
            "author": "Victor Hugo"
        },
        {
            "quote": "I took a speed reading course and read War and Peace' in twenty minutes. It involves Russia.",
            "author": "Woody Allen"
        },
        {
            "quote": "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Believe those who are seeking the truth. Doubt those who find it.",
            "author": "André Gide"
        },
        {
            "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
            "author": "Aristotle"
        },
        {
            "quote": "I'd rather live with a good question than a bad answer.",
            "author": "Aryeh Frimer"
        },
        {
            "quote": "We learn something every day, and lots of times it's that what we learned the day before was wrong.",
            "author": "Bill Vaughan"
        },
        {
            "quote": "I have made this letter longer than usual because I lack the time to make it shorter.",
            "author": "Blaise Pascal"
        },
        {
            "quote": "Don't ever wrestle with a pig. You'll both get dirty, but the pig will enjoy it.",
            "author": "Cale Yarborough"
        },
        {
            "quote": "An inventor is simply a fellow who doesn't take his education too seriously.",
            "author": "Charles F. Kettering"
        },
        {
            "quote": "Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.",
            "author": "Christopher Hampton"
        },
        {
            "quote": "Better to write for yourself and have no public, than to write for the public and have no self.",
            "author": "Cyril Connolly"
        },
        {
            "quote": "Never be afraid to laugh at yourself, after all, you could be missing out on the joke of the century.",
            "author": "Dame Edna Everage"
        },
        {
            "quote": "I am patient with stupidity but not with those who are proud of it.",
            "author": "Edith Sitwell"
        },
        {
            "quote": "Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for  in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it.",
            "author": "Ellen Goodman"
        },
        {
            "quote": "The cure for boredom is curiosity. There is no cure for curiosity.",
            "author": "Ellen Parr"
        },
        {
            "quote": "Advice is what we ask for when we already know the answer but wish we didn't.",
            "author": "Erica Jong"
        },
        {
            "quote": "Some people like my advice so much that they frame it upon the wall instead of using it.",
            "author": "Gordon R. Dickson"
        },
        {
            "quote": "The trouble with the rat race is that even if you win, you're still a rat.",
            "author": "Lily Tomlin"
        },
        {
            "quote": "Never ascribe to malice, that which can be explained by incompetence.",
            "author": "Napoleon Bonaparte"
        },
        {
            "quote": "Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.",
            "author": "Oscar Wilde"
        },
        {
            "quote": "When a person can no longer laugh at himself, it is time for others to laugh at him.",
            "author": "Thomas Szasz"
        },
        {
            "quote": "Do not look where you fell, but where you slipped.",
            "author": "African proverb"
        },
        {
            "quote": "If everything's under control, you're going too slow.",
            "author": "Mario Andretti"
        },
        {
            "quote": "It is surprinsingly how easy it is to forget that the way to get things done is to do them.",
            "author": "Mark Forster"
        },
        {
            "quote": "If you think you are too small to be effective, you have never been in bed with a mosquito.",
            "author": "Betty Reese"
        },
        {
            "quote": "The fairest rules are those to which everyone would agree if they did not know how much power they would have.",
            "author": "John Rawls"
        },
        {
            "quote": "Any word you have to hunt for in a thesaurus is the wrong word. There are no exceptions to this rule.",
            "author": "Stephen King"
        },
        {
            "quote": "Price is what you pay. Value is what you get.",
            "author": "Warren Buffett"
        },
        {
            "quote": "In retrospect, all revolutions seem inevitable. Beforehand, all revolutions seem impossible.",
            "author": "Michael McFaul"
        },
        {
            "quote": "There ain't no rules around here. We're trying to accomplish something.",
            "author": "Thomas Edison"
        },
        {
            "quote": "Clutter is the official language used by corporations to hide their mistakes.",
            "author": "William Zinsser"
        },
        {
            "quote": "Do what you can, with what you have, where you are.",
            "author": "Theodore Roosevelt"
        },
        {
            "quote": "Life does not ask what we want. It presents us with options.",
            "author": "Thomas Sowell"
        },
        {
            "quote": "If you can't explain it simply, you don't understand it well enough.",
            "author": "Albert Einstein"
        },
        {
            "quote": "To see what is in front of one's nose needs a constant struggle.",
            "author": "George Orwell"
        },
        {
            "quote": "It's not what you look at that matters, it's what you see.",
            "author": "Henry David Thoreau"
        },
        {
            "quote": "Beware the investment activity that produces applause; the great moves are usually greeted by yawns.",
            "author": "Warren Buffet"
        },
        {
            "quote": "Besides the noble art of getting things done, there is the noble art of leaving things undone. The wisdom of life consists in the elimination of non-essentials.",
            "author": "Lin Yutang"
        },
        {
            "quote": "In all affairs, it's a healthy thing now and then to hang a question mark on the things you have long taken for granted.",
            "author": "Bertrand Russel"
        },
        {
            "quote": "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Stay hungry. Stay foolish.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Your time is limited, so don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
            "author": "Steve Jobs"
        },
        {
            "quote": "It isn't that they can't see the solution. It is that they can't see the problem.",
            "author": "Gilbert Chesterton"
        },
        {
            "quote": "God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.",
            "author": "Reinhold Niebuhr"
        },
        {
            "quote": "If I had asked my customers what they wanted, they would have said a faster horse.",
            "author": "Henry Ford"
        },
        {
            "quote": "Don't read what they write about you, just measure it in inches.",
            "author": "Andy Warhol"
        },
        {
            "quote": "Knowledge is the beginning of practice; doing is the completion of knowing.",
            "author": "Wang Yangming"
        },
        {
            "quote": "Less is only more where more is no good.",
            "author": "Frank Lloyd Wright"
        },
        {
            "quote": "There is nothing so useless as doing efficiently that which should not be done at all.",
            "author": "Peter F. Drucker"
        },
        {
            "quote": "Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that's creativity.",
            "author": "Charles Mingus"
        },
        {
            "quote": "Whenever there is a hard job to be done I assign it to a lazy man; he is sure to find an easy way of doing it.",
            "author": "Walter Chrysler"
        },
        {
            "quote": "Put one dumb foot in front of the other and course-correct as you go.",
            "author": "Barry Diller"
        },
        {
            "quote": "A good plan violently executed today, is far and away better than a perfect plan next week.",
            "author": "George S. Patton"
        },
        {
            "quote": "People who boast about their IQ are losers.",
            "author": "Stephen Hawking"
        },
        {
            "quote": "They that can give up general purpose computers for the sake of a little eye candy deserve neither computers nor eye candy.",
            "author": "Danny O'Brien"
        },
        {
            "quote": "Most of the wonderful places in the world were not made by architects but by the people.",
            "author": "Christopher Alexander"
        },
        {
            "quote": "I can't understand why people are frightened of new ideas. I'm frightened of the old ones.",
            "author": "John Cage"
        },
        {
            "quote": "The details are not the details. They make the design.",
            "author": "Charles Eames"
        },
        {
            "quote": "As much as anything, good design says that somebody is taking this object very seriously.",
            "author": "Jacob Covey"
        },
        {
            "quote": "A person reveals his character by nothing so clearly as the joke he resents.",
            "author": "George C. Lichtenberg"
        },
        {
            "quote": "Everyone who's ever taken a shower has an idea. It's the person who gets out of the shower, dries off and does something about it that makes a difference.",
            "author": "Nolan Bushnell"
        },
        {
            "quote": "I notice increasing reluctance on the part of marketing executives to use judgment; they are coming to rely too much on research, and they use it as a drunkard uses a lamp post for support, rather than for illumination.",
            "author": "David Ogilvy"
        },
        {
            "quote": "I skate to where the puck is going to be, not where it has been.",
            "author": "Wayne Gretzky"
        },
        {
            "quote": "You know, I don't agree with myself on everything.",
            "author": "Rudy Giuliani"
        },
        {
            "quote": "Having small touches of colour makes it more colourful than having the whole thing in colour.",
            "author": "Dieter Rams"
        },
        {
            "quote": "Happiness makes up in height what it lacks in length.",
            "author": "Robert Frost"
        },
        {
            "quote": "Lose an hour in the morning, chase it all day",
            "author": "Yiddish Saying"
        },
        {
            "quote": "Focusing your life solely on making a buck shows a certain poverty of ambition. It asks too little of yourself. Because it's only when you hitch your wagon to something larger than yourself that you realize your true potential.",
            "author": "Barack Obama"
        },
        {
            "quote": "Frankly, my dear, I don't give a damn.",
            "author": "Rhett Butler (Gone with the Wind)"
        },
        {
            "quote": "Toto, I've got a feeling we're not in Kansas anymore.",
            "author": "Dorothy Gale (The Wizard of Oz)"
        },
        {
            "quote": "Louis, I think this is the beginning of a beautiful friendship.",
            "author": "Rick Blaine (Casablanca)"
        },
        {
            "quote": "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
            "author": "Hannibal Lecter (The Silence of the Lambs)"
        },
        {
            "quote": "I'll be back.",
            "author": "The Terminator"
        },
        {
            "quote": "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
            "author": "Forrest Gump"
        },
        {
            "quote": "I see dead people.",
            "author": "Cole Sear (The Sixth Sense)"
        },
        {
            "quote": "Houston, we have a problem.",
            "author": "Jim Lovell"
        },
        {
            "quote": "You had me at &quot;hello.&quot;",
            "author": "Dorothy Boyd (Jerry Maguire)"
        },
        {
            "quote": "Soylent Green is people!",
            "author": "Det. Robert Thorn (Soylent Green)"
        },
        {
            "quote": "I feel the needthe need for speed!",
            "author": "Maverick (Top Gun)"
        },
        {
            "quote": "Carpe diem. Seize the day, boys. Make your lives extraordinary",
            "author": "John Keating (Dead Poets Society)"
        },
        {
            "quote": "I'll get you, my pretty, and your little dog too!",
            "author": "Wicked Witch of the West (The Wizard of Oz)"
        },
        {
            "quote": "I'm king of the world!",
            "author": "Jack Dawson (Titanic)"
        }
    ];

})();