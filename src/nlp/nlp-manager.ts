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

export interface NlpManagerSettings {
  container?: any
  languages?: string[]

  nlu?: {
    log?: boolean
  }
  ner?: {
    useDuckling?: boolean
    ducklingUrl?: string
    locale?: string
    threshold?: number
  }
  action?: {
    [key: string]: (params: any, context: any, result: any) => Promise<void> | void
  }
  settings?: any
  forceNER?: boolean
  processTransformer?: (result: any) => any
}

class NlpManager {
  private readonly settings: NlpManagerSettings;
  private container: any;
  private nlp: any;
  private sentimentManager: SentimentManager;

  constructor(settings: NlpManagerSettings) {
    this.settings = settings;
    if (!this.settings.container) {
      this.settings.container = containerBootstrap();
    }
    this.container = this.settings.container;
    this.container.registerConfiguration('ner', {
      entityPreffix: '%',
      entitySuffix: '%',
    });
    this.container.register('fs', requestfs);
    this.container.register('Language', Language, false);
    this.container.use(LangAll);
    this.container.use(Evaluator);
    this.container.use(Template);
    this.nlp = new Nlp(this.settings);
    this.sentimentManager = new SentimentManager();
    if (this.settings.ner) {
      if (this.settings.ner.ducklingUrl || this.settings.ner.useDuckling) {
        const builtin = new BuiltinDuckling(this.settings.ner);
        this.container.register('extract-builtin-??', builtin, true);
      } else {
        const builtin = new BuiltinMicrosoft(this.settings.ner);
        this.container.register('extract-builtin-??', builtin, true);
      }
    } else {
      const builtin = new BuiltinMicrosoft(this.settings.ner);
      this.container.register('extract-builtin-??', builtin, true);
    }
  }

  public addDocument(locale: string, utterance: string, intent: string) {
    return this.nlp.addDocument(locale, utterance, intent);
  }

  public removeDocument(locale: string, utterance: string, intent: string) {
    return this.nlp.removeDocument(locale, utterance, intent);
  }

  public addLanguage(locale: string) {
    return this.nlp.addLanguage(locale);
  }

  public removeLanguage(locale: string) {
    return this.nlp.removeLanguage(locale);
  }

  public assignDomain(locale: string, intent: string, domain: string) {
    return this.nlp.assignDomain(locale