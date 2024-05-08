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

Here's a basic way to build your NLP from scratch:

```javascript
import { NlpManager } from 'nlp-bot-ts';

// Rest of the code
```

## False Positives

Visit [nlp.js documentation](https://github.com/axa-group/nlp.js).

## Contributors

[![Contributors](https://contributors-img.firebaseapp.com/image?repo=linfengcs/nlp-bot-ts)](https://github.com/linfengcs/nlp-bot-ts/graphs/contributors)

## Who is behind it?

This project was developed by AXA Group Operations Spain S.A. and is now maintained by linfengcs.

Contact us at [opensource@axa.com](mailto:opensource@axa.com)

## License

Copyright (c) AXA Group Operations Spain S.A.

Permission is granted (free of charge) to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The copyright notice and this permission notice should be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.