import moment from 'moment';

let prepositions = [
    /every other/,    
    /every/
];

let prepositionFunctions = { };

let weekdays = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
];

let prepositionDefault = 1;

const GetPrepositionsFromSegment = (segment) => {
    return prepositions.find((element) => {
        let match = segment.match(element);

        if(match) {
            return match[0];
        }

        return prepositions[1];
    });
}

const GetPrepositionsAndDataUsed = (segments) => {
    let entries = [];

    for(let x = 0; x < segments.length; ++ x) {
        let segment = segments[x];
        let preposition = GetPrepositionsFromSegment(segment);

        //data = segment.replace(preposition, '').trim();

        entries.push({
            preposition: preposition,
            data: null
        });
    }

    return entries;
}

const ParseDateString = (dateString) => {
    let segments = dateString.split(',').map((segment) => segment.trim());

    let entries = GetPrepositionsAndDataUsed(segments);

    return entries;
}

const getDateOfFirst = () => {
    let today = moment().startOf('month').format('d');

    return today;
}

console.log(getDateOfFirst());

ParseDateString('every other monday, wednesday');

export default ParseDateString;