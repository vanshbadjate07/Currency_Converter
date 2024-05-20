const currencies = [
    { code: 'USD', country: 'United States', currency: 'US Dollar' },
    { code: 'EUR', country: 'Eurozone', currency: 'Euro' },
    { code: 'GBP', country: 'United Kingdom', currency: 'British Pound' },
    { code: 'INR', country: 'India', currency: 'Indian Rupee' },
    { code: 'AUD', country: 'Australia', currency: 'Australian Dollar' },
    { code: 'CAD', country: 'Canada', currency: 'Canadian Dollar' },
    { code: 'SGD', country: 'Singapore', currency: 'Singapore Dollar' },
    { code: 'JPY', country: 'Japan', currency: 'Japanese Yen' },
    { code: 'CNY', country: 'China', currency: 'Chinese Yuan' },
    { code: 'AED', country: 'United Arab Emirates', currency: 'UAE Dirham' },
    { code: 'AFN', country: 'Afghanistan', currency: 'Afghan Afghani' },
    { code: 'ALL', country: 'Albania', currency: 'Albanian Lek' },
    { code: 'AMD', country: 'Armenia', currency: 'Armenian Dram' },
    { code: 'ANG', country: 'Netherlands Antilles', currency: 'Netherlands Antillean Guilder' },
    { code: 'AOA', country: 'Angola', currency: 'Angolan Kwanza' },
    { code: 'ARS', country: 'Argentina', currency: 'Argentine Peso' },
    { code: 'AWG', country: 'Aruba', currency: 'Aruban Florin' },
    { code: 'AZN', country: 'Azerbaijan', currency: 'Azerbaijani Manat' },
    { code: 'BAM', country: 'Bosnia and Herzegovina', currency: 'Bosnia-Herzegovina Convertible Mark' },
    { code: 'BBD', country: 'Barbados', currency: 'Barbadian Dollar' },
    { code: 'BDT', country: 'Bangladesh', currency: 'Bangladeshi Taka' },
    { code: 'BGN', country: 'Bulgaria', currency: 'Bulgarian Lev' },
    { code: 'BHD', country: 'Bahrain', currency: 'Bahraini Dinar' },
    { code: 'BIF', country: 'Burundi', currency: 'Burundian Franc' },
    { code: 'BMD', country: 'Bermuda', currency: 'Bermudian Dollar' },
    { code: 'BND', country: 'Brunei', currency: 'Brunei Dollar' },
    { code: 'BOB', country: 'Bolivia', currency: 'Bolivian Boliviano' },
    { code: 'BRL', country: 'Brazil', currency: 'Brazilian Real' },
    { code: 'BSD', country: 'Bahamas', currency: 'Bahamian Dollar' },
    { code: 'BTN', country: 'Bhutan', currency: 'Bhutanese Ngultrum' },
    { code: 'BWP', country: 'Botswana', currency: 'Botswana Pula' },
    { code: 'BYN', country: 'Belarus', currency: 'Belarusian Ruble' },
    { code: 'BZD', country: 'Belize', currency: 'Belize Dollar' },
    { code: 'CDF', country: 'Congo/Kinshasa', currency: 'Congolese Franc' },
    { code: 'CHF', country: 'Switzerland', currency: 'Swiss Franc' },
    { code: 'CLP', country: 'Chile', currency: 'Chilean Peso' },
    { code: 'COP', country: 'Colombia', currency: 'Colombian Peso' },
    { code: 'CRC', country: 'Costa Rica', currency: 'Costa Rican Colón' },
    { code: 'CUC', country: 'Cuba', currency: 'Cuban Convertible Peso' },
    { code: 'CUP', country: 'Cuba', currency: 'Cuban Peso' },
    { code: 'CVE', country: 'Cape Verde', currency: 'Cape Verdean Escudo' },
    { code: 'CZK', country: 'Czech Republic', currency: 'Czech Republic Koruna' },
    { code: 'DJF', country: 'Djibouti', currency: 'Djiboutian Franc' },
    { code: 'DKK', country: 'Denmark', currency: 'Danish Krone' },
    { code: 'DOP', country: 'Dominican Republic', currency: 'Dominican Peso' },
    { code: 'DZD', country: 'Algeria', currency: 'Algerian Dinar' },
    { code: 'EGP', country: 'Egypt', currency: 'Egyptian Pound' },
    { code: 'ERN', country: 'Eritrea', currency: 'Eritrean Nakfa' },
    { code: 'ETB', country: 'Ethiopia', currency: 'Ethiopian Birr' },
    { code: 'FJD', country: 'Fiji', currency: 'Fijian Dollar' },
    { code: 'FKP', country: 'Falkland Islands', currency: 'Falkland Islands Pound' },
    { code: 'FOK', country: 'Faroe Islands', currency: 'Faroese Króna' },
    { code: 'GEL', country: 'Georgia', currency: 'Georgian Lari' },
    { code: 'GGP', country: 'Guernsey', currency: 'Guernsey Pound' },
    { code: 'GHS', country: 'Ghana', currency: 'Ghanaian Cedi' },
    { code: 'GIP', country: 'Gibraltar', currency: 'Gibraltar Pound' },
    { code: 'GMD', country: 'Gambia', currency: 'Gambian Dalasi' },
    { code: 'GNF', country: 'Guinea', currency: 'Guinean Franc' },
    { code: 'GTQ', country: 'Guatemala', currency: 'Guatemalan Quetzal' },
    { code: 'GYD', country: 'Guyana', currency: 'Guyanaese Dollar' },
    { code: 'HKD', country: 'Hong Kong', currency: 'Hong Kong Dollar' },
    { code: 'HNL', country: 'Honduras', currency: 'Honduran Lempira' },
    { code: 'HRK', country: 'Croatia', currency: 'Croatian Kuna' },
    { code: 'HTG', country: 'Haiti', currency: 'Haitian Gourde' },
    { code: 'HUF', country: 'Hungary', currency: 'Hungarian Forint' },
    { code: 'IDR', country: 'Indonesia', currency: 'Indonesian Rupiah' },
    { code: 'ILS', country: 'Israel', currency: 'Israeli New Shekel' },
    { code: 'IMP', country: 'Isle of Man', currency: 'Manx Pound' },
    { code: 'IQD', country: 'Iraq', currency: 'Iraqi Dinar' },
    { code: 'IRR', country: 'Iran', currency: 'Iranian Rial' },
    { code: 'ISK', country: 'Iceland', currency: 'Icelandic Króna' },
    { code: 'JEP', country: 'Jersey', currency: 'Jersey Pound' },
    { code: 'JMD', country: 'Jamaica', currency: 'Jamaican Dollar' },
    { code: 'JOD', country: 'Jordan', currency: 'Jordanian Dinar' },
    { code: 'KES', country: 'Kenya', currency: 'Kenyan Shilling' },
    { code: 'KGS', country: 'Kyrgyzstan', currency: 'Kyrgyzstani Som' },
    { code: 'KHR', country: 'Cambodia', currency: 'Cambodian Riel' },
    { code: 'KID', country: 'Kiribati', currency: 'Kiribati Dollar' },
    { code: 'KMF', country: 'Comoros', currency: 'Comorian Franc' },
    { code: 'KPW', country: 'North Korea', currency: 'North Korean Won' },
    { code: 'KRW', country: 'South Korea', currency: 'South Korean Won' },
    { code: 'KWD', country: 'Kuwait', currency: 'Kuwaiti Dinar' },
    { code: 'KYD', country: 'Cayman Islands', currency: 'Cayman Islands Dollar' },
    { code: 'KZT', country: 'Kazakhstan', currency: 'Kazakhstani Tenge' },
    { code: 'LAK', country: 'Laos', currency: 'Lao Kip' },
    { code: 'LBP', country: 'Lebanon', currency: 'Lebanese Pound' },
    { code: 'LKR', country: 'Sri Lanka', currency: 'Sri Lankan Rupee' },
    { code: 'LRD', country: 'Liberia', currency: 'Liberian Dollar' },
    { code: 'LSL', country: 'Lesotho', currency: 'Lesotho Loti' },
    { code: 'LYD', country: 'Libya', currency: 'Libyan Dinar' },
    { code: 'MAD', country: 'Morocco', currency: 'Moroccan Dirham' },
    { code: 'MDL', country: 'Moldova', currency: 'Moldovan Leu' },
    { code: 'MGA', country: 'Madagascar', currency: 'Malagasy Ariary' },
    { code: 'MKD', country: 'Macedonia', currency: 'Macedonian Denar' },
    { code: 'MMK', country: 'Myanmar', currency: 'Myanmar Kyat' },
    { code: 'MNT', country: 'Mongolia', currency: 'Mongolian Tugrik' },
    { code: 'MOP', country: 'Macau', currency: 'Macanese Pataca' },
    { code: 'MRU', country: 'Mauritania', currency: 'Mauritanian Ouguiya' },
    { code: 'MUR', country: 'Mauritius', currency: 'Mauritian Rupee' },
    { code: 'MVR', country: 'Maldives', currency: 'Maldivian Rufiyaa' },
    { code: 'MWK', country: 'Malawi', currency: 'Malawian Kwacha' },
    { code: 'MXN', country: 'Mexico', currency: 'Mexican Peso' },
    { code: 'MYR', country: 'Malaysia', currency: 'Malaysian Ringgit' },
    { code: 'MZN', country: 'Mozambique', currency: 'Mozambican Metical' },
    { code: 'NAD', country: 'Namibia', currency: 'Namibian Dollar' },
    { code: 'NGN', country: 'Nigeria', currency: 'Nigerian Naira' },
    { code: 'NIO', country: 'Nicaragua', currency: 'Nicaraguan Córdoba' },
    { code: 'NOK', country: 'Norway', currency: 'Norwegian Krone' },
    { code: 'NPR', country: 'Nepal', currency: 'Nepalese Rupee' },
    { code: 'NZD', country: 'New Zealand', currency: 'New Zealand Dollar' },
    { code: 'OMR', country: 'Oman', currency: 'Omani Rial' },
    { code: 'PAB', country: 'Panama', currency: 'Panamanian Balboa' },
    { code: 'PEN', country: 'Peru', currency: 'Peruvian Sol' },
    { code: 'PGK', country: 'Papua New Guinea', currency: 'Papua New Guinean Kina' },
    { code: 'PHP', country: 'Philippines', currency: 'Philippine Peso' },
    { code: 'PKR', country: 'Pakistan', currency: 'Pakistani Rupee' },
    { code: 'PLN', country: 'Poland', currency: 'Polish Złoty' },
    { code: 'PYG', country: 'Paraguay', currency: 'Paraguayan Guarani' },
    { code: 'QAR', country: 'Qatar', currency: 'Qatari Riyal' },
    { code: 'RON', country: 'Romania', currency: 'Romanian Leu' },
    { code: 'RSD', country: 'Serbia', currency: 'Serbian Dinar' },
    { code: 'RUB', country: 'Russia', currency: 'Russian Ruble' },
    { code: 'RWF', country: 'Rwanda', currency: 'Rwandan Franc' },
    { code: 'SAR', country: 'Saudi Arabia', currency: 'Saudi Riyal' },
    { code: 'SBD', country: 'Solomon Islands', currency: 'Solomon Islands Dollar' },
    { code: 'SCR', country: 'Seychelles', currency: 'Seychellois Rupee' },
    { code: 'SDG', country: 'Sudan', currency: 'Sudanese Pound' },
    { code: 'SEK', country: 'Sweden', currency: 'Swedish Krona' },
    { code: 'SGD', country: 'Singapore', currency: 'Singapore Dollar' },
    { code: 'SHP', country: 'Saint Helena', currency: 'Saint Helena Pound' },
    { code: 'SLL', country: 'Sierra Leone', currency: 'Sierra Leonean Leone' },
    { code: 'SOS', country: 'Somalia', currency: 'Somali Shilling' },
    { code: 'SRD', country: 'Suriname', currency: 'Surinamese Dollar' },
    { code: 'SSP', country: 'South Sudan', currency: 'South Sudanese Pound' },
    { code: 'STN', country: 'São Tomé and Príncipe', currency: 'São Tomé and Príncipe Dobra' },
    { code: 'SYP', country: 'Syria', currency: 'Syrian Pound' },
    { code: 'SZL', country: 'Eswatini', currency: 'Eswatini Lilangeni' },
    { code: 'THB', country: 'Thailand', currency: 'Thai Baht' },
    { code: 'TJS', country: 'Tajikistan', currency: 'Tajikistani Somoni' },
    { code: 'TMT', country: 'Turkmenistan', currency: 'Turkmenistani Manat' },
    { code: 'TND', country: 'Tunisia', currency: 'Tunisian Dinar' },
    { code: 'TOP', country: 'Tonga', currency: 'Tongan Paʻanga' },
    { code: 'TRY', country: 'Turkey', currency: 'Turkish Lira' },
    { code: 'TTD', country: 'Trinidad and Tobago', currency: 'Trinidad and Tobago Dollar' },
    { code: 'TVD', country: 'Tuvalu', currency: 'Tuvaluan Dollar' },
    { code: 'TWD', country: 'Taiwan', currency: 'New Taiwan Dollar' },
    { code: 'TZS', country: 'Tanzania', currency: 'Tanzanian Shilling' },
    { code: 'UAH', country: 'Ukraine', currency: 'Ukrainian Hryvnia' },
    { code: 'UGX', country: 'Uganda', currency: 'Ugandan Shilling' },
    { code: 'UYU', country: 'Uruguay', currency: 'Uruguayan Peso' },
    { code: 'UZS', country: 'Uzbekistan', currency: 'Uzbekistani Som' },
    { code: 'VES', country: 'Venezuela', currency: 'Venezuelan Bolívar' },
    { code: 'VND', country: 'Vietnam', currency: 'Vietnamese Đồng' },
    { code: 'VUV', country: 'Vanuatu', currency: 'Vanuatu Vatu' },
    { code: 'WST', country: 'Samoa', currency: 'Samoan Tālā' },
    { code: 'XAF', country: 'Central African CFA franc', currency: 'Central African CFA Franc' },
    { code: 'XCD', country: 'East Caribbean Dollar', currency: 'East Caribbean Dollar' },
    { code: 'XDR', country: 'Special Drawing Rights', currency: 'Special Drawing Rights' },
    { code: 'XOF', country: 'West African CFA franc', currency: 'West African CFA Franc' },
    { code: 'XPF', country: 'CFP franc', currency: 'CFP Franc' },
    { code: 'YER', country: 'Yemen', currency: 'Yemeni Rial' },
    { code: 'ZAR', country: 'South Africa', currency: 'South African Rand' },
    { code: 'ZMW', country: 'Zambia', currency: 'Zambian Kwacha' },
    { code: 'ZWL', country: 'Zimbabwe', currency: 'Zimbabwean Dollar' }
];

