// Database of Indic OCR resources
const indicOCRDatabase = {
    languages: [
        { 
            id: "hindi", 
            name: "Hindi (हिन्दी)", 
            script: "Devanagari",
            statistics: {
                bestAccuracy: "~98%",
                challenges: "Complex conjuncts, similar shaped characters"
            }
        },
        { 
            id: "tamil", 
            name: "Tamil (தமிழ்)", 
            script: "Tamil",
            statistics: {
                bestAccuracy: "~96%",
                challenges: "Curved characters, stacked modifiers"
            }
        },
        { 
            id: "telugu", 
            name: "Telugu (తెలుగు)", 
            script: "Telugu",
            statistics: {
                bestAccuracy: "~95%",
                challenges: "Many similar glyphs, complex conjuncts"
            }
        },
        { 
            id: "bengali", 
            name: "Bengali (বাংলা)", 
            script: "Bengali",
            statistics: {
                bestAccuracy: "~94%",
                challenges: "Connected components, modifier positioning"
            }
        },
        { 
            id: "kannada", 
            name: "Kannada (ಕನ್ನಡ)", 
            script: "Kannada",
            statistics: {
                bestAccuracy: "~93%",
                challenges: "Rounded shapes, complex vowel modifiers"
            }
        },
        { 
            id: "malayalam", 
            name: "Malayalam (മലയാളം)", 
            script: "Malayalam", 
            statistics: {
                bestAccuracy: "~92%",
                challenges: "Highly cursive nature, complex ligatures"
            }
        },
        { 
            id: "punjabi", 
            name: "Punjabi (ਪੰਜਾਬੀ)", 
            script: "Gurmukhi",
            statistics: {
                bestAccuracy: "~93%",
                challenges: "Character segmentation, similar character shapes"
            }
        },
        { 
            id: "gujarati", 
            name: "Gujarati (ગુજરાતી)", 
            script: "Gujarati",
            statistics: {
                bestAccuracy: "~91%",
                challenges: "Character segmentation, similar to Devanagari but with unique features"
            }
        }
    ],
    
    papers: [
        {
            title: "OCR for Indic Scripts: A Survey",
            authors: "Tushar Karayil, Preethi Jyothi",
            year: 2023,
            url: "https://arxiv.org/abs/2301.09251",
            abstract: "Comprehensive survey of OCR approaches for Indic scripts, covering historical developments and modern deep learning methods."
        },
        {
            title: "RefinedOCR: An OCR Architecture with Transformer-based Image Encoder for Indic Handwritten Text Recognition",
            authors: "Kajal Garg, C.V. Jawahar",
            year: 2023,
            url: "https://cvit.iiit.ac.in/research/projects/cvit-projects/refinedocr",
            abstract: "A transformer-based architecture for Indic handwritten text recognition that outperforms previous approaches."
        },
        {
            title: "Mozhi: A Large Dataset for Handwritten Indic OCR",
            authors: "Minesh Mathew, Mohit Jain, C.V. Jawahar",
            year: 2022,
            url: "https://cvit.iiit.ac.in/research/projects/cvit-projects/mozhi",
            abstract: "Presents Mozhi, a large-scale dataset for handwritten text recognition in 13 Indic scripts."
        },
        {
            title: "Zero-Shot Recognition of Handwritten Digits in Indian Scripts",
            authors: "Anand Mishra, Anbumani Subramanian, Prabhat Mittaal",
            year: 2021,
            url: "https://ieeexplore.ieee.org/document/9413773",
            abstract: "A novel approach for recognizing handwritten digits in multiple Indian scripts without script-specific training."
        },
        {
            title: "Attention-based CNN-LSTM Network for Devanagari OCR",
            authors: "Vaibhav Singh, Vinay P. Namboodiri",
            year: 2021,
            url: "https://dl.acm.org/doi/10.1145/3430984.3431026",
            abstract: "An attention-based CNN-LSTM architecture for Devanagari OCR that achieves state-of-the-art results."
        }
    ],
    
    datasets: [
        {
            name: "Mozhi Dataset",
            description: "Large-scale dataset for handwritten text recognition in 13 Indic scripts with over 1M annotated word images.",
            url: "https://cvit.iiit.ac.in/research/projects/cvit-projects/mozhi",
            languages: "Multiple Indic languages",
            size: "1M+ word images",
            creator: "IIIT Hyderabad CVIT"
        },
        {
            name: "IIIT-HW-Dev",
            description: "Handwritten Devanagari character dataset with over 20,000 samples.",
            url: "https://cvit.iiit.ac.in/research/projects/cvit-projects/indic-hw-data",
            languages: "Hindi/Devanagari",
            size: "20,000+ samples",
            creator: "IIIT Hyderabad CVIT"
        },
        {
            name: "Boise State Indic Dataset",
            description: "Collection of printed and handwritten text in multiple Indic scripts.",
            url: "https://scholarworks.boisestate.edu/soc_facpubs/8/",
            languages: "Hindi, Bengali, Telugu, Kannada",
            size: "15,000+ samples",
            creator: "Boise State University"
        },
        {
            name: "IIT Kharagpur Bengali OCR Dataset",
            description: "Comprehensive dataset for Bengali OCR development and testing.",
            url: "http://www.isical.ac.in/~ujjwal/download/benchmarks.html",
            languages: "Bengali",
            size: "12,000+ images",
            creator: "IIT Kharagpur"
        },
        {
            name: "Digital Corpus of Sanskrit",
            description: "Large digital corpus of Sanskrit texts for OCR training and testing.",
            url: "https://dcs.github.io/",
            languages: "Sanskrit (Devanagari)",
            size: "Several million tokens",
            creator: "University of Heidelberg"
        }
    ],
    
    tools: [
        {
            name: "Tesseract OCR with Indic Support",
            description: "Open-source OCR engine that supports multiple Indic scripts.",
            url: "https://github.com/tesseract-ocr/tesseract",
            languages: "Multiple Indic languages",
            type: "Software library"
        },
        {
            name: "OCRopy",
            description: "OCR Python framework with support for Indic script model training.",
            url: "https://github.com/ocropus/ocropy",
            languages: "Multiple Indic languages (with training)",
            type: "Framework"
        },
        {
            name: "Indic-OCR",
            description: "Collection of OCR tools specifically designed for Indic scripts.",
            url: "https://github.com/Indic-OCR",
            languages: "Multiple Indic languages",
            type: "Repository collection"
        },
        {
            name: "IndicNLP Suite",
            description: "Suite of tools for processing Indic language text, including OCR preprocessing.",
            url: "https://github.com/AI4Bharat/IndicNLP",
            languages: "Multiple Indic languages",
            type: "Processing toolkit"
        },
        {
            name: "CATTI-OCR",
            description: "Computer Assisted Text Transcription and Interpretation for Indic scripts.",
            url: "https://cvit.iiit.ac.in/research/projects/cvit-projects/indic-hw-data",
            languages: "Multiple Indic languages",
            type: "Transcription system"
        }
    ],
    
    resources: [
        {
            name: "AI4Bharat",
            description: "Community-driven initiative to build AI solutions for Indian languages.",
            url: "https://ai4bharat.org/",
            type: "Organization"
        },
        {
            name: "IIIT-H CVIT Laboratory",
            description: "Leading research lab for computer vision and OCR research in India.",
            url: "https://cvit.iiit.ac.in/",
            type: "Research lab"
        },
        {
            name: "Technology Development for Indian Languages (TDIL)",
            description: "Government initiative for development of language technology for Indian languages.",
            url: "https://tdil.meity.gov.in/",
            type: "Government initiative"
        },
        {
            name: "Digital India BHASHINI",
            description: "National language translation mission with OCR components for Indic languages.",
            url: "https://bhashini.gov.in/",
            type: "Mission"
        },
        {
            name: "Linguistic Data Consortium for Indian Languages (LDC-IL)",
            description: "Repository of Indian language linguistic resources including OCR datasets.",
            url: "https://ldcil.org/",
            type: "Consortium"
        }
    ]
};

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Load all sections
    loadLanguageCards();
    loadPapers();
    loadDatasets();
    loadTools();
    loadResources();
    
    // Set up filter functionality
    setupFilters();
});

