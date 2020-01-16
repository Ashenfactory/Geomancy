var MUSIC = [
	'145222909',
	'151778797',
	'174069838',
	'265889647',
	'285313051',
	'310888652',
	'325044911',
	'403823612',
	'446752485',
	'469766129',
	'495194599',
	'510806581',
	'526996647',
	'559340384',
	'605666299',
	'643698969',
	'660942889',
	'661476231',
	'666417122',
	'681442021',
	'761140315',
	'841637854',
	'865814623',
	'931854504',
	'938704256',
	'947543277',
	'961859710',
	'1016691650',
	'1034886911',
	'1108917073',
	'1216168320',
	'1228283583',
	'1285997803',
	'1296934222',
	'1307769790',
	'1323416067',
	'1469930180',
	'1595786133',
	'1655320056',
	'1680549601',
	'1875740326',
	'1896000150',
	'1913982275',
	'1955127150',
	'1989546509',
	'2013567387',
	'2043647520',
	'2061124234',
	'2105473046',
	'2200923873',
	'2248782267',
	'2256255837',
	'2279370293',
	'2297597699',
	'2338205124',
	'2344674750',
	'2353369753',
	'2445190881',
	'2448605187',
	'2478746938',
	'2590217099',
	'2630279441',
	'2717835394',
	'2726215776',
	'2766550485',
	'2816920690',
	'2847602956',
	'2848551696',
	'2908258013',
	'2960374862',
	'2965699017',
	'3027270727',
	'3042444483',
	'3101659996',
	'3104280626',
	'3130560044',
	'3149598646',
	'3161718211',
	'3220684685',
	'3265128294',
	'3276622540',
	'3345414209',
	'3356052944',
	'3391337322',
	'3460546764',
	'3491248632',
	'3502349480',
	'3502882391',
	'3682940673',
	'3694538569',
	'3750215688',
	'3758420981',
	'3759530082',
	'3778788504',
	'3893067090',
	'3896305074',
	'3900952667',
	'3934925565',
	'3992682968',
	'3992714175',
	'3996354775',
	'4007900353',
	'4032653588',
	'4110253872',
	'4119039898',
	'4224562179',
	'4226971405',
	'4236859747',
	'4253299878',
	'4261379141',
];

