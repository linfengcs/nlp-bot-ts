import { XDoc } from '@nlpjs/xtables';
import NlpManager from './nlp-manager';

class NlpExcelReader {
  private manager: NlpManager;
  private xdoc: XDoc;

  constructor(manager: NlpManager) {
    this.manager = manager;
    this.xdoc