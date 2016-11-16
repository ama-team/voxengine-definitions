/**
 * @namespace PhoneNumber
 */

/**
 * Get phone number info.
 *
 * ###Example
 *
 * Transform number dialed in US format to international format
 *
 * ```
 * getPhoneNumberInfo("01174951234567", "US").number;
 * ```
 *
 * @function PhoneNumber.getInfo
 *
 * @param {string} number Phone number in country specific format, or E.164 if starts with +
 * @param {('RU', 'US')} country 2-digit country code to get number format, if not specified, number is treated as
 * E.164, e.g. "RU", "US"
 *
 * @return {PhoneNumber.Info}
 */

/**
 * @class PhoneNumber.Info
 *
 * @property {('INVALID_COUNTRY_CODE', 'NOT_A_NUMBER', 'TOO_SHORT_AFTER_IDD', 'TOO_SHORT_NSN', 'TOO_LONG_NSN')} error
 *   Optional error string
 * @property {boolean} isPossibleNumber Is number possible in specified country (just by analyzing length infomation)
 * @property {boolean} isValidNumber Is number valid in specified country
 * @property {boolean} isValidNumberForRegion Is number valid in detected region
 * @property {string} number Number in international E.164 format, starting with +
 * @property {('FIXED_LINE', 'MOBILE', 'FIXED_LINE_OR_MOBILE', 'TOLL_FREE', 'PREMIUM_RATE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL', 'UNKNOWN')} numberType
 * @property {string} region 2-digit country code of specified phone number (ISO 3166-1)
 */