var FIGURES = [
	{
		name: 'Populus',
		englishName: 'The People',
		count: 8,
		geomanticElement: 'Water <span class="icon">&#x1f704;</span>',
		astrologicalElement: 'Water <span class="icon">&#x1f704;</span>',
		direction: 'Both',
		type: 'Impartial',
		stability: 'Mutable <span class="icon">&#x263f;</span>',
		planet: 'Moon <span class="icon">&#x263d;</span> (waxing)',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Capricorn <span class="icon">&#x2651;</span>',
		goodness: 'Good',
		time: 'Months <span class="icon">&#x1f771;</span>',
		humor: 'Phlegmatic',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure resembles a bird\'s eye view of a group of people. The figure can mean that the outcome is based on the people of the situation, or represents a large number of people or peers. It refers to a gathering or assembly of people and is very neutral, for though there may be a great deal of movement within the crowd, there is very little effect on the crowd as a whole. It is favorable with favorable figures, and unfavorable with unfavorable ones.'
	},
	{
		name: 'Laetitia',
		englishName: 'Joy',
		count: 7,
		geomanticElement: 'Fire <span class="icon">&#x1f702;</span>',
		astrologicalElement: 'Water <span class="icon">&#x1f704;</span>',
		direction: 'Exiting',
		type: 'Partial',
		stability: 'Mobile <span class="icon">&#x1f70d;</span>',
		planet: 'Jupiter <span class="icon">&#x2643;</span> (retrograde)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Taurus <span class="icon">&#x2649;</span>',
		goodness: 'Good',
		time: 'Years',
		humor: 'Sanguine',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure resembles an arch, fountain, or rainbow. It is good in situations that concern potential, joy, or happiness. It is a positive figure for nearly all questions, representing fast situations and construction. It indicates upward motion, happiness, or joy.'
	},
	{
		name: 'Rubeus',
		englishName: 'Red',
		count: 7,
		geomanticElement: 'Air <span class="icon">&#x1f701;</span>',
		astrologicalElement: 'Water <span class="icon">&#x1f704;</span>',
		direction: 'Exiting',
		type: 'Partial',
		stability: 'Mobile <span class="icon">&#x1f70d;</span>',
		planet: 'Mars <span class="icon">&#x2642;</span> (direct)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Gemini <span class="icon">&#x264a;</span>',
		goodness: 'Very bad',
		time: 'Months <span class="icon">&#x1f771;</span>',
		humor: 'Choleric',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure is an overturned glass; an inversion, meaning good in all that is evil, and evil in all that is good. Like the Tail of the Dragon, the figure is considered so unfavourable that if it were the first in a reading, the reading would end. It represents passion, deception, violence, and vice.'
	},
	{
		name: 'Fortuna Minor',
		englishName: 'The Lesser Fortune',
		count: 6,
		geomanticElement: 'Fire <span class="icon">&#x1f702;</span>',
		astrologicalElement: 'Fire <span class="icon">&#x1f702;</span>',
		direction: 'Exiting',
		type: 'Impartial',
		stability: 'Mobile <span class="icon">&#x1f70d;</span>',
		planet: 'Sun <span class="icon">&#x2609;</span> (retrograde)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Taurus <span class="icon">&#x2649;</span>',
		goodness: 'Moderately bad',
		time: 'Months <span class="icon">&#x1f771;</span>',
		humor: 'Choleric',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure is symbolic of success coming down like beams of light from the Sun. It indicates a weakly positive outcome in nearly all questions, representing transient success that is dependent upon outside help. It favors situations that can be resolved quickly and do not need to be sustained. It is a figure of change and instability.'
	},
	{
		name: 'Albus',
		englishName: 'White',
		count: 7,
		geomanticElement: 'Water <span class="icon">&#x1f704;</span>',
		astrologicalElement: 'Air <span class="icon">&#x1f701;</span>',
		direction: 'Entering',
		type: 'Partial',
		stability: 'Fixed <span class="icon">&#x1f714;</span>',
		planet: 'Mercury <span class="icon">&#x263f;</span> (direct)',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Cancer <span class="icon">&#x264c;</span>',
		goodness: 'Very good',
		time: 'Years',
		humor: 'Phlegmatic',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure resembles an upright glass or goblet. It is good in most situations, especially with good figures in company, but itself is a weak figure. It represents peace, wisdom and purity. It benefits beginnings and profit, or any situation where careful and deliberate planning is needed.'
	},
	{
		name: 'Amissio',
		englishName: 'Loss',
		count: 6,
		geomanticElement: 'Fire <span class="icon">&#x1f702;</span>',
		astrologicalElement: 'Earth <span class="icon">&#x1f703;</span>',
		direction: 'Exiting',
		type: 'Impartial',
		stability: 'Mobile <span class="icon">&#x1f70d;</span>',
		planet: 'Venus <span class="icon">&#x2640;</span> (retrograde)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Scorpio <span class="icon">&#x264f;</span>',
		goodness: 'Very bad',
		time: 'Days <span class="icon">&#x1f770;</span>',
		humor: 'Choleric',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure is of two bowls or cups turned upside-down. In general, the figure is bad or negative figure for all charts except those for love (being a figure of Venus) or where loss is desired and denotes loss. Often it represents something outside of one\'s grasp.'
	},
	{
		name: 'Conjunctio',
		englishName: 'The Conjunction',
		count: 6,
		geomanticElement: 'Air <span class="icon">&#x1f701;</span>',
		astrologicalElement: 'Earth <span class="icon">&#x1f703;</span>',
		direction: 'Both',
		type: 'Impartial',
		stability: 'Mutable <span class="icon">&#x263f;</span>',
		planet: 'Mercury <span class="icon">&#x263f;</span> (retrograde)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Virgo <span class="icon">&#x264d;</span>',
		goodness: 'Moderately good',
		time: 'Hours <span class="icon">&#x1f76e;</span>',
		humor: 'Sanguine',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure resembles a crossroads or joining of two figures. The sign is neutral in meaning (good in good things, evil in evil), but good with joining or recovering things, especially marriage or relationships. It represents a combination of forces, for good or ill. By itself, it is neutral, only becoming favourable or not by other figures around it.'
	},
	{
		name: 'Cauda Draconis',
		englishName: 'The Tail of the Dragon',
		count: 5,
		geomanticElement: 'Fire <span class="icon">&#x1f702;</span>',
		astrologicalElement: 'Fire <span class="icon">&#x1f702;</span>',
		direction: 'Exiting',
		type: 'Partial',
		stability: 'Mobile <span class="icon">&#x1f70d;</span>',
		planet: 'Ascending Lunar Node <span class="icon">&#x260a;</span>',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Sagitarius <span class="icon">&#x2650;</span>',
		goodness: 'Very bad',
		time: 'Weeks',
		humor: 'Choleric',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure is considered very bad in most situations, such that in older traditions if this was the first figure drawn the geomancy reading was stopped. It is only good in circumstances for ending or completing things, such as breaking up a relationship. It brings good with evil, and evil with good.'
	},
	{
		name: 'Tristitia',
		englishName: 'Sorrow',
		count: 7,
		geomanticElement: 'Earth <span class="icon">&#x1f703;</span>',
		astrologicalElement: 'Air <span class="icon">&#x1f701;</span>',
		direction: 'Entering',
		type: 'Partial',
		stability: 'Fixed <span class="icon">&#x1f714;</span>',
		planet: 'Saturn <span class="icon">&#x2644;</span> (retrograde)',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Scorpio <span class="icon">&#x264f;</span>',
		goodness: 'Very bad',
		time: 'Years',
		humor: 'Melancholy',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure resembles a broken arch or a stake being driven into the ground. It is bad in most cases and connotes sadness or mourning. Tristitia is an unfavorable figure in almost all questions, usually representing pain and suffering. However, it is favorable in questions dealing with stability, building, or the Earth (such as agriculture).'
	},
	{
		name: 'Carcer',
		englishName: 'The Prison',
		count: 6,
		geomanticElement: 'Earth <span class="icon">&#x1f703;</span>',
		astrologicalElement: 'Earth <span class="icon">&#x1f703;</span>',
		direction: 'Both',
		type: 'Impartial',
		stability: 'Mutable <span class="icon">&#x263f;</span>',
		planet: 'Saturn <span class="icon">&#x2644;</span> (direct)',
		day: 'Nocturnal <span class="icon">&#x1F76f;</span>',
		zodiac: 'Pisces <span class="icon">&#x2653;</span>',
		goodness: 'Moderately bad',
		time: 'Years',
		humor: 'Melancholy',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure is the outline of an enclosure, a link in a chain, or prison cell. It is usually bad in situations and denotes delays, setbacks, or bindings. It refers to immobility, and also thereby strength. Depending on the question it could indicate a restriction or a source of willpower. It is generally unfavourable, but can be favourable in questions involving stability or security.'
	},
	{
		name: 'Acquisitio',
		englishName: 'Gain',
		count: 6,
		geomanticElement: 'Air <span class="icon">&#x1f701;</span>',
		astrologicalElement: 'Fire <span class="icon">&#x1f702;</span>',
		direction: 'Entering',
		type: 'Impartial',
		stability: 'Fixed <span class="icon">&#x1f714;</span>',
		planet: 'Jupiter <span class="icon">&#x2643;</span> (direct)',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Aries <span class="icon">&#x2648;</span>',
		goodness: 'Good',
		time: 'Years',
		humor: 'Sanguine',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure resembles two bowls or cups turned upright. It is good in almost all situations, especially for getting and obtaining things. For most charts it is a positive figure, except where a loss is desired. It indicates a gain financially, mentally, or in any other form, or something within one\'s grasp.'
	},
	{
		name: 'Puer',
		englishName: 'The Boy',
		count: 5,
		geomanticElement: 'Air <span class="icon">&#x1f701;</span>',
		astrologicalElement: 'Air <span class="icon">&#x1f701;</span>',
		direction: 'Exiting',
		type: 'Partial',
		stability: 'Mobile <span class="icon">&#x1f70d;</span>',
		planet: 'Mars <span class="icon">&#x2642;</span> (direct)',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Libra <span class="icon">&#x264e;</span>',
		goodness: 'Very bad',
		time: 'Months <span class="icon">&#x1f771;</span>',
		humor: 'Sanguine',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure is a representation of a sword or erect phallus and refers to male energies, primarily aggression and passion, but also war and male sexuality. It is bad in most cases, but good in situations where boys (in Antiquity and Medieval society) excelled: love and war.'
	},
	{
		name: 'Fortuna Major',
		englishName: 'The Greater Fortune',
		count: 6,
		geomanticElement: 'Earth <span class="icon">&#x1f703;</span>',
		astrologicalElement: 'Fire <span class="icon">&#x1f702;</span>',
		direction: 'Entering',
		type: 'Impartial',
		stability: 'Fixed <span class="icon">&#x1f714;</span>',
		planet: 'Sun <span class="icon">&#x2609;</span> (direct)',
		day: 'Diurnal <span class="icon">&#x260c;</span>',
		zodiac: 'Aquarius <span class="icon">&#x2652;</span>',
		goodness: 'Very good',
		time: 'Years',
		humor: 'Melancholy',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure resembles blessings growing from the earth and being fruitful in the air. It is good in all situations in a best case scenario sense and represents great good fortune, especially in beginnings. It denotes power and success, and so is very favourable in conflicts and contests; being a figure of stability and long-term success, it also denotes hardship at the outset of an endeavor.'
	},
	{
		name: 'Puella',
		englishName: 'The Girl',
		count: 5,
		geomanticElement: 'Water <span class="icon">&#x1f704;</span>',
		astrologicalElement: 'Fire <span class="icon">&#x1f702;</span>',
		direction: 'Entering',
		type: 'Partial',
		stability: 'Fixed <span class="icon">&#x1f714;</span>',
		planet: 'Venus <span class="icon">&#x2640;</span> (direct)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Gemini <span class="icon">&#x264a;</span>',
		goodness: 'Good',
		time: 'Months <span class="icon">&#x1f771;</span>',
		humor: 'Phlegmatic',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure is to resemble the vulva or a woman with exaggerated breasts. It is good in most situations, especially with women, beauty, or feminine situations. It represents peace and passivity, which can be either positive or negative depending on the question being answered, though generally positive, requiring to be acted upon instead of it acting on a situation. It is the symbol of feminine sexuality, balancing the energy of Puer.'
	},
	{
		name: 'Caput Draconis',
		englishName: 'The Head of the Dragon',
		count: 5,
		geomanticElement: 'Earth <span class="icon">&#x1f703;</span>',
		astrologicalElement: 'Earth <span class="icon">&#x1f703;</span>',
		direction: 'Entering',
		type: 'Partial',
		stability: 'Fixed <span class="icon">&#x1f714;</span>',
		planet: 'Descending Lunar Node <span class="icon">&#x260b;</span>',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Virgo <span class="icon">&#x264d;</span>',
		goodness: 'Very good',
		time: 'Years',
		humor: 'Melancholy',
		gender: 'Masculine <span class="icon">&#x2642;</span>',
		interpetation: 'The figure resembles the astrological symbol the north node of the Moon. It is neutral figure (good with good, evil with evil) but fortunate with starting or beginning new things. It is favourable for beginnings and profit, and otherwise favourable with other favourable figures, and unfavourable with unfavourable ones.'
	},
	{
		name: 'Via',
		englishName: 'The Way',
		count: 4,
		geomanticElement: 'Water <span class="icon">&#x1f704;</span>',
		astrologicalElement: 'Water <span class="icon">&#x1f704;</span>',
		direction: 'Both',
		type: 'Impartial',
		stability: 'Mutable <span class="icon">&#x263f;</span>',
		planet: 'Moon <span class="icon">&#x263d;</span> (waning)',
		day: 'Nocturnal <span class="icon">&#x1f76f;</span>',
		zodiac: 'Leo <span class="icon">&#x264c;</span>',
		goodness: 'Good',
		time: 'Months <span class="icon">&#x1f771;</span>',
		humor: 'Phlegmatic',
		gender: 'Feminine <span class="icon">&#x2640;</span>',
		interpetation: 'The figure resembles a road or path. It is considered bad of most things, but good with concerns of roads, travels, or journeys. All the elements in Via are active, and as such the figure indicates change more than any other figure. Regarding the outcome of the situation being divined, it is neutral, unless change by itself infers a positive or negative result.'
	}
];

