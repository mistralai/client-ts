/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Agents } from "./agents.js";
import { Batch } from "./batch.js";
import { Beta } from "./beta.js";
import { Chat } from "./chat.js";
import { Classifiers } from "./classifiers.js";
import { Embeddings } from "./embeddings.js";
import { Files } from "./files.js";
import { Fim } from "./fim.js";
import { FineTuning } from "./finetuning.js";
import { Models } from "./models.js";
import { Ocr } from "./ocr.js";

export class Mistral extends ClientSDK {
  private _models?: Models;
  get models(): Models {
    return (this._models ??= new Models(this._options));
  }

  private _beta?: Beta;
  get beta(): Beta {
    return (this._beta ??= new Beta(this._options));
  }

  private _files?: Files;
  get files(): Files {
    return (this._files ??= new Files(this._options));
  }

  private _fineTuning?: FineTuning;
  get fineTuning(): FineTuning {
    return (this._fineTuning ??= new FineTuning(this._options));
  }

  private _batch?: Batch;
  get batch(): Batch {
    return (this._batch ??= new Batch(this._options));
  }

  private _chat?: Chat;
  get chat(): Chat {
    return (this._chat ??= new Chat(this._options));
  }

  private _fim?: Fim;
  get fim(): Fim {
    return (this._fim ??= new Fim(this._options));
  }

  private _agents?: Agents;
  get agents(): Agents {
    return (this._agents ??= new Agents(this._options));
  }

  private _embeddings?: Embeddings;
  get embeddings(): Embeddings {
    return (this._embeddings ??= new Embeddings(this._options));
  }

  private _classifiers?: Classifiers;
  get classifiers(): Classifiers {
    return (this._classifiers ??= new Classifiers(this._options));
  }

  private _ocr?: Ocr;
  get ocr(): Ocr {
    return (this._ocr ??= new Ocr(this._options));
  }
}
