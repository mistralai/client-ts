import { SDKOptions } from "../lib/config.js";
import { ClientSDK } from "../lib/sdks.js";
import { Chat } from "./chat.js";
import { Ocr } from "./ocr.js";

export type AzureOptions = {
    /** Your AzureAI Endpoint for more information see https://docs.mistral.ai/deployment/cloud/azure/ */
    endpoint: string;
    /** Your AzureAI API Key for more information see https://docs.mistral.ai/deployment/cloud/azure/ */
    apiKey: string;
};

export class MistralAzure extends ClientSDK {
    constructor(options: SDKOptions & AzureOptions) {
      options.serverURL = options.endpoint;
      if (!options.serverURL.endsWith("/")) {
        options.serverURL = `${options.serverURL}/`;
      }
      if (!options.serverURL.endsWith("v1/")) {
        options.serverURL = `${options.serverURL}v1/`;
      }
      super(options);
    }

    private _chat?: Chat;
    get chat(): Chat {
        return (this._chat ??= new Chat(this._options));
    }

    private _ocr?: Ocr;
    get ocr(): Ocr {
        return (this._ocr ??= new Ocr(this._options));
    }
}
