declare module '@nlpjs/neural' {
    export interface NeuralNetworkOptions {
        activation?: string;
        iterations?: number;
        errorThresh?: number;
        log?: boolean;
        logPeriod?: number;
        learningRate?: number;
        momentum?: number;
        callbackPeriod?: number;
        timeout?: number;
        prax