var TRIPLICITIES = [
	{
		number: 'First',
		interpetation: 'The querent\'s health, disposition, outlooks and habits. Current trends in the querent\'s life.'
	},
	{
		number: 'Second',
		interpetation: 'The influences in the querent\'s life at the time of the reading. Factors that shape the querent\'s life and the situation surrounding the query.'
	},
	{
		number: 'Third',
		interpetation: 'The places most frequented by the querent, including the home and the workplace. People and objects found at those places. Family, partners and housemates of the querent.'
	},
	{
		number: 'Fourth',
		interpetation: 'Friends, associates, coworkers, colleagues of the querent, as well as people in authority over the querent. Situations and factors caused by external sources.'
	}
];

var arng = new alea(Date.now());

function add(x, y) {
	return x ^ y;
}

function revert(x) {
	var result = 0;

	for (i = 0; i < 4; i++) {
		result <<= 1;
		result |= (x & 1);
		x >>= 1;
	}

	return result;
}

function bitCount (x) {
	x = x - ((x >> 1) & 0x55555555);
	x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	return ((x + (x >> 4) & 0xf0f0f0f) * 0x1010101) >> 24;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(arng() * (max - min + 1)) + min;
}

function display_figure(x, id, reconciler, modal) {
	var figure = '<div id="figure-' + id + '" data-id="' + x + '"' +
		(modal ? ' data-toggle="modal" data-target="#figureModal"' : '') + 'class="border-secondary text-center col' +
		(reconciler ? '-3 offset-9 reconciler shadow' : '') + '"><figure data-id="' + x + '" class="figure">';

	for (var i = 0; i < 4; i++) {
		figure += '<span class="diamond"></span>' + (nth_bit(x, i) ? '' : '&#x2003;<span class="diamond"></span>') + '<br>';
	}

	figure += '<figcaption>' + FIGURES[x].name + '</figcaption></figure></div>';

	return figure;
}

