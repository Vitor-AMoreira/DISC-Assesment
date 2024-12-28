
const workEnvironmentTexts = {
    D: {
        low: "Prefere trabalhar em ambientes onde os conflitos são minimizados e as decisões são alcançadas por consenso. Estes contextos oferecem tranquilidade e foco no trabalho coletivo, proporcionando segurança na gestão de desafios diários.",
        medium: "Gosta de ambientes desafiadores, mas com suporte adequado na tomada de decisões. Procura contextos que valorizem a sua capacidade de resolver problemas com orientações claras quando necessário.",
        high: "Prefere ambientes competitivos e orientados para resultados, com liberdade para decisões rápidas. Estes cenários alimentam a motivação por metas desafiadoras e superação ágil de adversidades.",
        veryHigh: "Exige trabalhar em ambientes de alta pressão e desafios constantes, liderando com autonomia. Nestes contextos, a busca por resultados é prioritária, e a independência é essencial."
    },
    I: {
        low: "Prefere ambientes calmos e reservados, com interações sociais limitadas e foco no trabalho individual. Estes cenários permitem maior concentração e evitam distrações, promovendo um desempenho focado.",
        medium: "Valoriza ambientes colaborativos que equilibrem momentos de trabalho individual e interação social. Gosta de contextos onde possa trocar ideias sem dinâmicas grupais excessivas.",
        high: "Prefere ambientes vibrantes e criativos, com oportunidades constantes de interagir com colegas. Estes cenários inspiram inovação e mantêm a energia elevada para explorar ideias.",
        veryHigh: "Exige contextos dinâmicos e sociais, onde a criatividade e a expressão pessoal sejam incentivadas. Ambientes que promovem interação frequente e atividades coletivas são essenciais para o seu desenvolvimento."
    },
    S: {
        low: "Trabalha melhor em ambientes que introduzem mudanças de forma estruturada e previsível. Estes contextos oferecem segurança e ajudam a adaptar-se gradualmente a novos processos.",
        medium: "Prefere ambientes equilibrados, com rotinas claras e estabilidade. Estes cenários permitem eficiência e garantem conforto e confiança no dia a dia.",
        high: "Procura ambientes tranquilos e previsíveis, com suporte constante de colegas e líderes. Este tipo de contexto promove uma sensação de pertença e foco nas tarefas.",
        veryHigh: "Exige trabalhar em ambientes altamente estáveis, com baixa pressão e relações harmoniosas. Gosta de contextos onde previsibilidade e apoio sejam constantes, garantindo tranquilidade."
    },
    C: {
        low: "Prefere ambientes flexíveis, com poucas regras e estrutura mínima, permitindo maior criatividade. Estes contextos favorecem a inovação e autonomia no trabalho diário.",
        medium: "Valoriza ambientes organizados, mas que permitam algum grau de liberdade criativa. Este equilíbrio entre estrutura e flexibilidade garante qualidade e estimula ideias inovadoras.",
        high: "Prefere trabalhar em ambientes organizados, com processos claros e foco em qualidade e precisão. Estes cenários asseguram que o trabalho seja realizado com eficiência e excelência.",
        veryHigh: "Exige ambientes rigorosamente estruturados, com elevados padrões de qualidade e análises detalhadas. Estes contextos permitem aplicar rigor técnico e entregar resultados fiáveis."
    }
};