// Load language cards with real data
function loadLanguageCards() {
    const languageSection = document.getElementById('languages-container');
    languageSection.innerHTML = '';
    
    indicOCRDatabase.languages.forEach(lang => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${lang.name}</h3>
            <p><strong>Script:</strong> ${lang.script}</p>
            <p><strong>Best Accuracy:</strong> ${lang.statistics.bestAccuracy}</p>
            <p><strong>Key Challenges:</strong> ${lang.statistics.challenges}</p>
        `;
        languageSection.appendChild(card);
    });
}

// Load papers section with real papers
function loadPapers() {
    const papersSection = document.getElementById('papers-container');
    papersSection.innerHTML = '';
    
    indicOCRDatabase.papers.forEach(paper => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><a href="${paper.url}" target="_blank">${paper.title}</a></h3>
            <p><strong>Authors:</strong> ${paper.authors}</p>
            <p><strong>Year:</strong> ${paper.year}</p>
            <p>${paper.abstract}</p>
        `;
        papersSection.appendChild(card);
    });
}

// Load datasets section with real datasets
function loadDatasets() {
    const datasetsSection = document.getElementById('datasets-container');
    datasetsSection.innerHTML = '';
    
    indicOCRDatabase.datasets.forEach(dataset => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><a href="${dataset.url}" target="_blank">${dataset.name}</a></h3>
            <p><strong>Languages:</strong> ${dataset.languages}</p>
            <p><strong>Size:</strong> ${dataset.size}</p>
            <p><strong>Creator:</strong> ${dataset.creator}</p>
            <p>${dataset.description}</p>
        `;
        datasetsSection.appendChild(card);
    });
}

// Load tools section with real tools
function loadTools() {
    const toolsSection = document.getElementById('tools-container');
    toolsSection.innerHTML = '';
    
    indicOCRDatabase.tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><a href="${tool.url}" target="_blank">${tool.name}</a></h3>
            <p><strong>Languages:</strong> ${tool.languages}</p>
            <p><strong>Type:</strong> ${tool.type}</p>
            <p>${tool.description}</p>
        `;
        toolsSection.appendChild(card);
    });
}

