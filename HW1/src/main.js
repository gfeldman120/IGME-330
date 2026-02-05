const words1 = ["Acute", "Aft", "Anti-matter", "Bipolar", "Cargo", "Command", "Communication", "Computer", "Deuterium", "Dorsal", "Emergency", "Engineering", "Environmental", "Flight", "Fore", "Guidance", "Heat", "Impulse", "Increased", "Inertial", "Infinite", "Ionizing", "Isolinear", "Lateral", "Linear", "Matter", "Medical", "Navigational", "Optical", "Optimal", "Optional", "Personal", "Personnel", "Phased", "Reduced", "Science", "Ship's", "Shuttlecraft", "Structural", "Subspace", "Transporter", "Ventral"];

const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];

const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];

console.log(words1[0]);

// Variables
let text;
let button;
let fiveButton;
const wordsArrays = [words1, words2, words3];

// Get elements with querySelector, generate 1 technobabble
const init = () => {
    text = document.querySelector(`#output`);
    button = document.querySelector(`#btn-gen-1`);
    fiveButton = document.querySelector(`#btn-gen-5`);
    button.addEventListener(`click`, () => generateTechno(1));
    fiveButton.addEventListener(`click`, () => generateTechno(5));
    generateTechno(1);
}

// Generate as many technobabbles as specified
const generateTechno = (count) => {
    let result = "";
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < wordsArrays.length; j++) {
            result += `${randomElement(wordsArrays[j])} `;
        }
        result += `<br>`;
    }
    text.innerHTML = result;
}

// Get a random element from an array
const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

// Once all HTML has loaded
window.onload = () => {
    init();
}