const motivatorsByDimension = {
    "D": [
        "Ambientes desafiadores e dinâmicos que promovem a superação de metas e objetivos. Estes cenários alimentam a necessidade de vencer obstáculos e destacar-se pelo desempenho.",
        "Oportunidades para liderar equipas e tomar decisões importantes que afetam diretamente os resultados. Este papel reforça o senso de propósito e realização pessoal.",
        "Reconhecimento pelos resultados alcançados, através de feedback positivo e recompensas tangíveis. Este tipo de valorização reforça a motivação e a confiança.",
        "Metas claras e concretas que definem um propósito claro no trabalho, permitindo-lhe focar em atingir resultados de forma eficaz.",
        "Autonomia para inovar, agir e tomar decisões sem restrições excessivas. Esta liberdade é essencial para maximizar o desempenho e a criatividade."
    ],
    "I": [
        "Interação frequente com outras pessoas, promovendo uma atmosfera de energia e entusiasmo. Este tipo de ambiente mantém a motivação elevada.",
        "Ambientes energéticos e criativos que incentivam a geração de novas ideias e abordagens inovadoras para os desafios.",
        "Oportunidades para inspirar e persuadir os outros, seja através de liderança ou de partilha de ideias. Este papel reforça a autoconfiança e o entusiasmo.",
        "Reconhecimento por ideias inovadoras e contribuições criativas. Este tipo de valorização promove um forte senso de pertença e realização.",
        "Projetos colaborativos e dinâmicos que promovem a troca de ideias e o trabalho em equipa. Estes contextos favorecem a criatividade e o crescimento coletivo."
    ],
    "S": [
        "Ambientes tranquilos e previsíveis que permitem concentrar-se no trabalho sem interrupções inesperadas ou mudanças bruscas.",
        "Relações estáveis e de confiança com colegas e líderes, proporcionando um senso de segurança e conforto no dia a dia.",
        "Trabalho em equipa colaborativo, onde o apoio mútuo seja uma constante. Este tipo de ambiente promove um forte senso de pertença.",
        "Suporte de líderes e colegas em situações desafiadoras, garantindo que os obstáculos possam ser superados com confiança.",
        "Rotinas consistentes e bem definidas que oferecem previsibilidade e reduzem o stress associado a mudanças frequentes."
    ],
    "C": [
        "Estrutura e regras claras que definem expectativas e orientam o trabalho com precisão. Este tipo de ambiente promove a segurança e a confiança.",
        "Foco em qualidade e precisão, permitindo o desenvolvimento de soluções de excelência técnica e atenção ao detalhe.",
        "Ambientes organizados e estruturados, que promovem eficiência e evitam confusões ou ambiguidades.",
        "Reconhecimento por excelência técnica e contribuições detalhadas. Este tipo de valorização reforça a confiança nas suas competências.",
        "Soluções baseadas em análises detalhadas que garantem resultados sólidos e fundamentados. Este enfoque promove a confiança na tomada de decisões."
    ]
};

const demotivatorsByDimension = {
    "D": [
        "Ambientes sem desafios ou objetivos claros, onde o potencial para realizar grandes conquistas é limitado. A falta de dinamismo reduz a motivação e o interesse.",
        "Excesso de supervisão ou controle que restringe a capacidade de tomar decisões de forma autónoma. Este tipo de ambiente gera frustração e desmotivação.",
        "Falta de autonomia para inovar e implementar mudanças. Cenários que limitam a criatividade impedem o pleno desenvolvimento profissional.",
        "Tarefas repetitivas e sem propósito que não oferecem um senso de progressão ou conquista. Este tipo de trabalho diminui o entusiasmo.",
        "Ambientes que desencorajam a inovação e a busca por soluções criativas, bloqueando o desejo de superação."
    ],
    "I": [
        "Falta de interação social ou colaboração, criando um sentimento de isolamento e reduzindo o entusiasmo no trabalho.",
        "Ausência de reconhecimento por ideias e contribuições criativas, resultando em uma sensação de desvalorização.",
        "Trabalho isolado por longos períodos, que restringe a troca de ideias e diminui a energia criativa.",
        "Ambientes altamente rígidos e estruturados, que limitam a espontaneidade e a capacidade de expressão pessoal.",
        "Poucas oportunidades para inspirar, persuadir ou participar de projetos dinâmicos. Este tipo de limitação enfraquece o entusiasmo e a motivação."
    ],
    "S": [
        "Mudanças frequentes ou inesperadas, que criam um sentimento de insegurança e dificultam a adaptação.",
        "Ambientes com conflitos constantes, que geram stress e prejudicam a produtividade.",
        "Falta de suporte de colegas ou líderes, criando um sentimento de isolamento e desconfiança.",
        "Pressão excessiva para resultados imediatos, que interfere no ritmo de trabalho e aumenta o stress.",
        "Ambientes competitivos e agressivos, que reduzem a sensação de conforto e estabilidade."
    ],
    "C": [
        "Falta de clareza nas expectativas ou tarefas, criando confusão e dificultando o foco no trabalho.",
        "Ambientes desorganizados ou sem estrutura, que prejudicam a eficiência e a precisão do trabalho realizado.",
        "Pressão para decisões rápidas e impulsivas, que não permitem análises detalhadas ou bem fundamentadas.",
        "Tarefas sem critérios de qualidade definidos, que comprometem o rigor e os padrões técnicos.",
        "Pouca valorização de padrões e processos, gerando frustração pela falta de atenção ao detalhe e à excelência."
    ]
};

export { workEnvironmentTexts, motivatorsByDimension, demotivatorsByDimension }
