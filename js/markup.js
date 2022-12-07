// Avoid `console` errors in browsers that lack a console.
function getMarkup() {

	const wrapper = document.createElement("div");
	wrapper.id = "vrf-inner";
	let content = '';

	let titleSection = `
	<div id="vrf-range-output">
		<div id="estimated-range">
			<span id="estimated-range-value">500</span> Km
		</div>
		<div class="sub-title-estimate">${strings.title}</div>
	</div>`;
	content += titleSection;

	let imageSection = `
	<div id="vrf-car-image">
		<img src="img/VOYAH-FREE-green.png" alt="VOYAH FREE">
	</div>`;
	content += imageSection;

	let driveProfileSection = `
	<div id="vrf-driving-profile">
		<div class="subtitle">Kjøreprofil</div>
		<div id="vrf-driving-profile-range-wrapper">
			<input class="drive-type" id="range1" type="range" name="profile1" min="0" value="33" max="100" />
			<input class="drive-type" id="range2" type="range" name="profile2" min="0" value="66" max="100" />
		</div>
		<div id="vrf-driving-profile-inner">
			<div id="town">By</div>
			<div id="country">Landevei</div>
			<div id="highway">Motorvei</div>
		</div>
	</div>`;
	content += driveProfileSection;

	let temperaturSection = `
	<article id="vrf-temperatur">
		<div class="subtitle">Utetemperatur</div>
		<div id="vrf-temperaturrange-wrapper">
			<div class="slider-track"></div>
			<input id="range-temperatur" type="range" name="temperatur" min="-20" value="20" max="30" />
		</div>
		<div class="values">
			<span class="min-temp">-20&#8451;</span>
			<span id="curr-temp"> &dash; </span>
			<span class="max-temp">30&#8451;</span>
		</div>
	</article>`;
	content += temperaturSection;

	let wheelSection = `
	<div id="vrf-hjul">
		<div class="subtitle">Felger</div>
		<fieldset id="vrf-hjul-wrapper">
	
			
			<label class="wheel-select-item" for="felg18">
				<input type="radio" id="felg18" name="felg" value="1" checked>	
				<img src="img/hjul-18.png" width="60" height="60">			
				<span>18”</span>
			</label>
			
	
			<label class="wheel-select-item" for="felg20">
				<input type="radio" id="felg20" name="felg" value="0.98">
				<img src="img/hjul-20.png" width="60" height="60">
				<span>20”</span>
			</label>
			
	
			<label class="wheel-select-item" for="felg22">
				<input type="radio" id="felg22" name="felg" value="0.96">
				<img src="img/hjul-22.png" width="60" height="60">
				<span>22”</span>
			</label>
			
		</fieldset>
	</div>`;
	content += wheelSection;



	let modeSection = `
	<div id="vrf-modus">
		<div class="subtitle">Kjøremodus</div>
		<fieldset id="vrf-modus-wrapper">
	
			<label class="modus-select-item" for="modus-eco">
				<input type="radio" id="modus-eco" name="modus" value="0.99" checked>	
				<span>ECO</span>
			</label>
			
			<label class="modus-select-item" for="modus-comfort">
				<input type="radio" id="modus-comfort" name="modus" value="1.01">
				<span>Comfort</span>
			</label>
			
			<label class="modus-select-item" for="modus-performance">
				<input type="radio" id="modus-performance" name="modus" value="1.015">
				<span>Performance</span>
			</label>

			<label class="modus-select-item" for="modus-snow">
				<input type="radio" id="modus-snow" name="modus" value="1.02">
				<span>Snow</span>
			</label>

			<label class="modus-select-item" for="modus-individual">
				<input type="radio" id="modus-individual" name="modus" value="1.025">
				<span>Individual</span>
			</label>

			<label class="modus-select-item" for="modus-outing">
				<input type="radio" id="modus-outing" name="modus" value="1.03">
				<span>Outing</span>
			</label>
			
		</fieldset>
	</div>`;
	content += modeSection;
			


	wrapper.innerHTML = content;
	return(wrapper);
 
};
// getMarkup();

// Place any jQuery/helper plugins in here.
