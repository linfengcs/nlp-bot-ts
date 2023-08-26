import { XDoc } from '@nlpjs/xtables';
import NlpManager from './nlp-manager';

class NlpExcelReader {
  private manager: NlpManager;
  private xdoc: XDoc;

  constructor(manager: NlpManager) {
    this.manager = manager;
    this.xdoc = new XDoc();
  }

  load(filename: string): void {
    this.xdoc.read(filename);
    this.loadSettings();
    this.loadLanguages();
    this.loadNamedEntities();
    this.loadRegexEntities();
    this.loadIntents();
    this.loadResponses();
  }

  loadSettings(): void {}

  loadLanguages(): void {
    const rows: Record<string, string>[] = this.xdoc.getTable('Languages').data;
    rows.forEach((row: Record<string, string>) => {
      this.manager.addLanguage(row.iso2);
    });
  }

  loadNamedEntities(): void {
    const rows: Record<string, string>[] = this.xdoc.getTable('Named Entities').data;
    rows.forEach((row: Record<string, string>) => {
      const languages = row.language.split(',').map((x) => x.trim());
      this.manager.addNamedEntityText(row.entity, row.option, languages, [row.text]);
    });
  }

  loadRegexEntities(): void {
    const table = this.xdoc.getTable('Regex Entities');
    if (tab