const fromCurrencyList = document.getElementById('fromCurrencyList');
const toCurrencyList = document.getElementById('toCurrencyList');

function populateCurrencyList() {
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = `${currency.country} (${currency.currency}) [${currency.code}]`;
        fromCurrencyList.appendChild(option);
        toCurrencyList.appendChild(option.cloneNode(true));
    });
}

populateCurrencyList();

document.getElementById('convertButton').addEventListener('click', () => {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    const fromCurrencyCode = getCurrencyCode(fromCurrency);
    const toCurrencyCode = getCurrencyCode(toCurrency);

    if (!fromCurrencyCode || !toCurrencyCode || !amount) {
        showError('Please fill in all fields correctly.');
        return;
    }

    convertCurrency(fromCurrencyCode, toCurrencyCode, amount);
});

function getCurrencyCode(currency) {
    const match = currency.match(/\[(.*?)\]/);
    return match ? match[1] : null;
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
}

async function convertCurrency(fromCurrency, toCurrency, amount) {
    const apiKey = '03f29b9552fb2d65b4ae6302';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result === 'error') {
            showError(data['error-type']);
        } else {
            const conversionRate = data.conversion_rate;
            const convertedAmount = (amount * conversionRate).toFixed(2);
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        }
    } catch (error) {
        showError('An error occurred. Please try again later.');
    }
}
