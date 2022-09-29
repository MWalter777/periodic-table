// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IElement } from 'interfaces/IElement';
import type { NextApiRequest, NextApiResponse } from 'next';

const getEmptyElements = (quantity: number): IElement[] => {
	return new Array(quantity).fill({
		atomicNumber: 0,
		symbolTable: '',
		name: '',
		weight: 0,
		backgroundColor: '#fff',
	});
};

const elements: IElement[][] = [
	[
		{
			atomicNumber: 1,
			symbolTable: 'H',
			backgroundColor: '#f1f1f1',
			name: 'Hydrogen',
			weight: 1.0079,
		},
		...getEmptyElements(16),
		{
			atomicNumber: 2,
			symbolTable: 'He',
			backgroundColor: '#d9ffff',
			name: 'Helium',
			weight: 4.0026,
		},
	],
	[
		{
			atomicNumber: 3,
			symbolTable: 'Li',
			backgroundColor: '#cc80ff',
			name: 'Lithium',
			weight: 6.941,
		},
		{
			atomicNumber: 4,
			symbolTable: 'Be',
			backgroundColor: '#c2ff00',
			name: 'Beryllium',
			weight: 9.0122,
		},
		...getEmptyElements(10),
		{
			atomicNumber: 5,
			symbolTable: 'B',
			backgroundColor: '#ffb5b5',
			name: 'Boron',
			weight: 10.811,
		},
		{
			atomicNumber: 6,
			symbolTable: 'C',
			backgroundColor: '#909090',
			name: 'Carbon',
			weight: 12.0107,
		},
		{
			atomicNumber: 7,
			symbolTable: 'N',
			backgroundColor: '#3050f8',
			name: 'Nitrogen',
			weight: 14.0067,
		},
		{
			atomicNumber: 8,
			symbolTable: 'O',
			backgroundColor: '#ff0d0d',
			name: 'Oxygen',
			weight: 15.9994,
		},
		{
			atomicNumber: 9,
			symbolTable: 'F',
			backgroundColor: '#90e050',
			name: 'Fluorine',
			weight: 18.9984,
		},
		{
			atomicNumber: 10,
			symbolTable: 'Ne',
			backgroundColor: '#b3e3f5',
			name: 'Neon',
			weight: 20.1797,
		},
	],
	[
		{
			atomicNumber: 11,
			symbolTable: 'Na',
			backgroundColor: '#ab5cf2',
			name: 'Sodium',
			weight: 22.9897,
		},
		{
			atomicNumber: 12,
			symbolTable: 'Mg',
			backgroundColor: '#8aff00',
			name: 'Magnesium',
			weight: 24.305,
		},
		...getEmptyElements(10),
		{
			atomicNumber: 13,
			symbolTable: 'Al',
			backgroundColor: '#bfa6a6',
			name: 'Aluminum',
			weight: 26.9815,
		},
		{
			atomicNumber: 14,
			symbolTable: 'Si',
			backgroundColor: '#f0c8a0',
			name: 'Silicon',
			weight: 28.0855,
		},
		{
			atomicNumber: 15,
			symbolTable: 'P',
			backgroundColor: '#ff8000',
			name: 'Phosphorus',
			weight: 30.9738,
		},
		{
			atomicNumber: 16,
			symbolTable: 'S',
			backgroundColor: '#ffff30',
			name: 'Sulfur',
			weight: 32.065,
		},
		{
			atomicNumber: 17,
			symbolTable: 'Cl',
			backgroundColor: '#1ff01f',
			name: 'Chlorine',
			weight: 35.453,
		},
		{
			atomicNumber: 18,
			symbolTable: 'Ar',
			backgroundColor: '#80d1e3',
			name: 'Argon',
			weight: 39.948,
		},
	],
	[
		//periodic elements since 19 with format {atomicNumber: symbolTable: backgroundColor: name: weight:}
		{
			atomicNumber: 19,
			symbolTable: 'K',
			backgroundColor: '#8f40d4',
			name: 'Potassium',
			weight: 39.0983,
		},
		{
			atomicNumber: 20,
			symbolTable: 'Ca',
			backgroundColor: '#3dff00',
			name: 'Calcium',
			weight: 40.078,
		},
		{
			atomicNumber: 21,
			symbolTable: 'Sc',
			backgroundColor: '#e6e6e6',
			name: 'Scandium',
			weight: 44.9559,
		},
		{
			atomicNumber: 22,
			symbolTable: 'Ti',
			backgroundColor: '#bfc2c7',

			name: 'Titanium',
			weight: 47.867,
		},
		{
			atomicNumber: 23,
			symbolTable: 'V',
			backgroundColor: '#a6a6ab',
			name: 'Vanadium',
			weight: 50.9415,
		},
		{
			atomicNumber: 24,
			symbolTable: 'Cr',

			backgroundColor: '#8a99c7',
			name: 'Chromium',
			weight: 51.9961,
		},
		{
			atomicNumber: 25,
			symbolTable: 'Mn',
			backgroundColor: '#9c7ac7',
			name: 'Manganese',
			weight: 54.938,
		},
		{
			atomicNumber: 26,
			symbolTable: 'Fe',
			backgroundColor: '#e06633',
			name: 'Iron',
			weight: 55.845,
		},
		{
			atomicNumber: 27,
			symbolTable: 'Co',
			backgroundColor: '#f090a0',
			name: 'Cobalt',
			weight: 58.9332,
		},
		{
			atomicNumber: 28,
			symbolTable: 'Ni',
			backgroundColor: '#50d050',

			name: 'Nickel',
			weight: 58.6934,
		},
		{
			atomicNumber: 29,
			symbolTable: 'Cu',
			backgroundColor: '#c88033',
			name: 'Copper',
			weight: 63.546,
		},
		{
			atomicNumber: 30,
			symbolTable: 'Zn',
			backgroundColor: '#7d80b0',
			name: 'Zinc',
			weight: 65.38,
		},
		{
			atomicNumber: 31,
			symbolTable: 'Ga',
			backgroundColor: '#c28f8f',
			name: 'Gallium',
			weight: 69.723,
		},
		{
			atomicNumber: 32,
			symbolTable: 'Ge',
			backgroundColor: '#668f8f',
			name: 'Germanium',
			weight: 72.64,
		},
		{
			atomicNumber: 33,
			symbolTable: 'As',
			backgroundColor: '#bd80e3',
			name: 'Arsenic',
			weight: 74.9216,
		},
		{
			atomicNumber: 34,
			symbolTable: 'Se',
			backgroundColor: '#ffa100',
			name: 'Selenium',
			weight: 78.96,
		},
		{
			atomicNumber: 35,
			symbolTable: 'Br',
			backgroundColor: '#a62929',
			name: 'Bromine',
			weight: 79.904,
		},
		{
			atomicNumber: 36,
			symbolTable: 'Kr',
			backgroundColor: '#5cb8d1',
			name: 'Krypton',
			weight: 83.8,
		},
	],
	[
		{
			atomicNumber: 37,
			symbolTable: 'Rb',
			backgroundColor: '#702eb0',
			name: 'Rubidium',
			weight: 85.4678,
		},
		{
			atomicNumber: 38,
			symbolTable: 'Sr',
			backgroundColor: '#00ff00',
			name: 'Strontium',
			weight: 87.62,
		},
		{
			atomicNumber: 39,
			symbolTable: 'Y',
			backgroundColor: '#94ffff',
			name: 'Yttrium',
			weight: 88.9059,
		},
		{
			atomicNumber: 40,
			symbolTable: 'Zr',
			backgroundColor: '#94e0e0',
			name: 'Zirconium',
			weight: 91.224,
		},
		{
			atomicNumber: 41,
			symbolTable: 'Nb',
			backgroundColor: '#73c2c9',
			name: 'Niobium',
			weight: 92.9064,
		},
		{
			atomicNumber: 42,
			symbolTable: 'Mo',
			backgroundColor: '#54b5b5',
			name: 'Molybdenum',
			weight: 95.94,
		},
		{
			atomicNumber: 43,
			symbolTable: 'Tc',
			backgroundColor: '#3b9e9e',
			name: 'Technetium',
			weight: 98,
		},
		{
			atomicNumber: 44,
			symbolTable: 'Ru',
			backgroundColor: '#248f8f',
			name: 'Ruthenium',
			weight: 101.07,
		},
		{
			atomicNumber: 45,
			symbolTable: 'Rh',
			backgroundColor: '#0a7d8c',
			name: 'Rhodium',
			weight: 102.9055,
		},
		{
			atomicNumber: 46,
			symbolTable: 'Pd',
			backgroundColor: '#006985',
			name: 'Palladium',
			weight: 106.42,
		},
		{
			atomicNumber: 47,
			symbolTable: 'Ag',
			backgroundColor: '#c0c0c0',
			name: 'Silver',
			weight: 107.8682,
		},
		{
			atomicNumber: 48,
			symbolTable: 'Cd',
			backgroundColor: '#ffd98f',
			name: 'Cadmium',
			weight: 112.411,
		},
		{
			atomicNumber: 49,
			symbolTable: 'In',
			backgroundColor: '#a67573',
			name: 'Indium',
			weight: 114.818,
		},
		{
			atomicNumber: 50,
			symbolTable: 'Sn',
			backgroundColor: '#668080',
			name: 'Tin',
			weight: 118.71,
		},
		{
			atomicNumber: 51,
			symbolTable: 'Sb',
			backgroundColor: '#9e63b5',
			name: 'Antimony',
			weight: 121.76,
		},
		{
			atomicNumber: 52,
			symbolTable: 'Te',
			backgroundColor: '#d47a00',
			name: 'Tellurium',
			weight: 127.6,
		},
		{
			atomicNumber: 53,
			symbolTable: 'I',
			backgroundColor: '#940094',
			name: 'Iodine',
			weight: 126.9045,
		},
		{
			atomicNumber: 54,
			symbolTable: 'Xe',
			backgroundColor: '#429eb0',
			name: 'Xenon',
			weight: 131.293,
		},
	],
	[
		{
			atomicNumber: 55,
			symbolTable: 'Cs',
			backgroundColor: '#57178f',
			name: 'Cesium',
			weight: 132.9055,
		},
		{
			atomicNumber: 56,
			symbolTable: 'Ba',
			backgroundColor: '#00c900',
			name: 'Barium',
			weight: 137.327,
		},
		...getEmptyElements(1),
		{
			atomicNumber: 72,
			symbolTable: 'Hf',
			backgroundColor: '#4dc2ff',
			name: 'Hafnium',
			weight: 178.49,
		},
		{
			atomicNumber: 73,
			symbolTable: 'Ta',
			backgroundColor: '#4da6ff',
			name: 'Tantalum',
			weight: 180.9479,
		},
		{
			atomicNumber: 74,
			symbolTable: 'W',
			backgroundColor: '#2194d6',
			name: 'Tungsten',
			weight: 183.84,
		},
		{
			atomicNumber: 75,
			symbolTable: 'Re',
			backgroundColor: '#267dab',
			name: 'Rhenium',
			weight: 186.207,
		},
		{
			atomicNumber: 76,
			symbolTable: 'Os',
			backgroundColor: '#266696',
			name: 'Osmium',
			weight: 190.23,
		},
		{
			atomicNumber: 77,
			symbolTable: 'Ir',
			backgroundColor: '#175487',
			name: 'Iridium',
			weight: 192.217,
		},
		{
			atomicNumber: 78,
			symbolTable: 'Pt',
			backgroundColor: '#d0d0e0',
			name: 'Platinum',
			weight: 195.078,
		},
		{
			atomicNumber: 79,
			symbolTable: 'Au',
			backgroundColor: '#ffd123',
			name: 'Gold',
			weight: 196.9665,
		},
		{
			atomicNumber: 80,
			symbolTable: 'Hg',
			backgroundColor: '#b8b8d0',
			name: 'Mercury',
			weight: 200.59,
		},
		{
			atomicNumber: 81,
			symbolTable: 'Tl',
			backgroundColor: '#a6544d',
			name: 'Thallium',
			weight: 204.3833,
		},
		{
			atomicNumber: 82,
			symbolTable: 'Pb',
			backgroundColor: '#575961',
			name: 'Lead',
			weight: 207.2,
		},
		{
			atomicNumber: 83,
			symbolTable: 'Bi',
			backgroundColor: '#9e4fb5',
			name: 'Bismuth',
			weight: 208.9804,
		},
		{
			atomicNumber: 84,
			symbolTable: 'Po',
			backgroundColor: '#ab5c00',
			name: 'Polonium',
			weight: 209,
		},
		{
			atomicNumber: 85,
			symbolTable: 'At',
			backgroundColor: '#754f45',
			name: 'Astatine',
			weight: 210,
		},
		{
			atomicNumber: 86,
			symbolTable: 'Rn',
			backgroundColor: '#428296',
			name: 'Radon',
			weight: 222,
		},
	],
	[
		{
			atomicNumber: 87,
			symbolTable: 'Fr',
			backgroundColor: '#420066',
			name: 'Francium',
			weight: 223,
		},
		{
			atomicNumber: 88,
			symbolTable: 'Ra',
			backgroundColor: '#007d00',
			name: 'Radium',
			weight: 226,
		},
		...getEmptyElements(1),
		{
			atomicNumber: 104,
			symbolTable: 'Rf',
			backgroundColor: '#267dab',
			name: 'Rutherfordium',
			weight: 261,
		},
		{
			atomicNumber: 105,
			symbolTable: 'Db',
			backgroundColor: '#266696',
			name: 'Dubnium',
			weight: 262,
		},
		{
			atomicNumber: 106,
			symbolTable: 'Sg',
			backgroundColor: '#175487',
			name: 'Seaborgium',
			weight: 263,
		},
		{
			atomicNumber: 107,
			symbolTable: 'Bh',
			backgroundColor: '#d0d0e0',
			name: 'Bohrium',
			weight: 262,
		},
		{
			atomicNumber: 108,
			symbolTable: 'Hs',
			backgroundColor: '#ffd123',
			name: 'Hassium',
			weight: 265,
		},
		{
			atomicNumber: 109,
			symbolTable: 'Mt',
			backgroundColor: '#b8b8d0',
			name: 'Meitnerium',
			weight: 266,
		},
		{
			atomicNumber: 110,
			symbolTable: 'Ds',
			backgroundColor: '#a6544d',
			name: 'Darmstadtium',
			weight: 269,
		},
		{
			atomicNumber: 111,
			symbolTable: 'Rg',
			backgroundColor: '#575961',
			name: 'Roentgenium',
			weight: 272,
		},
		{
			atomicNumber: 112,
			symbolTable: 'Cn',
			backgroundColor: '#9e4fb5',
			name: 'Copernicium',
			weight: 277,
		},
		{
			atomicNumber: 113,
			symbolTable: 'Nh',
			backgroundColor: '#ab5c00',
			name: 'Nihonium',
			weight: 286,
		},
		{
			atomicNumber: 114,
			symbolTable: 'Fl',
			backgroundColor: '#754f45',
			name: 'Flerovium',
			weight: 289,
		},
		{
			atomicNumber: 115,
			symbolTable: 'Mc',
			backgroundColor: '#428296',
			name: 'Moscovium',
			weight: 290,
		},
		{
			atomicNumber: 116,
			symbolTable: 'Lv',
			backgroundColor: '#420066',
			name: 'Livermorium',
			weight: 293,
		},
		{
			atomicNumber: 117,
			symbolTable: 'Ts',
			backgroundColor: '#007d00',
			name: 'Tennessine',
			weight: 294,
		},
		{
			atomicNumber: 118,
			symbolTable: 'Og',
			backgroundColor: '#267dab',
			name: 'Oganesson',
			weight: 294,
		},
	],
	[...getEmptyElements(18)],
	[
		...getEmptyElements(3),
		{
			atomicNumber: 57,
			symbolTable: 'La',
			backgroundColor: '#70d4ff',
			name: 'Lanthanum',
			weight: 138.9055,
		},
		{
			atomicNumber: 58,
			symbolTable: 'Ce',
			backgroundColor: '#ffffc7',
			name: 'Cerium',
			weight: 140.116,
		},
		{
			atomicNumber: 59,
			symbolTable: 'Pr',
			backgroundColor: '#d9ffc7',
			name: 'Praseodymium',
			weight: 140.9077,
		},
		{
			atomicNumber: 60,
			symbolTable: 'Nd',
			backgroundColor: '#c7ffc7',
			name: 'Neodymium',
			weight: 144.24,
		},
		{
			atomicNumber: 61,
			symbolTable: 'Pm',
			backgroundColor: '#a3ffc7',
			name: 'Promethium',
			weight: 145,
		},
		{
			atomicNumber: 62,
			symbolTable: 'Sm',
			backgroundColor: '#8fffc7',
			name: 'Samarium',
			weight: 150.36,
		},
		{
			atomicNumber: 63,
			symbolTable: 'Eu',
			backgroundColor: '#61ffc7',
			name: 'Europium',
			weight: 151.964,
		},
		{
			atomicNumber: 64,
			symbolTable: 'Gd',
			backgroundColor: '#45ffc7',
			name: 'Gadolinium',
			weight: 157.25,
		},
		{
			atomicNumber: 65,
			symbolTable: 'Tb',
			backgroundColor: '#30ffc7',
			name: 'Terbium',
			weight: 158.9254,
		},
		{
			atomicNumber: 66,
			symbolTable: 'Dy',
			backgroundColor: '#1fffc7',
			name: 'Dysprosium',
			weight: 162.5,
		},
		{
			atomicNumber: 67,
			symbolTable: 'Ho',
			backgroundColor: '#00ff9c',
			name: 'Holmium',
			weight: 164.9304,
		},
		{
			atomicNumber: 68,
			symbolTable: 'Er',
			backgroundColor: '#00e675',
			name: 'Erbium',
			weight: 167.259,
		},
		{
			atomicNumber: 69,
			symbolTable: 'Tm',
			backgroundColor: '#00d452',
			name: 'Thulium',
			weight: 168.9342,
		},
		{
			atomicNumber: 70,
			symbolTable: 'Yb',
			backgroundColor: '#00bf38',
			name: 'Ytterbium',
			weight: 173.04,
		},
		{
			atomicNumber: 71,
			symbolTable: 'Lu',
			backgroundColor: '#00ab24',
			name: 'Lutetium',
			weight: 174.967,
		},
	],
	[
		...getEmptyElements(3),
		{
			atomicNumber: 89,
			symbolTable: 'Ac',
			backgroundColor: '#8a99c7',
			name: 'Actinium',
			weight: 227,
		},
		{
			atomicNumber: 90,
			symbolTable: 'Th',
			backgroundColor: '#9c7ac7',
			name: 'Thorium',
			weight: 232.0381,
		},
		{
			atomicNumber: 91,
			symbolTable: 'Pa',
			backgroundColor: '#e06633',
			name: 'Protactinium',
			weight: 231.0359,
		},
		{
			atomicNumber: 92,
			symbolTable: 'U',
			backgroundColor: '#f6b53f',
			name: 'Uranium',
			weight: 238.0289,
		},
		{
			atomicNumber: 93,
			symbolTable: 'Np',
			backgroundColor: '#f6a93f',
			name: 'Neptunium',
			weight: 237,
		},
		{
			atomicNumber: 94,
			symbolTable: 'Pu',
			backgroundColor: '#f69c3f',
			name: 'Plutonium',
			weight: 244,
		},
		{
			atomicNumber: 95,
			symbolTable: 'Am',
			backgroundColor: '#f6913f',
			name: 'Americium',
			weight: 243,
		},
		{
			atomicNumber: 96,
			symbolTable: 'Cm',
			backgroundColor: '#f6843f',
			name: 'Curium',
			weight: 247,
		},
		{
			atomicNumber: 97,
			symbolTable: 'Bk',
			backgroundColor: '#f6753f',
			name: 'Berkelium',
			weight: 247,
		},
		{
			atomicNumber: 98,
			symbolTable: 'Cf',
			backgroundColor: '#f5673f',
			name: 'Californium',
			weight: 251,
		},
		{
			atomicNumber: 99,
			symbolTable: 'Es',
			backgroundColor: '#f55e3f',
			name: 'Einsteinium',
			weight: 252,
		},
		{
			atomicNumber: 100,
			symbolTable: 'Fm',
			backgroundColor: '#f5533f',
			name: 'Fermium',
			weight: 257,
		},
		{
			atomicNumber: 101,
			symbolTable: 'Md',
			backgroundColor: '#f5473f',
			name: 'Mendelevium',
			weight: 258,
		},
		{
			atomicNumber: 102,
			symbolTable: 'No',
			backgroundColor: '#f53c3f',
			name: 'Nobelium',
			weight: 259,
		},
		{
			atomicNumber: 103,
			symbolTable: 'Lr',
			backgroundColor: '#f5313f',
			name: 'Lawrencium',
			weight: 262,
		},
	],
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IElement[][]>
) {
	res.status(200).json(elements);
}
