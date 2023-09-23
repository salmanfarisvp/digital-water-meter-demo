(() => {
	data_value = 0;
	const init = () => {
		updateClock();
		setInterval(() => {
			updateClock();
		}, 250);
	};

	const updateClock = () => {
		resetClock();
		displayCurrentTime();
	};


	const displayCurrentTime = () => {
		
		// targets the html
		const data = document.getElementsByClassName('data')[0];
	

		// changes the html values
		data_txt = data_value.toString().padStart(6, "0");
		data.innerHTML = data_txt;
		data_value += 1;
		if(data_value == 999999){
			data_value = 0;
		}

	};

	const resetClock = () => {
		const lights = document.querySelectorAll(".light-on");

		if(lights) {
			lights.forEach(item => {
				item.classList.remove("light-on")
			});
		}
	};

	return init();
})()
