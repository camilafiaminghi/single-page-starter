import './scss/index.scss'

if (!PRODUCTION) {
	console.log('Running development mode');
}

class Init {
	example = () => {
		console.log('Class init, example function')
	}
}

export default Init

const init = new Init();
init.example()

