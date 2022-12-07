// @codekit-prepend "markup.js";


window.addEventListener( 'DOMContentLoaded', (event) => {
	const mainWrap = document.querySelector('#vrf');
	const markup = getMarkup();
	mainWrap.appendChild(markup);

	const valueOutputEl = document.querySelector('#estimated-range-value');
	const baseRange = 500;

	/*drive type elements*/
	const r1 = document.querySelector('#range1');
	const r2 = document.querySelector('#range2');

	const town = document.querySelector('#town');
	const country = document.querySelector('#country');
	const highway = document.querySelector('#highway');
	
	let profile1 = 33.3;
	let profile2 = 33.3;
	let profile3 = 33.3;

	let r1_max = 65;
	let r2_min = 34;
	r1.addEventListener('input', function(ev) { 
		if (ev.target.valueAsNumber >= r1_max){
			ev.target.valueAsNumber = r1_max;
			ev.preventDefault();
			return;
		}
		calculateProfileMath();
		r2_min = ev.target.valueAsNumber;
	});
	// r1.addEventListener('change', function(ev) {});


	r2.addEventListener('input', function(ev) { 
	  if (ev.target.valueAsNumber <= r2_min){
		ev.target.valueAsNumber = r2_min+1;
		ev.preventDefault();
		return;
	  }
	  calculateProfileMath();
	  r1_max = ev.target.valueAsNumber;
	});
	// r2.addEventListener('change', function(ev) {});

	function calculateProfileMath(){
		profile1 = Number(r1.value);
		profile2 = Number(r2.value - r1.value);
		profile3 = Number(100 - r2.value);
		
		town.style.flexBasis = profile1+'%';
		country.style.flexBasis = profile2+'%';
		highway.style.flexBasis = profile3+'%';
		calculateMath();
	}


	
	/*temperatur elements*/
	const rangeTemperatur = document.querySelector('#range-temperatur');
	const tempLedgend = document.querySelector('#curr-temp');
	let currTemp = rangeTemperatur.valueAsNumber;
	let tempMaxValue = parseInt(document.querySelector('#range-temperatur').max);
	let sliderTrack = document.querySelector(".slider-track");
	let tempSliderPercent = ( (currTemp+20) / (tempMaxValue+20) ) * 100;
	tempLedgend.innerHTML = rangeTemperatur.value+'&#8451;';
	sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${tempSliderPercent}% , #3264fe ${tempSliderPercent}%`;
	rangeTemperatur.addEventListener('input', function(ev) { 
		currTemp = ev.target.valueAsNumber;
		tempLedgend.innerHTML = ev.target.value+'&#8451;';
		calculateMath();

		tempSliderPercent = ( (currTemp+20) / (tempMaxValue+20) ) * 100;
		console.log(tempSliderPercent);
		sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${tempSliderPercent}% , #3264fe ${tempSliderPercent}%`;
	});



	/*wheel elements*/
	const wheelRadios = document.querySelector('#vrf-hjul-wrapper');
	let currWheelVal =  document.querySelector('input[name="felg"]:checked').value;
	wheelRadios.addEventListener('change', function(ev) { 
		currWheelVal = ev.target.value;
		calculateMath();
	});

	/*modus elements*/
	const modusRadios = document.querySelector('#vrf-modus-wrapper');
	let currModusVal =  document.querySelector('input[name="modus"]:checked').value;
	modusRadios.addEventListener('change', function(ev) { 
		currModusVal = ev.target.value;
		calculateMath();
	});




	function calculateMath(){
		let profileAddend = ( baseRange * ((profile1*1.04) + (profile2) + (profile3*0.96)) / 100 ) - baseRange;
		let tempAddend = 	( currTemp - 20)*0.8;
		let wheelAddend = 	( baseRange * currWheelVal ) - baseRange;
		let modusAddend = 	( baseRange * currModusVal ) - baseRange;
		
		// console.log(currWheelVal);
		currentRange = baseRange + tempAddend + profileAddend + wheelAddend + modusAddend;
		valueOutputEl.textContent = parseInt(currentRange);
	}



  });