function nth_bit(x, i) {
	return (x & (1 << i)) !== 0;
}

function generate_from_parents(parents, offset) {
	var child = 0;

	parents.forEach(function(elm, key) {
		child = (child |= (nth_bit(elm, offset) << key));
	});

	return child;
}

function generate_shield_chart() {
	var chart = {'figures': new Uint8Array(16), 'points': 128};

	//Mothers
	for (var i = 0; i < 4; i++) {
		chart.figures[i] = getRandomInt(0, 15);
	}

	//Daughters
	for (i = 0; i < 4; i++) {
		chart.figures[i + 4] = generate_from_parents(chart.figures.slice(0, 4), i);
	}

	//Nieces
	for (i = 0; i < 2; i++) {
		chart.figures[i + 8] = add(chart.figures[i * 2], chart.figures[i * 2 + 1]);
		chart.figures[i + 10] = add(chart.figures[i * 2 + 4], chart.figures[i * 2 + 5]);
	}

	//Witnesses
	for (i = 0; i < 2; i++) {
		chart.figures[i + 12] = add(chart.figures[i * 2 + 8], chart.figures[i * 2 + 9]);
	}

	//Judge & Reconciler
	chart.figures[14] = add(chart.figures[12], chart.figures[13]);
	chart.figures[15] = add(chart.figures[14], chart.figures[0]);

	for (i = 0; i < 16; i++) {
		chart.points += - bitCount(chart.figures[i]);
	}

	return chart;
}

