import { helper } from '@ember/component/helper';
import { isEmpty } from "@ember/utils"
import { format, parse } from 'libphonenumber-js'

const NATIONAL = 'National';
const INTERNATIONAL = 'International';

export function formatPhoneNumber(params, hash) {
	let [number, countryCode] = params;
	let forceIntl = hash.forceIntl || false;
	if(!countryCode){
		return number;
	}
	try {
		let parsedNumber = parse(number, countryCode);
		if(!isEmpty(parsedNumber.phone)){
			let formatType = parsedNumber.country === countryCode ? NATIONAL : INTERNATIONAL;
			return format(parsedNumber, forceIntl ? INTERNATIONAL : formatType);
		}
		return number;
	} catch (e) {
		return number;
	}
 }

export default helper(formatPhoneNumber);
