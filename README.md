![](screenshots/nlplogo.png)
# NLP-bot-ts
![](https://github.com/linfengcs/nlp-bot-ts/actions/workflows/main.yml/badge.svg)
![](https://img.shields.io/npm/v/nlp-bot-ts.svg?style=flat)
![](https://img.shields.io/npm/dt/nlp-bot-ts.svg?style=flat)
![](https://img.shields.io/npm/l/nlp-bot-ts.svg?style=flat)

NLP-bot-ts is a natural language utility for nodejs. It provides:

- Language identification
- _Levenshtein_ distance calculation
- Substring search by _Levenshtein_ distance
- Stemmers and tokenizers
- Sentiment Analysis (with negation support)
- Named Entity Recognition
- Classifier for Natural Language Processing
- NLP Manager with multi-language support
- Support for 104 languages with BERT integration

![](screenshots/hybridbot.gif)

### TABLE OF CONTENTS

- [Installation](#installation)
- [Example of use](#example-of-use)
- [False Positives](#false-positives)
- [Log Training Progress](#log-training-progress)
- [Contributors](#contributors)
- [Who is behind it](#who-is-behind-it-)
- [License](#license)

## Installation

To use NLP-bot-ts in your Node app:

```bash
    npm install nlp-bot-ts
```

## Example of use

Refer to the folder [`/examples/02-qna-classic`](https://github.com/linfengcs/nlp-bot-ts/tree/master/examples/02-qna-classic) for an example.

It demonstrates how to train the bot and save the model to a file. When the bot starts again, the model is loaded instead of being trained again.