function generate_triplicities() {
	var html = '';

	for (var i = 0; i < 4; i++) {
		var past = $('#figure-' + (i * 2));
		var present = $('#figure-' + (i * 2 + 1));
		var future = $('#figure-' + (i + 8));

		html += '<div class="card shadow bg-dark text-white mb-4"><div class="card-header">' +
			TRIPLICITIES[i].number +
		' Triplicity</div><div class="card-body"><div class="row"><div class="col text-center" data-toggle="modal" data-target="#figureModal" data-id="' +
			past.data('id') +
		'"><h3 class="h4">Past</h3>' +
			past.html() +
		'</div><div class="col text-center" data-toggle="modal" data-target="#figureModal" data-id="' +
			present.data('id') +
		'"><h3 class="h4">Present</h3>' +
			present.html() +
		'</div><div class="col text-center" data-toggle="modal" data-target="#figureModal" data-id="' +
			future.data('id') +
		'"><h3 class="h4">Future</h3>' +
			future.html() +
		'</div></div></div><div class="card-footer">' +
			TRIPLICITIES[i].interpetation +
		'</div></div>';
	}

	html += '</div>';

	$('#triplicitiesContainer').html(html);
}

function generate_chart() {
	arng = new alea(Date.now() + $('#questionInput').val());

	var data = generate_shield_chart();

	var html = '<div class="shadow mb-3"><div class="row no-gutters">';

	//Daugthers
	for (var i = 3; i >= 0; i--) {
		html += display_figure(data.figures[i + 4], i + 4, false, true);
	}

	//Mothers
	for (i = 3; i >= 0; i--) {
		html += display_figure(data.figures[i], i, false, true);
	}

	html += '</div><div class="row no-gutters">';

	//Nieces
	for (i = 3; i >= 0; i--) {
		html += display_figure(data.figures[i + 8], i + 8, false, true);
	}

	html += '</div><div class="row no-gutters">';

	//Witnesses
	for (i = 1; i >= 0; i--) {
		html += display_figure(data.figures[i + 12], i + 12, false, true);
	}

	//Judge & Reconciler
	html += '</div><div class="row no-gutters">' + display_figure(data.figures[14], 14, false, true) + '</div></div>';
	html += '<div class="mb-3 row no-gutters">' + display_figure(data.figures[15], 15, true, true) + '</div></div>';

	$('#shieldChartContainer').html(html);

	generate_triplicities();

	generate_house_chart();
}

