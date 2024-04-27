declare module '@nlpjs/xtables' {
    interface XDocTable {
        name: string;
        headers: string[];
        data: Record<string, string>[];
    }

    export class XTableUtils {
        static escapeCsv(value: string): string;
        static escapeTsv(value: string): string;
    }

    export class XTable {
        static CSV: string;
        static TSV: string;

        constructor();
        load(data: string,