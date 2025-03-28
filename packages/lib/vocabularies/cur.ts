import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Cur {
    '': NamedNode<'http://qudt.org/vocab/currency/'>;
    "AED": NamedNode<'http://qudt.org/vocab/currency/AED'>;
    "AFN": NamedNode<'http://qudt.org/vocab/currency/AFN'>;
    "ALL": NamedNode<'http://qudt.org/vocab/currency/ALL'>;
    "AMD": NamedNode<'http://qudt.org/vocab/currency/AMD'>;
    "ANG": NamedNode<'http://qudt.org/vocab/currency/ANG'>;
    "AOA": NamedNode<'http://qudt.org/vocab/currency/AOA'>;
    "ARS": NamedNode<'http://qudt.org/vocab/currency/ARS'>;
    "AUD": NamedNode<'http://qudt.org/vocab/currency/AUD'>;
    "AWG": NamedNode<'http://qudt.org/vocab/currency/AWG'>;
    "AZN": NamedNode<'http://qudt.org/vocab/currency/AZN'>;
    "BAM": NamedNode<'http://qudt.org/vocab/currency/BAM'>;
    "BBD": NamedNode<'http://qudt.org/vocab/currency/BBD'>;
    "BDT": NamedNode<'http://qudt.org/vocab/currency/BDT'>;
    "BGN": NamedNode<'http://qudt.org/vocab/currency/BGN'>;
    "BHD": NamedNode<'http://qudt.org/vocab/currency/BHD'>;
    "BIF": NamedNode<'http://qudt.org/vocab/currency/BIF'>;
    "BMD": NamedNode<'http://qudt.org/vocab/currency/BMD'>;
    "BND": NamedNode<'http://qudt.org/vocab/currency/BND'>;
    "BOB": NamedNode<'http://qudt.org/vocab/currency/BOB'>;
    "BOV": NamedNode<'http://qudt.org/vocab/currency/BOV'>;
    "BRL": NamedNode<'http://qudt.org/vocab/currency/BRL'>;
    "BSD": NamedNode<'http://qudt.org/vocab/currency/BSD'>;
    "BTN": NamedNode<'http://qudt.org/vocab/currency/BTN'>;
    "BWP": NamedNode<'http://qudt.org/vocab/currency/BWP'>;
    "BYN": NamedNode<'http://qudt.org/vocab/currency/BYN'>;
    "BZD": NamedNode<'http://qudt.org/vocab/currency/BZD'>;
    "CAD": NamedNode<'http://qudt.org/vocab/currency/CAD'>;
    "CDF": NamedNode<'http://qudt.org/vocab/currency/CDF'>;
    "CHE": NamedNode<'http://qudt.org/vocab/currency/CHE'>;
    "CHF": NamedNode<'http://qudt.org/vocab/currency/CHF'>;
    "CHW": NamedNode<'http://qudt.org/vocab/currency/CHW'>;
    "CLF": NamedNode<'http://qudt.org/vocab/currency/CLF'>;
    "CLP": NamedNode<'http://qudt.org/vocab/currency/CLP'>;
    "CNY": NamedNode<'http://qudt.org/vocab/currency/CNY'>;
    "COP": NamedNode<'http://qudt.org/vocab/currency/COP'>;
    "COU": NamedNode<'http://qudt.org/vocab/currency/COU'>;
    "CRC": NamedNode<'http://qudt.org/vocab/currency/CRC'>;
    "CUP": NamedNode<'http://qudt.org/vocab/currency/CUP'>;
    "CVE": NamedNode<'http://qudt.org/vocab/currency/CVE'>;
    "CYP": NamedNode<'http://qudt.org/vocab/currency/CYP'>;
    "CZK": NamedNode<'http://qudt.org/vocab/currency/CZK'>;
    "DJF": NamedNode<'http://qudt.org/vocab/currency/DJF'>;
    "DKK": NamedNode<'http://qudt.org/vocab/currency/DKK'>;
    "DOP": NamedNode<'http://qudt.org/vocab/currency/DOP'>;
    "DZD": NamedNode<'http://qudt.org/vocab/currency/DZD'>;
    "EEK": NamedNode<'http://qudt.org/vocab/currency/EEK'>;
    "EGP": NamedNode<'http://qudt.org/vocab/currency/EGP'>;
    "ERN": NamedNode<'http://qudt.org/vocab/currency/ERN'>;
    "ETB": NamedNode<'http://qudt.org/vocab/currency/ETB'>;
    "EUR": NamedNode<'http://qudt.org/vocab/currency/EUR'>;
    "FJD": NamedNode<'http://qudt.org/vocab/currency/FJD'>;
    "FKP": NamedNode<'http://qudt.org/vocab/currency/FKP'>;
    "GBP": NamedNode<'http://qudt.org/vocab/currency/GBP'>;
    "GEL": NamedNode<'http://qudt.org/vocab/currency/GEL'>;
    "GHS": NamedNode<'http://qudt.org/vocab/currency/GHS'>;
    "GIP": NamedNode<'http://qudt.org/vocab/currency/GIP'>;
    "GMD": NamedNode<'http://qudt.org/vocab/currency/GMD'>;
    "GNF": NamedNode<'http://qudt.org/vocab/currency/GNF'>;
    "GTQ": NamedNode<'http://qudt.org/vocab/currency/GTQ'>;
    "GYD": NamedNode<'http://qudt.org/vocab/currency/GYD'>;
    "HKD": NamedNode<'http://qudt.org/vocab/currency/HKD'>;
    "HNL": NamedNode<'http://qudt.org/vocab/currency/HNL'>;
    "HRK": NamedNode<'http://qudt.org/vocab/currency/HRK'>;
    "HTG": NamedNode<'http://qudt.org/vocab/currency/HTG'>;
    "HUF": NamedNode<'http://qudt.org/vocab/currency/HUF'>;
    "IDR": NamedNode<'http://qudt.org/vocab/currency/IDR'>;
    "ILS": NamedNode<'http://qudt.org/vocab/currency/ILS'>;
    "INR": NamedNode<'http://qudt.org/vocab/currency/INR'>;
    "IQD": NamedNode<'http://qudt.org/vocab/currency/IQD'>;
    "IRR": NamedNode<'http://qudt.org/vocab/currency/IRR'>;
    "ISK": NamedNode<'http://qudt.org/vocab/currency/ISK'>;
    "JMD": NamedNode<'http://qudt.org/vocab/currency/JMD'>;
    "JOD": NamedNode<'http://qudt.org/vocab/currency/JOD'>;
    "JPY": NamedNode<'http://qudt.org/vocab/currency/JPY'>;
    "KES": NamedNode<'http://qudt.org/vocab/currency/KES'>;
    "KGS": NamedNode<'http://qudt.org/vocab/currency/KGS'>;
    "KHR": NamedNode<'http://qudt.org/vocab/currency/KHR'>;
    "KMF": NamedNode<'http://qudt.org/vocab/currency/KMF'>;
    "KPW": NamedNode<'http://qudt.org/vocab/currency/KPW'>;
    "KRW": NamedNode<'http://qudt.org/vocab/currency/KRW'>;
    "KWD": NamedNode<'http://qudt.org/vocab/currency/KWD'>;
    "KYD": NamedNode<'http://qudt.org/vocab/currency/KYD'>;
    "KZT": NamedNode<'http://qudt.org/vocab/currency/KZT'>;
    "LAK": NamedNode<'http://qudt.org/vocab/currency/LAK'>;
    "LBP": NamedNode<'http://qudt.org/vocab/currency/LBP'>;
    "LKR": NamedNode<'http://qudt.org/vocab/currency/LKR'>;
    "LRD": NamedNode<'http://qudt.org/vocab/currency/LRD'>;
    "LSL": NamedNode<'http://qudt.org/vocab/currency/LSL'>;
    "LTL": NamedNode<'http://qudt.org/vocab/currency/LTL'>;
    "LVL": NamedNode<'http://qudt.org/vocab/currency/LVL'>;
    "LYD": NamedNode<'http://qudt.org/vocab/currency/LYD'>;
    "MAD": NamedNode<'http://qudt.org/vocab/currency/MAD'>;
    "MDL": NamedNode<'http://qudt.org/vocab/currency/MDL'>;
    "MegaUSD": NamedNode<'http://qudt.org/vocab/currency/MegaUSD'>;
    "MGA": NamedNode<'http://qudt.org/vocab/currency/MGA'>;
    "MKD": NamedNode<'http://qudt.org/vocab/currency/MKD'>;
    "MMK": NamedNode<'http://qudt.org/vocab/currency/MMK'>;
    "MNT": NamedNode<'http://qudt.org/vocab/currency/MNT'>;
    "MOP": NamedNode<'http://qudt.org/vocab/currency/MOP'>;
    "MRU": NamedNode<'http://qudt.org/vocab/currency/MRU'>;
    "MTL": NamedNode<'http://qudt.org/vocab/currency/MTL'>;
    "MUR": NamedNode<'http://qudt.org/vocab/currency/MUR'>;
    "MVR": NamedNode<'http://qudt.org/vocab/currency/MVR'>;
    "MWK": NamedNode<'http://qudt.org/vocab/currency/MWK'>;
    "MXN": NamedNode<'http://qudt.org/vocab/currency/MXN'>;
    "MXV": NamedNode<'http://qudt.org/vocab/currency/MXV'>;
    "MYR": NamedNode<'http://qudt.org/vocab/currency/MYR'>;
    "MZN": NamedNode<'http://qudt.org/vocab/currency/MZN'>;
    "NAD": NamedNode<'http://qudt.org/vocab/currency/NAD'>;
    "NGN": NamedNode<'http://qudt.org/vocab/currency/NGN'>;
    "NIO": NamedNode<'http://qudt.org/vocab/currency/NIO'>;
    "NOK": NamedNode<'http://qudt.org/vocab/currency/NOK'>;
    "NPR": NamedNode<'http://qudt.org/vocab/currency/NPR'>;
    "NZD": NamedNode<'http://qudt.org/vocab/currency/NZD'>;
    "OMR": NamedNode<'http://qudt.org/vocab/currency/OMR'>;
    "PAB": NamedNode<'http://qudt.org/vocab/currency/PAB'>;
    "PEN": NamedNode<'http://qudt.org/vocab/currency/PEN'>;
    "PGK": NamedNode<'http://qudt.org/vocab/currency/PGK'>;
    "PHP": NamedNode<'http://qudt.org/vocab/currency/PHP'>;
    "PKR": NamedNode<'http://qudt.org/vocab/currency/PKR'>;
    "PLN": NamedNode<'http://qudt.org/vocab/currency/PLN'>;
    "PYG": NamedNode<'http://qudt.org/vocab/currency/PYG'>;
    "QAR": NamedNode<'http://qudt.org/vocab/currency/QAR'>;
    "RON": NamedNode<'http://qudt.org/vocab/currency/RON'>;
    "RSD": NamedNode<'http://qudt.org/vocab/currency/RSD'>;
    "RUB": NamedNode<'http://qudt.org/vocab/currency/RUB'>;
    "RWF": NamedNode<'http://qudt.org/vocab/currency/RWF'>;
    "SAR": NamedNode<'http://qudt.org/vocab/currency/SAR'>;
    "SBD": NamedNode<'http://qudt.org/vocab/currency/SBD'>;
    "SCR": NamedNode<'http://qudt.org/vocab/currency/SCR'>;
    "SDG": NamedNode<'http://qudt.org/vocab/currency/SDG'>;
    "SEK": NamedNode<'http://qudt.org/vocab/currency/SEK'>;
    "SGD": NamedNode<'http://qudt.org/vocab/currency/SGD'>;
    "SHP": NamedNode<'http://qudt.org/vocab/currency/SHP'>;
    "SKK": NamedNode<'http://qudt.org/vocab/currency/SKK'>;
    "SLE": NamedNode<'http://qudt.org/vocab/currency/SLE'>;
    "SOS": NamedNode<'http://qudt.org/vocab/currency/SOS'>;
    "SRD": NamedNode<'http://qudt.org/vocab/currency/SRD'>;
    "STN": NamedNode<'http://qudt.org/vocab/currency/STN'>;
    "SYP": NamedNode<'http://qudt.org/vocab/currency/SYP'>;
    "SZL": NamedNode<'http://qudt.org/vocab/currency/SZL'>;
    "THB": NamedNode<'http://qudt.org/vocab/currency/THB'>;
    "TJS": NamedNode<'http://qudt.org/vocab/currency/TJS'>;
    "TMT": NamedNode<'http://qudt.org/vocab/currency/TMT'>;
    "TND": NamedNode<'http://qudt.org/vocab/currency/TND'>;
    "TOP": NamedNode<'http://qudt.org/vocab/currency/TOP'>;
    "TRY": NamedNode<'http://qudt.org/vocab/currency/TRY'>;
    "TTD": NamedNode<'http://qudt.org/vocab/currency/TTD'>;
    "TWD": NamedNode<'http://qudt.org/vocab/currency/TWD'>;
    "TZS": NamedNode<'http://qudt.org/vocab/currency/TZS'>;
    "UAH": NamedNode<'http://qudt.org/vocab/currency/UAH'>;
    "UGX": NamedNode<'http://qudt.org/vocab/currency/UGX'>;
    "USD": NamedNode<'http://qudt.org/vocab/currency/USD'>;
    "USN": NamedNode<'http://qudt.org/vocab/currency/USN'>;
    "USS": NamedNode<'http://qudt.org/vocab/currency/USS'>;
    "UYU": NamedNode<'http://qudt.org/vocab/currency/UYU'>;
    "UZS": NamedNode<'http://qudt.org/vocab/currency/UZS'>;
    "VES": NamedNode<'http://qudt.org/vocab/currency/VES'>;
    "VND": NamedNode<'http://qudt.org/vocab/currency/VND'>;
    "VUV": NamedNode<'http://qudt.org/vocab/currency/VUV'>;
    "WST": NamedNode<'http://qudt.org/vocab/currency/WST'>;
    "XAF": NamedNode<'http://qudt.org/vocab/currency/XAF'>;
    "XAG": NamedNode<'http://qudt.org/vocab/currency/XAG'>;
    "XAU": NamedNode<'http://qudt.org/vocab/currency/XAU'>;
    "XBA": NamedNode<'http://qudt.org/vocab/currency/XBA'>;
    "XBB": NamedNode<'http://qudt.org/vocab/currency/XBB'>;
    "XBC": NamedNode<'http://qudt.org/vocab/currency/XBC'>;
    "XBD": NamedNode<'http://qudt.org/vocab/currency/XBD'>;
    "XCD": NamedNode<'http://qudt.org/vocab/currency/XCD'>;
    "XDR": NamedNode<'http://qudt.org/vocab/currency/XDR'>;
    "XFO": NamedNode<'http://qudt.org/vocab/currency/XFO'>;
    "XFU": NamedNode<'http://qudt.org/vocab/currency/XFU'>;
    "XOF": NamedNode<'http://qudt.org/vocab/currency/XOF'>;
    "XPD": NamedNode<'http://qudt.org/vocab/currency/XPD'>;
    "XPF": NamedNode<'http://qudt.org/vocab/currency/XPF'>;
    "XPT": NamedNode<'http://qudt.org/vocab/currency/XPT'>;
    "YER": NamedNode<'http://qudt.org/vocab/currency/YER'>;
    "ZAR": NamedNode<'http://qudt.org/vocab/currency/ZAR'>;
    "ZMW": NamedNode<'http://qudt.org/vocab/currency/ZMW'>;
    "ZWL": NamedNode<'http://qudt.org/vocab/currency/ZWL'>;
}

const builder = namespace("http://qudt.org/vocab/currency/") as any;
export const strict = builder as NamespaceBuilder<keyof Cur> & Cur;
export const loose = builder as NamespaceBuilder & Cur;