function generate_house_chart() {
	$('#houseChartContainer [data-index]').each(function() {
		var elm = $(this);
		var figure = $('#figure-' + elm.data('index'));

		elm.html(figure.html());
		elm.data('id', figure.data('id'));
	});
}

function change_music(id) {
	$('#bcPlayer').data('id', id);
	$('#bcPlayer').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=' + MUSIC[id] + '/size=small/bgcol=333333/linkcol=ffffff/artwork=none/transparent=false/');
}

function setModalContent(elm, id) {
	var inversion = add(id, 15);
	var reversion = revert(id);

	elm.find('.modal-content').first().html(
		'<div class="modal-header border-secondary"><h5 class="modal-title" id="figureModalLabel">' +
			FIGURES[id].name +
		' <small class="text-muted">' +
			FIGURES[id].englishName +
		'</small></h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="row"><div class="col"><figure class="figure float-right text-center">' +
			display_figure(id, 'modal', false, false) +
		'</figure>' +
			FIGURES[id].interpetation +
		'</div></div></div><div class="modal-footer border-secondary"><div class="row"><div class="col-6"><label>Inversion:</label> <a class="updateModal" data-target="#figureModal" data-id="' + inversion + '">' +
			FIGURES[inversion].name +
		'</a></div><div class="col-6"><label>Reversion:</label> <a class="updateModal" data-target="#figureModal" data-id="' + reversion + '">' +
			FIGURES[reversion].name +
		'</a></div><div class="col-6"><label>Inner Element:</label> ' +
			FIGURES[id].geomanticElement +
		'</div><div class="col-6"><label>Outer Element:</label> ' +
			FIGURES[id].astrologicalElement +
		'</div><div class="col-6"><label>Planet:</label> ' +
			FIGURES[id].planet +
		'</div><div class="col-6"><label>Day:</label> ' +
			FIGURES[id].day +
		'</div><div class="col-6"><label>Direction:</label> ' +
			FIGURES[id].direction +
		'</div><div class="col-6"><label>Type:</label> ' +
			FIGURES[id].type +
		'</div><div class="col-6"><label>Stability:</label> ' +
			FIGURES[id].stability +
		'</div><div class="col-6"><label>Points:</label> ' +
			FIGURES[id].count +
		'</div><div class="col-6"><label>Zodiac:</label> ' +
			FIGURES[id].zodiac +
		'</div><div class="col-6"><label>Goodness:</label> ' +
			FIGURES[id].goodness +
		'</div><div class="col-6"><label>Time</label> ' +
			FIGURES[id].time +
		'</div><div class="col-6"><label>Humor</label> ' +
			FIGURES[id].humor +
		'</div><div class="col-12"><label>Gender</label> ' +
			FIGURES[id].gender +
		'</div></div></div>'
	);
}

