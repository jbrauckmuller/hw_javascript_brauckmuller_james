var iceCream = [
	'Chocolate Chip',
	'Vanilla',
	'Rock Road',
]
	'Chocolate Marshmallow'
;

var presidents = [
	{
		firstName: 'Barack',
		lastName: 'Obama',
		termLength: '6 years',
		party: 'Democrat',
		yearsOfPresidency: '2009-2015'
	},

	{
		firstName: 'George',
		lastName: 'Bush',
		termLength: '8 years',
		party: 'Republican',
		yearsOfPresidency: '2001-2009'
	}

	{
		firstName: 'Bill',
		lastName: 'Clinton',
		termLength: '8 years',
		party: 'Democrat',
		yearsOfPresidency: '1993-2001'
	},

	{
		firstName: 'George H W',
		lastName: 'Bush',
		termLength: '4 years',
		party: 'Republican',
		yearsOfPresidency: '1989-1993'
	},

	{
		firstName: 'Ronald',
		lastName: 'Reagan',
		termLength: '8 years',
		party: 'Republican',
		yearsOfPresidency: '2001-2009'
	}
];
	
console.log(presidents[2].firstName + " " + presidents[2].lastName);
    
function howdy() {
        console.log('Jamie Brauckmuller says hi!');
}

howdy();

var numba = function(string) {
	    if (string.length < 7) {
	    console.log('What a short little word!');
	}   else if (string.length > 7) {
	    console.log('I’m sorry, but that’s too many to count.')    
	}   else if (string.length = 7) {
	    console.log('7, what a perfect choice!') 
	}
};

numba("7");

numba("seventy");

numba("university");

function inception(callback,value) {
	callback(value);
}

inception(console.log.bind(console),"The Avengers is a fantastic movie");

