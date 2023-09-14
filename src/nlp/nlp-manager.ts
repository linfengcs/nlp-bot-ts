import fs from 'fs';
import { BuiltinMicrosoft } from '@nlpjs/builtin-microsoft';
import { BuiltinDuckling } from '@nlpjs/builtin-duckling';
import { containerBootstrap } from '@nlpjs/core-loader';
import Language from '@nlpjs/language';
import { LangAll } from '@nlpjs/lang-all';
import { Nlp } from '@nlpjs/nlp';
import { Evaluator, Template } from '@nlpjs/evaluator';
import { fs as requestfs } from '@nlpjs/request';
import { SentimentManager } from '../sentiment';
import NlpExcelReader from './nlp-excel-reader';

export interface NlpManag