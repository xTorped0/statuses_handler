// const { BrowserWindow } = require('electron') ;
const { networkInterfaces } = require('os');
const { exec, spawn } = require("child_process");

const AutoLaunch = require("auto-launch");
const path = require("path");

const timeScript = () => {
	const timeElem = document.querySelector('.time')

	const int = setInterval(() => {
		var date = new Date();
		var dateStr =
			("00" + (date.getMonth() + 1)).slice(-2) + "/" +
			("00" + date.getDate()).slice(-2) + "/" +
			date.getFullYear() + " " +
			("00" + date.getHours()).slice(-2) + ":" +
			("00" + date.getMinutes()).slice(-2) + ":" +
			("00" + date.getSeconds()).slice(-2);
		timeElem.textContent = dateStr
	}, 1000)
}

const postgresScript = () => {
	const elem = document.querySelector('.prostird_controller')

	const interval = setInterval(() => {
		if (process.platform === 'linux') {
			exec("systemctl status 'postgresql'", (error, stdout, stderr) => {
				if (error) {
						console.log(`error: ${error.message}`);
						return;
				}
				if (stderr) {
						console.log(`stderr: ${stderr}`);
						return;
				}
				console.log(`stdout: ${stdout}`);
				// console.log(JSON.parse(stdout));
			});
			
			
		}
	}, 1000)
}

const autorunScript = () => {
	const elem = document.querySelector('.onStartup')
	
	elem.onclick = () => {
		// app.setLogitItemSettings({
		// 	openAtLogin: true
		// })
		console.log( `${__filename}`);
		// let autoLaunch = new AutoLaunch({
		// 	name: 'handling services',
		// 	path: `${__dirname}.exe`,
		// });
		// autoLaunch.isEnabled().then((isEnabled) => {
		// 	if (!isEnabled) autoLaunch.enable();
		// });
	}
}

const ipAdressesScript = () => {
	const elem = document.querySelector('.ipAddress');

	const getAdresses = () => {
		const nets = networkInterfaces();
		const results ={};

		for (const name of Object.keys(nets)) {
				for (const net of nets[name]) {
						// Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
						// 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
						const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
						if (net.family === familyV4Value && !net.internal) {
								if (!results[name]) {
										results[name] = [];
								}
								results[name].push(net.address);
						}
				}
		}

		elem.innerHTML = Object.entries(results).map(([key, value]) => {
			return `${key}: ${value.join('; ')}`
		}).join('<br>');
	};

	setInterval(getAdresses, 5000);

	getAdresses();
}

module.exports = { timeScript, postgresScript, autorunScript, ipAdressesScript }

// const status = ''
	// 	let command = 'ls -la' // "systemctl status prostird"
	// 	if (process.platform === 'linux') command+= 'sudo'
	// 	exec(command, (error, stdout, stderr) => {
	// 		if (error) {
	// 				console.log(`error: ${error.message}`);
	// 				return;
	// 		}
	// 		if (stderr) {
	// 				console.log(`stderr: ${stderr}`);
	// 				return;
	// 		}
	// 		console.log(`stdout: ${stdout}`);
	// 		console.log(JSON.parse(stdout));
	// });
		// elem.textContent = status