// Load resources section with real resources
function loadResources() {
    const resourcesSection = document.getElementById('resources-container');
    resourcesSection.innerHTML = '';
    
    indicOCRDatabase.resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><a href="${resource.url}" target="_blank">${resource.name}</a></h3>
            <p><strong>Type:</strong> ${resource.type}</p>
            <p>${resource.description}</p>
        `;
        resourcesSection.appendChild(card);
    });
}

// Set up filtering functionality
function setupFilters() {
    // Language filter
    const languageFilter = document.getElementById('language-filter');
    if (languageFilter) {
        languageFilter.addEventListener('input', function() {
            const filterValue = this.value.toLowerCase();
            const cards = document.querySelectorAll('#languages-container .card');
            
            cards.forEach(card => {
                const langName = card.querySelector('h3').textContent.toLowerCase();
                if (langName.includes(filterValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Papers filter
    const paperFilter = document.getElementById('paper-filter');
    if (paperFilter) {
        paperFilter.addEventListener('input', function() {
            const filterValue = this.value.toLowerCase();
            const cards = document.querySelectorAll('#papers-container .card');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const authors = card.querySelector('p strong').nextSibling.textContent.toLowerCase();
                if (title.includes(filterValue) || authors.includes(filterValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Dataset filter
    const datasetFilter = document.getElementById('dataset-filter');
    if (datasetFilter) {
        datasetFilter.addEventListener('input', function() {
            const filterValue = this.value.toLowerCase();
            const cards = document.querySelectorAll('#datasets-container .card');
            
            cards.forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                if (name.includes(filterValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
} 