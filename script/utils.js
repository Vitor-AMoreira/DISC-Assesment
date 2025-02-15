// utils.js
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveResponseInRealTime(event) {
    const savedResponses = JSON.parse(localStorage.getItem("responses")) || {};
    savedResponses[event.target.name] = event.target.value;
    localStorage.setItem("responses", JSON.stringify(savedResponses));
}

function getHighestScoreDescription(scores, textMapping) {
    // Validate inputs
    if (!scores || typeof scores !== "object" || Object.keys(scores).length === 0) {
        console.error("Invalid scores object!");
        return "Descrição não disponível";
    }
    if (!textMapping || typeof textMapping !== "object") {
        console.error("Invalid textMapping object!");
        return "Descrição não disponível";
    }

    // Find the highest score key
    const highestKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData || !userData.name) {
        console.error("User data not found in localStorage!");
        return "Descrição não disponível";
    }

    // Get the description from textMapping
    const description = textMapping[highestKey]?.high;
    if (!description) {
        console.error(`Description not found for key: ${highestKey}`);
        return "Descrição não disponível";
    }

    // Combine user name and description
    return `${userData.name} ${description}`;
}


function determineUserProfile(scores) {
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
}

function getDevelopmentSuggestions(profileKey) {
    const suggestions = {
        D: ["Aprenda a exercitar a paciência em situações desafiadoras, buscando compreender diferentes perspetivas antes de agir.", "Dedique-se a ouvir os outros com atenção, valorizando as contribuições e criando um ambiente de colaboração.","Trabalhe no desenvolvimento das suas habilidades de cooperação, equilibrando a liderança com o trabalho em equipa."],
        I: ["Treine a sua capacidade de foco, estabelecendo prioridades claras para manter a concentração em tarefas essenciais.", "Desenvolva uma abordagem analítica, complementando a sua criatividade com uma avaliação crítica mais estruturada.", "Encoraje-se a concluir tarefas com consistência, celebrando cada etapa como uma vitória no caminho para os seus objetivos."],
        S: ["Adapte-se melhor às mudanças, aceitando a imprevisibilidade como uma oportunidade para aprender e crescer.", "Exercite a assertividade nas suas comunicações, garantindo que as suas ideias sejam ouvidas de forma clara e respeitosa.", "Explore novas formas de pensar e abordar problemas, ampliando a sua zona de conforto com curiosidade e coragem."],
        C: ["Cultive uma maior flexibilidade, aprendendo a adaptar-se a situações fora dos padrões habituais e abraçando a mudança.", "Estimule o pensamento criativo, permitindo-se experimentar ideias inovadoras sem medo de errar.", "Abra-se a opções e abordagens diferentes, valorizando perspetivas alternativas para enriquecer as suas soluções."]
    };

    return suggestions[profileKey] || ["Nenhuma sugestão disponível"];
}

function determineWorkEnvironment(scores, workEnvironmentTexts) {
    return Object.keys(scores).map(key => {
        const score = scores[key];
        const environment = workEnvironmentTexts[key]; // Ensure key exists
        if (!environment) return null;

        if (score <= 25) return environment.low;
        if (score <= 50) return environment.medium;
        if (score <= 75) return environment.high;
        return environment.veryHigh;
    }).filter(Boolean); // Filter out null or undefined values
}

function getPredominantProfiles(scores) {
    // Array com as dimensões e seus respectivos valores
    const dimensions = [
        { label: "Dominância", letter: "D", value: scores["D"] },
        { label: "Influência", letter: "I", value: scores["I"] },
        { label: "Estabilidade", letter: "S", value: scores["S"] },
        { label: "Conformidade", letter: "C", value: scores["C"] },
    ];

    // Ordenar as dimensões por valor (decrescente)
    dimensions.sort((a, b) => b.value - a.value);

    // Retornar as dimensões predominantes
    if (dimensions[0].value - dimensions[1].value > 20) {
        return dimensions.slice(0, 1); // Apenas o perfil predominante
    } else {
        return dimensions.slice(0, 2); // Dois perfis predominantes
    }
}

function generateDynamicTitle(predominantProfiles) {
    const profileLetters = predominantProfiles.map(profile => profile.letter).join("");
    const profileDescriptions = predominantProfiles.map(profile => profile.label).join(" e ");

    return `${profileDescriptions} (${profileLetters})`;
}



export {validateEmail,
        saveResponseInRealTime,
        getHighestScoreDescription,
        determineUserProfile,
        getDevelopmentSuggestions,
        determineWorkEnvironment,
        getPredominantProfiles,
        generateDynamicTitle
        };
