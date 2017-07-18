function Song() {

  var Songs = ['Fireflies by Owl City', '', 'Come Down by Anderson Paak', 'Love On the Brain by Rihanna', 'Needed Me by Rihanna', 'Idle Town by Conan Gray', 'I know a Place by Conan Gray', 'Isuues by Julia Michaels', 'Here by Alssia Cara', 'I Write Sins Not Tragedies by Panic! At The Disco', 'Despacito by Luis Fonsi', 'Bailando by Enrique Iglesias', 'Dance Dance by Fall Out Boy', 'Gossebumps by Travis Scott', 'Mr Blue Sky by Electric Light Orchestra', 'Sick of Losing Soulmates by Dodie', 'A Non Love Song by Dodie', 'A Love Song by Jon Cozart', 'Human by Dodie', 'Come Togther &#40; cover &#41; Dodie and Jon','Soap by Melanie Martinez', 'Pity Party by Melanie Martinez','Too Godd by Drake', 'Best I Ever Had by Drake', 'Planes by Jeremih', 'Work Out by J.Cole', 'Heartless by Kanye West', 'Feel no ways by Drake', 'Childs Play by Drake', 'She Knows by J.Cole', 'Wet Dreamz by J.Cole', 'Father Stretch my Hands Pt.1', 'Power Trip by J.Cole', 'Fake Love by Drake', 'Ultralight Beam by Kanye West', 'Fade by Kanye West', 'Passionfruit by Drake', 'Change by J.Cole', 'Am I Wrong by Anderson Paak', 'Dog Days Are Over by Florence and the Machine', 'Drops of Jupiter by Train', 'Feel Good Inc. by Gorillaz', 'Make it Mine by Jason Mraz', 'Over my Head by The Fray', 'Take Me Out by Franz Ferdinand', 'Viva La Vida by Coldplay', 'Shore by Daniela Andrade',];

	var song = Songs [Math.round(Math.random()*(Songs.length-1))];

	document.getElementById('excuses').innerHTML = '<div> ' + song + '</div>'

}
