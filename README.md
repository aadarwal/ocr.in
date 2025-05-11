# Indic OCR Research Tracker

A comprehensive repository tracking the state of Optical Character Recognition (OCR) for Indic languages across the world. This static HTML site displays research papers, datasets, tools, and resources related to OCR for Indic languages.

## Project Structure

```
.
├── index.html         # Main HTML file
├── css/               # CSS stylesheets
│   └── styles.css     # Main stylesheet
├── js/                # JavaScript files
│   └── main.js        # Main JavaScript file
└── images/            # Image assets (to be added)
```

## Features

- **Language Tracking**: Monitors OCR accuracy, research papers, and datasets for all 22 scheduled Indian languages
- **Research Repository**: Lists the latest research papers with abstracts and relevant tags
- **Dataset Collection**: Catalogs available datasets for OCR training and testing
- **Tools Directory**: Displays available software and tools for Indic OCR
- **Resource Library**: Provides additional resources like conferences, research groups, and tutorials

## Development

This is a static HTML site that doesn't require a build step. Simply edit the HTML, CSS, and JavaScript files directly.

### Running Locally

To run the site locally, you can use a simple HTTP server:

1. Using Python:
   ```
   python -m http.server
   ```

2. Using Node.js:
   ```
   npx serve
   ```

## Deployment

The site is deployed at [ocr.fiercenerds.in](https://ocr.fiercenerds.in).

## Contributing

To contribute to this project:

1. Add new research papers by following the format in the "Latest Research" section
2. Add new datasets to the "Datasets & Corpora" section
3. Update tool information or add new tools to the "Tools & Software" section
4. Submit issues for any inaccuracies or suggestions

## Future Improvements

Planned enhancements for the site:

1. Add a search function to filter through research papers and datasets
2. Create individual pages for each language with detailed information
3. Implement a data-driven approach using JSON files for easier maintenance
4. Add a visualization dashboard showing OCR progress over time
5. Create a submission form for researchers to add their papers and datasets

## License

This project is open-source under the MIT License. 