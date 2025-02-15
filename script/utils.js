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
        D: ["Aprimore sua paciência", "Foque em escutar os outros", "Desenvolva habilidades de colaboração"],
        I: ["Pratique o foco e a concentração", "Desenvolva sua habilidade de análise crítica", "Foque em concluir tarefas"],
        S: ["Aprenda a lidar com mudanças", "Desenvolva a assertividade", "Explore novas abordagens e ideias"],
        C: ["Cultive a flexibilidade", "Encoraje o pensamento inovador", "Seja aberto a diferentes opções"]
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
