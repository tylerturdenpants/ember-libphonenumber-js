import { helper } from '@ember/component/helper';
import { format, parse } from 'libphonenumber-js'

const NATIONAL = 'National';
const INTERNATIONAL = 'International';

export function formatPhoneNumber(params/*, hash*/) {
	let [number, countryCode] = params;
	let parsedNumber = parse(number, countryCode);
	let formatType = parsedNumber.country === countryCode ? NATIONAL : INTERNATIONAL;
	return format(parsedNumber, formatType);
}

export default helper(formatPhoneNumber);