$('body').on('click', '[data-target="#figureModal"]', function() {
	var id = $(this).data('id');
	var target = $($(this).data('target'));

	setModalContent(target, id);

	target.modal('show');
});

$('.modal-content').on('click', '.updateModal', function() {
	var id = $(this).data('id');
	var target = $($(this).data('target'));

	setModalContent(target, id);
});

$('#questionForm').on('submit', function(e) {
	e.preventDefault();

	generate_chart();
	$('#questionModal').modal('hide');

	var questionValue = $('#questionInput').val().trim();

	if (questionValue) {
		questionValue = questionValue[0].toUpperCase() + questionValue.slice(1);

		if (!questionValue.endsWith('?')) {
			questionValue = questionValue + '?';
		}

		$('#questionContent').text(questionValue);
		$('#houseQuestionContainer').text(questionValue);
		textFit($('#houseQuestionContainer')[0], {alignHoriz: true, alignVert: true, multiLine: true, minFontSize: 10, maxFontSize: 50, alignVertWithFlexbox: true});
		$('#questionHeader').collapse('show');
	} else {
		$('#questionContent').text('');
		$('#houseQuestionContainer').text('');
		$('#questionHeader').collapse('hide');
	}
});

$('#questionModal').on('shown.bs.modal', function() {
	$('#questionInput').trigger('focus');
});

$('#questionModal').on('hidden.bs.modal', function() {
  $('#questionInput').val('');
});

$('collapse').collapse();

generate_chart();
change_music(getRandomInt(0, MUSIC.length - 1));

$('#randMusic').on('click', function() {
	var id = getRandomInt(0, MUSIC.length - 1);

	change_music(id);
});

$('#nextMusic').on('click', function() {
	var id = parseInt($('#bcPlayer').data('id'), 10);

	if ((id >= MUSIC.length - 1) || isNaN(id)) {
		id = 0;
	} else {
		id++;
	}

	change_music(id);
});

$('#prevMusic').on('click', function() {
	var id = parseInt($('#bcPlayer').data('id'), 10);

	if (id <= 0 || isNaN(id)) {
		id = MUSIC.length - 1;
	} else {
		id--;
	}

	change_music(id);
});
