import clsx from 'clsx';
import './App.css';

function isFalse() {
	return false;
}

function App() {
	return (
		<>
			<div className={clsx( // foo bar baz
				'foo' // true
				, true && 'bar' // true
				, 'baz' // true
			)}></div>

			<div className={clsx({ // baz
				foo: isFalse(), // false
				bar: false, // false
				baz: true // true
			})}></div>

			<div className={clsx({ // bar baz
				foo: isFalse() // false
			}, {
				'bar': 'false' // true
			}, {
				baz: true // true
			})}></div>

			<div className={clsx( // ''
				true
				, false
				, ''
				, null
				, undefined
				, 0
				, NaN
			)}></div>

			<div className={clsx( // foo bar
				[
					'foo', // true
					0, // false
					false, // false
					'bar' // true
				]
			)}></div>

			<div className={clsx( // foo bar baz hello there
				['foo'], // true
				['', 0, false, 'bar'], // false false false true
				[
					['baz', // true
						[['hello'], 'there'] // true true
					]
				]
			)}></div>
			
			<div className={clsx( // foo bar hello world cya
				'foo', // true
				[1 && 'bar', // true
					{
						baz: false, // false
						bat: null // false
					},
					[
						'hello', // true
						['world'] // true
					]
				],
				'cya' // true
			)}></div>
		</>);
}

export default App;
